---
sidebar_position: 2
title: High-density polyethylene (HDPE)
---

import ResinCode from '@site/src/components/ResinCode';
import GlossaryTerm from '@theme/GlossaryTerm';

# High-density polyethylene (HDPE)

| | ABNS | DES | Cleaning | Beer/wort |
|---|---|---|---|---|
| **Rating** | A | A | A | A |

*The Cleaning column aggregates all cleaning product categories used in homebrewing at working concentrations. For a breakdown by cleaner type — alkaline percarbonate, phosphate-based, and oxidising — see the [Cleaning compatibility section](#compatibility--cleaning-a) below.*

HDPE is a semi-crystalline polyolefin closely related to PP, distinguished by its almost fully linear chain with minimal branching. That linearity allows the chains to pack together more tightly, producing higher crystallinity — typically 70–90% versus 40–70% for PP. The dense, ordered crystalline structure this creates gives HDPE greater rigidity, higher tensile strength, and better chemical barrier performance than lower-density variants of polyethylene.

In homebrewing, HDPE appears in fermenters, fermenter tap bodies, food grade storage containers, vessels for hot liquid contact, chemical storage containers, and a range of accessories including funnels and measuring jugs. Where HDPE is worth choosing over PP — despite PP's dominance in the homebrew market (PP is a commodity polymer, lower cost to injection-mould at the bucket scale, and historically first-adopted for food-contact fermentation vessels) — is in applications where its higher crystallinity provides a meaningful advantage: tap bodies, where [Zone B](../04-wdc-model.md#zone-b--confined-geometry) geometry at the thread roots is where WDC residue concentrates; and hot-fill vessels, where HDPE's higher heat deflection temperature makes it structurally appropriate for sustained hot liquid contact in a way that PP is not.

## Identifying HDPE

Look for the <GlossaryTerm term="RIC">Resin Identification Code</GlossaryTerm> moulded into the base of the article — three chasing arrows forming a triangle, with the number **2** inside and **HDPE** below.

<div style={{display:'flex', alignItems:'flex-start', gap:'1.25rem', margin:'0.75rem 0'}}>
  <div style={{background:'#ffffff', borderRadius:'6px', padding:'8px', flexShrink:0, lineHeight:0}}>
    <ResinCode code={2} abbr="HDPE" size={72} />
  </div>
  <div style={{fontSize:'0.9rem'}}>
    <p style={{marginTop:0, marginBottom:0, color:'var(--ifm-font-color-secondary)', fontStyle:'italic'}}>The RIC 2 symbol as it appears on the base of <a href="/glossary#hdpe">HDPE</a> articles.</p>
  </div>
</div>

<small style={{color:'var(--ifm-color-emphasis-500)', fontSize:'0.72rem'}}>
  RIC symbol: Anton Poliakov, <a href="https://commons.wikimedia.org/w/index.php?curid=82815776" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Modified: fill colour adapted for dark-mode display.
</small>

HDPE is typically white, off-white, or translucent — similar in appearance to PP at first glance. The RIC 2 code is the most reliable way to distinguish it from PP (RIC 5) and from other white or translucent plastics when the material is not explicitly stated. Many HDPE articles do carry RIC markings, particularly storage containers, food packaging, and chemical containers designed for consumer use. Tap bodies and smaller fittings may not always be marked; the KegLand fermenter tap, for example, is confirmed HDPE by the product page description rather than by a moulded RIC code.

One useful visual cue: HDPE is often slightly more translucent than PP at the same wall thickness, with a faint waxy surface appearance. This is not a reliable primary identification method but can support identification alongside other evidence.

:::note Images
*Images showing typical HDPE articles — the KegLand tap body, an HDPE hot cube for no-chill brewing, and the RIC 2 marking on a food grade HDPE storage container — are planned for this section. The approach will match the PP page: show what to look for, the basis for material confidence, and how to distinguish from similar-looking materials including PP.*
:::

## Food grade status

HDPE has an extensively documented food contact safety profile — used globally for milk jugs, food storage containers, cutting boards, and piping for potable water. [EU Regulation 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923) lists HDPE with a specific migration limit for its monomer (ethylene, SML 15 mg/kg — practically never approached in solid HDPE articles).

The full food contact compliance framework — what makes an article food grade, <GlossaryTerm term="GMP">GMP</GlossaryTerm> requirements, EU simulant testing conditions, DoC structure, repeated-use provisions, and what to do without a DoC — is covered on the [Food contact compliance](./00-food-contact-compliance.md) page. Everything there applies to HDPE. This section covers only what is specific to HDPE.

### What makes an HDPE article food grade?

As with all thermoplastics, the polymer backbone is not the concern — the distinction between food grade and industrial grade HDPE lies in the **additive package**. Food grade HDPE uses EU 10/2011-approved antioxidants, slip agents, and processing stabilisers; industrial grade may use compounds outside that approved list. The RIC 2 code identifies the polymer type, not the additive package or GMP compliance.

HDPE's additive loadings are often lower than for PP. The higher inherent oxidation resistance of HDPE's linear chain structure — a consequence of its high crystallinity — means less antioxidant is needed during processing. Lower additive loading means, all else being equal, lower migration potential. Both materials comfortably pass EU 10/2011 limits when properly formulated.

### DoC availability for HDPE articles

For homebrewing-specific HDPE articles, the documentation picture is consistently sparse: the material is named, the food grade claim is made, and no DoC is publicly available. This applies across the category — the [KegLand fermenter tap](https://kegland.com.au/products/fermenter-tap-adjustable-spout-with-bulkhead-24mm-hole), the [KegLand 20 L hot cube](https://kegland.com.au/products/20l-cube-for-hot-cube-wort-storage-low-wines-stripping-run), and the [Speidel fermenter range](https://www.speidels-braumeister.de/en/products/fermentation-tanks/) are all described as HDPE with food grade claims and no retrievable DoC.[^1] This is the norm across homebrewing equipment, not an exception specific to any one product or manufacturer.

HDPE food storage containers from catering and food packaging supply chains are better documented — DoCs are obtainable for many such products from the manufacturer or distributor. If sourcing HDPE vessels from a food contact supply chain rather than a homebrew retailer, a DoC is more likely to be available on request.

## Temperature limits

The comparison below is primarily to PP, because PP is the closest material in the register and the most common alternative for the same articles. Other materials have their own temperature profiles — see each material's page. PET in particular has tighter limits than both polyolefins.

HDPE has meaningfully better high-temperature structural performance than PP. Its <GlossaryTerm term="HDT">heat deflection temperature</GlossaryTerm> (HDT) under load is typically 60–80 °C for standard grades, compared to 40–45 °C for thin-walled PP containers like the [Witre bucket](https://www.witre.se/sv/wsw/livsmedelsgodkand-plasthink-med-lock-1794m415). A PP bucket under sustained load above that range risks progressive structural deformation; HDPE handles it comfortably.

The [Speidel fermenter range](https://www.speidels-braumeister.de/en/products/fermentation-tanks/) provides a useful real-world reference: manufacturer-stated limits of 60 °C continuous and 80 °C for short periods.[^5] This is consistent with HDPE's typical HDT range and makes an important point: **not all HDPE articles are rated for hot-fill use.** A purpose-designed hot-fill cube such as the [KegLand 20 L cube](https://kegland.com.au/products/20l-cube-for-hot-cube-wort-storage-low-wines-stripping-run) carries an explicit boiling-fill rating; the Speidel fermenter does not, and should not be used for it. A food grade HDPE milk jug similarly has no hot-fill rating. Always confirm the specific article's rated temperature before using any vessel for hot liquid contact.

**UV exposure.** Food-grade HDPE is typically unpigmented and contains no UV stabiliser. Prolonged outdoor UV exposure degrades HDPE progressively — the surface becomes chalky and brittle. Store HDPE equipment out of direct sunlight; do not use a container that has been left outdoors for extended periods as a fermenter or hot-fill vessel.

**Continuous use temperature.** For undocumented food grade HDPE containers, 60 °C is a conservative working limit. There is no material safety concern from hot wort transfer or warm-water cleaning within this limit.

**Exceeding the temperature limit.** HDPE gives more margin than PP before structural distortion, but it will creep and deform under sustained load above its HDT. The failure mode is progressive distortion, not sudden failure. Chemical migration into the wort also accelerates with temperature — though food grade HDPE's low additive loading means there is no safety concern under normal brewing conditions.

**Hot water cleaning.** For components such as taps with complex geometries, a hot water pre-soak at 50–60 °C for 10–15 minutes loosens protein and hop deposits from thread roots and other hard-to-reach surfaces before the cleaning agent is applied. Cleaning always comes before sanitisation — sanitiser cannot work effectively on a dirty surface. Hot water contact at these temperatures presents no structural or safety concern for HDPE.

**Heat sanitisation.** For a hot water soak of up to a few minutes at near-boiling temperature, HDPE handles temperatures well above the 60 °C conservative limit without structural concern. The 60 °C limit applies to sustained use under mechanical load; a short-duration sanitisation soak is a different scenario. [KegLand's own guidance](https://youtu.be/UTrkRspm7UY?t=1050) recommends boiling as a sanitisation option for the disassembled HDPE tap body, demonstrating that some HDPE components tolerate extended contact at boiling temperatures. KegLand also recommend soaking in sanitiser as an equally effective option.[^3]

## Compatibility — ABNS: A

HDPE, like PP, has an all-carbon backbone with no functional groups susceptible to acid hydrolysis. Phosphoric acid — the co-acidulant in ABNS — has no attack pathway against HDPE at any concentration. The [ISM chemical compatibility chart](https://www.industrialspec.com/images/files/high-density-polyethylene-chemical-compatibility-chart-from-ism.pdf) rates HDPE as **A** (excellent) for phosphoric acid from dilute solution through to concentrated.[^2] The mechanism is identical to PP: no hydrolysable bonds, no aromatic rings susceptible to pi–pi stacking with the sulfonate DDBSA,[^4] and high crystallinity that reduces the accessible amorphous fraction.

It is worth noting that concentrated ABNS products — Star San, StellarSan, and equivalents — are routinely shipped and stored in HDPE bottles. This is not incidental: HDPE is the standard packaging material for concentrated phosphoric acid and sulfonic acid formulations precisely because of its excellent resistance to both components. A brewer handling a bottle of concentrated Star San is already handling HDPE in sustained contact with the undiluted product.

HDPE's advantage over PP becomes relevant specifically at [Zone B](../04-wdc-model.md#zone-b--confined-geometry) geometry. The [WDC model](../04-wdc-model.md) established that non-volatile ABNS residue concentrates at surfaces that drain poorly, dry slowly, or are geometrically confined — and tap thread roots are the canonical Zone B example. The ISM chart rates HDPE as **A** or **B** for benzene sulfonic acid (the reference compound for DDBSA) across concentrations where PP rates **B** or worse. This marginal improvement is not large enough to change the practical risk picture at [Zone A](../04-wdc-model.md#zone-a--open-surfaces) — both materials rate effectively safe for fermenter wall surfaces — but at Zone B it provides additional margin. The choice of HDPE over PP for tap bodies is therefore well-founded on chemical resistance grounds — though PP remains adequate under normal brewing conditions. If you have a PP tap, there is no need to replace it; if you are choosing between the two, all else being equal, HDPE is the better-founded option.

**DDBSA and WDC accumulation.** The per-cycle residue deposit at [Zone A](../04-wdc-model.md#zone-a--open-surfaces) geometry (fermenter interior surfaces, tap bore) is in the same range as PP — approximately 1.45 µg/cm² per WDC event — and cleaning between batches resets accumulation. HDPE's higher crystallinity means the amorphous fraction available for chemical penetration is smaller, giving a kinetic advantage: chemicals penetrate more slowly into HDPE than into PP at the same surface concentration. This advantage is most meaningful at [Zone B](../04-wdc-model.md#zone-b--confined-geometry) and [Zone C](../04-wdc-model.md#zone-c--compressed-contact-under-sustained-stress), where concentrated residue has sustained contact time with the material.

At Zone A — the open interior surfaces of a fermenter or storage container — neither PP nor HDPE presents a realistic WDC concern under any cleaning discipline consistent with good brewing practice. At Zone B — tap thread roots and bulkhead fittings — HDPE's marginal chemical resistance advantage over PP is one of several reasons it is the preferred material for this application. The full Zone B analysis for tap components is covered in the relevant [equipment guides](../Equipment/index.md).

**No published ESC threshold for HDPE at DDBSA concentrations.** No specific published threshold exists for DDBSA-driven ESC in HDPE under homebrewing WDC conditions. HDPE ESC is well-documented in general — a known failure mode in HDPE pipes and fittings in sustained chemical service — but the specific combination of DDBSA at WDC-elevated concentrations, tap-thread geometry, and typical homebrewing use has not been studied to a published threshold. The conclusion that HDPE tap bodies at Zone B are not a serious WDC concern rests on the chemistry (HDPE's all-carbon backbone and high crystallinity), on HDPE's better performance versus PP in ISM chart data, and on the practical observation that HDPE tap failures attributed to ABNS WDC accumulation have not been reported in accessible homebrewing literature.

## Compatibility — DES: A

Ethanol at 70–80% has no meaningful interaction with HDPE. ISM rates HDPE as **A** for ethanol at all concentrations up to 100%. For spray bottle bodies used to apply DES, food grade HDPE is fully compatible. The same note as on the PP page applies for sustained DES storage: HDPE can show slow ethanol permeation at 80% concentration over weeks to months. For a spray bottle that is regularly refilled and used, this is not a concern. For very long-term storage of high-concentration ethanol, glass is a more appropriate container.

## Compatibility — cleaning: A

HDPE is resistant to all dedicated cleaning products used in homebrewing at the concentrations and contact times involved.

**Alkaline percarbonate cleaners (PBW, StellarClean, ChemClean, ChemiPro Wash, Enzybrew 10):** HDPE's all-carbon backbone has no susceptibility to oxidation or alkaline hydrolysis across the full range of percarbonate cleaner formulations, from PBW at pH 11.5 to StellarClean and ChemClean's high-metasilicate pH above 12. The metasilicate component in higher-alkalinity formulations warrants a note: concentrated sodium metasilicate at elevated temperature can etch some polymer surfaces over prolonged contact. At homebrewing concentrations and ambient temperature, this is not a concern for HDPE — the material is chemically inert to all components of these formulations. Rating: **A**.

**Phosphate-based alkaline cleaners (Grainfather High Performance Cleaner):** STPP (sodium tripolyphosphate) and phosphate-based formulations present no concern for HDPE. Rating: **A**.

**Oxidising cleaners (ChemiPro OXI, StellarOxy):** No susceptibility to oxidation at homebrewing conditions. Rating: **A**.

HDPE is also rated for concentrated acids and alkalis far beyond anything encountered in homebrewing cleaning — this is why it is used for industrial chemical storage. Caustic cleaners (NaOH-based — VWP and equivalents) are out of scope for this guide; see the [Cleaning](../03-cleaning.md) page. HDPE is compatible with NaOH at homebrewing concentrations, but that is not a reason to use caustic cleaners at home.

**Note on cleaning HDPE hot-fill vessels:** after hot liquid contact, the vessel will have been in contact with wort at elevated temperature for an extended period. Cleaning should be done promptly after use, before proteins and carbohydrates set on the surface. PBW or a percarbonate cleaner at ambient temperature is appropriate; there is no need to clean at elevated temperature, and check the specific container's temperature rating before using hot water if you choose to.

## Compatibility — beer/wort: A

HDPE presents no compatibility concern for any beer or wort contact encountered in homebrewing.

**Standard wort:** pH 5.0–5.4, brief contact during transfer. ISM rates HDPE as **A** for all organic acids at homebrewing concentrations. No concern.

**Standard beer (4–8% ABV, pH 4.0–4.4):** HDPE is **A** for ethanol at all concentrations. No concern.

**High-ABV beer (above 8%):** HDPE remains **A** through 100% ethanol per ISM. No concern for high-gravity styles.

**Sour beer (pH 3.2–3.5, lactic and acetic acid dominant):** HDPE is fully resistant to lactic and acetic acid at homebrewing concentrations. The acetic acid simulant in EU food contact testing directly covers this scenario. No concern.

**Hot wort (direct fill into a rated HDPE hot-fill vessel):** HDPE is the correct plastic choice for this application — provided the specific article carries an explicit hot-fill rating. See the [temperature section](#temperature-limits) above for the distinction between rated and unrated HDPE vessels. Use purpose-designed HDPE hot-fill vessels with confirmed temperature ratings, and allow the wort to cool to pitching temperature before adding yeast.

**Fermentation in HDPE:** HDPE fermenters are a well-established product category — [Speidel](https://brewmasterwholesale.com/products/speidel-plastic-storage-tank-12l-32-gal.html) produce a range from 12 L to 120 L used for fermentation and storage. Chemical compatibility is identical to PP: **A** across all beer types at all fermentation temperatures and alcohol levels encountered in homebrewing.

## HDPE in homebrewing — the practical picture

HDPE is as chemically inert as PP to everything a brewer uses — the all-carbon polyolefin backbone has no attack mechanism for acids, alkalis, surfactants, or alcohol. Where it pulls ahead of PP is in the scenarios where geometry or temperature push beyond what PP comfortably handles.

**What HDPE is good for.** Tap bodies: HDPE's marginally better surfactant resistance at [Zone B](../04-wdc-model.md#zone-b--confined-geometry) geometry (thread roots, confined crevices) makes it the better-founded choice for fermenter taps where available, though PP taps in normal use are not a material concern. Storage containers: HDPE is the standard food contact material for bulk liquid storage — well-documented from catering and food packaging supply chains, and fully compatible with any cleaning or sanitising protocol. No-chill brewing: a purpose-designed food grade HDPE cube can receive near-boiling wort directly and hold it safely through a slow overnight cool — a scenario that exceeds the structural limits of a PP bucket. See the [no-chill brewing](../Processes/02-no-chill.md) process page.

**What HDPE is not good for.** Nothing specific to brewing chemistry. The constraints are structural and documentation-based: check the temperature rating of the specific article before using it for anything hot, and source from food-contact supply chains where a DoC is available or obtainable.

**Cleaning and sanitising HDPE.** The same protocol as PP: any alkaline percarbonate cleaner at working concentration, ABNS or DES for sanitising. No material-specific restrictions. The WDC model applies to HDPE as to all materials receiving ABNS contact, but at [Zone A](../04-wdc-model.md#zone-a--open-surfaces) geometry — fermenter interior walls, tap bore — the accumulation rate is the same as PP and the chemistry provides no attack mechanism. [Zone B](../04-wdc-model.md#zone-b--confined-geometry) at the tap thread roots is where HDPE earns its place over PP: the marginal chemical resistance advantage provides additional margin at the geometry where residue concentrates most aggressively.

**Migration.** Food-grade HDPE's additive package is approved for food contact and its additive loading is typically lower than PP, meaning migration from compliant, undamaged equipment at homebrewing temperatures is a fraction of the conservative EU test conditions. The open question — as with PP — is whether repeated ABNS contact gradually depletes the antioxidant package over many cycles; this has not been characterised for homebrew conditions, but is expected to be slow. If equipment is in good condition, migration is not a meaningful concern. If it is visibly damaged, retire it — not because migration risk is known to be elevated, but because the compliance data no longer applies.

**Temperature.** HDPE's higher HDT versus PP is real and meaningful — it is the correct plastic choice for any vessel that will receive hot liquid in sustained contact. Stainless steel is the better choice still where practical. The specific article sets the limit: check the rated temperature before using any undocumented container for hot-fill applications, and treat 60 °C as the conservative working limit for undocumented HDPE containers.

## Assessing and retiring equipment

HDPE is durable and chemically inert, but it is not indefinite. The signals that indicate an article should be replaced rather than cleaned:

**Mechanical scratching.** Clean HDPE with a soft cloth or sponge only — never a brush or abrasive pad. Scratches create surface texture that traps biofilm and cannot be reliably reached by sanitising chemistry. A visibly scratched fermenter interior or tap bore that cannot be restored to a clean, consistent finish after a thorough cleaning soak has exceeded its useful service life.

**Whitening or surface cloudiness.** Localised whitening, particularly around fittings, thread roots, or the base of a vessel, can indicate the early stages of stress-related surface change or chemical interaction. If it is accompanied by dimensional change — a fitting that has become loose, a lid that no longer seats correctly — retire the article.

**Warping or deformation.** Any distortion that prevents a lid from seating, causes a vessel to rock on a flat surface, or means a fitting is no longer secure. Deformed HDPE is a structural and hygiene problem.

**Persistent staining.** If a thorough percarbonate cleaner soak and rinse does not restore a visually clean surface, the article surface is too degraded for reliable sanitation.

**UV damage.** A chalky, brittle surface on equipment stored in direct sunlight. UV-degraded HDPE loses mechanical strength progressively; do not use visibly UV-degraded equipment as a fermenter or hot-fill vessel.

The principle across all these signals is the same: compliance testing is conducted on undamaged, GMP-manufactured equipment. Once visible damage is present, the compliance data does not apply — not because the risk is known to be elevated, but because it is unknown. HDPE hot-fill cubes and fermenter vessels are not expensive relative to the cost of a batch.

## Summary by article type

HDPE rates **A** across all compatibility columns. The practical picture varies by article type, particularly around temperature and use case.

| Article | Food grade | Temp limits | ABNS WDC | DES | Cleaning |
|---|---|---|---|---|---|
| **Fermenter tap body bore** | KegLand: confirmed HDPE by product page; no DoC retrieved.[^1] | Structural limit higher than PP — not the primary concern for tap bore at ambient fermentation temperatures. | [Zone A](../04-wdc-model.md#zone-a--open-surfaces) — low risk. Same accumulation rate as PP; HDPE's higher crystallinity provides slight additional barrier margin. | A | A |
| **Tap thread roots and bulkhead fittings** | As above | As above | [Zone B](../04-wdc-model.md#zone-b--confined-geometry)/[C](../04-wdc-model.md#zone-c--compressed-contact-under-sustained-stress) — elevated risk. HDPE has a marginal chemical resistance advantage over PP at Zone B, making it the better-founded tap material. See equipment guides. | A | A |
| **Storage containers and food grade HDPE buckets** | Variable. Prioritise articles with food contact marking or DoC. Source from food-contact supply chain. | Check manufacturer specification. Food grade HDPE containers: typically rated to 60–80 °C continuous use. | [Zone A](../04-wdc-model.md#zone-a--open-surfaces) — low risk at fermenter interior surfaces. | A | A |
| **Hot-fill vessels (purpose-designed, e.g. KegLand 20 L cube)** | Source from food contact supply chain. DoC preferred; none publicly available for named products. | Must carry an explicit hot-fill rating — not all HDPE is rated for boiling contact. Speidel fermenter (80 °C short-period) is not in this category. | [Zone A](../04-wdc-model.md#zone-a--open-surfaces) — low risk. | A | A |
| **Spray bottle bodies** | Variable. HDPE spray bottle bodies are common; confirm food contact if the bottle will contact beer or wort directly. | No elevated temperature concern for spray bottle use. | [Zone A](../04-wdc-model.md#zone-a--open-surfaces) — low risk | A — note on sustained ethanol storage above | A |

---

*MDPE (medium-density polyethylene), sometimes found in older equipment, has the same chemical compatibility profile as HDPE in all homebrew chemical environments. Its mechanical properties (lower stiffness, slightly lower HDT) differ, but its resistance to ABNS, DES, alkaline cleaners, and beer/wort is effectively identical to HDPE for the purposes of this guide.*

---

[^1]: KegLand, [*Fermenter Tap — Adjustable Spout with Bulkhead (24 mm hole)*](https://kegland.com.au/products/fermenter-tap-adjustable-spout-with-bulkhead-24mm-hole) (accessed May 2026 from kegland.com.au). Product description states: "Made from HDPE this handy little bulkhead tap has a barbed end." No Declaration of Conformity with migration test results has been retrieved from KegLand for this component. The food grade status of the tap body is unconfirmed from primary documentation.

[^2]: ISM Industrial, [*Chemical Compatibility Chart — High-Density Polyethylene (HDPE)*](https://www.industrialspec.com/images/files/high-density-polyethylene-chemical-compatibility-chart-from-ism.pdf). ISM's scale: A = Excellent, B = Good/minor effect, F = Fair, D = Severe effect. Rates HDPE as A for phosphoric acid (dilute through concentrated), A–B for benzene sulfonic acid (vs. PP's B–D). Covers bulk chemical exposure at standard temperatures; does not distinguish Zone A, B, and C conditions as defined in the [WDC model](../04-wdc-model.md).

[^3]: KegLand, [*15MBK Pacific Ale — 15min Boil — Extract Partial Grain Recipe — Stove Top Brewing*](https://youtu.be/UTrkRspm7UY?t=1050) (YouTube, timestamp ~17:30). At this point in the video KegLand demonstrates disassembly of the HDPE tap and recommends boiling the tap components or soaking in sanitiser as sanitisation options. The video also notes that the tap threads and other confined geometry represent a higher infection risk than open fermenter surfaces, reinforcing the Zone B analysis above. Tap sanitisation protocol is discussed further in the equipment guides.

[^4]: Pi–pi stacking: a non-covalent interaction between aromatic ring systems. The benzene ring in DDBSA's sulfonate head group can interact with aromatic rings in a polymer backbone through overlapping pi electron clouds. This interaction is why DDBSA is significantly more aggressive towards polystyrene (aromatic backbone) than towards polyolefins (no aromatic rings). PP and HDPE have no aromatic rings in their backbone, so pi–pi stacking is not a relevant mechanism for either material.

[^5]: Speidel, [*Plastic Storage Tank — FAQ*](https://brewmasterwholesale.com/products/speidel-plastic-storage-tank-12l-32-gal.html) (accessed May 2026 via Brewmaster Wholesale product page). FAQ states: material is HDPE; continuous use temperature up to 60 °C; short-period use up to 80 °C; no upper limit on alcohol content in principle, though higher ABV accelerates seal wear. No Declaration of Conformity retrieved.
