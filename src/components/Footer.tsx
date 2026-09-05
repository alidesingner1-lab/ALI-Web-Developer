import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  Sparkles,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [topButtonClicked, setTopButtonClicked] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    setTopButtonClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setTopButtonClicked(false), 1000);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-[#05070B] text-slate-300 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-lg shadow-md shadow-blue-500/30">
                  A
                </div>
                <div>
                  <div className="text-xl font-black text-white tracking-tight">
                    ALI
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Web Developer
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                Creating modern, responsive and high-performance websites that help businesses and brands build a stronger online presence.
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for New Projects</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-800 text-emerald-400 hover:bg-emerald-900 transition-colors"
                aria-label="WhatsApp Direct Chat"
              >
                <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Pages Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Pages Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left cursor-pointer focus-visible:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  E-Commerce Stores
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Website Redesign
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  UI/UX Implementation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Hours: {CONTACT_INFO.workingHours}</span>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-600/30 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 ALI Web Developer. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with precision & high performance
            </span>

            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={handleBackToTop}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all duration-300 cursor-pointer ${
                topButtonClicked
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/40 scale-95'
                  : 'bg-white text-slate-900 border-white hover:bg-slate-100 hover:shadow-sm'
              }`}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
