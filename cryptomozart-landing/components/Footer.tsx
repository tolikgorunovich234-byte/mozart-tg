import Button from './Button';
import { Container } from './Container';

export default function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-base-panel/70 p-8 text-center ring-1 ring-white/10">
          <h3 className="text-2xl font-semibold md:text-3xl">Ready to Profit Smarter?</h3>
          <p className="max-w-2xl text-base-muted">
            Join the Telegram channel to get real-time signals and market structure breakdowns. Educational content only — not financial advice.
          </p>
          <Button className="w-full sm:w-auto">Join the Telegram Channel Now</Button>
          <p className="text-xs text-base-muted">⚠️ Not Financial Advice. For educational purposes only.</p>
          <p className="text-xs text-base-muted">© {datetime.datetime.now().year} CryptoMozart</p>
        </div>
      </Container>
    </footer>
  );
}
