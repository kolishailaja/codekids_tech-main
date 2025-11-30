# 🚀 Deploy to Vercel - Your Complete Guide

## ✅ Your Setup

- **GitHub Repository:** https://github.com/kolishailaja/codekids_tech-main
- **GitHub Email:** shailajak369@gmail.com
- **Git Remote:** ✅ Already configured
- **Vercel CLI:** ✅ Installed (v46.1.0)
- **Build Status:** ✅ Successful

---

## 🎯 Step-by-Step Deployment

### Step 1: Complete Vercel Login (DO THIS NOW)

**In your terminal, you should see:**
```
? Log in to Vercel (Use arrow keys)
> Continue with GitHub  ← SELECT THIS ONE!
  Continue with Google
  Continue with Email
```

**Action:**
1. **Press Enter** (GitHub is already selected)
2. Browser will open for GitHub authorization
3. **Authorize Vercel** to access your GitHub account
4. Return to terminal - you'll see: `✅ Logged in as kolishailaja`

**Why GitHub?**
- ✅ Automatic deployments on every `git push`
- ✅ Preview URLs for pull requests
- ✅ Easy project linking
- ✅ Better integration

---

### Step 2: Deploy to Vercel

After login, run:

```powershell
cd codekids_tech-main
vercel
```

**Answer the prompts:**

1. **Set up and deploy?**
   - Type: `Y` and press Enter

2. **Which scope?**
   - Select: `kolishailaja` (your account)

3. **Link to existing project?**
   - Type: `N` (first deployment)

4. **What's your project's name?**
   - Type: `codekids-technologies` and press Enter

5. **In which directory is your code located?**
   - Type: `./` and press Enter

6. **Want to override the settings?**
   - Type: `N` (Vercel auto-detects Next.js)

**Expected output:**
```
🔍  Inspect: https://vercel.com/kolishailaja/codekids-technologies/...
✅  Production: https://codekids-technologies.vercel.app
```

---

### Step 3: Connect GitHub Repository (Recommended)

**This enables automatic deployments on every push!**

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click on: `codekids-technologies`

2. **Connect GitHub:**
   - Click **Settings** tab
   - Click **Git** in left sidebar
   - Click **Connect Git Repository**
   - Find: `kolishailaja/codekids_tech-main`
   - Click **Connect**

**Benefits:**
- ✅ Every `git push` → Auto-deploys
- ✅ Pull requests → Preview URLs
- ✅ Easy rollback
- ✅ Build logs in dashboard

---

### Step 4: Set Environment Variables (CRITICAL!)

**⚠️ Email won't work without these!**

1. **In Vercel Dashboard:**
   - Project: `codekids-technologies`
   - **Settings** → **Environment Variables**

2. **Add these 4 variables:**

   **Variable 1:**
   ```
   Key: GMAIL_USER
   Value: codekidstech2025@gmail.com
   Environments: ☑ Production ☑ Preview ☑ Development
   ```
   → Click **Save**

   **Variable 2:**
   ```
   Key: GMAIL_APP_PASSWORD
   Value: Reddy360@
   Environments: ☑ Production ☑ Preview ☑ Development
   ```
   → Click **Save**

   **Variable 3:**
   ```
   Key: RECIPIENT_EMAIL
   Value: codekidstech2025@gmail.com
   Environments: ☑ Production ☑ Preview ☑ Development
   ```
   → Click **Save**

   **Variable 4:**
   ```
   Key: NODE_ENV
   Value: production
   Environments: ☑ Production ☑ Preview ☑ Development
   ```
   → Click **Save**

3. **Redeploy after adding variables:**
   ```powershell
   vercel --prod
   ```

---

### Step 5: Deploy to Production

```powershell
vercel --prod
```

**Your site is now live!** 🎉

---

## 🌐 Your Live URLs

- **Production:** https://codekids-technologies.vercel.app
- **Preview:** https://codekids-technologies-xxxxx.vercel.app

---

## ✅ Test Your Live Site

Visit and test:

- [ ] `https://codekids-technologies.vercel.app/` - Home
- [ ] `https://codekids-technologies.vercel.app/codekids` - CodeKids
- [ ] `https://codekids-technologies.vercel.app/codekids-jr` - CodeKids Jr
- [ ] `https://codekids-technologies.vercel.app/codekids-pro` - CodeKids Pro
- [ ] `https://codekids-technologies.vercel.app/contact` - Contact (test email)

---

## 🔄 Automatic Deployments (After GitHub Connection)

Once connected, every push auto-deploys:

```powershell
git add .
git commit -m "Update website"
git push origin main
```

**Vercel will:**
- ✅ Detect the push
- ✅ Build automatically
- ✅ Deploy to production
- ✅ Send notification

---

## 🆘 Troubleshooting

### Login Issues
- **Browser blocked?** Allow pop-ups for vercel.com
- **Wrong account?** Run `vercel logout` then `vercel login`

### Build Fails
- Check logs in Vercel dashboard
- Verify `npm run build` works locally

### Environment Variables
- ✅ All 4 variables set?
- ✅ All environments selected?
- ✅ Redeploy after adding: `vercel --prod`

### Email Not Working
- Verify Gmail App Password (not regular password)
- Check Vercel function logs
- Test contact form

---

## 📝 Quick Commands

```powershell
# Login (use GitHub)
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod

# View deployments
vercel ls

# Open dashboard
vercel dashboard
```

---

## 🎉 Success!

**Your website:** https://codekids-technologies.vercel.app

**With GitHub connected:**
- Every push = automatic deployment
- Pull requests = preview URLs
- Full build logs in dashboard

---

## 🔗 Links

- **GitHub Repo:** https://github.com/kolishailaja/codekids_tech-main
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Live Site:** https://codekids-technologies.vercel.app

---

**Next Action:** Complete the login in your terminal (press Enter to select GitHub), then run `vercel`! 🔥




