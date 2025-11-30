# Quick Deployment Options for CANNHEAL Website

## 🚀 Fastest Options (5-10 minutes)

### 1. **Railway** (Recommended - Easiest)
**Best for:** Quick deployment with automatic GitHub integration

**Steps:**
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select `ChrisCryptoBot/CANNHEAL`
5. Set root directory: `website`
6. Add environment variable:
   - `DATABASE_URL` (optional: `postgresql://user:pass@localhost:5432/cannheal`)
7. Deploy! (auto-detects Next.js)

**Pros:**
- Free tier (generous)
- Auto-detects Next.js
- Easy environment variables
- Instant deployment

---

### 2. **Render** (Free Tier Available)
**Best for:** Simple, reliable hosting

**Steps:**
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect repository: `ChrisCryptoBot/CANNHEAL`
5. Settings:
   - **Name:** `cannheal-website`
   - **Root Directory:** `website`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Environment:** Node 18
6. Add environment variable:
   - `DATABASE_URL`
7. Click "Create Web Service"

**Pros:**
- Free tier available
- Simple interface
- Auto-deploys on git push

---

### 3. **Cloudflare Pages** (Fastest & Free)
**Best for:** Best performance globally (uses Cloudflare CDN)

**Steps:**
1. Go to https://pages.cloudflare.com
2. Sign up/login
3. Click "Create a project" → "Connect to Git"
4. Select GitHub → Choose `CANNHEAL` repo
5. Build settings:
   - **Project name:** `cannheal`
   - **Production branch:** `main`
   - **Build command:** `cd website && npm run build`
   - **Build output directory:** `website/.next`
   - **Root directory:** `website`
   - **Node version:** 18
6. Add environment variable:
   - `DATABASE_URL`
7. Save and Deploy

**Pros:**
- **100% FREE forever**
- Fastest global CDN
- Auto-deploys
- Great performance

**Note:** Cloudflare Pages requires static export or special adapter. May need `@cloudflare/next-on-pages` adapter for Next.js.

---

### 4. **Fly.io** (Good for full-stack)
**Best for:** Full-stack apps with database included

**Steps:**
1. Install Fly CLI: `iwr https://fly.io/install.ps1 -useb | iex` (PowerShell)
2. Sign up: `fly auth signup`
3. In your project: `cd website`
4. Launch: `fly launch`
   - Follow prompts
   - Auto-detects Next.js
5. Add secret: `fly secrets set DATABASE_URL="your-url"`
6. Deploy: `fly deploy`

**Pros:**
- Free tier
- Includes PostgreSQL option
- Great for production

---

## 📦 Easy Options (10-15 minutes)

### 5. **AWS Amplify** (If you have AWS account)
**Steps:**
1. Go to https://console.aws.amazon.com/amplify
2. "New app" → "Host web app"
3. Connect GitHub → Select repo
4. Configure:
   - App name: `cannheal`
   - Branch: `main`
   - Root directory: `/website`
   - Build settings: Auto-detect
5. Add environment variable: `DATABASE_URL`
6. Deploy

---

### 6. **DigitalOcean App Platform**
**Steps:**
1. Go to https://cloud.digitalocean.com/apps
2. "Create App" → "GitHub"
3. Select repository
4. Configure:
   - Root directory: `website`
   - Build command: `npm run build`
   - Run command: `npm start`
5. Add environment variable: `DATABASE_URL`
6. Deploy

**Pros:**
- $5/month for basic plan
- Very reliable

---

## 🎯 My Recommendation

### For Quick Testing & Sharing:
**Use Railway** - It's the easiest and auto-detects everything.

### For Production:
1. **Vercel** (if you fix the config) - Best Next.js support
2. **Cloudflare Pages** - Free and fastest globally
3. **Railway** - Easiest full-stack option

---

## Quick Setup Scripts

### Railway (Fastest)
```bash
# 1. Go to railway.app
# 2. Connect GitHub
# 3. Select repo
# 4. Set root: website
# 5. Add DATABASE_URL env var
# Done! Live in 2 minutes
```

### Render (Easy)
```bash
# 1. Go to render.com
# 2. New Web Service
# 3. Connect GitHub
# 4. Root: website
# 5. Build: npm install && npm run build
# 6. Start: npm start
# 7. Add DATABASE_URL
# Done!
```

### Cloudflare Pages (Free Forever)
```bash
# 1. Go to pages.cloudflare.com
# 2. Connect GitHub
# 3. Root: website
# 4. Build: cd website && npm run build
# 5. Output: website/.next
# 6. Add DATABASE_URL
# Done!
```

---

## Environment Variables Needed

All platforms need at minimum:
```
DATABASE_URL=postgresql://user:pass@host:5432/dbname
```

Optional (for full functionality):
```
NEXTAUTH_URL=https://your-app-url.com
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_SITE_URL=https://your-app-url.com
```

---

## Quick Comparison

| Platform | Setup Time | Free Tier | Best For |
|----------|-----------|-----------|----------|
| Railway | 2 min | ✅ Yes | Quick testing |
| Render | 5 min | ✅ Yes | Simple hosting |
| Cloudflare Pages | 5 min | ✅ Yes (forever) | Fastest CDN |
| Fly.io | 10 min | ✅ Yes | Full-stack |
| Vercel | 5 min | ✅ Yes | Next.js native |
| Netlify | 5 min | ✅ Yes | Static sites |

---

## Need Help?

If any platform gives errors, share:
- The build logs
- Error messages
- Which platform you're using

I can help troubleshoot!

