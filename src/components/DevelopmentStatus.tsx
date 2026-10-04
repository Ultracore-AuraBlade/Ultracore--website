import React from 'react';
import { Activity, CheckCircle, Clock } from 'lucide-react';
import { DEVELOPMENT_STAGES } from '../data/ultracore-data';

export const DevelopmentStatus: React.FC = () => {
  return (
    <section className="relative py-20 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              ENGINEERING PIPELINE
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              DEVELOPMENT STATUS
            </h3>
          </div>

          <div className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Honest progression tracking. We do not calculate artificial completion percentages; instead, we map verifiable engineering phase gates.
          </div>
        </div>

        {/* Phase Gates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEVELOPMENT_STAGES.map((stage, idx) => {
            const isActive = stage.status === 'ACTIVE';

            return (
              <div
                key={stage.id}
                className={`p-5 rounded-2xl transition-all relative overflow-hidden ${
                  isActive
                    ? 'glass-panel border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                    : 'glass-panel-subtle border-white/5 opacity-70'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                    <h4 className="font-display font-black text-lg text-white tracking-wider">
                      {stage.label}
                    </h4>
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      ACTIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      SCHEDULED
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
