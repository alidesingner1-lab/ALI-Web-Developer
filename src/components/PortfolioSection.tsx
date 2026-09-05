import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { GlowCard } from './GlowCard';
import { CaseStudyModal } from './CaseStudyModal';
import { 
  Sparkles, 
  ExternalLink, 
  BookOpen, 
  Laptop, 
  Clock
} from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Directly show only the 3 projects
  const displayProjects = PROJECTS;

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-white dark:bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Work & Digital Builds
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Real websites engineered with modern architectures, responsive perfection, and tangible business results.
          </p>
        </div>

        {/* Projects Grid: Exactly 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => {
            const isAnimatedPending = project.id === 'animated-website';

            return (
              <GlowCard
                key={project.id}
                id={`project-card-${project.id}`}
                delayIndex={index}
                className="flex flex-col h-full overflow-hidden group"
              >
                {/* Website Visual Preview Window */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-t-[14px] bg-slate-900">
                  {/* Subtle top browser bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 px-3 py-1.5 bg-slate-950/60 backdrop-blur-md flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-300/80 tracking-wide">
                      {project.previewBadge || project.category}
                    </span>
                  </div>

                  {/* Gradient Mockup Visual */}
                  <div 
                    className={`w-full h-full bg-gradient-to-tr ${project.imagePlaceholderGradient} flex flex-col items-center justify-center p-6 text-white text-center transition-transform duration-500 ease-out group-hover:scale-105`}
                  >
                    <div className="relative z-10">
                      <Laptop className="w-10 h-10 mx-auto mb-2 text-white/90 drop-shadow" />
                      <span className="text-lg font-black tracking-tight drop-shadow-sm block">
                        {project.title}
                      </span>
                      {isAnimatedPending ? (
                        <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-500/30 text-amber-200 border border-amber-400/30">
                          Pending Launch
                        </span>
                      ) : (
                        <span className="text-xs text-white/80 font-medium">
                          Interactive Live Deployment
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category Pill Over Visual */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-slate-900/80 text-cyan-300 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                {isAnimatedPending ? (
                  /* Animated Website Card: ONLY image ke nichey likha hu "Project . Pending" aur koi options na hon */
                  <div className="p-6 flex flex-col items-center justify-center flex-1 text-center py-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-sm font-bold tracking-wide">
                      <Clock className="w-4 h-4" />
                      <span>Project . Pending</span>
                    </div>
                  </div>
                ) : (
                  /* Standard Cards: Beauty Salon & E-commerce (Same) */
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Card Actions: Live Project & Case Study */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                        <span>Case Study</span>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                          title={`Open live ${project.title}`}
                        >
                          <span>View Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </GlowCard>
            );
          })}
        </div>

      </div>

      {/* Case Study Full Screen Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
};
