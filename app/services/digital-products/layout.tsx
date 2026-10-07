import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Products & Web Solutions | EZAC Technologies',
  description:
    'EZAC Technologies designs and develops business websites, e-commerce websites, custom web applications, landing pages, CMS solutions and user-focused digital experiences.',
  alternates: {
    canonical: 'https://www.ezactechnologies.com/services/digital-products',
  },
}

export default function DigitalProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}