import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://ezactechnologies.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'EZAC Technologies | Building Smart Digital Solutions',
    template: '%s | EZAC Technologies',
  },

  description:
    'EZAC Technologies builds modern websites, mobile applications, custom software and AI-powered business automation solutions.',

  keywords: [
    'EZAC Technologies',
    'web development',
    'mobile app development',
    'custom software',
    'AI automation',
    'digital solutions',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'EZAC Technologies | Building Smart Digital Solutions',
    description:
      'EZAC Technologies builds modern websites, mobile applications, custom software and AI-powered business automation solutions.',
    siteName: 'EZAC Technologies',
    images: [
      {
        url: '/ezac-logo.jpeg',
        width: 1244,
        height: 1244,
        alt: 'EZAC Technologies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'EZAC Technologies | Building Smart Digital Solutions',
    description:
      'EZAC Technologies builds modern websites, mobile applications, custom software and AI-powered business automation solutions.',
    images: ['/ezac-logo.jpeg'],
  },

  

  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020817',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}