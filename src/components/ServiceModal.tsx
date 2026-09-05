import React, { useEffect } from 'react';
import { Service } from '../types';
import { 
  X, 
  Check, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  ShoppingCart, 
  FolderGit2, 
  Smartphone, 
  RefreshCw, 
  Layout, 
  Zap 
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-blue-600 dark:text-cyan-400' };
    switch (iconName) {
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShoppingCart': return <ShoppingCart {...props} />;
      case 'FolderGit2': return <FolderGit2 {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Zap': return <Zap {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-10">
          <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm flex-shrink-0">
            {renderIcon(service.icon)}
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 text-[11px] font-mono font-medium mb-1.5">
              <Clock className="w-3 h-3" />
              <span>Turnaround: {service.deliveryTime}</span>
            </div>
            <h3 id="service-modal-title" className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Comprehensive Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">
            What is Included
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
              >
                <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For & Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800">
            <h5 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
              Ideal For
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {service.idealFor}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800">
            <h5 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
              Core Benefits
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Ready to get started on your <span className="font-semibold text-slate-800 dark:text-slate-200">{service.title}</span>?
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-200 dark:border-slate-700"
            >
              Close
            </button>

            <MagneticButton
              variant="primary"
              size="md"
              className="flex-1 sm:flex-none"
              onClick={() => {
                onClose();
                onInquire(service.title);
              }}
            >
              <span>Inquire This Service</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>

      </div>
    </div>
  );
};
