# Mabood WebStudios

Professional web agency website built with React + Supabase.

## Features
- Multi-page React app with React Router
- Supabase authentication (email + Google OAuth)
- Rate-limited contact form (3 submissions/hour per email)
- All contact submissions stored in Supabase database
- User accounts with preferences
- Privacy Policy + Terms of Service (AdSense ready)
- GPay QR code on pricing page
- Fully mobile responsive

## Pages
- `/` — Home
- `/about` — About
- `/services` — Services
- `/portfolio` — Portfolio
- `/pricing` — Pricing + Payment
- `/contact` — Contact (rate limited)
- `/login` — Login
- `/signup` — Sign Up
- `/privacy-policy` — Privacy Policy
- `/terms-of-service` — Terms of Service

## Deployment on Vercel

1. Push this repo to GitHub
2. Go to vercel.com → Import project
3. Add these Environment Variables:
   - `VITE_SUPABASE_URL` = your supabase project url
   - `VITE_SUPABASE_ANON_KEY` = your supabase publishable key
   - `VITE_FORMSPREE_ID` = xreyaavq
4. Deploy — Vercel auto-builds React

## Environment Variables
Create a `.env` file (never commit this):
```
VITE_SUPABASE_URL=https://snlfrwgxassqdvukrwxf.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_wNuivMcel-jEJgiDRWcREg_oRn5iQTF
VITE_FORMSPREE_ID=xreyaavq
```

## Tech Stack
- React 18
- React Router 6
- Supabase (auth + database)
- Vite
- Vercel (hosting)
