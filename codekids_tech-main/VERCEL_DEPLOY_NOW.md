# 🚀 Deploy to Vercel - Step by Step Guide

## ✅ Pre-Deployment Checklist

- ✅ Vercel CLI installed (v46.1.0)
- ✅ Build successful
- ✅ All routes working
- ✅ Ready to deploy!

---

## 🎯 Step-by-Step Deployment

### Step 1: Login to Vercel

Run this command:

```bash
vercel login
```

**What happens:**
- A browser window will open
- Choose your login method (GitHub, Google, or Email)
- Complete authentication
- Return to terminal

**Expected output:**
```
Vercel CLI 46.1.0
? Log in to Vercel
> Continue with GitHub
  Continue with Google
  Continue with Email
```

---

### Step 2: Navigate to Project Directory

```bash
cd codekids_tech-main
```

---

### Step 3: Deploy to Vercel

Run:

```bash
vercel
```

**Answer the prompts:**

1. **Set up and deploy "C:\Users\LENOVO\Downloads\codekids_tech-main\codekids_tech-main"?**
   - Type: `Y` and press Enter

2. **Which scope do you want to deploy to?**
   - Select: Your account name (use arrow keys, then Enter)

3. **Link to existing project?**
   - Type: `N` (for first deployment) and press Enter

4. **What's your project's name?**
   - Type: `codekids-technologies` (or your preferred name) and press Enter

5. **In which directory is your code located?**
   - Type: `./` and press Enter

**Vercel will then:**
- ✅ Auto-detect Next.js
- ✅ Install dependencies
- ✅ Build your project
- ✅ Deploy to a preview URL

---

### Step 4: Set Environment Variables

**IMPORTANT:** After first deployment, you MUST set environment variables for email to work.

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click on your project (`codekids-technologies`)

2. **Navigate to Settings:**
   - Click **Settings** in the top menu
   - Click **Environment Variables** in the left sidebar

3. **Add Environment Variables:**

   Click **Add New** and add these one by one:

   **Variable 1:**
   - Key: `GMAIL_USER`
   - Value: `codekidstech2025@gmail.com`
   - Environment: Select all (Production, Preview, Development)

   **Variable 2:**
   - Key: `GMAIL_APP_PASSWORD`
   - Value: `Reddy360@`
   - Environment: Select all (Production, Preview, Development)

   **Variable 3:**
   - Key: `RECIPIENT_EMAIL`
   - Value: `codekidstech2025@gmail.com`
   - Environment: Select all (Production, Preview, Development)

   **Variable 4:**
   - Key: `NODE_ENV`
   - Value: `production`
   - Environment: Select all (Production, Preview, Development)

4. **Save each variable** by clicking **Save**

---

### Step 5: Deploy to Production

After setting environment variables, deploy to production:

```bash
vercel --prod
```

This will:
- Build the production version
- Deploy to your production URL
- Make your site live!

---

## 🌐 Your Live URLs

After deployment, you'll get:

- **Preview URL:** `https://codekids-technologies-xxxxx.vercel.app`
- **Production URL:** `https://codekids-technologies.vercel.app`

---

## ✅ Post-Deployment Testing

Test these URLs:

- [ ] `https://your-domain.vercel.app/` - Home page
- [ ] `https://your-domain.vercel.app/codekids` - CodeKids overview
- [ ] `https://your-domain.vercel.app/codekids-jr` - CodeKids Jr
- [ ] `https://your-domain.vercel.app/codekids-pro` - CodeKids Pro
- [ ] `https://your-domain.vercel.app/contact` - Contact form (test email)

---

## 🆘 Troubleshooting

### Login Fails
- Make sure browser allows pop-ups
- Try different login method
- Check internet connection

### Build Fails
- Check Vercel build logs in dashboard
- Verify `npm run build` works locally
- Check for TypeScript errors

### Environment Variables Not Working
- Verify variables are set in Vercel dashboard
- Check variable names match exactly (case-sensitive)
- Redeploy after adding variables: `vercel --prod`

### Email Not Sending
- Verify Gmail App Password is correct
- Check Vercel function logs
- May need Gmail App Password instead of regular password

---

## 🎉 Success!

Once deployed, your website will be live at:
`https://codekids-technologies.vercel.app`

**Congratulations! Your CodeKids Technologies website is now live!** 🚀

---

## 📝 Quick Commands Reference

```bash
# Login
vercel login

# Deploy (preview)
vercel

# Deploy (production)
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs

# Open dashboard
vercel dashboard
```

---

**Ready?** Start with `vercel login`! 🔥




