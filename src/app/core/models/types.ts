// ============================================================================
// Taj Network Africa - Core TypeScript Interfaces
// ============================================================================

// === Theme Configuration ===
export interface ThemeColors {
    primary: { dark: string; light: string };
    accent: { emerald: string; gold: string; blue: string; purple: string; orange?: string };
    neutral: { white: string; lightGray: string; mediumGray: string; darkGray: string };
}

export interface ThemeTypography {
    fonts: { heading: string; body: string; display?: string };
    sizes: Record<string, string | { desktop: string; mobile: string }>;
}

export interface ThemeConfig {
    colors: ThemeColors;
    typography: ThemeTypography;
    spacing: Record<string, string>;
    breakpoints: Record<string, string>;
    animations: Record<string, { duration: string; easing?: string }>;
}

// === Navigation Configuration ===
export interface NavItem {
    text: string;
    url: string;
    icon?: string;
    children?: NavItem[];
    isExternal?: boolean;
}

export interface NavigationConfig {
    main: NavItem[];
    cta?: { text: string; url: string; style?: string };
    social?: { platform: string; url: string; icon: string }[];
}

// === Page & Section Configuration ===
export type SectionType = 'hero' | 'grid' | 'content' | 'cta' | 'testimonial' | 'form' | 'custom' | 'faq' | 'team' | 'services' | 'tech-slider' | 'portfolio' | 'cta-banner' | 'why-choose-us' | 'home-about' | 'footer';

export interface SectionConfig {
    type: SectionType;
    id: string;
    data: Record<string, any>;
    styling?: Record<string, any>;
    animation?: boolean;
}

export interface PageMeta {
    description: string;
    keywords?: string;
    image?: string;
    ogTitle?: string;
    ogDescription?: string;
}

export interface PageConfig {
    id: string;
    title: string;
    slug: string;
    route?: string;
    meta: PageMeta;
    sections: SectionConfig[];
}

// === Content Types ===
export interface CTAButton {
    text: string;
    url: string;
    style: 'primary' | 'secondary' | 'outline' | 'ghost';
    icon?: string;
}

export interface Stat {
    value: string;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface HeroData {
    tag?: string;
    headline: string;
    subheadline?: string;
    ctaButtons?: CTAButton[];
    stats?: Stat[];
    backgroundVideo?: string;
    backgroundImage?: string;
    heroImage?: string;
    trustedBy?: { name: string; logo: string }[];
    layout?: 'centered' | 'left' | 'split';
}

export interface Service {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    icon?: string;
    image?: string;
    url?: string;
    technologies?: string[];
    benefits?: string[];
    features?: string[];
}

export interface CaseStudy {
    id: string;
    clientName: string;
    clientLogo?: string;
    projectTitle: string;
    excerpt: string;
    industry: string;
    services: string[];
    technologies: string[];
    image: string;
    images?: string[];
    challenge?: string;
    solution?: string;
    results: Record<string, string>;
    testimonial?: {
        quote: string;
        author: string;
        role?: string;
        company: string;
        avatar?: string;
    };
    url?: string;
    featured?: boolean;
}

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content?: string;
    author: string;
    authorAvatar?: string;
    image: string;
    url?: string;
    category?: string;
    tags?: string[];
    publishedAt?: string;
    readTime?: number;
    featured?: boolean;
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role?: string;
    company: string;
    avatar?: string;
    rating?: number;
    projectType?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio?: string;
    avatar: string;
    social?: { platform: string; url: string }[];
}

export interface TrainingCourse {
    id: string;
    title: string;
    description: string;
    image?: string;
    url?: string;
    duration?: string;
    level?: 'beginner' | 'intermediate' | 'advanced';
    technologies?: string[];
    price?: string;
    featured?: boolean;
}

export interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

// === Form Configuration ===
export type FormFieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'date' | 'number';

export interface FormFieldOption {
    value: string;
    label: string;
}

export interface FormField {
    name: string;
    type: FormFieldType;
    label: string;
    placeholder?: string;
    required?: boolean;
    options?: string[] | FormFieldOption[];
    rows?: number;
    validation?: {
        pattern?: string;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
    };
    helpText?: string;
    width?: 'full' | 'half';
}

export interface FormConfig {
    id: string;
    formRef?: string;
    title?: string;
    description?: string;
    fields: FormField[];
    submitText?: string;
    successMessage?: string;
    endpoint?: string;
}

// === Grid Configuration ===
export type GridLayout = 'default' | 'carousel' | 'masonry' | 'accordion' | 'list';

export interface GridData {
    title?: string;
    subtitle?: string;
    contentRef: string;
    columns?: number;
    layout?: GridLayout;
    limit?: number;
    showViewAll?: boolean;
    viewAllUrl?: string;
    filters?: string[];
    searchable?: boolean;
}

// === Footer Configuration ===
export interface FooterLink {
    text: string;
    url: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface FooterConfig {
    companyInfo: {
        logo: string;
        description: string;
        email: string;
        phone: string;
        address: string;
    };
    sections: FooterSection[];
    social: { platform: string; url: string; icon: string }[];
    legal: FooterLink[];
    newsletter?: {
        title: string;
        placeholder: string;
        buttonText: string;
    };
    copyright: string;
}

// === Content Store ===
export interface ContentStore {
    services: Service[];
    caseStudies?: CaseStudy[];
    blogPosts: BlogPost[];
    testimonials?: Testimonial[];
    team?: TeamMember[];
    trainingCourses?: TrainingCourse[];
    faq?: FAQItem[];
    forms: Record<string, FormField[]>;
}

// === API Response Types ===
export interface PagesConfig {
    pages: PageConfig[];
    content: ContentStore;
}
