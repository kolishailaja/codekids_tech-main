# 🔥 Firebase Deployment Guide - CodeKids Technologies

## Overview

This guide will help you deploy your Next.js application to Firebase Hosting with Cloud Functions for API routes.

---

## ⚠️ Important Notes

**Firebase Hosting Limitations:**
- Firebase Hosting is primarily for static sites
- Next.js API routes require Cloud Functions
- For full Next.js SSR support, consider Vercel (recommended for Next.js)

**Alternative Approach:**
- Option 1: Use Firebase Hosting + Cloud Functions (this guide)
- Option 2: Static export + separate API service
- Option 3: Use Vercel (easiest for Next.js)

---

## 📋 Prerequisites

1. **Node.js 18+** installed
2. **Firebase CLI** installed
3. **Firebase account** (free tier available)
4. **Firebase project** created

---

## 🚀 Step-by-Step Deployment

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

This will open your browser for authentication.

### Step 3: Initialize Firebase Project

```bash
cd codekids_tech-main
firebase init
```

**Follow the prompts:**

1. **Which Firebase features?** 
   - Select: `Hosting` and `Functions` (use spacebar to select, Enter to confirm)

2. **Select a default Firebase project**
   - Choose: `Create a new project` or select existing
   - Project ID: `codekids-technologies` (or your preferred name)

3. **What do you want to use as your public directory?**
   - Type: `out` (for static export) or `.next` (if using functions)

4. **Configure as a single-page app?**
   - Type: `Yes`

5. **Set up automatic builds and deploys with GitHub?**
   - Type: `No` (or Yes if you want CI/CD)

6. **What language would you like to use?**
   - Select: `TypeScript`

7. **Do you want to use ESLint?**
   - Type: `No` (or Yes if preferred)

8. **Do you want to install dependencies?**
   - Type: `Yes`

---

### Step 4: Configure Next.js for Firebase

Since your app uses API routes, we have two options:

#### Option A: Static Export (Simpler, but API routes won't work)

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
  },
  // ... rest of config
};
```

**Limitation:** API routes (`/api/send-email`) won't work with static export.

#### Option B: Use Cloud Functions for API Routes (Recommended)

Keep current `next.config.js` and deploy API routes as Cloud Functions.

---

### Step 5: Update firebase.json

The `firebase.json` file has been created. Verify it matches your setup.

---

### Step 6: Set Environment Variables

Set environment variables in Firebase:

```bash
firebase functions:config:set gmail.user="codekidstech2025@gmail.com"
firebase functions:config:set gmail.app_password="Reddy360@"
firebase functions:config:set recipient.email="codekidstech2025@gmail.com"
```

Or use Firebase Console:
1. Go to: https://console.firebase.google.com
2. Select your project
3. Go to **Functions** → **Configuration**
4. Add environment variables

---

### Step 7: Build the Application

```bash
npm run build
```

---

### Step 8: Deploy to Firebase

#### For Static Export (Option A):

```bash
# Build static export
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

#### For Functions + Hosting (Option B):

```bash
# Deploy everything
firebase deploy

# Or deploy separately
firebase deploy --only hosting
firebase deploy --only functions
```

---

## 🔧 Configuration Files Created

### firebase.json
- Hosting configuration
- Rewrites for API routes
- Cache headers for performance

### .firebaserc
- Project configuration
- Update with your Firebase project ID

---

## 📝 Update API Route for Firebase Functions

If using Cloud Functions, you may need to create a Firebase Function wrapper:

Create `functions/src/index.ts`:

```typescript
import * as functions from 'firebase-functions';
import { NextRequest } from 'next/server';

// This is a simplified example
// You'll need to adapt your API route handler
export const nextjsServer = functions.https.onRequest(async (req, res) => {
  // Handle API routes here
  // Adapt your /api/send-email route for Cloud Functions
});
```

---

## 🌐 Your Live URLs

After deployment:

- **Hosting URL:** `https://codekids-technologies.web.app`
- **Custom Domain:** Configure in Firebase Console → Hosting → Add custom domain

---

## ✅ Post-Deployment Checklist

- [ ] Test home page: `https://your-project.web.app/`
- [ ] Test `/codekids` route
- [ ] Test `/codekids-jr` route
- [ ] Test `/codekids-pro` route
- [ ] Test contact form (if API routes working)
- [ ] Verify images loading
- [ ] Check mobile responsiveness

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all dependencies installed
- Check Firebase CLI version: `firebase --version`

### API Routes Not Working
- Verify Cloud Functions are deployed
- Check function logs: `firebase functions:log`
- Verify environment variables are set

### Images Not Loading
- For static export, set `images.unoptimized: true`
- Verify image URLs are accessible
- Check Firebase Hosting cache settings

### Deployment Errors
- Check Firebase project permissions
- Verify billing is enabled (for Cloud Functions)
- Check function quotas in Firebase Console

---

## 💡 Recommended: Use Vercel Instead

**For Next.js applications, Vercel is recommended because:**
- ✅ Built by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic API routes support
- ✅ Better performance
- ✅ Free tier available
- ✅ Easier deployment

**Firebase is better for:**
- Static sites
- Apps already using Firebase services
- Apps that need Firebase-specific features

---

## 📚 Additional Resources

- Firebase Hosting Docs: https://firebase.google.com/docs/hosting
- Next.js on Firebase: https://firebase.google.com/docs/hosting/nextjs
- Firebase Functions: https://firebase.google.com/docs/functions

---

## 🎯 Quick Commands

```bash
# Login
firebase login

# Initialize
firebase init

# Deploy hosting
firebase deploy --only hosting

# Deploy functions
firebase deploy --only functions

# Deploy everything
firebase deploy

# View logs
firebase functions:log

# Open dashboard
firebase open
```

---

**Ready to deploy?** Follow the steps above! 🚀

