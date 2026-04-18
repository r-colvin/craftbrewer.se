---
sidebar_position: 3
title: Sanitising
---

# Sanitising

*This page follows the EU regulatory framework and Swedish market context described in the [introduction](./01-introduction.md).*

Sanitising is the step that actually keeps your beer safe. Cleaning removes soil; sanitising reduces the microbial population on a clean surface to levels that cannot cause infection. The distinction matters: sanitiser applied over organic contamination is not effective. The sequence is non-negotiable — clean first, sanitise second.

**Sanitising is not sterilising.** Sterilisation eliminates all life, including spores and heat-resistant endospores. Sanitising reduces the viable microbial population to levels where infection cannot establish — a different, and sufficient, standard. Brewing-grade sanitisers achieve this in seconds on a clean surface. Sterilisation is neither necessary nor practically achievable in a homebrewing context.

This page covers the sanitiser landscape relevant to homebrewing: how each product works, what it contains, correct use, and the specific scenarios where things go wrong. The products discussed are widely available internationally; regulatory references and product sourcing reflect the EU and Swedish market context described in the [introduction](./01-introduction.md). The material compatibility implications of sanitiser choice are developed in the [wet-dry cycle model](./04-wdc-model.md) and the [materials register](./05-materials-register/index.md).

## Acid-based no-rinse sanitisers (ABNS)

The dominant sanitiser class in homebrewing works by combining a low-pH acid with an anionic surfactant. The products that fall into this class — [Star San](https://www.fivestarchemicals.com/product/star-san/) (Five Star), [Sanipro Rinse](https://sanipro.se) (Behrens Group), [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) (KegLand), and [Chemsan](https://www.chemisphere.co.uk/chemsan) (Chemisphere) — share that dual mechanism, but their formulations differ in meaningful ways. They are treated as a group throughout this documentation under the term **ABNS** because the active mechanism and no-rinse approval are common to all four; the differences are noted where they matter.

The acid component is phosphoric acid in all four products. The surfactant component is an alkylbenzenesulfonate: [Star San](https://www.fivestarchemicals.com/product/star-san/), [Sanipro Rinse](https://sanipro.se), and [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) use dodecylbenzenesulfonic acid (DDBSA) — the free acid form. [Chemsan](https://www.chemisphere.co.uk/chemsan) uses the sodium salt (sodium dodecylbenzenesulfonate, SDBS), which behaves identically in solution at brewing-relevant pH because the acid dissociates essentially completely above pH 2.5. [Chemsan](https://www.chemisphere.co.uk/chemsan) and [Sanipro Rinse](https://sanipro.se) both contain isopropanol as a minor formulation component. In [Chemsan](https://www.chemisphere.co.uk/chemsan) it is present at less than 1% in concentrate; in [Sanipro Rinse](https://sanipro.se) at 1–10% — sufficient for the SDS to carry a flammability classification (Flam. Liq. 3, flash point ~40°C) that the other three products do not. [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) contains a different alcohol: IMS (Industrial Methylated Spirits, CAS 64-17-5 — ethanol denatured with a small amount of methanol) at 5–20% V/% per the [KegLand MSDS](/references/KegLand_StellarSan_MSDS.pdf).[^4] In all three cases the alcohol component is volatile and evaporates completely as the sanitiser dries on a surface — unlike DDBSA and phosphoric acid, which remain behind as a concentrated residue. The alcohol therefore contributes nothing to the residue that accumulates between brews. This distinction is developed in detail in the [wet-dry cycle model](./04-wdc-model.md). Beyond these declared actives, formulations contain undisclosed excipients and stabilisers; the SDSs do not enumerate these.

Ethanol-based sanitisers — ChemiPro DES and similar products — are a separate class covered in their own section below. They share the no-rinse property but work by a different mechanism and have a fundamentally different residue profile.

### How ABNS works

ABNS sanitisers kill microorganisms by a combined acid and surfactant mechanism. The phosphoric acid drops the solution pH to approximately 3.0–3.5, creating an environment hostile to microbial membranes. DDBSA is a surfactant — it disrupts cell membranes by integrating into the lipid bilayer via its hydrophobic alkyl chain, while the charged sulfonate head group maintains solubility. The two active ingredients are understood to work synergistically, with neither alone fully accounting for the product's efficacy or no-rinse approval. This mechanism is consistent with the established literature on anionic surfactant antimicrobial action, for example in [this HomeBrewTalk forum thread](https://www.homebrewtalk.com/threads/question-regarding-ppms-of-starsan-acid.294982/),[^ia] but has not been publicly documented by any of the manufacturers in primary technical materials — if you have a credible primary reference, a contribution via the [GitHub repository](https://github.com/r-colvin/craftbrewer.se) is welcome.

Contact time varies by product — the figures in the table below are from manufacturer product instructions, but **check the instructions for the specific product being used.**

### Active ingredients, working dilution, and contact time

| Product | Manufacturer | Phosphoric acid | Surfactant | Other ingredients | Working dilution | Contact time |
|---|---|---|---|---|---|---|
| [Sanipro Rinse](https://sanipro.se) | Behrens Group AB (SE) | 40–50% | DDBSA 15–25% | IPA 1–10% | 1.25–2.5 mL/L | 60 sec |
| [Star San](https://www.fivestarchemicals.com/product/star-san/) | Five Star Chemicals (US) | 50% | DDBSA 15% | none declared | 1.5 mL/L | 1–2 min |
| [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) | KegLand (AU) | 40–60% | DDBSA 10–30% | IMS (ethanol) 5–20% | 1.5 mL/L | 1 min |
| [Chemsan](https://www.chemisphere.co.uk/chemsan) | Chemisphere (UK) | 20–40% | benzenesulfonic acid (Na salt) 5–25% | IPA &lt;1% | 2 mL/L | 2 min |
| [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) | Brouwland (BE) | 25–50% | DDBSA 5–15% | propylene glycol, tetrasodium glutamate diacetate, caprylyl/capryl glucoside, sodium/potassium cumene sulphonate (each 1–5%) | 1.5–2.5 mL/L | 60 sec † |

*Concentration figures from EU REACH/CLP SDSs; working dilution and contact time from manufacturer product instructions.*

*† [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) no-rinse status is unresolved — treat as rinse-required. See the info box below and the [ChemiPro San section](#chemipro-san--the-caveat).*

**Sources**

- [Sanipro Rinse](https://sanipro.se)
  - [SDS](https://sanipro.se)[^3]
  - Usage instructions[^sb] *(Tier 2 — primary from Behrens Group not yet obtained)*
- [Star San](https://www.fivestarchemicals.com/product/star-san/)
  - [SDS](https://maltmagnus.se/documents/Star%20San-S%C3%A4kerhetsdatablad-v6.0.pdf)[^2]
  - [Product page / usage instructions](https://fivestarchemicals.com/star-san)[^1]
- [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html)
  - [SDS (MSDS, AU format)](/references/KegLand_StellarSan_MSDS.pdf)[^4]
  - [EU label / usage instructions](https://kegland.eu/cdn/shop/files/AfbeeldingvanWhatsAppop2025-09-12om15.14.41_cc5d0b2b.jpg?v=1769781862)[^kb]
- [Chemsan](https://www.chemisphere.co.uk/chemsan)
  - [SDS](https://www.chemisphere.co.uk/chemsan)[^5]
  - [TDS and usage instructions](/references/Chemsan-Information-Sheet-FAQs-compressed.pdf)[^cb]
- [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html)
  - [SDS — Brouwland EN](/references/Chemipro%20SAN-GB%20English-v1.pdf) (primary)
  - [SDS — Brouwland SV](/references/Chemipro%20SAN-Sweden%20Swedish-v1.pdf) (primary)
  - [SDS — MaltMagnus SV](https://maltmagnus.se/documents/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf)[^cp] *(supplier SDS — differs from primary, see note below)*
  - [Product page / usage instructions](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html)[^cpb]

:::info A note on [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html)
[ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) is flagged here because the available documentation raises two unresolved issues.

**Composition discrepancy.** Two EU REACH/CLP SDSs exist for this product and they do not agree. The Brouwland primary SDS ([EN](/references/Chemipro%20SAN-GB%20English-v1.pdf) · [SV](/references/Chemipro%20SAN-Sweden%20Swedish-v1.pdf), December 2023) declares phosphoric acid at 25–50% and DDBSA (CAS 27176-87-0) as the surfactant at 5–15%. The [MaltMagnus/KemRisk supplier SDS](https://maltmagnus.se/documents/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf) (February 2026) declares phosphoric acid at ≥50–&lt;80% and lists a different surfactant — secondary alkylbenzene sulfonic acid (CAS 85536-14-7) — at 1–10%. The phosphoric acid ranges do not overlap, and the two surfactant CAS numbers identify chemically distinct compounds. The detergent ingredient declaration (Regulation (EC) No. 648/2004) in the MaltMagnus SDS adds a third inconsistency, declaring anionic surfactants at 15–&lt;30%. No explanation for these discrepancies has been published by Brouwland or Malt Magnus. Until resolved, the Brouwland primary SDS is treated as authoritative.

**No-rinse status.** The [product page](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) states the product "only requires a contact time of 60 sec" without specifying whether rinsing is required. The directions of use state "Rinse only with clean potable water" — wording that is genuinely ambiguous. No EU biocide framework no-rinse approval (equivalent to the one held by [Sanipro Rinse](https://sanipro.se) under Regulation (EU) No. 528/2012) has been confirmed for this product.

**Position:** treat [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) as rinse-required until Brouwland publishes a formal, EU-compliant no-rinse declaration and resolves the SDS composition discrepancy. Full discussion in the [ChemiPro San](#chemipro-san--the-caveat) section below.

If you have documentation that resolves either of these questions — a confirmed no-rinse approval, a clarification from Brouwland on the SDS discrepancy, or a more recent primary SDS — a contribution via the [GitHub repository](https://github.com/r-colvin/craftbrewer.se) is very welcome.
:::

### These ingredients in everyday context

Phosphoric acid and DDBSA are not exotic industrial chemicals — both are present in everyday consumer products at concentrations that put the sanitiser residue figures in perspective.

**Phosphoric acid** is used as an acidulant in cola drinks. A 330 mL can of Coca-Cola contains approximately 50–70 mg of phosphoric acid, giving a concentration of roughly 150–210 ppm.[^ph] The phosphoric acid in working-dilution ABNS (approximately 2,000 ppm in concentrate, down to a fraction of a ppm as residue in wort) is chemically identical. The regulatory framework that permits phosphoric acid as a food additive (E338) across the EU has assessed it at concentrations far exceeding what ABNS residue contributes to beer.

**DDBSA** (and its sodium salt, LAS) is the primary anionic surfactant in most European household dish soaps. EU Regulation (EC) No. 648/2004 on detergents requires surfactant content to be declared by class on the label — which is why dish soap labels say "5–15% anionic surfactants" rather than naming the specific compound. Linear alkylbenzene sulfonate (LAS, the sodium salt form of DDBSA) accounts for approximately 70–80% of anionic surfactant use in European household detergents and has been the dominant compound in this role since the 1960s. A direct confirmation from a specific dish soap SDS has not been secured — EU detergent labelling rules do not require the specific compound name on the consumer label — but the inference is well supported by published surfactant market data.[^las] Dish soap contacts food surfaces routinely and rinse-off volumes are small; the regulatory acceptance of LAS in this context is directly analogous to ABNS residue in a fermenter.

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

The regulatory basis differs by product and market. [Star San](https://www.fivestarchemicals.com/product/star-san/) holds EPA registration (EPA Reg. No. 65001-1) as a no-rinse food-contact sanitiser in the US.[^1] [Sanipro Rinse](https://sanipro.se) is approved under the EU biocide framework ([Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0528)) and described as no-rinse by the manufacturer.[^3] [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) carries a KegLand no-rinse declaration, though its SDS remains in Australian NOHSC format rather than EU REACH/CLP.[^4] [Chemsan](https://www.chemisphere.co.uk/chemsan) is EU REACH compliant with a 2-minute contact time.[^5] [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) uses the same chemistry but its no-rinse status is unresolved — see the [ChemiPro San section](#chemipro-san--the-caveat) below.[^cpb]

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

### Foam

ABNS sanitisers foam. This is a direct consequence of DDBSA being a surfactant: surfactants reduce the surface tension of water, stabilising air bubbles and producing persistent foam. The foam is the same DDBSA solution in dilute form enclosing air — it is not a concentrated or more-reactive form of the sanitiser. It does not indicate contamination, chemical failure, or anything having gone wrong.

Practically, foam is useful: the surfactant ensures the solution spreads to and maintains contact with all surfaces, including vertical walls and undercut geometry that plain water would run off. The foam tells you the sanitiser is present and has reached the surface. It is an indicator that the product is doing its job.

Foam inside a fermenter does not need to be removed before filling with wort. The wort addition disrupts the foam mechanically — the volume and density of the incoming wort collapses the bubble structure immediately on contact. The CO₂ produced during fermentation then quickly displaces any residual air in the headspace. The foam from correctly diluted ABNS is not a flavour or safety concern because the concentration of DDBSA it carries is well within the no-rinse margin established above.

### Working dilution — correct preparation

Prepare ABNS at the manufacturer's specified working dilution — typically 4 mL per litre of water (1:250). Do not exceed working dilution: stronger is not better. Higher concentration increases DDBSA surface exposure and post-WDC residue mass without meaningfully improving microbiological efficacy.

Use cold or room-temperature water. Hot water is counterproductive: elevated temperature increases DDBSA partitioning rate into polymer surfaces, making the same sanitiser more aggressive toward PP, EPDM, and silicone than at ambient temperature. Ambient temperature (15–25°C) is optimal.

For a 20 L fermenter, 2–3 litres of working-dilution sanitiser is sufficient for fill-and-drain sanitisation. There is no benefit to filling the vessel completely — the goal is surface contact, not immersion.

### WDC risk — the thing that matters

ABNS non-volatile components (DDBSA and phosphoric acid) cannot evaporate. When ABNS is applied to a surface and the water evaporates, these components remain and concentrate. This is the [wet-dry cycle](./04-wdc-model.md). At complete drying of a 1:250 solution, the concentration factor (CF) reaches 250 — DDBSA goes from working concentration to ~75,000–150,000 ppm (7.5–15%), and phosphoric acid from working concentration to approximately 0.5–2.4 M.

The WDC model describes when this concentration matters and when it does not. For fermenter bodies (Zone A geometry, chemically adequate materials), the accumulation is bounded by post-brew cleaning. For confined geometries and compressed joints (Zones B and C), the concentrated residue has more significant implications.

**Post-brew cleaning is the primary safeguard** — it resets WDC accumulation to zero before the next brew.

### Long-term ABNS storage in equipment

Working-dilution ABNS can be stored in smooth-bore vessels with compatible seals — stainless kegs, PET fermenters, PP buckets — indefinitely, and this is appropriate where the vessel would otherwise sit empty and at risk of contamination. KegLand confirms that [StellarSan](https://www.kegland.com.au/stellarsan-food-grade-sanitiser.html) working-dilution solution can be stored in a FermZilla All Rounder indefinitely without material concern.[^4]

Sustained ABNS storage is *not* a WDC scenario: with liquid present, the water-to-non-volatile ratio is fixed and evaporation cannot concentrate the solution. The WDC mechanism only begins when the vessel is drained and surfaces are exposed to air.

The limit for stored ABNS is elastomeric seals. O-rings, grommets, and gaskets that remain compressed in liquid ABNS undergo sustained chemical exposure — a different mechanism from WDC cycling, but a real one for sensitive elastomers. EPDM is manageable under sustained ABNS contact; NR is not. Replace NR components before storing ABNS in any vessel fitted with them.

---

## ChemiPro DES — ethanol-based sanitiser

ChemiPro DES (Brouwland, distributed by Malt Magnus in Sweden) is an ethanol-based sanitiser containing approximately 80% ethanol by weight.[^7] Its mechanism is different from ABNS: ethanol at 70–80% concentration denatures proteins and disrupts cell membranes through dehydration, killing vegetative bacteria, yeasts, and moulds effectively.

### Why DES is the correct choice for BrewClub Level 1

ChemiPro DES has three properties that make it analytically superior for the beginner context:

**Zero non-volatile residue.** Ethanol and water both evaporate completely. DES leaves nothing on the surface after drying — WDC risk is zero, by definition. There are no DDBSA residues to concentrate, no phosphoric acid accumulation, and no material compatibility implications from residue.

**No dilution required.** DES is used as supplied, directly from the bottle. There is no measuring, no mixing, and no waiting for a concentrate to dissolve. This reduces preparation error to zero.

**A-rated material compatibility.** Ethanol at 70–80% is compatible with all materials commonly used in homebrewing equipment — PP, HDPE, PET, EPDM, silicone, stainless steel, glass, POK. There are no conditional ratings or zone-specific concerns with DES at working concentration.

The BrewClub Level 1 DES protocol is: spray all surfaces to be sanitised, allow 30 seconds contact time, proceed. No draining required, no rinsing required, no foam, no residue.

### DES limitations

Ethanol is flammable. DES must be kept away from open flames and ignition sources — relevant if using a gas burner on brew day. This is a handling note, not a reason to avoid DES; simply apply it before lighting burners.

ChemiPro DES contains 20% undisclosed components beyond ethanol and water. The MaltMagnus SDS lists only ethanol as the hazardous ingredient.[^7] The non-hazardous fraction is not publicly characterised. This is not a safety concern for normal use, but it is a documentation gap for those who want to verify the full composition.

### Spray bottle selection for DES

DES (ethanol at 70–80%) requires a spray bottle with EPDM seals — the same rubber used in bottles designed for alkaline solutions. Silicone is also acceptable. Do **not** use a Viton-sealed spray bottle for DES; Viton rated for acids (the pH 1–9 Biltema bottle) may be polyamine-cured, and polyamine-cured Viton rates *C* (limited compatibility) for ethanol at these concentrations.

A practical option available in Sweden is the Biltema pH 7–14 spray bottle, which uses EPDM seals appropriate for both ethanol and alkaline cleaners. For ABNS, the Birchmeier McProper Plus P has been confirmed by the manufacturer as compatible with disinfectants and acids.

---

## [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) — the caveat

[ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) (Brouwland, distributed by Malt Magnus in Sweden) is an acid-based sanitiser in the same class as the ABNS group above. It is manufactured in Belgium and is widely used in homebrewing. It is treated separately here because the available documentation raises several unresolved questions that go beyond the no-rinse issue.

### Composition — two SDSs, two different answers

Two EU REACH/CLP SDSs exist for ChemiPro San and they do not agree. The Brouwland primary SDS (December 2023) declares phosphoric acid at 25–50% with DDBSA (CAS 27176-87-0) as the surfactant at 5–15%. The MaltMagnus/KemRisk supplier SDS (February 2026) declares phosphoric acid at ≥50–&lt;80% with a different surfactant — secondary alkylbenzene sulfonic acid (CAS 85536-14-7, a branched-chain variant) — at 1–10%.[^cp] These are not minor variations in reported ranges for the same substance. The phosphoric acid ranges do not overlap, and the surfactant CAS numbers identify chemically distinct compounds.

The detergent labelling declaration under Regulation (EC) No. 648/2004 adds a third data point: the MaltMagnus SDS declares anionic surfactants at 15–&lt;30%, which is higher than either SDS's Section 3 would suggest at working concentration. No explanation for these discrepancies has been published by Brouwland or Malt Magnus.

This is a significant documentation problem. For a product that contacts food-preparation equipment, knowing what it actually contains — and in what concentration — is a minimum expectation. The two SDSs cannot both be correct for the same product.

### No-rinse status — unresolved

Brouwland's own materials contradict each other on whether [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) is a rinse or no-rinse product:

- The product page description says it "only requires a contact time of 60 sec" without stating whether rinsing is required
- The directions of use state "Rinse only with clean potable water" — wording that could mean rinsing is mandatory, or could mean that if rinsing is performed, only potable water should be used
- No EU biocide framework approval equivalent to [Sanipro Rinse](https://sanipro.se)'s has been confirmed
- No food-contact no-rinse regulatory basis has been published by the manufacturer

**Position adopted in this documentation:** treat [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) as rinse-required until Brouwland publishes a clear, formal, EU-compliant no-rinse declaration backed by safety data.[^cpb]

### Is ChemiPro San suitable?

The composition discrepancy between the two available SDSs means that the material compatibility analysis — which depends on knowing what is in the product and at what concentration — cannot be completed with confidence. For a product used on food-contact equipment where WDC accumulation and no-rinse approval both depend on understanding the non-volatile residue, this is not a minor gap.

This is not a statement that [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) is unsafe. The chemistry is plausibly similar to [Star San](https://www.fivestarchemicals.com/product/star-san/) and [Sanipro Rinse](https://sanipro.se), and it is widely used in homebrewing without reported problems. But the documentation does not meet the standard applied to other products in this guide. If you use [ChemiPro San](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html), rinse with clean potable water after the contact time until the composition and no-rinse status are formally clarified.

---

## Heat and ethanol as sanitisers

Chemical sanitisers are not required for every piece of equipment on every brew day. Several items are best handled by heat or by ethanol spray without formal contact time:

**Self-sanitising in the process:** the wort chiller sanitises itself by contact with boiling wort during the final minutes of the boil. No pre-sanitisation is required. Brew spoons, paddle stirrers, and similar items used only in hot wort are similarly self-sanitising.

**Boiling water or steam:** glass equipment (hydrometers, test jars), thermometer probes, muslin bags and hop socks. Boiling water kills vegetative bacteria and yeasts effectively. Not appropriate for PET (temperature limit) or most elastomers (unless rated for steam).

**DES flush:** the fastest option for items that need spot sanitisation — the bore of a tap before use, hydrometer before dipping, bottling wand, ball lock disconnects, NukaTap nozzle exterior. Spray or dip, allow 15–30 seconds, proceed. Ethanol evaporates without residue.

**Airlock fill liquid:** fill the airlock with working-dilution ABNS or with undiluted glycerol. DES (ethanol) should not be used as airlock fill — the ethanol concentration at 70–80% is sufficient to kill yeast cells in the unlikely event of suck-back. Working-dilution ABNS at pH ~3.5 is appropriate; the DDBSA concentration is low and any suck-back delivers only a fraction of the already-dilute solution.

**Silicone transfer hose:** three options in ascending order of thoroughness — DES flush (quickest, zero residue, appropriate for single-brew-day use), ABNS flow-through (effective, appropriate for brew-day-use-then-drain discipline), boiling (best, 25–35 minutes total including drain time, appropriate where maximum certainty is needed before extended storage). Silicone is rated for boiling; it is one of the materials where heat sanitisation is genuinely practical.

---

## Sanitiser selection summary

| Scenario | Recommended sanitiser | Rationale |
|---|---|---|
| BrewClub Level 1 — all equipment | ChemiPro DES | Zero residue, no dilution, A-rated compatibility, no WDC risk |
| Bucket fermenter — brew day | ABNS (Sanipro Rinse recommended) | Volume too large for DES economy; fill-and-drain practical |
| FermZilla / PET fermenter — brew day | ABNS or DES | Both appropriate; DES preferred for Oxebar (CO₂ purge method) |
| Long-term storage in vessel | ABNS | DES evaporates; ABNS maintains a sanitised environment |
| Tap bore, fittings, small items | DES spray | Fastest; no residue; adequate contact time easily achieved |
| Silicone hose — pre-storage | Boiling | Maximum certainty for extended storage |
| Airlock fill | Working-dilution ABNS | Correct fill liquid; DES suck-back risk |
| [ChemiPro San](https://www.brouwland.com/en/our-products/cleaning-a-disinfecting/disinfection/chemipro-san/d/chemipro-san-100-ml) | Treat as rinse-required | No-rinse approval not confirmed; composition discrepancy unresolved |

---

[^ph]: Phosphoric acid content of cola drinks: approximately 50–70 mg per 330 mL can, consistent with published food chemistry data for carbonated cola beverages. Phosphoric acid is permitted as a food additive in the EU under designation E338, regulated by [Regulation (EC) No. 1333/2008](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32008R1333) on food additives.

[^las]: Linear alkylbenzene sulfonate (LAS) market share in European household detergents: approximately 70–80% of anionic surfactant use, based on European surfactant industry data (ERASM — European Risk Assessment and Substance Management consortium for LAS). LAS has been the dominant anionic surfactant in European dish soap formulations since replacing branched-chain ABS in the 1960s due to superior biodegradability. A specific dish soap SDS confirming LAS by name has not been obtained — EU labelling under Regulation (EC) No. 648/2004 requires only surfactant class disclosure, not compound name, on consumer labels.

[^1]: Five Star Chemicals, [Star San product page](https://fivestarchemicals.com/star-san) — working dilution stated as 1 oz per 5 US gallons (~1.5 mL/L); contact time stated as at least 1–2 minutes. Accessed April 2026 from [fivestarchemicals.com](https://www.fivestarchemicals.com). SDS (EPA Reg. No. 65001-1, v2.1, November 2020) confirms active ingredients but does not contain use directions.

[^ia]: HomeBrewTalk forum thread, [*Question regarding PPMs of StarSan acid*](https://www.homebrewtalk.com/threads/question-regarding-ppms-of-starsan-acid.294982/) — anecdotal community discussion of DDBSA membrane disruption mechanism. Cited as evidence the mechanism is discussed in the homebrewing community; not a primary source for the mechanism itself.

[^2]: MaltMagnus AB / KemRisk Sweden AB, [*Star San Säkerhetsdatablad*](https://maltmagnus.se/documents/Star%20San-S%C3%A4kerhetsdatablad-v6.0.pdf), v6.0 (January 2026) — EU REACH/CLP format. Active ingredients declared: phosphoric acid 50%, DDBSA (dodecylbensensulfonsyra) 15%. Does not contain dilution ratios, contact times, or no-rinse directions. Accessed April 2026 from [maltmagnus.se](https://maltmagnus.se).

[^3]: Behrens Group AB, *Sanipro Rinse Safety Data Sheet*, v1 (October 2016) — EU REACH/CLP compliant, including Swedish occupational exposure limits. Accessed April 2026 from [sanipro.se](https://sanipro.se).

[^sb]: Hembryggeriet, [Sanipro Rinse 1000ml product page](https://www.hembryggeriet.se/sanipro-rinse-1000ml-skummande-desinfektionsmedel-250) — dosage stated as 12.5–25 mL per 10 L (1:400–1:800); contact time stated as at least 1 minute. Tier 2 retailer source; primary manufacturer instruction sheet not yet obtained. **Open item: request Sanipro Rinse usage instructions directly from Behrens Group AB.**

[^4]: KegLand, *StellarSan Material Safety Data Sheet* — Australian NOHSC format. Accessed April 2026 from [kegland.com.au](https://kegland.com.au) · [`KegLand_StellarSan_MSDS.pdf`](/references/KegLand_StellarSan_MSDS.pdf). The EU market label (KL05357, KegLand EU, Netherlands) carries a GHS/CLP corrosive pictogram, confirming EU regulatory compliance, but a full EU REACH/CLP format SDS has not been confirmed available.

[^kb]: KegLand EU, StellarSan Final Rinse product label (EU market, 500 mL, KL05357) — dilution stated as 1 oz per 5 gallons (1.5 mL/L); contact time stated as minimum 1 minute; no-rinse confirmed ("Do not rinse after application. StellarSan is a 'final rinse' product"). Label carries GHS/CLP corrosive pictogram and lists KegLand EU, Gendt, Netherlands as distributor. Label image accessed April 2026 from [kegland.eu](https://kegland.eu/cdn/shop/files/AfbeeldingvanWhatsAppop2025-09-12om15.14.41_cc5d0b2b.jpg?v=1769781862). Australian label additionally states working dilution delivers 300 ppm DDBSA and 780 ppm phosphoric acid.

[^5]: Chemisphere, *Chemsan Safety Data Sheet*, v2.2.0 (November 2020) — EU REACH/CLP compliant. Accessed April 2026 from [chemisphere.co.uk](https://www.chemisphere.co.uk). Notes surfactant as benzenesulfonic acid (sodium salt form), not DDBSA.

[^cb]: Chemisphere, [*Chemsan Technical Data Sheet and FAQs*](/references/Chemsan-Information-Sheet-FAQs-compressed.pdf) — primary manufacturer document. Dilution: 0.2% (10 mL per 5 L = 2 mL/L); contact time: minimum 2 minutes; no-rinse approved at stated dilution; higher concentrations require a potable rinse. Describes product as "a blend of phosphoric and benzenesulfonic acid and isopropanol." Accessed April 2026.

[^cp]: Two SDSs are available for ChemiPro San and they differ in composition. (1) Brouwland primary SDS, English (GB) v1, 19 December 2023, per Regulation 1907/2006 (REACH) + 2020/878 (EU): phosphoric acid 25–50%, DDBSA (CAS 27176-87-0) 5–15%, propylene glycol 1–5%, tetrasodium glutamate diacetate 1–5%, caprylyl/capryl glucoside 1–5%, sodium/potassium cumene sulphonate 1–5% each. [`Chemipro SAN-GB English-v1.pdf`](/references/Chemipro%20SAN-GB%20English-v1.pdf) · [`Chemipro SAN-Sweden Swedish-v1.pdf`](/references/Chemipro%20SAN-Sweden%20Swedish-v1.pdf). (2) MaltMagnus/KemRisk Sweden AB supplier SDS, v2.0, [16 February 2026](https://maltmagnus.se/documents/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf): phosphoric acid ≥50–&lt;80%, surfactant CAS 85536-14-7 (secondary alkylbenzene sulfonic acid) 1–10%, sodium cumene sulphonate 1–10%, caprylyl/capryl glucoside 1–10% · [`13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf`](/references/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf). The discrepancy in phosphoric acid content and surfactant CAS number between these two SDSs has not been explained or resolved by Brouwland.

[^cpb]: Brouwland, [ChemiPro San product page](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) — dilution 15–25 mL per 10 L (1.5–2.5 mL/L); contact time 60 seconds. Directions state: "Rinse only with clean potable water." This instruction is ambiguous — it may mean rinsing is mandatory, or it may mean that if rinsing is performed, only potable water should be used. No EU biocide no-rinse approval has been confirmed. **Position: treat as rinse-required until formal no-rinse declaration is published.** See ChemiPro San section below.

[^6]: Flavour detection threshold for DDBSA in beer: a specific primary organoleptic study for DDBSA in beer has not been located. The 1–5 ppm figure is based on general sensory science for anionic surfactants in aqueous matrices and is used as a working estimate only. LD50 values from the archived ChemiPro SAN SDS (Brouwland, December 2023, Section 11) · [`Chemipro SAN-GB English-v1.pdf`](/references/Chemipro%20SAN-GB%20English-v1.pdf): DDBSA oral LD50 ~2,000 mg/kg (rat); phosphoric acid oral LD50 2,600 mg/kg (rat), corroborated by the MaltMagnus/KemRisk supplier SDS · [`13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf`](/references/13-ChemiproSan-S%C3%A4kerhetsdatablad-v2.0.pdf).

[^7]: MaltMagnus / Brouwland, *ChemiPro DES Säkerhetsdatablad (Safety Data Sheet)*, v2.0 (February 2026) — EU REACH/CLP, prepared by KemRisk Sweden AB. Accessed April 2026 from [maltmagnus.se](https://maltmagnus.se).
