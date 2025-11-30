# Deploy CANNHEAL Website to Netlify

## ✅ Ready to Deploy!

Your site is configured for Netlify deployment. Follow these steps:

## Step-by-Step Deployment Guide

### 1. Sign Up / Log In to Netlify
- Go to https://app.netlify.com
- Sign up or log in (you can use GitHub to sign in)

### 2. Connect Your Repository
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **GitHub** (or GitLab/Bitbucket)
3. Authorize Netlify to access your repositories
4. Select your repository: **`ChrisCryptoBot/CANNHEAL`**

### 3. Configure Build Settings

Netlify should auto-detect these settings, but verify:

**Base directory:** `website`
- This tells Netlify where your Next.js app is located

**Build command:** `npm run build`
- This will automatically run `prisma generate` first (via postinstall script)

**Publish directory:** `website/.next`
- Or leave blank - the Netlify Next.js plugin handles this automatically

**Node version:** `18`
- Set in build environment variables

### 4. Add Environment Variables

Go to **Site settings** → **Environment variables** → **Add a variable**

Add these variables:
```
DATABASE_URL=your-postgresql-connection-string
NEXTAUTH_URL=https://your-site-name.netlify.app
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
```

**Important:** Even if you're not using a database yet, Prisma requires `DATABASE_URL` during the build process. You can use a placeholder temporarily.

### 5. Install Next.js Plugin (Important!)

1. Go to **Site settings** → **Plugins**
2. Click **"Add plugin"**
3. Search for **"@netlify/plugin-nextjs"**
4. Click **"Install"**

This plugin is required for Next.js deployments on Netlify.

### 6. Deploy!

1. Click **"Deploy site"** button
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://random-name.netlify.app`

## Post-Deployment

### Set Up Custom Domain (Optional)
1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Follow the instructions to configure DNS

### Set Up Continuous Deployment
- Netlify automatically deploys when you push to your main branch
- You can set up branch deploys for previews

## Database Setup Options

Since you need a `DATABASE_URL`, here are quick options:

### Option 1: Supabase (Free Tier)
1. Go to https://supabase.com
2. Create a new project
3. Go to **Settings** → **Database**
4. Copy the connection string (use the **Pooling** connection string for serverless)
5. Add it as `DATABASE_URL` in Netlify

### Option 2: Neon (Free Tier)
1. Go to https://neon.tech
2. Create a new project
3. Copy the connection string
4. Add it as `DATABASE_URL` in Netlify

### Option 3: Temporary Placeholder (Just for Build)
For testing deployment only, you can use:
```
DATABASE_URL=postgresql://user:pass@localhost:5432/cannheal
```

**But you'll need a real database for the site to work!**

## Troubleshooting

### Build Fails
- **Check build logs** in the Netlify dashboard
- Make sure `DATABASE_URL` is set
- Verify Node version is 18+
- Ensure the Next.js plugin is installed

### 404 Errors
- Make sure `@netlify/plugin-nextjs` plugin is installed
- Check that base directory is set to `website`
- Verify build completed successfully

### Database Connection Errors
- Make sure your database connection string is correct
- For Supabase/Neon, use the **pooling** connection string
- Check that your database allows connections from Netlify's IPs

### Prisma Errors
- Ensure `DATABASE_URL` is set
- The `postinstall` script should run `prisma generate` automatically
- Check build logs to see if Prisma Client was generated

## Configuration Files

Your project includes:
- ✅ `netlify.toml` - Netlify configuration
- ✅ `website/package.json` - Has `postinstall` script for Prisma
- ✅ Build tested and working

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/nextjs/
- Netlify Support: https://www.netlify.com/support/

---

**Ready to deploy? Follow the steps above and your site will be live in minutes!** 🚀

