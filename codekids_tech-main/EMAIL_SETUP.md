# Email Setup Guide

This document explains how to configure email sending for form submissions.

## Current Configuration

All form submissions are sent to: **codekidstech2025@gmail.com**

## Quick Setup (Choose One Method)

### Method 1: Resend (Easiest - Recommended)

1. **Sign up** at [https://resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Create `.env.local`** in the project root:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
4. **Install Resend**:
   ```bash
   npm install resend
   ```
5. **Done!** The API route will automatically use Resend.

**Note**: After domain verification, update the `from` address in `app/api/send-email/route.ts` to use your verified domain.

### Method 2: Gmail SMTP (Using Gmail Account)

1. **Enable 2-Step Verification** on your Gmail account
2. **Create an App Password**:
   - Go to: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Enter "CodeKids Website" and generate the password
3. **Create `.env.local`** in the project root:
   ```env
   GMAIL_USER=codekidstech2025@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   ```
4. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```
5. **Done!** The API route will automatically use Gmail SMTP.

### Method 3: SendGrid

1. **Sign up** at [https://sendgrid.com](https://sendgrid.com)
2. **Create API Key**:
   - Go to Settings → API Keys
   - Create a new API key with "Full Access" or "Mail Send" permissions
3. **Create `.env.local`** in the project root:
   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   ```
4. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```
5. **Done!** The API route will automatically use SendGrid.

## Email Service Options (Detailed)

The API route automatically detects which service is configured. Choose one of the following:

### Option 1: Resend (Recommended for Next.js)

1. Sign up at https://resend.com
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. Uncomment the Resend code in `app/api/send-email/route.ts`
5. Install Resend:
   ```bash
   npm install resend
   ```

### Option 2: SendGrid

1. Sign up at https://sendgrid.com
2. Create API key
3. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

4. Uncomment the SendGrid code in `app/api/send-email/route.ts`
5. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

### Option 3: Nodemailer with Gmail

1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Add to `.env.local`:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   ```

4. Uncomment the Nodemailer code in `app/api/send-email/route.ts`
5. Install Nodemailer:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

## Forms That Send Emails

1. **Contact Form** (`/contact`)
   - Sends to: codekidstech2025@gmail.com
   - Subject: Contact Form: [Subject] - [Name]
   - Includes: Name, Email, Phone, Subject, Message

2. **Pricing Request Form** (`/codekids-jr/pricing`)
   - Sends to: codekidstech2025@gmail.com
   - Subject: Pricing Request: [Role] - [Name] ([Mode])
   - Includes: Name, Role, Email, Phone, Class, Mode, City, Message

## Testing

Currently, emails are logged to the console in development mode. After configuring an email service, emails will be sent directly to codekidstech2025@gmail.com.

## Important Notes

- Never commit `.env.local` to version control
- Use environment variables for all sensitive credentials
- Test email sending in a staging environment first
- Monitor email delivery rates
- Consider rate limiting for production

