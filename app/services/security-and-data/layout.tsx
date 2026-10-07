import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & Data Solutions | EZAC Technologies',
  description:
    'EZAC Technologies provides cybersecurity, database solutions, data analytics, business intelligence, system integration and API integration for businesses.',
  alternates: {
    canonical:
      'https://www.ezactechnologies.com/services/security-and-data',
  },
}

export default function SecurityDataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}