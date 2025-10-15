import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Two Space - Where Coffee Meets Strategy'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: '#F5F5F5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Logo Circle */}
        <div
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: '#FF491F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div style={{
            color: '#2B2B2B',
            fontSize: '48px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: 1,
          }}>
            <div>two</div>
            <div>SPACE</div>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#2B2B2B',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Where Coffee Meets{' '}
          <span style={{ color: '#FF491F', fontStyle: 'italic' }}>
            Strategy
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#2B2B2B',
            opacity: 0.6,
            textAlign: 'center',
          }}
        >
          Coming Soon
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
