import { ReactNode } from 'react';

export default function FeatureCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-base-panel/70 p-6 ring-1 ring-white/10 transition hover:ring-white/20">
      <div className="mb-4 text-cyan-300">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-base-muted">{desc}</p>
    </div>
  );
}
