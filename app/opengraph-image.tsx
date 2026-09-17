import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'TELDEV Technologies — Bringing technology to you.';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0d1017',
          color: '#f9fafb',
          fontFamily: 'sans-serif',
        }}
      >
        <svg width={56} height={53} viewBox="0 0 36 34" fill="none" style={{ marginBottom: 40 }}>
          <path
            d="M0 0.125H27.8471V7.78807H23.7114V3.79348H15.9914V33.875H11.8557V3.79348H4.1357V7.78807H0V0.125Z"
            fill="#1C6CFE"
          />
          <path
            d="M23.7615 33.875C30.1614 33.875 33.3613 29.8479 33.3613 21.7936C33.3613 18.6411 32.5778 16.1191 31.0106 14.2275C29.4435 12.3259 27.316 11.375 24.6283 11.375L19.7848 11.375V14.3597H24.6764C28.8593 14.5122 30.6035 16.7648 30.6035 22.053C30.6035 24.9004 30.0782 27.1275 29.0276 28.7343C27.977 30.3309 26.5325 31.1292 24.6939 31.1292C23.8272 31.1292 23.1005 31.2309 22.5139 31.1292H15.9914V33.875H23.7615Z"
            fill="#1C6CFE"
          />
        </svg>
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.02em', display: 'flex' }}>
          Bringing technology to you.
        </div>
        <div style={{ fontSize: 28, color: '#9ba2b0', marginTop: 24, display: 'flex' }}>TELDEV Technologies</div>
      </div>
    ),
    { ...size }
  );
}
