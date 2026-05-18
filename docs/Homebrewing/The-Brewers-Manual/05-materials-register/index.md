---
sidebar_position: 6
title: Materials
slug: /homebrewing/brewers-manual/materials-register
---

# Materials

Homebrewing equipment is made from a surprisingly wide range of materials. A single fermenter setup may contain five or six distinct plastics, two or three elastomers, and one or more metals — each with its own chemical resistance profile, its own food contact regulatory history, and its own failure mode under the chemicals applied to it.

This register catalogues as many as possible. Each material has its own page covering what it is, where it appears in homebrewing equipment, its food contact regulatory status, and its compatibility with the chemical environments it is likely to encounter.

Before reading the individual pages, the framework pages earlier in this section are worth having in hand:

- The EU food contact compliance framework — what makes a material food grade, how to read a Declaration of Conformity, and what to do when documentation is absent — is in [Food contact compliance](./00-food-contact-compliance.md).
- The sanitisers and cleaners these ratings apply to are described in [Sanitising](../02-sanitising.md) and [Cleaning](../03-cleaning.md).
- The wet-dry cycle (WDC) model — which explains why a material rating at working dilution can be different from its rating under concentrated dry-residue conditions — is in [The wet-dry cycle model](../04-wdc-model.md).
- Toxicology implications for specific materials are in [Toxicology and migration](../06-toxicology.md).
- A worked example of how cleaning and sanitising chemistry failures play out in real equipment is in the [DuoTight case study](../case-studies/duotight.md).

## Rating system

Five grades are used throughout:

- **A** — compatible. No meaningful degradation under typical homebrewing use conditions.
- **B** — use with caution. Compatible in most conditions but with specific limitations around concentration, temperature, contact duration, or geometry.
- **C** — limited use. Marginal compatibility; acceptable only in specific, controlled circumstances.
- **D** — avoid. Significant degradation risk or meaningful toxicology concern.
- **X** — incompatible. Do not use.

Where a rating carries important qualifications — and many do — those qualifications are in the individual page text, not collapsed into the grade. A B rating with five lines of caveats is a different thing from a B rating with one.

## Reading the columns

**ABNS** — acid-based no-rinse sanitiser (Star San, StellarSan, Sanipro Rinse, Chemsan, ChemiPro San). Ratings reflect working-dilution contact without WDC accumulation — sanitiser applied for the label contact time and either drained, wiped, or used in a way that does not allow concentration to build through repeated wet-dry cycles. This is the CF=1 scenario in the [WDC model](../04-wdc-model.md). WDC conditions arise wherever sanitiser can dry on a surface and be reapplied before cleaning — a fermenter tap sprayed before each sample pull is a real example. Where the rating changes under WDC conditions — whether a single concentrated dry cycle or accumulated cycles — this is flagged in the individual page and in the footnotes below, and is worth checking before using equipment that may have seen multiple WDC cycles.

**DES** — disinfectant ethanol sanitiser (ChemiPro DES, food-grade ethanol at 70–80%). Fully volatile — leaves no residue, no WDC risk.

**Cleaning** — covers all dedicated cleaning products used in homebrewing at working concentrations and typical temperatures (ambient to 60 °C). Three categories appear in this register, matching the taxonomy in the [Cleaning guide](../03-cleaning.md):

- **Alkaline percarbonate** (PBW, StellarClean, ChemClean, ChemiPro Wash, Enzybrew 10) — the dominant homebrewing cleaning category; sodium percarbonate releases hydrogen peroxide and sodium carbonate. Formulations vary in their secondary components: metasilicate content (Five Star PBW's EU-market formulation carries sodium metasilicate at 20–35% — comparable to StellarClean; the US-market formulation appears to differ, though this has not been confirmed from primary sources), chelating agents (EDTA in PBW, TKPP + EDTA in ChemiPro Wash), and surfactants. These differences matter for some materials.
- **Phosphate-based alkaline** (Grainfather High Performance Cleaner) — sodium tripolyphosphate (STPP) as the primary cleaning agent; effective for beer stone and mineral scale.
- **Oxidising** (ChemiPro OXI, StellarOxy) — sodium percarbonate without significant alkaline boosters; cleaning action is purely oxidative. The most material-benign profile of the three categories.

Caustic products (VWP, containing 30–50% NaOH) are out of scope for this guide — see the [Cleaning](../03-cleaning.md) page.

Where the Cleaning rating carries a dagger (A†, B†), the overall rating applies to the most benign product in the category. The footnote explains which cleaner subtypes require additional caution for that material.

**Beer/wort** — product contact at ambient to fermentation temperatures. Covers: hot wort at transfer (up to 95 °C where the vessel is rated for it), fermenting wort (pH 5.0–5.4), standard beer (pH 3.8–4.4, 4–12% ABV), high-ABV beer (up to ~20%), and sour beer (pH 3.2–3.5, lactic and acetic acid dominant). For most materials the rating is uniform across this range — where it is not (e.g. a material that handles standard beer but degrades under prolonged sour contact), the individual page explains the distinction.

## Quick-reference table

| Material | Common usage | ABNS | DES | Cleaning | Beer/wort |
|---|---|:---:|:---:|:---:|:---:|
| [Polypropylene (PP)](./01-pp.md) | Fermenter buckets, lids, taps, airlocks | A | A | A | A |
| [High-density polyethylene (HDPE)](./02-hdpe.md) | Taps, spray bottles, chemical storage | A | A | A | A |
| [Polyethylene terephthalate (PET)](./03-pet.md) | FermZilla vessel, Oxebar keg, PET bottles | A | A | A† | A |
| [Tritan copolyester](./04-tritan.md) | FermZilla Tri-Conical collection container | B | A | A | A |
| [Polystyrene — GPPS](./05-ps-san.md) | Airlocks (unconfirmed grade) | B | A | A | A |
| [Styrene-acrylonitrile (SAN)](./05-ps-san.md) | Airlocks (confirmed grade) | A | A | A | A |
| [Polycarbonate (PC)](./06-pc.md) | Siphons, bottling wands, sight glasses, some airlocks; older carboys | A | A | A | A†† |
| [Polyketone (POK)](./07-pok.md) | DuoTight fittings, RAPT Pill body | A | A | A | A |
| [Polyoxymethylene (POM / Acetal)](./08-pom.md) | John Guest fittings, older DuoTight | D–X | A | A | A†† |
| [Nylon 12](./09-nylon12.md) | Accessories, some sealing components | A | A | A | A |
| [EPDM rubber](./10-epdm.md) | Fermenter grommets, tap washers | B‡ | A | A | A |
| [Silicone (platinum-cured)](./11-silicone.md) | Bungs, hose, tap washers | B | A | A | A |
| [Natural rubber (NR)](./12-nr.md) | Budget grommets and washers — replace | D | C–D | — | D |
| [Styrene-butadiene rubber (SBR)](./13-sbr.md) | Budget grommets and washers — replace | D | C–D | — | D |
| [Nitrile rubber (NBR)](./14-nbr.md) | Some bottling wand seals | C | C | A | A |
| [Viton — peroxide-cured](./15-viton.md) | Spray bottle seals, O-rings | A–B | B | A | A |
| [Viton — polyamine-cured](./15-viton.md) | Spray bottle seals, O-rings | C | B | A | A |
| [Santoprene (thermoplastic vulcanisate, TPV)](./16-santoprene.md) | Oxebar Gen2 elbow, NukaTap shuttle | A–B | A | A | A |
| [LOW2](./17-low2.md) | FermZilla lid O-ring, Corny keg lid O-ring | B | A | A | A |
| [EVABarrier](./18-evabarrier.md) | Beer line tubing | A | A | A | A |
| [Stainless steel 304/316L](./19-stainless.md) | Cornelius kegs, mini kegs, NukaTap body | A | A | A | A |
| [Glass](./20-glass.md) | Airlocks, test jars, bottles | A | A | A | A |
| [PTFE](./21-ptfe.md) | Thread seal tape, filter discs, gaskets | A | A | A | A |
| [Aluminium](./22-aluminium.md) | Foil covers for flask openings (no direct liquid contact); aluminium cans have an internal polymer liner — the aluminium is not the food-contact surface | B/D§ | A | A | A |
| [Crown cap body (tinplate or TFS steel)](./23-crown-cap-liners.md) | Crown cap shell | A | A | A | A |
| [Crown cap liners](./23-crown-cap-liners.md) | PVC-free PE liner (standard caps): A; O₂-scavenging liner: avoid | A / avoid‖ | A | — | A |

*† PET Cleaning: A for oxidising cleaners (ChemiPro OXI) and low-metasilicate percarbonate (PBW, Enzybrew 10). High-metasilicate percarbonate cleaners (StellarClean, ChemClean, ChemiPro Wash) require limited contact time (30 minutes maximum) and should not be used hot. Follow manufacturer guidance for each vessel. See the [PET page](./03-pet.md) for the full analysis.*

*†† Rating applies if undegraded — see individual page for toxicology context.*

*‡ EPDM rates U (unsatisfactory) against concentrated DDBSA in laboratory compatibility references. Under the bounded WDC conditions typical of homebrewing — one partial wet-dry cycle per brew, arrested by fermentation humidity, reset by post-batch rinsing or cleaning — the practical rating is B. See the [EPDM page](./10-epdm.md) and the [WDC model](../04-wdc-model.md) (grommet as a bounded case) for the full analysis.*

*§ Aluminium: **B** where ABNS contacts the surface at working dilution and is drained or wiped off before drying (CF=1, no WDC). **D** where ABNS is allowed to dry on aluminium — even a single wet-dry cycle concentrates phosphoric acid to ~52% by mass (CF≈667), which is genuinely aggressive toward the aluminium oxide passivation layer. Manufacturer warnings against use on aluminium apply specifically in this scenario. The foil-over-starter-flask case is **B** because there is no direct liquid contact with the sanitiser — see the [Aluminium page](./22-aluminium.md) for the full analysis and safety margins. Other aluminium uses (pots, utensils) should be treated as **D** unless a no-WDC workflow can be confirmed.*

*‖ Crown cap liners: Standard caps use a PVC-free polyethylene liner — **A** for ABNS and all routine sanitising. Oxygen-scavenging caps have a moisture-activated iron-based scavenging layer: any liquid contact (including ABNS) activates and depletes this layer before the cap is applied, destroying the scavenging function. The cap still seals; the O₂ absorption is gone. Do not sanitise O₂-scavenging caps with any liquid. See the [Crown caps page](./23-crown-cap-liners.md) for the correct handling procedure.*

## Notes on identification

Several of the most important distinctions in this register — natural rubber versus EPDM grommets, polystyrene airlock grade (general-purpose polystyrene versus SAN), peroxide-cured versus polyamine-cured Viton, POM versus POK push-fit collars — cannot be determined by visual inspection alone. Materials that are chemically different can be visually identical.

When equipment documentation does not specify the material of elastomeric or plastic components to this level of detail, the safest approach is: ask the manufacturer directly, cross-reference the product against a known compliant specification, or choose a different product where the material is documented. In the case of natural rubber — where the toxicology risk is invisible to inspection — there is no acceptable alternative to confirmation or replacement.

The [Documentation problem](../02-documentation-problem.md) page covers this gap in detail.
