import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required inquiry fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('[Inquiry API] RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const companyEmail = 'sales@sialathletics.com';

    // 1. Send notification email to company inbox
    console.log('[Inquiry API] Dispatching notification to company...');
    const salesEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eeeeee; border-top: 4px solid #E31B23;">
        <h2 style="color: #111111; margin-top: 0;">New Contact Form Submission</h2>
        <p>A new customer inquiry has been submitted from the website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f9f9f9; border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold; width: 35%;">Client Name:</td>
            <td style="padding: 10px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Email:</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f9f9f9; border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Phone:</td>
            <td style="padding: 10px;">${phone || 'Not Provided'}</td>
          </tr>
        </table>
        
        <h3 style="margin-top: 20px; color: #111111;">Message:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border: 1px solid #eeeeee; white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #333333;">${message}</div>
        
        <div style="margin-top: 30px; font-size: 11px; color: #888888; border-top: 1px solid #eeeeee; padding-top: 10px;">
          SIAL Athletics contact form lead capture.
        </div>
      </div>
    `;

    const { error: salesError } = await resend.emails.send({
      from: 'Sia Athletics <sales@sialathletics.com>',
      to: companyEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: salesEmailHtml,
    });

    if (salesError) {
      console.error('[Inquiry API] Error sending notification email to sales team:', salesError);
      return NextResponse.json(
        { success: false, error: 'Failed to send notification email.', details: salesError.message },
        { status: 500 }
      );
    }

    // 2. Send confirmation email to the client
    console.log('[Inquiry API] Dispatching confirmation to client...');
    const clientEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eeeeee; border-top: 4px solid #E31B23;">
        <h2 style="color: #111111; margin-top: 0; font-size: 20px;">Thanks for reaching out to Sia Athletics</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Sia Athletics. We have successfully received your message.</p>
        <p>Our team will review your inquiry and follow up with you within <strong>24 business hours</strong>.</p>
        
        <p>If you have any additional details to add, please reply directly to this email or write to us at <a href="mailto:${companyEmail}" style="color: #E31B23; text-decoration: none; font-weight: bold;">${companyEmail}</a>.</p>
        
        <p style="margin-top: 30px; margin-bottom: 5px;">Best Regards,</p>
        <p style="font-weight: bold; margin: 0; color: #111111;">Sia Athletics Team</p>
        <p style="margin: 0; font-size: 13px; color: #666666;">Sialkot, Pakistan & USA</p>
        
        <div style="margin-top: 30px; font-size: 11px; color: #999999; border-top: 1px solid #eeeeee; padding-top: 15px; text-align: center;">
          © ${new Date().getFullYear()} Sia Athletics. All rights reserved. <br/>
          <a href="https://www.sialathletics.com" style="color: #999999; text-decoration: underline;">www.sialathletics.com</a>
        </div>
      </div>
    `;

    const { error: clientError } = await resend.emails.send({
      from: 'Sia Athletics <sales@sialathletics.com>',
      to: email,
      subject: 'Thanks for reaching out to Sia Athletics',
      html: clientEmailHtml,
    });

    if (clientError) {
      console.error('[Inquiry API] Error sending confirmation email to client:', clientError);
      // We don't fail the whole request if the client confirmation fails, but we'll log it
    }

    console.log('[Inquiry API] Emails successfully processed.');

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Confirmation and notification emails sent successfully.',
    });
  } catch (error: any) {
    console.error('[Inquiry API ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
