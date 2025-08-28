// FILE: app/sitemap.ts

import { MetadataRoute } from 'next'
import { services } from '@/lib/data' // We import your services data

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = services.map((service) => ({
    // Note: The modal approach doesn't have separate pages,
    // so we link to the homepage with a hash for user experience,
    // but for SEO, we can still list the conceptual "pages".
    // A better approach for single-page SEO is to focus on the main page.
    // For this reason, we will only include the main page sections.
    url: `https://abdulwahabsaim.site/#services`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));
  
  // Since it's a single-page site, we list the main sections
  const staticUrls = [
    {
      url: 'https://abdulwahabsaim.site',
      lastModified: new Date(),
      changeFrequency: 'yearly' as 'yearly',
      priority: 1,
    },
    {
      url: 'https://abdulwahabsaim.site/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://abdulwahabsaim.site/#contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...serviceUrls];
}