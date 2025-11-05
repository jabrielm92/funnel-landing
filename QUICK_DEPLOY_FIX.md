# Fix Your 404 Error - 3 Minute Guide

## Your Problem

Vercel is looking for your React app in the wrong place.

**Vercel is looking here:**
```
/ (root folder)
```

**Your React app is actually here:**
```
/frontend/
```

---

## The Fix (Choose One)

### Option A: Fix in Vercel Dashboard (EASIEST - Do This!)

1. Open your browser
2. Go to **vercel.com** and login
3. Click on your project name
4. Click **Settings** (top menu)
5. Click **General** (left sidebar)
6. Scroll down to **Root Directory**
7. Click **Edit** button
8. Type: `frontend`
9. Click **Save**
10. Go to **Deployments** (top menu)
11. Click the three dots (**•••**) on latest deployment
12. Click **Redeploy**
13. Wait 2-3 minutes
14. Click **Visit** to see your live site

**Done!** Your site should work now.

---

### Option B: If Option A Doesn't Work

#### Delete and Recreate Project:

1. In Vercel, go to your project
2. **Settings** → scroll to bottom
3. Click **Delete Project**
4. Confirm deletion
5. Go back to Vercel homepage
6. Click **Add New** → **Project**
7. Import your GitHub repo again
8. **IMPORTANT**: This time, when it asks for settings:
   - **Root Directory**: `frontend` ← Type this!
   - **Build Command**: `yarn build` (auto-filled)
   - **Output Directory**: `build` (auto-filled)
9. Click **Deploy**

---

### Option C: Deploy Frontend Folder Only

If you want to avoid the root directory confusion:

**On your computer:**
```bash
# 1. Copy frontend to a new location
cp -r /app/frontend ~/my-landing-page

# 2. Go to that folder
cd ~/my-landing-page

# 3. Create new git repo
git init
git add .
git commit -m "Landing page"

# 4. Push to NEW GitHub repo
# (Create new repo on GitHub first)
git remote add origin https://github.com/yourusername/landing-page.git
git push -u origin main

# 5. Deploy this new repo to Vercel
# It will auto-detect React - no config needed!
```

---

## What You Need for Vercel

### Environment Variables: NONE! ✅

That's right, you don't need any environment variables!

Firebase config is in your code (this is safe - it's meant to be public).

### Build Settings:

If Vercel asks during setup:

- **Framework**: Create React App
- **Root Directory**: `frontend` (if using main repo) OR leave empty (if using frontend-only repo)
- **Build Command**: `yarn build`
- **Output Directory**: `build`
- **Install Command**: `yarn install`

---

## After Successful Deploy

### Test Your Site:

1. Visit your Vercel URL (e.g., `https://your-project.vercel.app`)
2. Click "Get Instant Access" button
3. Fill out the form
4. Click submit
5. Should redirect to checkout page

### Check Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project: **ari-site-main**
3. Click **Realtime Database** (left menu)
4. Look for **leads** → you should see your test data!

---

## Common Errors & Fixes

### Error: "404: NOT_FOUND"
**Fix:** Set Root Directory to `frontend` (see Option A above)

### Error: "Build Failed"
**Fix:** Make sure `package.json` is in `frontend` folder

### Error: Page Loads But Form Doesn't Work
**Fix:** Check Firebase console for errors. Make sure Firebase is initialized.

### Error: "Module not found"
**Fix:** In Vercel, delete deployment and redeploy (clears cache)

---

## Video Script (Free Tools)

Since you asked about creating the video, here's what to use:

### Recommended: CapCut (FREE)

**Download:**
- Desktop: [capcut.com](https://www.capcut.com)
- Mobile: App Store / Google Play

**Quick Steps:**
1. Record yourself with phone camera (portrait mode)
2. Import video to CapCut
3. Add text overlays for key points:
   - "$12,000/month"
   - "6 hours/week"
   - "$27"
4. Add background music (CapCut has free library)
5. Export in 1080p
6. Upload to hosting

### Video Hosting (FREE):
- **YouTube** (unlisted) - Then embed on your site
- **Vimeo** (free tier)
- **Cloudflare Stream** (free tier)

### The Script (60 seconds):

```
[0-5s] HOOK
"I made $12,000 last month working 6 hours per week..."

[5-15s] PROBLEM
"Local businesses are losing thousands from missed appointments. 
They're desperate for automated booking systems."

[15-35s] SOLUTION
"I learned to build these AI systems in 14 days. 
No coding. Just free tools. 
Now I charge $650-$2,500 setup plus $350-$500/month per client."

[35-50s] OFFER
"I put everything in a course for $27. 
Exact tools, sales scripts, client-finding system. 
14-day money-back guarantee."

[50-60s] CTA
"Link below. $27. Your move."
```

---

## Ad Copy (Free Organic Reach)

Post this on TikTok/Instagram Reels (no ad spend needed):

```
POV: You discovered the AI business nobody's talking about 💰

While everyone's fighting over ChatGPT gigs,
I'm making $12K/month building appointment systems 
for local businesses.

No coding. 6 hours/week. Pure freedom.

Full breakdown: link in bio ($27)

#AIbusiness #passiveincome #sidehustle #entrepreneur
```

Post 3-5 variations and see which gets views. Then boost that one with ads ($5-10/day).

---

## Your Complete Checklist

- [ ] Fix Vercel deployment (Root Directory = `frontend`)
- [ ] Test live site form submission
- [ ] Check Firebase console for test lead
- [ ] Record 60-second video with phone
- [ ] Edit in CapCut (add text overlays)
- [ ] Upload video to YouTube (unlisted)
- [ ] Add video to landing page
- [ ] Redeploy to Vercel
- [ ] Post organic content on TikTok/Reels
- [ ] Start with $5/day ads on best-performing video
- [ ] Check Firebase daily for incoming leads

---

## TL;DR

1. **Vercel Settings** → Root Directory → Type `frontend` → Save → Redeploy
2. **No environment variables needed**
3. **Use CapCut** (free) to make video
4. **Post on TikTok/Reels** organically first
5. **Then boost** with paid ads

You're one setting change away from launch! 🚀

Need help? Show me the error message and I'll debug.
