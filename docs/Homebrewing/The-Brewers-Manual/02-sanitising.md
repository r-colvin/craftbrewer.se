---
sidebar_position: 3
title: Sanitising
---

# Sanitising

:::note EU focus
This page covers sanitisers available in Sweden and the EU. Product names, regulatory references, and supplier recommendations reflect that context. US products (Star San, PBW) are mentioned for comparison where they are widely referenced in the homebrew literature, but the primary recommendations are EU-available alternatives.
:::

Sanitising is the step that actually keeps your beer safe. Cleaning removes soil; sanitising reduces the microbial population on a clean surface to levels that cannot cause infection. The distinction matters: sanitiser applied over organic contamination is not effective. The sequence is non-negotiable — clean first, sanitise second.

This page covers the sanitiser landscape available to brewers in Sweden and the EU: how each product works, what it contains, correct use, and the specific scenarios where things go wrong. The material compatibility implications of sanitiser choice are developed in the [wet-dry cycle model](./04-wdc-model.md) and the [materials register](./05-materials-register/index.md).

## Acid-based no-rinse sanitisers (ABNS)

The dominant sanitiser class in homebrewing is acid-based, with dodecylbenzenesulfonic acid (DDBSA) as the primary active ingredient and phosphoric acid as co-acidulant. This class includes Star San (Five Star), Sanipro Rinse (Behrens Group), StellarSan (KegLand), and Chemsan (Chemisphere). They are treated as a group throughout this documentation under the term **ABNS** — the active ingredient and mechanism are functionally identical across all four products.

### How ABNS works

ABNS sanitisers kill microorganisms by disrupting cell membranes. At the acidic pH of a working-dilution solution (~3.0–3.5), DDBSA inserts into the phospholipid bilayer of microbial cell membranes, causing physical disruption and cell death. This mechanism is highly effective against the bacteria, wild yeasts, and moulds that cause homebrewing infections, and it is effective within a contact time of 30 seconds to 2 minutes at working dilution.[^1]

The phosphoric acid co-acidulant maintains the low pH necessary for membrane disruption and also contributes mild antimicrobial action directly.

### Active ingredients — what the SDSs say

All four products in this class are variants on the same chemistry, with modest differences in concentration ratios:

| Product | Manufacturer | Phosphoric acid (concentrate) | DDBSA (concentrate) | Working dilution | Contact time |
|---|---|---|---|---|---|
| Sanipro Rinse | Behrens Group AB (SE) | 40–50% | 15–25% | 1:250–1:333 | 30 sec |
| Star San | Five Star Chemicals (US) | 50–60% | 10–20% | 1:250–1:320 | 30 sec |
| StellarSan | KegLand (AU) | 40–60% | 10–30% | 1:250 | 30 sec |
| Chemsan | Chemisphere (UK) | 20–40% | 5–25% (as sodium salt) | 1:200 | 2 min |

At working dilution (approximately 1:250), DDBSA is present at roughly **300 ppm** in solution and phosphoric acid at roughly **930 ppm**. These are the concentrations that matter for normal use — and they are the starting point for the wet-dry cycle analysis.

### "No-rinse" — what it means

The no-rinse approval for ABNS sanitisers means that a working-dilution solution can be left on food-contact surfaces without rinsing before use, and that the residue — assuming surfaces are used promptly after sanitisation — does not pose a safety or flavour concern at the concentrations that remain on the surface.

The regulatory basis for this approval differs by product and market. Star San holds EPA registration (EPA Reg. No. 65001-1) as a no-rinse food-contact sanitiser in the US.[^2] Sanipro Rinse is approved under the EU biocide framework ([Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0528)) and described as no-rinse by the manufacturer.[^3] StellarSan carries a KegLand no-rinse declaration, though its SDS remains in Australian NOHSC format rather than EU REACH/CLP.[^4] Chemsan is EU REACH compliant with a 2-minute contact time.[^5]

The no-rinse claim is validated by the quantitative calculation in the [wet-dry cycle model](./04-wdc-model.md): the residue from a correctly drained ABNS application amounts to approximately 4.2 mg of non-volatile solids in a 20 L fermenter, which dissolves into wort to produce a DDBSA concentration of approximately **0.21 ppm** — well below the flavour detection threshold of 1–5 ppm and orders of magnitude below any toxicological concern.

**No-rinse applies to food-contact surfaces only.** External fitting bodies, compression collars, and structural components outside the beer flow path should be rinsed with water after sanitisation contact time. This distinction is discussed in detail in the WDC model.

### Foam

ABNS sanitisers foam. The foam is harmless — it is the same DDBSA surfactant in dilute form, enclosing air bubbles. Foam inside a fermenter does not indicate contamination, and it does not need to be removed before filling with wort. The wort addition disrupts the foam mechanically and the CO₂ produced during fermentation quickly displaces any residual air in the headspace.

The foam tells you the sanitiser is present and working. It is not an indicator of anything having gone wrong.

### Working dilution — correct preparation

Prepare ABNS at the manufacturer's specified working dilution — typically 4 mL per litre of water (1:250). Do not exceed working dilution: stronger is not better. Higher concentration increases DDBSA surface exposure and post-WDC residue mass without meaningfully improving microbiological efficacy.

Use cold or room-temperature water. Hot water is counterproductive: elevated temperature increases DDBSA partitioning rate into polymer surfaces, making the same sanitiser more aggressive toward PP, EPDM, and silicone than at ambient temperature. Ambient temperature (15–25°C) is optimal.

For a 20 L fermenter, 2–3 litres of working-dilution sanitiser is sufficient for fill-and-drain sanitisation. There is no benefit to filling the vessel completely — the goal is surface contact, not immersion.

### WDC risk — the thing that matters

ABNS non-volatile components (DDBSA and phosphoric acid) cannot evaporate. When ABNS is applied to a surface and the water evaporates, these components remain and concentrate. This is the [wet-dry cycle](./04-wdc-model.md). At complete drying of a 1:250 solution, the concentration factor (CF) reaches 250 — DDBSA goes from ~300 ppm to ~75,000 ppm (7.5%), and phosphoric acid from ~930 ppm to approximately 2.4 M.

The WDC model describes when this concentration matters and when it does not. For fermenter bodies (Zone A geometry, chemically adequate materials), the accumulation is bounded by post-brew cleaning. For confined geometries and compressed joints (Zones B and C), the concentrated residue has more significant implications.

**Post-brew cleaning is the primary safeguard** — it resets WDC accumulation to zero before the next brew.

### Long-term ABNS storage in equipment

Working-dilution ABNS can be stored in smooth-bore vessels with compatible seals — stainless kegs, PET fermenters, PP buckets — indefinitely, and this is appropriate where the vessel would otherwise sit empty and at risk of contamination. KegLand confirms that StellarSan working-dilution solution can be stored in a FermZilla All Rounder indefinitely without material concern.[^4]

Sustained ABNS storage is *not* a WDC scenario: with liquid present, the water-to-non-volatile ratio is fixed and evaporation cannot concentrate the solution. The WDC mechanism only begins when the vessel is drained and surfaces are exposed to air.

The limit for stored ABNS is elastomeric seals. O-rings, grommets, and gaskets that remain compressed in liquid ABNS undergo sustained chemical exposure — a different mechanism from WDC cycling, but a real one for sensitive elastomers. EPDM is manageable under sustained ABNS contact; NR is not. Replace NR components before storing ABNS in any vessel fitted with them.

---

## ChemiPro DES — ethanol-based sanitiser

ChemiPro DES (Brouwland, distributed by Malt Magnus in Sweden) is an ethanol-based sanitiser containing approximately 80% ethanol by weight.[^6] Its mechanism is different from ABNS: ethanol at 70–80% concentration denatures proteins and disrupts cell membranes through dehydration, killing vegetative bacteria, yeasts, and moulds effectively.

### Why DES is the correct choice for BrewClub Level 1

ChemiPro DES has three properties that make it analytically superior for the beginner context:

**Zero non-volatile residue.** Ethanol and water both evaporate completely. DES leaves nothing on the surface after drying — WDC risk is zero, by definition. There are no DDBSA residues to concentrate, no phosphoric acid accumulation, and no material compatibility implications from residue.

**No dilution required.** DES is used as supplied, directly from the bottle. There is no measuring, no mixing, and no waiting for a concentrate to dissolve. This reduces preparation error to zero.

**A-rated material compatibility.** Ethanol at 70–80% is compatible with all materials commonly used in homebrewing equipment — PP, HDPE, PET, EPDM, silicone, stainless steel, glass, POK. There are no conditional ratings or zone-specific concerns with DES at working concentration.

The BrewClub Level 1 DES protocol is: spray all surfaces to be sanitised, allow 30 seconds contact time, proceed. No draining required, no rinsing required, no foam, no residue.

### DES limitations

Ethanol is flammable. DES must be kept away from open flames and ignition sources — relevant if using a gas burner on brew day. This is a handling note, not a reason to avoid DES; simply apply it before lighting burners.

ChemiPro DES contains 20% undisclosed components beyond ethanol and water. The MaltMagnus SDS lists only ethanol as the hazardous ingredient.[^6] The non-hazardous fraction is not publicly characterised. This is not a safety concern for normal use, but it is a documentation gap for those who want to verify the full composition.

### Spray bottle selection for DES

DES (ethanol at 70–80%) requires a spray bottle with EPDM seals — the same rubber used in bottles designed for alkaline solutions. Silicone is also acceptable. Do **not** use a Viton-sealed spray bottle for DES; Viton rated for acids (the pH 1–9 Biltema bottle) may be polyamine-cured, and polyamine-cured Viton rates *C* (limited compatibility) for ethanol at these concentrations.

A practical option available in Sweden is the Biltema pH 7–14 spray bottle, which uses EPDM seals appropriate for both ethanol and alkaline cleaners. For ABNS, the Birchmeier McProper Plus P has been confirmed by the manufacturer as compatible with disinfectants and acids.

---

## ChemiPro San — the caveat

ChemiPro San (Brouwland) uses the same DDBSA chemistry as the ABNS group above. It is manufactured in Belgium and distributed through Swedish homebrew retailers. The reason it is treated separately here is a documentation problem that has not been resolved.

Brouwland's own materials contradict each other on the question of whether ChemiPro San is a rinse or no-rinse product:

- The product page and several blog posts describe it as no-rinse
- The formal product directions included with the product instruct rinsing with potable water after the contact time
- The Swedish and English language instructions differ in their treatment of this point
- No EU biocide framework approval equivalent to Sanipro Rinse's has been confirmed
- No food-contact no-rinse regulatory basis has been published by the manufacturer

**Position adopted in this documentation:** treat ChemiPro San as rinse-required until Brouwland publishes a clear, formal, EU-compliant no-rinse declaration backed by safety data. A formal confirmation request has been sent; this note will be updated if a satisfactory response is received.

This is not a statement that ChemiPro San is unsafe — it is a statement that the documentation does not support the no-rinse claim to the standard required. The chemistry is plausibly similar to Star San and Sanipro Rinse. The regulatory paperwork is not in order.

If ChemiPro San is used, rinse with clean water after the contact time. This removes the no-rinse convenience but is otherwise unproblematic.

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
| ChemiPro San | Treat as rinse-required | No-rinse approval not confirmed; formal request pending |

---

[^1]: Five Star Chemicals, *Star San Safety Data Sheet*, v2.1 (November 2020) — accessed April 2026 from [fivestarchemicals.com](https://www.fivestarchemicals.com). EPA Reg. No. 65001-1.

[^2]: Five Star Chemicals, *Star San Safety Data Sheet*, v2.1 (November 2020) — accessed April 2026 from [fivestarchemicals.com](https://www.fivestarchemicals.com). The EPA registration number (65001-1) is the US regulatory basis for the no-rinse food-contact claim.

[^3]: Behrens Group AB, *Sanipro Rinse Safety Data Sheet*, v1 (October 2016) — EU REACH/CLP compliant, including Swedish occupational exposure limits. Accessed April 2026 from [sanipro.se](https://sanipro.se).

[^4]: KegLand, *StellarSan Material Safety Data Sheet* — Australian NOHSC format. Accessed April 2026 from [kegland.com.au](https://kegland.com.au) · [`KegLand_StellarSan_MSDS.pdf`](/references/KegLand_StellarSan_MSDS.pdf). Note: SDS is in Australian format; EU REACH/CLP SDS not confirmed available.

[^5]: Chemisphere, *Chemsan Safety Data Sheet*, v2.2.0 (November 2020) — EU REACH/CLP compliant. Accessed April 2026 from [chemisphere.co.uk](https://www.chemisphere.co.uk).

[^6]: MaltMagnus / Brouwland, *ChemiPro DES Säkerhetsdatablad (Safety Data Sheet)*, v2.0 (February 2026) — EU REACH/CLP, prepared by KemRisk Sweden AB. Accessed April 2026 from [maltmagnus.se](https://maltmagnus.se).
