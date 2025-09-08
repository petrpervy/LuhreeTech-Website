import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(1000px 600px at -10% -10%, #5da2ff33, transparent 60%), radial-gradient(1000px 600px at 110% 110%, #ff7ab233, transparent 60%)',
          fontSize: 64,
          color: '#fff',
        }}
      >
        Agent.02 — AI that actually works
      </div>
    ),
    { width: 1200, height: 630 }
  )
}


