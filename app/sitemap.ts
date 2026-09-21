import type { MetadataRoute } from 'next'

const baseUrl = 'https://ezactechnologies.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
