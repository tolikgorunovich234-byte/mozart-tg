'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { Container } from './Container';
import FeatureCard from './FeatureCard';
import { Globe, Users, Radio, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32">
      {/* Ambient glow circles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-sky-400/10 blur-2xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trade Smarter. Profit Faster.
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-base-muted md:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Exclusive, data-driven crypto signals for Tier‑1 traders and investors. Real insights, real-time.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button>Join the Telegram Channel</Button>
            <Button variant="ghost">Not Financial Advice</Button>
          </motion.div>
        </div>

        {/* Quick features grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<Radio />} title="Real-Time Signals" desc="Actionable entries & exits delivered fast." />
          <FeatureCard icon={<Globe />} title="Global Coverage" desc="Opportunities across majors & alts, 24/7." />
          <FeatureCard icon={<Users />} title="54,000+ Members" desc="Join a fast‑growing, global trading community." />
          <FeatureCard icon={<Shield />} title="Risk Awareness" desc="Educational content — not financial advice." />
        </div>
      </Container>
    </section>
  );
}
