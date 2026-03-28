# fluffy-octo-dollop

A landing page for an accounting and global business advisory firm — built with Next.js and TypeScript.

**Live:** [https://fluffy-octo-dollop.vercel.app](https://fluffy-octo-dollop.vercel.app)

---

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Structure

All static content — nav links, stats, topics, avatars, list items — lives in `src/lib/data.ts`. Components just import what they need. No prop drilling, no scattered hardcoded strings.

This keeps things easy to update and easy to read.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
