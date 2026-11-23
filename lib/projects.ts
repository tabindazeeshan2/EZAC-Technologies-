/**
 * =====================================================================
 *  PORTFOLIO / OUR WORK — central project data
 * =====================================================================
 *
 *  Every project shown on /work, /work/[slug] and the homepage
 *  "Selected Projects" section comes from this file.
 *
 *  Source: the EZAC project showcase posters supplied by EZAC
 *  (Post_16.1 … Post_25). All names, headlines, summaries and feature
 *  lists below are taken from the text on those posters. Nothing has
 *  been added beyond what the posters say.
 *
 *  HOW TO EDIT
 *  - Change text directly in the objects below.
 *  - Images live in /public/work/<slug>/
 *      cover.webp  → cropped interface screenshot used on cards
 *      poster.webp → the full showcase poster used on the case study
 *    Replace either file (keep the same name) to update the picture.
 *  - Set `featured: true` to show a project on the homepage
 *    (the first 4 featured projects are shown, in this file's order).
 *  - Optional fields left empty are NOT shown on the website, so the
 *    site never displays unfinished placeholder text.
 *
 *  TODO (EZAC): the fields marked `TODO` were not in the supplied
 *  material. Fill them in when available — they will appear on the
 *  site automatically:
 *    technologies  → tech stack (shown as chips on cards & case study)
 *    client        → client name, only if you have permission to name them
 *    challenge / solution / outcome → case-study narrative
 *    liveUrl       → link to a live product or demo
 *  Also confirm each project's `category` (assigned by us, see below).
 * =====================================================================
 */

export const projectCategories = [
  'Software & Applications',
  'AI & Automation',
  'Web Development',
  'Cloud & Infrastructure',
  'IT & Hardware',
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export interface ProjectFeature {
  title: string
  description?: string
}

export interface Project {
  slug: string
  name: string
  /** Primary category used for filtering. */
  category: ProjectCategory
  /** Small label printed on the poster, e.g. "Client Project Showcase". */
  label?: string
  /** Main headline / strapline from the poster. */
  headline: string
  /** Short description used on cards and as the case-study intro. */
  summary: string
  /** Closing line from the bottom banner of the poster. */
  tagline?: string
  features: ProjectFeature[]
  /** TODO: add the technologies used. Hidden while empty. */
  technologies: string[]
  /** TODO (optional): client name — only with permission. */
  client?: string
  /** TODO (optional): case-study narrative. */
  challenge?: string
  solution?: string
  outcome?: string
  /** TODO (optional): live product / demo URL. */
  liveUrl?: string
  cover: { src: string; alt: string }
  poster: { src: string; alt: string; width: number; height: number }
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'elevatehrm',
    name: 'ElevateHRM',
    // Category assigned by EZAC web team — please confirm.
    category: 'Software & Applications',
    label: 'Modern HR Management',
    headline: 'Simplify HR. Empower People.',
    summary:
      'One platform for people, attendance, payroll and recruitment.',
    features: [
      { title: 'People' },
      { title: 'Attendance' },
      { title: 'Payroll' },
      { title: 'Recruitment' },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/elevatehrm/cover.webp',
      alt: 'ElevateHRM web dashboard and mobile app screens',
    },
    poster: {
      src: '/work/elevatehrm/poster.webp',
      alt: 'ElevateHRM showcase: HR dashboard with workforce and payroll overview, plus leave, attendance and payslip mobile screens',
      width: 1122,
      height: 1402,
    },
    featured: true,
  },
  {
    slug: 'ai-customer-support-platform',
    name: 'AI-Powered Customer Support',
    category: 'AI & Automation',
    label: 'Client Project Showcase',
    headline: 'Configure. Automate. Engage. Convert.',
    summary:
      'An AI customer support platform with a configurable AI assistant, WhatsApp integration, conversation management, knowledge base, leads and analytics.',
    tagline: 'Automate Support. Deliver Better Experiences.',
    features: [
      { title: 'AI Customer Assistant' },
      { title: 'WhatsApp Integration' },
      { title: 'Conversation Management' },
      { title: 'Knowledge Base' },
      { title: 'Leads & Customers' },
      { title: 'Analytics & Reporting' },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/ai-customer-support-platform/cover.webp',
      alt: 'AI assistant configuration screen of the customer support platform',
    },
    poster: {
      src: '/work/ai-customer-support-platform/poster.webp',
      alt: 'AI-Powered Customer Support showcase: assistant profile, tone and escalation settings with a live chat preview',
      width: 1122,
      height: 1402,
    },
    featured: true,
  },
  {
    // Requested as "Construction Management Project" — name below is
    // taken from the supplied poster. Change here if you prefer.
    slug: 'construction-property-visualisation',
    name: 'Construction & Property Visualisation',
    // Category assigned by EZAC web team — please confirm.
    category: 'Web Development',
    label: 'Client Project Showcase',
    headline: 'Interactive Project Platform',
    summary:
      'An interactive platform for showcasing construction and property developments, from concept to completion.',
    tagline:
      'Turning Construction Concepts Into Interactive Digital Experiences.',
    features: [
      { title: 'Project Showcase' },
      { title: '3D Property Visualisation' },
      { title: 'Construction Progress Tracking' },
      { title: 'Architectural Designs' },
      { title: 'Property Details' },
      { title: 'Interactive & User-Friendly' },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/construction-property-visualisation/cover.webp',
      alt: 'Construction and property platform homepage with featured developments',
    },
    poster: {
      src: '/work/construction-property-visualisation/poster.webp',
      alt: 'Construction & Property Visualisation showcase: website hero and featured development cards',
      width: 1600,
      height: 2000,
    },
    featured: true,
  },
  {
    // Requested as "Solar Energy Project" — name below is taken from
    // the supplied poster. Change here if you prefer.
    slug: 'interactive-solar-solution',
    name: 'Interactive Solar Solution',
    // Category assigned by EZAC web team — please confirm.
    category: 'Web Development',
    label: 'Client Project Showcase',
    headline: 'A Digital Platform for Solar Planning & Proposals',
    summary:
      'A digital platform for solar planning and proposals — from site and roof visualisation to system configuration and proposals.',
    tagline: 'Plan, Visualise and Propose Your Solar Project',
    features: [
      { title: 'Site & Roof Visualisation' },
      { title: 'System Configuration' },
      { title: 'Energy & Savings Forecast' },
      { title: 'Instant Proposals' },
      { title: 'Customisable System Options' },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/interactive-solar-solution/cover.webp',
      alt: 'Solar planning platform landing screen with an energy overview panel',
    },
    poster: {
      src: '/work/interactive-solar-solution/poster.webp',
      alt: 'Interactive Solar Solution showcase: solar property landing page with energy overview',
      width: 1600,
      height: 2000,
    },
    featured: true,
  },
  {
    slug: 'smart-crm',
    name: 'Smart CRM',
    category: 'Software & Applications',
    headline: 'Manage Leads. Build Relationships. Grow Your Business.',
    summary:
      'A CRM for centralising contacts, tracking deals and pipeline, and gaining insights across the team.',
    features: [
      {
        title: 'Centralize Contacts',
        description: 'Keep every relationship in one place.',
      },
      {
        title: 'Track Deals & Pipeline',
        description: 'From discovery to close.',
      },
      {
        title: 'Gain Insights',
        description: 'Make data-driven decisions.',
      },
      {
        title: 'Boost Team Productivity',
        description: 'Stay organized and follow up effortlessly.',
      },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/smart-crm/cover.webp',
      alt: 'Smart CRM dashboard with pipeline overview and lead generation charts',
    },
    poster: {
      src: '/work/smart-crm/poster.webp',
      alt: 'Smart CRM showcase: CRM dashboard with leads, pipeline and deals requiring attention',
      width: 1600,
      height: 2000,
    },
  },
  {
    slug: 'ai-business-operations-agent',
    name: 'AI Business Operations Agent',
    category: 'AI & Automation',
    label: 'AI Business Operations Agent',
    headline: 'Turn Goals Into Action',
    summary:
      'Plan, automate, monitor and deliver real business results — all in one workspace.',
    tagline: 'AI-Powered Business Workflows for Modern Businesses',
    features: [
      {
        title: 'Plan & Execute Tasks',
        description: 'From goal to completion.',
      },
      {
        title: 'Track Live Progress',
        description: 'See every step in real time.',
      },
      {
        title: 'Connect Business Tools',
        description: 'Work across your apps.',
      },
      {
        title: 'Review & Approve',
        description: 'Keep humans in control.',
      },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/ai-business-operations-agent/cover.webp',
      alt: 'AI agent command centre showing an agent plan, live execution and approvals',
    },
    poster: {
      src: '/work/ai-business-operations-agent/poster.webp',
      alt: 'AI Business Operations Agent showcase: command centre with agent plan, live execution, approvals and deliverables',
      width: 1600,
      height: 2000,
    },
  },
  {
    slug: 'furniture-design-cost-optimisation',
    name: 'Intelligent Furniture Design & Cost Optimisation System',
    // Category assigned by EZAC web team — please confirm.
    category: 'Software & Applications',
    label: 'Client Project Showcase',
    headline:
      'AI-Powered Furniture Design, Material Estimation & Production Planning',
    summary:
      'Furniture design, material estimation, cutting optimisation and quotation in one system.',
    tagline:
      'From Design to Production – Accurate, Efficient and Cost-Optimised',
    features: [
      {
        title: 'Parametric Design',
        description: 'Front and side elevations with live, accurate dimensions.',
      },
      {
        title: 'Material Estimation',
        description:
          'Board, edge band and hardware quantities calculated automatically.',
      },
      {
        title: 'Cutting Optimisation',
        description: 'Efficient sheet layouts with yield and offcut tracking.',
      },
      {
        title: 'Instant Quotation',
        description:
          'Labour, overhead, margin and tax combined into one client quote.',
      },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/furniture-design-cost-optimisation/cover.webp',
      alt: 'Furniture design workspace with elevation drawings, cutting list and quotation',
    },
    poster: {
      src: '/work/furniture-design-cost-optimisation/poster.webp',
      alt: 'Furniture design and costing system showcase: wardrobe elevations, material estimation, cutting optimisation and project quotation',
      width: 1600,
      height: 2000,
    },
  },
  {
    slug: 'manufacturing-production-control',
    name: 'Manufacturing Operations & Production Control System',
    // Category assigned by EZAC web team — please confirm.
    category: 'Software & Applications',
    label: 'Client Project Showcase',
    headline:
      'Real-Time Shift Monitoring, Order Tracking, Equipment & Inventory Control',
    summary:
      'Shift monitoring, production orders, equipment tracking and material & quality control in one system.',
    tagline:
      'From Shop Floor to Management – Visible, Controlled and Efficient',
    features: [
      {
        title: 'Live Shift Monitoring',
        description:
          'OEE, output against plan and line status, updated through the shift.',
      },
      {
        title: 'Production Orders',
        description:
          'Release, confirm and track every order, operation by operation.',
      },
      {
        title: 'Equipment Tracking',
        description:
          'Machine states, alarms and maintenance work orders in one place.',
      },
      {
        title: 'Material & Quality',
        description:
          'Shortage alerts, purchase requests and inspection decisions.',
      },
    ],
    technologies: [], // TODO
    cover: {
      src: '/work/manufacturing-production-control/cover.webp',
      alt: 'Manufacturing shift overview with line status, hourly output and material shortages',
    },
    poster: {
      src: '/work/manufacturing-production-control/poster.webp',
      alt: 'Manufacturing operations showcase: shift overview dashboard with line status, output chart and event log',
      width: 1600,
      height: 2000,
    },
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(limit = 4) {
  return projects.filter((project) => project.featured).slice(0, limit)
}

/** Categories that currently have at least one project, in display order. */
export function getActiveProjectCategories() {
  return projectCategories.filter((category) =>
    projects.some((project) => project.category === category)
  )
}
