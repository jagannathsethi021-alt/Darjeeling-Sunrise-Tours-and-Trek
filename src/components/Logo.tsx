import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  const isLight = variant === 'light';

  // Responsive size definitions
  const dimensions = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-14 lg:h-16',
    lg: 'h-16 sm:h-20 lg:h-24',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Mountain & Sunrise Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 160 110"
          className={`${dimensions} w-auto drop-shadow-md select-none`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glowing Sun in the background */}
          <circle cx="80" cy="52" r="38" fill="url(#sun-gradient)" />

          {/* Sun Ray Warm Rim */}
          <circle
            cx="80"
            cy="52"
            r="42"
            stroke="url(#sun-rim)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.6"
          />

          {/* Flying Birds over the mountain sunrise */}
          <path
            d="M108 22 Q112 18 116 22 Q120 18 124 22"
            stroke="#1E293B"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M122 30 Q125 27 128 30 Q131 27 134 30"
            stroke="#1E293B"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M132 40 Q135 37 138 40 Q141 37 144 40"
            stroke="#1E293B"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />

          {/* Majestic Snowy Kanchenjunga Mountain Peaks */}
          {/* Main Peak Center */}
          <polygon points="80,18 52,65 108,65" fill="#1D4ED8" />
          <polygon points="80,18 68,48 80,42 92,52 80,18" fill="#FFFFFF" />
          <polygon points="80,18 92,52 108,65 80,42" fill="#93C5FD" />

          {/* Left Peak */}
          <polygon points="46,32 18,75 74,75" fill="#1E40AF" />
          <polygon points="46,32 32,58 46,52 60,62 46,32" fill="#FFFFFF" />
          <polygon points="46,32 60,62 74,75 46,52" fill="#BFDBFE" />

          {/* Right Peak */}
          <polygon points="114,35 88,78 142,78" fill="#1E3A8A" />
          <polygon points="114,35 102,60 114,54 126,64 114,35" fill="#FFFFFF" />
          <polygon points="114,35 126,64 142,78 114,54" fill="#93C5FD" />

          {/* Rolling Green Pine Slopes & Clouds */}
          <path
            d="M10 85 Q40 68 80 75 Q120 68 150 85 L150 100 L10 100 Z"
            fill="url(#hill-gradient)"
          />

          {/* Pine Trees Silhouette on ridges */}
          <polygon points="25,72 21,80 29,80" fill="#064E3B" />
          <polygon points="32,70 27,80 37,80" fill="#064E3B" />
          <polygon points="38,73 34,82 42,82" fill="#047857" />
          <polygon points="120,72 116,81 124,81" fill="#064E3B" />
          <polygon points="128,69 123,80 133,80" fill="#064E3B" />
          <polygon points="135,74 131,82 139,82" fill="#047857" />

          {/* Trekker Silhouette on Hillock with Walking Stick */}
          <circle cx="58" cy="46" r="3" fill="#0F172A" />
          {/* Backpack & body */}
          <path
            d="M54 50 Q52 56 56 61 L60 61 L61 52 Z"
            fill="#0F172A"
          />
          {/* Trekking Pole */}
          <line
            x1="63"
            y1="50"
            x2="65"
            y2="66"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="sun-gradient" x1="80" y1="14" x2="80" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#FDE047" />
            </linearGradient>
            <linearGradient id="sun-rim" x1="38" y1="52" x2="122" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="hill-gradient" x1="80" y1="70" x2="80" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Lockup matching the logo font & leaf */}
      <div className="flex flex-col text-left justify-center">
        {/* "Darjeeling" cursive/script title */}
        <div className="flex items-center">
          <span
            className={`text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight leading-none ${
              isLight ? 'text-white' : 'text-[#064E3B]'
            }`}
            style={{
              fontFamily: "'Plus Jakarta Sans', cursive, sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            Darjeeling
          </span>
          {/* Leaf on the 'g' */}
          <svg
            className="w-4 h-4 -ml-0.5 -mt-2 text-emerald-500 fill-emerald-500 rotate-12"
            viewBox="0 0 24 24"
          >
            <path d="M17 8C8 10 5 19 5 19s7-1 11-5c3-3 3-6 1-6z" />
          </svg>
        </div>

        {/* "SUNRISE" bold vibrant orange title */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className="text-xs sm:text-sm font-black tracking-[0.22em] uppercase leading-none bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] bg-clip-text text-transparent"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            SUNRISE
          </span>
        </div>

        {/* "— TOURS AND TREK —" with subtext */}
        <div className="flex items-center gap-1 mt-0.5">
          <span
            className={`text-[8px] sm:text-[9px] font-bold tracking-[0.25em] uppercase ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            — TOURS AND TREK —
          </span>
        </div>
      </div>
    </div>
  );
};
