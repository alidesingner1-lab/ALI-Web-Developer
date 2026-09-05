import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  magnetic?: boolean;
  className?: string;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  magnetic = true,
  className = '',
  href,
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!magnetic || isTouchDevice || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate distance from center (clamped to small subtle range)
    const distanceX = (e.clientX - centerX) * 0.18;
    const distanceY = (e.clientY - centerY) * 0.18;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsPressed(false);
  };

  const handleClick = (e: React.MouseEvent<any>) => {
    // Generate ripple at click coordinate
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const rippleId = Date.now();
      setRipples((prev) => [...prev, { id: rippleId, x: clickX, y: clickY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 500);
    }

    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 260);

    if (onClick) {
      onClick(e);
    }
  };

  // Base size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-medium tracking-wide rounded-lg gap-1.5',
    md: 'px-6 py-3 text-sm font-semibold tracking-wide rounded-xl gap-2',
    lg: 'px-8 py-4 text-base font-semibold tracking-wide rounded-xl gap-2.5',
  }[size];

  // Variants
  let variantStyles = '';
  if (variant === 'primary') {
    // Blue primary button as required by specs
    variantStyles = `
      bg-blue-600 hover:bg-blue-700 text-white 
      shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35
      dark:bg-blue-600 dark:hover:bg-blue-500 dark:shadow-blue-900/30
      border border-blue-500/30
    `;
  } else if (variant === 'secondary') {
    variantStyles = `
      bg-slate-100 hover:bg-slate-200 text-slate-800 
      dark:bg-slate-800/80 dark:hover:bg-slate-750 dark:text-slate-100 
      border border-slate-200/80 dark:border-slate-700/80
      shadow-sm
    `;
  } else if (variant === 'outline') {
    variantStyles = `
      bg-transparent hover:bg-blue-50/60 text-blue-600 
      border border-blue-200 hover:border-blue-400
      dark:text-blue-400 dark:border-blue-900/60 dark:hover:bg-blue-950/40 dark:hover:border-blue-700
    `;
  } else if (variant === 'glow') {
    variantStyles = `
      bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white
      shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-cyan-500/30
      border border-cyan-300/30
    `;
  } else {
    variantStyles = `
      bg-transparent text-slate-700 hover:text-blue-600 hover:bg-slate-100/70
      dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800/60
    `;
  }

  const transformStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPressed ? 0.96 : 1})`,
    transition: isPressed 
      ? 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)' 
      : 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
  };

  const sharedClasses = `
    group relative inline-flex items-center justify-center select-none overflow-hidden cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
    dark:focus-visible:ring-offset-slate-900
    ${sizeStyles}
    ${variantStyles}
    ${className}
  `;

  const content = (
    <>
      {/* Subtle sweep highlight on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      {/* Ripple elements created on click */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="btn-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 80,
            height: 80,
            marginLeft: -40,
            marginTop: -40,
          }}
        />
      ))}

      {/* Actual button label & icon */}
      <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-150 group-hover:translate-x-0.5">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={btnRef as any}
        href={href}
        className={sharedClasses}
        style={transformStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as any}
      type={(props as any).type || 'button'}
      className={sharedClasses}
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {content}
    </button>
  );
};
