import React, { useState } from 'react';
import { Shield, Lock, EyeOff, UserCheck, ChevronDown, ChevronUp, FileText } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  const [showFullPolicy, setShowFullPolicy] = useState(false);

  return (
    <section id="privacy" className="relative py-28 border-t border-cyan-500/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            USER CONTROL & INTEGRITY
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white mb-4 uppercase">
            PRIVACY BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">DESIGN</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            UltraCore is built on the belief that a true companion AI respects your boundaries. We prioritize user control and clear memory governance from day one.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-white">Local Memory Governance</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              You possess granular oversight of what Baburao remembers. You can inspect, redact, or wipe context memories at any time.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-white">Explicit Android Permissions</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              UltraCore never executes Android intents or accesses device storage without prompt authorization and granular per-action user consent.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-white">Zero Broker Telemetry</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We do not package user dialogue or personal information for advertising brokers or unauthorized third-party resale.
            </p>
          </div>
        </div>

        {/* Expandable Privacy Policy Document Placeholder */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
          <button
            type="button"
            onClick={() => setShowFullPolicy(!showFullPolicy)}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer hover:bg-white/5 transition-colors focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-cyan-400" />
              <div>
                <span className="font-display font-bold text-sm text-white">
                  ULTRACORE PRIVACY POLICY PREVIEW
                </span>
                <span className="block text-[11px] font-mono text-cyan-400/80">
                  VERSION 0.1-DRAFT // PRE-RELEASE PROVISIONS
                </span>
              </div>
            </div>
            <div className="p-1 rounded-md bg-white/5 text-slate-300">
              {showFullPolicy ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showFullPolicy && (
            <div className="p-6 sm:p-8 pt-0 border-t border-white/5 space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
              <p>
                <strong>Preliminary Transparency Statement:</strong> UltraCore is currently under active engineering development. Formal, legally binding privacy documentation will be published and certified prior to the distribution of public release builds.
              </p>
              <p>
                <strong>1. Data Minimization:</strong> UltraCore processes voice audio exclusively for requested conversational turns. Speech audio buffers are ephemeral and are not stored permanently on remote servers without explicit user invocation.
              </p>
              <p>
                <strong>2. Storage & Vault Encryption:</strong> Items designated for the Knowledge Vault and associative contextual memory are encrypted using standard Android secure keystore protocols.
              </p>
              <p>
                <strong>3. Revocation:</strong> Users maintain uninhibited rights to execute total wipe operations, removing all cached dialogue history, contextual graphs, and application metadata.
              </p>
              <div className="p-3 rounded-lg bg-slate-950/80 border border-white/5 text-[11px] text-slate-400">
                Official legal certification and privacy officer contact handles will be registered upon public APK mirror publication.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
