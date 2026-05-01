/**
 * ProductCard — equipment product summary widget.
 *
 * Usage in MDX:
 *   import ProductCard from '@site/src/components/ProductCard';
 *   <ProductCard productId="witre-20l-bucket" />
 *
 * Data source: /static/data/products.json + /static/data/vendors.json
 * Both fetched client-side — no rebuild needed when JSON changes.
 *
 * Renders: specs + documentation status badge + retailer links.
 * Image column only renders if an image is available.
 * For chemical products (category: sanitiser | cleaner), use WhereToBuy instead.
 *
 * Documentation status badge:
 *   - documentation array has entries with type "doc" → green "DoC available"
 *   - documentation_status === "none"                → red   "No DoC found"
 *   - documentation array empty, no status field     → amber "Documentation not confirmed"
 *
 * Market display order: SE → EU → UK → AU → US → others
 */

import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const MARKET_ORDER  = ['SE', 'EU', 'UK', 'AU', 'US'];
const MARKET_LABELS = { SE: 'Sweden', EU: 'EU', UK: 'United Kingdom', AU: 'Australia', US: 'United States' };

function marketSort(a, b) {
  const ai = MARKET_ORDER.indexOf(a), bi = MARKET_ORDER.indexOf(b);
  if (ai === -1 && bi === -1) return a.localeCompare(b);
  return ai === -1 ? 1 : bi === -1 ? -1 : ai - bi;
}

function DocBadge({ product }) {
  const docs  = product.documentation || [];
  const hasDoc = docs.some(d => d.type === 'doc');
  const noDoc  = product.documentation_status === 'none';

  if (hasDoc) {
    const doc     = docs.find(d => d.type === 'doc');
    const content = doc.url
      ? <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>{doc.label}</a>
      : <span>{doc.label}</span>;
    return <span style={{ ...S.badge, ...S.green }}>DoC available — {content}</span>;
  }
  if (noDoc) {
    return <span style={{ ...S.badge, ...S.red }}>No DoC found — {product.documentation_notes || 'no food contact documentation confirmed'}</span>;
  }
  return <span style={{ ...S.badge, ...S.amber }}>Documentation not confirmed</span>;
}

export default function ProductCard({ productId }) {
  const productsUrl = useBaseUrl('/data/products.json');
  const vendorsUrl  = useBaseUrl('/data/vendors.json');
  const [state, setState] = useState({ status: 'loading' });

  useEffect(() => {
    if (!productId) { setState({ status: 'error' }); return; }
    Promise.all([
      fetch(productsUrl).then(r => { if (!r.ok) throw new Error(); return r.json(); }),
      fetch(vendorsUrl).then(r  => { if (!r.ok) throw new Error(); return r.json(); }),
    ])
      .then(([products, vendors]) => {
        const product = products.find(p => p.id === productId);
        if (!product) { setState({ status: 'error' }); return; }
        const vendorMap = Object.fromEntries(vendors.map(v => [v.id, v]));
        setState({ status: 'ok', product, vendorMap });
      })
      .catch(() => setState({ status: 'error' }));
  }, [productId, productsUrl, vendorsUrl]);

  if (state.status === 'loading') return <div style={S.wrap}><span style={S.muted}>Loading…</span></div>;
  if (state.status === 'error') {
    if (typeof window !== 'undefined') console.warn('[ProductCard] not found:', productId);
    return null;
  }

  const { product, vendorMap } = state;
  const imageUrl = product.image?.local || product.image?.remote || null;
  const specs    = product.specs || {};
  const mfrUrl   = product.manufacturer?.product_url || product.manufacturer?.homepage || null;
  const mfrName  = product.manufacturer?.name || null;

  const confirmed = (product.retailers || []).filter(r => r.url && vendorMap[r.vendor_id]);
  const byMarket  = {};
  for (const r of confirmed) {
    (byMarket[r.market] = byMarket[r.market] || []).push(r);
  }
  const markets = Object.keys(byMarket).sort(marketSort);

  if (!imageUrl && !mfrName && confirmed.length === 0) return null;

  return (
    <div style={S.wrap}>
      <div style={S.inner}>

        {imageUrl && (
          <div style={S.imgCol}>
            {mfrUrl
              ? <a href={mfrUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', lineHeight: 0 }}>
                  <img src={imageUrl} alt={product.name} style={S.img} loading="lazy" />
                </a>
              : <img src={imageUrl} alt={product.name} style={S.img} loading="lazy" />
            }
            {mfrName && (
              <span style={S.caption}>
                {mfrUrl ? <a href={mfrUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{mfrName}</a> : mfrName}
              </span>
            )}
          </div>
        )}

        <div style={S.info}>

          {(specs.capacity_L || specs.temp_continuous_max_C || specs.resin_code || specs.notes) && (
            <div style={S.block}>
              <span style={S.label}>Specifications</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                {specs.capacity_L            && <span style={S.spec}><span style={S.key}>Capacity</span>{specs.capacity_L} L</span>}
                {specs.resin_code            && <span style={S.spec}><span style={S.key}>Resin code</span>{specs.resin_code} (PP)</span>}
                {specs.temp_continuous_max_C && <span style={S.spec}><span style={S.key}>Max continuous temp</span>{specs.temp_continuous_max_C} °C</span>}
                {specs.temp_hot_fill_max_C   && <span style={S.spec}><span style={S.key}>Max hot-fill temp</span>{specs.temp_hot_fill_max_C} °C</span>}
                {specs.notes                 && <span style={{ ...S.spec, color: 'var(--ifm-color-emphasis-500, #888)', fontStyle: 'italic', marginTop: '0.15rem' }}>{specs.notes}</span>}
              </div>
            </div>
          )}

          <div style={S.block}>
            <span style={S.label}>Food contact documentation</span>
            <DocBadge product={product} />
          </div>

          {markets.length > 0 && (
            <div style={S.block}>
              <span style={S.label}>Where to buy</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {markets.map(market => (
                  <div key={market} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={S.mktBadge}>{MARKET_LABELS[market] || market}</span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {byMarket[market].map(r => (
                        <a key={r.vendor_id + r.url} href={r.url} target="_blank" rel="noopener noreferrer" style={S.link}>
                          {vendorMap[r.vendor_id].name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <span style={S.disc}>No affiliate relationship.</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

const S = {
  wrap:    { borderTop: '1px solid var(--ifm-color-emphasis-300, #444)', marginTop: '1rem', paddingTop: '0.875rem', fontSize: '0.85rem' },
  inner:   { display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flexWrap: 'wrap' },
  imgCol:  { display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 },
  img:     { width: '120px', height: '120px', objectFit: 'contain', borderRadius: '4px', background: 'var(--ifm-color-emphasis-100, #1a1a1a)', padding: '6px', display: 'block' },
  caption: { marginTop: '0.3rem', fontSize: '0.7rem', color: 'var(--ifm-color-emphasis-500, #888)', textAlign: 'center' },
  info:    { flex: '1 1 220px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' },
  block:   { display: 'flex', flexDirection: 'column', gap: '0.3rem' },
  label:   { fontWeight: 600, color: 'var(--ifm-color-emphasis-700, #ccc)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.72rem' },
  spec:    { fontSize: '0.83rem', color: 'var(--ifm-color-emphasis-800, #ddd)' },
  key:     { fontWeight: 600, marginRight: '0.4rem', color: 'var(--ifm-color-emphasis-600, #999)', fontSize: '0.78rem' },
  badge:   { display: 'inline-block', fontSize: '0.78rem', padding: '0.2rem 0.5rem', borderRadius: '4px', lineHeight: 1.5 },
  green:   { background: 'rgba(59,109,17,0.12)', color: 'var(--ifm-color-success-darkest, #2d5a0c)', border: '1px solid rgba(59,109,17,0.25)' },
  red:     { background: 'rgba(154,32,32,0.10)', color: 'var(--ifm-color-danger-darkest, #6b0f0f)', border: '1px solid rgba(154,32,32,0.20)' },
  amber:   { background: 'rgba(186,117,23,0.10)', color: 'var(--ifm-color-warning-darkest, #7a4d00)', border: '1px solid rgba(186,117,23,0.20)' },
  mktBadge:{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--ifm-color-emphasis-500, #888)', textTransform: 'uppercase', letterSpacing: '0.06em', minWidth: '2.5rem', flexShrink: 0 },
  link:    { color: 'var(--ifm-link-color, #4db3ff)', textDecoration: 'none', borderBottom: '1px dotted currentColor', fontSize: '0.83rem' },
  disc:    { color: 'var(--ifm-color-emphasis-400, #777)', fontSize: '0.72rem', marginTop: '0.1rem' },
  muted:   { color: 'var(--ifm-color-emphasis-500, #888)', fontSize: '0.8rem' },
};
