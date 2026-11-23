import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyEzac } from '@/components/why-ezac'
import { About } from '@/components/about'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { SelectedProjects } from '@/components/selected-projects'
import { PricingCatalogueCta } from '@/components/pricing-catalogue-cta'

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <SelectedProjects />
        <WhyEzac />
        <About />
        <PricingCatalogueCta />
        <CTA />
        <Contact />
      </main>
    </>
  )
}