import React, { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Terminal, 
  Laptop, 
  Zap, 
  Layers,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onContactClick,
  onExploreServices,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [typedLineIndex, setTypedLineIndex] = useState(0);

  // Gentle floating animation sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setTypedLineIndex((prev) => (prev < 4 ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Blue & Cyan Subtle Radial Glows (Not overwhelming) */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-32 w-[350px] h-[350px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* 1. Status Badge */}
            <div 
              id="hero-status-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 text-xs font-semibold text-blue-700 dark:text-cyan-300 mb-6 shadow-sm animate-fade-in"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-cyan-400" />
              </span>
              <span>{CONTACT_INFO.availability}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-500 dark:text-slate-400 font-normal">2026 Ready</span>
            </div>

            {/* 2. Main Headline: ALI in Blue (big size) & Web Developer in White (small size) */}
            <h1 
              id="hero-headline"
              className="mb-6 flex flex-col items-start"
            >
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-blue-600 dark:text-blue-500 tracking-tight leading-none uppercase select-none drop-shadow-sm">
                ALI
              </span>
              <span className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider font-mono text-slate-800 dark:text-white uppercase">
                Web Developer
              </span>
            </h1>

            {/* 3. Supporting Text */}
            <p 
              id="hero-subtext"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {CONTACT_INFO.bio}
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <MagneticButton
                id="hero-cta-primary"
                variant="primary"
                size="lg"
                onClick={onExploreWork}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                id="hero-cta-secondary"
                variant="secondary"
                size="lg"
                onClick={onContactClick}
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <button
                id="hero-cta-services-link"
                onClick={onExploreServices}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors group cursor-pointer focus-visible:outline-none"
              >
                <span>Explore Services</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* 5. Trust checkmarks */}
            <div className="grid grid-cols-2 sm:flex items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80 w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>100% Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>12–48h Rapid Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Direct WhatsApp Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Interactive Developer Interface Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Dynamic Card Container with Moving Gradient Outline */}
            <div 
              id="hero-workspace-mockup"
              className="relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/40 via-slate-300/40 to-cyan-500/40 dark:from-blue-600/40 dark:via-slate-800 dark:to-cyan-400/40 shadow-2xl shadow-blue-500/10 dark:shadow-black/60 overflow-hidden"
            >
              <div className="rounded-[15px] bg-white dark:bg-[#0E131F] border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                
                {/* Window Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-[#131927] border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      ali-workspace / portfolio.dev
                    </span>
                  </div>

                  {/* Mode switcher tabs */}
                  <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 rounded-lg p-0.5 text-[11px] font-medium">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        activeTab === 'preview'
                          ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-cyan-400 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Live UI</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        activeTab === 'code'
                          ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-cyan-400 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      <Code2 className="w-3 h-3" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>

                {/* Workspace Content */}
                <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
                  {activeTab === 'preview' ? (
                    <div className="space-y-4">
                      
                      {/* Mini Live Dashboard Card */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#141B2D] border border-slate-200/70 dark:border-slate-800/80">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                              Production Metrics
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                            99.9% UPTIME
                          </span>
                        </div>

                        {/* Interactive mini metrics */}
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200/60 dark:border-slate-800">
                            <div className="text-lg font-extrabold text-blue-600 dark:text-cyan-400 font-mono">
                              0.6s
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium">Load Speed</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200/60 dark:border-slate-800">
                            <div className="text-lg font-extrabold text-slate-900 dark:text-white font-mono">
                              100%
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium">Mobile Score</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white dark:bg-[#0B0F19] border border-slate-200/60 dark:border-slate-800">
                            <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                              A+
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium">SEO & Security</div>
                          </div>
                        </div>
                      </div>

                      {/* Mini Feature Banner */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono tracking-wider uppercase opacity-80">
                            Client Delivery Stack
                          </span>
                          <Sparkles className="w-4 h-4 text-cyan-300" />
                        </div>
                        <h4 className="text-sm font-bold tracking-tight mb-1">
                          Tailored E-Commerce & Business Platforms
                        </h4>
                        <p className="text-xs text-blue-100 opacity-90 leading-relaxed">
                          Clean code, fast conversion funnels, and integrated WhatsApp customer chat.
                        </p>
                      </div>

                      {/* Mini Live Active Clients Indicator */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-[#141A28] border border-slate-200/60 dark:border-slate-800 text-xs">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            ReadySuite & Salon Live Deployments
                          </span>
                        </div>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                          ACTIVE
                        </span>
                      </div>

                    </div>
                  ) : (
                    /* Code Editor View */
                    <div className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-900 text-slate-200 p-4 rounded-xl overflow-x-auto shadow-inner h-full flex flex-col justify-between">
                      <div>
                        <div className="text-slate-500 mb-2">// Developer Profile: ALI</div>
                        <div className="text-blue-400">const <span className="text-yellow-300">developer</span> = &#123;</div>
                        <div className="pl-4 text-slate-300">name: <span className="text-emerald-300">'ALI'</span>,</div>
                        <div className="pl-4 text-slate-300">role: <span className="text-emerald-300">'Web Developer'</span>,</div>
                        <div className="pl-4 text-slate-300">status: <span className="text-emerald-300">'Available for Projects'</span>,</div>
                        <div className="pl-4 text-slate-300">primaryFocus: [<span className="text-cyan-300">'Modern UI/UX'</span>, <span className="text-cyan-300">'Performance'</span>],</div>
                        <div className="pl-4 text-slate-300">deliveryTime: <span className="text-amber-300">'12-48h'</span>,</div>
                        <div className="pl-4 text-slate-300">stack: [<span className="text-purple-300">'React'</span>, <span className="text-purple-300">'Tailwind'</span>, <span className="text-purple-300">'TypeScript'</span>]</div>
                        <div className="text-blue-400">&#125;;</div>
                        <div className="mt-2 text-emerald-400">// Ready to build your project 🚀</div>
                      </div>
                      <div className="text-[10px] text-slate-400 pt-3 border-t border-slate-800 flex justify-between">
                        <span>UTF-8 • TypeScript</span>
                        <span>Ln 14, Col 2</span>
                      </div>
                    </div>
                  )}

                  {/* Visual bottom status bar */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>Netlify & Vercel Edge Fast CDN</span>
                    </div>
                    <span className="font-mono">v3.4.0</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Subtle UI Badge 1: Top Right */}
            <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 animate-bounce duration-1000">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>100% Client Satisfaction</span>
            </div>

            {/* Floating Subtle UI Badge 2: Bottom Left */}
            <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#111726] border border-blue-200 dark:border-blue-900/60 shadow-lg text-xs font-semibold text-blue-600 dark:text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Business Solutions</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
