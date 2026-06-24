# Edgetel Website — Setup Guide

## Prerequisites
- Node.js 18+ installed (download from https://nodejs.org)
- VS Code installed
- Basic terminal knowledge

---

## Step 1: Open the Project in VS Code

1. Copy the `edgetel` folder to wherever you keep your projects
2. Open VS Code → File → Open Folder → select `edgetel`
3. Open the terminal in VS Code: `Ctrl + `` ` (backtick)

---

## Step 2: Install Dependencies

Run this in the terminal:

```bash
npm install
```

This installs Next.js, React, Tailwind CSS, TypeScript, and Lucide icons.

---

## Step 3: Start the Development Server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see the Edgetel homepage. 🎉

---

## Project Structure

```
edgetel/
├── app/                    # Pages (Next.js App Router)
│   ├── layout.tsx          # Root layout (Navbar + Footer wraps all pages)
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── contact/page.tsx    # Contact form
│   ├── faq/page.tsx        # FAQ accordion
│   └── globals.css         # Global styles + animations
│
├── components/             # Reusable UI blocks
│   ├── Navbar.tsx          # Top navigation (sticky, responsive)
│   ├── Hero.tsx            # Homepage hero with animated speed lines
│   ├── Packages.tsx        # Package cards (home + business tabs)
│   ├── Features.tsx        # Why Edgetel section
│   ├── CoverageChecker.tsx # Area availability checker
│   ├── Testimonials.tsx    # Customer reviews
│   ├── CTABanner.tsx       # Bottom call-to-action
│   └── Footer.tsx          # Footer with links + contact
│
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind + custom design tokens
└── tsconfig.json           # TypeScript config
```

---

## Step 4: Customize the Content

### Update your phone number
Search for `+254 700 000 000` and replace with your actual number in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/CTABanner.tsx`

### Update your email
Replace `info@edgetel.co.ke` with your actual email in:
- `components/Footer.tsx`

### Add/remove covered areas
Edit the `coveredAreas` array in `components/CoverageChecker.tsx`

### Update packages
Edit the `homePackages` array in `components/Packages.tsx` to match your latest pricing.

---

## Step 5: Connect the Contact Form

The contact form in `app/contact/page.tsx` currently simulates sending.
To make it real, replace the `handleSubmit` function with an API call to:
- **Resend** (recommended): https://resend.com — free tier available
- **EmailJS**: https://www.emailjs.com
- **Supabase** + trigger email

---

## Step 6: Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to https://vercel.com → New Project → Import from GitHub
3. Vercel auto-detects Next.js — just click Deploy
4. Add your custom domain (`edgetel.co.ke`) in Vercel's project settings

---

## What's Next

- [ ] Connect contact form to real email
- [ ] Add Google Analytics (GA4) to `app/layout.tsx`
- [ ] Build the `/admin` content editor (Supabase + custom UI)
- [ ] Add a real coverage API or Google Maps integration
- [ ] Add WhatsApp chat widget
- [ ] Set up SEO metadata for each page

---

## Commands Reference

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm start` | Run production build locally |
| `npm run lint` | Check for code errors |
