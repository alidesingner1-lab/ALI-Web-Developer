import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { GlowCard } from './GlowCard';
import { 
  Sparkles, 
  Search, 
  FileText, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  Check 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    const iconClass = "w-5 h-5 text-blue-600 dark:text-cyan-400";
    switch (index) {
      case 0: return <Search className={iconClass} />;
      case 1: return <FileText className={iconClass} />;
      case 2: return <Palette className={iconClass} />;
      case 3: return <Code2 className={iconClass} />;
      case 4: return <CheckCircle2 className={iconClass} />;
      case 5: return <Rocket className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 relative bg-slate-50/70 dark:bg-[#0A0E18]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Build Your Website
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A transparent 6-step engineering process that takes your project from rough concept to high-speed production launch.
          </p>
        </div>

        {/* Timeline Line with Interactive Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <GlowCard 
              key={step.step}
              delayIndex={idx}
              id={`process-step-${step.step}`}
              className="h-full flex flex-col justify-between cursor-pointer"
              onClick={() => setActiveStepIndex(idx)}
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center">
                        {getStepIcon(idx)}
                      </div>
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                        STEP {step.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400">
                      Phase {idx + 1}/6
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-3">
                    {step.summary}
                  </div>
                  
                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
