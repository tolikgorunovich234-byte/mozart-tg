import { Container } from './Container';
import SectionTitle from './SectionTitle';

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <div className="rounded-2xl bg-base-panel/70 p-6 ring-1 ring-white/10">
      <p className="text-lg">“{text}”</p>
      <p className="mt-3 text-base-muted">— {author}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="What Traders Say"
          title="Trusted by a Global Community"
          subtitle="Short, honest feedback from real users."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Quote text="Best crypto insights I’ve used." author="Alex M." />
          <Quote text="Clear calls and risk management notes." author="Priya S." />
          <Quote text="Fast and reliable updates — great results." author="Marco R." />
        </div>
      </Container>
    </section>
  );
}
