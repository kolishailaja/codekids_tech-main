# Form Submission Email Setup

## ✅ Configuration Complete

All form submissions are now configured to be sent to: **codekidstech2025@gmail.com**

## Forms Integrated

1. **Contact Form** (`/contact`)
   - Sends formatted email to codekidstech2025@gmail.com
   - Includes: Name, Email, Phone, Subject, Message
   - Subject format: "Contact Form: [Subject] - [Name]"

2. **Pricing Request Form** (`/codekids-jr/pricing`)
   - Sends formatted email to codekidstech2025@gmail.com
   - Includes: Name, Role, Email, Phone, Class, Mode, City, Message
   - Subject format: "Pricing Request: [Role] - [Name] ([Mode])"

## Email Service Setup

The system supports multiple email services. Choose **ONE** method:

### Quick Setup - Option 1: Resend (Easiest)

1. Sign up at https://resend.com (free tier available)
2. Get API key from dashboard
3. Create `.env.local` file in project root:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Install: `npm install resend`
5. Restart dev server

### Quick Setup - Option 2: Gmail SMTP

1. Enable 2-Step Verification on codekidstech2025@gmail.com
2. Create App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and generate password
3. Create `.env.local` file:
   ```env
   GMAIL_USER=codekidstech2025@gmail.com
   GMAIL_APP_PASSWORD=your_16_char_app_password
   ```
4. Install: `npm install nodemailer @types/nodemailer`
5. Restart dev server

### Quick Setup - Option 3: SendGrid

1. Sign up at https://sendgrid.com (free tier available)
2. Create API key in dashboard
3. Create `.env.local` file:
   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   ```
4. Install: `npm install @sendgrid/mail`
5. Restart dev server

## How It Works

1. User submits form → Form validates data
2. Form calls `/api/send-email` endpoint
3. API route automatically detects configured email service
4. Email is formatted with HTML template
5. Email is sent to codekidstech2025@gmail.com
6. User sees success/error message

## Email Templates

- **Professional HTML formatting** with brand colors
- **Mobile-responsive** email design
- **All form fields** clearly displayed
- **Reply-to** set to user's email
- **Timestamp** included in email

## Testing

1. Fill out any form on the website
2. Submit the form
3. Check codekidstech2025@gmail.com inbox
4. Verify email contains all submitted data

## Troubleshooting

- **Emails not sending?** Check console for errors
- **Service not detected?** Verify `.env.local` file exists and contains correct keys
- **Still not working?** Check EMAIL_SETUP.md for detailed instructions

## Important Notes

- `.env.local` file should NEVER be committed to git
- Test in development mode first
- Monitor email delivery rates
- Reply-to is automatically set to user's email for easy responses

