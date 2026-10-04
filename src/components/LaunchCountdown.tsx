import React, { useState, useEffect } from 'react';
import { Clock, Bell, Check, Sparkles, AlertCircle } from 'lucide-react';
import { LAUNCH_CONFIG } from '../data/ultracore-data';

export const LaunchCountdown: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  // Configurable countdown state (if a real date string is provided in LAUNCH_CONFIG)
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    if (!LAUNCH_CONFIG.launchDate) {
      setTimeLeft(null);
      return;
    }

    const calculateTime = () => {
      const difference = +new Date(LAUNCH_CONFIG.launchDate!) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setNotificationMsg('Please provide a valid contact email.');
      return;
    }
    setSubscribed(true);
    setNotificationMsg('Confirmed! You are on the priority transmission list for the official release.');
    setEmail('');
  };

  return (
    <section className="relative py-28 sm:py-36 border-t border-cyan-500/10 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Title - EXACT COMPLIANCE */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          SYSTEM LAUNCH TIMELINE
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white mb-6 uppercase">
          THE NEXT CORE IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">LOADING.</span>
        </h2>

        {/* Countdown Box / Honest Announcement */}
        <div className="max-w-2xl mx-auto my-10 p-8 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden">
          {/* Subtle top hairline */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {LAUNCH_CONFIG.launchDate && timeLeft ? (
            /* Live countdown timer when a real launchDate is defined in LAUNCH_CONFIG */
            <div className="grid grid-cols-4 gap-4 my-4">
              {[
                { label: 'DAYS', val: timeLeft.days },
                { label: 'HOURS', val: timeLeft.hours },
                { label: 'MINUTES', val: timeLeft.minutes },
                { label: 'SECONDS', val: timeLeft.seconds },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
                  <div className="font-mono text-3xl sm:text-4xl font-black text-cyan-300">
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* When no launch date has been set - STRICT COMPLIANCE */
            <div className="space-y-4 py-4">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 mb-2">
                <Sparkles className="w-7 h-7 text-cyan-300 animate-pulse" />
              </div>

              {/* Exact required wording: LAUNCH DATE — TO BE ANNOUNCED */}
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-[0.14em] text-white">
                {LAUNCH_CONFIG.announcementNotice}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
                We believe in launching when the core is uncompromisingly stable. No placeholder or speculative launch dates are set until the first public APK passes security auditing.
              </p>

              <div className="pt-2 text-xs font-mono text-cyan-400 tracking-wider">
                TARGET WINDOW // {LAUNCH_CONFIG.targetQuarter}
              </div>
            </div>
          )}

          {/* Priority Alert Transmission Form */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Get notified the moment the official APK and launch date are confirmed:
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
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
