import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  TrendingUp, 
  Sparkles,
  Laptop,
  Check
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="sticky sm:absolute top-4 sm:top-6 right-4 sm:right-6 float-right z-20 p-2.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-6 clear-both sm:clear-none">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-mono font-semibold text-blue-600 dark:text-cyan-400">
              {project.category}
            </span>
            {project.previewBadge && (
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-medium">
                {project.previewBadge}
              </span>
            )}
          </div>
          <h2 id="case-study-title" className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {project.title} — Case Study
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {caseStudy.overview}
          </p>
        </div>

        {/* Live Project Mockup Window */}
        <div className="mb-8 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-md">
          <div className="px-4 py-2.5 bg-slate-200/70 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-[11px] text-slate-500">
                {project.liveUrl || 'https://ali-development.live/preview'}
              </span>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
              >
                <span>Open Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className={`h-48 sm:h-64 bg-gradient-to-tr ${project.imagePlaceholderGradient} flex flex-col items-center justify-center p-6 text-white text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 max-w-md">
              <Laptop className="w-12 h-12 mx-auto mb-3 opacity-90 text-cyan-200" />
              <div className="text-xl sm:text-2xl font-black tracking-tight mb-1">
                {project.title}
              </div>
              <p className="text-xs sm:text-sm text-blue-100 opacity-90">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid if available */}
        {caseStudy.stats && (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {caseStudy.stats.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-center">
                <div className="text-lg sm:text-2xl font-black text-blue-600 dark:text-cyan-400 font-mono">
                  {s.value}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem vs Solution 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
            <h4 className="text-sm font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>The Problem</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
            <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>The Engineered Solution</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Design Approach & Features */}
        <div className="space-y-6 mb-8">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
              Design & Architecture Approach
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {caseStudy.designApproach}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">
              Key Features Implemented
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies & Final Result */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 mb-8">
          <div className="mb-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-1">
              Final Impact & Delivery
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {caseStudy.result}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Back to Portfolio
          </button>

          {project.liveUrl && (
            <MagneticButton
              variant="primary"
              size="md"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </MagneticButton>
          )}
        </div>

      </div>
    </div>
  );
};
