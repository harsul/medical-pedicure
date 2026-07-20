# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** with React 19 and TypeScript — read `node_modules/next/dist/docs/` before writing any Next.js code; APIs may differ from training data
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configured in `postcss.config.mjs`
- **React Compiler** enabled (`reactCompiler: true` in `next.config.ts`) — do not manually memoize with `useMemo`/`useCallback`
- **lucide-react** for UI icons, **react-icons/fa** for social media brand icons

## Architecture

This is a single-page marketing site. All content lives in one file:

- `src/app/page.tsx` — the entire page: nav, hero, credentials section, services grid, FAQ accordion, about/contact section, footer. Data arrays (`services`, `faqs`) are defined at the top of the file.
- `src/app/layout.tsx` — sets Geist fonts and root HTML shell. Update `metadata` here for SEO title/description.
- `src/app/globals.css` — global styles.
- `public/` — static images served directly (`hero-image.png`, `ordination.png`, `steril-env.png`).

## Placeholder values to replace before launch

- `https://wa.me/[INSERT_WHATSAPP_NUMBER]` — WhatsApp number (already set to `+38761566787` in some places)
- `https://facebook.com/[INSERT_FACEBOOK_PAGE]` — Facebook page slug
- `https://instagram.com/[INSERT_INSTAGRAM_HANDLE]` — Instagram handle
- Location address, opening hours in the contact section

## Language

The site is written in **Bosnian**. All user-facing text additions must be in Bosnian.
