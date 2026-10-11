
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Careers at EZAC Technologies | Explore Opportunities',
  description:
    'Explore career opportunities at EZAC Technologies in software development, mobile applications, AI and automation, cloud infrastructure, and digital solutions.',
  alternates: {
    canonical: 'https://www.ezactechnologies.com/careers',
  },
  openGraph: {
    title: 'Careers at EZAC Technologies | Explore Opportunities',
    description:
      'Discover career opportunities at EZAC Technologies and help build smart digital solutions.',
    url: 'https://www.ezactechnologies.com/careers',
    siteName: 'EZAC Technologies',
    type: 'website',
  },
}

export default function CareersLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
