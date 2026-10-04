import React, { useState } from 'react';
import { GitCommit, Calendar, Tag, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { LATEST_UPDATES, UpdateEntry } from '../data/ultracore-data';

export const LatestUpdates: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(LATEST_UPDATES[0]?.id || '');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const getStatusColor = (status: UpdateEntry['status']) => {
    switch (status) {
      case 'CURRENT BUILD':
        return 'text-cyan-300 bg-cyan-950/70 border-cyan-400/40';
      case 'STABLE':
        return 'text-emerald-300 bg-emerald-950/70 border-emerald-400/40';
      case 'INTERNAL TEST':
        return 'text-sky-300 bg-sky-950/70 border-sky-400/40';
      case 'PLANNED':
        return 'text-slate-400 bg-slate-900 border-slate-700';
    }
  };

  return (
    <section id="updates" className="relative py-28 sm:py-36 border-t border-cyan-500/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
            Development Changelog
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
            LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">UPDATES</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Continuous engineering logs documenting architectural milestones, Baburao persona tuning, and Android runtime stability.
          </p>
        </div>

        {/* Updates Timeline List */}
        <div className="space-y-6">
          {LATEST_UPDATES.map((entry) => {
            const isExpanded = expandedId === entry.id;

            return (
              <div
                key={entry.id}
                className={`glass-panel rounded-2xl transition-all duration-300 border ${
                  isExpanded ? 'border-cyan-500/35 bg-slate-950/70' : 'border-white/5 hover:border-cyan-500/20'
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleExpand(entry.id)}
                  className="w-full text-left p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    {/* Version Tag */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm sm:text-base font-bold text-cyan-300 tracking-wider">
                        {entry.version}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getStatusColor(entry.status)}`}>
                        {entry.status}
                      </span>
                    </div>

                    <span className="hidden sm:inline text-slate-600">/</span>

                    {/* Title */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      {entry.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {entry.date}
                    </span>
                    <div className="p-1 rounded-md bg-white/5 text-slate-300">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expandable Details Area */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/5 space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {entry.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-cyan-400/90 tracking-wider uppercase">
                        KEY ENGINEERING DELIVERABLES:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {entry.changes.map((change, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/50 border border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on data extensibility */}
        <div className="mt-8 text-center text-xs font-mono text-slate-400">
          DATA REPOSITORY // ALL ENTRIES ARE MAINTAINED IN REAL TIME VIA <code className="text-cyan-300">src/data/ultracore-data.ts</code>
        </div>
      </div>
    </section>
  );
};
