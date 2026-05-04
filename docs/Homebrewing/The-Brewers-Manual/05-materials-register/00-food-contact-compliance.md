---
sidebar_position: 0
title: Food contact compliance
---

import FoodContactSymbol from '@site/src/components/FoodContactSymbol';
import GlossaryTerm from '@theme/GlossaryTerm';

# Food contact compliance

This page covers the EU regulatory framework that governs food contact compliance for the materials in this register. It applies to any equipment that will come into contact with your beer at any point during production, storage, or serving — fermenters, kegs, taps, tubing, gaskets, airlocks, funnels, and accessories alike. Pages in the materials register refer here for the framework and cover only what is specific to their material: particular additives, relevant migration limits, available DoC data.

## What makes an article food grade?

The answer depends on the material class. For glass and stainless steel, the question barely arises — both are inert and have no meaningful migration into food under any homebrewing condition. Aluminium is inert under neutral conditions but requires appropriate alloy selection and surface treatment for acidic contact. For plastics and elastomers, the picture is more complex, and this is where the EU regulatory framework has the most to say.

For plastics and elastomers, the polymer backbone itself is rarely the concern. High-density polyethylene, polypropylene, PET, and most other common thermoplastics are chemically inert to food in their pure form. The meaningful distinction between food grade and industrial grade lies in the **additive package**.

All commercial thermoplastics contain additives: antioxidants to prevent degradation during moulding, processing stabilisers, slip agents to improve mould release, pigments, and sometimes fillers or flame retardants. These additives are not optional — without them, polymers would degrade during processing and fail prematurely in service. The question is which additives are used.

In food grade articles, the additive package must be drawn entirely from the approved substances list in [EU Regulation 10/2011 Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923), and the migration of each substance into food simulants must stay within its specific migration limit ([SML](/glossary#sml)). Industrial grade versions of the same polymer may use additives not on that list — effective for industrial applications, not assessed for food contact. They are not necessarily harmful; they simply have not been evaluated.

There is also a manufacturing chain requirement. Food grade articles must be produced under [<GlossaryTerm term="GMP">Good Manufacturing Practice</GlossaryTerm> (Regulation 2023/2006)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R2006), which requires controlled production environments free from contamination by non-food substances. The same resin grade, processed in a factory that also handles industrial compounds, may not satisfy GMP even if the resin itself is approved.

## Identifying the material — RIC codes

The <GlossaryTerm term="RIC">Resin Identification Code</GlossaryTerm> (RIC) is a number moulded into the base of plastic articles, surrounded by three chasing arrows. It identifies the polymer family: 1 = PET, 2 = HDPE, 3 = PVC, 4 = LDPE, 5 = PP, 6 = PS, 7 = other. Each material page in this register shows the relevant RIC symbol and explains how to find it on common homebrewing articles.

The RIC is useful for identifying what a piece of equipment is made from when the packaging is gone or the product listing doesn't say. It tells you the polymer backbone — which determines chemical compatibility — but it says nothing about the additive package or GMP compliance. Food grade and industrial grade articles of the same polymer carry the same RIC code.

Not all homebrewing equipment carries a RIC code. Tap bodies, grommets, gaskets, and small fittings are often unmarked. For these, polymer identification depends on the product page, the manufacturer's documentation, or direct confirmation from the retailer. The absence of a RIC code is not itself cause for concern, but it does mean you cannot identify the polymer from the article alone.

## Food contact marking

The fork-and-glass symbol — or the words "for food contact" — are required by [Regulation 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R1935-20090807) for articles intended for food contact, but only "where necessary" given the nature of the article. The regulation leaves room for interpretation, and in practice the marking is inconsistently applied across the homebrewing equipment market.

<div style={{display:'flex', alignItems:'center', gap:'1rem', margin:'0.75rem 0'}}>
  <div style={{background:'#ffffff', borderRadius:'6px', padding:'6px', flexShrink:0, lineHeight:0}}>
    <FoodContactSymbol size={48} />
  </div>
  <span style={{fontSize:'0.85rem', color:'var(--ifm-font-color-secondary)', fontStyle:'italic'}}>The EU food contact material symbol (Regulation 1935/2004, Annex II). Look for this or the words "for food contact" on equipment intended for food use.</span>
</div>

<small style={{color:'var(--ifm-color-emphasis-500)', fontSize:'0.72rem', display:'block', marginBottom:'0.75rem'}}>Symbol: European Union, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=9657707" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>. Modified: fill colour adapted for dark-mode display.</small>

A food storage container or water jerry can from a catering supply chain may reasonably be considered self-evidently food-contact and left unmarked. A fermenter bucket sold through a homebrewing retailer as a food-contact article is in similar territory. But an airlock grommet, a tap body, or a gasket is not self-evidently food-contact — these components originate in industrial, plumbing, and general-purpose supply chains where food contact is not the assumed application. The absence of food contact marking on a grommet or fitting is a meaningful gap, not a trivial one.

Marking is evidence of intent; its absence is not conclusive evidence of unsuitability. But for small components — particularly elastomers such as grommets and gaskets — the burden of establishing food contact suitability falls more heavily on other sources of evidence: the product page, a DoC, or a direct manufacturer confirmation.

The correct standard of evidence is a Declaration of Conformity ([DoC](/glossary#doc)), not the symbol alone.

## "Food safe plastic" — what it means and what it doesn't

It is common in homebrewing product descriptions to be told that equipment is made from "food safe plastic" or "food grade material" without specifying what the plastic actually is or providing any supporting documentation. This is not sufficient information to assess the article properly, and it is worth understanding why.

"Food safe" is a marketing claim, not a regulatory category. EU Regulation 10/2011 establishes food contact compliance — migration testing, GMP, DoC — but it does not create a label or marking called "food safe." A product description that says "food safe plastic" may mean:

- The article uses a well-characterised food grade polymer with an EU 10/2011-compliant additive package and a DoC — the strongest case
- The article uses a common food-contact polymer (PP, HDPE, PET) without a formal DoC — a reasonable but undocumented claim
- The manufacturer has not assessed compliance formally but believes the material is generally safe — a weaker claim
- The claim is carried over from another market's compliance framework (e.g. FDA food contact in the US), which is not equivalent to EU 10/2011

A named polymer — "food grade HDPE" or "food grade PP" — is more informative than "food safe plastic," but still falls short of a DoC. It tells you the polymer backbone and implies an appropriate additive package, but does not confirm GMP compliance or migration testing.

### Using undocumented equipment

This situation is common enough that it deserves a practical response, not just a regulatory note. A Clas Ohlson [Dunken Donje 5-litre water container](https://www.clasohlson.com/se/Dunken-Donje-vattendunk-med-kran,-5-liter/p/34-6995-1) is sold with the description "livsmedelsgodkänd HDPE-plast" — food grade HDPE plastic — and carries no publicly available DoC.[^3] A [Witre bucket](https://www.witre.se/sv/wsw/livsmedelsgodkand-plasthink-med-lock-1794m415) purchased from a catering supplier carries a full DoC. Both are described as food grade. The documentation behind those claims differs substantially.

The same logic applies to any piece of equipment you adapt for brewing use — a water container, a storage jerry can, a tap or valve sourced from a non-brewing supplier, or a standard food-packaging bucket from a supermarket or cash-and-carry. These may be entirely appropriate; the question is how much confidence you can place in the "food grade" claim without documentation.

A reasonable approach for undocumented equipment described as food grade:

- **Identify the polymer.** A named polymer (HDPE, PP, PET) is meaningfully more informative than "food safe plastic." Check the RIC code on the base of the article, or the product description. If neither specifies the polymer, that is a further gap.
- **Check the supply chain.** Equipment from food and beverage, catering, or potable water supply chains is more likely to be genuinely food grade than equipment adapted from general-purpose or industrial supply chains. A Clas Ohlson water container is from a potable water supply chain — reasonable confidence. A generic container from a hardware or agricultural supplier is not.
- **Look for corroborating signals.** The fork-and-glass symbol, "for food contact" text, or "livsmedelsgodkänd" language on the packaging are all supportive. They do not replace a DoC but they indicate food contact intent was part of the product design.
- **Ask for documentation.** A retailer selling equipment as food grade should be able to produce a DoC or direct you to one. If they cannot, the "food grade" claim is unverified.
- **Apply the material's documented limits.** For a well-characterised polymer from a food supply chain, the migration concern under normal homebrewing conditions is low. The limits that matter most are structural and chemical: temperature ratings, cleaning chemistry compatibility. These are covered on each material page.

The honest position: using a food-contact-labelled HDPE water container as a no-chill cube, or a food-grade-described PP bucket as a fermenter, is a reasonable practical choice for most brewers. The material chemistry is well-characterised, the polymer supply chains for food and beverage containers are mature, and the migration risk under normal brewing conditions is low. The documentation gap is real but it does not represent a proportionate safety concern for these specific materials. The same cannot be said for unmarked elastomers — grommets, tap washers, gaskets — where the supply chain is less well-controlled and the material may not be food grade at all.

## What EU compliance testing covers

A DoC under EU Regulation 10/2011 certifies migration testing against five standardised simulants, each standing in for a category of food:

| Simulant | Represents | Test condition |
|---|---|---|
| Distilled water | Aqueous foods | 10 days, 40 °C |
| 3% acetic acid | Acidic foods (pH below 4.5) | 10 days, 40 °C |
| 10% ethanol | Alcoholic beverages up to 20% ABV | 10 days, 40 °C |
| 50% ethanol | Alcoholic products above 20% ABV | 10 days, 40 °C |
| Isooctane | Fatty foods — oils, dairy | 2 days, 20 °C |

The overall migration limit ([OML](/glossary#oml)) across all simulants is 10 mg/dm² of contact surface. Individual substances also have their own specific migration limits (SMLs) set in Annex I.

**The 40 °C test temperature** is deliberately conservative — migration accelerates with temperature, so testing at 40 °C rather than typical fermentation temperatures builds in a margin. That margin narrows for high-temperature fermentation: Kveik strains running at 37–40 °C are near the test temperature, and the conservatism becomes minimal. For standard ale fermentation at 18–22 °C or lager at 8–12 °C, the margin is substantial.

**The 10-day duration** is standardised and conservative for brief contact, but homebrewing contact is often longer — a lager in primary then conditioning can run for months. Extended contact at sub-ambient temperatures is less aggressive than the test conditions (lower temperature means slower migration), but the duration assumption in a DoC is not validated against multi-month scenarios.

**The ethanol simulant and high-ABV beer.** The 10% ethanol simulant covers beverages up to 20% ABV — counterintuitive, but the 40 °C test temperature compensates for the lower ethanol concentration. The simulation covers beer at all strengths and wine. Only spirits above 20% ABV require the 50% ethanol simulant — not a beer fermentation scenario.

**What the simulants do not cover.** There is no simulant for cleaning or sanitising chemistry. The EU food contact framework covers food contact during use — it says nothing about whether the migration profile changes after repeated alkaline cleaning cycles or repeated WDC exposure to ABNS. That question is addressed by the [WDC model](../04-wdc-model.md) and the compatibility sections on each material page.

## What a DoC covers — and what it doesn't

A DoC certifies one specific article, produced by one specific manufacturer, under one specific additive package, tested at the five standard simulant conditions. It does not certify:

- **Additive-level migration data** (unless provided separately). Most DoCs show overall migration only — confirming the result is within the OML of 10 mg/dm²  — not the margin of individual additives against their own SMLs.
- **Cleaning and sanitising chemistry.** No simulant covers ABNS, alkaline cleaners, or DES. What happens to the migration profile after 50 cleaning cycles is not addressed.
- **Repeated use** (unless explicitly tested under Annex V — see below).
- **Homebrewing-specific use.** There is no regulatory category for fermenters, kegs, or brewing equipment. A DoC for a food storage container certifies it as a storage container. Brewers using it as a fermenter are making a reasonable inference, but it is not the intended use case in the DoC.

### DoCs in this guide

The [Witre food grade PP bucket](https://www.witre.se/sv/wsw/livsmedelsgodkand-plasthink-med-lock-1794m415), manufactured by Plast-Box S.A. and sold by Manutan under the Witre brand, is the best-documented food contact article in this guide.[^1] The DoC is issued by Plast-Box as manufacturer, is publicly linked from the Witre product page, and covers migration testing against all five simulants by an accredited laboratory. It is worth being precise about what it establishes: Plast-Box's manufacturing process uses a food grade PP additive package that passes overall migration limits under the five standard simulant conditions at 40 °C. What it does not cover: additive-level migration data against individual SMLs, cleaning and sanitising chemistry, repeated fermentation use, or any homebrewing-specific scenario. The DoC was written for a food storage container, and that is what it certifies.

The [Mr-Malt 5L PP bucket](https://www.mr-malt.se/) DoC (available on request from the retailer) covers the same simulant framework but is explicit about one limitation most DoCs leave implicit: it states directly that the article does not comply with the repeated-use provisions of EU 10/2011 Annex V.[^2] This is not a condemnation of the bucket — it reflects the same practical gap present across the homebrewing market. The DoC was never written to certify dozens of fermentation cycles, and it is more transparent than most for saying so.

These two examples are the only DoCs for homebrewing articles that we have been able to obtain and verify. For all other equipment in the register, material information has been obtained from product pages, manufacturer responses, or inference from RIC codes — not from formal DoCs. This is the honest state of documentation for homebrewing equipment.

## Repeated use

[EU 10/2011 Annex V](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923) requires that repeated-use articles be migration tested three times on the same article, with the third contact result required to comply. The rationale: migration decreases with each successive contact as the most accessible extractable fraction depletes, so passing at contact three provides reasonable assurance that further contacts produce still lower migration.

Three contacts is the regulatory threshold. A fermenter, keg, or tap over its service life may see dozens or hundreds of contact cycles. The framework does not simulate this — it establishes a starting point from which migration is expected only to decrease. An article passing the three-contact protocol would show lower migration at cycle 50 than at cycle 3, not higher. The regulatory gap is documentation, not safety.

Consumable plastic equipment has a finite service life indicated by the condition of the material, not a cycle count. For most thermoplastics, visible surface degradation — crazing, discolouration, persistent staining that does not clean out — is a reliable early warning. Structural changes at the surface precede any meaningful increase in additive migration. A visually intact food grade article presents low toxicology risk from migration. A visibly damaged one should be replaced: not necessarily because migration risk is materially elevated, but because a degraded surface is harder to clean and sanitise effectively.

## If you don't have a DoC

Not having a DoC is not the same as the product being unsafe. For well-characterised polymers — PP, HDPE, PET — used globally in food contact at industrial scale with decades of regulatory history, the absence of per-article documentation is a compliance gap, not evidence of a chemical problem.

A reasonable approach for undocumented food contact equipment:

- **Confirm the polymer.** Check for a RIC code. A confirmed polymer type tells you what the backbone is and which compatibility analysis applies. See each material page in this register.
- **Check for food contact marking.** The fork-and-glass symbol or "for food contact" text is evidence of food contact intent. Equipment sold by a homebrewing retailer carries an implied food contact supply chain, but explicit marking is stronger.
- **Ask for documentation.** A reputable retailer should be able to supply a DoC or direct you to one. If they cannot, that is worth knowing.
- **Apply the material's conservative limits.** Temperature, cleaning contact time, and cleaning chemistry limits vary by material and are not the same across the register. For undocumented equipment, apply the limits for that material's general-purpose grade as described on its material page — do not assume a single safe threshold applies everywhere. Notable examples: PET and PET multilayer (Oxebar) have a maximum alkaline cleaner contact time of 30 minutes and a maximum cleaning temperature of 40 °C regardless of documentation status. Stainless steel has no equivalent constraint. PP and HDPE have no alkaline cleaner contact time limit under normal homebrewing conditions. See individual material pages for specifics.

The limits that matter most depend on the material. For chemically inert polyolefins (PP, HDPE) in normal brewing use — filling with cool wort, fermenting at ambient temperature, cleaning with alkaline cleaners at ambient temperature, sanitising with ABNS or DES — migration risk is the least of the constraints; structural and temperature limits are more likely to be the relevant boundary. For PET, the chemical constraint from alkaline cleaners is a real operational limit that must be observed regardless of food grade status. For elastomers, the picture depends on the specific material and chemistry in contact. The correct place to look is the relevant material page, not a generalisation about "most food grade polymers."

---

[^1]: Witre/Plast-Box DoC — the Declaration of Conformity for the Witre food grade PP bucket (Plast-Box S.A., Słupsk, Poland) is publicly linked from the [Witre product page](https://www.witre.se/sv/wsw/livsmedelsgodkand-plasthink-med-lock-1794m415). It covers overall migration testing against all five EU simulants by an accredited laboratory. Results ranged from less than 0.5 mg/dm² (distilled water, 10% ethanol) to 8.3 mg/dm² (isooctane) — all within the 10 mg/dm² OML. The DoC covers the article as a general-purpose food storage and transport container; it does not address repeated fermentation use, cleaning chemistry, or brewing-specific conditions.

[^2]: Mr-Malt DoC — available on request from the Mr-Malt retailer; not proactively linked from the product page. States directly that the article does not comply with the repeated-use provisions of EU Regulation 10/2011 Annex V. This is the same limitation present in the vast majority of homebrewing vessels; the Mr-Malt DoC is more explicit about it than most.

[^3]: Clas Ohlson Dunken Donje 5L — [product page](https://www.clasohlson.com/se/Dunken-Donje-vattendunk-med-kran,-5-liter/p/34-6995-1) describes the article as "livsmedelsgodkänd HDPE-plast" (food grade HDPE plastic) and states it is approved for drinking water and juice. No DoC is publicly available. The potable water supply chain and explicit HDPE identification make this a reasonable material choice; the absence of a DoC means compliance is unverified from primary documentation.
