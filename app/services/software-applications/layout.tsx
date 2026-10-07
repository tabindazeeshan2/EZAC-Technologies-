import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software & Application Solutions | EZAC Technologies',
  description:
    'EZAC Technologies develops custom software, business systems, mobile applications, ERP and CRM solutions, dashboards and API integrations.',
  alternates: {
    canonical:
      'https://www.ezactechnologies.com/services/software-applications',
  },
}

export default function SoftwareApplicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}