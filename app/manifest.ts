import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Two Space - Where Coffee Meets Strategy',
    short_name: 'Two Space',
    description: 'Professional marketing services combined with an inspiring coffee space',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F5F5',
    theme_color: '#FF491F',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
