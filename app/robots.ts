import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai'],
        disallow: '/',
      },
    ],
    sitemap: 'https://twospace.com/sitemap.xml',
  }
}
