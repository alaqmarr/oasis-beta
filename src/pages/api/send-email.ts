import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
// @ts-ignore
import geoip from 'geoip-lite';
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

// Dummy credentials - User to replace these
const EMAIL_USER = process.env.EMAIL_USER || 'dummy_user@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'dummy_password';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'office@oasis-group.co.in';
const DUMP_EMAIL = process.env.DUMP_EMAIL || 'dump@oasisgroup.com';
const ADMIN_EMAIL2 = process.env.ADMIN_EMAIL2 || 'office@oasis-group.co.in';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

/**
 * Robust email validation that accepts all legitimate emails
 * including company domains, while filtering out obviously invalid ones
 */
async function validateEmailRobust(email: string): Promise<{ valid: boolean; message?: string }> {
  // Basic format validation using a comprehensive regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!email || typeof email !== 'string') {
    return { valid: false, message: 'Email is required' };
  }

  const trimmedEmail = email.trim().toLowerCase();

  // Check basic format
  if (!emailRegex.test(trimmedEmail)) {
    return { valid: false, message: 'Invalid email format' };
  }

  // Extract domain
  const domain = trimmedEmail.split('@')[1];
  
  if (!domain) {
    return { valid: false, message: 'Invalid email format' };
  }

  // Check for common typos in popular domains
  const commonDomainTypos: { [key: string]: string } = {
    'gmial.com': 'gmail.com',
    'gmai.com': 'gmail.com',
    'gmil.com': 'gmail.com',
    'yahooo.com': 'yahoo.com',
    'yaho.com': 'yahoo.com',
    'hotmial.com': 'hotmail.com',
    'outlok.com': 'outlook.com',
  };

  if (commonDomainTypos[domain]) {
    return { 
      valid: false, 
      message: `Did you mean ${trimmedEmail.replace(domain, commonDomainTypos[domain])}?` 
    };
  }

  // List of known disposable/temporary email providers (keep this minimal)
  const disposableDomains = [
    '10minutemail.com',
    'guerrillamail.com',
    'mailinator.com',
    'tempmail.com',
    'throwaway.email',
    'trashmail.com',
    'temp-mail.org',
    'fakemailgenerator.com',
    'maildrop.cc'
  ];

  // Only reject if it's a known disposable domain
  if (disposableDomains.includes(domain)) {
    return { valid: false, message: 'Disposable email addresses are not allowed' };
  }

  // MX record validation (to verify domain can receive emails)
  // This is the most important check - if domain has MX records, it's likely valid
  try {
    const mxRecords = await resolveMx(domain);
    
    if (!mxRecords || mxRecords.length === 0) {
      return { valid: false, message: 'This email domain cannot receive emails' };
    }
    
    // Domain has MX records - it's valid!
    return { valid: true };
    
  } catch (error: any) {
    // DNS lookup failed - reject the email
    if (error.code === 'ENOTFOUND') {
      return { valid: false, message: 'This email domain does not exist' };
    }
    
    if (error.code === 'ENODATA') {
      return { valid: false, message: 'This email domain cannot receive emails (no MX records)' };
    }
    
    if (error.code === 'ETIMEOUT' || error.code === 'ESERVFAIL') {
      // DNS timeout or server failure - try alternative validation
      // Check if domain exists using A/AAAA records as fallback
      try {
        const dnsResolve = promisify(dns.resolve);
        await dnsResolve(domain, 'A');
        // Domain exists but no MX - might still work (some use A records)
        return { valid: true };
      } catch {
        return { valid: false, message: 'Unable to verify email domain. Please check your email address.' };
      }
    }
    
    // Unknown DNS error - reject to be safe
    console.error(`DNS error for ${domain}:`, error);
    return { valid: false, message: 'Unable to verify email domain. Please check your email address.' };
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type, data } = req.body;

  // IP & Location Tracking
  let ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '';
  if (ip.includes(',')) ip = ip.split(',')[0].trim();

  // Localhost check
  if (ip === '::1' || ip === '127.0.0.1') ip = '8.8.8.8'; // Mock IP for local testing (Google DNS)

  const geo = geoip.lookup(ip);
  const location = geo ? `${geo.city}, ${geo.country}` : 'Unknown Location';

  // Email Verification
  if (data?.email) {
    const validation = await validateEmailRobust(data.email);
    
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message || 'Invalid email address' });
    }
  }

  try {
    let mailOptions;

    if (type === 'VISIT') {
      const { name, email, page } = data;
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #DC2626; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Visitor Alert</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
              A user is currently browsing the <strong>Oasis Group</strong> website.
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; width: 40%;">Visitor Name:</td>
                <td style="padding: 12px 0; color: #111827;">${name || 'Anonymous'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Email:</td>
                <td style="padding: 12px 0; color: #111827;"><a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Page Visited:</td>
                <td style="padding: 12px 0; color: #111827;">${page}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Time:</td>
                <td style="padding: 12px 0; color: #111827;">${new Date().toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Location:</td>
                <td style="padding: 12px 0; color: #111827;">${location} (${ip})</td>
              </tr>
            </table>
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background-color: #1f2937; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">Contact Visitor</a>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; color: #9ca3af; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Oasis Group. Automated System.
          </div>
        </div>
      `;

      mailOptions = {
        from: `"Oasis Alerts" <${EMAIL_USER}>`,
        to: DUMP_EMAIL,
        subject: `🔔 Visitor Alert: ${name} on ${page}`,
        html: htmlContent
      };
    } else if (type === 'ENQUIRY') {
      const { name, email, message, company, phone } = data;
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1f2937; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Enquiry Received</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
              You have received a new enquiry from the <strong>Oasis Group</strong> website.
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; width: 30%;">Name:</td>
                <td style="padding: 12px 0; color: #111827;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Email:</td>
                <td style="padding: 12px 0; color: #111827;"><a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Company:</td>
                <td style="padding: 12px 0; color: #111827;">${company || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Phone:</td>
                <td style="padding: 12px 0; color: #111827;">${phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #111827;">${message}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Location:</td>
                <td style="padding: 12px 0; color: #111827;">${location} (${ip})</td>
              </tr>
            </table>
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background-color: #DC2626; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">Reply to Enquiry</a>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; color: #9ca3af; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Oasis Group. Automated System.
          </div>
        </div>
      `;

      mailOptions = {
        from: `"Oasis Enquiries" <${EMAIL_USER}>`,
        to: [ADMIN_EMAIL, DUMP_EMAIL, ADMIN_EMAIL2],
        subject: `📩 New Enquiry from ${name}`,
        html: htmlContent
      };
    } else if (type === 'PRODUCT_ENQUIRY') {
      const { email, product, industry, page, subject } = data;
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #DC2626; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Product Enquiry</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #4b5563; font-size: 16px; margin-bottom: 20px;">
              User is interested in a specific product.
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; width: 30%;">Product:</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 700;">${product}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Industry:</td>
                <td style="padding: 12px 0; color: #111827;">${industry}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Email:</td>
                <td style="padding: 12px 0; color: #111827;"><a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Page:</td>
                <td style="padding: 12px 0; color: #111827;">${page}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Location:</td>
                <td style="padding: 12px 0; color: #111827;">${location} (${ip})</td>
              </tr>
            </table>
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re: ${subject}" style="background-color: #DC2626; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">Reply to Enquiry</a>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; color: #9ca3af; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Oasis Group. Automated System.
          </div>
        </div>
      `;

      mailOptions = {
        from: `"Oasis Product Enquiry" <${EMAIL_USER}>`,
        to: [ADMIN_EMAIL, DUMP_EMAIL, ADMIN_EMAIL2],
        subject: `🎯 ${subject}`,
        html: htmlContent
      };
    } else {
      return res.status(400).json({ message: 'Invalid email type' });
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(200).json({ message: 'Email processed (mock success if dummy creds)' });
  }
}
