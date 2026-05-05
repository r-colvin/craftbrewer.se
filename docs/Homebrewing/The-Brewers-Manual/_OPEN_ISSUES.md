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

### `02-sanitising.md` — peracetic acid (PAA)
Peracetic acid (also peroxyacetic acid; abbreviation PAA) is widely used as a no-rinse sanitiser in professional and commercial brewing. Broad-spectrum antimicrobial, effective at low concentrations (typically 50–200 ppm), active across a wide temperature range, and breaks down to acetic acid and water — no problematic residue. Common products include Five Star Saniclean PAA and various commercial-grade formulations. Less common in the homebrew market than ABNS but used by more technically-minded homebrewers and relevant to anyone scaling up or using commercial-grade chemistry.

**Research needed before writing:**
- Confirm EU/Swedish market availability of PAA sanitiser products at homebrew scale
- SDS for at least one named product (Five Star or equivalent)
- Materials compatibility: PAA is an oxidising acid — compatibility with PET, PP, EPDM, silicone, and elastomers may differ from ABNS
- No-rinse approval status under EU food contact regulations
- WDC residue profile: PAA decomposes to acetic acid and water — residue behaviour differs fundamentally from DDBSA-based ABNS

**Label:** content, sanitising

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

### `01-introduction.md` — depth warning and quick-reassurance summary
The WDC model page is a deep technical dive. Most brewers encountering it for the first time may find it overwhelming. Two additions are needed in the main introduction:
1. A note that the manual contains seriously detailed analytical content, and that this is intentional — the depth is there for those who want to understand *why*, not just *what to do*.
2. A simple summary or linked callout for readers who just want reassurance: "Is no-rinse sanitiser safe to use?" → yes, here's why in three sentences, with a link to the full model for those who want the numbers.
**Label:** content, introduction

### Materials register — WDC accumulation charts per material and zone
The `04-wdc-model.md` page references charts in the materials register that map accumulated WDC exposure against damage thresholds by zone (Zone A/B/C) for each material. These charts do not yet exist. They are a high priority — they are the primary visual that makes the WDC model actionable for a reader looking at a specific material.

Each chart should show:
- X axis: number of WDC cycles (0–200+)
- Y axis: accumulated chemical exposure relative to damage threshold for that material
- Lines for Zone A, B, C showing different accumulation rates
- Markers for cleaning reset events
- Clear indication of where the concern threshold is crossed (and for most materials at Zone A, that it is not crossed in realistic use)

The DuoTight POM vs POK comparison (residue accumulation over WDC cycles) was flagged as a priority chart early in the research.

**Action:** Dedicated CB session once the materials register structure is established. Requires: confirmed damage threshold data per material from ISM/other charts, Zone B/C accumulation multipliers, and a decision on chart format (React component, static SVG, or Docusaurus chart plugin).
**Label:** content, materials-register, charts

### `04-wdc-model.md` — DDBSA LD50 primary citation
The DDBSA in beer section cites rat oral LD50 ~650 mg/kg and mouse oral LD50 ~50 mg/kg. Both are flagged as needing primary source confirmation. Suggested sources: ECHA REACH registration dossier for dodecylbenzenesulfonic acid (CAS 27176-87-0), or Sigma-Aldrich/Merck SDS. The footnote currently marks this as an open item.
**Action:** Locate and confirm primary source; update `[^ddbsa-ld50]` and `[^ddbsa-ld50-mouse]` footnotes.
**Label:** documentation, wdc-model

### `04-wdc-model.md` — StellarSan label images
The worked example in `04-wdc-model.md` cites two KegLand StellarSan product labels:
- **EU label (KL05357):** linked to the KegLand EU product page. The actual label is not archived as an image.
- **Australian label:** cross-referenced against the archived MSDS; the label itself is not archived.

**Action (Robert):** Obtain images of both labels (EU and AU), save to `static/images/wdc/` (e.g. `stellarsan-label-eu-kl05357.jpg`, `stellarsan-label-au.jpg`). Then open a CB session to add inline images to Step 1 and Step 4 of the worked example, making the source visible to the reader.
**Label:** content, wdc-model, images

✅ **`04-wdc-model.md` DuoTight failure images — Resolved 2026-04-27.** Images extracted by Robert from `duotight_design_revision.pdf` and saved to `static/images/wdc/`. Both added to the DuoTight failure section with alt text and captions citing the KegLand Design Revision document.

✅ **`04-wdc-model.md` EU focus and CF revision — Resolved 2026-04-27.** EU focus line added. KegLand DuoTight name and design revision citation added to opening paragraph. WDC definition, CF equation, and concentration factor section revised: variable definitions added, worked example rebuilt around confirmed StellarSan EU label figures (1.5 mL/L, CF≈667, 300 ppm DDBSA / 780 ppm phosphoric acid at working dilution), "Applying to your product" subsection added with simplified CF formula. Downstream figures updated (3.7 mg residue, 0.19 ppm DDBSA-in-beer). Prior CF=250 / 930 ppm phosphoric acid figures replaced throughout.

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

## Materials register — editorial intent and chart design principles

### Intent of materials register pages

Each materials page answers the question: **“Given that I have this material in my brewery, what can I do with it, and how safely can I push it?”**

The page does this by:
1. Describing the material’s chemical behaviour in plain terms
2. Establishing the actual limits through data and referenced sources
3. Showing — through charts or explicit numbers — how far normal homebrewing use is from those limits
4. Flagging the specific scenarios where limits *do* matter

The reader should leave knowing whether their equipment is safe, what the actual margin is, and what would have to go wrong to cause a problem. The pages are about the material in general; specific products from the conversation history are used as case studies and worked examples, not as the primary focus.

**What the charts are for:** The charts exist to make the margin between normal use and the concern threshold visually legible. A chart that shows accumulation on a linear scale — where the threshold is off the top of the visible area — makes the right point but only if the reader reads the axis labels. A chart on a logarithmic scale that shows all scenarios and the threshold together is more immediately readable. For materials where the concern threshold is *not* comfortably out of range, the chart should show clearly *when* and *under what conditions* that threshold is approached or exceeded.

### Chart design pattern established on PP page

The `PPZoneAChart` component uses a horizontal bar chart on a logarithmic scale to show four scenarios against the ESC concern threshold:
- Working dilution contact (CF=1)
- Single complete WDC (CF≈667, one cycle)
- Worst-case accumulated WDC (50 brews, no cleaning)
- The ESC concern threshold itself

This pattern — “show all scenarios including the limit on a common scale” — should be the template for other materials pages where WDC accumulation is relevant. For materials where the concern threshold *is* approached (EPDM, POM, GPPS), the chart will look very different — the bars will reach or exceed the threshold line, making the concern immediately visible.

For materials with split ratings (e.g., Zone A = A, Zone B = B, Zone C = D), separate bars per zone on the same chart make the geometry-dependence of the risk legible without requiring prose explanation.

**Components to create as materials pages are updated:**
- `EPDMZoneAChart.jsx` — EPDM at Zone A (bounded grommet scenario); line should approach but not reach concern threshold within typical service life
- `GPPSAirlockChart.jsx` — general-purpose polystyrene airlock; line should cross concern threshold at relatively low WDC cycle count
- `POMChart.jsx` — POM at Zone C; should cross threshold very quickly (this is the failure case the whole WDC model is built around)

**Label:** content, materials-register, charts

### WhereToBuy component usage in materials pages

The `<WhereToBuy productId="..." />` component should be added at the end of each chemical compatibility section where a specific product class is discussed. The pattern established on the PP page:
- ABNS section: all five ABNS sanitisers (stellarsan, star-san, sanipro-rinse, chemsan, chemipro-san)
- DES section: chemipro-des
- Alkaline cleaners section: the main cleaners (pbw-powder, stellarclean, chemipro-wash, chemipro-oxi)

This pattern should be carried forward to all materials pages when they are updated. The `WhereToBuy` component renders nothing if a productId is not found, so adding it is safe even if the product data is not yet complete.

**Label:** enhancement, materials-register

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

---

## Food contact compliance — ✅ extracted to standalone page

✅ **Resolved 2026-05-04.** `05-materials-register/00-food-contact-compliance.md` written and live. Individual material pages now refer here for the EU framework; material-specific details (additive packages, SMLs, DoC data) remain on individual pages. The Witre/Plast-Box and Mr-Malt DoC examples are documented centrally on the compliance page.

## Materials register — epistemic foundations and source documentation

Three related tasks arising from a review of the polymer science claims in the register:

### 1. Reference works section

Add a section to the materials register introduction (or a dedicated `references.md` entry) naming the primary reference works used as the basis for polymer science claims throughout the register. Candidates:
- *Polymer Handbook* (Brandrup, Immergut & Grulke) — standard reference for polymer properties, solubility parameters, permeability data
- *Chemical Resistance of Thermoplastics* (Wypych) — specific reference for compatibility claims
- ISM and Cole-Parmer chemical compatibility charts — already cited on individual pages; name as a class of source here
- EU Regulation 10/2011 and annexes — already cited inline; centralise the reference

Verify these are the actual sources used before committing them. The intent is that anyone wishing to independently verify "well-established polymer science" claims has a named starting point, without inline citations cluttering every paragraph.

### 2. Epistemic status statement on register introduction page

The register introduction should state explicitly:
- What "well-established polymer science" means in this context (molecular structure and bonding chemistry, not in dispute, verifiable via the named reference works)
- That where the guide reasons from principles to homebrewing-specific scenarios (WDC model, Zone B geometry, material-specific compatibility conclusions), that reasoning is original and presented as such — it has not been peer-reviewed
- That the register is under review by a materials scientist; a note confirming this and crediting the reviewer should be added once the review is complete

### 3. Audit Tier 2 claims for epistemic markers

Review the register pages for "applied inference" claims presented with the same confidence as established science. Where a claim is reasoned from principles rather than directly cited, soften the language: "this suggests," "consistent with," "the likely mechanism" rather than flat assertions. Known candidate for removal rather than softening: "HDPE's lower additive burden gives it a slight edge" in `02-hdpe.md` — cut this, it is uncited and the practical conclusion does not depend on it.

**Label:** content, materials-register, editorial-standards

### 4. Materials scientist review — how to approach it

**What you need from the review.** Not line-by-line verification of every claim — that would take weeks and is not necessary. Two specific questions:

1. **Are any claims in the register factually wrong?** Incorrect descriptions of polymer structure, wrong mechanisms, errors in the chemistry.
2. **Are any claims overstated relative to the evidence?** Places where the confidence level in the prose exceeds what the underlying science actually supports — particularly in the Tier 2 "applied inference" category (reasoning from established principles to homebrewing-specific scenarios).

**How to approach a materials scientist.** A few routes:
- University polymer science or materials engineering departments — a PhD student or postdoc working on polymer chemistry or food contact materials is a better fit than a professor, more likely to have time, and the work is well within their competence
- LinkedIn: search "polymer scientist" or "materials engineer" + Sweden/EU; frame it as a short voluntary review of a free public resource for homebrewers
- The Homebrew Talk or homebrewing subreddit communities occasionally have members with relevant qualifications — worth posting
- If approaching professionally: the scope is a review of the polymer chemistry claims in a ~10-page materials register for a homebrewing guide; estimated time 2–4 hours; unpaid but credited publicly

**What to send them.** The materials register pages as a PDF or link, plus a short brief:
- This is a homebrewing guide covering chemical compatibility of plastic and elastomeric equipment with cleaning and sanitising chemistry
- The polymer science draws on established material science principles applied to a non-standard context (homebrewing WDC conditions)
- You are not asking them to validate the homebrewing conclusions — just to flag any polymer chemistry that is wrong or overstated
- A brief written note after review (“reviewed by [name], [qualification], [date]; no factual errors identified” or similar) would be credited on the register introduction page

**What to do with the output.** Any corrections go directly into the affected material pages. Any "overstated" flags get softened using the epistemic marker language from task 3 above. The reviewer credit goes on the register introduction page.

**Label:** content, materials-register, editorial-standards, review

---

### ⏳ PP page — update food grade section + Zone cross-references

Two tasks pending on `01-pp.md`:

1. **Food grade section** — restructure to match the HDPE pattern. Remove the full framework treatment (additive packages, GMP, simulant conditions, DoC structure, repeated-use, what to do without a DoC) and replace with a cross-reference to `00-food-contact-compliance.md`. Content to retain on the PP page: PP-specific additive notes, the Witre/Plast-Box DoC as a named example with migration results, the Mr-Malt repeated-use gap, and the Bryggbolaget undocumented case. Remove the `:::note Food grade compliance across all materials` admonition if still present. Convert any `[SML](/glossary#sml)`, `[DoC](/glossary#doc)` and similar Markdown glossary links to `<GlossaryTerm>` components.

2. **Zone A/B/C cross-references** — audit every mention of Zone A, B, and C on the PP page. Each should link to the corresponding anchor on the WDC model page using the correct format: `#zone-a-open-surfaces`, `#zone-b-confined-geometry`, `#zone-c-compressed-contact-under-sustained-stress`.

**Label:** content, materials-register, pp

### `00-food-contact-compliance.md` — add hot-fill section

The EU food contact simulant framework tests migration at 40 °C over 10 days. No-chill brewing and hot-fill storage expose vessels to 95–100 °C for many hours — a scenario the framework does not directly address. This gap applies to any hot-fill vessel regardless of material (HDPE cube, PE/nylon bladder, stainless steel excluded as inert). A short section on the food contact compliance page should:
- Note the simulant framework's temperature limitation explicitly
- State that no DoC has been retrieved for any hot-fill vessel in this guide
- Cross-reference the no-chill process page and the HDPE temperature section
- Note the KegLand hot-fill bladder as a non-HDPE alternative (PE/nylon laminate, irradiated)

**Label:** content, food-contact, no-chill



The PP page now contains a detailed treatment of no-chill brewing and why PP buckets are not appropriate for it (Witre max use temp 40 °C, wort stays above 40°C for 12–14 hours). The WortCoolingChart component supports this with data.

This content should eventually be a standalone page in the process section, covering:
- What no-chill is and why brewers do it
- The thermal profile (cooling chart)
- Which vessels are appropriate: food-grade HDPE cubes (purpose-designed, rated for sustained high-temperature contact), stainless steel
- Which vessels are not appropriate: PP buckets (max use temp 40°C), undocumented buckets
- The WortCoolingChart component should be shared between this page and the PP materials page

**Label:** content, processes, no-chill

## Community contribution: Malt Miller PP brew vessel

The Malt Miller 30 L vessel is sold as a brew kettle but has no temperature specification, DoC, or food contact documentation. The PP page calls this out and invites contributors to provide documentation if they have it. If documentation is obtained, it should be added to:
- products.json (new equipment entry for the Malt Miller vessel)
- The PP temperature section (update the Malt Miller paragraph from “no documentation found” to “documented as follows”)
- `_OPEN_ISSUES.md` (close this item)

**Label:** community, materials-register, equipment

---

## DuoTight case study page

The DuoTight/POM failure mechanism is referenced in at least four places:
- PP page — as a contrast case showing why phosphoric acid attacks POM but not PP
- POM page (08-pom.md) — the primary material-level analysis
- POK page (07-pok.md) — why POK was chosen as the replacement
- WDC model page (04-wdc-model.md) — canonical real-world WDC amplification example

The full mechanism (acid hydrolysis → chain-unzipping → dimensional change → press-fit failure) deserves a single page where it can be told completely with quantification. Each material page currently summarises or repeats parts of it.

**Proposed location:** `docs/Homebrewing/The-Brewers-Manual/case-studies/duotight.md`

**Content scope for the case study page:**
- What the DuoTight is and where it is used
- The failure mode observed in the field (whitening, fitting loosening, leakage)
- The WDC mechanism: CF calculation, pH at CF≈667, acetal hydrolysis rate
- Chain-unzipping: why one broken bond propagates
- Dimensional change: how much surface loss breaks press-fit tolerance
- KegLand's material change: POM → POK, and why POK is resistant
- Lessons: what this means for any POM component in ABNS contact (John Guest fittings, older DuoTight)
- Cross-references: WDC model, POM page, POK page

**What each referencing page should do once the case study exists:**
- PP page: one sentence + link (already done — link is `../case-studies/duotight.md`)
- POM page: full material analysis stays on POM page; mechanism links to case study
- POK page: brief mention of why POK replaced POM; link to case study
- WDC model: the DuoTight reference in the concentration factor section links to case study

**Research available:** Full quantified analysis is in the project knowledge (conversation-part-e.md and 20260404072014-material-compatibility-in-brewery-cleaning-and-sanitation.md). The case study can be written directly from these sources.

**Label:** content, case-studies, wdc-model, materials-register

---

## New material pages required

### PBT (Polybutylene terephthalate)
PBT is a semi-crystalline polyester used in engineering components — connectors, valve bodies, some tap internals. It has better chemical resistance than PET but still has ester linkages susceptible to acid hydrolysis and alkaline degradation under WDC conditions. Not yet covered in the materials register.

**Research needed before writing:**
- Confirm which homebrewing products use PBT (specific components to identify)
- ISM or manufacturer chemical compatibility data for phosphoric acid, DDBSA, alkaline cleaners
- EU food contact status and any available DoC
- Temperature limits vs PET comparison

**Label:** content, materials-register, new-material

### ABS (Acrylonitrile butadiene styrene)
ABS is a common engineering thermoplastic used in tap handles, some equipment housings, and accessories. The styrene and acrylonitrile components give it different chemical resistance characteristics from pure polyolefins. Susceptibility to DDBSA (aromatic ring in the styrene component) may be a concern under WDC conditions.

**Research needed before writing:**
- Confirm which homebrewing products use ABS
- ISM chemical compatibility data
- Food contact status — ABS is not straightforwardly food grade; additive package matters significantly
- ESC susceptibility under ABNS conditions

**Label:** content, materials-register, new-material

---

## Images — PP material page

The Identifying PP section has an admonition placeholder for the following images. All should go in `static/images/materials/pp/`.

**To photograph (equipment in hand):**
- Base of a PP bucket showing RIC 5 code — macro shot, sharp focus on the embossed code
- Base of a food-grade bucket showing the fork-and-glass symbol (if present on your equipment)
- KL01595 airlock — overall shot showing PP construction, absence of resin marking
- Generic 3-piece airlock alongside KL01595 — visual comparison
- PP vs PET colour comparison — PP bucket lid or body next to a PET bottle or FermZilla section

**From vendor pages (check licence before use — most are ©):**
- Witre bucket product image — best to photograph your own rather than embed a vendor image
- Bryggbolaget bucket — photograph your own

**Format:** JPEG or WebP, 800px wide max, under 150KB. Descriptive filenames. Alt text should describe what to look for, not just label the object.

Once images are in place: replace the `:::note Images` admonition in the Identifying PP section with actual `![alt](/images/materials/pp/filename.jpg)` tags.

**Label:** images, materials-register, pp

---

## Regulatory image folder cleanup

The dark-mode-adapted regulatory SVGs exist in two locations:
- `static/images/` (original location, now stale — components no longer reference these)
- `static/images/regulatory/` (current location, referenced by FoodContactSymbol and ResinCode components)

The following files in `static/images/` can be deleted once confirmed the build is clean:
- `EU_food_contact_material_symbol.svg` (original, unmodified)
- `EU_food_contact_material_symbol_dark.svg` (dark-adapted, now in regulatory/)
- `Plastic_Recycling_Code_05_PP.svg` (original, unmodified)
- `Plastic_Recycling_Code_05_PP_dark.svg` (dark-adapted, now in regulatory/)

Keep the originals as archive references if desired; the `_dark.svg` versions in `static/images/` are superseded.

**Label:** cleanup, images, infrastructure

---

## PP page as editorial standard for materials register

The PP page (`01-pp.md`) as committed represents the expected standard for all subsequent material pages. The structure below should be followed for consistency, adapted where the material demands it (e.g. simpler food grade section for materials with less regulatory complexity, different chart types where WDC accumulation differs).

### Page structure

```
frontmatter (sidebar_position, title)
imports (WDCChart components, ResinCode/FoodContactSymbol as needed)

# Material Name (Abbreviation)

:::tip Summary
One-paragraph plain-language verdict: safe / use with caution / avoid.
Key limits in bold. Pointer to summary table at bottom.
:::

Summary table: ABNS | DES | Cleaning | Beer/wort
*Note on Cleaning column aggregation, pointer to cleaning section*

Opening paragraph: where it appears in homebrewing, named examples
Material chemistry: one paragraph on what it is and why it behaves as it does

## Identifying [Material]
RIC/marking guidance, symbol if applicable
Image placeholder admonition (or actual images when available)

## Food grade status
### What makes a [material] article food grade?
### What the EU compliance testing actually covers (simulant table)
### What a DoC covers — and what it doesn’t
### Repeated use
### What if you don’t have a DoC?
:::note Food grade compliance across all materials (cross-reference to PP page):::

## Temperature limits
Material limits vs article limits
Specific documented examples (e.g. Witre DoC)
Failure modes (structural / migration)
No-chill verdict if relevant

## Compatibility — ABNS: [Rating]
Why (mechanism, not just rating)
WDC analysis: per-cycle deposit, accumulation chart, honest threshold statement
Zone classification table

## Compatibility — DES: [Rating]

## Compatibility — cleaning: [Rating]
Three categories: alkaline percarbonate | phosphate-based | oxidising
Caustic out of scope

## Compatibility — beer/wort: [Rating]
Five scenarios: wort | standard beer | high-ABV | sour | no-chill pointer

## Summary by article type
Table: Article | Food grade | Temp limits | ABNS WDC | DES | Cleaning

---
Footnotes
```

### Established editorial principles

- **Rating letters in prose must be bold** (`**A**`, `**D**`) everywhere except table cells
- **Cleaning column** in the summary table is always labelled “Cleaning” and aggregates all three cleaner categories; a note below the table explains this and points to the cleaning section
- **No WhereToBuy or ProductCard components on material pages** — materials pages describe material behaviour; product discovery belongs in sanitising/cleaning guides and equipment guides
- **WDC analysis is chemistry-first, not threshold-first** — if no published threshold exists, say so and make the chemistry-based case; never fabricate a threshold
- **Honest about uncertainty** — explicitly flag where data is absent, extrapolated, or limited to accessible sources (not a comprehensive survey)
- **Two charts on PP page as templates:**
  - `PPZoneAChart.jsx` — dual-compound (DDBSA + H3PO4) line chart showing accumulation with/without cleaning; adapt for other materials
  - `WortCoolingChart.jsx` — Newton’s Law cooling curve; shared wherever no-chill is discussed
- **Temperature section** always distinguishes: (a) PP/material limits vs (b) article limits; the Witre DoC split (40 °C continuous / 95 °C hot-fill) is the model for how to present two-limit documentation
- **Food grade section** is written once in full on the PP page; subsequent plastic pages use a shorter version and cross-reference the PP page for the framework
- **Case studies** belong in `case-studies/` subdirectory, not embedded in material pages; material pages link to them
- **Summary tip admonition** at the top gives the plain-language verdict; a summary table at the bottom gives article-type-specific breakdown

**Label:** architecture, editorial-standard, materials-register
