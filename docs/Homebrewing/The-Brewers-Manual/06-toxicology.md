---
sidebar_position: 7
title: Toxicology and migration
---

# Toxicology and migration

:::note EU focus
Regulatory references on this page are to EU frameworks: [Regulation (EC) No. 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R1935-20090807) (general food contact), [Regulation (EU) No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923) (plastics), and IARC classifications. US regulatory references (FDA, NSF) appear only where directly relevant to a product or material. EU-specific migration limits (mg/kg food simulant) apply throughout.
:::

The question "is this plastic safe to use with beer?" has two distinct answers depending on what you mean by safe. The first answer is about material compatibility — does the material degrade under contact with beer or cleaning chemicals, and does that degradation compromise the structural function of the component? That answer lives in the [materials register](./05-materials-register/index.md) and the [wet-dry cycle model](./04-wdc-model.md).

The second answer is about toxicology — if the material does degrade, are the degradation products harmful at the concentrations that might reach the beer? That is what this page addresses.

The two questions are related but not the same. A material can degrade mechanically (cracking, swelling, softening) without producing toxic degradation products. And — critically — a material can migrate harmful compounds into beer without showing any visible sign of degradation at all.

## The key principle — and where it fails

For most materials, visible failure precedes meaningful toxicological concern. Chalking, whitening, cracking, dimensional change, surface crazing — these are visible signals that degradation has progressed to the point where the component should be replaced. If you inspect your equipment and it looks intact, the migration risk from those materials is generally low.

**This principle fails for NR/SBR rubber.** N-nitrosamine migration from natural rubber occurs from a structurally intact, visually normal surface. There is no inspection that can detect it. The only reliable safeguard is avoiding NR/SBR in food-contact applications entirely.

This distinction — the one material where the "inspect and replace when damaged" protocol does not provide meaningful protection — is the most important practical point on this page.

## Risk ranking

The risks below are ranked by practical priority: the likelihood that a homebrewer encounters the material, the severity of the toxicological concern, and the degree to which the risk is invisible versus inspectable.

---

### 1. NR/SBR — N-nitrosamine precursors

**Priority: Replace immediately. No exceptions.**

Natural rubber (NR) and styrene-butadiene rubber (SBR) are sulphur-cured rubbers. The sulphur cure system requires amine accelerators — compounds such as dibenzothiazyl disulphide (MBTS) and zinc dibutyldithiocarbamate (ZDBC) — that remain in the cured rubber as residues and continue to migrate into contact liquids over time.[^1]

In mildly acidic conditions — beer pH 4.0–4.5 — these secondary amine accelerator residues can react with trace nitrogen oxides (which are present in fermentation headspace as products of normal yeast metabolism) to form N-nitrosamines. N-nitrosamines are classified by IARC as Group 2A (probably carcinogenic to humans) or higher. Several specific N-nitrosamines (NDMA, NDEA) have well-established carcinogenicity at low concentrations in animal studies.[^1]

The EU has established specific migration limits for N-nitrosamines from rubber food contact materials that are among the most stringent in the entire food contact framework, reflecting the seriousness of the toxicological concern.[^2]

The critical point: **this migration does not require visible failure.** An NR grommet that appears intact, supple, and undamaged is still migrating nitrosamine precursors into beer in contact with it. Temperature accelerates migration — warmer fermentation temperatures increase both the rate of accelerator leaching and the rate of nitrosation. Prolonged contact time (a beer fermenting for two weeks against an NR grommet) accumulates migration that a single brief exposure does not.

NR grommets are present in older bucket fermenter configurations, particularly those sold without formal food contact documentation. Black rubber grommets should be treated with suspicion unless the material is positively confirmed as EPDM. If in doubt, replace with a confirmed EPDM grommet before the next brew. EPDM grommets are widely available, inexpensive, and eliminate this risk category entirely.

SBR is less common in homebrewing applications than NR but carries the same concern and the same recommendation.

**See also:** [Natural rubber (NR/SBR)](./05-materials-register/12-nr.md)

---

### 2. POM (acetal) — formaldehyde migration under degradation

**Priority: High. Inspect and replace any degraded POM fittings immediately.**

Polyoxymethylene (POM, also called acetal) was used in the collar mechanism of DuoTight push-fit fittings in their original design and remains in use in John Guest push-fit fittings. The acetal polymer backbone cleaves under acid or alkaline catalysis, releasing **formaldehyde** as the primary degradation product.

Formaldehyde is an IARC Group 1 carcinogen — classified as definitely carcinogenic to humans. The EU specific migration limit for formaldehyde from food contact materials is 15 mg/kg.[^3] In the DuoTight failure scenario documented by KegLand's design revision, visibly degraded POM collars were releasing formaldehyde into beer flowing through them.[^4]

Visible failure — chalking, whitening, surface dimpling, dimensional change at the collar — generally precedes the most significant migration levels. But early-stage POM degradation that has not yet produced visible surface changes can still release formaldehyde below the migration limit but above zero. The safe position is: replace any POM fitting that shows any surface change, and replace POM fittings proactively in setups where ABNS has been applied to external fittings without rinsing (the [wet-dry cycle](./04-wdc-model.md) mechanism that caused the original DuoTight failures).

KegLand replaced the POM collar with a POK (polyketone) collar in the revised DuoTight design. John Guest fittings continue to use POM. If you have John Guest fittings in a gas or liquid line that contacts beer, and those fittings have been subject to repeated ABNS spray-and-leave exposure without rinsing, inspection and proactive replacement is appropriate.

**See also:** [POM/Acetal](./05-materials-register/08-pom.md), [KegLand DuoTight Design Revision](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf)

---

### 3. PC (polycarbonate) — BPA migration

**Priority: Medium. Largely eliminated from current equipment; legacy items require awareness.**

Polycarbonate (PC) releases bisphenol A (BPA) through hydrolysis of its ester linkage. BPA is not carcinogenic in the IARC classification but is a well-established endocrine disruptor with evidence of biological effects at very low concentrations. The EU has banned BPA in food contact materials for sensitive populations and has set a migration limit of 0.05 mg/kg.[^5]

The hydrolysis pathway is accelerated by alkaline conditions — **hot PBW on PC is the worst-case scenario** for BPA release, producing the combination of high pH and elevated temperature that drives ester bond cleavage most rapidly. Beer contact at ambient temperature and beer pH (~4.0–4.5) drives hydrolysis more slowly; the acidic conditions actually slightly suppress it. But ethanol in beer increases BPA solubility and migration.

PC carboys, auto-siphons with PC bodies, and site glasses are the homebrewing items most likely to contain PC. Most current equipment has moved away from PC — current KegLand site glasses use materials other than PC. But if you have older PC equipment or are uncertain about the material, avoid hot alkaline cleaning and minimise sustained beer contact time.

Visual inspection does not reliably indicate whether BPA migration is occurring — PC can appear intact while slowly releasing BPA below structural failure threshold.

**See also:** [Polycarbonate (PC)](./05-materials-register/06-pc.md)

---

### 4. PS (polystyrene) — styrene migration

**Priority: Low to medium. Material- and context-specific.**

Polystyrene (PS) releases styrene monomer as its primary migration concern. Styrene is an IARC Group 2A carcinogen (probably carcinogenic to humans). The EU specific migration limit for styrene from PS food contact materials is 0.045 mg/kg — among the most conservative in the EU food contact framework, reflecting the carcinogenicity classification.[^3]

The relevance to homebrewing is primarily through **airlocks**. Many compact and S-shaped airlocks are manufactured from general-purpose polystyrene (GPPS). DDBSA — the active ingredient in ABNS — has a π–π stacking interaction with the aromatic rings in PS that can mobilise residual styrene monomer and oligomers from the PS matrix. At working-dilution ABNS concentrations this effect is limited. At the CF=250 dry residue conditions produced by the [wet-dry cycle](./04-wdc-model.md), it becomes more significant.

The specific scenario of concern: a PS airlock used as a reservoir for working-dilution ABNS fill liquid, subject to repeated wet-dry cycling as the airlock top evaporates and is refilled. This geometry (confined, not drained, repeatedly re-wetted) produces conditions closer to sustained WDC exposure than a fermenter body. A better practice: use working-dilution ABNS or undiluted glycerol as airlock fill, not repeatedly topping up — or confirm that the airlock is SAN (styrene-acrylonitrile copolymer) rather than GPPS.

**GPPS vs. SAN:** SAN is a copolymer that does not share the π–π interaction vulnerability. Many airlocks are SAN rather than GPPS, but the distinction is not reliably documented by homebrew equipment manufacturers. The Enolandia compact airlock material has not been confirmed to this documentation (confirmation request pending). Until confirmed, treat unknown PS airlocks as GPPS and minimise sustained ABNS contact with the airlock body material.

**See also:** [PS and SAN](./05-materials-register/05-ps-san.md)

---

### 5. DDBSA in beer from ABNS residue

**Priority: Negligible in normal use. Calculated, not assumed.**

The [wet-dry cycle model](./04-wdc-model.md) provides the quantitative answer: approximately 4.2 mg of non-volatile DDBSA and phosphoric acid residue remains on the interior surfaces of a 20 L fermenter after correct gravity drainage. When wort is added, this residue dissolves and produces a DDBSA concentration of approximately **0.21 ppm** in the wort.

The flavour detection threshold for DDBSA in beer is approximately 1–5 ppm. The worst-case calculation produces a concentration 5–25 times below the flavour threshold, and orders of magnitude below any acute toxicological threshold.

The calculation is important precisely because it is a calculation, not an assertion. "Don't worry about Star San foam" is a common homebrewing instruction; the WDC model shows *why* that instruction is valid, and where the margin is, so you can evaluate it rather than simply accepting it.

The margin is not thin. You would need approximately 40,000 pints of beer made in this fermenter to approach the acute oral toxicity threshold for DDBSA. The no-rinse approval is validated by the numbers.

---

### 6. Microplastics

**Priority: Low. Sources predominantly environmental. Discussed separately.**

Microplastics are present in beer regardless of packaging material — including in glass-bottled commercially produced beer, which in some studies contains higher microplastic counts than PET-bottled beer. The sources are predominantly environmental and process-related. The risk from homebrewing plastic equipment specifically is not meaningfully elevated compared to commercial production.

This topic is developed fully in the [Microplastics](./07-microplastics.md) page. The toxicology risk ranking here reflects the current scientific position that microplastics in beer at measured concentrations have not been shown to cause harm at doses typical of beer consumption, while acknowledging that the evidence base is incomplete.

---

## The regulatory framework

Food contact materials in the EU operate under [Regulation (EC) No. 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R1935-20090807), which establishes the general principle that materials must not transfer constituents to food in quantities that endanger human health, bring about an unacceptable change in the composition of the food, or bring about a deterioration in the organoleptic characteristics of the food.

Plastics are regulated specifically under [Regulation (EU) No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923), which sets specific migration limits (SML) for listed monomers and additives, an overall migration limit (OML) of 10 mg/kg food simulant, and a positive list of permitted substances. Materials complying with Regulation 10/2011 and carrying a Declaration of Conformity (DoC) have been assessed for migration within the constraints of that regulation.

The EU migration limits cited on this page — formaldehyde (15 mg/kg), styrene (0.045 mg/kg), BPA (0.05 mg/kg) — are SML values from Regulation 10/2011 Annex I.

**A DoC is necessary but not sufficient.** Compliance with Regulation 10/2011 is assessed under standardised test conditions. Non-standard use — elevated temperatures, ABNS cleaning agents, repeated wet-dry cycling — can produce conditions outside the scope of the compliance testing. The analysis in this documentation addresses these non-standard conditions directly.

---

## Dose-response and the precautionary position

For most substances, regulatory migration limits are set at levels where risk assessment frameworks consider exposure acceptable — not zero, but within a range judged to carry negligible risk given normal patterns of food consumption. For a homebrewer consuming perhaps 50–100 litres of their own beer per year from equipment they control, the aggregate exposure from any single migration source is expected to be very low.

For carcinogens and endocrine disruptors — formaldehyde, styrene, BPA, N-nitrosamines — there is legitimate scientific debate about whether safe thresholds exist at all. The regulatory limits are set based on risk assessment models; they are not statements that exposure below the limit carries no risk. For homebrewers, the correct precautionary position is: **avoid exposure where practical, without treating the concern as greater than the evidence supports.**

Replacing an NR grommet with EPDM is practical, inexpensive, and eliminates a category of risk entirely. That is the right response to the nitrosamine concern. Discarding a functional PET fermenter because microplastics are detectable in beer from all sources is a response that is not proportionate to the evidence.

---

[^1]: Conversation research — N-nitrosamine formation mechanism from sulphur-cured NR/SBR, accelerator residues as precursors, Council of Europe Resolution AP(2004)5. See [Natural rubber (NR/SBR)](./05-materials-register/12-nr.md) for full citations.

[^2]: Council of Europe Resolution AP(2004)5, *On rubber articles intended to come into contact with foodstuffs* — Appendix: specific migration limits for N-nitrosamines and N-nitrosatable substances.

[^3]: [EU Regulation No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923) on plastic materials and articles intended to come into contact with food — Annex I, specific migration limits: formaldehyde 15 mg/kg; styrene 0.045 mg/kg; BPA 0.05 mg/kg.

[^4]: KegLand, [*DuoTight Design Revision*](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf) — accessed April 2026 from [kegland.com.au](https://kegland.com.au) · [`duotight_design_revision.pdf`](/references/duotight_design_revision.pdf).

[^5]: [EU Regulation No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923), Annex I — BPA specific migration limit 0.05 mg/kg. EU restriction of BPA in food contact materials is further addressed in Commission Regulation (EU) 2018/213.
