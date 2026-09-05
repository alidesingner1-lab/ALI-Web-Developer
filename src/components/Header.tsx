import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MagneticButton } from './MagneticButton';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight, 
  Code2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeRotating, setIsThemeRotating] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 24);

      // Determine active section based on scroll offset
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const currentPos = scrollPos + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= currentPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click outside or escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleThemeToggleWithAnim = () => {
    setIsThemeRotating(true);
    toggleTheme();
    setTimeout(() => setIsThemeRotating(false), 500);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/85 dark:bg-[#07090E]/85 shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 glass-header'
          : 'py-4 bg-white/40 dark:bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand / Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group text-left focus-visible:outline-none"
            aria-label="ALI — Web Developer Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-mono font-bold text-lg shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200 overflow-hidden">
              <span className="relative z-10 font-bold tracking-tight">A</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 opacity-90" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-300 rounded-full blur-[2px] opacity-70" />
            </div>
            
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg">
                  ALI
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase font-mono">
                Web Developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav 
            id="desktop-nav"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-inner"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500
                    ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400 bg-white dark:bg-slate-800 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-blue-600 dark:bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            
            {/* Status indicator: Available for Projects */}
            <div 
              className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-700 dark:text-emerald-300"
              title="Currently taking on select client projects"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Projects</span>
            </div>

            {/* Advanced Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={handleThemeToggleWithAnim}
              className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-cyan-500/40 transition-all duration-200 shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
              title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            >
              <div 
                className={`transition-transform duration-500 ease-out ${
                  isThemeRotating ? 'rotate-180 scale-90' : 'rotate-0 scale-100'
                }`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors" />
                ) : (
                  <Sun className="w-4 h-4 text-yellow-400 group-hover:rotate-45 transition-transform" />
                )}
              </div>
            </button>

            {/* CTA: Let's Talk */}
            <div className="hidden sm:block">
              <MagneticButton
                id="header-cta-btn"
                variant="primary"
                size="sm"
                onClick={onContactClick}
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Top Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel: Positioned at Top */}
          <div
            ref={mobileMenuRef}
            className="fixed top-0 left-0 right-0 max-h-[92vh] bg-white dark:bg-[#0B0F19] shadow-2xl p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col justify-between overflow-y-auto z-50 transition-all duration-300 rounded-b-3xl"
          >
            <div>
              {/* Top Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm">
                    A
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">ALI</div>
                    <div className="text-[10px] text-slate-400 font-mono">Web Developer & Logo Designer</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Links Section Header */}
              <div className="pt-3 pb-1 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                  Pages Quick Links
                </span>
                <span className="text-[11px] text-slate-400">Tap to jump</span>
              </div>

              {/* Navigation Links at Top */}
              <div className="grid grid-cols-2 gap-2 py-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer
                      ${
                        activeSection === item.id
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <MagneticButton
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
              >
                <span>Hire Me / Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <div className="text-center text-[11px] text-slate-400 font-mono">
                aliwebdeveloper.info@gmail.com
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
