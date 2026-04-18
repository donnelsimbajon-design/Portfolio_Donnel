export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden bg-[#050505]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.015; }
          50% { transform: scale(1.05); opacity: 0.035; }
        }
      `}</style>

      {/* Subtle ambient glow behind text side */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white rounded-full blur-[140px] animate-[breathe_8s_ease-in-out_infinite] pointer-events-none z-0"></div>

      {/* Left Content — Old minimalist centered style */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 md:px-16 lg:px-24 py-28 lg:py-0 relative z-10 animate-[fadeIn_1s_ease-out_forwards] opacity-0">

        {/* Pill Badge */}
        <div className="px-5 py-2 mb-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase">Available for new opportunities</span>
        </div>

        {/* EDIT HERE — Your Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
          My Portfolio
        </h1>

        {/* EDIT HERE — Your Title */}
        <h2 className="text-xl md:text-2xl text-neutral-500 font-light mb-8 tracking-wide">
          Full-Stack Web Architect
        </h2>

        {/* EDIT HERE — Tagline */}
        <p className="max-w-lg text-lg text-neutral-400 mb-12 leading-relaxed font-light">
          Engineering immersive, high-performance digital environments.
          Focusing on elegant aesthetics and robust architecture on the modern web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors duration-300 text-sm tracking-wide text-center"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-neutral-700 text-white font-medium rounded-full hover:border-neutral-500 transition-colors duration-300 text-sm tracking-wide text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right — Diagonal Clipped Photo */}
      <div
        className="hidden lg:block w-[50%] absolute top-0 right-0 h-full animate-[fadeIn_1s_ease-out_0.3s_forwards] opacity-0"
        style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 5% 100%)' }}
      >
        {/*<img
          src="/hero.png"
          alt="Developer portrait"
          className="w-full h-full object-cover"
        />*/}

        {/* Dark overlay on the image */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>

      {/* Mobile fallback */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img src="/hero.png" alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/60"></div>
      </div>
    </section>
  );
}
