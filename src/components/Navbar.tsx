import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ULTRACORE_BRAND } from '../data/ultracore-data';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'BABURAO', href: '#baburao' },
    { label: 'FEATURES', href: '#features' },
    { label: 'UPDATES', href: '#updates' },
    { label: 'TEASER', href: '#teaser' },
    { label: 'SCREENSHOTS', href: '#screenshots' },
    { label: 'DOWNLOAD', href: '#download' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          {/* Miniature Orbital Symbol */}
          <div className="relative w-8 h-8 rounded-full flex items-center justify-center border border-cyan-400/30 bg-cyan-950/30 group-hover:border-cyan-400/60 transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-300/40 animate-spin-slow" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-[0.2em] text-white group-hover:text-cyan-300 transition-colors">
              {ULTRACORE_BRAND.name}
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-0.5">
              {ULTRACORE_BRAND.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="text-xs font-semibold tracking-widest text-slate-300 hover:text-cyan-300 transition-colors py-2 relative group focus:outline-none focus-visible:text-cyan-300"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA / Status */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#download');
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold tracking-wider transition-all duration-200"
          >
            <span>GET APK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/15 bg-[#030712]/95 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="text-sm font-semibold tracking-wider text-slate-300 hover:text-cyan-300 py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#download');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-bold tracking-wider"
              >
                <span>GET APK (COMING SOON)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
