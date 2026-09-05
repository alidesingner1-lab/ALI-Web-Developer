import { Project, Service, PricingPlan, Testimonial, FaqItem, SkillItem, ProcessStep } from '../types';

export const CONTACT_INFO = {
  name: 'ALI',
  role: 'Web Developer',
  tagline: 'Building Digital Experiences That Grow Businesses.',
  bio: 'ALI creates modern, responsive and high-performance websites that help businesses and brands build a stronger online presence.',
  email: 'aliwebdeveloper.info@gmail.com',
  phone: '+923244887694',
  whatsapp: '+923244887694',
  whatsappLink: 'https://wa.me/923244887694?text=Hello%20Ali,%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20a%20website%20project.',
  workingHours: '24/7 (Almost)',
  category: 'Website Developer & Logo Designer',
  availability: 'Available for New Projects',
  stats: [
    { label: 'Projects Built', value: 10, suffix: '+', desc: 'Crafted for clients & businesses' },
    { label: 'Responsive', value: 100, suffix: '%', desc: 'Flawless across mobile & desktop' },
    { label: 'Fast Delivery', value: 24, prefix: '12–', suffix: 'h', desc: 'Rapid initial turnaround' },
    { label: 'Communication', value: 24, suffix: '/7', desc: 'Direct WhatsApp & Email support' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'beauty-salon',
    title: 'Beauty Salon',
    category: 'Premium',
    secondaryCategories: ['All', 'Premium', 'Business'],
    description: 'Multi-section salon website with booking, WhatsApp integration and an AI chat widget.',
    liveUrl: 'https://rimshahairandskincare.netlify.app',
    technologies: ['Modern UI/UX', 'Booking Flow', 'WhatsApp API', 'AI Assistant Widget', 'Responsive'],
    imagePlaceholderGradient: 'from-rose-500 to-purple-800',
    previewBadge: 'Client Project',
    caseStudy: {
      overview: 'A luxury multi-section website engineered for a premium beauty & skincare salon. Combines high-end visual elegance with direct appointment booking and WhatsApp customer consultation.',
      problem: 'The salon relied primarily on manual Instagram DMs to book clients, resulting in missed appointments, delayed responses, and lost revenue.',
      solution: 'Crafted a sophisticated website showcasing services, pricing tiers, client transformations, an automated booking request module, and an embedded consultation chat widget.',
      designApproach: 'High-aesthetic editorial layout with soft neutral backgrounds, elegant typography, warm accents, and refined micro-interactions.',
      features: [
        'Interactive treatment menu with transparent pricing',
        'One-tap WhatsApp appointment booking integration',
        'Intelligent client inquiry assistant widget',
        'Testimonials & before-and-after showcase gallery',
        'Working hours & interactive Google Maps location'
      ],
      technologies: ['React', 'Tailwind CSS', 'WhatsApp Business API', 'Lucide Icons', 'Netlify Hosting'],
      result: 'Over 65% increase in direct booking inquiries and zero missed customer inquiries within the first month.',
      stats: [
        { label: 'Inquiries', value: '+65%' },
        { label: 'Engagement', value: '3.4x' },
        { label: 'Uptime', value: '99.9%' }
      ]
    }
  },
  {
    id: 'ecommerce-store',
    title: 'E-commerce',
    category: 'Premium',
    secondaryCategories: ['All', 'Premium', 'E-Commerce'],
    description: 'Full online store with product catalog, cart and checkout flow.',
    liveUrl: 'https://readysuite.netlify.app',
    technologies: ['Modern Catalog', 'Cart Drawer', 'Fast Search', 'Filter System', 'High Performance'],
    imagePlaceholderGradient: 'from-cyan-600 to-blue-900',
    previewBadge: 'High Performance',
    caseStudy: {
      overview: 'A high-converting digital storefront designed to provide shoppers with an instantaneous browsing and checkout experience across both mobile and desktop screens.',
      problem: 'Many store themes feel cluttered with excessive popups and sluggish navigation that frustrate users on mobile devices.',
      solution: 'Rebuilt the shopping journey around speed, clean visual hierarchy, crisp imagery, and quick-add actions that keep the buyer in the flow.',
      designApproach: 'Minimalist product-first architecture with high contrast CTA buttons, tactile hover states, and smooth drawer slide-ins.',
      features: [
        'Lightning fast item filtering by category and price',
        'Slide-over cart with live totals and free shipping threshold',
        'Optimized responsive grid with lazy-loaded imagery',
        'Direct WhatsApp purchase inquiry fallback',
        'SEO-optimized product meta tags'
      ],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design', 'Modern JavaScript'],
      result: 'Achieved Google PageSpeed score of 98 on mobile and seamless checkout completion.',
      stats: [
        { label: 'PageSpeed', value: '98/100' },
        { label: 'Bounce Rate', value: '-38%' },
        { label: 'Checkout Clicks', value: '2 steps' }
      ]
    }
  },
  {
    id: 'animated-website',
    title: 'Animated Website',
    category: 'Animated',
    secondaryCategories: ['All', 'Animated'],
    description: 'Project . Pending',
    technologies: ['WebGL/Canvas', 'Motion', 'Interactive Physics'],
    imagePlaceholderGradient: 'from-violet-600 to-slate-900',
    previewBadge: 'Pending',
    isRecent: false,
    caseStudy: {
      overview: 'Interactive storytelling and high-performance motion experience.',
      problem: 'Pending',
      solution: 'Project in progress.',
      designApproach: 'Dark luxury motion architecture.',
      features: ['GPU-accelerated animations', 'Scroll triggers', 'Interactive canvas'],
      technologies: ['React', 'Motion', 'Canvas'],
      result: 'Pending launch.',
      stats: [{ label: 'Status', value: 'Pending' }]
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    icon: 'Briefcase',
    shortDesc: 'Custom business websites built to establish authority, generate inquiries, and build brand trust.',
    description: 'A complete corporate or small-business web presence engineered for maximum credibility, lightning speed, and user engagement. Tailored specifically for your industry and target customers.',
    features: [
      'Bespoke visual identity & corporate layout',
      'Multi-page structure (Home, About, Services, Contact)',
      'Lead generation forms & WhatsApp integration',
      'Google Maps & business schema setup',
      'Easy content editing architecture'
    ],
    idealFor: 'Local businesses, consulting firms, medical practices, agencies, and service providers.',
    benefits: ['Higher credibility', 'More incoming client calls', 'Stronger local Google ranking'],
    deliveryTime: '2 – 4 Days'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    icon: 'Sparkles',
    shortDesc: 'High-impact landing pages designed to maximize conversions, product launches, and advertising ROI.',
    description: 'Single-page conversion powerhouses that tell your story, highlight your core value proposition, dismantle objections, and guide visitors directly into your sales funnel.',
    features: [
      'Conversion-centered visual hierarchy',
      'Compelling hero section & trust stats',
      'Interactive feature showcases & video slots',
      'Frictionless lead capture forms',
      'A/B test ready structure'
    ],
    idealFor: 'Product launches, marketing campaigns, event signups, and paid advertising funnels.',
    benefits: ['Higher conversion rates', 'Lower cost per acquisition', 'Ultra-fast loading speed'],
    deliveryTime: '1 – 2 Days'
  },
  {
    id: 'ecommerce-websites',
    title: 'E-Commerce Websites',
    icon: 'ShoppingCart',
    shortDesc: 'Online stores with intuitive catalogs, fast product search, smooth cart drawers, and secure checkout.',
    description: 'Scalable e-commerce web applications providing your shoppers with an enjoyable buying experience. Clean product grids, live stock indicators, dynamic cart updates, and mobile checkout.',
    features: [
      'Product catalog with filtering & search',
      'Slide-over cart drawer with live calculations',
      'Direct WhatsApp order button option',
      'Payment gateway readiness (Stripe/PayPal)',
      'Mobile-first responsive buying experience'
    ],
    idealFor: 'Retail brands, boutique fashion, skincare lines, digital products, and physical stores.',
    benefits: ['Seamless checkout on phone', 'Zero lag browsing', 'Direct revenue generation'],
    deliveryTime: '3 – 6 Days'
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    icon: 'FolderGit2',
    shortDesc: 'Stunning creative portfolios that display your work with distinction, motion, and elegance.',
    description: 'Personal and studio showcase platforms designed to leave a memorable impression on recruiters, high-paying clients, and collaborators.',
    features: [
      'Dynamic project filter system & case study modals',
      'Smooth micro-interactions & moving lighting',
      'Interactive resume & technology badges',
      'Direct booking / contact CTAs',
      'Dark & Light theme system'
    ],
    idealFor: 'Developers, designers, architects, photographers, creators, and freelancers.',
    benefits: ['Stand out in applications', 'Command higher freelance rates', 'High-end personal brand'],
    deliveryTime: '2 – 3 Days'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    icon: 'Smartphone',
    shortDesc: 'Mobile-first layouts ensuring flawless appearance and tactile usability across every screen size.',
    description: 'From 360px mobile phones up to 4K desktop monitors, every layout element adapts smoothly. No awkward horizontal scrolls, unreadable fonts, or broken buttons.',
    features: [
      'Mobile-first fluid CSS architecture',
      'Touch-friendly navigation & 44px+ hit targets',
      'Adaptive typography & image srcset scaling',
      'Cross-browser tested (Chrome, Safari, Firefox, Edge)',
      'High DPI & Retina display support'
    ],
    idealFor: 'Any modern website needing seamless multi-device perfection.',
    benefits: ['Zero lost mobile customers', 'Improved SEO rankings', 'Flawless tablet & phone UX'],
    deliveryTime: '1 – 2 Days'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    icon: 'RefreshCw',
    shortDesc: 'Transform outdated, slow, or low-converting websites into sleek, modern, high-performance engines.',
    description: 'Give your existing brand a major digital upgrade. We keep what works, eliminate the technical bloat, and rebuild the interface using modern web technologies.',
    features: [
      'Complete visual overhaul & modern branding',
      'Code modernization to modern React & Tailwind',
      'Speed boost and mobile optimization',
      'Information architecture cleanup',
      'Zero-downtime migration & deployment'
    ],
    idealFor: 'Businesses with outdated sites built years ago that look dated or load sluggishly.',
    benefits: ['Modern premium look', 'Drastically faster loading', 'Restored customer trust'],
    deliveryTime: '2 – 4 Days'
  },
  {
    id: 'ui-ux-implementation',
    title: 'UI/UX Implementation',
    icon: 'Layout',
    shortDesc: 'Pixel-perfect translation of Figma designs into clean, accessible, and interactive code.',
    description: 'Bridge the gap between design and production. Clean semantic HTML, modular components, smooth state management, and fluid animations that match the design system exactly.',
    features: [
      'Pixel-perfect Figma to React / HTML translation',
      'Micro-interactions & state feedback',
      'WCAG AA accessible contrast & keyboard navigation',
      'Design tokens & modular architecture',
      'Comprehensive component documentation'
    ],
    idealFor: 'Designers, startups, and agencies looking for a skilled developer to build their Figma files.',
    benefits: ['Exact visual fidelity', 'Maintainable codebase', 'Delightful user feedback'],
    deliveryTime: '2 – 5 Days'
  },
  {
    id: 'website-optimization',
    title: 'Website Optimization',
    icon: 'Zap',
    shortDesc: 'Speed tuning, Core Web Vitals enhancement, and SEO foundations for rapid delivery.',
    description: 'Turn a sluggish website into an instantaneous experience. We optimize asset delivery, minify scripts, eliminate render-blocking CSS, and configure metadata for search engines.',
    features: [
      'Core Web Vitals tuning (LCP, FID, CLS)',
      'Image compression & modern WebP/AVIF formatting',
      'Bundle splitting & lazy loading setup',
      'Meta tags, Open Graph, and Structured Schema',
      'Netlify / Vercel high-speed CDN deployment'
    ],
    idealFor: 'Sites struggling with high bounce rates or failing Google PageSpeed benchmarks.',
    benefits: ['Under 1s load times', 'Higher Google search ranking', 'Reduced server bandwidth'],
    deliveryTime: '12 – 24 Hours'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    summary: 'Understanding goals & target audience',
    description: 'We discuss your business objectives, target audience, brand aesthetic, and core requirements to establish a crystal-clear project blueprint.',
    deliverables: ['Project Scope Document', 'Content Checklist', 'Timeline & Milestone Agreement']
  },
  {
    step: '02',
    title: 'Planning',
    summary: 'Wireframing & architecture',
    description: 'Structure the user journey, define page sections, map key conversion paths, and select the optimal modern technology stack.',
    deliverables: ['Information Architecture', 'Section Wireframes', 'Tech Stack Configuration']
  },
  {
    step: '03',
    title: 'Design',
    summary: 'High-fidelity UI & visual system',
    description: 'Craft the modern visual system: typography pairing, colors, interactive components, moving light accents, and responsive layouts.',
    deliverables: ['Design Mockups', 'Interactive Prototypes', 'Component Style Guide']
  },
  {
    step: '04',
    title: 'Development',
    summary: 'Clean, modular & responsive coding',
    description: 'Build the website using modern React, Tailwind CSS, semantic HTML, and fluid animations. Zero bloat, maximum performance.',
    deliverables: ['Responsive Source Code', 'Interactive Features', 'Form & WhatsApp Integrations']
  },
  {
    step: '05',
    title: 'Testing',
    summary: 'Performance, cross-device & QA',
    description: 'Rigorous cross-browser testing on mobile, tablet, and desktop devices. Performance profiling, accessibility checks, and form validation.',
    deliverables: ['Performance Audit (>90 PageSpeed)', 'Cross-Device QA', 'Accessibility Check']
  },
  {
    step: '06',
    title: 'Launch',
    summary: 'Deployment & handover',
    description: 'Deploy to a high-speed global CDN (Netlify/Vercel) with custom domain connection, SSL certificate, and direct post-launch support.',
    deliverables: ['Live Production Website', 'Domain & SSL Setup', 'Free 30-Day Support']
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'HTML5 & Semantic Markup', category: 'Core', description: 'Accessible, clean, and SEO-friendly document structures', icon: 'Code' },
  { name: 'CSS3 & Modern Tailwind', category: 'Core', description: 'Utility-first styling, custom keyframe animations & variables', icon: 'Palette' },
  { name: 'JavaScript (ES6+) & TypeScript', category: 'Core', description: 'Clean functional code, strict typing, and reactive states', icon: 'Cpu' },
  { name: 'Responsive Web Design', category: 'UI/UX & Design', description: 'Pixel-perfect on 360px phones through ultra-wide desktop monitors', icon: 'Smartphone' },
  { name: 'UI/UX Implementation', category: 'UI/UX & Design', description: 'Transforming design visions into interactive intuitive user experiences', icon: 'Layout' },
  { name: 'Micro-Interactions & Motion', category: 'UI/UX & Design', description: 'Fluid button effects, moving border lights, and card reveals', icon: 'Sparkles' },
  { name: 'Performance Optimization', category: 'Performance & SEO', description: 'Sub-second load times, asset compression, and clean execution', icon: 'Zap' },
  { name: 'SEO Basics & Open Graph', category: 'Performance & SEO', description: 'Structured metadata, social sharing previews, and search discoverability', icon: 'Search' },
  { name: 'Git & GitHub Versioning', category: 'Workflow & Tools', description: 'Clean branch workflows, collaborative commits, and version management', icon: 'GitBranch' },
  { name: 'Deployment & CDN Hosting', category: 'Workflow & Tools', description: 'Netlify, Vercel, DNS management, and custom SSL setups', icon: 'Globe' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rimsha K.',
    role: 'Salon Owner',
    business: 'Rimsha Hair & Skincare',
    message: 'ALI built our salon website with direct WhatsApp booking and our clients love how easy it is to schedule appointments. He completed everything on time and guided us through every step!',
    rating: 5,
    initials: 'RK'
  },
  {
    id: '2',
    name: 'Hamza S.',
    role: 'Founder',
    business: 'ReadySuite E-Commerce',
    message: 'The e-commerce app ALI developed for us is lightning fast. Our mobile customers can browse products and check out in seconds. Clean code, great communication, and genuine professionalism.',
    rating: 5,
    initials: 'HS'
  },
  {
    id: '3',
    name: 'Tariq M.',
    role: 'Managing Director',
    business: 'Apex Consulting Services',
    message: 'Working with ALI was a breeze. He took our outdated company website and completely modernized it into a sleek, corporate experience that has already generated multiple new client leads.',
    rating: 5,
    initials: 'TM'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    badge: 'Essential',
    description: 'Perfect for small businesses or individuals wanting a clean, modern online presence quickly.',
    price: '$199',
    timeline: '12 – 48 Hours',
    features: [
      'Modern single-page or landing page design',
      '100% responsive across mobile & desktop',
      'Direct WhatsApp & contact form integration',
      'Basic SEO setup & Google indexing meta tags',
      'Fast CDN deployment (Netlify/Vercel)',
      '14 days of free post-launch support'
    ],
    isPopular: false,
    ctaText: 'Start with Starter'
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    badge: 'Most Popular',
    description: 'Ideal for established businesses and service providers wanting a strong digital presence.',
    price: '$399',
    timeline: '3 – 5 Days',
    features: [
      'Multi-section corporate or service website (up to 5 pages)',
      'Custom modern UI/UX with moving light accents',
      'Interactive service modals & portfolio filtering',
      'WhatsApp integration with custom inquiry pre-fills',
      'Advanced speed optimization (90+ PageSpeed)',
      'Structured schema, social Open Graph & SEO tags',
      '30 days of direct support & content revisions'
    ],
    isPopular: true,
    ctaText: 'Choose Professional'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    badge: 'Full Solution',
    description: 'Advanced custom websites, e-commerce stores, or rich interactive digital experiences.',
    price: '$799',
    timeline: '6 – 9 Days',
    features: [
      'Full e-commerce store or complex custom application',
      'Product catalog, cart drawer & payment checkout flow',
      'Custom animations, micro-interactions & dark mode',
      'Interactive booking widget or AI chat consultation',
      'Comprehensive Core Web Vitals optimization',
      'Custom domain & SSL assistance',
      '60 days priority support & feature enhancements'
    ],
    isPopular: false,
    ctaText: 'Get Premium Solution'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a website take?',
    answer: 'Turnaround depends on project scope. A modern landing page or starter business site takes between 12 to 48 hours. Multi-page business websites typically take 3 to 5 days, while full e-commerce stores or complex applications take 6 to 9 days. Rapid delivery and adherence to deadlines is guaranteed.'
  },
  {
    id: 'faq-2',
    question: 'Do you build responsive websites?',
    answer: 'Yes, 100% of websites I build are strictly mobile-first and responsive. They are thoroughly tested across all screen resolutions—from 360px mobile phones up to 4K desktop screens—ensuring crisp typography, comfortable touch targets, and flawless layout flow.'
  },
  {
    id: 'faq-3',
    question: 'Can you redesign an existing website?',
    answer: 'Absolutely. If your current website looks dated, feels sluggish, or fails to convert visitors, I can modernize the entire visual layout, update the code to modern React and Tailwind CSS, and dramatically boost loading speed while preserving your existing brand value.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide website hosting/deployment?',
    answer: 'Yes. I handle the entire deployment process on ultra-fast global content delivery networks such as Netlify or Vercel, configure custom domain records (DNS), install free SSL certificates for secure HTTPS, and hand over full access to you.'
  },
  {
    id: 'faq-5',
    question: 'Can I request custom features?',
    answer: 'Yes! Whether you need direct WhatsApp appointment booking, interactive calculators, product catalogs, modal case studies, custom animations, or AI assistant chat widgets, I can build custom interactive features tailored to your exact workflow.'
  },
  {
    id: 'faq-6',
    question: 'How do I provide my website content?',
    answer: 'You can share text, logos, and images via WhatsApp, Email, or Google Drive. If you do not have all your text finalized yet, I can provide structured copy recommendations and high-quality placeholder layouts to help you visualize everything.'
  },
  {
    id: 'faq-7',
    question: 'Do you provide maintenance?',
    answer: 'Every project comes with free direct support after launch (from 14 up to 60 days depending on your plan). I also offer ongoing maintenance packages for regular updates, content additions, and performance monitoring.'
  }
];
