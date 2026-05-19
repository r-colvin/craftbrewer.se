---
sidebar_position: 4
title: Polystyrene — GPPS and SAN
---

import ResinCode from '@site/src/components/ResinCode';
import GlossaryTerm from '@theme/GlossaryTerm';

# Polystyrene — GPPS and SAN

| | ABNS | DES | Cleaning | Beer/wort |
|---|---|---|---|---|
| **GPPS rating** | B (working dilution) / D (WDC) | B | A | A |
| **SAN rating** | A | A | A | A |

*The Cleaning column aggregates all cleaning product categories used in homebrewing at working concentrations. For a breakdown by cleaner type — alkaline percarbonate, phosphate-based, and oxidising — see the Cleaning compatibility section below.*

This page covers two chemically related but practically different materials. Both are styrene-based, both are transparent, and in the homebrewing articles identified so far, both appear primarily in compact airlocks. They look identical in service. The similarity ends at appearance. General-purpose polystyrene (GPPS) is amorphous, brittle, and chemically vulnerable to the surfactant component of ABNS sanitisers. Styrene-acrylonitrile copolymer (SAN) is harder, more chemically resistant, and rates **A** for ABNS where GPPS does not. The page addresses both because the entire practical question is which one you have — and how to find out.

## Identifying PS and SAN

General-purpose polystyrene carries <GlossaryTerm term="RIC">Resin Identification Code</GlossaryTerm> 6 — three chasing arrows with the number **6** inside and **PS** below.

<div style={{display:'flex', alignItems:'flex-start', gap:'1.25rem', margin:'0.75rem 0'}}>
  <div style={{background:'#ffffff', borderRadius:'6px', padding:'8px', flexShrink:0, lineHeight:0}}>
    <ResinCode code={6} abbr="PS" size={72} />
  </div>
  <div style={{fontSize:'0.9rem'}}>
    <p style={{marginTop:0, marginBottom:0, color:'var(--ifm-font-color-secondary)', fontStyle:'italic'}}>The RIC 6 symbol as it appears on <a href="/glossary#ps">PS</a> articles. SAN carries no standard RIC code of its own and may appear under the same marking, or unlabelled.</p>
  </div>
</div>

<small style={{color:'var(--ifm-color-emphasis-500)', fontSize:'0.72rem'}}>
  RIC symbol: Anton Poliakov, <a href="https://commons.wikimedia.org/w/index.php?curid=82815783" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Modified: fill colour adapted for dark-mode display.
</small>

As with all RIC markings, code 6 is voluntary — many PS articles carry it, many do not. SAN has no dedicated RIC code of its own; it falls under the general category 7 ("other") in the RIC system, or it may carry a RIC 6 marking if the manufacturer has used that code loosely for styrene-based materials. A RIC 6 marking does not confirm GPPS; it identifies a styrene-based polymer, which could be GPPS or SAN. A RIC 7 marking on a transparent rigid article in this context should prompt the question of whether the material is SAN.

Visually, GPPS and SAN are nearly indistinguishable: both are highly transparent, water-clear, and rigid. GPPS tends to be slightly more brittle and may show a faint bluish tint in thin sections; SAN is marginally harder and may have a very slight yellowish cast. Neither difference is reliable as a primary identification method — a product specification or manufacturer confirmation is needed.

The only confirmed PS article in this register is the [Enolandia compact airlock](https://www.enolandia.it/en/prodotto/air-lock-compact-medium-for-container-up-to-60lt-2/). It is sold standalone and as part of beginner kits — including the [Mr-Malt 5 L complete fermenting pail](https://mr-malt.se/en/equipment/fermenting/plastic-fermenters/fermenting-pail/complete-fermenting-pail-5-l) and Georges Beer kits, also from Enolandia. The airlock is stamped with its patent number, and Enolandia confirmed in direct correspondence that the material is "usually polystyrene."[^1] The grade — GPPS or SAN — has not been confirmed. The practical consequences of that open question are addressed throughout this page.

:::note Images
*Images showing the Enolandia compact airlock, a typical RIC 6 marking on a PS article, and the visual similarity between GPPS and SAN articles — with guidance on where to look for material information — are planned for this section.*
:::

## Food grade status

The full food contact compliance framework — what makes an article food grade, <GlossaryTerm term="GMP">GMP</GlossaryTerm> requirements, EU simulant testing, <GlossaryTerm term="DoC">DoC</GlossaryTerm> structure, repeated-use provisions, and what to do without a <GlossaryTerm term="DoC">DoC</GlossaryTerm> — is covered on the [Food contact compliance](./00-food-contact-compliance.md) page. This section covers only what is specific to GPPS and SAN.

### What makes a PS or SAN article food grade?

For both materials, the polymer backbone is not the primary food safety concern in finished articles — the distinction between food grade and industrial grade lies in the **additive package**: processing stabilisers, antioxidants, and mould release agents. In food grade articles, these must be selected from the approved substances list in [EU Regulation 10/2011 Annex I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923) and must pass migration testing against each substance's <GlossaryTerm term="SML">specific migration limit</GlossaryTerm>.

However, both monomers carry their own <GlossaryTerm term="SML">SML</GlossaryTerm>s that place them in a different regulatory position from polypropylene or HDPE:

- **Styrene:** <GlossaryTerm term="SML">SML</GlossaryTerm> 0.045 mg/kg under [EU Regulation 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923). This is among the stricter limits in the regulation, reflecting styrene's classification as a possible carcinogen (IARC Group 2B) at elevated exposure levels. In a compliant, undamaged food grade PS article under normal cold aqueous contact, migration is well within this limit. The concern rises if the surface is physically degraded — crazing and cracking increase the surface area available for migration and break the compliance basis for the article.
- **Acrylonitrile (SAN only):** SML of not detectable (&lt;0.010 mg/kg) — the strictest category. The acrylonitrile content of SAN is typically 20–30% by mass, but in finished articles the residual monomer is extremely low. SAN articles meeting EU 10/2011 requirements are assessed as safe; the limit reflects regulatory caution about acrylonitrile as a genotoxic carcinogen, not a practical expectation of significant migration from compliant articles.

A <GlossaryTerm term="RIC">RIC</GlossaryTerm> code — whether 6 or 7 — says nothing about food grade status or GMP compliance. The food contact symbol (fork-and-glass), where present, confirms the article is intended for food contact use; it does not on its own confirm migration testing or DoC documentation.

### PS and SAN food contact in practice

No Declaration of Conformity has been retrieved for any PS or SAN airlock or other small homebrewing article in the Swedish or European homebrew market. For the food contact compliance framework — what this means, how to assess undocumented equipment, and examples of what a DoC covers and does not cover — see the [Food contact compliance](./00-food-contact-compliance.md) page.

The Enolandia compact airlock carries the fork-and-glass food contact symbol and, per direct manufacturer correspondence, "all our raw materials" are certified for food contact.[^1] This is a manufacturer claim, not a DoC — there is no publicly available migration testing document for this product. For an article in the normal use pattern — airlock liquid trap filled with water, brief ABNS contact during sanitisation — the chemical inertness of the polymer bulk means migration from undamaged equipment at ambient fermentation temperatures is not the primary concern. The concern for PS specifically, which this page addresses, is surface degradation from ABNS contact, which would invalidate the food contact basis — not migration from an undamaged surface.

## Temperature limits

GPPS and SAN both have relatively modest temperature limits by the standards of this register.

**GPPS** has a <GlossaryTerm term="HDT">heat deflection temperature</GlossaryTerm> of approximately 70–80 °C for unfilled, unstressed material — but this is the material HDT, not the article limit. GPPS is also notably brittle: thermal shock from rapid temperature changes (such as pouring hot water into a cool airlock) can cause fracture at temperatures well below the HDT. The material is not appropriate for dishwasher use — a point consistent with Enolandia's product guidance and with the known behaviour of GPPS under repeated thermal cycling.

**SAN** has a slightly higher HDT, typically 85–100 °C, with better thermal shock resistance than GPPS due to the acrylonitrile co-monomer stiffening the chain. SAN is used for transparent kitchenware — measuring jugs, mixing bowls, food storage lids — that is expected to handle warm but not boiling liquids. Like GPPS, it is not suitable for dishwasher use.

For airlocks specifically, temperature limits are rarely the operative constraint — airlocks are small, low-stress components operating at ambient fermentation temperatures. The relevant temperature concern is during sanitisation and cleaning:

- **Hot water sanitisation:** Not appropriate for PS or SAN airlocks. Use ABNS or DES at ambient temperature.
- **Hot liquid contact:** PS and SAN are not appropriate for contact with wort or liquid above approximately 40 °C. Airlocks are fitted after the fermenter is sealed and the wort has cooled — this is not a concern in normal practice, but if an airlock is accidentally exposed to hot steam or condensate, inspect it before reuse.
- **Cleaning temperature:** Always clean at ambient temperature.

**Migration at elevated temperature.** The styrene SML of 0.045 mg/kg is established for standard test conditions. Elevated temperature accelerates monomer migration from PS significantly. For an undamaged article at ambient fermentation temperature (16–22 °C), migration is expected to be well within limits. For a damaged or crazed article, or for any exposure above ambient, the compliance basis no longer applies.

## Compatibility — ABNS: GPPS B/D, SAN A

This section determines the practical significance of the page. GPPS and SAN have fundamentally different ABNS compatibility profiles, and the mechanism explains why.

### The mechanism — why GPPS is vulnerable

GPPS is an amorphous polymer with pendant phenyl groups along the chain backbone. DDBSA — the surfactant component of ABNS, present at approximately 300 ppm in working-dilution StellarSan — carries an aromatic benzene ring that interacts with the PS phenyl groups through aromatic π–π stacking. This facilitates DDBSA's penetration into the polymer matrix. The surfactant reduces the surface energy of the polymer and lowers the energy required to propagate a crack from an existing surface defect — the mechanism is <GlossaryTerm term="ESC">environmental stress cracking</GlossaryTerm> (ESC).

Injection-moulded GPPS articles always carry residual moulding stresses, particularly at the gate, at thin-to-thick transitions, and at geometric stress concentrations — the stem of a compact airlock where it seats in the grommet is a typical example. These stressed zones are where ESC initiates. The crack propagates from the surface inward, visible as **crazing**: a network of fine surface cracks that scatter light, turning the previously clear material white or hazy.

At working dilution (300 ppm DDBSA), the driving force for DDBSA to penetrate the GPPS surface is reduced but present. Repeated contact produces gradual surface degradation — rated **B**. Under [WDC](../04-wdc-model.md#what-a-wet-dry-cycle-actually-is) conditions — DDBSA concentrated in the dry residue at [CF](../04-wdc-model.md#the-concentration-factor)≈667, approximately 200,000 ppm in the dry film — the interaction is severe. The concentration driving force for DDBSA to partition into the polymer matrix is much higher, and ESC at stressed geometry proceeds rapidly — rated **D**.

The [ISM chemical compatibility chart](https://www.industrialspec.com/images/files/polypropylene-chemical-compatibility-chart-from-ism.pdf) rates PS as D for dodecylbenzene sulfonate (DDBSA) — severe effect under sustained contact conditions.[^2] This is consistent with the mechanism.

### The mechanism — why SAN is resistant

SAN introduces acrylonitrile co-monomer into the chain, typically at 20–30% by mass. The acrylonitrile groups are polar — they disrupt the regular aromatic structure that makes GPPS vulnerable. Two effects:

1. **Reduced π–π stacking:** The acrylonitrile groups interrupt the phenyl group spacing along the chain, reducing the regularity of aromatic interactions that facilitate DDBSA penetration.
2. **Polar character:** The nitrile group creates dipole interactions that compete with DDBSA's tendency to wet the surface and penetrate the matrix.

The net result is substantially better resistance to anionic surfactants compared to GPPS. SAN rates **A** for ABNS at working dilution and under WDC conditions. The ISM chart is consistent with this rating.[^2]

### Epistemic honesty — what is known and what is not

No published damage threshold exists for DDBSA on GPPS airlocks specifically. The B and D ratings on this page are chemistry-based assessments derived from ESC literature, ISM chart data, and the mechanism above — not from a measured cycle count at which visible crazing appears. The cycle count before visible damage depends on the stress state of the specific moulding, geometry, residue per cycle, and temperature. What the chemistry establishes is the direction and severity: GPPS is vulnerable; the WDC scenario is the worst case; SAN is not.

Enolandia's manufacturer claim — that Star San and ethanol work well with their PS airlocks — is direct primary evidence that should not be dismissed.[^1] It is probably accurate for the typical use pattern: brief spray-and-drain sanitisation contact. The claim is less clearly supported for the scenario of filling the airlock with working-dilution ABNS as the fermentation fill liquid for two or more weeks, which is the instruction in at least one beginner kit sold with this airlock. Whether Enolandia's claim covers sustained immersion at fermentation temperatures is not stated in the correspondence. The distinction matters and is addressed in the practical section below.

### DuoTight cross-reference

The contrast between GPPS and chemically robust materials is illustrated most clearly in the [DuoTight case study](../case-studies/duotight.md), which covers the POM-to-POK design revision driven by WDC failure. The mechanism there — DDBSA-driven ESC at stressed geometry — is the same mechanism that operates on GPPS at thread-seat and stem geometries. PP and HDPE avoid it through backbone chemistry; SAN substantially reduces it through co-monomer disruption; GPPS does not.

### ABNS and the Enolandia airlock — the zone analysis

The Enolandia compact airlock has two zones of ABNS contact in normal use:

**Outer surfaces (sanitisation contact).** During ABNS sanitisation, the outer body contacts working-dilution ABNS, drains, and dries. This is a [Zone A](../04-wdc-model.md#zone-a--open-surfaces) scenario — open surface, drains freely, residue accumulates per cycle. For GPPS, each sanitise-and-dry event is a WDC: DDBSA concentrates to approximately 200,000 ppm in the dry film at CF≈667 — rated **D**. Repeated cycles accumulate WDC exposure on the outer surface with no reset mechanism except thorough washing.

**Liquid trap fill liquid.** The trough of the compact airlock holds fill liquid throughout fermentation — typically one to two weeks. If that liquid is working-dilution ABNS, it is in sustained contact with the inner surfaces at CF=1 (no evaporation, no concentration). For GPPS, sustained immersion at working dilution is rated **B** — the surfactant is present continuously, not episodically. The inner geometry of a compact airlock trap is also partially confined — closer to [Zone B](../04-wdc-model.md#zone-b--confined-geometry) than a flat open surface — meaning any residue does not drain as completely.

For SAN, both scenarios rate **A**.

| Article | Zone | ABNS — GPPS | ABNS — SAN |
|---|---|---|---|
| Airlock outer body (sanitisation) | [Zone A](../04-wdc-model.md#zone-a--open-surfaces) — drains after sanitising | B at working dilution; D at WDC residue | A |
| Airlock liquid trap (fill liquid) | [Zone B](../04-wdc-model.md#zone-b--confined-geometry) — sustained contact | B (sustained; no WDC concentration) | A |
| Airlock stem at grommet seat | [Zone B](../04-wdc-model.md#zone-b--confined-geometry)/[C](../04-wdc-model.md#zone-c--compressed-contact-under-sustained-stress) — compressed contact | B–D; highest ESC risk | A |

**Structural vs migration — two distinct concerns.** The analysis above addresses structural degradation — crazing, embrittlement, dimensional loss — which is the primary consequence of DDBSA-driven ESC on GPPS. There is a second concern that follows from structural degradation: if the GPPS surface crazes, the degraded surface presents higher accessible area for styrene monomer migration. Migration from an undamaged GPPS surface at ambient temperature is not expected to approach the 0.045 mg/kg SML. Migration from a crazed and degraded surface is not assessed — the compliance basis for the article no longer applies once visible damage is present. Retire and replace any airlock showing crazing or whitening. The cost of an airlock is not the cost of a batch.

:::note WDC accumulation charts
Per-material accumulation charts — mapping WDC exposure against damage thresholds by zone — are in preparation and will be added to this register.
:::

## Compatibility — DES: GPPS B, SAN A

GPPS and SAN behave differently with ethanol, and the mechanism is different from ABNS.

For **GPPS**, ethanol at 70–80% in sustained contact causes swelling of the PS matrix. Ethanol is a small molecule that can penetrate between the amorphous chains, causing them to swell and separate. Repeated swelling-and-drying cycles fatigue the surface polymer, leading to microcrack formation over time. The ISM chart rates PS as D for ethanol at standard engineering concentrations under sustained contact.[^2] The typical DES use pattern in homebrewing is spray-and-drain, not sustained immersion, and Enolandia's manufacturer claim explicitly includes ethanol compatibility.[^1] For a brief spray contact followed by draining, the practical effect is much less severe than a sustained immersion scenario — the exposure time is short and the driving force for ethanol to penetrate the matrix is lower. For that reason, brief spray-and-drain contact is rated **B** rather than D, consistent with Enolandia's observed compatibility.

The fill liquid scenario is different. Filling the liquid trap of a GPPS airlock with undiluted DES (70% ethanol) for the duration of fermentation — several weeks — is a sustained immersion scenario. This is not appropriate. Use water as the fill liquid.

For **SAN**, ethanol resistance is significantly better. The acrylonitrile co-monomer disrupts the regular chain packing that allows ethanol to penetrate GPPS, and SAN's higher polarity reduces swelling by organic solvents. SAN rates **A** for DES at the spray-and-drain contact pattern used in homebrewing.

**DES fill liquid.** Neither GPPS nor SAN should be used with ethanol as the sustained fill liquid — GPPS for the swelling reason above, and as a general preference regardless of material: water entering the fermenter on suck-back has fewer consequences than any chemical fill. Use water as the airlock fill liquid.

## Compatibility — cleaning: GPPS A, SAN A

For both GPPS and SAN, the primary cleaning contact scenario is the routine post-brew clean — a brief soak in alkaline percarbonate cleaner, rinse, inspect. Both rate **A** for all standard homebrew cleaning categories at working concentrations and ambient temperature. The constraint is mechanical, not chemical: airlocks must never be cleaned with brushes or abrasive pads. Scratches trap biofilm and create stress concentration points where ESC initiates in GPPS.

:::note KegLand StellarClean and Five Star PBW
Both are commonly called "PBW." KegLand markets StellarClean as *Powerful Brewery Wash*; Five Star makes a separate product, *Powdered Brewery Wash*. Different products, different formulations — but both rate **A** for PS and SAN at working concentrations and ambient temperature. The guidance below applies equally to either product.
:::

**[Alkaline percarbonate cleaners](../03-cleaning.md#alkaline-percarbonate-cleaners) (Five Star PBW, StellarClean, ChemClean, ChemiPro Wash, Enzybrew 10):** Sodium percarbonate at pH 11–12, releasing hydrogen peroxide and sodium carbonate in solution. PS and SAN are not susceptible to alkaline hydrolysis or oxidation from these formulations at working concentrations. A brief soak at ambient temperature to loosen soils, followed by a gentle rinse, is appropriate. Do not soak at elevated temperature — the articles' modest temperature limits are the constraint, and there is no benefit to cleaning hot for airlock articles. Enolandia explicitly state PBW and StellarClean are suitable for their airlocks.[^1] Rating: **A**.

**Phosphate-based alkaline cleaners (Grainfather High Performance Cleaner):** Sodium tripolyphosphate (STPP) with trace metasilicate. PS and SAN are resistant to STPP and phosphate-based formulations at homebrewing concentrations. Rating: **A**.

**Oxidising cleaners (ChemiPro OXI, StellarOxy):** Purely oxidative action — PS and SAN are not susceptible to oxidation at these conditions. Rating: **A**.

**Caustic cleaners (NaOH-based):** Out of scope for this guide — see the [Cleaning](../03-cleaning.md) page. NaOH at high concentration and elevated temperature can attack PS, but this is not a homebrewing cleaning scenario.

## Compatibility — beer/wort: GPPS A, SAN A

For all standard beer and wort contact scenarios in homebrewing, both GPPS and SAN rate **A**. Beer and wort are aqueous systems at moderate pH — they do not present the surfactant or organic solvent challenges that make GPPS vulnerable to ABNS or DES.

**Standard wort (pH 5.0–5.4, ambient):** Weak organic acid environment. Both materials are resistant. For an airlock in normal use, wort does not contact the airlock body — the fill liquid separates wort from the airlock. Suck-back of fill liquid into the fermenter is addressed in the practical section.

**Standard beer (4–8% ABV, pH 4.0–4.4):** Not materially different from wort contact for PS or SAN. No concern.

**High-ABV beer (above 8%):** Ethanol at 8% is far below the concentrations that concern PS or SAN. No concern.

**Sour beer (pH 3.2–3.5, lactic and acetic acid dominant):** Both materials are resistant to dilute organic acids at homebrewing concentrations. No concern.

**Hot wort:** Airlocks are not present during hot wort handling. Not relevant.

## PS and SAN in homebrewing — the practical picture

PS and SAN appear in homebrewing in the articles identified so far primarily as compact airlocks. The most thoroughly documented example in this register is the [Enolandia compact airlock](https://www.enolandia.it/en/prodotto/air-lock-compact-medium-for-container-up-to-60lt-2/), sold standalone at [Mr-Malt](https://mr-malt.se/en/equipment/fermenting/accessories/airlocks/compact-2-piece-airlock-mini) and included in beginner kits such as the [Mr-Malt 5 L complete fermenting pail](https://mr-malt.se/en/equipment/fermenting/plastic-fermenters/fermenting-pail/complete-fermenting-pail-5-l) and Georges Beer kits. Its compact form factor suits fermenters where headspace is limited — the 5 L Mr-Malt pail, for example — and its two-piece design is quieter than bubble-trap airlocks. These are genuine advantages. The material question does not make the airlock bad; it makes the process matter.

The practical question is straightforward: **what grade is it?** Enolandia's direct response states "usually polystyrene" and confirms food contact certification and compatibility with Star San and ethanol.[^1] They did not confirm the specific grade. If the material is SAN, all ratings are **A** and the fill liquid choice is a preference rather than a safety question. If the material is GPPS, the fill liquid and sanitisation protocol both require attention.

**Until grade confirmation is received from Enolandia, treat the airlock as GPPS and apply the guidance below.**

### What PS airlocks are good for

With the right process, GPPS airlocks are suitable for repeated homebrewing use:

- Brief ABNS spray-and-drain sanitisation is consistent with Enolandia's compatibility claim and with the mechanism analysis — acceptable, with attention to thorough draining before adding fill liquid.
- Water as the fermentation fill liquid — the correct choice regardless of grade.
- Routine inspection for crazing or whitening before each use.
- Replacement at the first sign of surface degradation.
- Beer and wort contact at ambient fermentation temperatures — the chemistry concern is with ABNS and DES, not with the fermented product.

### What PS airlocks are not good for

- **ABNS as fill liquid.** Do not fill the liquid trap with working-dilution ABNS for the duration of fermentation. This is sustained surfactant contact — rated **B** for GPPS — and is not clearly covered by Enolandia's general compatibility claim. Despite this being the instruction in at least one beginner kit sold with this airlock, it is not appropriate for confirmed or assumed GPPS.
- **Ethanol as fill liquid.** Do not fill the liquid trap with undiluted DES. Use water.
- **Hot water sanitisation or dishwasher use.** Thermal stress on GPPS causes cracking. Use ABNS or DES at ambient temperature.
- **Abrasive cleaning.** Never use brushes or abrasive pads on PS airlocks. Scratches create stress concentration points that accelerate ESC.

### Sanitising PS and SAN airlocks

Brief ABNS contact during sanitisation — spray or dip for the manufacturer's recommended contact time, then drain — is consistent with Enolandia's claim and with the mechanism analysis above. The outer body drains. The liquid trap may retain a small volume; shake gently to drain as fully as possible, then allow to air-dry before adding the fill liquid. Brief DES spray contact is also compatible for both grades on the same basis.

**Fill liquid after sanitisation: water.** Not ABNS, not ethanol. This applies to GPPS (for the reasons above) and to SAN as a general best practice — water entering the fermenter on suck-back has fewer consequences than any chemical fill. Working-dilution ABNS as airlock fill liquid is sometimes recommended in beginner kit instructions; it is not appropriate for PS airlocks regardless of grade.

### Migration

For an undamaged GPPS airlock at ambient fermentation temperatures, styrene migration into the water fill liquid is expected to be well within the 0.045 mg/kg SML. The concern arises if the surface is crazed or damaged (the compliance basis no longer applies), if the fill liquid is ABNS (which drives surface interaction), or if the airlock is exposed to elevated temperatures.

For SAN, the same logic applies to acrylonitrile (SML: not detectable) — undamaged surfaces at ambient temperature are not expected to present a concern; damaged surfaces are untested.

The airlock fill liquid volume is small and does not contact the beer under normal conditions. Suck-back of fill liquid into the fermenter is possible under temperature differentials (cold crash, overnight temperature drop). The volume sucked back is small — typically a few millilitres — but it is the scenario where fill liquid choice matters most. Water suck-back into a fermenter: inconsequential. Chemical fill suck-back: introduces whatever is in the fill liquid, concentrated into a small volume. This is the additional practical reason to use water regardless of material.

### Cost and service life

Compact PS airlocks are inexpensive. Treat them as consumables. Inspect before each use; replace at the first sign of crazing, whitening, or loss of clarity. A crazed PS airlock — where the styrene migration basis no longer applies and where biofilm can colonise the microcracks — should not be reused. The cost of a replacement airlock is not the cost of a batch.

## Assessing and retiring equipment

PS airlocks are the most chemically sensitive small component in a typical homebrew setup. The damage signals to watch for:

**Crazing or surface whitening.** The primary visual signal for DDBSA-driven ESC or solvent-induced surface fatigue. Crazing appears as a fine network of cracks — visible under a torch held at a low angle. Whitening or haziness where the material was previously water-clear indicates the same process. Crazing is irreversible. A crazed PS airlock should be retired immediately — not because the risk is known to be severe, but because the compliance basis no longer applies to a crazed surface, and because the surface texture of a crazed article cannot be reliably sanitised.

**Loss of transparency.** A clear PS airlock that has become hazy or opaque without visible crazing suggests solvent-induced surface swelling (if DES was used as fill liquid) or thermal damage. Retire it.

**Discolouration.** Yellowing or browning of previously clear material indicates chemical degradation, UV exposure, or thermal exposure. Retire it.

**Mechanical scratches.** Clean PS airlocks with a soft cloth or brief soak only — never a brush or abrasive pad. Scratches create stress concentration points and trap biofilm that sanitiser cannot reliably reach.

**Persistent staining or odour.** If a thorough alkaline percarbonate soak and rinse does not restore the article to a clean, odour-free state, the surface is too damaged for reliable sanitation.

The principle is the same as for every other article in this register: compliance testing is conducted on undamaged, GMP-manufactured equipment. Once visible damage is present, the compliance data does not apply — not because the risk is known to be elevated, but because it is unknown. The retire-at-first-sign-of-damage rule is especially important for PS airlocks because the styrene SML has no headroom to accommodate a damaged-surface migration increase.

> The compliance data no longer applies to a damaged surface — not because the risk is known to be elevated, but because it is unknown.

## Summary by article type

The table below covers the PS and SAN articles currently in the register. These are common examples — not an exhaustive list. A reader with an unlisted article should use the table as a reference, applying the principles on this page to their specific article and its geometry. The zone model applies: a new PS or SAN article in an open-surface geometry is Zone A; confined or compressed geometry is Zone B or C.

| Article | Food grade | Temp limits | ABNS WDC | DES | Cleaning |
|---|---|---|---|---|---|
| **Enolandia compact airlock — grade unconfirmed (treat as GPPS)** | Food contact symbol present; manufacturer claims food contact certification for raw materials. No DoC retrieved.[^1] | No hot liquid contact. Not dishwasher safe. Ambient fermentation use only. | Zone A (outer body): B/D. Zone B (trap, sustained): B. Zone B/C (stem): B–D. Do not use ABNS as fill liquid. | Do not use ethanol as fill liquid. Brief spray contact tolerated per manufacturer claim.[^1] | A — soft cloth or brief soak only. No brushes or abrasive pads. |
| **Enolandia compact airlock — if SAN confirmed** | As above. | As above. | A across all zones. Fill liquid: water preferred. | A. Fill liquid: water preferred. | A. |
| **Generic unlabelled S-type airlocks** | Unknown — no food grade documentation confirmed. Material typically unknown without manufacturer confirmation. | Unknown. Do not use hot water or dishwasher. | Unknown — treat as GPPS worst case if confirmed PS. Do not assume SAN or PP without evidence. | Unknown. | A if PS or SAN confirmed. Do not use brushes or abrasive pads. |

---

[^1]: Enolandia, direct email correspondence with the author (date to be confirmed when email is retrieved). Enolandia confirmed: "all our products are certified for food contact and all our raw materials as well. BPA free. Compact Airlocks — Materials: Usually polystyrene. Compatible Sanitizers: Again, Star San and ethanol work well. Non-Compatible: Avoid bleach or ammonia-based sanitizers. Cleaners: PBW and StellarClean are suitable; avoid scrubbers or abrasive tools that might damage the surface." Grade (GPPS vs SAN) not specified in the correspondence. The airlock is patented — the patent number is stamped on the airlock body. [Enolandia product page](https://www.enolandia.it/en/prodotto/air-lock-compact-medium-for-container-up-to-60lt-2/) (accessed May 2026).

[^2]: ISM Industrial, [*Chemical Compatibility Chart — Polystyrene*](https://www.industrialspec.com/images/files/polypropylene-chemical-compatibility-chart-from-ism.pdf) (September 2021). ISM's scale: A = Excellent, B = Good/minor effect, F = Fair, D = Severe effect. Rates PS as D for dodecylbenzene sulfonate (DDBSA) and D for ethanol at standard engineering concentrations and sustained contact conditions. These ratings reflect bulk chemical exposure — the distinction between brief spray contact and sustained immersion is not made in the chart. Covers general PS; SAN rates significantly better across most categories. Accessed May 2026.
