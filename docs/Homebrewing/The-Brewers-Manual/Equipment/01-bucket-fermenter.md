---
sidebar_position: 1
title: Bucket fermenters
---

# Bucket fermenters

*This page follows the EU regulatory framework and Swedish market context described in the [introduction](../01-introduction.md).*

The plastic bucket fermenter is the most common entry-level homebrewing vessel in Sweden, and in most configurations it is a perfectly adequate piece of equipment. The vessel is simple — a food-grade polypropylene bucket with a lid — and most of the practical questions concern the components attached to it: the tap, the grommet, and the airlock. These are the parts with chemical compatibility implications, and they are the parts where the choice of material matters.

This page covers the three configurations you are most likely to encounter, per-component analysis for each, and the cleaning sequence that applies to all of them.

## Configurations

### Configuration A — Bryggbolaget / generic

The most common entry-level set: a PP bucket from a Swedish homebrew retailer, typically sold as a complete kit with a tap and airlock already installed.

**Bucket:** PP — *A*-rated for all brewing chemicals. No Declaration of Conformity (DoC) confirmed for the standard Bryggbolaget bucket. This is a documentation gap, not a material concern — the bucket is almost certainly PP and almost certainly safe — but it represents a lower standard of traceability than the Witre alternative.

**Tap:** likely PP or HDPE; specific material not confirmed from a primary source for most generic taps. The Mr-Malt tap (CO-PP body, confirmed via product Q&A) is a documented Swedish option — PP/co-PP is *A*-rated for brewing use at ambient temperature.[^1]

**Tap washers:** opaque white — visually consistent with silicone. Not confirmed from primary source. Silicone is *B*-rated for ABNS and *A*-rated for DES; adequate for the seal function at this location.

**Grommet:** often a dark-coloured rubber grommet — may be NR (natural rubber). The Bryggbolaget starter kit has been reported to include an orange NR grommet.[^2] **Replace with EPDM or silicone before use.** See the grommet section below.

**Airlock:** typically PP or SAN — *A*-rated.

### Configuration B — Witre/Plast-Box bucket + KegLand tap

The best-documented configuration available in the Swedish market.

**Bucket:** Witre/Plast-Box PP — a food-grade PP storage container that brewers adapt for fermentation. Carries a Declaration of Conformity (DoC) referencing [Regulation (EC) No. 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R1935-20090807) and [Regulation (EU) No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R0010-20230923); migration tested by J.S. Hamilton Poland (accredited laboratory, PCA No. AB 079).[^3] Available in 5 L, 15 L, and 20 L.

**Tap:** KegLand HDPE tap — body confirmed HDPE; HDPE is *A*-rated for all brewing chemicals. Tap washer material unconfirmed, visually consistent with silicone.

**Grommet (KL01625):** described by KegLand EU as "I believe EPDM" — treat as EPDM for planning purposes.[^2] EPDM is manageable under normal brewing use; see grommet section.

**Airlock:** KegLand 3-piece PP airlock (KL01595) — material confirmed, dishwasher safe, *A*-rated.

### Configuration C — reader-assembled from available parts

Any bucket + any tap combination assembled by the brewer. The per-component analysis below applies directly. Use it to evaluate what you have and identify whether any substitution is warranted.

---

## Per-component analysis

### **Bucket body (PP)**

All configurations use PP. *A*-rated for ABNS, DES, and alkaline cleaners at any practical brewing temperature. No compatibility concern.

The bucket body is a Zone A surface — open, smooth, fully accessible. The WDC model gives approximately 200+ unattenuated wet-dry cycles before any concern threshold is approached at Zone A, and post-brew cleaning resets the count after every batch. In normal use, the bucket interior is essentially never at material risk. See the [wet-dry cycle model](../04-wdc-model.md) for the calculation.

The Witre/Plast-Box bucket has the strongest documentation. The Bryggbolaget bucket is functionally equivalent but undocumented to the same standard.

### **Tap material**

HDPE (KegLand tap) is the preferred tap material. HDPE rates *A* for ABNS at concentrations up to 25%, making it more resistant than PP to prolonged chemical contact — though the functional difference in normal homebrew use is small. PP taps are adequate; the difference only becomes meaningful under repeated concentrated exposure in Zone B geometry.

Do not use metal taps (zinc alloy / zamak) in contact with acidic sanitiser or beer. Zamak corrodes in acidic conditions and releases zinc into the beer.

### **Tap thread root — Zone B**

The thread root where the tap screws into the bucket wall is the highest-risk geometry on this equipment. It is a Zone B surface: a confined recess where liquid cannot drain freely and where cleaning solution cannot reach without disassembly. ABNS applied to the assembled tap drains from the bucket interior but is retained by capillary action in the thread root. As it evaporates, DDBSA and phosphoric acid concentrate to CF=250. This concentrated residue accumulates between brews if the tap is not disassembled and cleaned.

**Disassemble the tap after every brew and clean the thread roots.** A small bottle brush or pipe cleaner, with PBW soak, reaches the thread geometry that nothing else can. This is not optional maintenance — it is the primary safeguard for Zone B contamination risk.

Tap installation torque: finger-tight plus a quarter turn. Overtightening does two things — it compresses the washer flat, paradoxically reducing sealing effectiveness, and it increases Zone C stress at the bucket wall hole. The correct torque is consistent with a firm seal, not maximum force.

### **Tap washer / bulkhead seal (silicone assumed)**

The washer compressed between the tap body and the bucket wall is a Zone C component — permanently under compressive stress during the entire period the tap is installed. Silicone is *B*-rated for ABNS. The WDC mechanism at Zone C delivers DDBSA directly into a stressed elastomeric component.

In practice, the tap washer is a consumable. Inspect it at every cleaning event — it should be supple and symmetrically compressed. A hardened, cracked, or visibly flattened washer is past service life. Replacements are inexpensive; replace rather than tolerate a suspect seal.

### **Grommet (EPDM strongly preferred; NR — replace immediately)**

The grommet is the component that most warrants attention on this equipment.

**If the grommet is NR (natural rubber):** replace it before use. NR releases N-nitrosamine precursors into acidic beer — a toxicological concern that is chemically invisible, with no visible signal that migration is occurring. An NR grommet that looks intact and undamaged may still be migrating nitrosamine precursors into the beer throughout fermentation. Visual inspection provides no reassurance. The only mitigation is material selection. EPDM or silicone grommets are inexpensive and widely available. See [Toxicology](../06-toxicology.md) and [Natural rubber](../05-materials-register/12-nr.md) for the full analysis.

**How to identify NR:** orange or red-brown colour is strongly suggestive of NR. Black grommets may be NR, EPDM, or another elastomer — colour alone does not confirm EPDM. If unsure, replace.

**If the grommet is EPDM:** EPDM is rated U (unsatisfactory) for concentrated DDBSA in chemical compatibility references. But the grommet WDC exposure is bounded — see the [wet-dry cycle model](../04-wdc-model.md), grommet section — at most one partial WDC per brew, arrested by fermentation headspace humidity, reset by post-brew cleaning. The EPDM U-rating applies to prolonged concentrated exposure; the actual exposure per brew is one partial WDC event. Manageable, inspectable, replaceable.

**Grommet removal for cleaning:** recommended. The grommet groove (the circumferential channel gripping the lid hole) is a Zone B crevice. Cleaning solution and brush action cannot reliably reach the groove faces with the grommet in place. Removing the grommet allows full access to the groove and visual inspection of both the grommet and the lid hole edge. It is not strictly required every brew if the grommet is EPDM and cleaning is otherwise thorough — but annual removal and inspection is the minimum.

### **Airlock and fill liquid**

PP and SAN airlocks are *A*-rated. The Enolandia compact airlock material has not been confirmed (GPPS vs SAN — confirmation request outstanding); treat as GPPS and minimise sustained ABNS contact with the airlock body material if using that design.

**Fill liquid:** use working-dilution ABNS or undiluted glycerol. Do not use plain water (contamination and suck-back risk if contaminated). Do not use DES (ethanol) — at 70–80% concentration, suck-back delivers a slug of alcohol directly into the fermenter headspace, which is not desirable and carries a yeast-kill risk at the liquid surface.

The correct airlock sanitisation procedure: after sanitising the fermenter and draining into a clean jug, submerge the airlock in the jug of residual sanitiser for 30 seconds. Remove, do not rinse. Fill to the indicated level with fresh working-dilution ABNS. Install.

---

## Airlock — not a pressure vessel

The airlock is a one-way valve, not a pressure gauge. It bubbles during active fermentation because CO₂ exits. When it stops bubbling, fermentation may be complete — or the seal may have failed, or temperature may have dropped. A non-bubbling airlock is a prompt to measure gravity, not a confirmation that fermentation is done.

If the airlock fill liquid enters the fermenter (suck-back), this happens when the fermenter cools rapidly and creates negative pressure. Working-dilution ABNS suck-back is not harmful — the DDBSA concentration entering the beer is negligible relative to the already-present residue. Glycerol suck-back is harmless.

---

## Cleaning sequence — post-brew

1. **Immediate rinse:** while the fermenter is still warm and the yeast cake is still wet, add 2 L of cold water, swirl, drain through the tap. This removes the bulk of wet residue before it dries. Do it before anything else.

2. **Disassemble the tap:** unscrew completely from the bucket. Remove the nozzle if the tap design includes one.

3. **Soak all components:** fill the bucket with warm StellarClean or PBW solution. Drop in the disassembled tap parts, washer, and lid. Soak 15–30 minutes. Agitate where possible. For PP buckets, any temperature up to ~80°C is safe — no constraint. For the PBW soak, agitation (swirling, soft cloth wipe during soak) improves efficacy.

4. **Brush the thread roots:** use a small bottle brush or pipe cleaner to actively work the thread geometry on both the tap and the bucket hole. The soak softens residue; the brush removes it.

5. **Inspect the washer:** while disassembled and wet, assess the washer condition. Supple and uniformly compressed = serviceable. Hardened, cracked, or white-powdered = replace.

6. **Inspect the grommet:** if removed, check for hardening, cracking, or surface deterioration. EPDM remains supple in service; a stiff or cracked grommet has reached replacement age.

7. **Rinse thoroughly:** all components, until rinse water is clear and pH-neutral to a strips test. Alkaline cleaner residue on the tap bore will impair ABNS efficacy at next sanitisation.

8. **Dry and store:** store clean and dry. Damp, uncleaned equipment is a favourable environment for mould and biofilm before the next brew.

---

## Configuration rating summary

| | Bryggbolaget / generic | Witre + KegLand | Reader-assembled |
|---|---|---|---|
| Bucket DoC | ✗ not confirmed | ✓ EU 1935/2004 + 10/2011 | Depends on source |
| Tap material confirmed | Partial (Q&A only) | ✓ HDPE confirmed | Depends on choice |
| Grommet material confirmed | ✗ replace NR | Treat as EPDM | Verify before use |
| Cleaning access | Full with disassembly | Full with disassembly | Full with disassembly |
| Overall documentation | ★★★☆☆ | ★★★★★ | Variable |

The material risks across all configurations are manageable. The one non-negotiable action is grommet material identification and replacement — everything else is documentation quality and cleaning discipline.

---

[^1]: Mr-Malt product Q&A (paraphrased): "Är det co-pp? / Ja det är samma tappkran" — accessed April 2026 from [mr-malt.se](https://mr-malt.se). This confirms CO-PP body material for the Mr-Malt tap; washer material not specified in Q&A.

[^2]: KegLand EU, email response on KL01625 grommet material — described as "I believe EPDM." Treat as EPDM for planning purposes; formal material confirmation pending. Bryggbolaget orange grommet: anecdotal report (forum, treated as tier-3 source) describing orange NR grommet in standard starter kit.

[^3]: Plast-Box S.A. / Witre AS, [*Declaration of Conformity for PP food containers*](https://www.witre.se) (2015) — accessed April 2026 from [witre.se](https://www.witre.se); migration tested by J.S. Hamilton Poland, accredited laboratory PCA No. AB 079 · [`Witre PP Bucket DoC.pdf`](/references/Witre%20PP%20Bucket%20DoC.pdf).
