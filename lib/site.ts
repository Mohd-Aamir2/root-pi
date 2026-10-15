// Set NEXT_PUBLIC_SITE_URL in .env.local and in Vercel to your real domain once you have one.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');