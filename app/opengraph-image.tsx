// FILE: app/opengraph-image.tsx

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Fancy Printing Press';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const geistBold = fetch(
    new URL('../public/fonts/Geist-Bold.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  // --- FETCH THE NEW LOGO IMAGE ---
  const logoUrl = new URL('../public/logo.png', import.meta.url); // It will fetch public/logo.png
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer());

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
          backgroundColor: '#0A2540', // Your primary blue
          color: '#F5F3F0',         // Your soft ivory
          fontFamily: '"Geist"',
          padding: '60px',
        }}
      >
        {/* --- DISPLAY THE LOGO IMAGE --- */}
        <img
          // @ts-ignore
          src={logoData}
          alt="Fancy Printing Press Logo"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'contain',
            marginBottom: '40px',
          }}
        />
        <h1 style={{ fontSize: '72px', fontWeight: 'bold', margin: 0, lineHeight: 1.1, textAlign: 'center', color: 'white' }}>
          Fancy Printing Press
        </h1>
        <p style={{ fontSize: '36px', margin: '20px 0 0 0', color: '#BCCCDC', textAlign: 'center' }}>
          Quality Printing, Professional Results
        </p>
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
  );
}