import React, { useState } from 'react';
import { GlowCard } from './GlowCard';
import { 
  Check, 
  Sparkles, 
  Zap, 
  Smartphone, 
  TrendingUp, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'performance' | 'mobile' | 'structure'>('performance');

  const focusPoints = [
    { title: 'Modern UI/UX', desc: 'Crafting clean, accessible, and distinct visual systems tailored to your brand.' },
    { title: 'Mobile-first development', desc: '100% fluid responsive scaling on phones, tablets, laptops, and ultra-wide screens.' },
    { title: 'Fast loading & optimization', desc: 'Sub-second page transitions, asset compression, and clean modular code.' },
    { title: 'Business conversion', desc: 'Strategic call-to-actions, WhatsApp booking hooks, and friction-free lead capture.' },
    { title: 'Clean structure', desc: 'Maintainable semantic markup, strict TypeScript, and modular component architecture.' },
    { title: 'Professional animations', desc: 'Purposeful micro-interactions, subtle moving light accents, and smooth scroll reveals.' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Craftsmanship & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Turning Ideas Into Powerful Websites.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a dedicated web developer focused on creating digital experiences that leave a lasting impression and drive measurable results for your business.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Focus Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>What I Focus On</span>
              <span className="w-8 h-0.5 bg-blue-600 dark:bg-cyan-400 rounded-full" />
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusPoints.map((point) => (
                <div 
                  key={point.title}
                  className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#0E131F] border border-slate-200/70 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-blue-700/60 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {point.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 group cursor-pointer"
              >
                <span>Discuss your website requirements</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Visual Card with Interactive Metric Tabs */}
          <div className="lg:col-span-6">
            <GlowCard className="w-full">
              <div className="p-6 sm:p-8">
                
                {/* Header in Card */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-base shadow-sm">
                      ALI
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        Development Standards
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Zero Shortcuts • High-End Execution
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    VERIFIED
                  </span>
                </div>

                {/* Metric Selector Tabs */}
                <div className="flex gap-2 my-5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800">
                  <button
                    onClick={() => setActiveMetricTab('performance')}
                    className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeMetricTab === 'performance'
                        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Performance
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('mobile')}
                    className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeMetricTab === 'mobile'
                        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Mobile UX
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('structure')}
                    className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeMetricTab === 'structure'
                        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Architecture
                  </button>
                </div>

                {/* Tab Specific Content */}
                {activeMetricTab === 'performance' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-amber-500" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-200">Google PageSpeed Rating</div>
                          <div className="text-[11px] text-slate-500">Core Web Vitals Pass Guaranteed</div>
                        </div>
                      </div>
                      <span className="font-mono text-base font-extrabold text-emerald-600 dark:text-emerald-400">98/100</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-200">First Contentful Paint (FCP)</div>
                          <div className="text-[11px] text-slate-500">Instant visual presentation</div>
                        </div>
                      </div>
                      <span className="font-mono text-base font-extrabold text-blue-600 dark:text-cyan-400">&lt; 0.6s</span>
                    </div>
                  </div>
                )}

                {activeMetricTab === 'mobile' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-200">Adaptive Touch Targets</div>
                          <div className="text-[11px] text-slate-500">Minimum 44px+ hit areas for thumbs</div>
                        </div>
                      </div>
                      <span className="font-mono text-base font-extrabold text-blue-600 dark:text-cyan-400">100%</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-emerald-500" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-200">Responsive Breakpoints</div>
                          <div className="text-[11px] text-slate-500">Checked: 360px, 390px, 768px, 1024px, 1440px</div>
                        </div>
                      </div>
                      <span className="font-mono text-base font-extrabold text-emerald-600 dark:text-emerald-400">PASSED</span>
                    </div>
                  </div>
                )}

                {activeMetricTab === 'structure' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <Layers className="w-5 h-5 text-purple-500" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-200">Semantic & Accessible HTML</div>
                          <div className="text-[11px] text-slate-500">WCAG AA compliance & screen reader friendly</div>
                        </div>
                      </div>
                      <span className="font-mono text-base font-extrabold text-purple-600 dark:text-purple-400">A+</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-200">Maintainability & Clean State</div>
                          <div className="text-[11px] text-slate-500">Organized configurations & modular components</div>
                        </div>
                      </div>
                      <span className="font-mono text-base font-extrabold text-emerald-600 dark:text-emerald-400">STRICT</span>
                    </div>
                  </div>
                )}

                {/* Bottom Card Summary */}
                <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
                    Guaranteed Fast 12-48h Delivery
                  </span>
                  <span className="font-mono text-[11px]">ALI • 2026</span>
                </div>

              </div>
            </GlowCard>
          </div>

        </div>

      </div>
    </section>
  );
};
