import React from 'react';
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react';
import { OrbitalCore } from './OrbitalCore';
import { ULTRACORE_BRAND, APK_CONFIG } from '../data/ultracore-data';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden cinematic-bg"
    >
      {/* Background Starscape / Cosmos Subtle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-1/4 left-1/5 w-1 h-1 bg-cyan-200 rounded-full animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }}
        />
        <div
          className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-cyan-100 rounded-full opacity-60 animate-pulse"
          style={{ animationDuration: '7s' }}
        />
      </div>

      {/* Subtle Grid Plane */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Hierarchy Header Block - EXACT COMPLIANCE:
            ULTRACORE
            Your AI. Your Bro.
            AURA__BLADE IS HERE.
        */}
        <div className="flex flex-col items-center space-y-2.5 max-w-3xl">
          {/* Main Brand */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-[0.16em] text-white drop-shadow-[0_0_35px_rgba(56,189,248,0.25)] select-none">
            {ULTRACORE_BRAND.name}
          </h1>

          {/* Small tagline directly underneath */}
          <p className="text-sm sm:text-base md:text-lg font-medium tracking-[0.35em] text-slate-300 uppercase">
            {ULTRACORE_BRAND.tagline}
          </p>

          {/* Reveal / Teaser Line immediately below */}
          <div className="pt-1">
            <span className="inline-block font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              {ULTRACORE_BRAND.revealLine}
            </span>
          </div>

          {/* Supporting Copy */}
          <p className="pt-3 text-sm sm:text-base md:text-lg text-slate-400 font-normal max-w-xl mx-auto leading-relaxed">
            {ULTRACORE_BRAND.heroSupportingLine}
          </p>
        </div>

        {/* Central Stylized AI Core + 3-4 Dimensional Orbital Rings */}
        <div className="my-6 sm:my-8 transition-transform duration-700 hover:scale-[1.02] flex items-center justify-center">
          <OrbitalCore size="hero" interactive={true} />
        </div>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          {/* Primary CTA: EXPLORE ULTRACORE */}
          <button
            type="button"
            onClick={() => onScrollTo('baburao')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>EXPLORE ULTRACORE</span>
            <ChevronRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: SEE WHAT'S COMING */}
          <button
            type="button"
            onClick={() => onScrollTo('teaser')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>SEE WHAT'S COMING</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Status Callout - Clear and Honest */}
        <div className="mt-8 flex items-center gap-3 text-xs tracking-wider text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
          <span>PROJECT STAGE // {APK_CONFIG.statusLabel}</span>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={() => onScrollTo('baburao')}
          aria-label="Scroll down to Baburao section"
          className="mt-12 p-2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce focus:outline-none"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
