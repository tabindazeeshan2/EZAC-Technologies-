import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Capabilities } from '@/components/capabilities'
import { WhyEzac } from '@/components/why-ezac'
import { About } from '@/components/about'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <WhyEzac />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}