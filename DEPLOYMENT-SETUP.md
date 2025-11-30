# CANNHEAL Website Deployment Setup

## ✅ Build Status
**Build is now working!** The seed file has been fixed to match the Prisma schema.

## Deployment Instructions

### For Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository: `ChrisCryptoBot/CANNHEAL`

2. **Configure Project Settings**
   - **Root Directory:** Set to `website`
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build` (or leave default)
   - **Output Directory:** `.next` (or leave default)
   - **Install Command:** `npm install` (or leave default)

3. **Add Environment Variables** (in Vercel dashboard)
   ```
   DATABASE_URL=your-production-database-url
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy!**
   - Click "Deploy"
   - Vercel will automatically run `prisma generate` (via postinstall script) and build your site

### For Netlify

1. **Connect your GitHub repository to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `ChrisCryptoBot/CANNHEAL`

2. **Configure Build Settings**
   - **Base directory:** `website`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

3. **Install Netlify Next.js Plugin**
   - In Netlify dashboard, go to Site settings → Plugins
   - Add `@netlify/plugin-nextjs` (or it should auto-detect)

4. **Add Environment Variables** (in Netlify dashboard)
   - Site settings → Environment variables
   ```
   DATABASE_URL=your-production-database-url
   NEXTAUTH_URL=https://your-site.netlify.app
   NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
   NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
   ```

5. **Deploy!**
   - Click "Deploy site"
   - Netlify will build and deploy your site

## Important Notes

### Prisma Database Setup
Before deploying, you need a PostgreSQL database:

**Option 1: Vercel Postgres (Recommended for Vercel)**
- Built into Vercel dashboard
- Free tier available
- Automatically connects

**Option 2: Supabase (Recommended for Netlify or general use)**
- Free tier available
- Easy to set up at https://supabase.com
- Get connection string from Settings → Database

**Option 3: Neon (Serverless PostgreSQL)**
- Great for serverless deployments
- Free tier available
- Get connection string from dashboard

### Build Process
The build now includes:
1. `postinstall` script runs `prisma generate` (automatically runs after `npm install`)
2. `build` script runs `prisma generate && next build`

This ensures Prisma Client is generated before the build.

### What Was Fixed
- ✅ Fixed seed.ts to match Prisma schema (removed non-existent fields)
- ✅ Added `postinstall` script to generate Prisma Client
- ✅ Created `vercel.json` with correct root directory
- ✅ Created `netlify.toml` with build configuration
- ✅ Build now completes successfully

### Next Steps After Deployment
1. Set up production database
2. Run migrations: `npx prisma migrate deploy` (or use `prisma db push` for development)
3. Seed database (optional): `npm run db:seed`
4. Configure domain (if needed)
5. Test all functionality

## Troubleshooting

**If build fails:**
- Check that `DATABASE_URL` environment variable is set
- Ensure Prisma Client generates (check build logs for `prisma generate`)
- Verify all dependencies are in `package.json`

**If deployment works but site doesn't:**
- Check environment variables are set correctly
- Verify database connection
- Check Vercel/Netlify function logs for errors

## Support

For deployment issues, check:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs/deployment

