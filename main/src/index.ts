/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall, HttpsError} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onCall } from 'firebase-functions/v2/https';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'fernando@techpals.info',
    pass: process.env.EMAIL_PASS || 'Sengun123!'
  }
});

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const sendContactEmail = onCall(async (request) => {
  try {
    const { name, email, phone, subject, message } = request.data;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      throw new Error('Missing required fields');
    }

    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    const mailOptions = {
      from: 'fernando@techpals.info',
      to: 'fernando@techpals.info',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    return { 
      success: true, 
      messageId: info.messageId 
    };
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
  }
});
