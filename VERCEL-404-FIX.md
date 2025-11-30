# Fixing Vercel "Site not found" Error

## Common Causes & Solutions

### 1. Check Project Settings in Vercel Dashboard

Go to your Vercel project → **Settings** → **General**

**Root Directory:**
- Must be set to: `website`
- Click "Override" if it's blank
- Save the setting

### 2. Check Build Logs

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check **Build Logs** for errors

**Common build errors:**
- Missing `DATABASE_URL` environment variable
- Prisma Client not generating
- Build timeout

### 3. Required Environment Variables

Go to **Settings** → **Environment Variables** and add:

```
DATABASE_URL=your-postgresql-connection-string
```

**IMPORTANT:** Even if you're not using a database yet, Prisma requires `DATABASE_URL` during build. Use a placeholder if needed:

```
DATABASE_URL=postgresql://user:pass@localhost:5432/cannheal
```

### 4. Verify Build Command

In **Settings** → **General** → **Build & Development Settings**:

- **Build Command:** `npm run build`
- **Output Directory:** Leave empty (Next.js handles this)
- **Install Command:** `npm install` (or leave default)
- **Node Version:** 18 or 20

### 5. Check vercel.json

Your `vercel.json` should be:
```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "rootDirectory": "website"
}
```

### 6. Redeploy After Fixes

After making changes:
1. Go to **Deployments** tab
2. Click the three dots (⋯) on latest deployment
3. Click **"Redeploy"**
4. Or push a new commit to trigger auto-deploy

## Step-by-Step Fix

### Step 1: Verify Root Directory
1. Vercel Dashboard → Your Project → Settings → General
2. Scroll to "Root Directory"
3. Set to: `website`
4. Click "Save"

### Step 2: Add DATABASE_URL
1. Settings → Environment Variables
2. Add new variable:
   - **Key:** `DATABASE_URL`
   - **Value:** `postgresql://user:pass@localhost:5432/cannheal` (temporary)
   - **Environment:** Production, Preview, Development (select all)

### Step 3: Check Build Logs
1. Go to Deployments
2. Click latest deployment
3. Check if build succeeded or failed
4. Look for Prisma/Node errors

### Step 4: Redeploy
1. Redeploy from dashboard OR
2. Push an empty commit:
   ```bash
   git commit --allow-empty -m "Trigger redeploy"
   git push
   ```

## Quick Database Setup (If Needed)

If you need a real database for the build to work:

### Option 1: Vercel Postgres (Easiest)
1. Vercel Dashboard → Storage tab
2. Create Postgres database
3. Copy connection string
4. Add as `DATABASE_URL` environment variable

### Option 2: Supabase (Free)
1. Go to https://supabase.com
2. Create project
3. Settings → Database → Copy connection string
4. Add to Vercel as `DATABASE_URL`

## Still Not Working?

1. **Delete vercel.json** temporarily to let Vercel auto-detect:
   - Remove `vercel.json` from repo
   - Set root directory to `website` in dashboard
   - Redeploy

2. **Check deployment URL:**
   - Make sure you're visiting the correct URL
   - Check if custom domain is configured correctly

3. **Check Vercel status:**
   - Visit https://www.vercel-status.com
   - Ensure Vercel services are operational

4. **Verify repository connection:**
   - Settings → Git
   - Ensure GitHub repo is connected
   - Check branch is set to `main`

## Contact

If still having issues, share:
- Build logs screenshot
- Environment variables (without secrets)
- Deployment URL

