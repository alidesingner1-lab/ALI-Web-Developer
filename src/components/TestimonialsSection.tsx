import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { GlowCard } from './GlowCard';
import { 
  Sparkles, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  ShieldCheck 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-slate-50/70 dark:bg-[#090D16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Real feedback from business owners and founders who upgraded their digital presence with ALI.
          </p>
        </div>

        {/* Testimonial Showcase Card with Carousel */}
        <div className="max-w-4xl mx-auto">
          <GlowCard className="w-full">
            <div className="p-8 sm:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 right-8 w-20 h-20 text-blue-500/10 dark:text-cyan-400/10 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Message */}
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
                "{activeTestimonial.message}"
              </blockquote>

              {/* Client Info & Carousel Navigation Controls */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {activeTestimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">
                      {activeTestimonial.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {activeTestimonial.role} • <span className="text-blue-600 dark:text-cyan-400 font-medium">{activeTestimonial.business}</span>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </GlowCard>
        </div>

      </div>
    </section>
  );
};
