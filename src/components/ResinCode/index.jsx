/**
 * ResinCode — resin identification code (RIC) symbol.
 *
 * For code=5 abbr="PP", uses the archived Wikimedia Commons SVG:
 *   static/images/regulatory/Plastic_Recycling_Code_05_PP_dark.svg
 *   Original: By Anton Poliakov — Own work, CC BY-SA 4.0
 *   https://commons.wikimedia.org/w/index.php?curid=82815780
 *   Modified: fill="black" → fill="currentColor" for dark-mode compatibility.
 *
 * For code=2 abbr="HDPE", uses the archived Wikimedia Commons SVG:
 *   static/images/regulatory/Plastic_Recycling_Code_02_HDPE_dark.svg
 *   Original: By Anton Poliakov — Own work, CC BY-SA 4.0
 *   https://commons.wikimedia.org/w/index.php?curid=82815776
 *   Modified: fill="black" → fill="currentColor"; role/aria attributes added.
 *
 * For other codes, falls back to a hand-drawn SVG approximation until
 * the corresponding archived SVGs are added to static/images/regulatory/.
 *
 * Usage in MDX:
 *   import ResinCode from '@site/src/components/ResinCode';
 *   <ResinCode code={5} abbr="PP" size={72} />
 *
 * Props:
 *   code  — resin ID number (1–7)
 *   abbr  — resin abbreviation ("PP", "HDPE", "PET", "PS", etc.)
 *   size  — rendered width/height in px (default: 80)
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ARCHIVED = {
'5-PP': '/images/regulatory/Plastic_Recycling_Code_05_PP_dark.svg',
'2-HDPE': '/images/regulatory/Plastic_Recycling_Code_02_HDPE_dark.svg',
};

function FallbackRIC({ code, abbr, size }) {
  const r  = size * 0.42;
  const cx = size / 2;
  const cy = size * 0.47;
  const pts = [
    [cx,                   cy - r],
    [cx + r * 0.866, cy + r * 0.5],
    [cx - r * 0.866, cy + r * 0.5],
  ];
  const arcs = [
    `M ${pts[0][0]},${pts[0][1]} A ${r},${r} 0 0,1 ${pts[1][0]},${pts[1][1]}`,
    `M ${pts[1][0]},${pts[1][1]} A ${r},${r} 0 0,1 ${pts[2][0]},${pts[2][1]}`,
    `M ${pts[2][0]},${pts[2][1]} A ${r},${r} 0 0,1 ${pts[0][0]},${pts[0][1]}`,
  ];
  const sw = size * 0.075;
  const markerId = `arr-${code}-${abbr}`;

  return (
    <svg
      viewBox={`0 0 ${size} ${size * 1.18}`}
      width={size}
      height={size * 1.18}
      role="img"
      aria-label={`Resin Identification Code ${code}${abbr ? ` — ${abbr}` : ''}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <defs>
        <marker id={markerId} markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="currentColor" />
        </marker>
      </defs>
      {arcs.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="currentColor"
          strokeWidth={sw} strokeLinecap="round"
          markerEnd={`url(#${markerId})`} />
      ))}
      <text x={cx} y={cy + size * 0.05} textAnchor="middle" dominantBaseline="middle"
        fontSize={size * 0.28} fontWeight="700" fill="currentColor">{code}</text>
      {abbr && (
        <text x={cx} y={size * 1.06} textAnchor="middle" dominantBaseline="middle"
          fontSize={size * 0.155} fontWeight="600" letterSpacing={size * 0.025}
          fill="currentColor">{abbr}</text>
      )}
    </svg>
  );
}

export default function ResinCode({ code, abbr, size = 80 }) {
  const key = `${code}-${abbr}`;
  const archivePath = ARCHIVED[key];
  const imgSrc = useBaseUrl(archivePath || '');

  if (archivePath) {
    return (
      <img
        src={imgSrc}
        alt={`Resin Identification Code ${code} — ${abbr} (Polypropylene)`}
        width={size}
        height={size}
        style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      />
    );
  }

  return <FallbackRIC code={code} abbr={abbr} size={size} />;
}
