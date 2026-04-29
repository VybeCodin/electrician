# Project notes for Claude

This file gives Claude Code durable, project-level guidance. Read it before making changes.

## Project

Marketing website for an electrician business. Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS. Designed to deploy on Vercel.

## Stack & conventions

- App Router only — do **not** add anything under `pages/`.
- TypeScript strict mode is on. Keep it that way.
- Tailwind CSS only — no CSS modules, no styled-components, no extra UI libraries unless explicitly requested.
- Path alias: `@/*` maps to `src/*`.
- Server Components by default. Add `"use client"` only when the component needs state, effects, or browser APIs.
- Site-wide content lives in `src/lib/site.ts`; service catalogue in `src/lib/services.ts`. Edit these instead of hard-coding values into components.
- Brand colours (`brand`, `ink`) are defined in `tailwind.config.ts`. Reuse those tokens rather than introducing new hex values.
- Reusable UI components go in `src/components/`. Page-specific sections may live inline in the page file.

## Important rules

- **Do not push to any remote (git push, gh, etc.) unless the user explicitly tells you to push.** This includes `git push`, `git push --force`, opening pull requests, deploying, or publishing in any form. Local commits are also off by default — only commit when asked.
- Do not run destructive git commands (`reset --hard`, `clean -f`, branch deletion, force push) without explicit instruction.
- Do not bypass git hooks (`--no-verify`, `--no-gpg-sign`).
- Do not add new dependencies without confirming with the user first. Prefer using what is already installed.
- Do not commit secrets, `.env*` files, or anything under `.vercel/`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploying

Target is Vercel. The contact API route uses the Node runtime (`runtime = "nodejs"`) so server-side email integrations work without extra config. The current handler only logs — wire up an email provider (Resend, SendGrid, etc.) before going live.

## Things to keep in mind when editing

- Keep components accessible: label form inputs, use semantic landmarks, keep colour contrast strong.
- The header is sticky; the emergency banner sits above it. Don't break that stacking unless asked.
- The homepage hero relies on the dark `ink-900` gradient and `brand-400` accent — preserve that contrast when editing.
- Copy is friendly and direct, not salesy. Match the existing tone.
