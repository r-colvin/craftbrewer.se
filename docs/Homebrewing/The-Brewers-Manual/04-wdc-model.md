---
sidebar_position: 5
title: The wet-dry cycle model
---

# The wet-dry cycle model

The DuoTight push-fit fitting is a small component with an outsized story. In its original form it used a POM (polyoxymethylene, also called acetal) collar to grip the tubing. POM passed initial compatibility testing with sanitiser at working dilution — and then fittings started failing in the field. Not at first, and not all of them, but some developed a chalky surface texture; others cracked. The mechanism that caused this, once identified, turned out to be not a product defect and not a chemistry problem in isolation. It was a *process* problem — and one that applies, in varying degrees, to every piece of equipment in your brewery.

That mechanism is the wet-dry cycle, or WDC.

:::note What this page covers
The WDC model is the analytical backbone of this documentation. The material ratings in the [materials register](./05-materials-register/index.md) only make sense in the context of what a WDC actually does to a surface — and the numbers presented here are the calculations that underpin those ratings. If you find yourself wondering *why* a material has a particular rating, this is where the answer lives.
:::

## What a wet-dry cycle actually is

When you apply a liquid sanitiser to a surface — by filling, swirling, draining, or spraying — two things happen simultaneously. The water begins to evaporate. The non-volatile components do not.

This sounds obvious when stated directly. Its consequences are less obvious.

An acid-based no-rinse sanitiser (ABNS) at working dilution is roughly 99.5–99.8% water. The ~0.2–0.5% that is not water includes dodecylbenzenesulfonic acid (DDBSA), its phosphoric acid co-acidulant, and a minor surfactant fraction. These components have essentially zero vapour pressure at brewing temperatures — they cannot evaporate. As the water leaves the surface, they remain.

In a closed liquid system — sanitiser filling a vessel, liquid flowing through a tube — the ratio between water and non-volatile components stays fixed. The concentration cannot change because there is always more liquid to replace what evaporates from the surface. The moment you drain the vessel and expose the surface to air, the fixed ratio ends. The water leaves. The non-volatiles stay and grow more concentrated with every gram of water that departs.

This is a wet-dry cycle: liquid applied to surface, water evaporates, non-volatile components concentrate. One WDC is one application-plus-drying event.

## The concentration factor

The key number is simple:

$$CF = \frac{V_\text{initial}}{V_\text{remaining}}$$

Where CF is the concentration factor — how many times more concentrated the non-volatile components are in the remaining liquid compared to the original working solution. When the surface is completely dry, CF equals the ratio of the original liquid volume to the dry residue volume. For an ABNS at 1:250 dilution (the Star San / Sanipro Rinse working ratio), the water fraction is approximately 99.6% of the solution by mass. When that water has fully evaporated:

$$CF = \frac{100}{0.4} = 250$$

**CF=250.** That is the concentration at complete drying of an ABNS working solution.

What does CF=250 mean in practice?

- DDBSA goes from approximately **300 ppm at working dilution** to approximately **75,000 ppm (7.5%) in the dry residue**
- Phosphoric acid goes from approximately **930 ppm** to approximately **232,500 ppm (~2.4 M)**

These are not trace concentrations. 7.5% DDBSA is a concentrated surfactant solution. 2.4 M phosphoric acid is comparable to the concentrations used in industrial metal cleaning. A compatibility chart that rates a material as "acceptable" with a 1:250 ABNS working solution does not automatically mean that material is safe under CF=250 dry residue conditions. This is the point KegLand's initial compatibility testing missed — and it is the central insight of the WDC model.

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

At working dilution, ABNS contains:
- DDBSA: ~300 ppm (varies slightly by product)
- Phosphoric acid non-volatile fraction: ~930 ppm
- Total non-volatile solids: ~1,230 ppm

In 3.4 mL of retained film: **~4.2 mg total non-volatile residue**.

That 4.2 mg is the mass that will sit on the fermenter surfaces after the water evaporates. It is the dry residue — the CF=250 endpoint. Four milligrams of concentrated DDBSA and phosphoric acid, spread invisibly across the fermenter interior.

## How long does drying take?

The WDC is not instantaneous. Drying rate matters because it determines how long a surface spends at each concentration along the trajectory from CF=1 (working dilution) to CF=250 (complete drying).

For a thin aqueous film at ambient conditions (20°C, 50% relative humidity, still air), evaporation rate is approximately 1–5 µm/hour. A retained film of 10–50 µm therefore reaches complete drying in approximately **8–12 hours** under typical brewing conditions. This is the WDC completion time.

The concentration trajectory through that window:

| Film remaining | Evaporated | CF | DDBSA concentration | Phosphoric acid |
|---|---|---|---|---|
| 20 µm (start) | 0% | 1 | ~300 ppm | ~930 ppm |
| 10 µm | 50% | 2 | ~600 ppm | ~1,860 ppm |
| 4 µm | 80% | 5 | ~1,500 ppm | ~4,650 ppm |
| 2 µm | 90% | 10 | ~3,000 ppm | ~9,300 ppm |
| 0.2 µm | 99% | 100 | ~30,000 ppm (3%) | ~93,000 ppm |
| Dry residue | 100% | 250 | ~75,000 ppm (7.5%) | ~232,500 ppm |

*Note: these are order-of-magnitude estimates based on thin-film evaporation physics. Actual values depend on ambient humidity, air movement, surface temperature, and film geometry. They are presented as estimates, not measured results.*

The critical observation from this table is that CF=250 is an end-state, not a sudden transition. A fermenter drained and left overnight will reach CF=250. A fermenter drained and used within 30 minutes will have surfaces at CF=1 to perhaps CF=2 — barely elevated above working dilution. The WDC is a process that unfolds over hours. The practical implication: **how long a surface sits wet after sanitisation matters as much as what concentration you sanitised with**.

## Where geometry amplifies the WDC: Zones A, B, and C

The concentration factor CF=250 describes what happens on an open, flat surface exposed to still air — the interior wall of a fermenter, for example. Geometry modifies this considerably. Three zones classify surfaces by their WDC exposure:

### Zone A — open surfaces

Open, smooth surfaces with unobstructed drainage and free air exposure. Examples: fermenter interior walls, lid underside, transfer tubing bore.

On Zone A surfaces, the WDC proceeds as described — thin film drains as far as gravity allows, residual film evaporates to CF=250 over 8–12 hours. This is the baseline scenario. The surface receives CF=250 residue, but it is also the easiest surface to clean — open geometry, no crevices, complete access for the next cleaning event.

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

**Zone C is the highest-risk zone** because the chemical is delivered to exactly the region of highest mechanical stress, and because the sustained deformation removes any recovery time between exposure events. An O-ring in a closed joint is always stressed; there is no opportunity for the material to relax and recover between brew sessions the way an unstressed surface might.

## The DuoTight failure — correctly framed

With the Zone classification in place, the DuoTight failure can be stated precisely:

The POM collar is a **Zone C** component — permanently deformed around the inserted tubing. DuoTight fittings were routinely sanitised by spraying the assembled equipment with ABNS, including the external fitting bodies. The external surfaces of the fitting — including the collar — are not in the beer flow path. Beer flowing through the tubing does not rinse the external fitting surface. The spray-and-leave practice applied to internal food-contact surfaces (where no-rinse is approved and appropriate) was applied indiscriminately to external structural surfaces (where rinsing is both permitted and advisable).

The result: repeated ABNS application and evaporation on a permanently stressed, ESC-susceptible material. The collar experienced CF=250 conditions on every spray-and-dry event, at exactly the location of maximum mechanical stress.

POM's compatibility charts rate it as acceptable with ABNS at working dilution. POM's compatibility charts do not rate it under CF=250 conditions. The failure occurred in the gap between what was tested and what actually happened.

KegLand's solution — replacing POM with POK (polyketone) in the collar — addresses the material susceptibility. It does not address the practice that created the exposure: applying no-rinse discipline to external structural surfaces that have no food-contact reason to avoid rinsing. Both the material upgrade and the practice correction are valid responses; the POK collar makes the fitting more forgiving of the practice, but understanding why the practice was wrong is more useful long-term than simply trusting that the replacement material is immune.

:::note John Guest fittings
The same POM material is used in John Guest push-fit fittings, which remain widely sold and used in homebrewing gas and liquid line systems. The DuoTight design revision document identifies this but does not provide a recommendation. The material analysis and process guidance in this documentation applies equally to John Guest fittings — they are not exempt from the WDC model by virtue of being a different brand.
:::

## DDBSA in beer — the worst-case calculation

The preceding analysis focuses on material damage. There is a separate question that matters to the brewer: does the WDC residue end up in the beer, and if so, at what concentration?

The worst-case scenario is a fermenter interior: 4.2 mg of non-volatile DDBSA/phosphoric acid residue on the interior walls. Wort is added. The wort contacts all the surfaces and dissolves the dry residue film. What concentration does this produce in the wort?

$$C_\text{DDBSA} = \frac{4.2 \text{ mg}}{20{,}000 \text{ mL}} = 0.00021 \text{ mg/mL} = \mathbf{0.21 \text{ ppm}}$$

The flavour detection threshold for DDBSA in beer is approximately 1–5 ppm (detectable as a faintly soapy or off note by a trained taster). The worst-case calculation produces **0.21 ppm** — 5 to 25 times below the flavour threshold, and orders of magnitude below any toxicological concern.

This is the correct answer to the question "is foam from Star San dangerous?" — not "foam doesn't matter, don't worry about it," but a specific calculation showing that the residue concentration in beer is well below any detection threshold. The margin is not thin. You would need approximately 40,000 pints of beer made in this fermenter to approach the acute oral toxicity threshold for DDBSA. The calculation validates the no-rinse approval, and it shows *why* the approval is valid rather than asserting it from authority.

Note that this calculation applies to the fermenter interior — a Zone A surface where the residue dissolves into the beer. Zone B and Zone C residue does not dissolve into beer in the same way; the concern there is material degradation rather than residue concentration.

## The cleaning reset

The WDC model describes an accumulation process: each brew cycle adds one WDC worth of non-volatile residue to the surfaces of equipment that was not cleaned between uses. The critical mitigating factor is **post-brew cleaning**.

When you clean a fermenter with an alkaline cleaner (PBW, or a comparable oxygen-based cleaner) after fermentation and before the next brew, you remove the accumulated non-volatile WDC residue from all accessible surfaces. The alkaline surfactant system in a proper brewery cleaner is designed precisely to lift and remove this category of residue — dried organic and inorganic deposits.

Post-brew cleaning resets WDC accumulation to zero. This is the primary safeguard in the model — more important than material selection for most real-world outcomes. A fermenter cleaned after every batch in chemically resistant PP at Zone A is at lower practical risk than one that is never cleaned, even if made of a more chemically resistant material.

The implications for Zone B geometry are particularly important. Thread roots and confined geometries that accumulate more residue per WDC cycle than open surfaces also benefit disproportionately from proper cleaning — but they require *active* cleaning that reaches the geometry. A quick rinse does not clean a thread root. Disassembling the tap, brushing the threads, soaking in PBW, and rinsing thoroughly does. The process discipline that protects Zone B surfaces is therefore more demanding than the process discipline needed for Zone A surfaces.

### The grommet as a bounded case

The fermentation grommet — the EPDM rubber seal in the lid through which an airlock or blowoff tube passes — illustrates an important nuance in the WDC model. EPDM is rated "unsatisfactory" (U) for concentrated DDBSA in chemical compatibility references. Does this mean the grommet is at continuous risk throughout fermentation?

No, and the reason matters. The grommet experiences **at most one WDC per brew cycle**:

1. Sanitisation: ABNS is applied to the lid (including the grommet) and drained.
2. The grommet begins to dry. This is the WDC in progress.
3. Wort is added to the fermenter. The headspace becomes saturated with water vapour from fermentation CO₂ carrying humidity.
4. The humid headspace prevents the WDC from completing — the grommet surface is never in truly dry air during active fermentation.
5. Post-brew cleaning resets the grommet to zero.

The grommet therefore sees: one WDC initiation per brew, arrested before completion by fermentation humidity, then reset by cleaning. It is not an accumulating risk — it is a bounded one. The EPDM U-rating applies to prolonged exposure to concentrated DDBSA; the actual exposure is one partial WDC per brew, in a geometry (the lid, away from beer contact) where the consequence of slow EPDM degradation is a slow leak rather than a contamination event. Manageable, inspectable, replaceable.

## Zone A at scale — how many WDCs before concern?

For the fermenter body at Zone A, the PP surface rating is X (incompatible) for concentrated DDBSA — meaning the ISM compatibility chart rates PP as incompatible with concentrated benzenesulfonic acid. But the question is not compatibility with the CF=250 dry residue in isolation; it is whether enough damage accumulates in realistic use to cause a problem.

The analysis gives approximately 200+ unattenuated WDC cycles at Zone A before the PP approaches any concern threshold. At 25 batches per year with three spray events per batch, that is 75 WDC events per year — but the post-batch cleaning reset means the effective accumulated exposure is bounded per batch, not compounding indefinitely. Under normal brewing discipline, the Zone A fermenter wall is essentially never at meaningful risk in its service life.

The risk profile changes materially when:
- Cleaning is skipped, allowing WDC residue to accumulate batch over batch
- Spray events are repeated without cleaning (equipment hygiene sprays between uses)
- Temperature is elevated (higher temperatures accelerate both evaporation and chemical diffusion into the polymer)

The WDC model is not an alarm — it is a framework for understanding when the alarm should and should not sound.

## Summary: what the WDC model tells you

The wet-dry cycle model is a tool for thinking, not just a set of numbers. Its conclusions:

1. **The relevant concentration is not the working dilution — it is the dry residue.** Compatibility testing at working dilution is necessary but not sufficient for surfaces that undergo wet-dry cycling.

2. **Geometry determines exposure.** The same sanitiser, the same material, the same process produces different risk depending on whether a surface is Zone A (open), Zone B (confined), or Zone C (compressed). Zone classification should be the first question asked about any component.

3. **Time matters.** CF=250 is the endpoint of an 8–12 hour process. A surface used within minutes of draining has experienced CF=1 to CF=2, not CF=250. How long equipment sits between sanitisation and use is a process variable with real chemical consequences.

4. **Cleaning is the primary safeguard.** Not material selection, not chemical choice — cleaning discipline that resets WDC accumulation after every batch. Material selection matters at Zone B and Zone C, and for materials with low resistance at any CF. But for Zone A surfaces of chemically adequate materials, post-brew cleaning is the variable that matters most.

5. **The no-rinse rule applies to food-contact surfaces only.** External structural surfaces — fitting bodies, collar mechanisms, compression joints — can and should be rinsed with water after sanitisation contact time. Applying the no-rinse habit to external surfaces created the DuoTight failure. Understanding why the rule exists allows you to apply it correctly.

The next section applies this model to specific materials in the [materials register](./05-materials-register/index.md). Each material rating there traces back to the numbers and zones established here. For how the model applies to specific equipment, see the [Equipment guides](./Equipment/index.md).

---

*This page uses order-of-magnitude estimates for film thickness and evaporation rate derived from thin-film physics. Exact values depend on ambient conditions and surface geometry. The estimates are presented as such and should not be treated as experimentally measured results. The CF=250 derivation and the DDBSA-in-beer calculation are arithmetically exact given the input concentrations; input concentrations are taken from product SDSs cited in the [sources log](./References/01-references.md).*
