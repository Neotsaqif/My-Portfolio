import profileImg from '../assets/my-picture.jpeg'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background blur lights */}
      <div className="absolute top-1/2 left-10 md:left-1/4 -translate-y-1/2 w-72 h-72 bg-white/[0.04] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 md:right-1/4 -translate-y-1/2 w-72 h-72 bg-zinc-400/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-zinc-200 animate-pulse"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 className="font-extrabold text-white tracking-tight leading-tight flex flex-col gap-1.5">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-300">Hi, I'm</span>
            <span className="text-5xl sm:text-6xl lg:text-7xl gradient-text-mono">Tsaqif Neoclovin</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-zinc-400 tracking-wide">
            Full Stack Web Developer
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl glass-button text-zinc-200 font-semibold hover:-translate-y-0.5 text-sm"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center relative">
          {/* Ambient background glow */}
          <div className="absolute inset-0 w-full h-full bg-white/[0.06] rounded-full blur-3xl pointer-events-none scale-110"></div>
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-24 h-72 bg-white/[0.07] rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-24 h-72 bg-zinc-400/[0.05] rounded-full blur-3xl pointer-events-none"></div>

          {/* Smooth blended image container */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            <img
              src={profileImg}
              alt="Tsaqif Neoclovin"
              className="w-full h-full object-cover rounded-full [mask-image:radial-gradient(circle_at_center,black_45%,rgba(0,0,0,0.7)_65%,transparent_98%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_45%,rgba(0,0,0,0.7)_65%,transparent_98%)] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
