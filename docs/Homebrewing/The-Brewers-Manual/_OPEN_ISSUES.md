# CraftBrewer.se — Open Issues

**Purpose:** GitHub-issue-ready tracking of known gaps, deferred improvements, and follow-up tasks. Each item is written so it can be converted directly to a GitHub issue. Maintained alongside RESEARCH_MASTER.md.

**Last updated:** 2026-04-20

---

## Documentation gaps — manufacturer follow-up required

### Enzybrew 10 — manufacturer not confirmed
The Enzybrew 10 SDS is issued by MaltMagnus/KemRisk (supplier SDS). The actual manufacturer has not been identified from available sources. The product is sold via ölbryggning.se and MaltMagnus. Until the manufacturer is confirmed, the product profile cannot carry a manufacturer link.
**Action:** Identify manufacturer; add manufacturer link to product profile in `03-cleaning.md`.
**Label:** documentation, manufacturer-follow-up

### Enzybrew 10 — enzyme types not disclosed
The SDS and detergent label confirm enzyme content but do not individually disclose enzyme types (below REACH disclosure threshold). The product profile notes this.
**Action:** Contact manufacturer when identified; request enzyme type disclosure (protease/lipase/amylase confirmation). Update product profile if confirmed.
**Label:** documentation, manufacturer-follow-up

### ChemClean — no materials compatibility guidance from manufacturer
Chemisphere does not publish materials compatibility guidance for ChemClean beyond standard SDS hazard information. PET, stainless, PP compatibility at homebrewing conditions is unconfirmed from primary source.
**Action:** Request materials compatibility data from Chemisphere. Until confirmed, the general cleaner guidance in `03-cleaning.md` applies.
**Label:** documentation, manufacturer-follow-up

### ChemiPro Wash — no materials compatibility guidance from manufacturer
Brouwland does not publish materials compatibility guidance for ChemiPro Wash beyond standard SDS hazard information.
**Action:** Request materials compatibility data from Brouwland. Until confirmed, the general cleaner guidance in `03-cleaning.md` applies.
**Label:** documentation, manufacturer-follow-up

### ChemiPro San — SDS composition discrepancy unresolved
Two EU REACH/CLP SDSs exist for ChemiPro San (Brouwland primary Dec 2023; MaltMagnus/KemRisk supplier Feb 2026) and they disagree on phosphoric acid content (25–50% vs 50–80%) and surfactant CAS number. No-rinse status also unresolved.
**Action:** Raise directly with Brouwland for clarification. Until resolved, Brouwland primary SDS is authoritative and product is treated as rinse-required.
**Label:** documentation, manufacturer-follow-up, sanitising

### KegLand EU — several material confirmations outstanding
- FermZilla lid ring: GR-POK assumed, not confirmed
- FermZilla lid O-ring: LOW2 or EPDM assumed, not confirmed
- BlowTie diaphragm material: unconfirmed
- LOW2 EU food contact compliance: pending
- KL01625 grommet EPDM: treat as EPDM, formal confirmation needed
**Action:** Email KegLand EU with consolidated query.
**Label:** documentation, manufacturer-follow-up, materials-register

### Enolandia — PS airlock grade (GPPS vs SAN) unconfirmed
Enolandia compact airlock material grade not confirmed. Currently noted in `01-bucket-fermenter.md`.
**Action:** Email Enolandia for confirmation.
**Label:** documentation, manufacturer-follow-up, materials-register

### Brewtaurus StellarClean — incompatibility warning absent from KegLand
Brewtaurus retailer page carries "Do not mix with acidic or chlorine-based cleaners" for StellarClean; KegLand docs page and KegLand product page do not. Documented in `03-cleaning.md` footnote.
**Action:** Flag to KegLand EU as a documentation consistency issue. Consider whether to follow up after initial contact.
**Label:** documentation, manufacturer-follow-up

---

## Content gaps — deferred to future sessions

### `02-sanitising.md` — bleach as historical sanitiser
Brief treatment warranted: effective at ~50–100 ppm free chlorine, requires thorough rinsing, chlorophenol off-flavour risk, chlorine gas hazard with ABNS. Not recommended when ABNS available.
**Label:** content, sanitising

### `02-sanitising.md` — iodophor
Brief coverage as named option; EU/Swedish market context (less common than ABNS); no-rinse at correct concentration; staining risk.
**Label:** content, sanitising

### `02-sanitising.md` — Saniclean
Five Star low-foam ABNS variant. Same chemistry as Star San, formulated to reduce foaming. Relevant for kegs and serving lines.
**Label:** content, sanitising

### `02-sanitising.md` — ethanol wipes
KegLand AU product (not EU-available). EU equivalent: cloth pre-wetted with ChemiPro DES. Brief note in ethanol section.
**Label:** content, sanitising

### `02-sanitising.md` — no-rinse / tap water top-up argument
Full treatment of why rinsing with clean tap water is not meaningfully different in infection risk from standard top-up water practices. Currently flagged in `03-cleaning.md` footnote, points to `02-sanitising.md`.
**Label:** content, sanitising

### `04-wdc-model.md` — EU focus admonition missing
Low priority but noted.
**Label:** content, wdc-model

### `07-microplastics.md` — ANSES 2025 primary source
Currently cited via wasserdreinull.de secondary source. Attempt to locate primary ANSES report URL.
**Label:** documentation, microplastics

### Materials register — cleaner column review
Current material pages use "PBW" as the proxy column for all alkaline cleaners. With StellarClean, ChemiPro OXI, ChemiPro Wash, Enzybrew 10 now characterised, the single "PBW" column may need to be split or annotated. PET is the critical case: KegLand recommends against PBW for FermZilla but limits StellarClean to 30 min — a distinction not reflected in the register.
**Label:** content, materials-register

---

## Site infrastructure — future improvements

### Product images
All product profiles in `03-cleaning.md` and `02-sanitising.md` have a placeholder noting images will be added. Source priority: (1) manufacturer's site, (2) Swedish/EU retailers. Prefer local copies in `static/images/products/` with descriptive filenames. See image handling policy in RESEARCH_MASTER.md.
**Label:** enhancement, images

### Product JSON
Abstract all product data (name, manufacturer URL, retailer links per market, SDS links with version/date, image paths) into a structured `data/products.json`. This allows retailer links to be updated in one place rather than across multiple markdown files. Future: Docusaurus plugin to display current pricing.
**Label:** enhancement, infrastructure

### Retailer links disclaimer
A disclaimer should be added to the site introduction: retailer links carry no affiliate relationship, implied endorsement, or commercial arrangement. When product JSON is implemented, retailer links can be included there with the disclaimer covering them centrally.
**Label:** enhancement, infrastructure

### Glossary plugin — alias/stemming support
Plugin does not match inflected forms. Known false negatives: "saponifies", "saponifiable" (Saponify); "chelating", "chelation" (Chelating agent); "sequestering", "sequestration" (Sequester). Feature request needed on plugin GitHub repository.
**Label:** enhancement, glossary-plugin

### Glossary plugin — word boundary fix for short terms
Plugin matches "SAN" inside product names (StarSan, StellarSan, Chemsan, ChemiPro San) without word boundaries, triggering the SAN (plastic) tooltip incorrectly. Fix: extend the existing patch to add `\b` word boundaries to the matching regex.
**Label:** bug, glossary-plugin

### Glossary plugin — REACH false-positive
"reaches" triggers the REACH glossary term. Currently resolved by rewording. If upstream adds whole-word matching, revert workarounds.
**Label:** bug, glossary-plugin

### `glossary.json` — `url` fields
Add `url` field to remaining glossary terms as their dedicated doc pages are confirmed and written. Currently only POM and POK have `url` fields.
**Label:** enhancement, glossary

### `glossary.yaml` — legacy file
Legacy file still in repo root — safe to delete once confirmed no longer referenced.
**Label:** cleanup, infrastructure

### References page — `05-references/01-references.md`
Stub exists but not yet written. Needs full bibliography treatment.
**Label:** content, infrastructure

---

## Spray bottle and process content — deferred

### Spray bottle selection for ABNS and DES
Content exists (in RESEARCH_MASTER) but was removed from `02-sanitising.md` as it belongs in a processes or equipment handling section. DES requires EPDM or silicone seals (not polyamine-cured Viton). ABNS compatible with Birchmeier McProper Plus P (manufacturer-confirmed). Biltema pH 7–14 (EPDM) appropriate for DES and alkaline cleaners. Biltema pH 1–9 (polyamine-cured Viton) suitable for ABNS but not DES.
**Label:** content, processes

### DES flush for spot sanitisation
Content exists but deferred. Spray or dip small items with ethanol; 15–30 seconds; proceed.
**Label:** content, processes

### Airlock fill liquid
Content exists but deferred. Working-dilution ABNS or undiluted glycerol recommended; avoid 70–80% ethanol.
**Label:** content, processes

### Silicone hose sanitisation options
Content exists but deferred. Three options: ethanol flush, ABNS flow-through, boiling.
**Label:** content, processes
