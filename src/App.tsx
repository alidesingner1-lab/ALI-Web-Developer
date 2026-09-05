import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { InitialLoader } from './components/InitialLoader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTopButton } from './components/BackToTopButton';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [preFilledService, setPreFilledService] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreFilledService(serviceTitle);
    scrollToContact();
  };

  const handleSelectPlan = (planName: string) => {
    setPreFilledService(`${planName} Plan`);
    scrollToContact();
  };

  return (
    <ThemeProvider>
      {loading && <InitialLoader onLoaded={() => setLoading(false)} />}
      <CustomCursor />
      
      <div className="min-h-screen bg-white dark:bg-[#07090E] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 selection:bg-blue-600 selection:text-white">
        {/* Sticky Header */}
        <Header onContactClick={scrollToContact} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero
            onExploreWork={scrollToPortfolio}
            onContactClick={scrollToContact}
            onExploreServices={scrollToServices}
          />

          <StatsBar />

          <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

          <PortfolioSection />

          <TestimonialsSection />

          <PricingSection 
            onSelectPlan={handleSelectPlan}
            onCustomQuote={scrollToContact}
          />

          <FaqSection />

          <ContactSection selectedServicePreFill={preFilledService} />
        </main>

        {/* Floating Back to Top Button (White default, Blue on click) */}
        <BackToTopButton />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Multi-Column Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
