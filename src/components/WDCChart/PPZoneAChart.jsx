/**
 * PPZoneAChart — WDC accumulation chart for PP at Zone A.
 *
 * Shows DDBSA and phosphoric acid surface accumulation across WDC events,
 * two scenarios each: with post-batch cleaning (single-cycle deposit, not
 * compounding) and without (linear accumulation).
 *
 * Annotations moved to legend below chart to avoid label overlap/clipping.
 *
 * Per-cycle deposits at Zone A (StellarSan 1.5 mL/L, CF≈667, 2,550 cm²):
 *   DDBSA:           1.45 µg/cm²  (~20% of residue by mass)
 *   Phosphoric acid: 3.77 µg/cm²  (~52% of residue by mass)
 *
 * Dark-mode-first: explicit Infima dark-mode hex values.
 */

import React from 'react';

const W   = 580;
const H   = 260;
const PAD = { top: 24, right: 24, bottom: 56, left: 72 };
const chartW = W - PAD.left - PAD.right;
const chartH = H - PAD.top  - PAD.bottom;

const C = {
  bg:       '#242526',
  grid:     'rgba(255,255,255,0.08)',
  muted:    'rgba(255,255,255,0.45)',
  blue:     '#4a9eda',
  blueFade: 'rgba(74,158,218,0.4)',
  amber:    '#d4952a',
  amberFade:'rgba(212,149,42,0.4)',
};

const MAX_CYCLES = 50;
const PER_DDBSA  = 1.45;
const PER_H3PO4  = 3.77;
const Y_MAX      = 210;

function toX(n) { return PAD.left + (n / MAX_CYCLES) * chartW; }
function toY(v) { return PAD.top + chartH - Math.min(v / Y_MAX, 1) * chartH; }
function path(pts) {
  return pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
}

const pts = (perCycle, clean) =>
  Array.from({ length: MAX_CYCLES + 1 }, (_, i) => [toX(i), toY(clean ? perCycle : i * perCycle)]);

const xTicks = [0, 10, 20, 30, 40, 50];
const yTicks = [0, 50, 100, 150, 200];

const legend = [
  { color: C.blue,      dash: '',    label: 'DDBSA — no cleaning', sub: '~72 µg/cm² after 50 events' },
  { color: C.blueFade,  dash: '',    label: 'DDBSA — with cleaning', sub: '1.45 µg/cm² per event (not compounding)' },
  { color: C.amber,     dash: '7 4', label: 'Phosphoric acid — no cleaning', sub: '~189 µg/cm² after 50 events (no PP attack mechanism)' },
  { color: C.amberFade, dash: '4 3', label: 'Phosphoric acid — with cleaning', sub: '3.8 µg/cm² per event (not compounding)' },
];

export default function PPZoneAChart() {
  return (
    <figure style={{ margin: '2rem 0' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
        role="img" aria-labelledby="ppza-t ppza-d">
        <title id="ppza-t">PP Zone A — DDBSA and phosphoric acid accumulation across WDC events</title>
        <desc id="ppza-d">
          Line chart. Two compounds, two scenarios each. With cleaning, both stay flat:
          DDBSA at 1.45 µg/cm² and phosphoric acid at 3.77 µg/cm² per event. Without cleaning,
          DDBSA reaches ~72 µg/cm² and phosphoric acid reaches ~189 µg/cm² after 50 events.
          Phosphoric acid accumulates faster but has no attack mechanism on PP.
        </desc>

        <rect x={PAD.left} y={PAD.top} width={chartW} height={chartH} fill={C.bg} rx="2" />

        {yTicks.map(v => (
          <g key={v}>
            <line x1={PAD.left} x2={PAD.left + chartW} y1={toY(v)} y2={toY(v)}
              stroke={C.grid} strokeWidth="0.5" />
            <text x={PAD.left - 8} y={toY(v)} textAnchor="end"
              dominantBaseline="middle" fontSize="11" fill={C.muted}>{v}</text>
          </g>
        ))}
        {xTicks.map(v => (
          <g key={v}>
            <line x1={toX(v)} x2={toX(v)} y1={PAD.top} y2={PAD.top + chartH}
              stroke={C.grid} strokeWidth="0.5" />
            <text x={toX(v)} y={PAD.top + chartH + 16} textAnchor="middle"
              fontSize="11" fill={C.muted}>{v}</text>
          </g>
        ))}

        {/* H₃PO₄ lines — behind DDBSA */}
        <path d={path(pts(PER_H3PO4, true))}  fill="none" stroke={C.amberFade} strokeWidth="1.5" strokeDasharray="4 3" />
        <path d={path(pts(PER_H3PO4, false))} fill="none" stroke={C.amber}     strokeWidth="2"   strokeDasharray="7 4" />

        {/* DDBSA lines — in front */}
        <path d={path(pts(PER_DDBSA, true))}  fill="none" stroke={C.blueFade}  strokeWidth="1.5" />
        <path d={path(pts(PER_DDBSA, false))} fill="none" stroke={C.blue}      strokeWidth="2" />

        {/* End-point dots only — labels in legend below */}
        <circle cx={toX(MAX_CYCLES)} cy={toY(MAX_CYCLES * PER_H3PO4)} r="4" fill={C.amber} />
        <circle cx={toX(MAX_CYCLES)} cy={toY(MAX_CYCLES * PER_DDBSA)} r="4" fill={C.blue} />
        <circle cx={toX(MAX_CYCLES)} cy={toY(PER_H3PO4)} r="3" fill={C.amberFade} />
        <circle cx={toX(MAX_CYCLES)} cy={toY(PER_DDBSA)} r="3" fill={C.blueFade} />

        <text x={PAD.left + chartW / 2} y={H - 8} textAnchor="middle"
          fontSize="11" fill={C.muted}>WDC events (sanitise → drain → dry)</text>
        <text transform={`translate(${PAD.left - 54},${PAD.top + chartH / 2}) rotate(-90)`}
          textAnchor="middle" fontSize="11" fill={C.muted}>Surface concentration (µg/cm²)</text>
      </svg>

      {/* Legend — two columns to avoid crowding */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px',
        marginTop: '12px', fontSize: '11.5px', color: 'var(--ifm-font-color-secondary)' }}>
        {legend.map(({ color, dash, label, sub }) => (
          <div key={label} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <svg width="24" height="16" style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden="true">
              <line x1="0" y1="8" x2="24" y2="8" stroke={color} strokeWidth="2"
                strokeDasharray={dash || undefined} />
            </svg>
            <span>
              <span style={{ display: 'block', fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: '10.5px', opacity: 0.75 }}>{sub}</span>
            </span>
          </div>
        ))}
      </div>
    </figure>
  );
}
