/**
 * =====================================================================
 *  PRICING & SERVICE PACKAGES — central pricing data
 * =====================================================================
 *
 *  Everything on /pricing comes from this file.
 *
 *  Source: "EZAC Technologies — Services & Pricing" (3 pages).
 *  Service names, PKR and USD figures, units (/month, /device),
 *  "Quoted separately" / "Custom quote" and the pricing notes are
 *  copied exactly from that document. Prices are stored as text so
 *  they are displayed exactly as written — nothing is calculated,
 *  rounded or converted on the website.
 *
 *  HOW TO EDIT
 *  - Change a price: edit the `pkr` / `usd` strings below.
 *  - Add a service: copy one `{ name, price }` row into the category.
 *  - No price yet: use `price: contactForPricing` — the site will show
 *    "Contact for Pricing".
 *  - Fixed packages (e.g. Basic / Business / Premium): add them to a
 *    category's `packages` array (see the commented example in
 *    "Digital Products"). They render as package cards above that
 *    category's price table. None are defined in the source document,
 *    so none are shown yet.
 *  - When the exchange rate changes, update the USD figures AND
 *    `currencyNote` below together.
 * =====================================================================
 */

export type PriceUnit = 'month' | 'device'

export type ServicePrice =
  | {
      kind: 'range'
      /** PKR amount exactly as written, e.g. "80,000–200,000". */
      pkr: string
      /** USD amount exactly as written, e.g. "290–720". */
      usd?: string
      unit?: PriceUnit
    }
  | {
      kind: 'quote'
      /** Text shown in the PKR column, e.g. "Quoted separately". */
      pkrLabel: string
      /** Text shown in the USD column, e.g. "Custom quote". */
      usdLabel: string
    }

export const contactForPricing: ServicePrice = {
  kind: 'quote',
  pkrLabel: 'Contact for Pricing',
  usdLabel: 'Contact for Pricing',
}

export interface PricedService {
  name: string
  price: ServicePrice
}

export interface PricingPackage {
  /** e.g. "Basic", "Business", "Premium" */
  name: string
  /** PKR price text, e.g. "PKR 80,000". Leave undefined to show "Request a Quote". */
  pricePkr?: string
  description: string
  features: string[]
  /** e.g. "2–3 weeks" */
  delivery?: string
  highlighted?: boolean
}

export interface PricingCategory {
  id: string
  number: string
  title: string
  /** Matches an option in the contact form's "Service Needed" list. */
  contactService: string
  /** Existing service page for "Learn more". */
  serviceHref: string
  services: PricedService[]
  packages?: PricingPackage[]
}

export const pricingIntro =
  'A comprehensive overview of our technology services and indicative pricing for businesses in Pakistan and international markets.'

export const pricingCategories: PricingCategory[] = [
  {
    id: 'digital-products',
    number: '01',
    title: 'Digital Products',
    contactService: 'Digital Products',
    serviceHref: '/services/digital-products',
    services: [
      { name: 'Business website', price: { kind: 'range', pkr: '80,000–200,000', usd: '290–720' } },
      { name: 'Landing page', price: { kind: 'range', pkr: '35,000–90,000', usd: '130–330' } },
      { name: 'E-commerce website', price: { kind: 'range', pkr: '200,000–600,000', usd: '720–2,170' } },
      { name: 'UI/UX design', price: { kind: 'range', pkr: '60,000–250,000', usd: '220–900' } },
      { name: 'Website maintenance', price: { kind: 'range', pkr: '15,000–60,000', usd: '50–220', unit: 'month' } },
    ],
    // Example — uncomment and edit to show package cards:
    // packages: [
    //   {
    //     name: 'Basic',
    //     pricePkr: undefined, // shows "Request a Quote" until set
    //     description: 'Short description',
    //     features: ['Feature one', 'Feature two'],
    //     delivery: 'Delivery timeframe',
    //   },
    // ],
  },
  {
    id: 'software-applications',
    number: '02',
    title: 'Software & Applications',
    contactService: 'Software & Applications',
    serviceHref: '/services/software-applications',
    services: [
      { name: 'Custom business software', price: { kind: 'range', pkr: '600,000–1,500,000', usd: '2,170–5,420' } },
      { name: 'Mobile application', price: { kind: 'range', pkr: '800,000–2,000,000', usd: '2,890–7,230' } },
      { name: 'CRM / ERP solutions', price: { kind: 'range', pkr: '200,000–2,500,000+', usd: '720–9,030+' } },
      { name: 'Dashboard / reporting portal', price: { kind: 'range', pkr: '150,000–600,000', usd: '540–2,170' } },
      { name: 'API development / integration', price: { kind: 'range', pkr: '50,000–250,000', usd: '180–900' } },
    ],
  },
  {
    id: 'ai-and-automation',
    number: '03',
    title: 'AI & Automation',
    contactService: 'AI & Automation',
    serviceHref: '/services/ai-and-automation',
    services: [
      { name: 'AI chatbot', price: { kind: 'range', pkr: '100,000–300,000', usd: '360–1,080' } },
      { name: 'AI assistant / agent', price: { kind: 'range', pkr: '200,000–900,000+', usd: '720–3,250+' } },
      { name: 'Business workflow automation', price: { kind: 'range', pkr: '100,000–500,000', usd: '360–1,810' } },
      { name: 'AI integration', price: { kind: 'range', pkr: '100,000–400,000', usd: '360–1,450' } },
      { name: 'AI support and optimisation', price: { kind: 'range', pkr: '25,000–100,000', usd: '90–360', unit: 'month' } },
    ],
  },
  {
    id: 'cloud-and-infrastructure',
    number: '04',
    title: 'Cloud & Infrastructure',
    contactService: 'Cloud & Infrastructure',
    serviceHref: '/services/cloud-and-infrastructure',
    services: [
      { name: 'Cloud/server setup', price: { kind: 'range', pkr: '40,000–150,000', usd: '140–540' } },
      { name: 'Application deployment', price: { kind: 'range', pkr: '25,000–100,000', usd: '90–360' } },
      { name: 'CI/CD pipeline setup', price: { kind: 'range', pkr: '75,000–250,000', usd: '270–900' } },
      { name: 'Backup and recovery setup', price: { kind: 'range', pkr: '40,000–180,000', usd: '140–650' } },
      { name: 'Managed cloud support', price: { kind: 'range', pkr: '25,000–150,000', usd: '90–540', unit: 'month' } },
    ],
  },
  {
    id: 'it-and-hardware',
    number: '05',
    title: 'IT & Hardware',
    contactService: 'IT & Hardware',
    serviceHref: '/services/it-and-hardware',
    services: [
      { name: 'IT assessment / site survey', price: { kind: 'range', pkr: '25,000–100,000', usd: '90–360' } },
      { name: 'Computer setup', price: { kind: 'range', pkr: '5,000–15,000', usd: '20–50', unit: 'device' } },
      { name: 'Network setup', price: { kind: 'range', pkr: '40,000–250,000', usd: '140–900' } },
      { name: 'Server configuration', price: { kind: 'range', pkr: '50,000–250,000', usd: '180–900' } },
      { name: 'IT support', price: { kind: 'range', pkr: '20,000–80,000', usd: '70–290', unit: 'month' } },
      { name: 'Hardware procurement', price: { kind: 'quote', pkrLabel: 'Quoted separately', usdLabel: 'Custom quote' } },
    ],
  },
  {
    id: 'security-and-data',
    number: '06',
    title: 'Security & Data',
    contactService: 'Security & Data',
    serviceHref: '/services/security-and-data',
    services: [
      { name: 'Security assessment', price: { kind: 'range', pkr: '75,000–250,000', usd: '270–900' } },
      { name: 'Authorised vulnerability testing', price: { kind: 'range', pkr: '150,000–600,000', usd: '540–2,170' } },
      { name: 'Server/application hardening', price: { kind: 'range', pkr: '50,000–250,000', usd: '180–900' } },
      { name: 'Data migration / integration', price: { kind: 'range', pkr: '100,000–600,000', usd: '360–2,170' } },
      { name: 'Analytics dashboard', price: { kind: 'range', pkr: '150,000–700,000', usd: '540–2,530' } },
      { name: 'Security monitoring', price: { kind: 'range', pkr: '50,000–200,000', usd: '180–720', unit: 'month' } },
    ],
  },
]

export const pricingNotes = [
  'Prices are indicative estimates; final pricing depends on project scope and requirements.',
  'Hosting, domains, paid software, third-party API usage, hardware and applicable taxes are excluded unless stated.',
  'Custom or larger projects will receive a tailored quotation.',
]

export const currencyNote =
  'USD prices are approximate conversions of the indicative PKR prices using the exchange rate of 276.80 PKR/USD (State Bank of Pakistan interbank closing rate of 27 October 2026), checked on 29 October 2026. Actual USD quotations may vary with exchange-rate movements and final project requirements.'
