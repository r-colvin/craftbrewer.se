/**
 * FoodContactSymbol — EU food contact material symbol (fork and glass).
 *
 * Displays the EU symbol indicating an article is suitable for food contact,
 * as required by EU Regulation 1935/2004 Annex II.
 *
 * Source: EU_food_contact_material_symbol_dark.svg
 * Original: By European Union — extracted from EU Official Journal L 338 (2004), Public Domain
 * https://commons.wikimedia.org/w/index.php?curid=9657707
 * Modified: fill:#000000 → fill="currentColor" for dark-mode compatibility;
 * Inkscape/Sodipodi metadata stripped.
 *
 * Usage in MDX:
 *   import FoodContactSymbol from '@site/src/components/FoodContactSymbol';
 *   <FoodContactSymbol size={48} />
 *
 * Props:
 *   size — rendered width in px (default: 48; height is proportional ~1.01× width)
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function FoodContactSymbol({ size = 48 }) {
  const src = useBaseUrl('/images/regulatory/EU_food_contact_material_symbol_dark.svg');
  return (
    <img
      src={src}
      alt="EU food contact material symbol — fork and glass"
      width={size}
      height={Math.round(size * 1.01)}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    />
  );
}
