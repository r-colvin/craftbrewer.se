---
sidebar_position: 1
title: Introduction
---

# Introduction: why materials matter

Most homebrewing guides spend a lot of time on grain bills, hop schedules, and fermentation temperatures. Very few spend any time on the materials their equipment is made from, the chemistry of what gets applied to those materials, or what happens when the two interact. This guide exists to fill that gap.

The question that started this research was a simple one: if no-rinse sanitiser kills bacteria and wild yeasts, how is it no-rinse and safe for the beer? Reading the Star San product page produced more questions than answers. Reading the safety data sheets produced more still. And then came the [KegLand DuoTight Design Revision document](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf)[^1] — a manufacturer's own account of how a widely used push-fit fitting had been failing in the field because acid-based sanitisers were concentrating in the fitting collar during drying, stressing the plastic until it cracked.

That document established the mechanism. The question that followed was: where else in a typical homebrew setup does this happen?

The answer, it turned out, was: in quite a few places — but with very different consequences depending on the material involved, the geometry of the component, and what the brewer does (or does not do) afterwards. Some scenarios are genuinely concerning. Many are not. The point of this guide is to establish which is which, and to show the reasoning that supports that conclusion.

## The problem with conventional wisdom

Homebrewing has a lot of received wisdom about cleaning and sanitation. Most of it is broadly correct. Some of it is wrong in specific contexts that nobody has bothered to characterise. And almost none of it is explained at the level where you could independently verify it, apply it to a new piece of equipment, or understand when it might not hold.

A few representative examples:

- "Food-safe plastic is safe for homebrewing." This is true for the vessel body in most cases. It may not be true for every O-ring, grommet, tap washer, and airlock in the same kit — because food-safe plastic covers a wide range of materials with very different chemical resistance profiles, and the declaration of conformity for the bucket does not certify the grommet.
- "Star San is no-rinse and completely safe." The no-rinse designation applies at the correct working dilution and in accordance with the manufacturer's instructions — an undiluted or incorrectly prepared solution is not no-rinse, and the safety profile changes accordingly. For the internal surfaces of a fermenter that will be filled with wort, this is well supported. For the external structural components of a push-fit fitting that will be left to dry, this was the failure mode that caused the [DuoTight design revision](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf).
- "Viton is chemically resistant to everything." Viton fluoroelastomers have excellent resistance profiles. Viton comes in multiple cure systems — peroxide-cured and polyamine-cured — with meaningfully different resistance to acid-based sanitisers at low pH. Specifying "Viton" without specifying the grade leaves a significant gap.
- "I've never had a problem." This is the most common response to questions about materials compatibility. It is anecdotal and survivorship-biased. Degradation is often invisible until it becomes structural failure. Some toxicology risks — nitrosamine precursors from natural rubber, for example — produce no visible signal at all.

None of this is meant to be alarmist. The core thesis of this guide is: **here is why you probably don't need to worry, and here is the specific scenario where you might.** The goal is to validate conventional wisdom with evidence, to identify the specific edge cases where it fails, and to give you the reasoning tools to evaluate new situations yourself.

## A note on the use of AI in producing this guide

The research behind this guide — sourcing SDSs, tracking down manufacturer documentation, reading regulatory frameworks, testing claims against real products — was done by a human brewer with an interest in getting the answers right. AI tooling was used during the writing process: it helped locate sources that had been missed, draft prose, and structure arguments. Every factual claim was reviewed against the primary source it cites, and a significant number of AI-generated claims were corrected, qualified, or removed during that review. The time spent reviewing has been roughly comparable to the time it would have taken to write from scratch — which is probably the honest description of what responsible use of these tools looks like. The result is not an AI document, and it is not a purely hand-written one. It is research and judgment, with a different kind of writing assistance.

## How this research works

Every claim in this guide is traced to a primary source. Primary sources are manufacturer safety data sheets (SDS), declarations of conformity, EU regulations, and peer-reviewed data. Secondary sources — forum posts, YouTube videos, retailer Q&A — are noted where they flag an issue worth investigating, but they do not constitute evidence.

Where evidence is strong, the guide says so. Where it is inferred, the confidence level and the inference chain are stated explicitly. Where a follow-up question has been sent to a manufacturer and is awaiting a reply, that is noted as pending. Absence of documentation is not evidence of safety — and this guide will not treat it as such.

For chemical compatibility, safety data sheets are evaluated in priority order: Swedish SDS first, then EU, then rest of world. This reflects the regulatory environment of the site's primary audience.

## What this guide covers

The Brewer's Manual is divided into three sections:

- **Reference pages** — sanitisers, cleaners, the wet-dry cycle model, the materials register, toxicology, microplastics, and the documentation problem. These establish the analytical framework and material-by-material ratings.
- **Equipment** — specific guides for fermenters, packaging vessels, serving systems, and monitoring equipment, applying the framework to real products.
- **Processes** — brewing, fermentation, packaging, and serving as complete workflows, with material and chemical considerations integrated throughout.

The reference pages are designed to be read in order on first encounter — each one builds on the last. Equipment and process pages can be read in any order and cross-reference back to the relevant reference pages for the underlying reasoning.

## A note on scope

This guide focuses on cleaning and sanitisation chemistry and its interaction with equipment materials. It does not attempt to cover all aspects of homebrewing. Fermentation science, recipe design, water chemistry, and yeast management are all outside scope here — John Palmer's *[How to Brew](https://www.howtobrew.com/)* remains the best starting point for those topics, and this guide is in some ways a companion to it rather than a replacement.

What *How to Brew* does not cover in any depth is the materials science of the equipment that fermentation takes place in. That is the gap this guide is written to fill.

Regulation numbers, food contact standards, and biocide approval frameworks cited throughout are EU instruments — primarily [Regulation (EC) No. 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R1935), [Regulation (EU) No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R0010), and [Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0528). Equipment recommendations and retailer references reflect the Swedish market — Bryggbolaget, Mr-Malt, Malt Magnus, ölbryggning, and KegLand EU are the primary sources. Equivalent products are available worldwide; the underlying chemistry and material science are universal, and the analytical framework applies regardless of where you brew or what you buy.

## Disclaimer

This guide is a personal research project, written and published in good faith using publicly available sources. It is not professional advice — not legal, medical, safety, or engineering advice of any kind.

The chemical compatibility ratings, toxicology assessments, and practical recommendations in this guide represent the author's best understanding of the available evidence at the time of writing. They may be incomplete, may contain errors, and may not apply to every product, formulation, or situation. Manufacturer specifications, regulatory standards, and product compositions change over time — always verify against current primary sources before making decisions.

If you follow anything written here and something goes wrong, that is your responsibility, not mine. Homebrewing involves chemicals, pressure vessels, and consumable products. Understand what you are doing before you do it.

Where this guide says something is safe, it means: the evidence reviewed supports that conclusion under the described conditions. It does not mean: guaranteed safe in all circumstances for all people with all equipment.

---

[^1]: KegLand, *DuoTight Design Revision* (product document) — [kegland.com.au](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf) (accessed April 2026) · [`duotight_design_revision.pdf`](/references/duotight_design_revision.pdf)
