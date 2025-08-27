export const runtime = 'edge'
// FILE: app/opengraph-image.tsx

import { ImageResponse } from 'next/og'

// Route segment config

// Image metadata
export const alt = 'Fancy Printing Press'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  const geistBold = fetch(
    new URL('../public/fonts/Geist-Bold.otf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#384466', // Palette 7: Oxford Blue
          color: '#F5F3F0', // Palette 7: Soft Ivory
          fontFamily: '"Geist"',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* FPP Logo Box */}
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#F5F3F0', // Soft Ivory background
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#384466', // Oxford Blue text
              marginRight: '30px',
            }}
          >
            FPP
          </div>
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold', margin: 0 }}>
              Fancy Printing Press
            </h1>
            <p style={{ fontSize: '30px', margin: '10px 0 0 0', color: '#D9D3CC' }}> {/* Muted Ivory/Gray for subheading */}
              Quality Printing, Professional Results
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: await geistBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}