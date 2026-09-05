import React, { useState } from 'react';
import { CONTACT_INFO, SERVICES, PRICING_PLANS } from '../data/portfolioData';
import { GlowCard } from './GlowCard';
import { MagneticButton } from './MagneticButton';
import { 
  Mail, 
  Phone, 
  Clock, 
  Briefcase, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ContactSectionProps {
  selectedServicePreFill?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServicePreFill,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: selectedServicePreFill || 'Business Websites',
    budget: '$300 – $600',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedServicePreFill) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreFill }));
    }
  }, [selectedServicePreFill]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate reliable client-side request submission with confirmation
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white dark:bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Great.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a project in mind, an existing site you want to modernize, or need a fast reliable consultation? Send your details below or connect immediately on WhatsApp.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlowCard className="w-full">
              <div className="p-6 sm:p-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Project Request Received!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
                      Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. I will review your requirements for <strong className="text-blue-600 dark:text-cyan-400">{formData.service}</strong> and respond within a few hours.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Send Another Note
                      </button>
                      <a
                        href={`https://wa.me/923244887694?text=Hi%20Ali,%20I%20just%20submitted%20a%20project%20inquiry%20from%20${encodeURIComponent(formData.name)}%20for%20${encodeURIComponent(formData.service)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Fast-Track on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Alex Johnson"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company / Business */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Business / Brand Name
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          placeholder="e.g. Apex Health Clinic"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Service Required */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                          Service Required
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Custom Project Consultation">Custom Project Consultation</option>
                          <option value="Starter Plan ($199)">Starter Plan ($199)</option>
                          <option value="Professional Plan ($399)">Professional Plan ($399)</option>
                          <option value="Premium Plan ($799)">Premium Plan ($799)</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="Under $300">Under $300 (Starter / Single Page)</option>
                        <option value="$300 – $600">$300 – $600 (Business Website / Redesign)</option>
                        <option value="$600 – $1,200">$600 – $1,200 (E-Commerce / Custom App)</option>
                        <option value="$1,200+">$1,200+ (Full Enterprise Solution)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                        Project Details & Vision *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell me a bit about your goals, timeline, existing links, or features you need..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 dark:focus:border-cyan-400 focus:outline-none transition-colors resize-y"
                      />
                    </div>

                    <div className="pt-2">
                      <MagneticButton
                        id="contact-submit-btn"
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center"
                      >
                        <span>Send Project Request</span>
                        <Send className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </div>
            </GlowCard>
          </div>

          {/* Right Column: Existing ALI Details Preserved & WhatsApp Direct */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#0E131F] border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Official Contact Information
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Direct communication channels for instant reach.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start justify-between p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`} 
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 break-all"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Direct Phone</div>
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`} 
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(CONTACT_INFO.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Working Hours</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {CONTACT_INFO.workingHours} (Daily)
                    </div>
                  </div>
                </div>

                {/* Professional Category */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Professional Category</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {CONTACT_INFO.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+923244887694)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
