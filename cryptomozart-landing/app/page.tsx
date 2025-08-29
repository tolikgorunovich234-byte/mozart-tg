'use client';

import Hero from '@/components/Hero';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Container } from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';

export default function Page() {
  return (
    <main>
      <Hero />

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Why Join"
            title="Trade Smarter. Profit Faster."
            subtitle="Data-driven crypto signals, no hype — crafted for serious traders and investors across Tier‑1 markets."
          />
        </Container>
      </section>

      <Results />
      <Testimonials />

      <div className="hr my-16" />

      <Footer />
    </main>
  );
}
