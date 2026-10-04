import React, { useState } from 'react';
import { Play, Sparkles, Film, X, ShieldAlert, Radio } from 'lucide-react';
import { ULTRACORE_BRAND } from '../data/ultracore-data';

export const AuraBladeTeaser: React.FC = () => {
  const [isTeaserModalOpen, setIsTeaserModalOpen] = useState(false);

  return (
    <section id="teaser" className="relative py-28 sm:py-36 overflow-hidden border-t border-cyan-500/10">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-700/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mysterious Cinematic Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-[0.25em] uppercase mb-5">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            CLASSIFIED ARCHITECTURE // REVEAL
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-[0.14em] text-white uppercase drop-shadow-[0_0_40px_rgba(56,189,248,0.3)] mb-4">
            {ULTRACORE_BRAND.revealLine}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            The high-throughput cognitive engine designed to power Baburao's low-latency dialogue and Android contextual execution.
          </p>
        </div>

        {/* Cinematic Media Area / Trailer Placeholder */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/25 p-3 sm:p-5 shadow-[0_0_60px_-15px_rgba(6,182,212,0.25)]">
          {/* Outer hairline aura */}
          <div className="relative aspect-video rounded-2xl bg-gradient-to-b from-[#0a1224] via-[#040813] to-[#020409] flex flex-col items-center justify-center overflow-hidden border border-white/10 group cursor-pointer"
               onClick={() => setIsTeaserModalOpen(true)}
          >
            {/* Ambient Background Orbital Geometry */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
              <div className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full border border-dashed border-cyan-400/40 animate-spin-slow" />
              <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full border border-cyan-500/20 animate-spin-slow-reverse" />
              <div className="absolute w-28 h-28 rounded-full bg-cyan-500/30 blur-2xl animate-pulse-glow" />
            </div>

            {/* Subtle Horizon Light Beam */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-[1px]" />

            {/* Central Teaser Prompt */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              {/* Cinematic Play Orb */}
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-cyan-950/80 border-2 border-cyan-400/60 flex items-center justify-center shadow-[0_0_35px_rgba(56,189,248,0.4)] group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300 mb-6">
                <Play className="w-8 h-8 sm:w-9 sm:h-9 text-cyan-200 fill-current ml-1" />
              </div>

              {/* Exact wording required: TRAILER COMING SOON */}
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl sm:text-4xl tracking-[0.2em] text-white">
                  TRAILER COMING SOON
                </h3>
                <p className="font-mono text-xs sm:text-sm tracking-widest text-cyan-300">
                  AURA__BLADE OFFICIAL REVEAL TEASER // 4K 60FPS
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="mt-6 px-6 py-2.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 text-xs font-semibold tracking-widest uppercase transition-all duration-200 flex items-center gap-2"
              >
                <Film className="w-4 h-4 text-cyan-400" />
                <span>PREVIEW TEASER CARD</span>
              </button>
            </div>

            {/* Corner Technical Metadata */}
            <div className="absolute top-4 left-5 font-mono text-[10px] text-cyan-400/60 tracking-wider">
              ASPECT // 16:9 CINEMATIC
            </div>
            <div className="absolute bottom-4 right-5 font-mono text-[10px] text-cyan-400/60 tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              STATUS // ENCODING POST-PRODUCTION
            </div>
          </div>
        </div>

        {/* Narrative Teaser Columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel-subtle border border-white/5">
            <h4 className="font-display text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Sub-Second Reflexes
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed to minimize conversational latency so Baburao interrupts, acknowledges, and responds with the timing of a real friend.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-subtle border border-white/5">
            <h4 className="font-display text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Fluid Memory Routing
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Aura Blade unifies short-term vocal context with long-term stored preferences without ballooning system overhead.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-subtle border border-white/5">
            <h4 className="font-display text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Restrained Blue Energy
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Visual feedback channels communicate processing intensity with elegant orbital rings and subtle cyan luminescent pulses.
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic Teaser Overlay Modal */}
      {isTeaserModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          onClick={() => setIsTeaserModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-[0_0_80px_rgba(6,182,212,0.3)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setIsTeaserModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Teaser Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                TEASER REEL STATUS
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-wide">
                  AURA__BLADE // OFFICIAL TEASER
                </h3>
                <p className="text-sm font-mono text-cyan-400 mt-1">
                  PREMIERING WITH THE ULTRACORE ALPHA DROP
                </p>
              </div>

              {/* Ambient visualizer inside modal */}
              <div className="aspect-video w-full rounded-2xl bg-slate-950 border border-cyan-500/20 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div className="w-32 h-32 rounded-full border border-cyan-400/30 animate-spin-slow flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 blur-xl" />
                  <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8]" />
                </div>
                <div className="mt-6 text-center space-y-2">
                  <p className="font-display text-lg font-bold text-white tracking-wider">
                    "AURA__BLADE IS HERE."
                  </p>
                  <p className="text-xs text-slate-400 max-w-md">
                    Master audio tracks and render passes are in final color grading. The complete teaser trailer will unlock directly on this URL.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400 border-t border-white/5">
                <span>RUNTIME // ~01:24</span>
                <span>RESOLUTION // 3840 x 2160 UHD</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
