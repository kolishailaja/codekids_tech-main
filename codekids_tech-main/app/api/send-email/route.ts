import { NextRequest, NextResponse } from 'next/server';
import { sendWithResend, sendWithNodemailer, sendWithSendGrid } from '@/lib/email-providers';

const RECIPIENT_EMAIL = 'codekidstech2025@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const emailData = await request.json();

    // Validate required fields
    if (!emailData.to || !emailData.subject || !emailData.html) {
      return NextResponse.json(
        { error: 'Missing required email fields' },
        { status: 400 }
      );
    }

    // Extract reply-to email from HTML or use a default
    const replyToMatch = emailData.html.match(/Email:\s*([^<\n]+)/);
    const replyTo = replyToMatch ? replyToMatch[1].trim() : emailData.from || 'noreply@codekids.tech';

    const emailPayload = {
      to: RECIPIENT_EMAIL,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text || emailData.html.replace(/<[^>]*>/g, ''),
      replyTo: replyTo,
    };

    // Option 1: Using Resend (Recommended - easiest setup)
    if (process.env.RESEND_API_KEY) {
      try {
        const result = await sendWithResend(emailPayload, process.env.RESEND_API_KEY);
        if (result.success) {
          return NextResponse.json({ 
            success: true, 
            message: 'Email sent successfully',
            id: (result as any).id 
          }, { status: 200 });
        }
        // If package not installed, fall through
      } catch (resendError: any) {
        console.error('Resend error:', resendError);
        // Fall through to next method
      }
    }

    // Option 2: Using Nodemailer with Gmail SMTP
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const result = await sendWithNodemailer(
          emailPayload,
          process.env.GMAIL_USER,
          process.env.GMAIL_APP_PASSWORD
        );
        if (result.success) {
          return NextResponse.json({ 
            success: true, 
            message: 'Email sent successfully to codekidstech2025@gmail.com' 
          }, { status: 200 });
        }
        // If package not installed, fall through
      } catch (nodemailerError: any) {
        console.error('Nodemailer error:', nodemailerError);
        // Fall through to logging
      }
    }

    // Option 3: Using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      try {
        const result = await sendWithSendGrid(emailPayload, process.env.SENDGRID_API_KEY);
        if (result.success) {
          return NextResponse.json({ 
            success: true, 
            message: 'Email sent successfully to codekidstech2025@gmail.com' 
          }, { status: 200 });
        }
        // If package not installed, fall through
      } catch (sendgridError) {
        console.error('SendGrid error:', sendgridError);
        // Fall through to logging
      }
    }

    // Fallback: Log email data (for development/testing)
    // In production, at least one email service should be configured
    console.log('📧 EMAIL TO BE SENT TO:', RECIPIENT_EMAIL);
    console.log('📧 SUBJECT:', emailData.subject);
    console.log('📧 TIMESTAMP:', new Date().toISOString());
    console.log('📧 EMAIL DATA (first 500 chars):', emailData.html.substring(0, 500));
    console.log('');
    console.log('⚠️  No email service configured. Please set up Resend, Nodemailer, or SendGrid.');
    console.log('📖 See EMAIL_SETUP.md for instructions.');
    console.log('');

    // Return success in development to allow testing
    // In production, you might want to return an error if no service is configured
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return NextResponse.json(
      { 
        success: isDevelopment, // Only true in dev mode
        message: isDevelopment 
          ? 'Email logged (no email service configured). See console for details.'
          : 'Email service not configured. Please contact administrator.',
        debug: isDevelopment ? {
          recipient: RECIPIENT_EMAIL,
          subject: emailData.subject,
          timestamp: new Date().toISOString(),
          note: 'Configure an email service in .env.local - see EMAIL_SETUP.md'
        } : undefined
      },
      { status: isDevelopment ? 200 : 503 }
    );

  } catch (error: any) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error while sending email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
