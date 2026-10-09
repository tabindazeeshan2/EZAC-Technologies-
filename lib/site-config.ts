import {
  Globe,
  Code2,
  Lightbulb,
  SlidersHorizontal,
  TrendingUp,
  Target,
  Bot,
  Cloud,
  Server,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'EZAC Technologies',
  tagline: 'Innovate • Build • Elevate',
  statement: 'Building Smart Solutions for a Better Tomorrow',
  description: 'Building smart digital solutions for a better tomorrow.',
  email: 'info@ezactechnologies.com',
  linkedin: 'https://www.linkedin.com/company/ezac-technologies',
  instagram: 'https://www.instagram.com/ezactechnologies_',
  instagramHandle: '@ezactechnologies',
  linkedinName: 'EZAC Technologies',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]



export interface Service {
  id: string
  slug: string
  number: string
  title: string
  description: string
  capabilities: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'digital-products',
    number: '01',
    slug: 'digital-products',
    title: 'Digital Products',
    description:
      'Modern digital experiences that help businesses build their online presence and connect with their customers.',
    icon: Globe,
    capabilities: [
      'Corporate Websites',
      'E-commerce',
      'Web Applications',
      'Landing Pages',
      'CMS Development',
      'UI / UX Design',
    ],
  },

  {
    id: 'software-applications',
    number: '02',
    title: 'Software & Applications',
    slug: 'software-applications',
    description:
      'Purpose-built software and applications designed around your workflows, users and business requirements.',
    icon: Code2,
    capabilities: [
      'Custom Software',
      'Business Systems',
      'Mobile Applications',
      'ERP & CRM',
      'Custom Dashboards',
      'API Development',
    ],
  },

  {
    id: 'ai-automation',
    number: '03',
    title: 'AI & Automation',
    slug: 'ai-and-automation',
    description:
      'Intelligent solutions that automate repetitive work, improve efficiency and create smarter business experiences.',
    icon: Bot,
    capabilities: [
      'AI Applications',
      'AI Agents',
      'AI Chatbots',
      'Business Automation',
      'Workflow Automation',
      'AI Integrations',
    ],
  },

  {
    id: 'cloud-infrastructure',
    number: '04',
    title: 'Cloud & Infrastructure',
    slug: 'cloud-and-infrastructure',
    description:
      'Reliable technology infrastructure for hosting, deploying, scaling and maintaining your digital solutions.',
    icon: Cloud,
    capabilities: [
      'Cloud Hosting',
      'VPS & Servers',
      'Application Deployment',
      'DevOps',
      'CI / CD',
      'Backup Solutions',
    ],
  },

  {
    id: 'it-hardware',
    number: '05',
    title: 'IT & Hardware',
    slug: 'it-and-hardware',
    description:
      'Technology hardware, networking and IT infrastructure that keeps your organization connected and productive.',
    icon: Server,
    capabilities: [
      'Computers & Workstations',
      'Servers',
      'Network Infrastructure',
      'Wi-Fi Solutions',
      'CCTV Systems',
      'IT Support',
    ],
  },

  {
    id: 'security-data',
    number: '06',
    title: 'Security & Data',
    slug: 'security-and-data',
    description:
      'Protecting your technology environment while connecting systems and turning data into useful business insights.',
    icon: ShieldCheck,
    capabilities: [
      'Cybersecurity',
      'Database Solutions',
      'Data Analytics',
      'Business Intelligence',
      'System Integration',
      'API Integration',
    ],
  },
]


export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export const whyFeatures: Feature[] = [
  {
    title: 'Innovation',
    description:
      'We turn ideas into practical digital products and experiences.',
    icon: Lightbulb,
  },
  {
    title: 'Tailored Solutions',
    description:
      'We build around your business requirements instead of forcing your needs into a one-size-fits-all solution.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Scalability',
    description:
      'We create solutions with future growth and expansion in mind.',
    icon: TrendingUp,
  },
  {
    title: 'Business-Focused',
    description:
      'Technology should support your goals, improve processes and create meaningful value.',
    icon: Target,
  },
]



export const serviceOptions = [
  'Digital Products',
  'Software & Applications',
  'AI & Automation',
  'Cloud & Infrastructure',
  'IT & Hardware',
  'Security & Data',
  'Other',
]

export const budgetOptions = [
  'Not sure yet',
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Prefer to discuss',
]