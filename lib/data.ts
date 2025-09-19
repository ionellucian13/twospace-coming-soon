// Two Space - Content Data Structure
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  timeline: string;
  price: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  objective: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  image?: string;
  technologies: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: 'coffee' | 'tea' | 'special';
  description: string;
  bestseller?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  capacity: number;
  price?: string;
}

// Services Data
export const services: Service[] = [
  {
    id: 'branding',
    title: 'Branding',
    description: 'Identitate vizuală completă și strategia de brand',
    features: ['Logo Design', 'Brand Guidelines', 'Paleta de culori', 'Tipografie'],
    timeline: '2-3 săptămâni',
    price: 'de la 4.000 RON'
  },
  {
    id: 'initiere',
    title: 'Inițiere',
    description: 'Lansarea brandului pe piață și primii pași',
    features: ['Website Landing', 'Social Media Setup', 'Marketing Kit', 'Launch Strategy'],
    timeline: '3-4 săptămâni',
    price: 'de la 8.000 RON'
  },
  {
    id: 'cercetare',
    title: 'Cercetare',
    description: 'Analiză de piață și strategia de poziționare',
    features: ['Market Research', 'Competitor Analysis', 'Target Audience', 'Positioning Strategy'],
    timeline: '1-2 săptămâni',
    price: 'de la 3.000 RON'
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'Creștere susținută și optimizare continuă',
    features: ['Performance Marketing', 'SEO Optimization', 'Conversion Rate Optimization', 'Analytics Setup'],
    timeline: 'Ongoing',
    price: 'de la 5.000 RON/lună'
  }
];

// Packages Data
export const packages: Package[] = [
  {
    id: 'startup',
    name: 'Start-up',
    price: '6.000 RON',
    description: 'Pentru afaceri noi care își încep drumul',
    features: [
      'Logo și identitate vizuală de bază',
      'Business cards și materiale print',
      'Ghid de utilizare brand',
      'Consultanță naming (dacă e necesar)',
      'Tone of Voice definit'
    ]
  },
  {
    id: 'launch-kit',
    name: 'Launch Kit',
    price: '12.000 RON',
    description: 'Pachet complet pentru lansarea pe piață',
    features: [
      'Toate din Start-up',
      'Website de prezentare (5 pagini)',
      'Setup social media (2 platforme)',
      'SEO on-page inițial',
      'Google My Business setup',
      'Email marketing setup'
    ],
    popular: true
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '6.000-12.000 RON/lună',
    description: 'Abonament pentru creștere continuă',
    features: [
      'Social Media Management (2 rețele)',
      'Google Ads & Facebook Ads management',
      'SEO ongoing și content marketing',
      'Email marketing campaigns',
      'Rapoarte lunare detaliate',
      'Consultanță strategică'
    ]
  }
];

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-fashion',
    slug: 'ecommerce-fashion-brand',
    title: 'Brand de Fashion Online',
    client: 'StyleCo',
    industry: 'Fashion & Retail',
    objective: 'Creșterea vânzărilor online și awareness-ul brandului',
    solution: [
      'Rebranding complet cu identitate modernă',
      'Website e-commerce optimizat pentru conversii',
      'Strategie de social media focusată pe Instagram și TikTok',
      'Campanii Google Ads și Facebook Ads',
      'Program de influencer marketing'
    ],
    results: [
      { metric: 'Creștere trafic organic', value: '+38%', description: 'în primele 6 luni' },
      { metric: 'Reducerea CAC', value: '-27%', description: 'pentru toate canalele' },
      { metric: 'Creștere vânzări', value: '+156%', description: 'față de perioada anterioară' }
    ],
    technologies: ['Shopify', 'Google Analytics', 'Facebook Pixel', 'Mailchimp']
  },
  {
    id: 'restaurant-local',
    slug: 'restaurant-local-branding',
    title: 'Restaurant Local - Rebranding',
    client: 'Gusturi Locale',
    industry: 'HoReCa',
    objective: 'Modernizarea brandului și atragerea unei audiențe mai tinere',
    solution: [
      'Identitate vizuală fresh și atractivă',
      'Website cu meniu online și rezervări',
      'Strategie social media cu focus pe food photography',
      'Google My Business optimization',
      'Campanii locale targetate'
    ],
    results: [
      { metric: 'Creștere rezervări online', value: '+89%', description: 'în 3 luni' },
      { metric: 'Îmbunătățire rating Google', value: '4.8/5', description: 'de la 4.1/5' },
      { metric: 'Creștere followers social', value: '+245%', description: 'pe Instagram' }
    ],
    technologies: ['WordPress', 'OpenTable', 'Instagram Business', 'Google My Business']
  }
];

// Menu Data
export const menuItems: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    price: '10 RON',
    category: 'coffee',
    description: 'Cafea espresso perfectă, boabe proaspete măcinate',
    bestseller: true
  },
  {
    id: 'americano',
    name: 'Americano',
    price: '12 RON',
    category: 'coffee',
    description: 'Espresso dublu cu apă caldă'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: '15 RON',
    category: 'coffee',
    description: 'Espresso cu lapte spumat și scorțișoară',
    bestseller: true
  },
  {
    id: 'latte',
    name: 'Latte',
    price: '16 RON',
    category: 'coffee',
    description: 'Espresso cu lapte cald și spumă fină'
  },
  {
    id: 'green-tea',
    name: 'Ceai Verde Premium',
    price: '14 RON',
    category: 'tea',
    description: 'Ceai verde de calitate superioară cu antioxidanți'
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Special',
    price: '18 RON',
    category: 'special',
    description: 'Cafea rece preparată 12h, cu note de ciocolată',
    bestseller: true
  }
];

// Events Data
export const events: Event[] = [
  {
    id: 'workshop-brand',
    title: 'Workshop: Brand în 7 Pași',
    date: '2025-01-15',
    time: '18:00',
    description: 'Învață să îți construiești brandul pas cu pas',
    capacity: 20,
    price: '150 RON'
  },
  {
    id: 'coffee-entrepreneurs',
    title: 'Coffee cu Antreprenori',
    date: '2025-01-22',
    time: '19:00',
    description: 'Networking informal pentru antreprenori locali',
    capacity: 15,
    price: 'Gratuit'
  },
  {
    id: 'marketing-trends',
    title: 'Marketing Trends 2025',
    date: '2025-02-05',
    time: '18:30',
    description: 'Prezentare tendințe marketing pentru anul 2025',
    capacity: 25,
    price: '100 RON'
  }
];

export const testimonials = [
  {
    name: 'Ana Popescu',
    company: 'StyleCo Fashion',
    text: 'Two Space ne-a transformat complet strategia de marketing. Rezultatele au depășit toate așteptările.',
    rating: 5
  },
  {
    name: 'Mihai Ionescu',
    company: 'Gusturi Locale',
    text: 'Echipa Two Space înțelege perfect nevoile afacerilor locale. Colaborarea a fost excelentă.',
    rating: 5
  }
];