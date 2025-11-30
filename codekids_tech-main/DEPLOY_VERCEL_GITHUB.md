# 🚀 Deploy to Vercel with GitHub - Complete Guide

## ✅ Your Information

- **GitHub Repository:** https://github.com/kolishailaja/codekids_tech-main
- **GitHub Email:** shailajak369@gmail.com
- **Project Status:** ✅ Ready to deploy!

---

## 🎯 Quick Deployment Steps

### Step 1: Login to Vercel with GitHub

**In your terminal, you should see the login prompt. Do this:**

1. **Select "Continue with GitHub"** (use arrow keys, then press Enter)
2. A browser window will open
3. **Authorize Vercel** to access your GitHub account
4. Return to terminal - you'll see: `✅ Logged in as [your-username]`

**Why GitHub login?**
- ✅ Automatic deployments on every push
- ✅ Preview deployments for pull requests
- ✅ Easy project linking
- ✅ Better integration with your codebase

---

### Step 2: Navigate to Project

```powershell
cd codekids_tech-main
```

---

### Step 3: Deploy to Vercel

Run:

```powershell
vercel
```

**Answer the prompts:**

1. **Set up and deploy "C:\Users\LENOVO\Downloads\codekids_tech-main\codekids_tech-main"?**
   - Type: `Y` and press Enter

2. **Which scope do you want to deploy to?**
   - Select: Your account (use arrow keys, then Enter)

3. **Link to existing project?**
   - Type: `N` (for first deployment) and press Enter

4. **What's your project's name?**
   - Type: `codekids-technologies` and press Enter
   - Or accept the default

5. **In which directory is your code located?**
   - Type: `./` and press Enter

6. **Want to override the settings?**
   - Type: `N` and press Enter (Vercel auto-detects Next.js)

**Vercel will:**
- ✅ Auto-detect Next.js framework
- ✅ Install dependencies
- ✅ Build your project
- ✅ Deploy to a preview URL

**You'll see:**
```
🔍  Inspect: https://vercel.com/your-account/codekids-technologies/...
✅  Production: https://codekids-technologies.vercel.app
```

---

### Step 4: Connect GitHub Repository (Recommended)

**This enables automatic deployments!**

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click on your project: `codekids-technologies`

2. **Connect GitHub:**
   - Click **Settings** tab
   - Click **Git** in the left sidebar
   - Click **Connect Git Repository**
   - Select: `kolishailaja/codekids_tech-main`
   - Click **Connect**

**Benefits:**
- ✅ Every `git push` automatically deploys
- ✅ Preview URLs for pull requests
- ✅ Rollback to previous deployments
- ✅ Better collaboration

---

### Step 5: Set Environment Variables (CRITICAL!)

**⚠️ Your email functionality won't work without these!**

1. **In Vercel Dashboard:**
   - Go to your project: `codekids-technologies`
   - Click **Settings** tab
   - Click **Environment Variables** in the left sidebar

2. **Add These Variables:**

   Click **Add New** for each:

   **Variable 1:**
   ```
   Key: GMAIL_USER
   Value: codekidstech2025@gmail.com
   Environment: ☑ Production ☑ Preview ☑ Development
   ```
   Click **Save**

   **Variable 2:**
   ```
   Key: GMAIL_APP_PASSWORD
   Value: Reddy360@
   Environment: ☑ Production ☑ Preview ☑ Development
   ```
   Click **Save**

   **Variable 3:**
   ```
   Key: RECIPIENT_EMAIL
   Value: codekidstech2025@gmail.com
   Environment: ☑ Production ☑ Preview ☑ Development
   ```
   Click **Save**

   **Variable 4:**
   ```
   Key: NODE_ENV
   Value: production
   Environment: ☑ Production ☑ Preview ☑ Development
   ```
   Click **Save**

3. **Important:** After adding variables, redeploy:
   ```powershell
   vercel --prod
   ```

---

### Step 6: Deploy to Production

```powershell
vercel --prod
```

This will:
- Build the production version
- Deploy to your production domain
- Make your site live!

---

## 🌐 Your Live URLs

After deployment:

- **Preview URL:** `https://codekids-technologies-xxxxx.vercel.app`
- **Production URL:** `https://codekids-technologies.vercel.app`

**With GitHub connected:**
- Every push to `main` branch → Auto-deploys to production
- Every pull request → Gets its own preview URL

---

## ✅ Post-Deployment Checklist

Test these pages:

- [ ] Home: `https://codekids-technologies.vercel.app/`
- [ ] CodeKids: `https://codekids-technologies.vercel.app/codekids`
- [ ] CodeKids Jr: `https://codekids-technologies.vercel.app/codekids-jr`
- [ ] CodeKids Pro: `https://codekids-technologies.vercel.app/codekids-pro`
- [ ] Contact: `https://codekids-technologies.vercel.app/contact` (test email)
- [ ] About: `https://codekids-technologies.vercel.app/about`

---

## 🔄 Automatic Deployments (After GitHub Connection)

Once connected to GitHub:

1. **Make changes locally:**
   ```powershell
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Vercel automatically:**
   - Detects the push
   - Builds your project
   - Deploys to production
   - Sends you a notification

3. **Check deployment:**
   - Go to Vercel Dashboard
   - See deployment status
   - View build logs

---

## 🆘 Troubleshooting

### Login Issues
- **Can't see GitHub option?** Make sure you're using the latest Vercel CLI
- **Authorization fails?** Check browser pop-up blocker
- **Wrong account?** Run `vercel logout` then `vercel login` again

### Build Fails
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Check for TypeScript errors: `npm run typecheck`

### Environment Variables Not Working
- ✅ Verify all 4 variables are set
- ✅ Check variable names match exactly (case-sensitive!)
- ✅ Make sure all environments are selected
- ✅ **Redeploy after adding:** `vercel --prod`

### Email Not Sending
- Verify Gmail App Password is correct
- Check Vercel function logs in dashboard
- Test contact form on live site
- Check spam folder

### GitHub Connection Issues
- Make sure repository is public or you've granted access
- Check Vercel has permission to access your repos
- Try disconnecting and reconnecting

---

## 📝 Quick Commands Reference

```powershell
# Login to Vercel (with GitHub)
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

# Link to existing project
vercel link

# Logout
vercel logout
```

---

## 🎉 Success!

Your website will be live at:
**https://codekids-technologies.vercel.app**

**With GitHub connected, every push = automatic deployment!** 🚀

---

## 💡 Pro Tips

1. **Custom Domain:** Add your own domain in Vercel Settings → Domains
2. **Analytics:** Enable Vercel Analytics to track visitors
3. **Preview Deployments:** Every PR gets its own preview URL
4. **Rollback:** Easily rollback to previous deployments in dashboard
5. **Team Collaboration:** Invite team members in Vercel settings

---

## 🔗 Useful Links

- **Your GitHub Repo:** https://github.com/kolishailaja/codekids_tech-main
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs

---

**Ready?** Complete the login in your terminal (select "Continue with GitHub"), then run `vercel`! 🔥




