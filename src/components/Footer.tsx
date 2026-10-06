import React, { useState } from 'react';
import { Mail, Globe, Github, Twitter, Shield, FileText, X, Instagram, ArrowUpRight } from 'lucide-react';
import { ULTRACORE_BRAND } from '../data/ultracore-data';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const [modalType, setModalType] = useState<'terms' | 'contact' | null>(null);

  return (
    <footer className="relative bg-[#02050c] border-t border-cyan-500/10 pt-20 pb-16 overflow-hidden">
      {/* Subtle bottom aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Main Brand Column - EXACT BRANDING HIERARCHY (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-cyan-400/40 bg-cyan-950/40 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
              </div>
              <h2 className="font-display font-black text-2xl tracking-[0.2em] text-white">
                {ULTRACORE_BRAND.name}
              </h2>
            </div>

            {/* Exact Tagline */}
            <p className="text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase">
              {ULTRACORE_BRAND.tagline}
            </p>

            {/* Exact Reveal Line */}
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-400">
              {ULTRACORE_BRAND.revealLine}
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed pt-2">
              The official launch portal for UltraCore and Baburao. Built for Android with an uncompromising dark cinematic aesthetic and respectful privacy controls.
            </p>
          </div>

          {/* Quick Nav Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-3">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('home')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Home & Core
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('baburao')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Baburao Companion
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('features')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Core Features
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('updates')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Latest Updates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('teaser')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Aura Blade Teaser
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('screenshots')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Interface Previews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('download')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Get APK
                </button>
              </li>
            </ul>
          </div>

          {/* Official Channels & Governance (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-3">
              OFFICIAL CHANNELS
            </h3>
            <div className="pb-1">
              <a
                href="https://www.instagram.com/aura__blade/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:text-white hover:border-cyan-400 transition-all group"
              >
                <Instagram className="w-3.5 h-3.5 text-cyan-400" />
                <span>@aura__blade</span>
                <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official community channels, verified GitHub repository, and direct APK mirrors will be announced simultaneously with the public build drop.
            </p>
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => onScrollTo('privacy')}
                className="text-xs text-cyan-400 hover:text-cyan-300 block transition-colors"
              >
                Privacy Governance
              </button>
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="text-xs text-slate-400 hover:text-white block transition-colors"
              >
                Terms of Service Notice
              </button>
              <button
                type="button"
                onClick={() => setModalType('contact')}
                className="text-xs text-slate-400 hover:text-white block transition-colors"
              >
                Official Project Inquiries
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} ULTRACORE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyan-400/80">OFFICIAL ULTRACORE WEBSITE</span>
            <span>·</span>
            <span>PROD BUILD // 2026</span>
          </div>
        </div>
      </div>

      {/* Terms & Contact Modal */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setModalType(null)}
        >
          <div
            className="relative w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'terms' ? (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white">
                  Terms of Service & Usage Framework
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  UltraCore is provided for personal, non-commercial evaluation during the Alpha and Beta cycles. Automated crawling, reverse engineering of proprietary vocal weights, or unauthorized APK republishing without explicit cryptographic signatures is prohibited.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 text-xs font-mono text-cyan-400">
                  FINAL LEGAL REVISION WILL ACCOMPANY PUBLIC APK LAUNCH.
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white">
                  Official Project Inquiries
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For press inquiries, architecture collaboration, or closed alpha tester applications, maintain communication through this official launch portal.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-2 text-xs">
                  <div className="text-slate-400">Official Channel Dispatch:</div>
                  <div className="text-cyan-300 font-mono font-medium">contact@ultracore.ai (Staged for Launch)</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
