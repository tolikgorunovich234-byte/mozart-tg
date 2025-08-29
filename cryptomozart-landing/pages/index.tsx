import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Results = dynamic(() => import('@/components/Results'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
import { Container } from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
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
