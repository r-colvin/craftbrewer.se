# CraftBrewer.se — Open Issues

**Purpose:** GitHub-issue-ready tracking of known gaps, deferred improvements, and follow-up tasks. Each item is written so it can be converted directly to a GitHub issue. Maintained alongside RESEARCH_MASTER.md.

**Last updated:** 2026-04-24

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

### KegLand 3-piece PP airlock — "sterilise" claim
KegLand's [3-piece PP airlock product page](https://kegland.com.au/products/3-piece-airlock-for-fermenters) states the airlock can be "put in the dishwasher to sterilise". Dishwashers do not sterilise — they clean and reduce microbial load but do not eliminate all life. This is a documentation inaccuracy on KegLand's part. The dishwasher-safe claim is valid and cited in `03-cleaning.md`; the sterilise claim is not used.
**Label:** documentation, manufacturer-follow-up

### Brewtaurus StellarClean — incompatibility warning absent from KegLand
Brewtaurus retailer page carries "Do not mix with acidic or chlorine-based cleaners" for StellarClean; KegLand docs page and KegLand product page do not. Documented in `03-cleaning.md` footnote.
**Action:** Flag to KegLand EU as a documentation consistency issue. Consider whether to follow up after initial contact.
**Label:** documentation, manufacturer-follow-up

---

## Content gaps — deferred to future sessions

### Pipeline Purple Professional and Pipeline Rinse Test Papers — serving line products
[Pipeline Purple Professional](https://www.olbryggning.se/chemisphere/107568/pipeline-purple-professional-100-g-beer-line-cleaning-powder) (Chemisphere, via ölbryggning.se) is a beer line cleaner with a colour-change indicator: the solution runs purple through dirty lines and reaches a stable purple when clean. Alkaline, no caustic soda, 100 g makes 10 L. Safe on all line materials per product description.

[Pipeline Rinse Test Papers](https://www.olbryggning.se/chemisphere/107579/pipeline-rinse-test-papers-40-st-dot--testpapper-f%C3%B6r-reng%C3%B6ringsmedel-tapp) are test strips that verify cleaning solution has been fully rinsed before serving.

Both are serving line products, not general brewery cleaners. Neither belongs in `03-cleaning.md`. An SDS has not been retrieved for Pipeline Purple Professional.

**Action:** Add both to a future serving/keg line cleaning section. Retrieve SDS for Pipeline Purple Professional before writing. Include the colour-change mechanism and rinse test paper as a quality-assurance workflow.
**Label:** content, serving, keg-lines

### Processes — cleaning process guide
A step-by-step cleaning process guide is planned in `Processes/`. Key scenario to document: small-batch PP or PET fermenter + PET mini keg (Oxebar), immediate post-emptying rinse workflow, PBW tablet use at room temperature. This scenario is noted in `03-cleaning.md` closing section and in `Processes/index.md`.
**Action:** Write `Processes/01-cleaning.md` covering equipment-specific sequences. Integrate material constraints from the materials register (do not duplicate them).
**Label:** content, processes

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
Current material pages use "PBW" as the proxy column for all alkaline cleaners. With StellarClean, ChemiPro OXI, ChemiPro Wash, Enzybrew 10 now characterised from confirmed SDS data, the single "PBW" column needs to be split or annotated. PET is the critical case: KegLand recommends against PBW for FermZilla but limits StellarClean to 30 min — a distinction not reflected in the register.

**Important:** the early conversation parts contain a PBW vs. StellarClean compatibility analysis, but it was derived from incorrect formulation data (old KegLand docs page values, not SDS-confirmed). That analysis must not be used directly. Cleaner compatibility in the materials register needs to be re-derived from the confirmed SDS formulations now archived in `static/references/`.

**Action:** Dedicated materials register revision session. For each material page: assess each confirmed cleaner formulation at homebrewing conditions (temperature, concentration, contact time). Expand the rating table to distinguish at minimum: alkaline percarbonate (high metasilicate), alkaline percarbonate (low metasilicate/EDTA), oxidising cleaner.
**Label:** content, materials-register

---

## Site infrastructure — future improvements

### Product images
`static/images/products/` directory created 2026-04-24. `WhereToBuy` component updated to render image (120×120 px, object-fit contain) above retailer links when `image.local` or `image.remote` is set in products.json.

**Outstanding — image URLs:** Remote image URLs not yet populated in products.json. A sourcing checklist is at `docs/Homebrewing/The-Brewers-Manual/_IMAGE_SOURCING.md`. For each product, visit the linked retailer/manufacturer page, copy the main product image URL, and paste into `image.remote` in products.json. Then start a CB session to download local copies, set `image.local`, and remove the `:::note Product images` admonitions from `02-sanitising.md` and `03-cleaning.md`.
**Label:** enhancement, images

### Product JSON
✅ **Implemented 2026-04-24.** `static/data/products.json` (14 products) and `static/data/vendors.json` (13 vendors) written. `src/components/WhereToBuy/index.jsx` React component written. Fetches both JSON files at runtime; renders confirmed retailer links grouped by market (SE → EU → UK → AU → US); silently renders nothing if no confirmed URLs exist for a product.

### WhereToBuy component — wiring
✅ **Complete 2026-04-24.** `<WhereToBuy />` added to all 13 product profiles across `02-sanitising.md` and `03-cleaning.md`. Remaining null retailer URLs deferred to final documentation review.
**Label:** ~~enhancement, infrastructure~~

### Sanitiser packaging and dosing comparison
Packaging format and dosing convenience differ significantly between ABNS products and are worth covering in `02-sanitising.md` profiles:
- **Star San:** 8 oz (no dosing), 32 oz (built-in reservoir), 1 gal, 5 gal. The 946 mL size is most common in Sweden. At 4 mL/L, dosing requires a syringe at 1L scale in all sizes
- **Sanipro Rinse:** 250 mL, 1 L — standard bottles, no built-in dosing. Wide dosing range (1.25–2.5 mL/L) introduces user error without measuring tool
- **StellarSan:** 500 mL — dual-chamber dosing bottle; best built-in dosing of all products
- **Chemsan:** standard bottles, no built-in dosing
- **ChemiPro San:** standard bottles, no built-in dosing
**Action:** Add Dosage and packaging bullet to each ABNS product profile in `02-sanitising.md`, consistent with the format now used in `03-cleaning.md`.
**Label:** content, sanitising

### Vendor list — where to buy in Sweden
✅ **`static/data/vendors.json` written 2026-04-24.** 10 vendors seeded: malt-magnus, ölbryggning, mr-malt, hembryggeriet, kegland-eu, brouwland, five-star, chemisphere, behrens, kegland-au.

**Outstanding — vendor list page:** No dedicated site page listing all vendors exists yet. A future page could render a `<VendorList />` component reading from vendors.json. Deferred until SE retailer URLs are confirmed in products.json.
**Label:** enhancement, infrastructure

### Product JSON — workflow prompt
Use this prompt when `products.json` or `vendors.json` has been updated and downstream page edits may be needed:

> **CB · update · product pages after JSON change**
>
> We've updated `static/data/products.json` (or `static/data/vendors.json`). Before making any changes, please:
>
> 1. Read `RESEARCH_MASTER.md` and the updated JSON files from disk.
> 2. Identify which product profiles in `02-sanitising.md` and `03-cleaning.md` are affected (new retailer URL, changed URL, new SDS, added image).
> 3. If a product already uses `<WhereToBuy />`, no prose change is needed — the component picks up the JSON change automatically. If the product still uses a hardcoded inline link, update it.
> 4. If an SDS has been added or updated, check whether footnotes on the relevant page reference the new entry. Update footnotes to match the new SDS `label` and `archived_path`.
> 5. Update RESEARCH_MASTER.md section 1 (`static/references/` current contents) if a new PDF has been archived.
> 6. Do not rewrite prose. Targeted edits only.

**Label:** enhancement, infrastructure

### Dosage information — ChemiPro Wash and Enzybrew 10 not confirmed
Dosage figures for ChemiPro Wash and Enzybrew 10 are not yet confirmed from primary or retailer sources. Both product profiles currently say "consult product instructions".
**Action:** Locate dosage instructions from Brouwland (ChemiPro Wash) and from ölbryggning.se or MaltMagnus (Enzybrew 10). Update profiles and footnotes.
**Label:** documentation, manufacturer-follow-up

### Retailer links disclaimer
A disclaimer should be added to the site introduction: retailer links carry no affiliate relationship, implied endorsement, or commercial arrangement. When product JSON is implemented, retailer links can be included there with the disclaimer covering them centrally.
**Label:** enhancement, infrastructure

### Glossary plugin — alias/stemming support
Aliases are now supported in 3.3.2 via an `aliases` array field on each term object. Add aliases to glossary.json terms where inflected forms need to trigger tooltips (e.g. `"aliases": ["saponifies", "saponifiable"]` for Saponify). Stemming is not supported — aliases must be listed explicitly.
**Action:** Add `aliases` arrays to relevant glossary terms.
**Label:** enhancement, glossary

### Glossary plugin — word boundary and plurals matching
Fixed upstream in 3.3.2. The plugin now enforces word boundaries and handles `+s`/`+es` plurals. This resolves the `REACH`/`reaches` false positive and the `SAN` matching inside product names like `StarSan`, `StellarSan`, `Chemsan`. The sentence rewordings introduced as workarounds can be reverted if desired, but are harmless to leave in place.
**Status:** ✅ Resolved in 3.3.2 — no action required.
**Label:** ~~bug, glossary-plugin~~

### Glossary plugin — terms matched inside H1-H6 headings
Fixed upstream in 3.3.2. Terms in headings are now skipped by the remark plugin.
**Status:** ✅ Resolved in 3.3.2 — no action required.
**Label:** ~~bug, glossary-plugin~~

### Glossary plugin — REACH false-positive
✅ Resolved upstream in 3.3.2 (word boundary fix). Workaround sentences can be reverted if desired.
**Label:** ~~bug, glossary-plugin~~

### Glossary plugin — word boundary fix for short terms
✅ Resolved upstream in 3.3.2.
**Label:** ~~bug, glossary-plugin~~

### Glossary — full audit pass (post-3.3.2)
Now that 3.3.2 is in place (heading skip, word boundaries, alias support), a pass through all written pages is needed to:
- Check `autoLink: false` candidates — terms we don't want linking in certain contexts (e.g. `SAN` in prose may be fine, but review in context of cleaning/sanitising pages where product names dominate)
- Verify alias coverage is working correctly in the build for Saponify, Chelating agent, Sequester, Mashing
- Identify any new false positives introduced by 3.3.2's broader matching
- Identify terms with multiple meanings beyond IPA (India Pale Ale vs isopropyl alcohol) and decide handling per term
- Add `url` fields to terms as their dedicated pages are written
Scope: all pages through and including `03-cleaning.md` as a first pass; extend to remaining pages as they are written.
**Label:** enhancement, glossary

Add `url` field to remaining glossary terms as their dedicated doc pages are confirmed and written. Currently only POM and POK have `url` fields.
**Label:** enhancement, glossary

### docusaurus-plugin-glossary patch — REMOVED
✅ The patch (`patches/docusaurus-plugin-glossary+3.2.0.patch`) fixed the `import.meta.url` CJS bug. This was resolved upstream in 3.3.2.
- `patch-package` removed from `devDependencies`
- `postinstall: patch-package` removed from `scripts`
- Patch file marked for deletion (`git rm patches/docusaurus-plugin-glossary+3.2.0.patch`)
**Label:** ~~cleanup, infrastructure~~

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
