/**
 * WortCoolingChart — cooling curve for 20 L of wort in a sealed PP bucket.
 *
 * Uses Newton's Law of Cooling: T(t) = T_ambient + (T_initial - T_ambient) * exp(-k * t)
 * k values are empirically derived for a 5-gallon (~19 L) plastic bucket from
 * homebrewer measurements (k ≈ 0.08–0.10 hr⁻¹).
 *
 * Renders as a pure SVG — no external library dependency.
 * Dark-mode-first: explicit Infima dark-mode hex values.
 */

import React from 'react';

const W   = 640;
const H   = 280;
const PAD = { top: 24, right: 24, bottom: 52, left: 52 };
const chartW = W - PAD.left - PAD.right;
const chartH = H - PAD.top  - PAD.bottom;

const T0   = 95;    // initial temp °C
const TAMB = 20;    // ambient °C
const HOURS = 24;   // x-axis span

function cool(k, t) {
  return TAMB + (T0 - TAMB) * Math.exp(-k * t);
}

const C = {
  bg:      '#242526',
  grid:    'rgba(255,255,255,0.08)',
  muted:   'rgba(255,255,255,0.45)',
  body:    'rgba(255,255,255,0.75)',
  blue:    '#4a9eda',
  amber:   '#d4952a',
  red:     '#c45c5c',
  green:   '#58a96e',
  orange:  '#d4802a',
};

function toX(hours) {
  return PAD.left + (hours / HOURS) * chartW;
}
function toY(temp) {
  return PAD.top + chartH - ((temp - TAMB) / (T0 - TAMB)) * chartH;
}

// Generate path points
function makePath(k) {
  const steps = 240;
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = (i / steps) * HOURS;
    return `${i === 0 ? 'M' : 'L'}${toX(t).toFixed(1)},${toY(cool(k, t)).toFixed(1)}`;
  }).join(' ');
}

const xTicks = [0, 3, 6, 9, 12, 15, 18, 21, 24];
const yTicks = [20, 40, 60, 80, 95];

const thresholds = [
  { temp: 95, label: '95°C fill temperature', color: C.red,    dash: '5 3' },
  { temp: 80, label: '80°C (pasteurisation threshold)', color: C.orange, dash: '4 3' },
  { temp: 60, label: '60°C (undocumented bucket limit)', color: C.amber, dash: '4 3' },
  { temp: 40, label: '40°C (Witre max use temperature)', color: C.green, dash: '4 3' },
];

export default function WortCoolingChart() {
  return (
    <figure style={{ margin: '2rem 0' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block' }}
        role="img"
        aria-labelledby="cool-t cool-d"
      >
        <title id="cool-t">Wort cooling curve — 20 L in sealed PP bucket, ambient 20 °C</title>
        <desc id="cool-d">
          Line chart showing wort temperature over 24 hours. Starting at 95°C, wort remains
          above 80°C for 2–3 hours, above 60°C for 6–8 hours, above 40°C (Witre maximum use
          temperature) for 13–17 hours, and reaches pitching temperature after 20–24 hours.
          This demonstrates that no-chill cooling is a sustained elevated-temperature scenario,
          not a brief hot-fill.
        </desc>

        <rect x={PAD.left} y={PAD.top} width={chartW} height={chartH} fill={C.bg} rx="2" />

        {/* Threshold horizontal lines */}
        {thresholds.map(({ temp, label, color, dash }) => {
          const y = toY(temp);
          if (y < PAD.top || y > PAD.top + chartH) return null;
          return (
            <g key={temp}>
              <line x1={PAD.left} x2={PAD.left + chartW} y1={y} y2={y}
                stroke={color} strokeWidth="1" strokeDasharray={dash} opacity="0.6" />
              <text x={PAD.left + 4} y={y - 4} fontSize="9.5" fill={color} opacity="0.85">{label}</text>
            </g>
          );
        })}

        {/* X grid lines */}
        {xTicks.map(h => (
          <g key={h}>
            <line x1={toX(h)} x2={toX(h)} y1={PAD.top} y2={PAD.top + chartH}
              stroke={C.grid} strokeWidth="0.5" />
            <text x={toX(h)} y={PAD.top + chartH + 16} textAnchor="middle"
              fontSize="11" fill={C.muted}>{h}h</text>
          </g>
        ))}

        {/* Y tick labels */}
        {yTicks.map(t => (
          <text key={t} x={PAD.left - 6} y={toY(t)} textAnchor="end"
            dominantBaseline="middle" fontSize="11" fill={C.muted}>{t}°C</text>
        ))}

        {/* Cooling curves */}
        <path d={makePath(0.10)} fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" />
        <path d={makePath(0.08)} fill="none" stroke={C.amber} strokeWidth="2"
          strokeDasharray="7 4" strokeLinecap="round" />

        {/* Axis labels */}
        <text x={PAD.left + chartW / 2} y={H - 4} textAnchor="middle"
          fontSize="11" fill={C.muted}>Time after filling (hours)</text>
        <text transform={`translate(${PAD.left - 38},${PAD.top + chartH / 2}) rotate(-90)`}
          textAnchor="middle" fontSize="11" fill={C.muted}>Wort temperature</text>
      </svg>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px',
        fontSize: '12px', color: 'var(--ifm-font-color-secondary)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="24" height="12" aria-hidden="true">
            <line x1="0" y1="6" x2="24" y2="6" stroke={C.blue} strokeWidth="2" />
          </svg>
          k=0.10 hr⁻¹ (faster)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="24" height="12" aria-hidden="true">
            <line x1="0" y1="6" x2="24" y2="6" stroke={C.amber} strokeWidth="2" strokeDasharray="6 4" />
          </svg>
          k=0.08 hr⁻¹ (slower, well-insulated)
        </span>
      </div>

      <figcaption style={{ fontSize: '12px', color: 'var(--ifm-font-color-secondary)',
        marginTop: '8px', lineHeight: 1.6 }}>
        Newton's Law of Cooling applied to 20 L of wort at 95 °C in a sealed PP bucket at
        20 °C ambient. Cooling constant k empirically derived for a 5-gallon/~19 L plastic
        bucket (source: homebrewer measurements). The wort remains above the Witre's stated
        maximum use temperature (40 °C) for 13–17 hours depending on conditions.
      </figcaption>
    </figure>
  );
}
