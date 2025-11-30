import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codekids.tech';
  const currentDate = new Date();

  return [
    // Main Pages - High Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // CodeKids Jr Pages - High Priority
    {
      url: `${baseUrl}/codekids-jr`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/codekids-jr/pricing`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    // CodeKids Pro Pages - High Priority
    {
      url: `${baseUrl}/codekids-pro`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/codekids-pro/pricing`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    // Supporting Pages
    {
      url: `${baseUrl}/parents`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/labs-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}

