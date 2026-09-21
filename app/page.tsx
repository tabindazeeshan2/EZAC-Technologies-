import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyEzac } from '@/components/why-ezac'
import { About } from '@/components/about'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'


export default function HomePage() {
  return (
    <>
      
      <main>
        <Hero />
        <Services />
        <WhyEzac />
        <About />
        <CTA />
        <Contact />
      </main>
      
    </>
  )
}