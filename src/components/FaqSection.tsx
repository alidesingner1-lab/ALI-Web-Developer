import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { GlowCard } from './GlowCard';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-slate-50/70 dark:bg-[#090D16]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Everything you need to know about working with ALI on your next website.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-[#0E131F] border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-blue-600 dark:text-cyan-400' : 'rotate-0'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
