# Voltline Electric — Marketing Site

Production-ready marketing site for an electrician business, built with Next.js (App Router), TypeScript, and Tailwind CSS. Optimised for deployment on Vercel.

## Stack

- **Next.js 15** with the App Router
- **React 19**
- **TypeScript** in strict mode
- **Tailwind CSS** with custom brand palette
- **Inter** via `next/font` for self-hosted fonts
- **API route** for contact form submissions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Folder structure

```
src/
  app/
    api/contact/route.ts   # Contact form endpoint
    contact/page.tsx       # Contact page
    services/page.tsx      # Services page
    layout.tsx             # Root layout
    page.tsx               # Homepage
    globals.css            # Tailwind + custom CSS
    sitemap.ts             # Auto-generated sitemap
    robots.ts              # robots.txt
  components/              # Reusable UI components
  lib/                     # Site config and content
```

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket
2. Import the project in [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no further config needed

## Wiring up the contact form

The contact API route at `src/app/api/contact/route.ts` currently logs submissions to the server. Replace the `console.log` with your email provider (Resend, SendGrid, Postmark) or a database write when going live.

## Customising

Edit `src/lib/site.ts` for business info (name, phone, email, address, hours) and `src/lib/services.ts` to add or change services. The brand colour palette is in `tailwind.config.ts`.
