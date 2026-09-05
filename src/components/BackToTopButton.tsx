import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
      if (window.scrollY === 0) {
        setIsClicked(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset clicked blue state after scrolling to top
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-fade-in">
      <button
        id="floating-back-to-top-btn"
        type="button"
        onClick={handleClick}
        className={`group p-3 sm:p-3.5 rounded-full border shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          isClicked
            ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/40 scale-95'
            : 'bg-white text-slate-800 dark:bg-white dark:text-slate-900 border-slate-200/90 hover:bg-slate-100 hover:shadow-2xl hover:scale-105 active:bg-blue-600 active:text-white'
        }`}
        aria-label="Back to Top"
        title="Back to Top"
      >
        <ArrowUp className={`w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 ${isClicked ? 'text-white' : ''}`} />
      </button>
    </div>
  );
};
