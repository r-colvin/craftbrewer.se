---
sidebar_position: 5
title: The wet-dry cycle model
---

# The wet-dry cycle model

*This page follows the EU regulatory framework and Swedish market context described in the [introduction](./01-introduction.md).*

The [KegLand DuoTight](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf) push-fit fitting is a small component with an outsized story.[^dt] In its original form it used a POM (polyoxymethylene, also called acetal) collar to grip the tubing. POM passed initial compatibility testing with sanitiser at working dilution — and then fittings started failing in the field. Not at first, and not all of them, but some developed a chalky surface texture; others cracked. The mechanism that caused this, once identified, turned out to be not a product defect and not a chemistry problem in isolation. It was a *process* problem — and one that applies, in varying degrees, to every piece of equipment in your brewery.

That mechanism is the wet-dry cycle, or WDC.

:::note What this page covers
The WDC model is the analytical backbone of this documentation. The material ratings in the [materials register](./05-materials-register/index.md) only make sense in the context of what a WDC actually does to a surface — and the numbers presented here are the calculations that underpin those ratings. If you find yourself wondering *why* a material has a particular rating, this is where the answer lives.
:::

## What a wet-dry cycle actually is

When you apply a liquid to a surface — a no-rinse sanitiser, a cleaning rinse, even plain water carrying dissolved minerals — two things happen simultaneously. The water begins to evaporate. The non-volatile components do not.

This sounds obvious when stated directly. Its consequences are less obvious.

An acid-based no-rinse sanitiser (ABNS) at working dilution is roughly 99.7–99.9% water. The fraction that is not water includes dodecylbenzenesulfonic acid (DDBSA), its phosphoric acid co-acidulant, and a minor surfactant fraction. Some ABNS products also contain an alcohol component — isopropanol in Sanipro Rinse and Chemsan, an ethanol-based solvent in StellarSan — but alcohol is fully volatile and evaporates alongside the water, contributing nothing to the dry residue. What remains after evaporation is only the fraction that cannot evaporate: DDBSA and phosphoric acid.

Ethanol-based sanitisers such as [ChemiPro DES](https://www.brouwland.com/en/our-products/wine-making/cleaning-disinfecting-agents-wine/d/chemipro-des-a-disinfectant-750-ml) are the limiting case: every component evaporates completely, leaving no residue at all. They are inherently outside the WDC model — there is no non-volatile fraction to concentrate. The WDC analysis applies specifically to sanitisers that leave a non-volatile residue behind, which in practice means ABNS.

The same principle applies to any liquid applied to equipment: whatever cannot evaporate will be left behind as a concentrated residue when the water is gone.

In a closed liquid system — sanitiser filling a vessel, liquid flowing through a tube — the ratio between water and non-volatile components stays fixed. The concentration cannot change because there is always more liquid to replace what evaporates from the surface. The moment you drain the vessel and expose the surface to air, the fixed ratio ends. The water leaves. The non-volatiles stay and grow more concentrated with every gram of water that departs.

Three things follow from this:

- **A single WDC deposits a concentrated dry residue on every surface it touches.** Even one sanitisation event leaves behind DDBSA and phosphoric acid at concentrations far above the working solution — the numbers are worked through in detail below.
- **Repeated WDC events without cleaning cause residue to accumulate.** Each sanitisation event layers new residue on top of the last. The exposure seen by the surface material compounds over time, progressively increasing the chemical load.
- **Rinsing or cleaning resets the counter to zero.** Removing residue before successive sanitisation events prevents accumulation. For food-contact surfaces, an appropriate cleaner is recommended; for external structural surfaces, a water rinse is sufficient. Process discipline — not material selection — is the primary safeguard against WDC damage.

**A wet-dry cycle is a single complete event: liquid applied to a surface, followed by evaporation to dryness.** One WDC begins when a liquid contacts a surface and ends when that surface is fully dry. How long that takes depends on film thickness — for the thin residual film left on a surface after draining (10–50 µm), drying takes roughly 8–12 hours at indoor conditions; this is developed in detail in the [drying section below](#how-long-does-drying-take). Each sanitisation event on a clean surface starts a fresh WDC. Without a cleaning step between uses, residues from successive sanitisation events accumulate — the cleaning reset is discussed in its own section.

## The concentration factor

The key number is:

$$\text{Concentration Factor (CF)} = \frac{V_\text{initial}}{V_\text{remaining}}$$

Where:
- $V_\text{initial}$ — the volume of working-dilution liquid originally on the surface (the thin film left after draining)
- $V_\text{remaining}$ — the volume of liquid still present at a given moment as evaporation proceeds

CF expresses how many times more concentrated the non-volatile components are in the remaining liquid compared to the original working solution. As evaporation proceeds, $V_\text{remaining}$ decreases and CF rises. At complete drying, CF reaches its maximum practical value: the ratio of the original liquid volume to the volume of the dry residue itself. This is a finite number, not infinity — the non-volatile components occupy a small but real volume even when fully concentrated, and it is that volume which sets the CF ceiling. In practice, CF at complete drying is closely approximated by the dilution ratio of the product, because the dry residue volume is negligible compared to the original film volume.

### Worked example: StellarSan at confirmed working dilution

[StellarSan](https://kegland.eu/products/stellarsan-500ml-16oz) (KegLand) is used here as the worked example because it is one of the few ABNS products for which confirmed working-dilution concentration figures are publicly available from the manufacturer.[^stellarsan-label]

**Step 1 — Establish the working dilution ratio.**

The [KegLand EU product page for StellarSan](https://kegland.eu/products/stellarsan-500ml-16oz) (label reference KL05357) confirms a working dilution of **1.5 mL per litre** of water — that is, 1.5 parts concentrate to 998.5 parts water, or a dilution ratio of approximately 1:667.

**Step 2 — Calculate the non-water fraction.**

At 1.5 mL/L, the concentrate makes up 0.15% of the working solution by volume. The remaining 99.85% is water.

**Step 3 — Apply the CF formula at complete drying.**

When all the water has evaporated, $V_\text{remaining}$ is the volume of the non-volatile residue alone. The CF at complete drying is therefore:

$$CF = \frac{100\%}{0.15\%} \approx 667$$

**Step 4 — Calculate the concentration of each active component in the dry residue.**

The KegLand StellarSan product label (Australian market — see footnote) confirms the following concentrations at working dilution:[^stellarsan-au]
- DDBSA: **300 ppm** in working solution
- Phosphoric acid: **780 ppm** in working solution

Multiplying by CF=667:
- DDBSA in dry residue: 300 × 667 ≈ **200,000 ppm (20% by mass)**
- Phosphoric acid in dry residue: 780 × 667 ≈ **520,000 ppm (52% by mass)**

For context on what 52% phosphoric acid means: the industrial grade used in laboratories and SDSs is 85% phosphoric acid by mass — the dense, syrupy liquid you see listed as the concentrate in cleaning product SDSs. The dry residue at 52% is more than halfway to that. Compatibility charts typically rate materials against concentrations expressed as percentages ("resistant to 30% phosphoric acid", "not recommended above 50%"); 52% puts the dry residue at or above the upper end of most rated ranges. The molar figure (~5.4 M, meaning 5.4 moles of acid molecules per litre) is sometimes used in chemistry to express acid reactivity directly; 85% phosphoric acid is approximately 14.6 M, so the dry residue sits at roughly 37% of the maximum.

These are aggressive concentrations — but concentration alone does not determine outcome. How much residue contacts how much surface area, under what mechanical conditions, and at what temperature, matters as much as the concentration itself — this is developed in the [Zone classification below](#where-geometry-amplifies-the-wdc-zones-a-b-and-c). For the effect on the product rather than the equipment, see the [safety in context section](#sanitiser-residue-in-your-product--safety-in-context).

A compatibility chart that rates a material as "acceptable" with working-dilution StellarSan does not automatically mean that material is safe under CF=667 dry residue conditions at Zone B or Zone C. **This is the point that initial compatibility testing missed — and it is the central insight of the WDC model.**

### Applying the formula to your product

The same calculation applies to any ABNS product. The inputs you need are:

1. **Working dilution** — from the product label or instruction sheet (in mL/L or a ratio)
2. **Active component concentrations at working dilution** — from the manufacturer; not always published

From the working dilution alone, you can always calculate the maximum CF:

$$CF = \frac{1{,}000}{\text{dose in mL/L}}$$

For example:
- A product used at 2 mL/L → CF = 1,000 / 2 = **500**
- A product used at 4 mL/L → CF = 1,000 / 4 = **250**
- A product used at 1.5 mL/L → CF = 1,000 / 1.5 ≈ **667**

A more dilute working solution (lower mL/L dose) means the non-water fraction is a smaller proportion of the total — so the CF at complete drying is higher. **The working dilution is the single largest lever on how concentrated the dry residue becomes.**

:::note Estimating from concentrate SDS when working-dilution figures are not published
Not all manufacturers publish active component concentrations at working dilution — SDSs cover the concentrated product, not the diluted use solution. If your product's SDS does not give working-dilution concentrations, you can estimate by multiplying the concentrate percentage by the dilution fraction.

For StellarSan as a check: 15% DDBSA in concentrate × 0.0015 dilution fraction = 225 ppm, close to the label-confirmed 300 ppm. (The small difference reflects the non-linearity of mixing volumes in solution.)

Most SDSs give component percentages as ranges rather than point values — for example, "phosphoric acid 10–30%". This means your working-dilution estimate is also a range. For Sanipro Rinse at 1.25–2.5 mL/L with 40–50% phosphoric acid in concentrate, the working-dilution phosphoric acid concentration spans roughly 500–1,250 ppm — a 2.5× spread before CF is even applied. When using an SDS range, calculate both ends and use the upper bound as your conservative estimate. The CF calculation itself is unaffected by this uncertainty — CF requires only the working dilution ratio, which is always a single value from the product label.
:::

## How much residue remains after draining?

Applying the WDC model requires knowing how much liquid remains on a surface after draining. This is a thin-film physics question, and the answer depends on the surface geometry, the liquid's viscosity and surface tension, and the contact angle between the liquid and the surface material.

For dilute aqueous solutions (viscosity close to water) draining from polypropylene (PP) — which is moderately hydrophobic — the retained film thickness after adequate gravity drainage is approximately **10–50 micrometres** (0.01–0.05 mm). This is the thin film that wets the surface and cannot drain under gravity alone.

Working this through for a 20–25 L fermenter:

| Surface | Area (approx.) | Retained film | Film volume |
|---|---|---|---|
| Interior walls (vertical) | ~2,000 cm² | 0.12–0.15 mL per 100 cm² | ~2.5 mL |
| Base (horizontal, pooling removed) | ~550 cm² | 0.15–0.18 mL per 100 cm² | ~0.9 mL |
| **Total** | | | **~3.4 mL** |

The total retained film after draining a 20–25 L fermenter is approximately **3.4 mL**. This is the liquid that will undergo the WDC — the 3.4 mL that cannot drain, spread across thousands of square centimetres of surface, waiting to evaporate.

### Non-volatile mass in that film

At StellarSan working dilution, the retained film contains:
- DDBSA: ~300 ppm
- Phosphoric acid: ~780 ppm
- Total: ~1,080 ppm non-volatile solids

In 3.4 mL of retained film: **~3.7 mg total non-volatile residue**.

That 3.7 mg is the mass that will sit on the fermenter surfaces after the water evaporates. It is the dry residue — the CF=667 endpoint for StellarSan. Three and a half milligrams of concentrated DDBSA and phosphoric acid, spread invisibly across the fermenter interior.

## How long does drying take?

The WDC is not instantaneous. Drying rate matters because it determines how long a surface spends at each concentration along the trajectory from CF=1 (working dilution) to the dry residue endpoint.

Drying rate is dominated by air movement and humidity rather than film thickness alone. An open cup in a dry room dries in minutes; a thin film on the interior wall of a fermenter with its lid on — in a headspace already humid from residual liquid — may take many hours. The figure commonly cited in thin-film evaporation literature for still, humid indoor air is approximately 1–5 µm/hour, which gives a theoretical drying time of 8–12 hours for a 10–50 µm film.[^drying-rate] In practice the range is much wider:

- **Lid off, room with air movement:** drying may complete in 1–3 hours
- **Lid on, still indoor air:** drying may take 8–12 hours or longer, as the headspace saturates
- **Lid on, warm fermentation environment:** faster evaporation, shorter drying time
- **Confined geometries (thread roots, crevices):** slower than open surfaces regardless of lid, due to restricted airflow

The 8–12 hour figure is therefore a worst-case estimate for a sealed, still environment — not a claim about how long it takes for a drained vessel to feel dry to the touch. The *practical* implication is less about the exact hours and more about the direction: **a fermenter used an hour after sanitising is at a very different CF from one left overnight**.

The concentration trajectory through the drying window (using StellarSan figures, still-air enclosed scenario):

| Film remaining | Evaporated | CF | DDBSA concentration | Phosphoric acid |
|---|---|---|---|---|
| 20 µm (start) | 0% | 1 | ~300 ppm | ~780 ppm |
| 10 µm | 50% | 2 | ~600 ppm | ~1,560 ppm |
| 4 µm | 80% | 5 | ~1,500 ppm | ~3,900 ppm |
| 2 µm | 90% | 10 | ~3,000 ppm | ~7,800 ppm |
| 0.2 µm | 99% | 100 | ~30,000 ppm (3%) | ~78,000 ppm |
| Dry residue | 100% | ~667 | ~200,000 ppm (20%) | ~520,000 ppm |

*These are order-of-magnitude estimates based on thin-film evaporation physics. Actual values depend on ambient humidity, air movement, surface temperature, and geometry. They are presented as illustrative, not measured.*

The dry residue endpoint is an end-state, not a sudden transition. **How long a surface sits between sanitisation and use is a real process variable** — and air movement is the dominant factor controlling how quickly that endpoint is reached.

## Where geometry amplifies the WDC: Zones A, B, and C

The CF calculation describes what happens on an open, flat surface — the interior wall of a fermenter, for example. Geometry modifies this considerably. Three zones classify surfaces by their WDC exposure.

*The Zone A/B/C classification used here is specific to this documentation. The underlying mechanisms — capillary retention in crevices, environmental stress cracking at stress concentrations, chemical absorption into compressed elastomers — are well-established in materials science and chemical engineering; the Zone framework is a way of grouping them by how they interact with the WDC.*

### Zone A — open surfaces

Open, smooth surfaces with unobstructed drainage and good air exchange. Examples: fermenter interior walls, lid underside, transfer tubing bore.

On Zone A surfaces, the WDC proceeds as the baseline scenario — thin film drains as far as gravity allows, residual film evaporates toward its dry endpoint. The surface receives the full concentrated residue, but it is also the easiest to clean: open geometry, no crevices, full access for the next cleaning event.

Transfer tubing bore is listed here because the Zone classification tracks *mechanical stress conditions*, not drying speed. A tube bore is geometrically enclosed and dries more slowly than an open fermenter wall due to restricted airflow at the ends — but the bore surface is unstressed, making it Zone A for material risk purposes. Drying rate affects *when* the CF endpoint is reached; Zone classification affects *what happens* at that endpoint.

### Zone B — confined geometry

Recesses, threads, clip points, and other geometries where liquid cannot drain freely and air circulation is restricted. Examples: tap thread roots, lid clip attachment points, pressure relief valve seats, screw threads on bulkhead fittings.

Two things happen in Zone B that do not happen on Zone A surfaces:

**Capillary retention:** Liquid is held in thread roots and crevices by capillary action, against the direction of gravity. This means the initial film volume per unit area is substantially higher than on open surfaces — the geometry acts as a reservoir. More liquid means more non-volatile mass, which means more concentrated residue at the end of drying.

**Restricted drainage and evaporation:** Liquid in thread roots cannot drain freely. Evaporation from confined geometry is slower than from open surfaces, but the residue, once deposited, remains trapped in the same geometry indefinitely — pressed against the surface, unable to drain, until a cleaning event actively reaches it.

**Zone B is also where mechanical stress concentrates.** The moulding process creates residual stresses at thread roots; the act of threading a fitting into a vessel adds assembly stress. A geometry that traps chemical residue at elevated concentration is also a geometry that amplifies mechanical stress. This combination — concentrated chemical agent at a stress concentration point — is the precondition for environmental stress cracking (ESC).

### Zone C — compressed contact under sustained stress

Joints where components are held in permanent elastic deformation: bulkhead washer compressed between tap and fermenter wall; DuoTight collar deformed around inserted tubing; O-ring compressed in a groove. Examples: fermenter tap bulkhead, pressure fermenter lid O-ring, push-fit fitting collars.

Zone C is distinct from Zones A and B because the surface in question is not exposed to evaporation in the same way. A compressed bulkhead washer does not have a free liquid film sitting on it waiting to evaporate. Instead, the mechanism is different and more direct: **the chemical agent in the liquid is absorbed directly into the elastomer or polymer under compressive stress**, rather than depositing as a surface residue after evaporation.

For elastomers (O-rings, washers, gaskets), absorption of surfactants like DDBSA under compression causes swelling and softening — dimensional change that, in a compressed joint, can lead to leakage or, in a structurally loaded fitting, loss of mechanical integrity. For rigid polymers under sustained tensile stress (the DuoTight POM collar case), the chemical agent diffuses into the stressed zone and reduces the threshold for crack initiation. The material does not need to fail immediately — it accumulates damage with each exposure event.

Some elastomer swelling is reversible: water absorption causes dimensional changes that largely recover on drying. Surfactant absorption is a different mechanism — DDBSA interacts with polymer chain segments and causes plasticisation (increased chain mobility) that does not fully reverse when the chemical is removed. Recovery between brew sessions is partial at best, and repeated exposures compound what partial recovery leaves behind. This is not a uniformly one-way process, but it is a cumulative one.

**Zone C is the highest-risk zone** because the chemical is delivered to exactly the region of highest mechanical stress, and because the sustained deformation eliminates the recovery window that unstressed surfaces have between exposures.

## The DuoTight failure — correctly framed

With the Zone classification in place, the DuoTight failure can be stated precisely.

The POM collar is a **Zone C** component — permanently deformed around the inserted tubing. DuoTight fittings were routinely sanitised by spraying the assembled equipment with ABNS, including the external fitting bodies. The external surfaces of the fitting — including the collar — are not in the beer flow path. Beer flowing through the tubing does not rinse the external fitting surface. The spray-and-leave practice applied to internal food-contact surfaces (where no-rinse is approved and appropriate) was applied indiscriminately to external structural surfaces (where rinsing is both permitted and advisable).

![Two Gen 1 DuoTight fittings showing vertical ESC cracks through the POM collar](/images/wdc/duotight_design_rev_img_1.png)
*Vertical stress cracks through the POM collar of two Gen 1 DuoTight fittings. Image: [KegLand DuoTight Design Revision](/references/duotight_design_revision.pdf).*

![Top-down view of two DuoTight collars; the left fitting shows chalky surface degradation marked with a red annotation, the right is undamaged](/images/wdc/duotight_design_rev_img_2.png)
*Top-down view of the collar entry. Left: chalky surface degradation from acid-catalysed ESC (annotated); right: undamaged collar for comparison. Image: [KegLand DuoTight Design Revision](/references/duotight_design_revision.pdf).*

The result: repeated ABNS application and evaporation on a permanently stressed, ESC-susceptible material. The collar experienced the full concentrated dry residue conditions on every spray-and-dry event, at exactly the location of maximum mechanical stress.

The spray-and-leave pattern was not incidental. A common practice in kegging and pressure fermentation systems is to spray fittings with sanitiser to perform a **leak test** — CO₂ bubbles appear at any unsealed joint. This is a legitimate and effective technique, but it is exactly the WDC scenario at Zone C: ABNS applied to a compressed POM collar and left to evaporate under pressure. Each leak test is a partial WDC. Repeated tests without cleaning accumulate rapidly.

KegLand's own documentation reflects this history directly, in three inconsistent positions across three different documents:

- **Older FermZilla Leak Instruction Manual** (archived PDF, undated):[^leak-manual] leak testing specifies "soapy water" — no ABNS.
- **Newer FermZilla All Rounder online documentation:** switched to spraying StellarSan for leak detection, replacing the soapy water recommendation.
- **Series X Kegerator manual:**[^series-x] *"IMPORTANT: Do not spray any DuoTight fittings with StellarSan or phosphoric acid solution to perform a leak test."*

Three documents, three positions, one task. The Series X prohibition is almost certainly a direct response to the POM DuoTight failures. The newer FermZilla documentation's return to ABNS for leak testing reflects KegLand's confidence that POK fittings and confirmed EPDM seals handle brief spray contact — which they do. But the inconsistency means a brewer reading any single document cannot know which recommendation applies to their hardware, or why any of them exist.

The soapy water recommendation in the older manual is actually the most defensible approach from a materials standpoint: dilute dish soap in water leaves no non-volatile acid or surfactant residue, is compatible with every material in a brewing system, and produces clear bubble formation at leak sites. It requires no compatibility knowledge to apply safely and carries no WDC risk. **Dish soap in water is the appropriate leak test fluid for any part of a brewing system, regardless of fitting material.**

POM's compatibility charts rate it as acceptable with ABNS at working dilution. POM's compatibility charts do not rate it under dry residue conditions. The failure occurred in the gap between what was tested and what actually happened.

KegLand's solution — replacing POM with POK (polyketone) in the collar — addresses the material susceptibility. It does not address the practice that created the exposure: applying no-rinse discipline to external structural surfaces that have no food-contact reason to avoid rinsing. Both the material upgrade and the practice correction are valid responses; the POK collar makes the fitting more forgiving of the practice, but understanding why the practice was wrong is more useful long-term than simply trusting that the replacement material is immune.

:::note John Guest fittings
The same POM material is used in John Guest push-fit fittings, which remain widely sold and used in homebrewing gas and liquid line systems. The [KegLand DuoTight Design Revision document](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf) identifies this but does not provide a recommendation. The material analysis and process guidance in this documentation applies equally to John Guest fittings — they are not exempt from the WDC model by virtue of being a different brand.
:::

## Sanitiser residue in your product — safety in context

The preceding analysis focuses on material damage. There is a separate question that matters to the brewer: does the sanitiser residue end up in the product, and if so, at what concentration and is it safe?

### Wet residue vs dry residue — same mass, different scenario

The calculations above describe a surface that has dried completely — CF=667, 3.7 mg of DDBSA and phosphoric acid concentrated into a film. But a fermenter, bottle, keg, or can filled immediately after draining sanitiser skips the drying step entirely. Does that change the residue picture?

For **non-volatile components** (DDBSA and phosphoric acid), no. The total mass of DDBSA in the retained film is 3.7 mg whether that film is at CF=1 (still wet) or CF=667 (dry residue). The water is irrelevant to the quantity of chemical that ends up in the product — it all dissolves in when the vessel is filled regardless. The beer safety calculation is independent of whether the surface ever dried.

For **volatile components** (IPA in Sanipro Rinse and Chemsan, ethanol in StellarSan), the picture differs. During a WDC, IPA evaporates alongside the water and contributes nothing to the dry residue. But if a vessel is filled immediately while still wet, the IPA present in the retained film at working dilution does enter the product. For Sanipro Rinse at working dilution, IPA is present at perhaps 1–3% of the concentrate concentration — in 3.4 mL of retained film, that is roughly 0.03–0.1 mL of IPA dissolved into 20 L of beer, producing a concentration of approximately 1.5–5 ppm. Beer contains ethanol at roughly 40,000–60,000 ppm. The IPA contribution from wet sanitiser residue is negligible in context, but it is present in the wet-fill scenario in a way it would not be in the dry-residue scenario.

The worst-case scenario: 3.7 mg of non-volatile DDBSA and phosphoric acid residue from the interior walls of a 20 L fermenter (using the StellarSan figures above) dissolves into the wort when filling. What concentration does this produce?

$C_\text{DDBSA} = \frac{3.7 \text{ mg}}{20{,}000 \text{ mL}} = 0.000185 \text{ mg/mL} \approx \mathbf{0.19 \text{ ppm}}$

The flavour detection threshold for DDBSA in beer is approximately 1–5 ppm (detectable as a faintly soapy or off note by a trained taster).[^ddbsa-threshold] The worst-case calculation produces **0.19 ppm** — well below the lower bound of the detection range.

For the acute toxicity margin: the oral LD50 for DDBSA in rats is approximately 650 mg/kg.[^ddbsa-ld50] For a 75 kg person, that represents a lethal dose of around 48,750 mg — roughly 256,000 times the DDBSA in a single pint of beer brewed under these worst-case conditions. Even using the most conservative available figure (mouse oral LD50, approximately 50 mg/kg), the margin is approximately 40,000 pints.[^ddbsa-ld50-mouse] DDBSA presents no acute toxicity concern at these concentrations.

### Putting the residue concentrations in context

Abstract numbers are easier to evaluate alongside familiar comparisons. The figures below cover all three components — DDBSA, phosphoric acid, and IPA — each at their worst-case residue concentration.

**DDBSA (0.19 ppm in beer) and dish soap.** Conventional dish soap (washing-up liquid) contains linear alkylbenzene sulfonate — the sodium salt of DDBSA — as its primary surfactant, typically at 10–20% by weight. Every plate, glass, and pot washed with dish soap carries a surfactant residue film after rinsing with tap water. That residual film is at concentrations comparable to or exceeding the 0.19 ppm DDBSA in this worst-case beer calculation. You eat from those surfaces without concern.

**Phosphoric acid (~0.13 ppm in beer) and cola.** Phosphoric acid is the acidulant in Coca-Cola, Pepsi, and most cola beverages. A standard 330 mL can contains approximately 50–80 mg of phosphoric acid — producing a pH of roughly 2.5, similar to Star San working solution. The total phosphoric acid residue from the 3.7 mg WDC dry residue dissolved into 20 L of wort works out to approximately 0.13 ppm — roughly 2.65 mg total in the batch. The phosphoric acid in a single can of cola exceeds the entire batch residue by a factor of approximately 20–30×. Nobody questions whether cola's phosphoric acid content is safe.

**IPA (~1.5–5 ppm in beer, wet-fill scenario only) and evaporation.** Some ABNS products contain isopropanol (IPA) — Sanipro Rinse and Chemsan both use it as part of their formulation. IPA is classified as Acute Tox. 4 (oral) under GHS, which can sound alarming. But IPA is fully volatile: it evaporates alongside the water during the WDC, and none of it is present in the dry residue. The WDC concern is specifically about non-volatile components. IPA leaves no residue in the fermenter and none reaches the beer.

Note that this calculation applies to food-contact interior surfaces (fermenter, bottle, keg, can) where the residue dissolves directly into the product. Zone B and Zone C residue on external structural components does not dissolve into beer in the same way; the concern there is material degradation rather than product contamination.

## The reset mechanism

WDC accumulation only occurs on surfaces that **dry between sanitisation events**. A vessel sanitised, filled immediately, used, and emptied has undergone no WDC on its interior — the sanitiser never dried, so no concentrated residue formed. The WDC concern applies specifically to surfaces that are sanitised, left to dry, and then re-sanitised without cleaning between those events: equipment stored between uses, external surfaces sprayed and left, fittings subjected to repeated leak tests.

The reset mechanism is removing residue before successive sanitisation events allow it to accumulate. This does not require a specific cleaner, a specific timing, or a specific equipment type:

- **For internal food-contact surfaces** (fermenter, keg, bottle, airlock, tubing): a proper clean with an appropriate cleaner — alkaline percarbonate (PBW, StellarClean, ChemiPro OXI) for organic soils, or at minimum a thorough rinse with warm water before residue dries — removes the non-volatile DDBSA and phosphoric acid. Alkaline cleaners are significantly more effective than water alone, particularly for dried residue, Zone B geometries, and organic soil alongside the chemical residue. Water rinsing alone is a minimum, not a recommendation.
- **For external structural surfaces** (fitting bodies, connectors, push-fit collars): a water rinse after sanitiser contact time is sufficient and correct. These surfaces have no food-contact reason to avoid rinsing. Rinse them.

The timing label "post-brew" is convenient but imprecise. The accurate statement is: **clean or rinse any surface that will dry after sanitiser contact and be re-sanitised later, before that re-sanitisation event.** For a fermenter used on a regular brew schedule, post-brew cleaning achieves this. For a keg connector sprayed for a leak test, rinsing immediately after the test achieves this. The principle is the same; the implementation depends on the surface and the process.

For Zone B geometries — thread roots, tap bodies, crevices — a water rinse does not reach the residue adequately. Disassembly, mechanical action, and soak time in an appropriate cleaner are required. The process discipline for Zone B is more demanding than for open surfaces, which is one reason the materials register pays particular attention to components that combine Zone B geometry with susceptible materials.

### The grommet as a bounded case

The fermentation grommet — the EPDM rubber seal in the lid through which an airlock or blowoff tube passes — illustrates an important nuance in the WDC model. EPDM is rated "unsatisfactory" (U) for concentrated DDBSA in chemical compatibility references. Does this mean the grommet is at continuous risk throughout fermentation?

No, and the reason matters. The grommet experiences **at most one WDC per brew cycle**, and under normal conditions does not come into contact with the wort at all:

1. Sanitisation: ABNS is applied to the lid (including the grommet) and drained.
2. The grommet begins to dry. This is the WDC in progress.
3. Wort is added to the fermenter. The headspace becomes saturated with water vapour from fermentation CO₂ carrying humidity. If the brewer oxygenates by shaking the sealed fermenter, the grommet may be briefly wetted with wort — which dilutes and displaces any sanitiser residue rather than adding to it.
4. The humid headspace prevents the WDC from completing — the grommet surface is never in truly dry air during active fermentation. The grommet is in the lid, not submerged; under normal conditions it sits above the wort surface throughout fermentation.
5. Post-brew cleaning resets the grommet to zero.

The grommet therefore sees: one WDC initiation per brew, arrested before completion by fermentation humidity, then reset by cleaning. It is not an accumulating risk — it is a bounded one. The EPDM U-rating applies to prolonged exposure to concentrated DDBSA; the actual exposure is one partial WDC per brew, in a geometry (the lid, away from beer contact) where the consequence of slow EPDM degradation is a slow leak rather than a contamination event. Manageable, inspectable, replaceable.

## How many WDCs before concern?

The answer depends on the material and the Zone. The materials register covers each material in detail, including charts that map accumulated WDC exposure against damage thresholds by zone — see the [materials register](./05-materials-register/index.md) for the full per-material analysis. This section sets out the framework and a worked illustration.

For a **PP fermenter body at Zone A** — the standard homebrew fermenter interior — the ISM chemical compatibility chart[^ism-chart] rates PP as incompatible (X) with concentrated benzenesulfonic acid (the reference compound for DDBSA at dry-residue concentrations). The per-cycle residue quantity at Zone A is very small: 3.7 mg spread across 2,550 cm² is a 15 nm film, depositing a tiny chemical dose per unit area per cycle. The full analysis of how many WDC cycles Zone A PP can accumulate before approaching a damage threshold — and equivalent analyses for other materials and zones — will be in the [materials register](./05-materials-register/index.md) when written. The qualitative conclusion under normal brewing discipline is that Zone A fermenter walls are not at meaningful risk across a typical service life, provided cleaning resets accumulation after each batch.

The risk profile is materially different on **surfaces that are sanitised repeatedly without being cleaned or rinsed between events** — the primary scenario where damage accumulates. Internal surfaces that are filled with wort or beer after sanitisation are the *lowest* risk category: the liquid dilutes and displaces any residue immediately, and internal food-contact surfaces are regularly cleaned as part of normal practice. The highest-risk scenario is the one the DuoTight failure exemplifies: an external surface at Zone C, sprayed for leak detection, never rinsed, repeatedly sprayed again across many sessions. Each spray-and-leave adds a full WDC. Without any rinsing between events, the accumulated chemical load grows rapidly toward the threshold for ESC in susceptible materials.

The risk profile escalates when any of the following apply:
- Cleaning or rinsing is skipped entirely, allowing residue to accumulate session over session
- Spray events are repeated without rinsing between them (repeated leak tests, multiple sanitisation passes without intermediate rinsing)
- Temperature is elevated (higher temperatures accelerate chemical diffusion into polymers and lower the activation energy for ESC)
- The surface is under sustained mechanical stress (Zone C), which eliminates recovery time between events

The WDC model is not an alarm — it is a framework for understanding when the alarm should and should not sound.

## Summary: what the WDC model tells you

The wet-dry cycle model is a tool for thinking, not just a set of numbers. Its conclusions:

1. **The relevant concentration is not the working dilution — it is the dry residue.** Compatibility testing at working dilution is necessary but not sufficient for surfaces that undergo wet-dry cycling. The CF at complete drying is set by the dilution ratio: CF = 1,000 ÷ dose in mL/L.

2. **Liquid sanitiser at working dilution is not the primary concern for most materials.** A surface that is sanitised and immediately filled presents the lowest possible WDC exposure — the residue is at CF=1, and the total non-volatile mass is identical whether wet or dry. The risk accumulates only on surfaces that dry and are re-sanitised without cleaning or rinsing between events. Make up only as much sanitiser as you need, use it immediately, and discard the remainder rather than storing it. If sanitiser has dried on a surface before you intend to use it, rinse it off and re-sanitise — this avoids filling equipment with concentrated dry residue.

3. **Geometry determines exposure.** The same sanitiser, the same material, the same process produces different risk depending on whether a surface is Zone A (open), Zone B (confined), or Zone C (compressed). Zone classification should be the first question asked about any component.

4. **Time matters.** A surface used within minutes of sanitising is at CF=1 to CF=2. A surface left overnight in still air has reached its dry residue endpoint. How long equipment sits between sanitisation and use is a real process variable.

5. **Rinsing or cleaning is the primary safeguard.** For food-contact surfaces, clean with an appropriate alkaline cleaner. For external structural surfaces, a water rinse after sanitiser contact is sufficient and is the correct practice. Material selection matters most at Zone B and Zone C, and for materials with low chemical resistance at any CF.

6. **The no-rinse rule applies to food-contact surfaces only.** External structural surfaces — fitting bodies, collar mechanisms, compression joints — can and should be rinsed with water after sanitisation contact time. Applying the no-rinse habit to external surfaces created the DuoTight failure. Understanding why the rule exists allows you to apply it correctly.

The next section applies this model to specific materials in the [materials register](./05-materials-register/index.md). Each material rating there traces back to the numbers and zones established here. For how the model applies to specific equipment, see the [Equipment guides](./Equipment/index.md).

---

*This page uses order-of-magnitude estimates for film thickness and evaporation rate derived from thin-film physics. Exact values depend on ambient conditions and surface geometry. The estimates are presented as such and should not be treated as experimentally measured results. The CF derivation and the DDBSA-in-beer calculation are arithmetically exact given the input concentrations; input concentrations are taken from product labels and SDSs cited in the footnotes and the [sources log](./References/01-references.md).*

[^ism-chart]: ISM (International Sourcing & Management) chemical compatibility chart for polypropylene — widely used as a reference source in materials compatibility analysis. The chart rates PP as X (incompatible) against benzenesulfonic acid at concentrated conditions. The ISM chart covers bulk chemical exposure and does not distinguish between Zone A, B, and C exposure conditions as defined in this documentation.

[^leak-manual]: KegLand, *FermZilla Leak Instruction Manual* (internal draft PDF, undated) — archived at [`static/references/Fermzilla-Leak-Instruction-Manual_Final_Draft.pdf`](/references/Fermzilla-Leak-Instruction-Manual_Final_Draft.pdf). Specifies soapy water for leak detection; no mention of ABNS for this purpose.

[^series-x]: KegLand, [Series X Kegerator Instruction Manual](https://kegland.com.au/cdn/shop/files/Series_X_Kegerator_Instruction_Manual.pdf) — accessed April 2026. Contains the explicit prohibition on spraying DuoTight fittings with StellarSan or phosphoric acid for leak testing.

[^drying-rate]: The 1–5 µm/hour evaporation rate for thin aqueous films in still, humid indoor air is derived from first-principles thin-film evaporation physics and is consistent with values reported in general chemical engineering literature for similar conditions. A primary experimental study measuring this specific scenario (dilute ABNS film on PP in a closed fermenter headspace) has not been identified. The figure should be treated as an order-of-magnitude estimate. The practical guidance — that air movement dominates drying rate and that a sealed fermenter dries much more slowly than an open one — is robust to the exact evaporation rate used.

[^dt]: KegLand, [DuoTight Design Revision](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf) — accessed April 2026 from kegland.com.au · [`duotight_design_revision.pdf`](/references/duotight_design_revision.pdf)

[^stellarsan-label]: KegLand EU StellarSan product label (KL05357, EU market) — working dilution 1.5 mL/L and no-rinse status confirmed. Accessed April 2026 from [kegland.eu](https://kegland.eu/products/stellarsan-500ml-16oz). The EU label does not state active component concentrations at working dilution; these are taken from the Australian product label (see [^stellarsan-au]).

[^stellarsan-au]: KegLand StellarSan product label (Australian market, cross-referenced against [KegLand StellarSan MSDS](/references/KegLand_StellarSan_MSDS.pdf)) — confirms 300 ppm DDBSA and 780 ppm phosphoric acid at 1.5 mL/L working dilution. These figures resolve a prior discrepancy in this documentation (earlier drafts used 300 ppm / 930 ppm based on a different product's estimated concentrations). Active concentrations for other ABNS products at their working dilutions are not confirmed from primary sources to the same level; the [sanitising guide](./02-sanitising.md) notes the open items by product.

[^ddbsa-threshold]: The 1–5 ppm flavour detection threshold for DDBSA in beer is an estimate based on available organoleptic literature; a primary brewing-specific study has not been identified. This footnote will be updated when a citable primary source is located. The safety margin in the worst-case calculation is sufficiently large (5–25×) that uncertainty in the threshold does not change the conclusion.

[^ddbsa-ld50]: Rat oral LD50 for DDBSA (linear alkylbenzene sulfonic acid) approximately 650 mg/kg — widely cited in chemical safety literature. Primary source: confirm against ECHA REACH registration dossier or Sigma-Aldrich SDS for dodecylbenzenesulfonic acid. *[Citation to be confirmed against primary toxicology database — open item.]*

[^ddbsa-ld50-mouse]: Mouse oral LD50 approximately 50 mg/kg — the most conservative figure in the literature, used in community safety calculations (HomeBrewTalk). This figure gives the ~40,000-pint margin cited. Using the rat LD50 of ~650 mg/kg gives a margin approximately 13× larger (~530,000 pints). Both represent effectively infinite safety margins at realistic brewing residue concentrations.
