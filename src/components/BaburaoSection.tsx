import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, MessageSquare, Sparkles, Sliders } from 'lucide-react';
import { BABURAO_SAMPLE_TOPICS } from '../data/ultracore-data';

export const BaburaoSection: React.FC = () => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <section id="baburao" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Companion Core
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
            MEET <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">BABURAO</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            UltraCore's original male AI companion. Built not as an emotionless corporate utility, but as an authentic, bro-like companion designed for natural everyday interaction.
          </p>
        </div>

        {/* Main Content Grid: Persona Attributes & Audio Demo Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personality Archetype & Traits (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Persona Glass Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Subtle top light hairline */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                    The Bro Who Actually Listens
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80 mt-0.5 tracking-wider">
                    PERSONALITY // CASUAL · HELPFUL · BRO-LIKE
                  </p>
                </div>
                {/* Orbital Mini Badge */}
                <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center bg-cyan-950/40 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="absolute inset-1 rounded-full border border-dashed border-cyan-400/40 animate-spin-slow" />
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Baburao is engineered to eliminate the stiff robotic cadence typical of voice assistants. He speaks in a relaxed, grounded tone, remembers your ongoing context, and gives you real, practical assistance—whether you're troubleshooting code at 2 AM or organizing tomorrow's chaotic schedule.
              </p>

              {/* Persona Attributes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { title: 'Casual Tone', desc: 'No stiff formal greetings. Speaks like a trusted close friend.' },
                  { title: 'Conversational', desc: 'Maintains fluid bilateral dialogue with natural turn-taking.' },
                  { title: 'Helpful', desc: 'Action-oriented solutions without unnecessary verbosity.' },
                  { title: 'Everyday Ready', desc: 'Optimized for on-the-go quick queries and voice commands.' },
                  { title: 'Natural Pacing', desc: 'Realistic pauses and cadence adjustments.' },
                  { title: 'Contextual', desc: 'Picks up right where your last conversation left off.' },
                ].map((trait, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                      {trait.title}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight">
                      {trait.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversation Topic Selector */}
            <div className="glass-panel-subtle rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  CONVERSATIONAL CONTEXTS
                </span>
                <span className="text-[11px] text-slate-500">Select to preview tone</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BABURAO_SAMPLE_TOPICS.map((topic, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTopic(i)}
                    className={`text-left p-3.5 rounded-xl transition-all border ${
                      activeTopic === i
                        ? 'bg-cyan-950/40 border-cyan-400/50 text-white shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                        : 'bg-slate-950/40 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/90 mb-1">
                      {topic.category}
                    </div>
                    <div className="text-xs font-medium text-slate-200 line-clamp-1">
                      {topic.title}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-950/60 border border-cyan-500/10 text-xs text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">How Baburao handles this: </span>
                {BABURAO_SAMPLE_TOPICS[activeTopic].description}
              </div>
            </div>
          </div>

          {/* Right Column: Audio System & Voice Demo Console (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Audio Voice Demonstration Console */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/20 relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.1)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                    VOICE DEMO PREVIEW
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                  IN SYNTHESIS
                </span>
              </div>

              {/* Central Audio Waveform Visualizer Placeholder */}
              <div className="h-44 sm:h-52 rounded-xl bg-slate-950/90 border border-cyan-500/20 p-4 flex flex-col justify-between relative overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0369a10a_1px,transparent_1px),linear-gradient(to_bottom,#0369a10a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                {/* Top readout info */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>CHANNEL: BABURAO_VOCAL_01</span>
                  <span>FREQ: 48.0 kHz</span>
                </div>

                {/* Dynamic Waveform Bars Simulation */}
                <div className="relative z-10 flex items-center justify-center gap-1.5 h-24 my-auto px-2">
                  {[24, 45, 68, 30, 85, 92, 54, 38, 76, 88, 40, 60, 95, 70, 50, 82, 35, 65, 45, 20].map((height, i) => (
                    <div
                      key={i}
                      className="w-1.5 sm:w-2 rounded-full bg-gradient-to-t from-cyan-600 via-sky-400 to-cyan-200 transition-all duration-300"
                      style={{
                        height: isPlayingPreview
                          ? `${Math.max(15, (height * (0.6 + Math.sin((i + Date.now()) * 0.05) * 0.4)))}%`
                          : `${Math.max(12, height * 0.35)}%`,
                        opacity: isPlayingPreview ? 0.95 : 0.4,
                      }}
                    />
                  ))}
                </div>

                {/* Bottom Readout */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Sliders className="w-3 h-3 text-cyan-400" />
                    ACOUSTIC RESONANCE: BRO_V1
                  </span>
                  <span>{isPlayingPreview ? 'SIMULATING WAVE' : 'STANDBY'}</span>
                </div>
              </div>

              {/* Player Controls & Honest Status Callout */}
              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                    className="flex-1 py-3 px-4 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 hover:border-cyan-300 font-semibold text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                  >
                    {isPlayingPreview ? (
                      <>
                        <Pause className="w-4 h-4 text-cyan-300" />
                        <span>PAUSE WAVEFORM SIMULATION</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 text-cyan-300 fill-current" />
                        <span>SIMULATE WAVEFORM DYNAMICS</span>
                      </>
                    )}
                  </button>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400">
                    {isPlayingPreview ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
                  </div>
                </div>

                {/* Strict Truth-in-Advertising Note */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 text-[11px] text-slate-400 leading-normal">
                  <span className="text-cyan-400 font-semibold">Note on Voice Assets: </span>
                  Actual master studio audio files for Baburao are undergoing final acoustic post-processing. No synthetic mock recordings are used here. Official voice clips will drop alongside the first public build announcement.
                </div>
              </div>
            </div>

            {/* Micro Architecture Callout */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Full On-Device Pipeline: </span>
                Engineered for immediate hands-free wake word recognition and on-device natural voice interaction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
