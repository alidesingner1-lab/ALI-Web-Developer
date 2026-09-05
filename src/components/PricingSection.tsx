import React from 'react';
import { PRICING_PLANS } from '../data/portfolioData';
import { GlowCard } from './GlowCard';
import { MagneticButton } from './MagneticButton';
import { 
  Sparkles, 
  Check, 
  Clock, 
  ArrowRight, 
  HelpCircle,
  Zap
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
  onCustomQuote: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onCustomQuote,
}) => {
  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-white dark:bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Straightforward Pricing Tiers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            No hidden costs or complicated retainers. Choose the scope that matches your business roadmap.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isPopular = plan.isPopular;

            return (
              <GlowCard
                key={plan.id}
                delayIndex={idx}
                id={`pricing-card-${plan.id}`}
                className={`h-full flex flex-col justify-between ${
                  isPopular ? 'ring-2 ring-blue-600 dark:ring-cyan-400 shadow-xl' : ''
                }`}
              >
                <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Tier Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-cyan-400">
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          isPopular 
                            ? 'bg-blue-600 text-white shadow-xs' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}>
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Price Header */}
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-mono">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">USD one-time</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* Timeline Tag */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 mb-6">
                      <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                      <span>Estimated delivery: <strong className="text-slate-900 dark:text-white">{plan.timeline}</strong></span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                        Included Features
                      </span>
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <Check className="w-4 h-4 text-blue-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan CTA Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <MagneticButton
                      variant={isPopular ? 'primary' : 'secondary'}
                      size="md"
                      className="w-full justify-center"
                      onClick={() => onSelectPlan(plan.name)}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Custom Quote Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-cyan-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Need something custom or have specific API / design requirements?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                We will discuss your exact scope, timeline, and craft a bespoke proposal.
              </p>
            </div>
          </div>

          <button
            onClick={onCustomQuote}
            className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-xs font-bold text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-cyan-500 shadow-xs transition-colors cursor-pointer"
          >
            Request a Custom Quote →
          </button>
        </div>

      </div>
    </section>
  );
};
