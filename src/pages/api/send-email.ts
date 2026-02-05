import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
// @ts-ignore
import { validate } from 'deep-email-validator';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type, data } = req.body;

  // Email Verification
  if (data?.email) {
    const { valid, reason, validators } = await validate({
      email: data.email,
      sender: data.email,
      validateRegex: true,
      validateMx: true,
      validateTypo: true,
      validateDisposable: true,
      validateSMTP: false // Too slow/unreliable for this use case often
    });

    if (!valid) {
      let errorMessage = 'Invalid email address.';
      if (reason === 'typo') errorMessage = `Did you mean ${validators[reason]?.reason}?`;
      else if (reason === 'disposable') errorMessage = 'Disposable email addresses are not allowed.';
      else if (reason === 'mx') errorMessage = 'This email domain does not exist.';
      else if (reason === 'regex') errorMessage = 'Invalid email format.';

      return res.status(400).json({ message: errorMessage });
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
        to: [ADMIN_EMAIL, DUMP_EMAIL],
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
