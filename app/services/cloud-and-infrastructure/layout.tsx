import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud & Infrastructure Solutions | EZAC Technologies',
  description:
    'EZAC Technologies provides cloud hosting, VPS and servers, application deployment, DevOps, CI/CD and backup solutions for reliable digital infrastructure.',
  alternates: {
    canonical:
      'https://www.ezactechnologies.com/services/cloud-and-infrastructure',
  },
}

export default function CloudInfrastructureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}