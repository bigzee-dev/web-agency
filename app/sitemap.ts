import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deltaworx.co.bw";

// Static pages with their priority and change frequency
const staticPages = [
  { url: "/", changeFrequency: "monthly" as const, priority: 1.0 },
  { url: "/about-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/contact-us", changeFrequency: "monthly" as const, priority: 0.8 },

  // Services
  { url: "/domains", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/websites", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/ecommerce", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/webapps", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/emails", changeFrequency: "weekly" as const, priority: 0.9 },

  // Hosting
  { url: "/web-hosting", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/linux-vps", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/windows-vps", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/cloud-storage", changeFrequency: "weekly" as const, priority: 0.9 },

  // Blog
  { url: "/blog-posts", changeFrequency: "daily" as const, priority: 0.8 },

  // How to pay
  { url: "/how-to-pay", changeFrequency: "monthly" as const, priority: 0.5 },

  // Legal
  {
    url: "/legal/privacy-policy",
    changeFrequency: "yearly" as const,
    priority: 0.5,
  },
  {
    url: "/legal/terms-of-service",
    changeFrequency: "yearly" as const,
    priority: 0.5,
  },
  {
    url: "/legal/acceptable-use-policy",
    changeFrequency: "yearly" as const,
    priority: 0.5,
  },
];

async function getBlogPosts() {
  try {
    const strapiUrl = process.env.STRAPI_API_URL;
    if (!strapiUrl) {
      console.warn(
        "STRAPI_API_URL not configured, skipping blog posts in sitemap",
      );
      return [];
    }

    const res = await fetch(`${strapiUrl}/api/blog-posts`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      console.warn("Failed to fetch blog posts for sitemap");
      return [];
    }

    const blogs = await res.json();
    return blogs.data || [];
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
  const blogPosts = await getBlogPosts();

  // Map static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Map blog post entries
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(
    (post: { slug: string; updatedAt?: string }) => ({
      url: `${baseUrl}/blog-posts/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...blogEntries];
}
