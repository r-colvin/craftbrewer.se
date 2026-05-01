---
sidebar_position: 22
title: Aluminium
---

# Aluminium

| | ABNS | DES | Cleaning | Beer/wort |
|---|---|---|---|---|
| **Rating** | B (working dilution, no drying) / D (WDC — do not allow to dry) | A | A | A |

Aluminium does not appear in the main fermentation or packaging equipment chain covered by this guide. It appears in two specific homebrewing contexts: as foil used to cover flask openings during yeast starter preparation, and in some older or artisanal equipment. The ABNS rating is the operative question for both.

Aluminium cans are sometimes used at the homebrewing scale via small-batch mobile canning services. Cans are relevant here as a context, not as DIY equipment: all aluminium beer cans have an internal polymer liner (typically a spray-applied epoxy or similar coating) that is the actual food-contact surface. The aluminium body does not contact the beer directly. The liner's compatibility with beer and the canning process is established by the can manufacturer and is not a homebrewer concern. ABNS is not applied to can interiors in a canning workflow.

## Corrosion mechanism and the WDC split

Aluminium's corrosion resistance depends on a thin (2–5 nm) aluminium oxide (Al₂O₃) passivation layer. This layer forms spontaneously on air contact and reforms after surface damage — the same passive layer mechanism as stainless steel, but thinner and less robust.

Phosphoric acid at working dilution (approximately 0.01 M) dissolves this layer at a rate of approximately 0.1–0.5 nm per minute. In 30–60 seconds of contact — the duration of a sanitisation spray on foil covering a flask — the dissolution amounts to approximately 0.05–0.5 nm of the 2–5 nm oxide layer. A substantial oxide layer remains. The aluminium dissolved into 1 litre of liquid from a 10 cm² foil surface is approximately 1 microgram (1 ppb). The [WHO guideline for aluminium in drinking water](https://www.who.int/publications/i/item/9789241549950) is 200 µg/L — a safety margin of approximately 200× at working dilution.[^1]

Under WDC conditions — phosphoric acid allowed to dry and concentrate to approximately 5.4 M (~52% by mass, at CF≈667 for StellarSan at 1.5 mL/L — see the [WDC model](../04-wdc-model.md)) — the situation changes substantially. Concentrated phosphoric acid at this level is genuinely aggressive toward aluminium oxide: dissolution rate increases non-linearly with acid concentration, the oxide layer is fully compromised, and the aluminium surface is directly exposed to concentrated acid. The manufacturer warnings against using ABNS sanitisers on aluminium equipment are valid in exactly this scenario. It is the concentrated dried residue, not the working-dilution contact, that is the concern.

## Practical implications

**Yeast starter flask covered with aluminium foil:** A common practice is to spray the outside of the foil with ABNS to sanitise the exterior before peeling it back. This is a bounded scenario in the same sense as the [EPDM grommet](../04-wdc-model.md#the-grommet-as-a-bounded-case): ABNS contacts the foil at working dilution (CF=1) and is wiped or shaken off before it dries. There is no WDC — no evaporation to dry residue. The 200× safety margin at working-dilution contact applies. This is not a meaningful concern.

**ABNS sprayed on aluminium equipment and left to dry:** This is the **D** scenario. Do not do this.

The **B/D** split is not a compromise — it is two distinct scenarios with genuinely different outcomes. The difference is whether the sanitiser dries on the surface or not, and the [WDC model](../04-wdc-model.md) is precisely the tool for making that distinction.

:::note WDC accumulation charts
Per-material accumulation charts — mapping WDC exposure against damage thresholds by zone — are in preparation and will be added to this register.
:::

## Food contact status

Aluminium and aluminium alloys are permitted food contact materials under [EU Regulation 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R1935-20090807). Aluminium foil is one of the most widely used food contact materials in the world. No concern for food contact in the absence of aggressive chemical exposure.

## Compatibility — DES / Cleaning / beer/wort: A

Ethanol does not attack aluminium. PBW at homebrewing concentrations and temperatures does not attack aluminium significantly. Beer and wort at normal pH (pH 3.5–5.5) are within the passivation stability range of aluminium oxide.

---

[^1]: WHO, *Guidelines for Drinking-water Quality*, 4th edition (2017) — [who.int](https://www.who.int/publications/i/item/9789241549950) · aluminium guideline value 0.2 mg/L (200 µg/L). Calculation: Al₂O₃ dissolution ~0.1–0.5 nm/min in 0.01 M phosphoric acid; 30–60 sec contact on 10 cm² releases ~1 µg Al into 1 L — safety margin ~200×
