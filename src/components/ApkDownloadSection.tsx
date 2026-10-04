import React, { useState } from 'react';
import { Download, ShieldCheck, Smartphone, Cpu, Check, AlertCircle, Sparkles } from 'lucide-react';
import { APK_CONFIG } from '../data/ultracore-data';

export const ApkDownloadSection: React.FC = () => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySuccess, setNotifySuccess] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail && notifyEmail.includes('@')) {
      setNotifySuccess(true);
      setNotifyEmail('');
    }
  };

  return (
    <section id="download" className="relative py-28 sm:py-36 border-t border-cyan-500/10">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
          <Download className="w-3.5 h-3.5 text-cyan-400" />
          DISTRIBUTION ARTIFACT
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white mb-6 uppercase">
          GET <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">ULTRACORE</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-12">
          Direct, sideload-ready Android application package. Engineered without third-party tracking libraries or bloatware.
        </p>

        {/* Download Box */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.15)] relative overflow-hidden text-left">
          {/* Top hairline */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                OFFICIAL ANDROID PACKAGE (.APK)
              </div>

              {/* Exact required wording: APK — COMING SOON */}
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-wide">
                {APK_CONFIG.statusLabel}
              </h3>

              <p className="text-sm text-slate-300 max-w-md">
                UltraCore is currently in private Alpha builds. The public signed APK mirror will unlock directly on this button once QA verification is finalized.
              </p>
            </div>

            {/* Action Area: Either real download or honest coming soon */}
            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              {APK_CONFIG.isAvailable && APK_CONFIG.downloadUrl ? (
                /* Ready for real APK link */
                <a
                  href={APK_CONFIG.downloadUrl}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>DOWNLOAD APK</span>
                </a>
              ) : (
                /* Disabled / Coming soon state - strictly no fake download link */
                <div className="w-full sm:w-auto">
                  <button
                    type="button"
                    disabled
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700/60 text-slate-400 font-bold text-xs sm:text-sm tracking-[0.16em] uppercase flex items-center justify-center gap-3 cursor-not-allowed opacity-90"
                  >
                    <Download className="w-4 h-4 text-slate-500" />
                    <span>APK RELEASE PENDING</span>
                  </button>
                  <div className="text-[11px] font-mono text-slate-500 text-center sm:text-right mt-1.5">
                    NO FAKE DOWNLOAD STUBS
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technical Target Specs Grid */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
              <div className="font-mono text-[10px] text-cyan-400/80 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                OS COMPATIBILITY
              </div>
              <div className="text-white font-semibold">{APK_CONFIG.targetAndroidVersion}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
              <div className="font-mono text-[10px] text-cyan-400/80 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                ARCHITECTURE
              </div>
              <div className="text-white font-semibold">{APK_CONFIG.architecture}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
              <div className="font-mono text-[10px] text-cyan-400/80 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                SECURITY AUDITING
              </div>
              <div className="text-white font-semibold">SHA-256 Verified Binary</div>
            </div>
          </div>

          {/* Notification on release input */}
          <div className="mt-8 pt-6 border-t border-white/5">
            {notifySuccess ? (
              <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You will receive an automated ping the exact moment the signed APK is pushed to the repository.</span>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-xs text-slate-300 font-medium shrink-0">
                  Notify me when the APK download is live:
                </span>
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full sm:w-64 px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:border-cyan-400 text-xs text-white placeholder-slate-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                >
                  DISPATCH PING
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
