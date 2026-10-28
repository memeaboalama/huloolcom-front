import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white' | 'color';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'color' }) => {
  // Colors tuned to the provided images: primary blue and orange accent
  const primary = variant === 'white' ? '#FFFFFF' : '#0B74A8';
  const accent = '#FFB020';

  return (
    <svg className={className} viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Huloolcom logo">
      <defs>
        <style>{`.taqa-text{font-family: Inter, Cairo, sans-serif; font-weight:700; font-size:28px; fill:${primary}}`}</style>
      </defs>

      {/* Mark: stylized 360 with bolt */}
      <g transform="translate(6,6)">
        <g transform="translate(0,6)">
          <path d="M8 10 C8 6, 14 2, 20 2 C26 2, 30 6, 30 10 C30 14, 26 18, 20 18 C14 18, 10 14, 8 10 Z" fill={primary} opacity="0.06" />
        </g>

        <g transform="translate(0,0) scale(1.1)">
          <text className="taqa-text" x="70" y="34">Huloolcom</text>
          <text className="taqa-text" x="150" y="34" style={{fontWeight:600,fontSize:22}}>{'360'}</text>
        </g>

        {/* Bolt icon to the right of 360 */}
        <g transform="translate(178,6) scale(0.8)">
          <path d="M12 2 L7 14 H11 L6 22 L21 8 H15 L20 2 Z" fill={accent} stroke={primary} strokeWidth="0.8" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
