# 🔥 Firebase Deployment - Quick Start Guide

## ✅ Firebase Configuration Created

I've set up Firebase configuration files for you:
- ✅ `firebase.json` - Hosting configuration
- ✅ `.firebaserc` - Project configuration
- ✅ `FIREBASE_DEPLOYMENT.md` - Full deployment guide

---

## 🚀 Quick Deployment Steps

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

This opens your browser for authentication.

### Step 3: Initialize Firebase (First Time Only)

```bash
cd codekids_tech-main
firebase init
```

**Select:**
- ✅ Hosting
- Choose/create a Firebase project
- Public directory: `out`
- Single-page app: `Yes`
- GitHub auto-deploy: `No` (or Yes if you want)

### Step 4: Configure for Static Export

**Option A: Static Export (Simpler, but API routes won't work)**

1. Update `next.config.js` - Uncomment this line:
   ```javascript
   output: 'export',
   ```

2. Update images config:
   ```javascript
   images: {
     unoptimized: true, // Required for static export
   },
   ```

3. Build and deploy:
   ```bash
   npm run build:firebase
   firebase deploy --only hosting
   ```

**⚠️ Note:** With static export, your `/api/send-email` route won't work. You'll need to:
- Use a third-party email service (like EmailJS on the client side)
- Or deploy API routes separately to Cloud Functions

### Step 5: Deploy

```bash
# Build for Firebase
npm run build:firebase

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Or use the combined command
npm run deploy:firebase
```

---

## 🌐 Your Live URLs

After deployment:
- **Default URL:** `https://your-project-id.web.app`
- **Custom Domain:** Configure in Firebase Console

---

## ⚠️ Important: API Routes Limitation

**Firebase Hosting is static-only.** Your `/api/send-email` route won't work with static export.

### Solutions:

**Option 1: Use Cloud Functions (Recommended)**
- Deploy API routes as Firebase Cloud Functions
- More complex setup but full functionality

**Option 2: Use Client-Side Email Service**
- Use EmailJS or similar service
- Modify contact forms to use client-side API

**Option 3: Use Vercel Instead**
- Vercel supports Next.js API routes natively
- Easier deployment for Next.js apps
- See `QUICK_DEPLOY.md` for Vercel instructions

---

## 📝 Environment Variables

For Cloud Functions (if using):

```bash
firebase functions:config:set gmail.user="codekidstech2025@gmail.com"
firebase functions:config:set gmail.app_password="Reddy360@"
```

Or in Firebase Console:
1. Go to Functions → Configuration
2. Add environment variables

---

## ✅ Post-Deployment

Test these URLs:
- `https://your-project.web.app/`
- `https://your-project.web.app/codekids`
- `https://your-project.web.app/codekids-jr`

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Verify `output: 'export'` is uncommented in `next.config.js`
- Set `images.unoptimized: true`

### API Routes Not Working
- Expected with static export
- Use Cloud Functions or switch to Vercel

### Images Not Loading
- Ensure `images.unoptimized: true` in config
- Check image URLs are accessible

---

## 💡 Recommendation

**For Next.js with API routes, Vercel is easier:**
- ✅ Zero configuration
- ✅ API routes work automatically
- ✅ Better Next.js integration
- ✅ Free tier available

**Firebase is better if:**
- You need Firebase-specific features
- You're already using Firebase services
- You want to use Cloud Functions

---

## 📚 Full Documentation

See `FIREBASE_DEPLOYMENT.md` for complete guide with Cloud Functions setup.

---

**Ready?** Run `firebase login` to get started! 🔥

