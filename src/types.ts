export type ProjectCategory = 
  | 'All' 
  | 'Business' 
  | 'E-Commerce' 
  | 'Landing Pages' 
  | 'Premium' 
  | 'Animated';

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  designApproach: string;
  features: string[];
  technologies: string[];
  result: string;
  stats?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  secondaryCategories: ProjectCategory[];
  description: string;
  liveUrl?: string;
  isRecent?: boolean;
  technologies: string[];
  imagePlaceholderGradient: string;
  previewBadge?: string;
  caseStudy: ProjectCaseStudy;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  features: string[];
  idealFor: string;
  benefits: string[];
  deliveryTime: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  period?: string;
  timeline: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  message: string;
  rating: number;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SkillItem {
  name: string;
  category: 'Core' | 'UI/UX & Design' | 'Performance & SEO' | 'Workflow & Tools';
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
}
