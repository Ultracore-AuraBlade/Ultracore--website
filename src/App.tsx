/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BaburaoSection } from './components/BaburaoSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AuraBladeTeaser } from './components/AuraBladeTeaser';
import { LatestUpdates } from './components/LatestUpdates';
import { LaunchCountdown } from './components/LaunchCountdown';
import { ScreenshotsPreview } from './components/ScreenshotsPreview';
import { ApkDownloadSection } from './components/ApkDownloadSection';
import { DevelopmentStatus } from './components/DevelopmentStatus';
import { PrivacySection } from './components/PrivacySection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Premium Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onScrollTo={scrollToSection} />

        {/* Baburao Companion Section */}
        <BaburaoSection />

        {/* Features Architecture Grid */}
        <FeaturesSection />

        {/* Aura Blade Cinematic Teaser & Media Placeholder */}
        <AuraBladeTeaser />

        {/* Latest Updates / Development Changelog */}
        <LatestUpdates />

        {/* Launch Countdown / Launch Date Announcement */}
        <LaunchCountdown />

        {/* Inside UltraCore / Screenshots Preview */}
        <ScreenshotsPreview />

        {/* Get UltraCore / APK Download */}
        <ApkDownloadSection />

        {/* Engineering Pipeline Status */}
        <DevelopmentStatus />

        {/* Transparent Privacy Policy */}
        <PrivacySection />
      </main>

      {/* Official Minimalist Footer */}
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
