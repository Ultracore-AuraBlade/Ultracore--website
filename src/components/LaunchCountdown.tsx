import React, { useState, useEffect } from 'react';
import { Clock, Bell, Check, Sparkles, AlertCircle, Radio, ArrowDown } from 'lucide-react';
import { LAUNCH_CONFIG } from '../data/ultracore-data';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

export const LaunchCountdown: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  // Target timestamp: 8 November 2026, 12:00 AM IST
  // Expressed unambiguously as ISO with +05:30 offset
  const targetEpoch = LAUNCH_CONFIG.targetEpochMs;

  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now();
    const difference = targetEpoch - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isLive: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
      isLive: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every single second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetEpoch]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setNotificationMsg('Please provide a valid contact email.');
      return;
    }
    setSubscribed(true);
    setNotificationMsg('Transmission confirmed. You will receive an immediate ping when the APK launches on 8 November 2026.');
    setEmail('');
  };

  return (
    <section
      id="launch"
      className="relative py-20 sm:py-28 border-t border-cyan-500/15 overflow-hidden bg-[#030712]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[350px] bg-cyan-600/8 rounded-full blur-[140px]" />
        <div className="w-[400px] h-[250px] bg-sky-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Subtle Grid Plane */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Miniature Orbital Motif & Status Badge */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span
              className={`w-2 h-2 rounded-full ${
                timeLeft.isLive ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400 animate-pulse'
              }`}
            />
            <span className="text-slate-400">LAUNCH STATUS</span>
            <span className="text-cyan-400 font-bold">
              // {timeLeft.isLive ? LAUNCH_CONFIG.statusPostLaunch : LAUNCH_CONFIG.statusPreLaunch}
            </span>
          </div>
        </div>

        {/* Section Title & Prominent Launch Date */}
        <div className="space-y-3 mb-10 max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase">
            {LAUNCH_CONFIG.heading}
          </h2>

          <div className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 tracking-[0.08em] drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
            {LAUNCH_CONFIG.displayDate}
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed pt-1">
            The next-generation companion core for Android awakens. Mark the transmission window.
          </p>
        </div>

        {/* Main Countdown Display / Live Status Box */}
        <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30 shadow-[0_0_60px_-10px_rgba(6,182,212,0.2)] relative overflow-hidden">
          {/* Subtle top hairline */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          {timeLeft.isLive ? (
            /* When the countdown reaches zero: "ULTRACORE IS LIVE." / "THE CORE HAS AWAKENED." */
            <div className="py-8 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full mx-auto bg-cyan-950/80 border border-cyan-400/60 flex items-center justify-center shadow-[0_0_35px_rgba(56,189,248,0.5)]">
                <Sparkles className="w-8 h-8 text-cyan-300 animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-black text-3xl sm:text-5xl tracking-wider text-white">
                  {LAUNCH_CONFIG.liveHeadline}
                </h3>
                <p className="font-mono text-sm sm:text-base tracking-[0.2em] text-cyan-300 uppercase">
                  {LAUNCH_CONFIG.liveSubline}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#download"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
                >
                  <span>GET APK ARTIFACT</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            /* Live Four-Value Real-Time Countdown: DAYS, HOURS, MINUTES, SECONDS */
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: 'DAYS', value: timeLeft.days },
                  { label: 'HOURS', value: timeLeft.hours },
                  { label: 'MINUTES', value: timeLeft.minutes },
                  { label: 'SECONDS', value: timeLeft.seconds },
                ].map((unit, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 rounded-2xl bg-slate-950/85 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors flex flex-col items-center justify-center shadow-[inset_0_1px_15px_rgba(56,189,248,0.05)] relative group"
                  >
                    {/* Corner accent tick */}
                    <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />

                    <div className="font-mono font-black text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-sky-300 tabular-nums drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                      {String(unit.value).padStart(2, '0')}
                    </div>

                    <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-cyan-400/80 uppercase mt-2">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timezone Accuracy Specification */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5 gap-2">
                <div className="flex items-center gap-1.5 text-cyan-300/90">
                  <Radio className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TARGET // 8 NOVEMBER 2026, 12:00 AM IST</span>
                </div>
                <div className="text-slate-500">
                  SYNCHRONIZED WITH ASIA/KOLKATA (UTC+05:30)
                </div>
              </div>
            </div>
          )}

          {/* Priority Alert Transmission Form */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Get notified the moment the APK download mirror goes live:
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{notificationMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for launch ping..."
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-700 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  <Bell className="w-3.5 h-3.5 text-cyan-400" />
                  <span>NOTIFY ME</span>
                </button>
              </form>
            )}

            {notificationMsg && !subscribed && (
              <p className="mt-2 text-xs text-amber-400 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {notificationMsg}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
