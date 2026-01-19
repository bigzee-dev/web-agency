# Sitemap Documentation

## Overview

Your Next.js site now has an automatically generated sitemap at `/sitemap.xml` that includes:
- All static pages (home, about, services, legal pages, etc.)
- Dynamic blog posts from Strapi CMS
- Proper priority and change frequency settings for SEO

## How It Works

The sitemap is **automatically generated** at build time using Next.js 15's built-in sitemap feature. The sitemap:
1. Fetches all blog posts from your Strapi CMS
2. Combines them with static pages
3. Generates SEO-optimized XML accessible at `https://deltaworx.co.bw/sitemap.xml`

## Configuration

### 1. Set Your Site URL

Add this to your `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://deltaworx.co.bw
```

If not set, it defaults to `https://deltaworx.co.bw`.

### 2. When You Add New Pages

The sitemap **automatically updates** when you add new pages. Just follow these steps:

1. Add your new page in the `app/` directory (e.g., `app/new-page/page.tsx`)
2. If it's a static page, add it to the `staticPages` array in `app/sitemap.ts`:

```typescript
const staticPages = [
  // ... existing pages
  { url: "/new-page", changeFrequency: "weekly" as const, priority: 0.8 },
];
```

3. Rebuild your site:

```bash
pnpm build
```

4. Deploy:

```bash
pnpm deploy
```

### 3. Blog Posts

Blog posts are **automatically included** - no manual updates needed! When you publish a new post in Strapi, it will appear in the sitemap on the next build.

## Testing Your Sitemap

Run the validation script to test your sitemap locally:

```bash
pnpm sitemap:validate
```

This will:
- Build your site
- Start a local server
- Fetch and validate the sitemap
- Show you all URLs included
- Count blog posts and service pages

## Submit to Search Engines

After deploying, submit your sitemap to:

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to "Sitemaps" in the left menu
4. Enter: `sitemap.xml`
5. Click "Submit"

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Go to "Sitemaps"
3. Enter: `https://deltaworx.co.bw/sitemap.xml`
4. Click "Submit"

## Sitemap Priority Guide

Current priorities in the sitemap:

- **1.0** - Homepage (highest priority)
- **0.9** - Service pages (domains, hosting, VPS, etc.)
- **0.8** - About, Contact, Blog listing
- **0.7** - Our Process, Individual blog posts
- **0.5** - Legal pages (lowest priority)

## Change Frequency Guide

- **daily** - Blog listing page (new posts frequently)
- **weekly** - Service pages (updated regularly)
- **monthly** - About, Contact, Our Process
- **yearly** - Legal pages (rarely change)

## Troubleshooting

### Sitemap not showing blog posts?

Check that:
1. `STRAPI_API_URL` is set in your `.env.local`
2. Your Strapi instance is accessible
3. The blog posts endpoint `/api/blog-posts` is working

### Need to exclude pages?

Edit `app/sitemap.ts` and remove entries from the `staticPages` array, or add logic to filter them out.

### Want to change priorities?

Edit the `priority` values in `app/sitemap.ts` for each page (values from 0.0 to 1.0).

## Files Created

- `app/sitemap.ts` - Main sitemap generation logic
- `scripts/validate-sitemap.mjs` - Validation script
- `public/robots.txt` - Tells search engines where to find the sitemap
- `.env.example` - Environment variable template

## Next Steps

1. Add `NEXT_PUBLIC_SITE_URL=https://deltaworx.co.bw` to your `.env.local`
2. Run `pnpm sitemap:validate` to test locally
3. Deploy your site
4. Submit sitemap to Google Search Console and Bing Webmaster Tools
5. Monitor indexing status in search console dashboards
