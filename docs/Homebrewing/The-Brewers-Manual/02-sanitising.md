---
sidebar_position: 3
title: Sanitising
---

import WhereToBuy from '@site/src/components/WhereToBuy';

# Sanitising

*This page follows the EU regulatory framework and Swedish market context described in the [introduction](./01-introduction.md).*

Sanitising is the step that actually keeps your beer safe. Cleaning removes soil; sanitising reduces the microbial population on a clean surface to levels that cannot cause infection. The distinction matters: sanitiser applied over organic contamination is not effective. The sequence is non-negotiable — clean first, sanitise second.

**Sanitising is not sterilising.** Sterilisation eliminates all life, including spores and heat-resistant endospores. Sanitising reduces the viable microbial population to levels where infection cannot establish — a different, and sufficient, standard. Brewing-grade sanitisers achieve this in seconds on a clean surface. Sterilisation is neither necessary nor practically achievable in a homebrewing context.

This page covers the sanitiser landscape relevant to homebrewing: how each product works, what it contains, correct use, and the specific scenarios where things go wrong. The products discussed are widely available internationally; regulatory references and product sourcing reflect the EU and Swedish market context described in the [introduction](./01-introduction.md). The material compatibility implications of sanitiser choice are developed in the [wet-dry cycle model](./04-wdc-model.md) and the [materials register](./05-materials-register/index.md).

## Acid-based no-rinse sanitisers (ABNS)

The dominant sanitiser class in homebrewing works by combining a low-pH acid with an anionic surfactant. The products that fall into this class — [Star San](https://www.fivestarchemicals.com/product/star-san/) (Five Star), [Sanipro Rinse](https://sanipro.se) (Behrens Group), [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) (KegLand), and [Chemsan](https://www.chemisphere.co.uk/chemsan) (Chemisphere) — share that dual mechanism, but their formulations differ in meaningful ways. They are treated as a group throughout this documentation under the term **ABNS** because the active mechanism and no-rinse approval are common to all four; the differences are noted where they matter.

The acid component is phosphoric acid in all four products. The surfactant component is an alkylbenzenesulfonate: [Star San](https://www.fivestarchemicals.com/product/star-san/), [Sanipro Rinse](https://sanipro.se), and [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) use dodecylbenzenesulfonic acid (DDBSA) — the free acid form. [Chemsan](https://www.chemisphere.co.uk/chemsan) uses the sodium salt (sodium dodecylbenzenesulfonate, SDBS), which behaves identically in solution at brewing-relevant pH because the acid dissociates essentially completely above pH 2.5. [Chemsan](https://www.chemisphere.co.uk/chemsan) and [Sanipro Rinse](https://sanipro.se) both contain isopropanol as a minor formulation component. In [Chemsan](https://www.chemisphere.co.uk/chemsan) it is present at less than 1% in concentrate; in [Sanipro Rinse](https://sanipro.se) at 1–10% — sufficient for the SDS to carry a flammability classification (Flam. Liq. 3, flash point ~40°C) that the other three products do not. [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) contains a different alcohol: IMS (Industrial Methylated Spirits, CAS 64-17-5 — ethanol denatured with a small amount of methanol) at 5–20% V/% per the [KegLand MSDS](/references/KegLand_StellarSan_MSDS.pdf).[^4] In all three cases the alcohol component is volatile and evaporates completely as the sanitiser dries on a surface — unlike DDBSA and phosphoric acid, which remain behind as a concentrated residue. The alcohol therefore contributes nothing to the residue that accumulates between brews. This distinction is developed in detail in the [wet-dry cycle model](./04-wdc-model.md). Beyond these declared actives, formulations contain undisclosed excipients and stabilisers; the SDSs do not enumerate these.

Ethanol-based sanitisers — covered in their own section below — are a separate class. They share the no-rinse property but work by a different mechanism and have a fundamentally different residue profile.

### How ABNS works

ABNS sanitisers kill microorganisms by a combined acid and surfactant mechanism. The phosphoric acid drops the solution pH to approximately 3.0–3.5, creating an environment hostile to microbial membranes. DDBSA is a surfactant — it disrupts cell membranes by integrating into the lipid bilayer via its hydrophobic alkyl chain, while the charged sulfonate head group maintains solubility. The two active ingredients are understood to work synergistically, with neither alone fully accounting for the product's efficacy or no-rinse approval. This mechanism is consistent with the established literature on anionic surfactant antimicrobial action, for example in [this HomeBrewTalk forum thread](https://www.homebrewtalk.com/threads/question-regarding-ppms-of-starsan-acid.294982/),[^ia] but has not been publicly documented by any of the manufacturers in primary technical materials — if you have a credible primary reference, a contribution via the [GitHub repository](https://github.com/r-colvin/craftbrewer.se) is welcome.

Contact time varies by product — always check the current product instructions for whichever product you are using.

Material compatibility with sanitising chemicals — which materials tolerate ABNS, at what concentration and contact time — is covered in the [materials register](./05-materials-register/index.md). The profiles below note material-specific guidance where documented by the manufacturer; the materials register is the place for the full treatment.

### Products available in the Swedish and EU market

:::note Usage instructions
Dosage, concentration, contact time, and no-rinse status shown in these profiles reflects sources available at the time of writing. Always read and follow the current product instructions — manufacturer guidance takes precedence over anything stated here.
:::

---

#### Sanipro Rinse

**Manufacturer:** [Behrens Group AB](https://sanipro.se) &middot; **SDS:** [EU REACH/CLP v1, Swedish occupational limits, October 2016](https://sanipro.se)[^3]

- **Formulation:** phosphoric acid 40–50%, DDBSA 15–25%, isopropanol 1–10%
- **Mechanism:** phosphoric acid drops pH to approximately 3.0–3.5; DDBSA disrupts cell membranes through surfactant action. The two components work synergistically — see [How ABNS works](#how-abns-works) above
- **Temperature and contact time:** ambient (15–25°C); 60 seconds minimum[^sb]
- **Chemical incompatibility:** do not mix with alkaline cleaners — rinse equipment thoroughly after cleaning before applying. Do not mix with chlorine-based products (chlorine gas risk — see the [cleaning guide](./03-cleaning.md))
- **Dosage:** 1.25–2.5 mL/L (12.5–25 mL per 10 L)[^sb] · Available in 250 mL and 1 L bottles — standard format, no built-in dosing; a syringe or measuring pipette is recommended for accuracy at small volumes (e.g. 1–2 L of working solution). **Open item:** primary instruction sheet from Behrens Group AB not yet obtained; dosage figures are from a Tier 2 retailer source[^sb]

<WhereToBuy productId="sanipro-rinse" />

---

#### Star San

**Manufacturer:** [Five Star Chemicals](https://www.fivestarchemicals.com/product/star-san/) &middot; **SDS:** [EU REACH/CLP v6.0, Swedish, January 2026](https://maltmagnus.se/documents/Star%20San-S%C3%A4kerhetsdatablad-v6.0.pdf)[^2]

- **Formulation:** phosphoric acid 50%, DDBSA 15% — no alcohol component declared
- **Mechanism:** phosphoric acid + DDBSA dual mechanism — see [How ABNS works](#how-abns-works) above
- **Temperature and contact time:** ambient (15–25°C); 1–2 minutes[^1]
- **Chemical incompatibility:** do not mix with alkaline cleaners or chlorine-based products. Five Star technical documentation states explicitly: "DO NOT MIX STAR SAN WITH CHLORINATED CLEANERS AS CHLORINE GAS WILL RESULT"[^starsan-cl]
- **Dosage:** 1.5 mL/L (1 oz per 5 US gallons)[^1] · Available in 8 oz, 946 mL (32 oz), 1 gal, and 5 gal sizes — the 946 mL size is most common in Sweden. No built-in dosing in any format; a syringe or measuring pipette is needed at small volumes. Five Star states the solution should be used immediately and recommends discarding after 1 hour; a Five Star technical document gives 12 hours as the maximum mixed solution shelf life[^1]

<WhereToBuy productId="star-san" />

---

#### StellarSan

**Manufacturer:** [KegLand](https://kegland.eu/products/stellarsan-food-grade-sanitiser-500ml) &middot; **SDS:** [MSDS, AU NOHSC format](/references/KegLand_StellarSan_MSDS.pdf)[^4] &middot; **EU label:** [KL05357, KegLand EU](https://kegland.eu/cdn/shop/files/AfbeeldingvanWhatsAppop2025-09-12om15.14.41_cc5d0b2b.jpg?v=1769781862)[^kb]

- **Formulation:** phosphoric acid 40–60%, DDBSA 10–30%, IMS (industrial methylated spirits — ethanol denatured with methanol, CAS 64-17-5) 5–20%[^4] · At the manufacturer's recommended dilution of 1.5 mL/L, the working solution contains 300 ppm DDBSA and 780 ppm phosphoric acid[^kb]
- **Mechanism:** phosphoric acid + DDBSA dual mechanism — see [How ABNS works](#how-abns-works) above. The IMS component is volatile and evaporates completely on drying; it contributes nothing to the non-volatile residue
- **Temperature and contact time:** ambient (15–25°C); 1 minute minimum[^kb]
- **Chemical incompatibility:** do not mix with alkaline cleaners or chlorine-based products
- **Dosage:** 1.5 mL/L[^kb] · Available in 500 mL — **dual-chamber dosing bottle**: squeeze the small inner chamber to dispense a pre-measured dose directly into water. This is the most convenient built-in dosing of all the ABNS products listed here; no syringe required at any practical volume. KegLand explicitly confirms working-dilution StellarSan can be stored in a FermZilla All Rounder (PET) indefinitely[^4]

<WhereToBuy productId="stellarsan" />

---

#### Chemsan

**Manufacturer:** [Chemisphere](https://www.chemisphere.co.uk/chemsan) &middot; **SDS:** [EU REACH/CLP v2.2.0, November 2020](https://www.chemisphere.co.uk/chemsan)[^5] &middot; **TDS:** [Technical Data Sheet and FAQs](/references/Chemsan-Information-Sheet-FAQs-compressed.pdf)[^cb]

- **Formulation:** phosphoric acid 20–40%, benzenesulfonic acid sodium salt (SDBS) 5–25%, isopropanol &lt;1% · The sodium salt form of the DDBSA-equivalent surfactant behaves identically in solution at brewing-relevant pH — see the opening of the [ABNS section](#acid-based-no-rinse-sanitisers-abns) above
- **Mechanism:** phosphoric acid + SDBS dual mechanism — see [How ABNS works](#how-abns-works) above
- **Temperature and contact time:** ambient (15–25°C); 2 minutes minimum[^cb] · No-rinse applies only at the stated dilution; higher concentrations require a potable water rinse[^cb]
- **Chemical incompatibility:** do not mix with alkaline cleaners or chlorine-based products
- **Dosage:** 2 mL/L (10 mL per 5 L)[^cb] · Available in standard bottle format; no built-in dosing. Also available in 50 g single-use sachets — each makes 25 L of solution

<WhereToBuy productId="chemsan" />

---

#### ChemiPro San

**Manufacturer:** [Brouwland](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) &middot; **SDS:** [Brouwland EN v1](/references/Chemipro%20SAN-GB%20English-v1.pdf) (primary) · [Brouwland SV v1](/references/Chemipro%20SAN-Sweden%20Swedish-v1.pdf) (primary) · [MaltMagnus/KemRisk SV v2.0](https://maltmagnus.se/documents/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf)[^cp] *(supplier SDS — disagrees with primary on formulation)*

- **Formulation:** phosphoric acid 25–50%, DDBSA 5–15%, propylene glycol 1–5%, tetrasodium glutamate diacetate 1–5%, caprylyl/capryl glucoside 1–5%, sodium/potassium cumene sulphonate 1–5% each · *Per Brouwland primary SDS (December 2023) — see the info box below for the unresolved discrepancy with the MaltMagnus/KemRisk supplier SDS*
- **Mechanism:** phosphoric acid + DDBSA dual mechanism, plausibly similar to other ABNS products — but composition uncertainty prevents a full equivalent assessment
- **Temperature and contact time:** ambient; 60 seconds[^cpb]
- **Chemical incompatibility:** do not mix with alkaline cleaners or chlorine-based products
- **Dosage:** 1.5–2.5 mL/L[^cpb] · Standard bottle format; no built-in dosing

<WhereToBuy productId="chemipro-san" />

**⚠ Treat as rinse-required** — see the info box below. If you use ChemiPro San, rinse with clean potable water after the contact time.

:::info A note on [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html)
[ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) is flagged here because the available documentation raises two unresolved issues that prevent it being treated as equivalent to the other ABNS products on this page.

**Composition discrepancy.** Two EU REACH/CLP SDSs exist for this product and they do not agree. The Brouwland primary SDS ([EN](/references/Chemipro%20SAN-GB%20English-v1.pdf) · [SV](/references/Chemipro%20SAN-Sweden%20Swedish-v1.pdf), December 2023) declares phosphoric acid at 25–50% and DDBSA (CAS 27176-87-0) as the surfactant at 5–15%. The [MaltMagnus/KemRisk supplier SDS](https://maltmagnus.se/documents/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf) (February 2026) declares phosphoric acid at ≥50–&lt;80% and lists a different surfactant — secondary alkylbenzene sulfonic acid (CAS 85536-14-7) — at 1–10%. The phosphoric acid ranges do not overlap, and the two surfactant CAS numbers identify chemically distinct compounds. The detergent ingredient declaration (Regulation (EC) No. 648/2004) in the MaltMagnus SDS adds a third inconsistency, declaring anionic surfactants at 15–&lt;30%. No explanation for these discrepancies has been published by Brouwland or Malt Magnus. This is a significant documentation problem: for a product that contacts food-preparation equipment, knowing what it actually contains is a minimum expectation. The two SDSs cannot both be correct. Until resolved, the Brouwland primary SDS is treated as authoritative.

**No-rinse status.** The [product page](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) states the product "only requires a contact time of 60 sec" without specifying whether rinsing is required. The directions of use state "Rinse only with clean potable water" — wording that is genuinely ambiguous. No EU biocide framework no-rinse approval (equivalent to the one held by [Sanipro Rinse](https://sanipro.se) under Regulation (EU) No. 528/2012) has been confirmed for this product.

**Is ChemiPro San suitable?** The composition discrepancy means the material compatibility analysis — which depends on knowing what is in the product and at what concentration — cannot be completed with confidence. This is not a statement that [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) is unsafe. The chemistry is plausibly similar to [Star San](https://www.fivestarchemicals.com/product/star-san/) and [Sanipro Rinse](https://sanipro.se), and it is widely used in homebrewing without reported problems. But the documentation does not meet the standard applied to other products in this guide.

**Position:** treat [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) as rinse-required until Brouwland publishes a formal, EU-compliant no-rinse declaration and resolves the SDS composition discrepancy. If you use it, rinse with clean potable water after the contact time.

If you have documentation that resolves either of these questions — a confirmed no-rinse approval, a clarification from Brouwland on the SDS discrepancy, or a more recent primary SDS — a contribution via the [GitHub repository](https://github.com/r-colvin/craftbrewer.se) is very welcome.
:::

### These ingredients in everyday context

Phosphoric acid and DDBSA are not exotic industrial chemicals — both are present in everyday consumer products at concentrations that put the sanitiser residue figures in perspective.

**Phosphoric acid** is used as an acidulant in cola drinks. A 330 mL can of Coca-Cola contains approximately 50–70 mg of phosphoric acid, giving a concentration of roughly 150–210 ppm.[^ph] The phosphoric acid in working-dilution ABNS (approximately 2,000 ppm in concentrate, down to a fraction of a ppm as residue in wort) is chemically identical. The regulatory framework that permits phosphoric acid as a food additive (E338) across the EU has assessed it at concentrations far exceeding what ABNS residue contributes to beer.

**DDBSA** (and its sodium salt, LAS) is the primary anionic surfactant in most European household dish soaps. EU Regulation (EC) No. 648/2004 on detergents requires surfactant content to be declared by class on the label — which is why dish soap labels say "5–15% anionic surfactants" rather than naming the specific compound. That the compound behind that class label is DDBSA/LAS can be confirmed directly from product SDSs: Nyco Green Dish Soap declares dodecylbenzene sulfonic acid (CAS 68584-22-5) at 3–7%,[^las1] Terra Breeze Dishwashing Liquid at 5–10%,[^las2] and Simple Green Pro Dish Soap lists alkylbenzene sulfonic acid (same CAS) at &lt;5%.[^las3] Linear alkylbenzene sulfonate (LAS, the sodium salt form of DDBSA) accounts for approximately 70–80% of anionic surfactant use in European household detergents and has been the dominant compound in this role since the 1960s. Dish soap contacts food surfaces routinely and rinse-off volumes are small; the regulatory acceptance of LAS in this context is directly analogous to ABNS residue in a fermenter.

### Working dilution — concentrations that matter

We can work out the concentration of active ingredients in a working-dilution solution directly from the SDS data. Using [Star San](https://www.fivestarchemicals.com/product/star-san/) as the example — its SDS declares 15% DDBSA and 50% phosphoric acid in the concentrate — and a working dilution of 1.5 mL/L (1:667, or approximately 1:640 as stated on the Five Star product page):

**DDBSA:**
- Concentrate: 15% = 150,000 ppm
- At 1:667 dilution: 150,000 / 667 = **~225 ppm**
- At 1:250 dilution (4 mL/L): 150,000 / 250 = **600 ppm**

**Phosphoric acid:**
- Concentrate: 50% = 500,000 ppm
- At 1:667 dilution: 500,000 / 667 = **~750 ppm**
- At 1:250 dilution (4 mL/L): 500,000 / 250 = **2,000 ppm**

The SDS-reported concentrate ranges produce a spread rather than a single value; the figures above use the [Star San](https://www.fivestarchemicals.com/product/star-san/) SDS data as the reference point and bracket the range between the manufacturer-recommended dilution (1.5 mL/L) and a common homebrewing figure (4 mL/L, 1:250). The correct working concentration to use is the one on the product instructions for whichever product you are using.

**Label confirmation.** The [StellarSan EU label](/references/KegLand_StellarSan_MSDS.pdf)[^kb] provides a direct cross-check: it states that at the recommended dilution of 1.5 mL/L (1 oz/5 gallons), the working solution contains 300 ppm DDBSA and 780 ppm phosphoric acid. This is consistent with the SDS-derived calculation above at the 1:667 dilution, and confirms that the SDS-based approach gives the right order of magnitude. The label figure is treated as the primary confirmed value for [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) at the manufacturer's recommended dilution.

These working concentrations — a few hundred ppm DDBSA and a few hundred to low thousands ppm phosphoric acid — are the starting point for the [wet-dry cycle model](./04-wdc-model.md) and the no-rinse calculation below.

### "No-rinse" — what it means and where it comes from

No-rinse means the sanitiser residue at the approved working dilution is food-safe — surfaces can be used for food or drink contact without rinsing. It is a food safety approval, not a claim about sanitisation duration: how long a surface remains microbiologically sanitised is a separate question, but the food safety of the residue is not time-limited. Follow the manufacturer's instructions for dilution and contact time; after that, the no-rinse approval covers the residue left behind.

The regulatory basis differs by product and market. [Star San](https://www.fivestarchemicals.com/product/star-san/) holds EPA registration (EPA Reg. No. 65001-1) as a no-rinse food-contact sanitiser in the US.[^1] [Sanipro Rinse](https://sanipro.se) is approved under the EU biocide framework ([Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0528)) and described as no-rinse by the manufacturer.[^3] [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) carries a KegLand no-rinse declaration, though its SDS remains in Australian NOHSC format rather than EU REACH/CLP.[^4] [Chemsan](https://www.chemisphere.co.uk/chemsan) is EU REACH compliant with a 2-minute contact time.[^5] [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) is approved under the EU biocide framework, though its no-rinse status is unresolved — see the ChemiPro San info box in the ABNS section above.[^cpb]

The following calculation shows how much non-volatile residue remains after draining, and confirms it is well within safe limits. The full analysis is in the [wet-dry cycle model](./04-wdc-model.md); it is summarised here because this is the first place it is relevant.

**Retained film volume and non-volatile mass.** After gravity draining a fermenter, a thin film of working-dilution solution remains on the interior walls. Using the [Witre 20 L PP bucket](https://www.witre.se/produkter/hinkar-och-fat/hinkar/hink-20-liter-vit/) (bottom diameter 281.6 mm, height 327 mm) as the worked example:

- Base (πr², where r = 281.6 ÷ 2 ÷ 10 = 14.1 cm): π × 14.1² ≈ **623 cm²**
- Side wall (2πr × h, where h = 327 mm = 32.7 cm): 2π × 14.1 × 32.7 ≈ **2,893 cm²**
- Lid underside (same diameter as base): ≈ **623 cm²**
- **Total wetted surface: 623 + 2,893 + 623 = ~4,140 cm²**

A drained aqueous film on a low-energy polymer surface such as PP is typically in the range of 15–25 µm thick (a standard order-of-magnitude result from thin-film drainage fluid mechanics; a specific primary citation for ABNS on PP has not been secured). Using 20 µm as the midpoint:

> 4,140 cm² × 0.002 cm (20 µm) = **~8.3 mL retained film**

Using the drainage rate method (0.12–0.15 mL per 100 cm²) gives 5.0–6.2 mL. The two methods bracket a range of roughly 5–10 mL. The WDC model uses the midpoint of this range (~6–7 mL) as the working figure; 6 mL is used below.

The non-volatile mass in that film depends on which dilution was used:

- **At 1.5 mL/L (manufacturer's recommended dilution)** — the typical case, confirmed by the [StellarSan label](/references/KegLand_StellarSan_MSDS.pdf) at 300 ppm DDBSA and 780 ppm phosphoric acid. Total non-volatile solids: ~1,080 ppm. In 6 mL: approximately **6.5 mg**.
- **At 4 mL/L (1:250)** — the upper bound. At ~600 ppm DDBSA and ~2,000 ppm phosphoric acid, total non-volatile solids: ~2,600 ppm. In 6 mL: approximately **15.6 mg**.

:::tip Measure the retained film in your own fermenter
The calculation above is a theoretical estimate for one specific bucket geometry. A more reliable figure for your fermenter is easy to get directly:

1. Fill the empty fermenter with a measured volume of water.
2. Swirl or tilt to wet the full interior surface — the same motion you'd use with sanitiser.
3. Drain completely into a measuring jug, leaving the fermenter inverted for 2–3 minutes.
4. The retained film volume is the fill volume minus what you recovered.

If you share the result — fermenter type, volume, and retained film measured — via the [GitHub repository](https://github.com/r-colvin/craftbrewer.se), it helps anchor these calculations for others with the same equipment.
:::

For the safety calculation below, the typical case (1.5 mL/L, ~6.5 mg) is used. The upper bound (~15.6 mg) is the worst case.

**DDBSA concentration in wort.** The key question is whether sanitiser at residue concentrations would be detectable as off-flavour. DDBSA produces a soapy, detergent character when present above its flavour threshold in beer. A specific primary organoleptic study establishing this threshold for DDBSA in beer has not been located (this is a genuine gap in the publicly available literature — a contribution via the [GitHub repository](https://github.com/r-colvin/craftbrewer.se) would be welcome). Based on general sensory science for anionic surfactants in aqueous matrices, the detection threshold is typically cited in the range of 1–5 ppm for trained tasters; this range is used here as the working figure.[^6]

Using the typical-case figure of ~6.5 mg (1.5 mL/L dilution) dissolved into 20 L of wort:

> 6.5 mg / 20,000 mL = **0.33 ppm DDBSA**

At the upper bound (4 mL/L, ~15.6 mg): 15.6 / 20,000 = **0.78 ppm DDBSA**.

At 0.33–0.78 ppm, the safety margin is 1.3–15× below the flavour detection threshold even at the upper bound — meaning you would taste the sanitiser before it reached any health-relevant concentration.

For acute toxicity, the two active ingredients have well-characterised oral LD50 values from the SDSs archived for this documentation: DDBSA is classified Acute Tox. 4 (H302) with an oral LD50 of approximately 2,000 mg/kg in rats;[^6] phosphoric acid has an oral LD50 of 2,600 mg/kg in rats.[^6] For a 70 kg adult, these correspond to lethal doses of approximately 140 g (DDBSA) and 182 g respectively. At 0.33–0.78 ppm DDBSA in 20 L of beer (6.5–15.6 mg total), a person would need to consume approximately 9,000–21,000 pints to approach the DDBSA LD50, and a proportionally larger volume for phosphoric acid. The acute toxicity margin is many orders of magnitude beyond any realistic exposure.

:::note No-rinse is a food safety approval, not a materials statement
No-rinse approval means the sanitiser residue on food-contact surfaces is safe to leave in contact with food or drink at the approved dilution. It says nothing about material compatibility. External fitting bodies, compression collars, and structural components that are not in the beer flow path may still be left unrinsed from a food safety perspective — but rinsing them after sanitisation contact time is recommended on material grounds, to limit unnecessary exposure to DDBSA. This distinction is discussed in detail in the [wet-dry cycle model](./04-wdc-model.md).
:::

### No-rinse and top-up water

The conventional instruction not to rinse after ABNS sanitising sometimes puzzles brewers who routinely add tap water to their fermenter — as top-up in partial boil batches, or as the first liquid in for kit brews — without ever experiencing infections. Both practices are consistent.

No-rinse does not mean tap water is dangerous. It means rinsing is unnecessary from a food-safety standpoint and introduces a specific avoidable risk: a contaminated rinse vessel, a delayed or interrupted brew day where the rinsed but no-longer-sanitised surface has time to re-accumulate organisms, or a water source of uncertain microbiological quality. When none of those conditions apply — when pitching follows sanitisation promptly and the tap water is normal household quality — rinsing with clean water does not meaningfully increase infection risk. Malt Magnus summarise the position directly in their vendor communications: clean tap water in normal household conditions does not harbour the organisms that spoil beer; the infection risk is in the vessel and handling, not the water.[^cleaning-vs-san]

The no-rinse recommendation is primarily about discipline and reliability under real-world conditions, not a statement that clean tap water is sterile.

### Foam

ABNS sanitisers foam. This is a direct consequence of DDBSA being a surfactant: surfactants reduce the surface tension of water, stabilising air bubbles and producing persistent foam. The foam is the same DDBSA solution in dilute form enclosing air — it is not a concentrated or more-reactive form of the sanitiser. It does not indicate contamination, chemical failure, or anything having gone wrong.

Practically, foam is useful: the surfactant ensures the solution spreads to and maintains contact with all surfaces, including vertical walls and undercut geometry that plain water would run off. The foam tells you the sanitiser is present and has reached the surface. It is an indicator that the product is doing its job.

Foam inside a fermenter does not need to be removed before filling with wort. The wort addition disrupts the foam mechanically — the volume and density of the incoming wort collapses the bubble structure immediately on contact. The CO₂ produced during fermentation then quickly displaces any residual air in the headspace. The foam from correctly diluted ABNS is not a flavour or safety concern because the concentration of DDBSA it carries is well within the no-rinse margin established above.

### Working dilution — correct preparation

Prepare ABNS at the manufacturer's specified working dilution — check the product instructions. Do not exceed working dilution: stronger is not better. Higher concentration increases DDBSA surface exposure and post-WDC residue mass without meaningfully improving microbiological efficacy.

Use cold or room-temperature water. Hot water is counterproductive: elevated temperature increases DDBSA partitioning rate into polymer surfaces, making the same sanitiser more aggressive toward PP, EPDM, and silicone than at ambient temperature. Ambient temperature (15–25°C) is optimal.

For a 20 L fermenter, 2–3 litres of working-dilution sanitiser is sufficient for fill-and-drain sanitisation. There is no benefit to filling the vessel completely — the goal is surface contact, not immersion.

### WDC risk — the thing that matters

ABNS non-volatile components (DDBSA and phosphoric acid) cannot evaporate. When ABNS is applied to a surface and the water evaporates, these components remain and concentrate. This is the [wet-dry cycle](./04-wdc-model.md) — the mechanism that gives rise to material compatibility concerns, and the reason this documentation exists. The best-documented real-world example of WDC-driven failure in homebrewing is the KegLand DuoTight push-fit fitting, whose POM (acetal) collar cracked under repeated ABNS wet-dry cycling; the [DuoTight design revision document](/references/duotight_design_revision.pdf) is the only manufacturer-produced quantitative analysis of sanitiser compatibility failure in the homebrew market. The [wet-dry cycle model](./04-wdc-model.md) covers the mechanism in full. The key practical point is: at complete drying, DDBSA and phosphoric acid concentrate to levels many times higher than the working dilution, and it is these concentrated forms that matter for materials — not the working-dilution concentrations discussed above.

Post-brew cleaning resets WDC accumulation to zero. This is the primary safeguard: a brewer who cleans thoroughly after every brew starts each session from the same baseline, regardless of how many brews they have made. A brewer who only re-sanitises without cleaning accumulates residue progressively. The full implications are in the [WDC model](./04-wdc-model.md).

### Long-term ABNS storage in equipment

Working-dilution ABNS can be stored in smooth-bore vessels with compatible hard-plastic construction — stainless kegs, PET fermenters, PP buckets. This is a common practice where the vessel would otherwise sit empty and at risk of contamination, and KegLand explicitly confirms that [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) working-dilution solution can be stored in a FermZilla All Rounder (PET) indefinitely without material concern.[^4] However, **Five Star Chemicals does not endorse long-term storage of mixed [Star San](https://www.fivestarchemicals.com/product/star-san/)**: their product page states the solution should be used immediately and recommends not using it if it has been in solution longer than an hour, while a Five Star technical document gives a mixed solution shelf life of 12 hours.[^1] The widespread homebrewing practice of storing mixed solution for weeks or months is not manufacturer-endorsed for [Star San](https://www.fivestarchemicals.com/product/star-san/) specifically. Effectiveness can be verified by pH (should remain below 3.0) and clarity (cloudy solution should be discarded).

Sustained ABNS storage is *not* a WDC scenario: with liquid present, the water-to-non-volatile ratio is fixed and evaporation cannot concentrate the solution. The WDC mechanism only begins when the vessel is drained and surfaces are exposed to air.

The limiting factor for long-term storage is the elastomeric and flexible components in contact with the liquid. Sustained immersion in ABNS is a qualitatively different exposure from the brief WDC contact of normal sanitisation, and not all materials that tolerate sanitisation contact will tolerate indefinite immersion. EPDM seals are manageable; NR (natural rubber) seals are not. Silicone tubing and PVC/vinyl components both have documented failure modes under sustained ABNS immersion. The [materials register](./05-materials-register/index.md) covers each material in detail, including the specific failure mechanisms and replacement guidance.

---

## Ethanol-based sanitisers

Ethanol at 70–80% concentration denatures proteins and disrupts cell membranes through dehydration, killing vegetative bacteria, yeasts, and moulds effectively. Any product in this concentration range — whether a purpose-made food-grade sanitiser or a diluted high-proof spirit — is functionally similar in antimicrobial action. The differences between products lie in co-formulants, regulatory approval status, packaging, and availability.

Ethanol and water both evaporate completely, leaving no non-volatile residue — WDC risk is zero by definition. Ethanol sanitisers are A-rated for all common homebrewing hard plastics and stainless. HDPE and some elastomers are less tolerant at high concentrations; the [materials register](./05-materials-register/index.md) covers specific ratings. Ethanol is flammable — keep away from open flames and apply before lighting gas burners.

### Working concentration — why 70–80% and not higher

The 70–80% concentration range is not arbitrary. Ethanol at this concentration kills microorganisms primarily by protein denaturation and membrane disruption through dehydration — mechanisms that require water to be present. At concentrations above 90%, ethanol rapidly desiccates the microbial cell surface, forming a protective protein precipitate that actually reduces penetration and killing efficacy. At 100% ethanol, antimicrobial effectiveness is substantially lower than at 70%. The 70% figure is well-established in pharmaceutical and medical disinfection literature as close to the optimum, with 70–80% generally regarded as the practical effective range. Higher is not better.

### Products available in the Swedish and EU market

:::note Usage instructions
Dosage and contact time shown in these profiles reflects sources available at the time of writing. Always read and follow the current product instructions — manufacturer guidance takes precedence over anything stated here.
:::

---

#### ChemiPro DES

**Manufacturer:** [Brouwland](https://brouwland.com/en/cleaning-products/10199-chemipro-des-750-ml.html) &middot; **SDS:** [EU REACH/CLP v2.0, Swedish, February 2026](https://maltmagnus.se/documents/11-ChemiproDES-S%C3%A4kerhetsdatablad-v2.0.pdf)[^7]

- **Formulation:** ethanol ~80% by weight · 20% undisclosed non-hazardous components; the SDS lists only ethanol as the hazardous ingredient — the non-hazardous fraction is not publicly characterised
- **Mechanism:** protein denaturation and membrane disruption through dehydration at 70–80% concentration — see [Working concentration — why 70–80% and not higher](#working-concentration--why-7080-and-not-higher) above
- **Temperature and contact time:** ready to use as supplied; no dilution required. Apply, allow 15–30 seconds minimum contact, proceed — ethanol evaporates completely leaving zero non-volatile residue
- **Chemical incompatibility:** flammable (Flam. Liq. 2, H225) — keep away from open flames and ignition sources. Apply before lighting gas burners
- **Safety:** classified Flam. Liq. 2 (H225) and Eye Irrit. 2 (H319)
- **Dosage:** ready to use — no preparation required · Available in 750 mL spray bottle and 5 L refill jug (distributed by MaltMagnus in Sweden)

<WhereToBuy productId="chemipro-des" />

---

#### Tingstad Ytdesinfektion Premium (TP555)

**Manufacturer:** [Tingstad Papper AB](https://www.tingstad.com/) &middot; **SDS:** [EU REACH/CLP v7, Swedish, 22 April 2025](/references/TP555.pdf)[^tp]

- **Formulation:** ethanol 598 g/kg (>50–&lt;70%), propan-2-ol (IPA) 66 g/kg (>5–&lt;10%)
- **Mechanism:** ethanol + IPA combination — protein denaturation and membrane disruption. See [Working concentration](#working-concentration--why-7080-and-not-higher) above
- **Temperature and contact time:** ready to use; apply and allow to evaporate
- **Chemical incompatibility:** flammable (Flam. Liq. 2, H225) — keep away from open flames
- **Safety:** classified Flam. Liq. 2 (H225) and Eye Irrit. 2 (H319)
- **Dosage:** ready to use · Available in 5 L concentrate from Tingstad in Sweden — economical for regular use · **Regulatory note:** approved under both PT2 (surface disinfectant) and **PT4 (surfaces in contact with food and feed)** under [Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0528) — the only ethanol sanitiser in this section with confirmed EU food-contact surface approval

---

#### KegLand Super Kill Ethyl Sanitiser (KL05371)

**Manufacturer:** [KegLand](https://kegland.com.au/products/super-kill-ethyl-sanitiser-spray-1000ml-ethanol-alcohol) &middot; **SDS:** [AU format, April 2021](/references/KL05371_-_Ethanol_70_-_Safety_Data_Sheet.pdf)[^sk]

- **Formulation:** ethanol 70%, water · The product page describes "30% proprietary ingredients" but SDS Section 3 declares only ethanol and water; the SDS is the regulatory document and is treated as authoritative
- **Mechanism:** ethanol at 70% concentration — see [Working concentration](#working-concentration--why-7080-and-not-higher) above
- **Temperature and contact time:** ready to use; apply and allow to evaporate
- **Chemical incompatibility:** flammable — keep away from ignition sources
- **Dosage:** ready to use · Available in 1 L HDPE spray bottle · **Not currently available in the EU market.** No EU REACH/CLP SDS exists; the SDS is not linked on the KegLand product page and requires an email to sds@kegland.com.au — an oversight for a food-contact product

---

#### Alcodes GF

**Manufacturer:** not confirmed &middot; sold by [JM Bryg](https://jmbryg.se/shop/130-rengoringsutrustning/4262-alcodes-gf-1l-med-atomizer/) (SE) with atomiser · Danish biocide approval: DK: 2020-29-7105-00055[^alc]

- **Formulation:** not confirmed — SDS not obtained
- **Dosage:** 1 L with atomiser · **Open item:** composition, SDS, and EU approval status not confirmed at time of writing

---

### High-proof spirits (Everclear and equivalents)

**Everclear** (Luxco, US) is rectified grain spirit at 95% ABV — essentially the maximum achievable by conventional distillation, as ethanol and water form an azeotrope at 95.6%. Not sold retail in the EU or UK, though importable in personal quantities. The EU equivalent is high-proof rectified spirit (*spiritus*, *neutral grain spirit*), available from specialist retailers in Poland and some Scandinavian markets.

High-proof spirit must be diluted to 70–80% before use as a sanitiser — it is not more effective at 95% and is actually less effective at that concentration. To make 70% ethanol from 95%: mix 73.7 mL of 95% spirit with 26.3 mL of water per 100 mL final volume. At EU retail prices, high-proof spirit is substantially more expensive per litre of working-strength sanitiser than a purpose-formulated product.

### Ethanol wipes

Pre-wetted wipes with 70% ethanol or isopropyl alcohol (IPA) are a practical tool for spot sanitisation of small items — thermometer probes, hydrometer tubes, the outside of tap bodies, sample ports. Allow to dry fully before contact with beer. They are convenient where a spray bottle is impractical. Choose wipes without humectants, gelling agents, or fragrances — the same co-formulant caution as for hand sanitiser applies. KegLand AU produces a wipe format (70% ethanol, not currently EU-available); the EU equivalent is any pharmaceutical or laboratory-grade 70% ethanol or IPA wipe without skin-care additives.

### Ethanol sanitisers versus hand sanitiser

A reasonable question is whether commercial hand sanitiser — widely available and used in food-handling contexts — is a suitable substitute for equipment sanitisation. The answer depends on what is actually in the product, and this is less straightforward than it looks.

Most retail hand sanitisers are IPA-based, not ethanol-based. While the WHO hand rub formulation uses ethanol, the majority of consumer products (Dettol, most supermarket brands) use isopropyl alcohol (IPA) at 70–75% as the active ingredient. IPA is cheaper and more shelf-stable than ethanol. Both alcohols work by the same broad mechanism at these concentrations and are effective against the same spectrum of brewing-relevant organisms.

The key limitation of hand sanitiser for equipment use is not the alcohol itself but the co-formulants. Hand sanitisers contain humectants — typically glycerol — to prevent skin desiccation. Glycerol is non-volatile and does not evaporate. Applied to equipment, it leaves a residue. A glycerol film is not a food safety concern at the concentrations involved, but it is not zero residue and would affect the wettability of the surface. Gel-format sanitisers compound this with gelling agents. Fragrances, where present, may also leave detectable traces.

The practical implication is that **if the surface is completely dry before contact with beer or wort, the alcohol has evaporated and there is no active sanitiser residue** — only whatever non-volatile co-formulants remain. For skin sanitisation before handling dry hops or similar tasks, this is entirely reasonable: the alcohol kills organisms on the skin and evaporates, and any glycerol residue on hands is food-safe.[^dh] ([David Heath's dry hopping guide](https://youtu.be/prfIXrWQDwk) covers this among many other aspects of dry hopping technique.) For equipment, a purpose-formulated spray — ethanol or IPA without humectants — is the cleaner choice, but sanitising wipes used on small items like thermometer probes, and allowed to dry fully before use, are pragmatically acceptable.

Purpose-made IPA spray — essentially 70% IPA in water, without the skin-care additives — is available from laboratory and medical suppliers and is a clean substitute for ethanol-based equipment sanitisers where ethanol products are unavailable or inconvenient.

---

## Saniclean

[Saniclean](https://www.fivestarchemicals.com/product/saniclean/) (Five Star Chemicals) is a low-foam ABNS product — the same phosphoric acid base as Star San, reformulated with a different surfactant to produce significantly less foam.[^saniclean] The low-foam property makes it useful wherever foam management is a constraint: CIP recirculation, keg cleaning, and any application where the heavy foam of Star San is slow to drain or difficult to work with. It is not limited to kegs or serving lines — it is simply the lower-foam variant for any context where that matters.

**Formulation and surfactant difference.** The [EU SDS (MaltMagnus/KemRisk v6.0, January 2026)](/references/Saniclean-S%C3%A4kerhetsdatablad-v6.0.pdf)[^saniclean-sds] declares phosphoric acid at 20–40% as the only listed hazardous ingredient. The detergent label (Regulation 648/2004) declares ≥30% phosphates — no anionic surfactants appear at declaration threshold. The [Five Star product sheet](/references/Saniclean.pdf)[^saniclean-ps] describes the surfactant as “Sulfonate Oleic Acid”, which is chemically distinct from DDBSA (dodecylbenzenesulfonic acid). Sulfonate oleic acid is a fatty acid-derived sulfonate rather than an alkylbenzene sulfonate — a different backbone, different chain length, different physical properties. It is this surfactant substitution that produces lower foam.

The material compatibility implications of the different surfactant are not fully characterised from available primary sources. The WDC risk profile is similar in principle — phosphoric acid is non-volatile and concentrates on drying regardless of which surfactant is present — but the specific elastomer and polymer interactions of sulfonate oleic acid differ from those of DDBSA. Until a primary compatibility study is available, treat Saniclean material compatibility as similar to but not identical to Star San, and check the [materials register](./05-materials-register/index.md) where ABNS ratings are based on DDBSA specifically.

- **Dosage:** 2.5–4 mL/L (25–40 mL per 10 L); higher concentrations require a rinse[^saniclean-mm]
- **Contact time:** 3 minutes[^saniclean-mm]
- **No-rinse status:** no-rinse at the lower end of the dosage range; rinse required at higher concentrations
- **Availability:** available from Swedish homebrew retailers including MaltMagnus (3.78 L) and Mr-Malt (3.78 L)[^saniclean-mm]

---

## Historical and specialist sanitisers

### Bleach

Household bleach (sodium hypochlorite, typically 3–5% active chlorine) was the standard homebrewing sanitiser before ABNS products became widely available. At approximately 50–100 ppm free chlorine — around 1–2 mL of 5% bleach per litre of water — it is effective against bacteria, yeasts, and moulds.

Bleach is not recommended when ABNS is available, for two reasons. The primary concern is the acid-incompatibility hazard: phosphoric acid in ABNS reacts with hypochlorite to produce chlorine gas. The same reaction applies to any acid contact with a bleach residue. Thorough rinsing with clean water eliminates this risk in practice, but the consequence of incomplete rinsing is chlorine gas rather than a flavour issue. VWP and other chlorine-based cleaners carry the same hazard — this is discussed in detail in the [cleaning guide](./03-cleaning.md). The second concern is chlorophenol off-flavour: chlorine reacting with phenolic compounds in wort produces the distinctive medicinal or antiseptic character that is one of the most recognisable defects in homebrew. Inadequate rinsing reliably produces this fault.

If bleach is used despite these limitations, use unscented household bleach at 50–100 ppm free chlorine, rinse thoroughly with clean potable water before the vessel contacts any acid (including ABNS), and do not use in the same session as ABNS without a complete equipment rinse between them.

### Iodophor

Iodophor is an iodine-based sanitiser — iodine complexed with a polymer carrier (usually polyvinylpyrrolidone) to produce a stable, lower-irritancy solution that releases free iodine in water. At the correct working dilution (typically 12.5–25 ppm available iodine, highly diluted from a concentrate of around 1.75% available iodine), iodophor carries no-rinse approval for food-contact surfaces in the US, where it is well-established in commercial brewing.

Two practical limitations have led to ABNS displacing iodophor in most homebrewing contexts. First, iodine stains: it leaves a yellow-brown discolouration on plastic, silicone, and porous surfaces at concentrations above the no-rinse threshold, and the staining is difficult to reverse. Second, iodophor is concentration-sensitive — above the no-rinse threshold a potable water rinse is required; below effective concentration the sanitising efficacy drops. Neither problem is insurmountable, but together they make ABNS the more forgiving choice for homebrewers who are not measuring concentration with test strips.

Iodophor is not widely stocked by EU/Swedish homebrew retailers and has no established EU biocide no-rinse approval equivalent to that held by Sanipro Rinse. It remains a legitimate option where it is available, particularly for brewers already familiar with concentration management.

---

## Heat sanitisation

Heat is a practical sanitisation method for equipment that can tolerate it. Unlike chemical sanitisers, it leaves no residue of any kind and requires no contact time beyond the heat exposure itself. The constraint is material compatibility.

**Self-sanitising in the process:** the wort chiller sanitises itself by contact with boiling wort during the final minutes of the boil. No pre-sanitisation is required. Brew spoons, paddle stirrers, and similar items used only in hot wort are similarly self-sanitising.

**Boiling water:** glass equipment (hydrometers, test jars), thermometer probes, stainless steel items, muslin bags and hop socks. Boiling water kills vegetative bacteria and yeasts effectively. Not appropriate for PET (temperature limit ~60–70°C) or most elastomers unless specifically rated for steam or high temperature.

**Silicone tubing** is one of the few common homebrewing materials that genuinely tolerates boiling. Food-grade silicone hose (such as standard 6×10 mm silicone transfer hose)[^si] is rated for continuous use from −60°C to +200°C, making boiling water — or even steam — appropriate. This is the best option for pre-storage sanitisation of silicone hose.

**POK (polyketone) fittings:** KegLand explicitly describes the Gen 2 DuoTight body (Poketon/POK) as "auclavable / heat resistant".[^dt2] POK is one of the few push-fit fitting materials where heat sanitisation is genuinely practical, though for connectors with silicone or EPDM O-rings the full assembly may not be autoclave-rated even if the body is.

**What heat cannot reliably sanitise in a homebrewing context:** PET vessels (temperature limit), PP fittings and taps (generally safe to ~80°C but not for boiling immersion in all cases), most standard airlock materials, and any assembly containing NR (natural rubber) or LDPE seals.

---

## Choosing a sanitiser

For most homebrewing equipment and most batches, any ABNS product is appropriate. The differences between Sanipro Rinse, Star San, StellarSan, and Chemsan matter at the margins — dosage convenience, foam level, no-rinse approval basis — but for a standard fermenter sanitised before pitching, all of them work. Ethanol sanitisers and boiling water are genuinely different in character: zero non-volatile residue, no foam, no dilution preparation, and practically zero risk of material interaction. They are the right choice in specific scenarios — spot sanitisation, small items, equipment where WDC accumulation matters — and a reasonable single-sanitiser choice for small-batch brewing where fill-and-drain volume is not a constraint.

The more useful distinctions are by use case:

**Fill-and-drain sanitisation of a large vessel** — fermenter, keg, Corny keg body: ABNS. Preparing 2–3 litres of working-dilution solution and swirling it through a 20 L fermenter takes two minutes; the equivalent volume of ethanol spray is not economical. For a Swedish brewer, [Sanipro Rinse](https://sanipro.se) is the best-documented EU option — explicit no-rinse approval, EU biocide registration, well-characterised SDS. [StellarSan](https://kegland.eu/products/stellarsan-food-grade-sanitiser-500ml) is the most convenient to dose (dual-chamber bottle) and is becoming increasingly available in Sweden. [Star San](https://www.fivestarchemicals.com/product/star-san/) and [Chemsan](https://www.chemisphere.co.uk/chemsan) are equivalent alternatives. Check your equipment materials against the [materials register](./05-materials-register/index.md) before use — compatibility is not uniform across vessel types, seals, and fittings.

Working-dilution ABNS can be stored in the vessel between brews, but only in equipment confirmed to tolerate sustained immersion. KegLand confirm this is safe for PET FermZilla All Rounder vessels.[^4] There are community reports of silicone components failing under sustained ABNS exposure — including dissolved O-rings[^hbt1] and partial disintegration of a silicone trub dam after several weeks of Star San contact in a stainless kettle.[^reddit1] Star San manufacturer guidance advises against storing mixed solution beyond 12 hours. The safest default is to prepare what you need for a brew day and discard the rest.

**Spot sanitisation of small items** — thermometer probe, tap spigot, hydrometer, bottling wand: ethanol sanitiser spray or wipes. No preparation, no foam, zero residue, quick evaporation. [ChemiPro DES](https://brouwland.com/en/cleaning-products/10199-chemipro-des-750-ml.html) in a spray bottle covers most of these tasks. ABNS in a spray bottle is also viable — check the spray bottle seal materials are compatible (EPDM is fine; polyamine-cured Viton is not for ethanol) and note that ABNS on small items still leaves a non-volatile residue on drying.

**Low-foam applications — keg lines, CIP recirculation, confined volumes:** Saniclean where available. Same phosphoric acid base as Star San but with a different surfactant (sulfonate oleic acid) that produces far less foam — useful wherever foam management is a constraint, not limited to serving systems specifically.

**Sanitising transfer hoses and tubing for storage:** boiling water is the cleanest option for silicone — no residue, no chemistry concerns, and silicone tolerates it fully. ABNS fill-and-drain is an alternative; drain thoroughly and allow to dry before storage. Ethanol flush is the quickest for immediate use but leaves tubing wet with residue until dry.

**Where zero non-volatile residue is required** — components with sustained acid-contact risk, or equipment where WDC accumulation is a concern: ethanol sanitiser or heat. Both leave nothing behind. [Tingstad Ytdesinfektion Premium](https://www.tingstad.com/) has the strongest EU regulatory basis for food-contact use among the ethanol products (PT4 approval under [Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0528)).

**When material compatibility is uncertain:** check the [materials register](./05-materials-register/index.md) first. The register covers each material with specific ratings for ABNS and ethanol sanitisers, including failure mode descriptions and the WDC implications for each geometry.

**For standard homebrewing with a single sanitiser:** ABNS covers the most ground for most setups. It handles large volumes, is no-rinse approved, and is effective for all common brewing-relevant organisms at working dilution. The residue implications are real but manageable with correct practice — clean after every brew, use correct dilution, and follow the WDC model guidance for sensitive components. The [KegLand DuoTight design revision](/references/duotight_design_revision.pdf) is the document that made the case for taking this seriously: a manufacturer-produced quantitative analysis showing how repeated ABNS wet-dry cycling cracked the POM collar of their own fitting. That failure is what this guide was written to explain. For packaging convenience, [StellarSan](https://kegland.eu/products/stellarsan-food-grade-sanitiser-500ml)'s dual-chamber dosing bottle removes the need for a syringe at any practical volume.

DES alone is viable as a single sanitiser for small-batch brewing at 5–10 L scale — where you are sanitising a bucket, a handful of bottles, and a few small items with a spray bottle rather than filling and draining a large vessel. At that scale, cost per use is low and zero-residue is a genuine advantage. At larger volumes or higher frequency, ABNS is significantly more economical and practical.

**If you can have two sanitisers:** ABNS for vessels and large volumes; ethanol for spot sanitisation and anything where zero residue matters. They complement each other directly, and the ethanol spray doubles as a spot sanitiser for brew-day small items (tap exterior, hydrometer, probe) without any preparation. [ChemiPro DES](https://brouwland.com/en/cleaning-products/10199-chemipro-des-750-ml.html) at 750 mL is a natural companion to any ABNS product.

**Boiling water** is a zero-cost option for anything that tolerates it: glass, stainless, silicone tubing. It needs no shelf space, no sourcing, and leaves no residue. Use it where it is practical rather than defaulting to chemical sanitisers for every item.

**Summary table:**

| Product | Type | Best for | No-rinse | Dosage | Notes |
|---|---|---|---|---|---|
| [Sanipro Rinse](https://sanipro.se) | ABNS | Large vessels, general sanitisation | ✓ EU approved | 1.25–2.5 mL/L | Best-documented EU/Swedish option; no built-in dosing |
| [Star San](https://www.fivestarchemicals.com/product/star-san/) | ABNS | Large vessels, general sanitisation | ✓ EPA (US) | 1.5 mL/L | No built-in dosing; discard after 1–12 hrs per Five Star |
| [StellarSan](https://kegland.eu/products/stellarsan-food-grade-sanitiser-500ml) | ABNS | Large vessels, general sanitisation | ✓ KegLand | 1.5 mL/L | Dual-chamber dosing bottle — most convenient of the ABNS products |
| [Chemsan](https://www.chemisphere.co.uk/chemsan) | ABNS | Large vessels, general sanitisation | ✓ EU REACH | 2 mL/L | 2-minute contact time; no-rinse only at stated dilution; 50 g single-use sachets |
| [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) | ABNS | Large vessels | ⚠ unconfirmed | 1.5–2.5 mL/L | Treat as rinse-required — see info box above |
| [Saniclean](https://www.fivestarchemicals.com/product/saniclean/) | ABNS (low-foam) | Any use where foam is a constraint | ✓ at lower dosage; rinse at higher | 2.5–4 mL/L | Different surfactant from Star San (sulfonate oleic acid vs DDBSA) — material compatibility similar but not identical |
| [ChemiPro DES](https://brouwland.com/en/cleaning-products/10199-chemipro-des-750-ml.html) | Ethanol ~80% | Spot sanitisation, zero-residue use | ✓ (evaporates) | ready to use | Zero WDC risk; flammable; 750 mL spray + 5 L refill |
| [Tingstad Ytdesinfektion Premium](https://www.tingstad.com/) | Ethanol + IPA | Spot sanitisation, food-contact surfaces | ✓ PT4 EU | ready to use | Only ethanol sanitiser with confirmed EU food-contact (PT4) approval |
| Heat / boiling water | Heat | Glass, stainless, silicone tubing | ✓ (no residue) | — | Zero cost; zero residue; not suitable for PET or most elastomers |
| Bleach | Hypochlorite | Historical use only | ✗ rinse required | ~1–2 mL/L (5%) | Not recommended with ABNS — chlorine gas risk if acid contact |
| Iodophor | Iodine-based | Where available; familiar users | ✓ at correct concentration | per instructions | Stains surfaces; concentration-sensitive; limited EU availability |

*[ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) — treat as rinse-required until Brouwland resolves the composition discrepancy and no-rinse status. If you use it, rinse after contact time. See the ChemiPro San info box in the ABNS section above for full detail.*

---

[^ph]: Phosphoric acid content of cola drinks: approximately 50–70 mg per 330 mL can, consistent with published food chemistry data for carbonated cola beverages. Phosphoric acid is permitted as a food additive in the EU under designation E338, regulated by [Regulation (EC) No. 1333/2008](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32008R1333) on food additives.

[^las1]: Nyco Products Company, *Green Dish Soap Safety Data Sheet* (NL979), rev. 23 March 2023 — Section 3 declares dodecylbenzene sulfonic acid (CAS 68584-22-5) at 3–7%. Accessed April 2026 · [nycoproducts.com](https://www.nycoproducts.com/wp-content/uploads/2023/04/NL979_Green-Dish-Soap-SDS.pdf)

[^las2]: Diversified Hospitality Solutions, *Terra Breeze Dishwashing Liquid Safety Data Sheet* (TE01-LIQ350), rev. 13 September 2017 — Section 3 declares dodecylbenzene sulfonic acid (CAS 27176-87-0) at 5–10%. Note: CAS 27176-87-0 is the single-chain C12 variant; CAS 68584-22-5 is the commercial multi-chain-length UVCB mixture — both are authentic DDBSA entries. Accessed April 2026 · [hdsupplysolutions.com](https://hdsupplysolutions.com/wcsstore/ExtendedSitesCatalogAssetStore/product/fm/additional/83/837470-SDS.pdf)

[^las3]: Sunshine Makers Inc., *Simple Green Pro Dish Soap Safety Data Sheet*, v. 4101128-24A, 18 March 2024 — Section 3 declares alkylbenzene sulfonic acid (CAS 68584-22-5) at &lt;5%. Accessed April 2026 · [simplegreen.com](https://cdn.simplegreen.com/downloads/SDS_EN-US_SimpleGreenProDishSoap.pdf)

[^1]: Five Star Chemicals, [Star San product page](https://fivestarchemicals.com/star-san) — working dilution stated as 1 oz per 5 US gallons (~1.5 mL/L); contact time stated as at least 1–2 minutes. Product page also states "Star San is an EPA's registered sanitizer and must be used immediately. We do not recommend using it if has been in solution longer than an hour." A Five Star shelf life technical document (2021) gives mixed solution shelf life as 12 hours. Accessed April 2026 from [fivestarchemicals.com](https://www.fivestarchemicals.com).

[^ia]: HomeBrewTalk forum thread, [*Question regarding PPMs of StarSan acid*](https://www.homebrewtalk.com/threads/question-regarding-ppms-of-starsan-acid.294982/) — anecdotal community discussion of DDBSA membrane disruption mechanism. Cited as evidence the mechanism is discussed in the homebrewing community; not a primary source for the mechanism itself.

[^2]: MaltMagnus AB / KemRisk Sweden AB, [*Star San Säkerhetsdatablad*](https://maltmagnus.se/documents/Star%20San-S%C3%A4kerhetsdatablad-v6.0.pdf), v6.0 (January 2026) — EU REACH/CLP format. Active ingredients declared: phosphoric acid 50%, DDBSA (dodecylbensensulfonsyra) 15%. Does not contain dilution ratios, contact times, or no-rinse directions. Accessed April 2026 from [maltmagnus.se](https://maltmagnus.se).

[^3]: Behrens Group AB, *Sanipro Rinse Safety Data Sheet*, v1 (October 2016) — EU REACH/CLP compliant, including Swedish occupational exposure limits. Accessed April 2026 from [sanipro.se](https://sanipro.se).

[^sb]: Hembryggeriet, [Sanipro Rinse 1000ml product page](https://www.hembryggeriet.se/sanipro-rinse-1000ml-skummande-desinfektionsmedel-250) — dosage stated as 12.5–25 mL per 10 L (1:400–1:800); contact time stated as at least 1 minute. Tier 2 retailer source; primary manufacturer instruction sheet not yet obtained. **Open item: request Sanipro Rinse usage instructions directly from Behrens Group AB.**

[^4]: KegLand, *StellarSan Material Safety Data Sheet* — Australian NOHSC format. Accessed April 2026 from [kegland.com.au](https://kegland.com.au) · [`KegLand_StellarSan_MSDS.pdf`](/references/KegLand_StellarSan_MSDS.pdf). The EU market label (KL05357, KegLand EU, Netherlands) carries a GHS/CLP corrosive pictogram, confirming the product has been assessed for EU market compliance. Since KegLand EU is actively selling StellarSan into the EU, an EU REACH/CLP SDS must exist or be in preparation — the current situation where only the AU-format SDS is publicly linked appears to be an interim gap rather than a substantive compliance issue. Swedish retailers are understood to be listing StellarSan in 2026, which may prompt publication of a Swedish/EU-format SDS.

[^kb]: KegLand EU, StellarSan Final Rinse product label (EU market, 500 mL, KL05357) — dilution stated as 1 oz per 5 gallons (1.5 mL/L); contact time stated as minimum 1 minute; no-rinse confirmed ("Do not rinse after application. StellarSan is a 'final rinse' product"). Label carries GHS/CLP corrosive pictogram and lists KegLand EU, Gendt, Netherlands as distributor. Label image accessed April 2026 from [kegland.eu](https://kegland.eu/cdn/shop/files/AfbeeldingvanWhatsAppop2025-09-12om15.14.41_cc5d0b2b.jpg?v=1769781862). Australian label additionally states working dilution delivers 300 ppm DDBSA and 780 ppm phosphoric acid.

[^5]: Chemisphere, *Chemsan Safety Data Sheet*, v2.2.0 (November 2020) — EU REACH/CLP compliant. Accessed April 2026 from [chemisphere.co.uk](https://www.chemisphere.co.uk). Notes surfactant as benzenesulfonic acid (sodium salt form), not DDBSA.

[^cb]: Chemisphere, [*Chemsan Technical Data Sheet and FAQs*](/references/Chemsan-Information-Sheet-FAQs-compressed.pdf) — primary manufacturer document. Dilution: 0.2% (10 mL per 5 L = 2 mL/L); contact time: minimum 2 minutes; no-rinse approved at stated dilution; higher concentrations require a potable rinse. Describes product as "a blend of phosphoric and benzenesulfonic acid and isopropanol." Accessed April 2026.

[^cp]: Two SDSs are available for ChemiPro San and they differ in composition. (1) Brouwland primary SDS, English (GB) v1, 19 December 2023, per Regulation 1907/2006 (REACH) + 2020/878 (EU): phosphoric acid 25–50%, DDBSA (CAS 27176-87-0) 5–15%, propylene glycol 1–5%, tetrasodium glutamate diacetate 1–5%, caprylyl/capryl glucoside 1–5%, sodium/potassium cumene sulphonate 1–5% each. [`Chemipro SAN-GB English-v1.pdf`](/references/Chemipro%20SAN-GB%20English-v1.pdf) · [`Chemipro SAN-Sweden Swedish-v1.pdf`](/references/Chemipro%20SAN-Sweden%20Swedish-v1.pdf). (2) MaltMagnus/KemRisk Sweden AB supplier SDS, v2.0, [16 February 2026](https://maltmagnus.se/documents/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf): phosphoric acid ≥50–&lt;80%, surfactant CAS 85536-14-7 (secondary alkylbenzene sulfonic acid) 1–10%, sodium cumene sulphonate 1–10%, caprylyl/capryl glucoside 1–10% · [`13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf`](/references/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf). The discrepancy in phosphoric acid content and surfactant CAS number between these two SDSs has not been explained or resolved by Brouwland.

[^cpb]: Brouwland, [ChemiPro San product page](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) — dilution 15–25 mL per 10 L (1.5–2.5 mL/L); contact time 60 seconds. Directions state: "Rinse only with clean potable water." This instruction is ambiguous — it may mean rinsing is mandatory, or it may mean that if rinsing is performed, only potable water should be used. No EU biocide no-rinse approval has been confirmed. **Position: treat as rinse-required until formal no-rinse declaration is published.** See ChemiPro San section below.

[^starsan-cl]: Five Star Chemicals, [*Star San Technical Data Sheet*](https://www.beveragefactory.com/images/guides/StarSan-TECH.pdf) — accessed April 2026. Explicit statement: "DO NOT MIX STAR SAN WITH CHLORINATED CLEANERS AS CHLORINE GAS WILL RESULT." Mechanism: phosphoric acid + hypochlorite → Cl₂.

[^saniclean]: Five Star Chemicals, [Saniclean product page](https://www.fivestarchemicals.com/product/saniclean/) — low-foam ABNS; phosphoric acid base with sulfonate oleic acid surfactant rather than DDBSA. Accessed April 2026 from [fivestarchemicals.com](https://www.fivestarchemicals.com).

[^saniclean-sds]: MaltMagnus AB / KemRisk Sweden AB, *Saniclean Säkerhetsdatablad v6.0* (January 2026) — EU REACH/CLP Swedish. Section 3: phosphoric acid 20–40% (only listed hazardous ingredient). Detergent label (648/2004): ≥30% phosphates; no anionic surfactants declared at threshold. Accessed April 2026 from [maltmagnus.se](https://maltmagnus.se) · [`Saniclean-Säkerhetsdatablad-v6.0.pdf`](/references/Saniclean-S%C3%A4kerhetsdatablad-v6.0.pdf)

[^saniclean-ps]: Five Star Chemicals / MaltMagnus, [*Saniclean product sheet*](/references/Saniclean.pdf) — states surfactant as “Sulfonate Oleic Acid”; dosage 15 mL per 6 litres (2.5 mL/L); contact time 3 minutes. Archived from [mr-malt.se](https://mr-malt.se). Tier 2 source — product sheet, not primary SDS.

[^saniclean-mm]: MaltMagnus, [Saniclean 3.78 L product page](https://maltmagnus.se/se/sv/utrustning/rengoring/desinfektion/saniclean-378-l/) — dosage stated as 25–40 mL per 10 L (2.5–4 mL/L); higher dosage requires rinsing; contact time 3 minutes. Tier 2 source — retailer product page.

[^cleaning-vs-san]: Malt Magnus (email correspondence, August 2024): vendor position is that tap water in normal household conditions does not contain beer-spoiling organisms; the infection risk lies in the vessel or handling, not the water itself. Tier 2 source — retailer, not primary manufacturer or academic study. The broader position is consistent with the Enolandia George's Beer beginner kit instructions, which specify no dedicated sanitisation step and rely on thorough cleaning followed by immediate pitching. [`Instructions - Georges beer.pdf`](/references/Instructions%20-%20Georges%20beer.pdf)

[^6]: Flavour detection threshold for DDBSA in beer: a specific primary organoleptic study for DDBSA in beer has not been located. The 1–5 ppm figure is based on general sensory science for anionic surfactants in aqueous matrices and is used as a working estimate only. LD50 values from the archived ChemiPro SAN SDS (Brouwland, December 2023, Section 11) · [`Chemipro SAN-GB English-v1.pdf`](/references/Chemipro%20SAN-GB%20English-v1.pdf): DDBSA oral LD50 ~2,000 mg/kg (rat); phosphoric acid oral LD50 2,600 mg/kg (rat), corroborated by the MaltMagnus/KemRisk supplier SDS · [`13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf`](/references/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf).

[^7]: MaltMagnus / Brouwland, *ChemiPro DES Säkerhetsdatablad (Safety Data Sheet)*, v2.0 (February 2026) — EU REACH/CLP, prepared by KemRisk Sweden AB. Accessed April 2026 from [maltmagnus.se](https://maltmagnus.se).

[^sk]: KegLand Distribution PTY LTD, *Super Kill Ethyl Sanitiser Safety Data Sheet* (KL05371), revised 28 April 2021 — AU format (Safe Work Australia / GHS). Section 3 declares ethanol (CAS 64-17-5) at 70%, balance water. No other ingredients listed. SDS retrieved from [beerco.com.au](https://cdn.shopify.com/s/files/1/0002/9006/2342/files/KL05371_-_Ethanol_70_-_Safety_Data_Sheet.pdf?v=1722388829) (linked on the BeerCo product page; not directly linked on the KegLand product page). Archived at [`KL05371_-_Ethanol_70_-_Safety_Data_Sheet.pdf`](/references/KL05371_-_Ethanol_70_-_Safety_Data_Sheet.pdf). Product page: [kegland.com.au](https://kegland.com.au/products/super-kill-ethyl-sanitiser-spray-1000ml-ethanol-alcohol).

[^tp]: Tingstad Papper AB, *Ytdesinfektion Premium Säkerhetsdatablad* (TP555), v7, issued 22 April 2025 — EU REACH/CLP compliant per Regulation (EU) 2020/878. Active substances: ethanol 598 g/kg (>50–&lt;70%), propan-2-ol 66 g/kg (>5–&lt;10%). Approved PT2 and PT4 under Regulation (EU) No. 528/2012. Swedish supplier: Tingstad Papper AB, Box 13013, 415 02 Göteborg. Accessed April 2026 · [`TP555.pdf`](/references/TP555.pdf)

[^alc]: Alcodes GF, sold by JM Bryg (SE) with atomiser — [jmbryg.se](https://jmbryg.se/shop/130-rengoringsutrustning/4262-alcodes-gf-1l-med-atomizer/). Danish biocide approval DK: 2020-29-7105-00055. Composition and EU approval status not confirmed; SDS not obtained. **Open item.**

[^dh]: David Heath Homebrew, *Dry Hopping Beer — Everything You Need To Know For Modern Brewing*, YouTube, 21 August 2024 · [youtu.be/prfIXrWQDwk](https://youtu.be/prfIXrWQDwk)

[^si]: Mr Malt (SE), [Silicone hose 6 × 10 mm product page](https://mr-malt.se/en/equipment/tubing/silicone/silicone-hose-6-x-10-mm) — operating temperature stated as −60°C to +200°C; food safety certifications listed as Euro-Pharm, USP-CL.VI, FDA, BfR/BGVV, ISO 10993. Accessed April 2026.

[^dt2]: KegLand, [DuoTight Generation 2 Design Revision](https://docs.kegland.com.au/products/fittings/duotight-generation-2-design-revision) — KegLand docs platform. States Poketon body as "Autoclavable / heat resistant"; Gen 2 seals are double O-ring silicone + EPDM combination. Accessed April 2026.

[^hbt1]: HomeBrewTalk forum, [*StarSan and Silicone Hose*](https://homebrewtalk.com/threads/starsan-and-silicone-hose.625795/) — community thread; user reports silicone O-rings dissolving under Star San exposure. Tier 3 community source.

[^reddit1]: Reddit r/Homebrewing, [*Watch out, diluted Star San will dissolve silicone*](https://www.reddit.com/r/Homebrewing/comments/mszj8d/watch_out_diluted_star_san_will_dissolve_silicone/) — user reports partial disintegration of a silicone trub dam after several weeks of contact with diluted Star San in a stainless kettle. Tier 3 community source.
