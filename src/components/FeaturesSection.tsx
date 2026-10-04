import React, { useState } from 'react';
import { 
  Mic, 
  Brain, 
  Database, 
  Smartphone, 
  Cpu, 
  Shield, 
  FileCode, 
  RefreshCw,
  Info
} from 'lucide-react';
import { FEATURES_DATA, FeatureItem } from '../data/ultracore-data';

export const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  // Map string icon names to Lucide components
  const renderIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-cyan-400";
    switch (name) {
      case 'Mic': return <Mic className={iconClass} />;
      case 'Brain': return <Brain className={iconClass} />;
      case 'Database': return <Database className={iconClass} />;
      case 'Smartphone': return <Smartphone className={iconClass} />;
      case 'Cpu': return <Cpu className={iconClass} />;
      case 'Shield': return <Shield className={iconClass} />;
      case 'FileCode': return <FileCode className={iconClass} />;
      case 'RefreshCw': return <RefreshCw className={iconClass} />;
      default: return <Cpu className={iconClass} />;
    }
  };

  const getStatusBadge = (status: FeatureItem['status']) => {
    switch (status) {
      case 'AVAILABLE IN BUILD':
        return (
          <span className="text-[10px] font-mono tracking-wider font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
            AVAILABLE IN BUILD
          </span>
        );
      case 'IN DEVELOPMENT':
        return (
          <span className="text-[10px] font-mono tracking-wider font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
            IN DEVELOPMENT
          </span>
        );
      case 'COMING SOON':
        return (
          <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-300 bg-slate-900/80 border border-slate-700/50 px-2 py-0.5 rounded">
            COMING SOON
          </span>
        );
    }
  };

  return (
    <section id="features" className="relative py-28 sm:py-36 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Core Architecture
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
            ENGINEERED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400">AMPLIFY</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            UltraCore combines an adaptive neural persona with native Android capabilities. Every component is architected for privacy, longevity, and low-latency response.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top edge glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:via-cyan-400/60 transition-all duration-300" />

              <div>
                {/* Header: Icon + Status */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/50 transition-all">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    {getStatusBadge(feature.status)}
                  </div>
                </div>

                {/* Feature Title */}
                <h3 className="font-display text-lg font-bold text-white tracking-wide mb-2 group-hover:text-cyan-200 transition-colors">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              {/* Highlight footer */}
              {feature.highlight && (
                <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{feature.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Development Disclosure Notice */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-white/5 max-w-2xl mx-auto text-center text-xs text-slate-400">
          <span className="text-cyan-400 font-semibold">Strict Technical Transparency: </span>
          Features labeled <strong className="text-slate-200">IN DEVELOPMENT</strong> or <strong className="text-slate-200">COMING SOON</strong> are active roadmap targets under ongoing local tests. We never advertise conceptual modules as production-ready.
        </div>
      </div>
    </section>
  );
};
