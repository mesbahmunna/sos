import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, recaptchaToken, ...otherData } = data;

    // Enforce reCAPTCHA on the contact form (distinguished by having a 'message' field)
    if (otherData.message && !recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA token is missing.' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token if present
    if (recaptchaToken) {
      const secretKey = '6LeRM3YtAAAAAKFU9sSxuDCgUOnavJ65FsrYQZsT';
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

      try {
        const verifyRes = await fetch(verifyUrl, { method: 'POST' });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.json(
            { error: 'reCAPTCHA verification failed.' },
            { status: 400 }
          );
        }
      } catch (err) {
        console.error('reCAPTCHA validation error:', err);
        return NextResponse.json(
          { error: 'Failed to validate reCAPTCHA.' },
          { status: 500 }
        );
      }
    }

    // 1. Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@shareonsocial.agency',
        pass: 'aP5HbNN$jL8=',
      },
    });

    // Dynamically build the HTML for all submitted fields
    const formattedData = Object.entries(otherData)
      .filter(([key, value]) => value !== undefined && value !== '')
      .map(([key, value]) => {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        const formattedValue = Array.isArray(value) ? value.join(', ') : value;
        return `<p><strong>${formattedKey}:</strong> ${formattedValue}</p>`;
      })
      .join('');

    // 2. Email to the Admin
    const adminMailOptions = {
      from: '"Share On Social Contact Form" <info@shareonsocial.agency>',
      to: 'info@shareonsocial.agency',
      subject: `New Enquiry from ${name || 'Website Visitor'}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        ${formattedData}
      `,
    };

    // 3. Confirmation Email to the Visitor
    const visitorMailOptions = {
      from: '"Share On Social" <info@shareonsocial.agency>',
      to: email,
      subject: 'Thank you for reaching out to Share On Social!',
      html: `
        <h2>Hi ${name || 'there'},</h2>
        <p>Thank you for getting in touch with us! We have received your enquiry.</p>
        <p>Our team will review your details and get back to you as soon as possible.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Share On Social Team</strong></p>
      `,
    };

    // 4. Send both emails
    await transporter.sendMail(adminMailOptions);
    if (email) {
      await transporter.sendMail(visitorMailOptions);
    }

    return NextResponse.json(
      { message: 'Emails sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Failed to send emails. Please try again later.' },
      { status: 500 }
    );
  }
}
