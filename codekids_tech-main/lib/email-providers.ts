// Email provider wrappers to prevent build-time errors
// These functions only import email services when needed at runtime
// Using Function() constructor to prevent webpack from analyzing imports

export async function sendWithResend(emailData: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}, apiKey: string) {
  try {
    // Use dynamic import with webpackIgnore comment to prevent build-time resolution
    // @ts-ignore - Optional dependency, loaded at runtime
    const resendModule = await new Function('return import("resend")')().catch(() => null);
    if (!resendModule || !resendModule.Resend) {
      return { success: false, error: 'Resend package not installed' };
    }
    const { Resend } = resendModule;
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'CodeKids Technologies <onboarding@resend.dev>',
      to: emailData.to,
      replyTo: emailData.replyTo,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
    });
    if (error) throw error;
    return { success: true, id: data?.id };
  } catch (error: any) {
    if (error?.code === 'MODULE_NOT_FOUND' || error?.message?.includes('Cannot find module')) {
      return { success: false, error: 'Resend package not installed' };
    }
    throw error;
  }
}

export async function sendWithNodemailer(emailData: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}, gmailUser: string, gmailPassword: string) {
  try {
    // Use dynamic import with Function constructor to prevent webpack analysis
    // @ts-ignore - Optional dependency, loaded at runtime
    const nodemailerModule = await new Function('return import("nodemailer")')().catch(() => null);
    if (!nodemailerModule) {
      return { success: false, error: 'Nodemailer package not installed' };
    }
    const nodemailer = nodemailerModule.default || nodemailerModule;
    const createTransport = nodemailer.createTransport || nodemailer.default?.createTransport;
    if (!createTransport) {
      return { success: false, error: 'Nodemailer transporter not available' };
    }
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });
    await transporter.sendMail({
      from: `CodeKids Technologies <${gmailUser}>`,
      to: emailData.to,
      replyTo: emailData.replyTo,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
    });
    return { success: true };
  } catch (error: any) {
    if (error?.code === 'MODULE_NOT_FOUND' || error?.message?.includes('Cannot find module')) {
      return { success: false, error: 'Nodemailer package not installed' };
    }
    throw error;
  }
}

export async function sendWithSendGrid(emailData: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}, apiKey: string) {
  try {
    // Use dynamic import with Function constructor to prevent webpack analysis
    // @ts-ignore - Optional dependency, loaded at runtime
    const sgMailModule = await new Function('return import("@sendgrid/mail")')().catch(() => null);
    if (!sgMailModule) {
      return { success: false, error: 'SendGrid package not installed' };
    }
    const sgMail = sgMailModule.default || sgMailModule;
    sgMail.setApiKey(apiKey);
    await sgMail.send({
      to: emailData.to,
      from: 'noreply@codekids.tech',
      replyTo: emailData.replyTo,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
    });
    return { success: true };
  } catch (error: any) {
    if (error?.code === 'MODULE_NOT_FOUND' || error?.message?.includes('Cannot find module')) {
      return { success: false, error: 'SendGrid package not installed' };
    }
    throw error;
  }
}

