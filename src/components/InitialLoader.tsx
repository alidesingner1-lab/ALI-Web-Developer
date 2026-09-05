import React, { useEffect, useState } from 'react';

export const InitialLoader: React.FC<{ onLoaded: () => void }> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFadeOut(true);
          setTimeout(onLoaded, 250);
          return 100;
        }
        return prev + 25;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#07090E] transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo Monogram */}
        <div className="relative w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-2xl shadow-xl shadow-blue-500/30 overflow-hidden animate-pulse">
          <span className="relative z-10">A</span>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 opacity-90" />
        </div>

        <div className="text-center">
          <div className="font-extrabold tracking-tight text-slate-900 dark:text-white text-base">
            ALI
          </div>
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Web Developer
          </div>
        </div>

        {/* Rapid Progress Bar */}
        <div className="w-36 h-1 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mt-2">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
