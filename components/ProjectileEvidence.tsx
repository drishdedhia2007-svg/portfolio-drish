import Link from "next/link";

// Processed averages from Table 9 of the projectile windage paper.
const trials = [
  { gapMm: 1.19, rangeM: 1.4027 },
  { gapMm: 2.69, rangeM: 1.9046 },
  { gapMm: 4.19, rangeM: 1.9685 },
  { gapMm: 5.69, rangeM: 2.0529 },
  { gapMm: 7.19, rangeM: 2.101 },
  { gapMm: 8.69, rangeM: 2.2401 },
];

const x = (gapMm: number) => 54 + ((gapMm - 1.19) / 7.5) * 372;
const y = (rangeM: number) => 201 - ((rangeM - 1.3) / 1.1) * 145;
const line = trials.map((point, index) => `${index ? "L" : "M"}${x(point.gapMm).toFixed(1)} ${y(point.rangeM).toFixed(1)}`).join(" ");

export default function ProjectileEvidence() {
  return (
    <figure className="evidence-figure" data-reveal="evidence">
      <div className="evidence-heading"><span className="eyebrow">FROM MY PHYSICS PAPER / TABLE 9</span><span className="technical">10 LAUNCHES PER GAP</span></div>
      <div className="evidence-statement"><span>Expected</span><strong>less range</strong><i aria-hidden="true">↗</i><span>Measured</span><strong>more, across the gaps tested</strong></div>
      <svg className="evidence-chart" viewBox="0 0 480 255" role="img" aria-labelledby="evidence-title evidence-desc">
        <title id="evidence-title">Average projectile range across six nonzero windage gaps</title>
        <desc id="evidence-desc">Measured average range rose from 1.40 metres at a 1.19 millimetre gap to 2.24 metres at an 8.69 millimetre gap. The no-gap control measured 2.40 metres and is shown separately.</desc>
        {[1.4, 1.8, 2.2].map(value => <g key={value}><line className="chart-grid" x1="54" x2="426" y1={y(value)} y2={y(value)} /><text className="chart-tick" x="42" y={y(value) + 4} textAnchor="end">{value.toFixed(1)}</text></g>)}
        <path className="chart-line" d={line} />
        {trials.map(point => <circle className="chart-dot" key={point.gapMm} cx={x(point.gapMm)} cy={y(point.rangeM)} r="5" />)}
        <text className="chart-tick" x="54" y="229">1.19</text><text className="chart-tick" x="426" y="229" textAnchor="end">8.69 mm</text>
        <text className="chart-label" x="54" y="251">WINDAGE GAP →</text><text className="chart-label" x="54" y="21">RANGE / M</text>
      </svg>
      <figcaption><span><strong>2.40 m</strong> no-gap control</span><span>The pattern surprised me; the setup still had sources of error.</span></figcaption>
      <Link href="/papers/projectile-windage.pdf" target="_blank" rel="noopener noreferrer" className="text-link">See the measurements in the paper ↗</Link>
    </figure>
  );
}
