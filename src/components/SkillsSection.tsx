import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { GlowCard } from './GlowCard';
import { 
  Sparkles, 
  Code, 
  Palette, 
  Cpu, 
  Smartphone, 
  Layout, 
  Zap, 
  Search, 
  GitBranch, 
  Globe 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-blue-600 dark:text-cyan-400" };
    switch (iconName) {
      case 'Code': return <Code {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Search': return <Search {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Globe': return <Globe {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-white dark:bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tools & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Modern Web Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A production-proven technology stack focused on maintainability, raw loading speed, and modern user interaction.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => (
            <GlowCard 
              key={skill.name}
              delayIndex={idx}
              id={`skill-card-${idx}`}
              className="h-full"
            >
              <div className="p-5 flex items-start gap-4 h-full">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex-shrink-0">
                  {getIcon(skill.icon)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                      {skill.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
