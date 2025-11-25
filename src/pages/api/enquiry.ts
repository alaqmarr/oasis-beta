import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { generateAdminEmail, generateCustomerEmail } from '../../utils/emailTemplates';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, subject, message, page, productImage, relatedProducts } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Create a transporter using Google SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alaqmarak0810@gmail.com',
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 1. Send Admin Email
    await transporter.sendMail({
      from: `"Oasis Website" <${email}>`, // Shows as from the user's email (spoofed header, might go to spam but useful for reply-to)
      replyTo: email,
      to: 'alaqmarak0810@gmail.com',
      subject: `New Enquiry: ${subject || 'General Enquiry'}`,
      html: generateAdminEmail({ email, subject, message, page, productImage }),
    });

    // 2. Send Customer Auto-Reply
    await transporter.sendMail({
      from: '"Oasis Group" <alaqmarak0810@gmail.com>',
      to: email,
      subject: `We received your enquiry: ${subject || 'General Enquiry'}`,
      html: generateCustomerEmail({ subject: subject || 'General Enquiry', productImage, relatedProducts }),
    });

    res.status(200).json({ message: 'Enquiry sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: (error as Error).message });
  }
}
