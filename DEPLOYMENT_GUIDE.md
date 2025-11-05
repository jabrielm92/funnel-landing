# Deployment Guide - Firebase Only (No Backend)

## Architecture Explained Simply

Your landing page is **frontend-only**:
- ✅ **Frontend**: React app (your landing page)
- ✅ **Firebase**: Saves leads to database
- ❌ **Backend**: NOT NEEDED (Firebase handles everything)

```
User fills form → Firebase saves lead → User redirects to checkout
```

No server needed! Everything runs in the browser + Firebase.

---

## Deploying to Vercel (Frontend Only)

### Step 1: Push to GitHub

1. Go to your project root directory
2. Initialize git (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - landing page"
   ```

3. Create a new repository on GitHub
4. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. **IMPORTANT**: Configure these settings:

**Framework Preset:** Create React App

**Root Directory:** Leave as `.` (root) OR change to `frontend`

**Build Command:**
```
cd frontend && yarn build
```

**Output Directory:**
```
frontend/build
```

**Install Command:**
```
cd frontend && yarn install
```

### Step 3: Environment Variables

You **DON'T NEED** any environment variables for Vercel!

Firebase config is already in your code (client-side is fine).

### Step 4: Deploy

Click "Deploy" and wait 2-3 minutes.

---

## Alternative: Deploy Only Frontend Folder

If Vercel shows errors about root directory:

### Option A: Deploy frontend folder only

1. In Vercel project settings:
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`

### Option B: Create separate repo for frontend

1. Copy `/app/frontend` contents to a new folder
2. Create new GitHub repo
3. Push only frontend files
4. Deploy to Vercel (automatic detection)

---

## Fixing the 404 Error You're Getting

Your screenshot shows a 404 error. This is because:

**Problem:** Vercel doesn't know where your React app is.

**Solution:** You need to tell Vercel to look in the `frontend` folder.

### Fix in Vercel Dashboard:

1. Go to your project in Vercel
2. Go to **Settings** → **General**
3. Find **Root Directory**
4. Click **Edit**
5. Enter: `frontend`
6. Click **Save**
7. Go to **Deployments**
8. Click **Redeploy** on the latest deployment

OR

### Fix with vercel.json (Already created):

I've created `/app/vercel.json` with correct paths. Make sure this file is in your repository root before deploying.

---

## Testing Locally Before Deploy

```bash
cd /app/frontend
yarn build
npx serve -s build
```

This simulates production. Visit `http://localhost:3000` to test.

---

## After Successful Deployment

### Firebase Security Rules (IMPORTANT)

Your Firebase database needs proper security rules:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `ari-site-main`
3. Go to **Realtime Database** → **Rules**
4. Add these rules:

```json
{
  "rules": {
    "leads": {
      ".read": "auth != null",
      ".write": true,
      "$leadId": {
        ".validate": "newData.hasChildren(['name', 'email', 'phone', 'timestamp', 'source'])"
      }
    }
  }
}
```

This allows:
- ✅ Anyone can write leads (from landing page)
- ✅ Only authenticated users can read (you in dashboard)
- ✅ Validates lead data structure

### Custom Domain (Optional)

1. In Vercel project → **Settings** → **Domains**
2. Add your domain (e.g., `course.arisolutionsinc.com`)
3. Follow DNS configuration instructions
4. Update your social media ads with new URL

---

## Troubleshooting

### "404: NOT_FOUND" Error
- **Cause**: Vercel can't find your files
- **Fix**: Set Root Directory to `frontend` in Vercel settings

### "Build Failed" Error
- **Cause**: Dependencies not installing
- **Fix**: Check that `package.json` is in `frontend` folder

### "Firebase is not defined" Error
- **Cause**: Firebase not imported correctly
- **Fix**: Already fixed in code, just redeploy

### Blank Page After Deploy
- **Cause**: React Router not configured for production
- **Fix**: Already added rewrites in `vercel.json`

---

## What Files Are Needed for Deployment?

**Only these folders/files:**
```
/frontend/
  /src/
  /public/
  package.json
  yarn.lock (or package-lock.json)
/vercel.json (in root)
```

**NOT needed:**
```
/backend/  ← DELETE THIS (you're not using it)
```

---

## Environment Variables Needed: NONE! ✅

Since you're using Firebase (client-side), all config is in the code.

**Why is this safe?**
- Firebase API keys are meant to be public
- Security comes from Firebase Rules (not hiding keys)
- Your database rules control who can read/write

---

## Final Checklist

Before deploying:
- [ ] Add your 60-second video to landing page
- [ ] Test form submission locally
- [ ] Check Firebase console to see test leads
- [ ] Push code to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Set Root Directory to `frontend`
- [ ] Deploy
- [ ] Test live site form submission
- [ ] Update Firebase security rules
- [ ] Add custom domain (optional)

---

## Quick Deploy Summary

```bash
# 1. Commit your code
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. In Vercel:
- Import GitHub repo
- Root Directory: frontend
- Build Command: yarn build
- Output Directory: build
- Deploy

# 3. Test:
- Visit your-site.vercel.app
- Fill out form
- Check Firebase console for lead
```

That's it! No environment variables, no backend, no complexity.

---

## Need Help?

If you see errors during deployment, copy the error message and I can help debug.

Common URLs after deploy:
- **Vercel URL**: `https://your-project.vercel.app`
- **Firebase Console**: `https://console.firebase.google.com/project/ari-site-main`
- **Leads Data**: Firebase Console → Realtime Database → leads
