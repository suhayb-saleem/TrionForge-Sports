import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateInquiryPDF, InquiryData } from '@/lib/pdfGenerator';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, country, productLine, orderVolume, message } = body;

    // Validate required fields
    if (!name || !email || !company || !productLine || !orderVolume || !message) {
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

    const inquiryData: InquiryData = {
      name,
      email,
      company,
      country: country || 'N/A',
      productLine,
      orderVolume,
      message,
    };

    // 1. Generate PDF Report in-memory
    console.log('[Inquiry API] Generating PDF report...');
    const pdfBuffer = await generateInquiryPDF(inquiryData);
    console.log(`[Inquiry API] PDF successfully generated (${pdfBuffer.length} bytes)`);

    const resend = new Resend(resendApiKey);
    const companyEmail = 'sales@sialathletics.com';

    // Prepare Email templates
    const cleanCompanyFilename = company.replace(/[^a-zA-Z0-9]/g, '_');
    const attachmentFilename = `SIAL_Athletics_Inquiry_${cleanCompanyFilename}.pdf`;

    const salesEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eeeeee; border-top: 4px solid #E31B23;">
        <h2 style="color: #111111; margin-top: 0;">New B2B Lead Inquiry</h2>
        <p>A new custom manufacturing request has been submitted. Find the PDF specification sheet attached.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f9f9f9; border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold; width: 35%;">Client Name:</td>
            <td style="padding: 10px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Work Email:</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f9f9f9; border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Company Name:</td>
            <td style="padding: 10px;">${company}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Country / Region:</td>
            <td style="padding: 10px;">${country || 'N/A'}</td>
          </tr>
          <tr style="background-color: #f9f9f9; border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Product Line:</td>
            <td style="padding: 10px; text-transform: capitalize;">${productLine}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 10px; font-weight: bold;">Order Volume (MOQ):</td>
            <td style="padding: 10px;">${orderVolume}</td>
          </tr>
        </table>
        
        <h3 style="margin-top: 20px; color: #111111;">Project Details / Message:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border: 1px solid #eeeeee; white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #333333;">${message}</div>
        
        <div style="margin-top: 30px; font-size: 11px; color: #888888; border-top: 1px solid #eeeeee; padding-top: 10px;">
          SIAL Athletics lead capture automated email.
        </div>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eeeeee; border-top: 4px solid #E31B23;">
        <h2 style="color: #111111; margin-top: 0; font-size: 20px;">Thank You for Reaching Out to SIAL Athletics</h2>
        <p>Dear ${name},</p>
        <p>Thank you for submitting your custom equipment inquiry to SIAL Athletics. We are excited about the prospect of partnering with your brand.</p>
        <p>We have successfully compiled your project configurations. Your <strong>B2B Inquiry Report (PDF)</strong> is attached to this email for your records.</p>
        
        <p>Our product development and engineering team in Sialkot, along with our US sales representatives, will review your requirements and follow up within <strong>24 business hours</strong> with details on:</p>
        <ul style="line-height: 1.6; color: #333333;">
          <li>Factory-direct custom pricing sheets</li>
          <li>Arrangements for sample paddle/racket delivery</li>
          <li>Custom mold capability options</li>
        </ul>
        
        <p>If you have any immediate corrections or additional details, please reply directly to this email or write to us at <a href="mailto:${companyEmail}" style="color: #E31B23; text-decoration: none; font-weight: bold;">${companyEmail}</a>.</p>
        
        <p style="margin-top: 30px; margin-bottom: 5px;">Best Regards,</p>
        <p style="font-weight: bold; margin: 0; color: #111111;">SIAL Athletics B2B Team</p>
        <p style="margin: 0; font-size: 13px; color: #666666;">Sialkot, Pakistan & USA</p>
        
        <div style="margin-top: 30px; font-size: 11px; color: #999999; border-top: 1px solid #eeeeee; padding-top: 15px; text-align: center;">
          © ${new Date().getFullYear()} SIAL Athletics. All rights reserved. <br/>
          <a href="https://www.sialathletics.com" style="color: #999999; text-decoration: underline;">www.sialathletics.com</a>
        </div>
      </div>
    `;

    const attachments = [
      {
        filename: attachmentFilename,
        content: pdfBuffer,
      },
    ];

    // 2. Send notification email to company inbox
    console.log('[Inquiry API] Dispatching notification to company...');
    const { error: salesError } = await resend.emails.send({
      from: 'Sia Athletics <sales@sialathletics.com>',
      to: companyEmail,
      replyTo: email,
      subject: `New B2B Lead: ${company} — ${productLine}`,
      html: salesEmailHtml,
      attachments,
    });

    if (salesError) {
      console.error('[Inquiry API] Error sending notification email to sales team:', salesError);
      return NextResponse.json(
        { success: false, error: 'Failed to send notification email.', details: salesError.message },
        { status: 500 }
      );
    }

    // 3. Send confirmation email to the client
    console.log('[Inquiry API] Dispatching confirmation to client...');
    const { error: clientError } = await resend.emails.send({
      from: 'Sia Athletics <sales@sialathletics.com>',
      to: email,
      replyTo: companyEmail,
      subject: `Your Inquiry Report & OEM Specifications — SIAL Athletics`,
      html: clientEmailHtml,
      attachments,
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
