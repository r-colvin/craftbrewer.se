---
sidebar_position: 2
title: The documentation problem
---

# The documentation problem

The previous page described what this guide is trying to do. Before getting into materials and chemistry, it is worth explaining why this guide exists at all — because the answer to that question shapes how you should read everything that follows.

The short version is this: almost none of the information in this guide is available from the manufacturers and distributors who sell the equipment and chemicals it discusses. Not because they are hiding it — but because the market structure, regulatory environment, and economics of homebrewing equipment create a situation where the documentation never gets produced in the first place.

This matters. "I couldn't find that information" and "the information doesn't exist" are different things. And both of them are different from "the product is safe." Understanding the documentation gap is the first step to navigating it.

## What the regulatory framework actually requires

Homebrewing equipment sold in the EU exists within a regulatory framework that sounds robust until you look at what it actually requires.

Under **[Regulation (EC) No. 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004R1935)**, food contact materials must not transfer components to food in quantities that could endanger human health, cause unacceptable changes in composition, or deteriorate the food's organoleptic properties.[^1] Specific material types are regulated further — plastics under **[Regulation (EU) No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0010)**, which specifies migration limits and testing requirements.[^2]

What this framework requires is a DoC at each stage of the commercial supply chain — manufacturer to distributor to retailer. What it explicitly does not require is that the retailer provide that DoC to the end consumer. [Article 16 of Regulation (EC) No. 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004R1935#d1e1118-34-1) specifies the business-to-business obligation; the consumer-facing retail step is explicitly excluded.

This creates the first gap: a product can be fully compliant with EU food contact law and the consumer who buys it has no practical way to verify that compliance. Most consumers never ask. Most retailers don't volunteer it. The DoC exists somewhere in the supply chain, but the brewer at the end of that chain doesn't see it.

When documentation is available — as it is for the Witre/Plast-Box PP bucket (a food-grade storage container that brewers adapt for fermentation), where [a formal DoC can be obtained directly from Witre](https://www.witre.se/sv/wsw/livsmedelsgodkand-plasthink-med-lock-1794m415) — that is above-minimum disclosure, not the standard.[^3] The brewer who finds a DoC is getting a benefit that the regulatory framework doesn't guarantee.

## The second gap: what a DoC doesn't certify

Even when a DoC exists and is accessible, it covers what it covers — and that is not always what matters.

A DoC for a PP bucket certifies that the bucket body complies with EU 10/2011. It does not certify the grommet. It does not certify the tap assembly. It does not certify the O-ring in the airlock. Each of those components has its own material, its own regulatory status, and its own relationship to whatever sanitiser or cleaner comes into contact with it.

Rubber and silicone elastomers — the materials used for grommets, O-rings, seals, and tap washers — have no single harmonised EU food contact regulation. They fall under national regulations and the general framework of Regulation 1935/2004, which sets performance requirements without specifying testing protocols for the material class.[^4] A grommet sold into a homebrewing kit may simply never have been tested for migration under realistic use conditions. The vendor doesn't know; the documentation doesn't exist; and the absence of documentation cannot be read as evidence that the material is safe.

This is not a failure of any particular product or manufacturer. It is a structural feature of how food contact materials are regulated — and of how homebrewing equipment reaches the market.

## The third gap: chemical compatibility is not covered at all

Food contact regulations assess whether materials migrate harmful substances into food under normal use. They do not assess chemical compatibility — whether a cleaning or sanitising agent will degrade the material under repeated contact, produce concentrations of residue through a [wet-dry cycle](./04-wdc-model.md), or cause structural failure under mechanical stress.

This is a completely separate question from food contact compliance, and no part of the regulatory framework that governs homebrewing equipment asks it. A component that passes EU 10/2011 food contact testing is certified safe for contact with food. It is not certified resistant to acid-based sanitisers. It is not certified compatible with any specific cleaning protocol. Those questions are simply outside the scope of what food contact law addresses.

The [KegLand DuoTight Design Revision document](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf) — the piece of manufacturer documentation that started this research — was KegLand acknowledging that one of their own components had been failing in the field for precisely this reason: an acid-based sanitiser concentrating in a push-fit fitting collar during drying, stressing the [POM](./05-materials-register/08-pom.md) plastic until it cracked.[^5] The POM collar was food-safe. It was not chemically compatible with the concentration mechanism that emerged from normal sanitisation practice. Those are two different properties.

## Why the documentation doesn't exist

It would be easy to read all of this as manufacturer negligence. That would be the wrong reading.

Consider the PS airlock — the translucent S-bend or bubbler that comes in almost every beginner kit. A unit retails for less than the cost of a cup of coffee. The question of whether that airlock is chemically compatible with working-dilution acid-based sanitiser for sustained contact at fermentation temperatures is a legitimate question with a non-trivial answer. The testing that would resolve it — specific migration testing under the relevant conditions — would cost more to commission than the entire annual revenue from airlock sales at that price point. That testing does not get done. Not because anyone decided not to do it, but because the economics of the market don't create any incentive to do it, and no regulation requires it.

The same logic applies to grommet materials, tap washers, tubing compounds, and most of the other components in a typical homebrew setup. The documentation vacuum is structural. It is the predictable outcome of market economics and regulatory scope, not a series of individual decisions by companies that could have done better.

Understanding this reframes the problem. The gap is not between what manufacturers know and what they are telling us. The gap is between what has ever been systematically investigated and what has not.

## What the information landscape actually looks like

In compiling this guide, the following situations were encountered repeatedly:

**Compatible materials listed without grades.** A product is described as having "Viton seals" with no specification of the cure system — peroxide or polyamine. The difference is material for acid-based sanitiser compatibility. The information would cost nothing to add to a product listing. It is simply not there.

**Contradictory guidance within a single brand.** ChemiPro San's [product page on Brouwland](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) states to rinse with clean potable water. The [same brand's blog post](https://brouwland.com/en/blog/post/het-belang-van-grondig-reinigen-en-ontsmetten.html) describes the product as no-rinse: "Do not rinse; 'don't fear the foam'." The [Swedish product page on MaltMagnus](https://maltmagnus.se/se/sv/utrustning/rengoring/desinfektion/chemipro-san-250-ml/) omits any rinse step entirely.[^6] All three represent the same product, the same manufacturer, and fundamentally different instructions for one of the most practically important questions about using the product.

**SDS documents in the wrong regulatory format.** KegLand sells StellarSan into the EU market. The SDS linked from the EU product page is in Australian NOHSC format — the regulatory framework that applies in Australia, not the EU REACH/CLP format that applies where the product is sold.[^7] The SDS is not wrong; it simply isn't the document that belongs there.

**Q&A answers that substitute for primary documentation.** The material of the tap assembly on a commonly sold beginner fermenter kit was confirmed via a retailer Q&A response — not in any product specification, material data sheet, or food contact declaration. The Q&A answer may be correct. It is not traceable to a primary source and is not verifiable in any document.

**Conflicting instructions within a product ecosystem.** Two beginner kit manufacturers use the same PS airlock. One brand's included instructions omit any step for sanitising the airlock. Another brand's beginner kit instructions describe filling the airlock with working-dilution acid-based sanitiser. Neither instruction set acknowledges that the choice of protocol has material compatibility implications for the PS component. Both presumably follow the instructions without any sense that they are making a consequential decision.

**A vendor who didn't know.** During the research for this guide, one direct conversation with a vendor produced the clearest possible illustration of the problem: when asked about the compatibility of one of their products with acid-based sanitisers, they responded honestly that they didn't know. They weren't withholding information. There was no information to withhold.

## What this guide is not saying

None of the above is an attack on any manufacturer, distributor, or retailer. The documentation gap is a structural problem, not a character flaw. Vendors are selling products whose material specifications they themselves often don't know. Manufacturers are operating within a regulatory framework that doesn't require the documentation this guide would benefit from. Experienced brewers who say "don't worry, have a homebrew!" are sharing knowledge that is genuinely based on real outcomes from real experience — and in most scenarios, that experience is a reliable guide.

"I've never had a problem" is real data. An experienced brewer who has used the same equipment and process across hundreds of batches without visible problems is telling you something true: the risk in their specific practice has been low enough that it has not produced a detectable outcome in their experience. That is not nothing.

The questions this guide adds are: what would a problem look like if it occurred? Would it be visible, or would it be attributed to something else — off-flavours blamed on fermentation, a cracked fitting treated as a manufacturing defect, a structural failure diagnosed as accidental damage? And are there scenarios — a different beer style, a different sanitiser, a different airlock material, a different process step — where the same practice produces a different outcome?

"Don't worry, have a homebrew" is usually the right advice. It forecloses the question rather than answering it. This guide's version of the same reassurance is: *here is why you probably don't need to worry, and here is the specific scenario where you might.* That is a more honest and more useful answer, because it gives you the tools to evaluate situations the guide has never seen.

## The standard this guide advocates

The information that should be available — and that would resolve most of the questions this guide is forced to work around — is not complex:

For every food-contact component in a homebrewing product: the material it is made from, the applicable food contact standard it has been tested against, and any conditions or limitations of use. This information should appear in the product specification, not in a Q&A response.

For every cleaning and sanitising chemical: a clear statement of whether no-rinse use is approved, and if so under what regulatory basis. For products sold into the EU market, this means an EU-format SDS and an explicit statement about whether the product holds the relevant biocide approval for food contact no-rinse use under **[Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32012R0528)**.[^8]

This is not an unreachable standard. It is the standard that applies to food processing equipment in industrial settings. The reason it doesn't apply at homebrewing scale is economics and regulatory scope, not technical impossibility.

## An invitation

This guide is published openly and updated as new information becomes available. Where it says "we could not find this information," that is an accurate description of a search result — not a conclusion about the product.

This page is directed particularly at the manufacturers, distributors, and vendors whose products appear in this research. We hope you will read it. If something here is wrong, incomplete, or out of date, you are in the best position to correct it — and we will update the guide and credit the correction accordingly. If a section identifies an open question about one of your products, the question is listed specifically because we want it answered, not because we are making an accusation. The goal is accurate documentation, not criticism.

A manufacturer who provides a material specification, migration test data, or compatibility documentation that resolves an open question has made a genuine contribution to the homebrew community. That contribution will be noted here.

The open questions we are aware of are listed throughout the equipment and materials pages. The most significant ones at time of writing include: confirmation of the PS grade used in common compact airlocks (GPPS or SAN); confirmation of the cure system in Viton-sealed spray bottles; formal no-rinse regulatory basis for ChemiPro San under EU Regulation 528/2012; and EU food contact confirmation for LOW2 O-rings. If you can answer any of these, the contact details are on the site.

The documentation problem is real. This guide is one attempt to address it. Contributions are welcome.

---

[^1]: [Regulation (EC) No. 1935/2004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004R1935) of the European Parliament and of the Council on materials and articles intended to come into contact with food (accessed April 2026)

[^2]: [Commission Regulation (EU) No. 10/2011](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0010) on plastic materials and articles intended to come into contact with food (accessed April 2026)

[^3]: [Plast-Box S.A. / Witre AS, Declaration of Conformity for PP food containers (2015)](https://www.witre.se/DownloadDocument?pageId=321Z97N_00YPBB5JH005V41&fileType=pdf) — accessed April 2026 from [witre.se](https://www.witre.se); tested by J.S. Hamilton Poland (PCA No. AB 079) under EU 1935/2004 and 10/2011 · [`Witre PP Bucket DoC.pdf`](/references/Witre%20PP%20Bucket%20DoC.pdf)

[^4]: No single harmonised EU regulation exists for rubber and silicone food contact materials. The [German BfR Recommendation XV (Silicones)](https://www.bfr.bund.de/en/service/databases/bfr-recommendations-on-food-contact-materials/) and [BfR Recommendation XXI (Natural and Synthetic Rubber)](https://www.bfr.bund.de/en/service/databases/bfr-recommendations-on-food-contact-materials/) provide guidance under German national law. At Council of Europe level, [Resolution ResAP(2004)4 on rubber products intended to come into contact with foodstuffs](https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=09000016805db85d) provides a non-binding framework. None of these are directly applicable EU law — they fill a recognised gap in the harmonised framework.

[^5]: KegLand, *DuoTight Design Revision* (product document) — [kegland.com.au](https://kegland.com.au/cdn/shop/files/duotight_design_revision.pdf) (accessed April 2026) · [`duotight_design_revision.pdf`](/references/duotight_design_revision.pdf)

[^6]: Sources compared: [Brouwland product page — rinse instruction](https://brouwland.com/en/cleaning-products/10224-chemipro-san-1-l.html) (accessed April 2026); [Brouwland blog — no-rinse instruction](https://brouwland.com/en/blog/post/het-belang-van-grondig-reinigen-en-ontsmetten.html) (accessed April 2026); [MaltMagnus Swedish product page — no rinse step stated](https://maltmagnus.se/se/sv/utrustning/rengoring/desinfektion/chemipro-san-250-ml/) (accessed April 2026). Formal no-rinse regulatory approval under EU Regulation 528/2012 has not been confirmed for this product. Treat as rinse-required until confirmation is received.

[^7]: KegLand StellarSan MSDS — [kegland.eu](https://kegland.eu/cdn/shop/files/KegLand_StellarSan_MSDS_3903b72c-9ec5-4212-9ccd-e9b3bb02b5df.pdf) (accessed April 2026) · [`KegLand_StellarSan_MSDS.pdf`](/references/KegLand_StellarSan_MSDS.pdf). Format is Australian NOHSC, not EU REACH/CLP. Five Star Star San holds US EPA registration No. 65001-1; Behrens Sanipro Rinse holds EU biocide registration — these are the strongest documentation examples for the ABNS product class.

[^8]: [Regulation (EU) No. 528/2012](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32012R0528) of the European Parliament and of the Council concerning the making available on the market and use of biocidal products (accessed April 2026)
