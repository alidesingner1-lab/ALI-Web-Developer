import React, { useEffect, useState, useRef } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { CheckCircle2, Clock, Zap, MessageSquare } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 6000; // 6 seconds timeline
          const steps = 120; // 50ms interval for smooth progression over 6 seconds
          const stepTime = duration / steps;
          let currentStep = 0;

          const targets = CONTACT_INFO.stats.map((s) => s.value);

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // Ease out cubic
            const factor = 1 - Math.pow(1 - progress, 3);

            setCounts(targets.map((target) => Math.round(target * factor)));

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(targets);
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const statIcons = [
    <CheckCircle2 key="1" className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    <Zap key="2" className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    <Clock key="3" className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    <MessageSquare key="4" className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
  ];

  return (
    <section 
      id="stats-bar" 
      ref={containerRef}
      className="relative z-20 py-8 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0B0F19]/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CONTACT_INFO.stats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center sm:items-start text-center sm:text-left p-3 rounded-xl transition-all duration-300 hover:bg-white/60 dark:hover:bg-slate-800/40"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50">
                  {statIcons[idx]}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                  {stat.prefix || ''}
                  {hasAnimated ? counts[idx] : 0}
                  {stat.suffix}
                </div>
              </div>

              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
