# Post-project checklist

Excluded from Docusaurus build (leading underscore). Version-controlled with content.

This checklist covers things to verify and fix across all written pages before the site is considered production-ready. Items are grouped by type, not by page — a single pass across all pages per item is more efficient than a per-page review.

---

## Glossary

- [ ] **Audit all written pages for alias coverage.** For each term with aliases in `glossary.json`, verify that inflected forms in prose are triggering tooltips correctly in the build. Priority terms: Saponify (saponifies, saponification), Chelating agent (chelation, chelates), Sequester (sequestering, sequestration), Mashing (mash, mashed).
- [ ] **Check for false positives introduced by 3.3.2 word boundary rules.** Scan pages written before 3.3.2 was in place. Any term that previously needed prose workarounds (e.g. REACH → reaches reworded) can be reverted if desired; confirm before reverting.
- [ ] **Audit `autoLink` candidates.** Review each short term in the glossary (SAN, IPA, NR, SBR, PS, CF, etc.) in the context of pages where those abbreviations appear in product names or different meanings. Flag any that are misfiring; apply `autoLink: false` per term if appropriate. Pages most likely to need attention: `02-sanitising.md`, `03-cleaning.md`, materials register pages.
- [ ] **Check for terms with multiple meanings.** Current known clash: IPA (isopropyl alcohol vs. India Pale Ale) — handled by convention (spell out India Pale Ale). Review all pages for any other term that is defined in the glossary but appears in a different sense elsewhere. Document each case in `_OPEN_ISSUES.md`.
- [ ] **Add `url` fields to all glossary terms** as their dedicated doc pages are confirmed and written. Currently only POK and POM have `url` fields. The "→ Full details" link in the tooltip depends on this.
- [ ] **Confirm all glossary terms render correctly in the production build** — not just in dev mode. Run `yarn build` and verify the glossary page and tooltips.

---

## Citations and inline links

The citation standard (from RESEARCH_MASTER.md section 1) requires:
- Every named source, document, or asset in body text carries a hyperlink — the footnote reference is not a substitute for an inline link; both must be present.
- When phrasing like "according to...", "the [X] states...", "per the [X] SDS...", "the [X] product sheet...", or similar attributions appear, the named document must link directly to the archived file (e.g. `/references/filename.pdf`) or the live URL if no archive exists.
- All archived documents must be in `static/references/` with the filename recorded in RESEARCH_MASTER.md.

**Audit steps:**

- [ ] **Scan all pages for attribution phrases without inline links.** Common patterns to search for:
  - `"The [product] SDS"` — must link to the SDS
  - `"The [product] product sheet"` — must link to the product sheet
  - `"per [manufacturer]"` — must link to the relevant document
  - `"according to [source]"` — must link to the source
  - `"[manufacturer] states"` / `"[manufacturer] confirms"` — must link to the document that states it
  - `"the [document] document"` — must link to the document
- [ ] **Verify every `/references/filename.pdf` link resolves** — run a link check or manually verify each archived file exists at the path cited. File names are case-sensitive on Linux/deployment; verify exact case matches.
- [ ] **Verify all live URL links** — confirm they are not 404 or redirected to a different page.
- [ ] **Check EU regulation links** go to the correct EUR-Lex article, not just the regulation homepage.

---

## Content accuracy

- [ ] **Availability statements.** Any statement of the form "not available in Sweden", "limited availability", or "not widely stocked" should be verified against current retailer listings before publication. These are time-sensitive and will go stale.
- [ ] **Open item flags.** Search all pages for `**Open item:**` markers. Each one represents an unresolved gap — confirm which have been resolved and remove the flag; for those still open, ensure the corresponding item exists in `_OPEN_ISSUES.md`.
- [ ] **Dosage figures marked Tier 2.** Any dosage cited from a retailer page (Tier 2) rather than a primary manufacturer instruction sheet should be flagged for follow-up. Priority: Sanipro Rinse (Behrens Group AB primary not yet obtained).
- [ ] **"At the time of writing" language.** Review all instances — these are correct as written but will need updating over time. Consider whether any are stale already.

---

## Packaging and commercial context

- [ ] **Verify packaging notes are current.** Sachet sizes, bottle formats, and tablet counts change. Verify against current retailer listings before publication.
- [ ] **Check all product links point to current product pages** — manufacturer URLs and retailer SKUs change. A product that has been reformulated or relaunched may have a new URL.

---

## Structural consistency

- [ ] **Confirm all pages use the same product profile format** as established in `03-cleaning.md` and `02-sanitising.md`: Manufacturer + SDS header line, then bullets for Formulation / Mechanism / Temperature and contact time / Chemical incompatibility / Safety (H314 only) / Dosage.
- [ ] **Confirm all pages have the materials register pointer** before the products section.
- [ ] **Confirm all pages have the Usage instructions admonition** before the products section.
- [ ] **Confirm all "Choosing a..." closing sections follow the use-case format** (not class-by-class), including the practical packaging/scale guidance and the "if you can only have one / if you can have two" framing where appropriate.

---

## Build and deployment

- [ ] **Run `yarn build`** — confirm the production build completes without errors or broken anchors.
- [ ] **Check all internal cross-reference links** in the build output — `./05-materials-register/index.md`, `./03-cleaning.md`, `./04-wdc-model.md`, etc. Relative paths must resolve correctly from each page's location.
- [ ] **Confirm `_OPEN_ISSUES.md` and `_POST_PROJECT_CHECKLIST.md` are excluded from the Docusaurus build** (leading underscore convention). Verify neither appears in the sidebar or search index.
- [ ] **Confirm `glossary.yaml` has been removed** (`git rm glossary.yaml`) — legacy file, no longer used.
- [ ] **Run the cleanup script** (`cleanup-old-structure.sh`) if not already done — removes old directory tree from git.
