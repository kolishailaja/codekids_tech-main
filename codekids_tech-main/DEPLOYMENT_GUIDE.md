# CodeKids Technologies - Deployment Guide

This guide will help you deploy the CodeKids Technologies application to production.

---

## Pre-Deployment Checklist

- [x] ✅ Build test passed
- [x] ✅ All routes working
- [x] ✅ TypeScript compilation successful
- [x] ✅ No linting errors
- [ ] ⚠️ Environment variables configured
- [ ] ⚠️ Email service configured
- [ ] ⚠️ Domain configured (if using custom domain)

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

#### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd codekids_tech-main
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set up project name
   - Configure build settings (auto-detected for Next.js)

5. **Set Environment Variables**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add the following:
     ```
     GMAIL_USER=codekidstech2025@gmail.com
     GMAIL_APP_PASSWORD=Reddy360@
     RECIPIENT_EMAIL=codekidstech2025@gmail.com
     NODE_ENV=production
     ```

6. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

#### Alternative: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Add environment variables in the dashboard
7. Click "Deploy"

---

### Option 2: Netlify

#### Steps:

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Create `netlify.toml`** (already created below)

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

5. **Set Environment Variables**:
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add the same variables as Vercel

---

### Option 3: AWS / Other Cloud Providers

For AWS, Azure, or other providers, you'll need to:
1. Build the application: `npm run build`
2. Use the `start` script: `npm start`
3. Configure environment variables
4. Set up reverse proxy (nginx) if needed

---

## Environment Variables Required

Create these in your deployment platform:

```env
# Email Configuration (Gmail SMTP)
GMAIL_USER=codekidstech2025@gmail.com
GMAIL_APP_PASSWORD=Reddy360@
RECIPIENT_EMAIL=codekidstech2025@gmail.com

# Environment
NODE_ENV=production

# Optional: If using other email services
# RESEND_API_KEY=your_resend_key
# SENDGRID_API_KEY=your_sendgrid_key
```

**⚠️ Important:** 
- Never commit `.env.local` to version control
- Use your deployment platform's environment variable settings
- For Gmail, you may need to use an App Password instead of regular password

---

## Build Configuration

The application is already configured for production:

- ✅ `next.config.js` optimized
- ✅ Image optimization enabled
- ✅ Compression enabled
- ✅ Console logs removed in production
- ✅ React Strict Mode enabled

---

## Post-Deployment Steps

1. **Verify Routes**:
   - Test: `https://your-domain.com/`
   - Test: `https://your-domain.com/codekids`
   - Test: `https://your-domain.com/codekids-jr`
   - Test: `https://your-domain.com/codekids-pro`

2. **Test Email Functionality**:
   - Submit a contact form
   - Verify email is received at `codekidstech2025@gmail.com`

3. **Check Performance**:
   - Use Google PageSpeed Insights
   - Check Lighthouse scores
   - Verify images are loading

4. **Monitor Errors**:
   - Check deployment logs
   - Monitor browser console for errors
   - Set up error tracking (optional: Sentry)

---

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run typecheck`

### Environment Variables Not Working
- Verify variables are set in deployment platform
- Check variable names match exactly
- Restart deployment after adding variables

### Email Not Sending
- Verify Gmail App Password is correct
- Check email service logs
- Test with different email provider if needed

### Images Not Loading
- Verify `images.pexels.com` is in `remotePatterns` in `next.config.js`
- Check image URLs are accessible
- Verify Next.js Image optimization is working

---

## Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `metadataBase` in `app/layout.tsx` if needed

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records
4. Update domain in settings

---

## Performance Optimization

The application includes:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Compression
- ✅ Static generation where possible

---

## Security Checklist

- [x] ✅ Environment variables not in code
- [x] ✅ `.env.local` in `.gitignore`
- [x] ✅ No sensitive data in client-side code
- [ ] ⚠️ Set up HTTPS (automatic on Vercel/Netlify)
- [ ] ⚠️ Configure CORS if needed
- [ ] ⚠️ Set up rate limiting for API routes

---

## Support

For deployment issues:
1. Check deployment logs
2. Verify build works locally: `npm run build`
3. Check environment variables
4. Review Next.js deployment docs: https://nextjs.org/docs/deployment

---

**Ready to deploy?** Choose your platform and follow the steps above!

