import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & Automation Solutions | EZAC Technologies',
  description:
    'EZAC Technologies delivers AI and automation solutions including AI applications, AI agents, chatbots, business automation and intelligent integrations.',
  alternates: {
    canonical: 'https://www.ezactechnologies.com/services/ai-and-automation',
  },
}

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}