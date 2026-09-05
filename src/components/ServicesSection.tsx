import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';
import { GlowCard } from './GlowCard';
import { ServiceModal } from './ServiceModal';
import { 
  Briefcase, 
  Sparkles, 
  ShoppingCart, 
  FolderGit2, 
  Smartphone, 
  RefreshCw, 
  Layout, 
  Zap, 
  ArrowRight, 
  Check 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-blue-600 dark:text-cyan-400";
    switch (iconName) {
      case 'Briefcase': return <Briefcase className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'ShoppingCart': return <ShoppingCart className={iconClass} />;
      case 'FolderGit2': return <FolderGit2 className={iconClass} />;
      case 'Smartphone': return <Smartphone className={iconClass} />;
      case 'RefreshCw': return <RefreshCw className={iconClass} />;
      case 'Layout': return <Layout className={iconClass} />;
      case 'Zap': return <Zap className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-50/60 dark:bg-[#090D16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Impact Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Development Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From modern responsive business websites to advanced e-commerce applications and complete visual redesigns.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <GlowCard 
              key={service.id} 
              delayIndex={idx}
              id={`service-card-${service.id}`}
              className="h-full flex flex-col justify-between"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Top Features */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <Check className="w-3 h-3 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Trigger */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full mt-2 py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-slate-200 dark:border-slate-800 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer focus-visible:outline-none"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>

      {/* Advanced Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(title) => {
          onSelectServiceForInquiry(title);
        }}
      />
    </section>
  );
};
