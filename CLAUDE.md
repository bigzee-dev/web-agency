# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Deltaworx marketing/SaaS website - Next.js 15 app deployed to Cloudflare Pages. Provides web hosting, domains, email, VPS, and web development services.

## Commands

```bash
# Package manager: pnpm (required)
pnpm install              # Install dependencies
pnpm dev                  # Start dev server (http://localhost:3000)
pnpm build                # Production build
pnpm start                # Start production server locally
pnpm lint                 # Run ESLint

# Cloudflare deployment
pnpm preview              # Build and preview with Cloudflare adapter
pnpm deploy               # Build and deploy to Cloudflare Pages
pnpm cf-typegen           # Generate Cloudflare environment types
```

## Architecture

### Next.js App Router Structure

- **Route Groups** used for organization without URL impact:
  - `app/(services)/` - Service pages (domains, websites, ecommerce, emails, webapps)
  - `app/(services)/(hosting)/` - Hosting pages (linux-vps, web-hosting)
- **Server Components by default** - Only mark components with `"use client"` when needed for:
  - State management (useState, useEffect)
  - Event handlers
  - Browser APIs
  - Animation libraries (Framer Motion)
- **Dynamic Routes**: `/blog-posts/[slug]` for Strapi CMS blog posts
- **API Routes**: `/app/api/` - single route for contact form submission

### Cloudflare Deployment

- Uses `@opennextjs/cloudflare` adapter to convert Next.js to Cloudflare Workers format
- Build output: `.open-next/` directory
  - `worker.js` - Main worker (specified in wrangler.jsonc)
  - `assets/` - Static files
- **Runtime requirement**: API routes need `export const runtime = "nodejs";` for Node.js compatibility
- Wrangler config: `wrangler.jsonc` (node.js compat flag enabled)

### Component Organization

Components are organized by page/feature, not by type:
```
components/
├── home/           # Homepage sections (showcase, stats, etc.)
├── services/       # Service-specific sections
│   ├── domains/
│   ├── hosting/
│   └── websites/
├── shared/         # Reusable across pages (contactform, pricing, faqs)
└── ui/             # Primitive shadcn/ui components
```

Pages compose sections from their respective folders:
```tsx
// app/(services)/domains/page.tsx
export default function DomainsPage() {
  return (
    <>
      <Header />
      <DomainPricingTable />
      <MonthSpecials />
      <WhyBuy />
    </>
  );
}
```

### Styling System

**Shared Style Utilities** (`/app/ui/customTailwindClasses.ts`):
- Export pre-configured Tailwind class strings for consistency
- All use Montserrat font
- Import and use these instead of duplicating styles:
  ```tsx
  import { pageHeadings, primaryButton } from "@/app/ui/customTailwindClasses";
  <h1 className={pageHeadings}>Title</h1>
  <button className={primaryButton}>Click</button>
  ```
- Available exports:
  - Headings: `pageHeadings`, `sectionHeadings`, `longSectionHeadings`, `sectionSubHeadings`
  - Buttons: `primaryButton`, `grayButton`, `whiteButton`, `greenButton`, `transparentButton`, `lightBgButton`

**Tailwind Config**:
- Custom colors: `primary` (#005878), `secondary` (#0f3551), `accent` (#33bff2)
- Custom breakpoints: `sm: 500px`, `md: 768px`, `lg: 1020px`, `xl: 1280px`
- Dark mode via `class` strategy

**Font Loading** (`/app/ui/fonts.ts`):
- All fonts loaded via `next/font/google` with `display: "swap"`
- Primary: `montserrat` (headings/buttons), `inter` (body text)
- Branding: `cairo` (logo), `expletus_sans` (alternative logo)

**Class Merging**:
- Use `cn()` utility from `/lib/utils.ts` to safely merge Tailwind classes:
  ```tsx
  import { cn } from "@/lib/utils";
  <div className={cn("base-classes", conditional && "extra-classes", className)} />
  ```

### Responsive Navigation

- Component: `/components/responsive-nav/index.jsx`
- Hook: `/app/hooks/useResponsiveNav.js` (vanilla JS)
- **Custom behavior**: Handles mobile hamburger menu, dropdown toggles, and scroll-based navbar styling
- **Important**: All nav DOM manipulation logic is in the hook - modify there, not in component
- Nav styles: `/app/ui/navStyles.css` (global CSS for legacy nav structure)

### Data Fetching

**Strapi CMS Blog**:
- Server-side async functions in page components
- Endpoint: `process.env.STRAPI_API_URL`
- List: `fetch("/api/blog-posts")`
- Detail: Query with `qs` library for filtering by slug
- Rendering: Custom block renderer at `/app/blockrenderclient.tsx` using `@strapi/blocks-react-renderer`

**No state management library** - use React state for client components, server components for data fetching.

### Form Handling

- Client component with `"use client"`
- Pattern: `/components/shared/contactform/contactusform.tsx`
- **CAPTCHA required**: Cloudflare Turnstile integration
  - Site key: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  - Verification in API route with `TURNSTILE_SECRET_KEY`
- POST to `/api/websites-contactus` with nodemailer email sending
- Environment variables needed:
  - `SMTP_EMAIL`, `SMTP_PWD` - Zoho SMTP credentials
  - `TURNSTILE_SECRET_KEY` - Server-side verification
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Client-side widget

### Environment Variables

Required in `.env.local`:
```env
# Strapi CMS
STRAPI_API_URL=

# Email (Zoho SMTP)
SMTP_EMAIL=
SMTP_PWD=

# Cloudflare Turnstile
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=

# WHMCS Billing Integration
WHMCS_API_IDENTIFIER=
WHMCS_API_SECRET=
NEXT_PUBLIC_WHMCS_URL=

# Form Context
NEXT_PUBLIC_SITE_NAME_FOR_FORM=
```

## Code Patterns

### Adding a New Service Page

1. Create folder in `app/(services)/[service-name]/`
2. Create `page.tsx` with server component
3. Create section components in `components/services/[service-name]/`
4. Import sections and compose in page
5. Add to navigation in `/components/responsive-nav/index.jsx`

### Adding a New Section Component

1. Create in appropriate `components/` subfolder
2. Use custom Tailwind classes from `/app/ui/customTailwindClasses.ts`
3. Import fonts from `/app/ui/fonts.ts` if needed
4. Use `cn()` utility for conditional classes
5. Keep server component unless interactivity needed

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```
- Installs to `/components/ui/`
- Configuration in `components.json`
- Uses Radix UI primitives with Tailwind styling

### Image Optimization

- Use `next/image` for all images
- External domains must be allowlisted in `next.config.mjs` under `images.domains`
- Current allowed: `images.unsplash.com`, `strapi.bigzee.app`

## Development Notes

### File Extensions
- Components can be `.tsx` or `.jsx` (legacy nav is .jsx)
- TypeScript is configured to allow JS files

### API Route Requirements
- Must export `export const runtime = "nodejs";` for Node.js APIs (nodemailer, etc.)
- Cloudflare Workers default to edge runtime - specify nodejs for compatibility

### Deployment Gotchas
- Build generates `.open-next/` directory - don't commit this
- Preview locally before deploying: `pnpm preview`
- Cloudflare Workers have size limits - keep bundle optimized
- Server components reduce client JS bundle size

### Animation Libraries
- Framer Motion: Heavy animations, requires client component
- CSS animations: Preferred for simple transitions (defined in Tailwind config)
- Embla Carousel: For carousels/sliders
