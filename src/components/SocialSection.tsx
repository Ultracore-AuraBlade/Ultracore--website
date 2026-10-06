import React from 'react';
import { Instagram, ArrowUpRight, Radio } from 'lucide-react';

export const SocialSection: React.FC = () => {
  return (
    <section
      id="connect"
      className="relative py-20 sm:py-28 border-t border-cyan-500/10 overflow-hidden bg-[#030712]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[300px] bg-cyan-600/8 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          OFFICIAL FREQUENCY
        </div>

        {/* Section Heading */}
        <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white mb-4 uppercase">
          CONNECT WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">ULTRACORE</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed mb-10">
          Connect directly with the official UltraCore frequency on Instagram for transmission logs, project reveals, and direct updates.
        </p>

        {/* Premium Instagram Profile Card */}
        <div className="max-w-md mx-auto glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden text-center group">
          {/* Subtle top hairline */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {/* Instagram Icon with glowing atmospheric ring */}
          <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            {/* Outer soft aura */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/30 transition-all duration-300" />
            
            {/* Icon container */}
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#0e1d35] via-[#071324] to-[#030914] border border-cyan-400/40 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.25)] group-hover:border-cyan-300 transition-colors">
              <Instagram className="w-9 h-9 text-cyan-300 group-hover:scale-105 transition-transform" />
            </div>
          </div>

          {/* Display Name & Handle */}
          <div className="space-y-1 mb-8">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wider">
              AURA__BLADE
            </h3>
            <p className="font-mono text-sm sm:text-base text-cyan-400 font-semibold tracking-wide">
              @aura__blade
            </p>
          </div>

          {/* Premium Follow Button */}
          <a
            href="https://www.instagram.com/aura__blade/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-cyan-100" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-200" />
          </a>

          {/* Verification Protocol Tag */}
          <div className="mt-5 text-[11px] font-mono text-slate-500">
            OFFICIAL TRANSMISSION CHANNEL // VERIFIED PROTOCOL
          </div>
        </div>
      </div>
    </section>
  );
};
