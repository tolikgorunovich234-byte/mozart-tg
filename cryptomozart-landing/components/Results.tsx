import { Container } from './Container';
import SectionTitle from './SectionTitle';

function TradeCard({ pair, direction, pnl, note }: { pair: string; direction: 'LONG' | 'SHORT'; pnl: string; note: string }) {
  return (
    <div className="rounded-2xl bg-base-panel/70 p-6 ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider text-base-muted">{pair}</p>
          <h4 className="mt-1 text-xl font-semibold">{direction}</h4>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-semibold text-emerald-300">{pnl}</span>
      </div>
      <p className="mt-4 text-base-muted">{note}</p>
    </div>
  );
}

export default function Results() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Recent Examples"
          title="Data-Driven Calls. Clear Risk Notes."
          subtitle="Illustrative examples based on technicals and market structure. Past results do not guarantee future performance."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TradeCard pair="BTC/USDT" direction="LONG" pnl="+125%" note="Breakout from channel with volume spike. Partial TP at levels." />
          <TradeCard pair="ETH/USDT" direction="SHORT" pnl="+82%" note="Rejection at key resistance; confirmation on lower TFs." />
          <TradeCard pair="SOL/USDT" direction="LONG" pnl="+47%" note="Retest of demand zone + MA confluence. Tight invalidation." />
        </div>
      </Container>
    </section>
  );
}
