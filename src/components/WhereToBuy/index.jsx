/**
 * WhereToBuy — product footer widget: image + packaging + retailer links.
 *
 * Usage in MDX:
 *   import WhereToBuy from '@site/src/components/WhereToBuy';
 *   <WhereToBuy productId="stellarclean" />
 *
 * Data source: /static/data/products.json + /static/data/vendors.json
 * Both files are fetched client-side at runtime — no rebuild needed when JSON changes.
 *
 * Packaging schema:
 *   { "size": "500 mL", "format": "liquid", "notes": "dual-chamber dosing bottle" }
 *   format values: powder | tablets | liquid  (optional — omit if unknown)
 *   notes: free text for dosing bottle type, sachet yield, refill, etc. (optional)
 *
 * Rendering rules:
 *   - Always renders if product has an image
 *   - Packaging block: shown if product.packaging is non-empty
 *   - Retailer block: shows confirmed links, or "No known retailers currently" if none
 *   - VWP and similar (empty retailers []): image + packaging only, no retailer block
 *   - Renders nothing at all if no image AND no confirmed retailers AND no packaging
 *
 * Market display order: SE → EU → UK → AU → US → (others)
 */

import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const MARKET_ORDER = ['SE', 'EU', 'UK', 'AU', 'US'];
const MARKET_LABELS = {
  SE: 'Sweden',
  EU: 'EU',
  UK: 'United Kingdom',
  AU: 'Australia',
  US: 'United States',
};

function marketSort(a, b) {
  const ai = MARKET_ORDER.indexOf(a);
  const bi = MARKET_ORDER.indexOf(b);
  if (ai === -1 && bi === -1) return a.localeCompare(b);
  if (ai === -1) return 1;
  if (bi === -1) return -1;
  return ai - bi;
}

export default function WhereToBuy({ productId }) {
  const productsUrl = useBaseUrl('/data/products.json');
  const vendorsUrl  = useBaseUrl('/data/vendors.json');

  const [state, setState] = useState({ status: 'loading' });

  useEffect(() => {
    if (!productId) {
      setState({ status: 'error', message: 'No productId supplied.' });
      return;
    }
    Promise.all([
      fetch(productsUrl).then(r => { if (!r.ok) throw new Error('products.json fetch failed'); return r.json(); }),
      fetch(vendorsUrl).then(r  => { if (!r.ok) throw new Error('vendors.json fetch failed');  return r.json(); }),
    ])
      .then(([products, vendors]) => {
        const product = products.find(p => p.id === productId);
        if (!product) {
          setState({ status: 'error', message: `Product "${productId}" not found in products.json.` });
          return;
        }
        const vendorMap = Object.fromEntries(vendors.map(v => [v.id, v]));
        setState({ status: 'ok', product, vendorMap });
      })
      .catch(err => setState({ status: 'error', message: err.message }));
  }, [productId, productsUrl, vendorsUrl]);

  if (state.status === 'loading') {
    return <div style={styles.wrapper}><span style={styles.muted}>Loading…</span></div>;
  }

  if (state.status === 'error') {
    if (typeof window !== 'undefined') console.warn('[WhereToBuy]', state.message);
    return null;
  }

  const { product, vendorMap } = state;

  const imageUrl   = product.image?.local || product.image?.remote || null;
  const packaging  = product.packaging || [];

  // Retailers: confirmed only (have a URL and a known vendor record)
  const confirmed = (product.retailers || []).filter(r => r.url && vendorMap[r.vendor_id]);

  // Group retailers by market
  const byMarket = {};
  for (const r of confirmed) {
    if (!byMarket[r.market]) byMarket[r.market] = [];
    byMarket[r.market].push(r);
  }
  const markets = Object.keys(byMarket).sort(marketSort);

  // Show retailer section if there are any retailer entries at all (confirmed or not)
  // VWP has retailers=[] so we suppress the whole block for that case
  const hasRetailerSection = (product.retailers || []).length > 0;

  // Render nothing if there's nothing to show
  if (!imageUrl && packaging.length === 0 && !hasRetailerSection) return null;

  const mfrUrl  = product.manufacturer?.product_url || product.manufacturer?.homepage || null;
  const mfrName = product.manufacturer?.name || null;

  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>

        {/* ── Image column ── */}
        {imageUrl && (
          <div style={styles.imageCol}>
            {mfrUrl
              ? <a href={mfrUrl} target="_blank" rel="noopener noreferrer" style={styles.imageLink}>
                  <img src={imageUrl} alt={product.name} style={styles.image} loading="lazy" />
                </a>
              : <img src={imageUrl} alt={product.name} style={styles.image} loading="lazy" />
            }
            {mfrName && (
              <span style={styles.imageCaption}>
                {mfrUrl
                  ? <a href={mfrUrl} target="_blank" rel="noopener noreferrer" style={styles.captionLink}>{mfrName}</a>
                  : mfrName
                }
              </span>
            )}
          </div>
        )}

        {/* ── Info column ── */}
        <div style={styles.infoCol}>

          {/* Packaging */}
          {packaging.length > 0 && (
            <div style={styles.block}>
              <span style={styles.blockLabel}>Packaging</span>
              <div style={styles.packagingList}>
                {packaging.map((pkg, i) => (
                  <span key={i} style={styles.packagingItem}>
                    {pkg.format && <span style={styles.formatBadge}>{pkg.format}</span>}
                    {pkg.size}
                    {pkg.notes && <span style={styles.packagingNote}> — {pkg.notes}</span>}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Retailers */}
          {hasRetailerSection && (
            <div style={styles.block}>
              <span style={styles.blockLabel}>Where to buy</span>
              {markets.length > 0
                ? (
                  <div style={styles.retailerGrid}>
                    {markets.map(market => (
                      <div key={market} style={styles.marketRow}>
                        <span style={styles.marketBadge}>{MARKET_LABELS[market] || market}</span>
                        <div style={styles.links}>
                          {byMarket[market].map(r => {
                            const vendor = vendorMap[r.vendor_id];
                            return (
                              <a key={r.vendor_id + r.url} href={r.url} target="_blank"
                                rel="noopener noreferrer" style={styles.link}>
                                {vendor.name}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )
                : <span style={styles.noRetailers}>No known retailers currently.</span>
              }
              <span style={styles.disclaimer}>
                No affiliate relationship. Known retailers only — others may exist.{' '}
                <a href="https://www.google.com/search?q=homebrew+shop+near+me" target="_blank"
                  rel="noopener noreferrer" style={styles.searchLink}>
                  Search for local stockists ↗
                </a>
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    borderTop: '1px solid var(--ifm-color-emphasis-300, #444)',
    marginTop: '1rem',
    paddingTop: '0.875rem',
    fontSize: '0.85rem',
  },
  inner: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },

  // Image
  imageCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
  },
  imageLink: { display: 'block', lineHeight: 0 },
  image: {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    borderRadius: '4px',
    background: 'var(--ifm-color-emphasis-100, #1a1a1a)',
    padding: '6px',
    display: 'block',
  },
  imageCaption: {
    marginTop: '0.3rem',
    fontSize: '0.7rem',
    color: 'var(--ifm-color-emphasis-500, #888)',
    textAlign: 'center',
  },
  captionLink: { color: 'inherit', textDecoration: 'none' },

  // Info column
  infoCol: {
    flex: '1 1 220px',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
  },

  // Shared block structure
  block: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },
  blockLabel: {
    fontWeight: 600,
    color: 'var(--ifm-color-emphasis-700, #ccc)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontSize: '0.72rem',
  },

  // Packaging
  packagingList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.2rem 0.75rem',
  },
  packagingItem: {
    color: 'var(--ifm-color-emphasis-800, #ddd)',
    fontSize: '0.83rem',
  },
  packagingNote: {
    color: 'var(--ifm-color-emphasis-500, #888)',
    fontSize: '0.78rem',
  },
  formatBadge: {
    display: 'inline-block',
    fontSize: '0.65rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    color: 'var(--ifm-color-emphasis-600, #999)',
    border: '1px solid var(--ifm-color-emphasis-300, #555)',
    borderRadius: '3px',
    padding: '0 4px',
    marginRight: '5px',
    verticalAlign: 'middle',
    lineHeight: '1.5',
  },

  // Retailers
  retailerGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  marketRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  marketBadge: {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'var(--ifm-color-emphasis-500, #888)',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    minWidth: '2.5rem',
    flexShrink: 0,
  },
  links: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  link: {
    color: 'var(--ifm-link-color, #4db3ff)',
    textDecoration: 'none',
    borderBottom: '1px dotted currentColor',
    fontSize: '0.83rem',
  },
  noRetailers: {
    color: 'var(--ifm-color-emphasis-500, #888)',
    fontSize: '0.83rem',
    fontStyle: 'italic',
  },
  disclaimer: {
    color: 'var(--ifm-color-emphasis-400, #777)',
    fontSize: '0.72rem',
    marginTop: '0.1rem',
  },
  searchLink: {
    color: 'var(--ifm-color-emphasis-500, #888)',
    textDecoration: 'none',
    borderBottom: '1px dotted currentColor',
  },
  muted: {
    color: 'var(--ifm-color-emphasis-500, #888)',
    fontSize: '0.8rem',
  },
};
