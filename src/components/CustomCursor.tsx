import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isClickableHovered, setIsClickableHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instantly move both dot and ring together with zero lag or distance
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Check if hovering a clickable element
      const target = e.target as HTMLElement | null;
      if (!target) {
        setIsClickableHovered(false);
        return;
      }

      const isClickable = Boolean(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT'
      );

      setIsClickableHovered(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer ring: Default 36px, shrinks by 35% (to 65% scale ~23px) on clickable elements */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border transition-all duration-150 ease-out will-change-transform ${
          isClickableHovered
            ? 'scale-[0.65] border-2 border-blue-600 dark:border-cyan-400 bg-blue-600/30 dark:bg-cyan-400/30 shadow-md shadow-blue-500/40'
            : 'scale-100 border border-blue-500/60 dark:border-cyan-400/60 bg-blue-500/10 dark:bg-cyan-400/10'
        }`}
      />
      {/* Center sharp dot: Attached right in the middle */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full shadow-sm transition-all duration-150 will-change-transform ${
          isClickableHovered 
            ? 'bg-blue-600 dark:bg-cyan-400 scale-125' 
            : 'bg-blue-600 dark:bg-cyan-400'
        }`}
      />
    </div>
  );
};
