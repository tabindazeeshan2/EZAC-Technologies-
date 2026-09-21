import {
  Globe,
  Smartphone,
  Code2,
  BrainCircuit,
  Lightbulb,
  SlidersHorizontal,
  TrendingUp,
  Target,
  MonitorSmartphone,
  LayoutDashboard,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'EZAC Technologies',
  tagline: 'Innovate • Build • Elevate',
  statement: 'Building Smart Solutions for a Better Tomorrow',
  description: 'Building smart digital solutions for a better tomorrow.',
  email: 'ezactechnologies@outlook.com',
  linkedin: 'https://www.linkedin.com/company/ezac-technologies',
  instagram: 'https://www.instagram.com/ezactechnologies',
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
  number: string
  title: string
  description: string
  capabilities: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'web',
    number: '01',
    title: 'Website Development',
    description:
      'Modern, responsive and high-performing websites designed to give businesses a strong digital presence.',
    capabilities: [
      'Business websites',
      'Corporate websites',
      'Landing pages',
      'Responsive web applications',
      'UI implementation',
      'Performance optimization',
    ],
    icon: Globe,
  },
  {
    id: 'mobile',
    number: '02',
    title: 'Mobile App Development',
    description:
      'Custom mobile applications designed around your users, goals and business requirements.',
    capabilities: [
      'Android applications',
      'iOS applications',
      'Cross-platform applications',
      'Mobile UI/UX',
      'API integrations',
    ],
    icon: Smartphone,
  },
  {
    id: 'software',
    number: '03',
    title: 'Custom Software Development',
    description:
      'Scalable software solutions tailored to the specific needs and workflows of your business.',
    capabilities: [
      'Business management systems',
      'Internal tools',
      'Custom dashboards',
      'Database-driven applications',
      'API development',
      'Cloud-based solutions',
    ],
    icon: Code2,
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI & Business Automation',
    description:
      'Intelligent digital solutions that reduce repetitive work, improve efficiency and help businesses operate smarter.',
    capabilities: [
      'AI-powered applications',
      'Workflow automation',
      'AI integrations',
      'Data processing',
      'Intelligent business tools',
      'Process optimization',
    ],
    icon: BrainCircuit,
  },
]

export interface Capability {
  title: string
  description: string
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  {
    title: 'Websites & Digital Experiences',
    description:
      'We create responsive websites and digital experiences that communicate your brand, engage visitors and give your business a professional online presence. Our solutions are designed with usability, performance and scalability in mind.',
    icon: Globe,
  },
  {
    title: 'Mobile Applications',
    description:
      'We develop user-focused mobile applications that bring your ideas and services to mobile devices. Applications can be designed for specific business needs, customer experiences or digital products.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Business Software',
    description:
      'We build purpose-driven software, dashboards and internal tools that help businesses organize information, manage workflows and improve day-to-day operations through technology.',
    icon: LayoutDashboard,
  },
  {
    title: 'AI & Automation',
    description:
      'We integrate practical AI capabilities and automation into digital products and business workflows to help reduce repetitive tasks, process information and create more efficient ways of working.',
    icon: Sparkles,
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
    description: 'We turn ideas into practical digital products and experiences.',
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
    description: 'We create solutions with future growth and expansion in mind.',
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
  'Website Development',
  'Mobile App Development',
  'Custom Software Development',
  'AI & Business Automation',
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