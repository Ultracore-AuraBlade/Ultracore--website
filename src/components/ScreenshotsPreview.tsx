import React, { useState } from 'react';
import { Layers, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';
import { SCREENSHOT_CATEGORIES, ScreenshotCategory } from '../data/ultracore-data';

export const ScreenshotsPreview: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SCREENSHOT_CATEGORIES[0].id);

  const activeCategory = SCREENSHOT_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SCREENSHOT_CATEGORIES[0];

  return (
    <section id="screenshots" className="relative py-28 sm:py-36 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            INTERFACE BLUEPRINTS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6 uppercase">
            INSIDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">ULTRACORE</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Modular layout previews and interface architectures across core application views. Ready for verified APK build captures.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SCREENSHOT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategoryId === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Showcase Panel with Device Blueprint Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Device Frame Placeholder (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            {/* Elegant Device Frame */}
            <div className="w-[280px] sm:w-[320px] aspect-[9/19] rounded-[42px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-[#030712] border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] relative">
              {/* Top Speaker / Camera Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-slate-950 flex items-center justify-center gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-8 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Screen Body */}
              <div className="w-full h-full rounded-[32px] bg-slate-950 overflow-hidden relative flex flex-col justify-between p-5 border border-white/5">
                {activeCategory.imageUrl ? (
                  /* If a real screenshot image URL is populated in data */
                  <img
                    src={activeCategory.imageUrl}
                    alt={`UltraCore ${activeCategory.title} Screenshot`}
                    className="w-full h-full object-cover rounded-[28px]"
                  />
                ) : (
                  /* Elegant Empty Preview Frame with Architectural Visual Details */
                  <div className="w-full h-full flex flex-col justify-between pt-8 pb-4 relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                    {/* App Bar Simulation */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-cyan-400/50 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        </div>
                        <span className="font-display font-bold text-xs text-white">ULTRACORE</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/80">{activeCategory.label}</span>
                    </div>

                    {/* Central Wireframe Placeholder Visual */}
                    <div className="my-auto text-center space-y-4 px-2">
                      <div className="w-16 h-16 rounded-2xl mx-auto bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                        <ImageIcon className="w-7 h-7 text-cyan-300/80" />
                      </div>

                      <div className="space-y-1.5">
                        <div className="font-display text-sm font-bold text-white tracking-wide">
                          {activeCategory.title}
                        </div>
                        <div className="font-mono text-[10px] text-cyan-400/80 tracking-wider">
                          REAL SCREENSHOT COMING SOON
                        </div>
                        <p className="text-[11px] text-slate-400 max-w-[200px] mx-auto leading-tight pt-1">
                          Display frame ready for verified APK release assets.
                        </p>
                      </div>

                      {/* Wireframe simulated elements */}
                      <div className="space-y-2 pt-2">
                        <div className="h-6 rounded-lg bg-slate-900 border border-white/5 w-full flex items-center px-2">
                          <div className="h-1.5 w-1/3 bg-cyan-500/30 rounded-full" />
                        </div>
                        <div className="h-10 rounded-lg bg-slate-900/60 border border-white/5 w-full flex items-center justify-between px-2">
                          <div className="h-1.5 w-1/2 bg-slate-700 rounded-full" />
                          <div className="h-3 w-3 rounded-full bg-cyan-400/40" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Simulation */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-around text-[9px] font-mono text-slate-500">
                      <span>VOICE</span>
                      <span className="text-cyan-400 font-bold">CORE</span>
                      <span>MEMORY</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Category Details & Specs (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                MODULE PREVIEW // {activeCategory.label}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                {activeCategory.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {activeCategory.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  DESIGN SPECIFICATIONS:
                </div>
                <div className="space-y-2">
                  {activeCategory.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-slate-900/60 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Easy replacement callout */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                To link real UI captures: update <span className="text-cyan-400">imageUrl</span> in <code className="text-slate-400">SCREENSHOT_CATEGORIES</code>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
