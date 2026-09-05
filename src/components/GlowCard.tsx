import React, { useRef, useState, useEffect } from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delayIndex?: number;
  highlightColor?: string;
  enableTilt?: boolean;
  onClick?: () => void;
  id?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  delayIndex = 0,
  enableTilt = true,
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mouseCoord, setMouseCoord] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Smoke reveal trigger via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // slight stagger for groups
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, Math.min(delayIndex * 60, 300));
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delayIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMouseCoord({ x, y });

    if (enableTilt && window.innerWidth >= 1024) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Controlled, very subtle tilt (max ~3.5 deg)
      const rotateX = ((y - centerY) / centerY) * -3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMouseCoord({ x: -100, y: -100 });
  };

  return (
    <div
      ref={cardRef}
      id={id}
      data-cursor="card"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt && isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-3px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered 
          ? 'transform 0.15s ease-out' 
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
      }}
      className={`
        relative group rounded-2xl p-[1px] overflow-hidden select-none
        ${isVisible ? 'card-smoke-reveal' : 'opacity-0'}
        ${className}
      `}
    >
      {/* Dynamic Animated Moving Color Gradient Border (Living Interface) */}
      <div 
        className="pointer-events-none absolute -inset-[100%] rounded-2xl animate-moving-border opacity-75 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, #2563EB 0deg, #06B6D4 90deg, #8B5CF6 180deg, #06B6D4 270deg, #2563EB 360deg)',
          filter: 'blur(1.5px)',
        }}
      />

      {/* Mouse-responsive radial lighting highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mouseCoord.x}px ${mouseCoord.y}px, rgba(37, 99, 235, 0.12), transparent 70%)`,
        }}
      />

      {/* Surface layer: High-end white / soft graphite in light, deep charcoal in dark */}
      <div className="relative z-10 w-full h-full rounded-[15px] bg-white/95 dark:bg-[#0D121D]/95 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 shadow-sm group-hover:shadow-md dark:group-hover:shadow-blue-950/20 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};
