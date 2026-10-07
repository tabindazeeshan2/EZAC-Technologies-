import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT & Hardware Solutions | EZAC Technologies',
  description:
    'EZAC Technologies provides computers, workstations, servers, network infrastructure, Wi-Fi, CCTV systems and IT support for businesses.',
  alternates: {
    canonical:
      'https://www.ezactechnologies.com/services/it-and-hardware',
  },
}

export default function ITHardwareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}