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
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error('Missing required email credentials in environment variables');
}

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Custom error class for contact form errors
class ContactFormError extends Error {
  constructor(public userMessage: string, public technicalMessage: string) {
    super(technicalMessage);
    this.name = 'ContactFormError';
  }
}

export const sendContactEmail = onCall(async (request) => {
  try {
    const { name, email, phone, subject, message } = request.data;

    // Validate required fields with specific messages
    if (!name?.trim()) {
      throw new ContactFormError(
        'Please provide your name',
        'Name field is missing'
      );
    }
    if (!email?.trim()) {
      throw new ContactFormError(
        'Please provide your email address',
        'Email field is missing'
      );
    }
    if (!subject?.trim()) {
      throw new ContactFormError(
        'Please provide a subject',
        'Subject field is missing'
      );
    }
    if (!message?.trim()) {
      throw new ContactFormError(
        'Please provide a message',
        'Message field is missing'
      );
    }

    if (!validateEmail(email)) {
      throw new ContactFormError(
        'Please provide a valid email address',
        'Invalid email format'
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
      messageId: info.messageId,
      message: 'Thank you for your message. We will get back to you soon!' 
    };
  } catch (err: unknown) {
    // Type guard for our custom error
    if (err instanceof ContactFormError) {
      throw new Error(err.userMessage);
    }

    // Type guard for NodeMailer errors
    const error = err as { code?: string };
    console.error('Error:', err);

    if (error.code === 'EAUTH') {
      console.error('SMTP Authentication Error:', err);
      throw new Error('Unable to send email at this time. Please try again later.');
    }

    if (error.code === 'ESOCKET') {
      console.error('SMTP Connection Error:', err);
      throw new Error('Unable to connect to email server. Please try again later.');
    }

    // Generic error fallback
    throw new Error('An unexpected error occurred. Please try again later.');
  }
});
