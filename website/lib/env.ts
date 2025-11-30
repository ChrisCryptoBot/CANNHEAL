import { z } from 'zod'

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),

  // NextAuth
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),

  // Payment Processors (optional in development)
  AEROPAY_API_KEY: z.string().optional(),
  AEROPAY_SECRET_KEY: z.string().optional(),
  AEROPAY_WEBHOOK_SECRET: z.string().optional(),
  PAYMENTCLOUD_API_KEY: z.string().optional(),
  PAYMENTCLOUD_SECRET_KEY: z.string().optional(),
  PAYMENTCLOUD_WEBHOOK_SECRET: z.string().optional(),

  // EIN Verification (optional)
  MIDDESK_API_KEY: z.string().optional(),
  TAXJAR_API_KEY: z.string().optional(),

  // Cloudflare Turnstile (optional in development)
  TURNSTILE_SECRET_KEY: z.string().optional(),

  // File Storage
  R2_ACCESS_KEY_ID: z.string().optional(),
  R2_SECRET_ACCESS_KEY: z.string().optional(),
  R2_BUCKET_NAME: z.string().optional(),
  R2_ENDPOINT: z.string().url().optional(),
  R2_PUBLIC_URL: z.string().url().optional(),

  // Email
  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().email().optional(),

  // Node Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

const clientEnvSchema = z.object({
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_HOTJAR_ID: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_SITE_NAME: z.string().default('CANNHEAL'),
})

// Server-side environment variables
export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  AEROPAY_API_KEY: process.env.AEROPAY_API_KEY,
  AEROPAY_SECRET_KEY: process.env.AEROPAY_SECRET_KEY,
  AEROPAY_WEBHOOK_SECRET: process.env.AEROPAY_WEBHOOK_SECRET,
  PAYMENTCLOUD_API_KEY: process.env.PAYMENTCLOUD_API_KEY,
  PAYMENTCLOUD_SECRET_KEY: process.env.PAYMENTCLOUD_SECRET_KEY,
  PAYMENTCLOUD_WEBHOOK_SECRET: process.env.PAYMENTCLOUD_WEBHOOK_SECRET,
  MIDDESK_API_KEY: process.env.MIDDESK_API_KEY,
  TAXJAR_API_KEY: process.env.TAXJAR_API_KEY,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
  R2_ENDPOINT: process.env.R2_ENDPOINT,
  R2_PUBLIC_URL: process.env.R2_PUBLIC_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  NODE_ENV: process.env.NODE_ENV,
})

// Client-side environment variables (safe to expose)
export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
})
