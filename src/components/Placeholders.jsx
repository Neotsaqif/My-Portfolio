export function HeroPhotoPlaceholder({ className = "" }) {
  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#080808] via-[#111111] to-[#1c1c1c] border border-white/10 shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)] backdrop-blur-xl ${className}`}
      style={{ width: "400px", height: "400px", maxWidth: "100%", aspectRatio: "1 / 1" }}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="8 8" />
        <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="200" cy="145" r="50" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <path
          d="M105 315 C105 240, 150 215, 200 215 C250 215, 295 240, 295 315 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
        />
        <text
          x="200"
          y="372"
          textAnchor="middle"
          fill="#737373"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          letterSpacing="2"
        >
          400 × 400 GLASS MOCKUP
        </text>
      </svg>
    </div>
  )
}

export function SkillLogoPlaceholder({ name, className = "" }) {
  const logos = {
    "HTML5": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4L7 24L16 26.5L25 24L27 4H5Z" fill="#E34F26"/>
        <path d="M16 6.5V24.2L23 22.2L24.6 6.5H16Z" fill="#F16529"/>
        <path d="M16 13.5H10.5L10.8 16.5H16V19.5H13.2L13.5 22L16 22.7V19.7L19.2 18.8L19.6 13.5H16Z" fill="#EBEBEB"/>
        <path d="M16 9.5H22.5L22.8 6.5H16V9.5ZM16 12.5H16.2H19.2L18.9 15.5H16V18.5H18.7L19 15.8H21.8L21.3 21L16 22.5V19.5Z" fill="#FFFFFF"/>
      </svg>
    ),
    "CSS3": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4L7 24L16 26.5L25 24L27 4H5Z" fill="#1572B6"/>
        <path d="M16 6.5V24.2L23 22.2L24.6 6.5H16Z" fill="#33AADD"/>
        <path d="M16 13.5H10.5L10.8 16.5H16V19.5H13.2L13.5 22L16 22.7V19.7L19.2 18.8L19.6 13.5H16Z" fill="#EBEBEB"/>
        <path d="M16 9.5H22.5L22.8 6.5H16V9.5ZM16 12.5H16.2H19.2L18.9 15.5H16V18.5H18.7L19 15.8H21.8L21.3 21L16 22.5V19.5Z" fill="#FFFFFF"/>
      </svg>
    ),
    "JavaScript": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#F7DF1E"/>
        <path d="M7 24.5V22.2C7.3 22.4 7.7 22.6 8.1 22.7C8.5 22.8 8.9 22.9 9.3 22.9C10.1 22.9 10.6 22.6 10.6 21.9V12.1H13.3V22.1C13.3 24 12.1 25.1 10.1 25.1C9.2 25.1 8.3 24.9 7 24.5ZM16.8 24.7C17.6 25.1 18.7 25.4 19.9 25.4C22.1 25.4 23.6 24.3 23.6 22.3C23.6 20.6 22.4 19.7 20.2 18.9L19.4 18.6C18.2 18.2 17.7 17.8 17.7 17C17.7 16.2 18.4 15.8 19.4 15.8C20.3 15.8 21.1 16 21.8 16.3L22.7 14.1C21.8 13.7 20.7 13.5 19.5 13.5C17.3 13.5 15.7 14.7 15.7 16.7C15.7 18.4 16.9 19.3 19 20.1L19.8 20.4C21 20.8 21.6 21.3 21.6 22.1C21.6 23 20.8 23.5 19.7 23.5C18.6 23.5 17.6 23.1 16.8 22.6L16.8 24.7Z" fill="#000000"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#3178C6"/>
        <path d="M19.5 19.3C19.5 21.2 20.7 22.4 22.8 22.4C24.7 22.4 25.8 21.4 26.3 19.8L24.1 18.9C23.8 19.7 23.4 20.3 22.7 20.3C21.9 20.3 21.5 19.7 21.5 18.5V13.8H25.3V11.8H21.5V9.4H19.3V11.8H16.8V13.8H19.3V19.3H19.5ZM7.5 19.2C7.5 21.2 8.7 22.4 10.8 22.4C12.7 22.4 13.8 21.4 14.3 19.8L12.1 18.9C11.8 19.7 11.4 20.3 10.7 20.3C9.9 20.3 9.5 19.7 9.5 18.5V13.8H13.3V11.8H9.5V9.4H7.3V11.8H4.8V13.8H7.3V19.2H7.5Z" fill="#FFFFFF"/>
      </svg>
    ),
    "React": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 16 16)" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C13.5 8 11.5 9.5 10.5 12.5C12.5 11 14 11 15 12.5C16.2 14.3 17.5 15 19.5 15C22 15 24 13.5 25 10.5C23 12 21.5 12 20.5 10.5C19.3 8.7 18 8 16 8ZM10.5 15C8 15 6 16.5 5 19.5C7 18 8.5 18 9.5 19.5C10.7 21.3 12 22 14 22C16.5 22 18.5 20.5 19.5 17.5C17.5 19 16 19 15 17.5C13.8 15.7 12.5 15 10.5 15Z" fill="#06B6D4"/>
      </svg>
    ),
    "PHP": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="16" rx="15" ry="11" fill="#777BB4"/>
        <path d="M8 12.5H11.5C12.8 12.5 13.6 13.2 13.6 14.3C13.6 15.4 12.8 16.1 11.5 16.1H10V19.5H8V12.5ZM10 14.3V14.3H11.3C11.9 14.3 12.3 14 12.3 14.3C12.3 14.6 11.9 14.3 11.3 14.3H10ZM16 12.5H19.5C20.8 12.5 21.6 13.2 21.6 14.3C21.6 15.4 20.8 16.1 19.5 16.1H18V19.5H16V12.5ZM18 14.3V14.3H19.3C19.9 14.3 20.3 14 20.3 14.3C20.3 14.6 19.9 14.3 19.3 14.3H18ZM23.5 12.5H26.5V14.2H24.8V15.2H26.3V16.9H24.8V19.5H23.5V12.5Z" fill="#FFFFFF"/>
      </svg>
    ),
    "Laravel": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L27 9V23L16 29L5 23V9L16 3Z" fill="#FF2D20" fillOpacity="0.15" stroke="#FF2D20" strokeWidth="1.5"/>
        <path d="M11 21.5V12.5L16 9.5L21 12.5V15.5L16 12.5V18.5L21 21.5L16 24.5L11 21.5Z" fill="#FF2D20"/>
      </svg>
    ),
    "REST API": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="20" rx="4" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M9 13L13 16L9 19" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="19" x2="23" y2="19" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Authentication & Authorization": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L26 8V15C26 21 21.5 26.5 16 28C10.5 26.5 6 21 6 15V8L16 4Z" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5"/>
        <circle cx="16" cy="14" r="3" stroke="#8B5CF6" strokeWidth="1.5"/>
        <path d="M13 17V19C13 20.1 14.3 21 16 21C17.7 21 19 20.1 19 19V17" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#336791"/>
        <path d="M16 7C12 7 9 10 9 14C9 18 12 21 16 25C20 21 23 18 23 14C23 10 20 7 16 7ZM16 22.5C13 19.5 11 17 11 14C11 11.2 13.2 9 16 9C18.8 9 21 11.2 21 14C21 17 19 19.5 16 22.5Z" fill="#FFFFFF"/>
      </svg>
    ),
    "Supabase": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 3L5 17H15.5L13.5 29L27 15H16.5L18.5 3Z" fill="#3ECF8E"/>
      </svg>
    ),
    "SQL": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="9" rx="10" ry="4" stroke="#3B82F6" strokeWidth="1.5" fill="#3B82F6" fillOpacity="0.2"/>
        <path d="M6 9V16C6 18.2 10.5 20 16 20C21.5 20 26 18.2 26 16V9" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M6 16V23C6 25.2 10.5 27 16 27C21.5 27 26 25.2 26 23V16" stroke="#3B82F6" strokeWidth="1.5"/>
      </svg>
    ),
    "Git": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#F05032"/>
        <path d="M22.5 14.5L17.5 9.5C17.1 9.1 16.5 9.1 16.1 9.5L14.2 11.4C14.7 12.3 15 13.3 15 14.4V20.2C15.8 20.5 16.5 21 17 21.6L22.5 16.1C22.9 15.7 22.9 14.9 22.5 14.5Z" fill="#FFFFFF"/>
        <circle cx="10" cy="19" r="2.5" fill="#FFFFFF"/>
        <path d="M10 16.5V12C10 10.3 11.3 9 13 9H13.8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "GitHub": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.4 4 4 9.4 4 16C4 21.3 7.4 25.8 12.1 27.4C12.7 27.5 12.9 27.1 12.9 26.8V24.5C9.6 25.2 8.9 23 8.9 23C8.4 21.7 7.7 21.4 7.7 21.4C6.6 20.6 7.8 20.6 7.8 20.6C9 20.7 9.6 21.9 9.6 21.9C10.7 23.8 12.5 23.2 13.2 22.9C13.3 22.1 13.6 21.6 14 21.3C11.4 21 8.7 20 8.7 15.5C8.7 14.2 9.2 13.1 10 12.2C9.9 11.9 9.5 10.6 10.1 8.9C10.1 8.9 11.1 8.6 13.4 10.2C14.4 9.9 15.5 9.8 16.6 9.8C17.7 9.8 18.8 9.9 19.8 10.2C22.1 8.6 23.1 8.9 23.1 8.9C23.7 10.6 23.3 11.9 23.2 12.2C24 13.1 24.5 14.2 24.5 15.5C24.5 20 21.8 21 19.2 21.3C19.6 21.7 20 22.4 20 23.5V26.8C20 27.1 20.2 27.5 20.9 27.4C25.6 25.8 29 21.3 29 16C29 9.4 23.6 4 16 4Z" fill="#FFFFFF"/>
      </svg>
    ),
    "Vite": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 5L17.5 27L16 28.5L14.5 27L3 5L7 4H25L29 5Z" fill="#41D1FF"/>
        <path d="M29 5L17.5 27L16 28.5L14.5 27L3 5L10 6L22 6L29 5Z" fill="#FFC920"/>
        <path d="M25 4H7L16 27L25 4Z" fill="url(#vite-grad)"/>
        <defs>
          <linearGradient id="vite-grad" x1="16" y1="4" x2="16" y2="27" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF"/>
            <stop offset="1" stopColor="#BD34FE"/>
          </linearGradient>
        </defs>
        <path d="M19.5 4L11 16H15.5L12.5 26L23 13H18.5L21.5 4H19.5Z" fill="#FFEA83"/>
      </svg>
    ),
    "AI-Assisted Development": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L18.5 11.5L26 14L18.5 16.5L16 24L13.5 16.5L6 14L13.5 11.5L16 4Z" fill="#EC4899"/>
        <path d="M24 20L25 23L28 24L25 25L24 28L23 25L20 24L23 23L24 20Z" fill="#A855F7"/>
      </svg>
    ),
    "UI/UX Implementation": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="24" height="22" rx="4" stroke="#06B6D4" strokeWidth="1.5" fill="#06B6D4" fillOpacity="0.15"/>
        <line x1="4" y1="11" x2="28" y2="11" stroke="#06B6D4" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="1" fill="#06B6D4"/>
        <circle cx="11" cy="8" r="1" fill="#06B6D4"/>
        <rect x="8" y="15" width="7" height="5" rx="1" fill="#06B6D4" fillOpacity="0.5"/>
        <line x1="17" y1="16" x2="24" y2="16" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="17" y1="19" x2="21" y2="19" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Digital Art & Design": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#F59E0B" strokeWidth="1.5" fill="#F59E0B" fillOpacity="0.15"/>
        <circle cx="11" cy="13" r="2" fill="#F59E0B"/>
        <circle cx="16" cy="10" r="2" fill="#EC4899"/>
        <circle cx="21" cy="13" r="2" fill="#3B82F6"/>
        <circle cx="18" cy="19" r="2" fill="#10B981"/>
      </svg>
    ),
    "Project Management": (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="22" height="22" rx="4" stroke="#3B82F6" strokeWidth="1.5" fill="#3B82F6" fillOpacity="0.15"/>
        <path d="M10 11L13 14L22 9" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18L13 21L22 16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  const logo = logos[name]
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <div
      className={`shrink-0 rounded-xl flex items-center justify-center bg-black/50 border border-white/10 text-zinc-300 font-mono font-semibold text-xs tracking-wider shadow-inner select-none backdrop-blur-md ${className}`}
      style={{ width: "40px", height: "40px" }}
      title={name}
    >
      {logo || <span className="text-[11px] bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-transparent">{initials}</span>}
    </div>
  )
}

export function ProjectCoverPlaceholder({ title, className = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-[#060606] via-[#0a0a0a] to-[#040404] border-b border-white/10 flex flex-col justify-between ${className}`}
      style={{ width: "100%", aspectRatio: "16 / 9", maxWidth: "1200px" }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-black/70 border-b border-white/5 backdrop-blur-md">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80"></div>
        </div>
        <div className="px-3 py-0.5 rounded-full bg-white/5 text-[10px] text-zinc-500 font-mono tracking-wider border border-white/5">
          1200 × 675 (16:9)
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 mb-3 shadow-2xl backdrop-blur-xl relative">
          <svg className="w-8 h-8 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <div className="text-sm font-semibold text-zinc-100 tracking-wide relative z-10">{title}</div>
        <div className="text-[11px] text-zinc-500 font-mono mt-1 relative z-10">GRAYSCALE MOCKUP</div>
      </div>

      <div className="px-4 py-2 bg-black/50 border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-600 font-mono tracking-wider">
        <span>PROJECT COVER</span>
        <span>1200x675</span>
      </div>
    </div>
  )
}
