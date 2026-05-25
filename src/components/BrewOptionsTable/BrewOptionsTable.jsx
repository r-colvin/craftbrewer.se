import { useState, useMemo } from "react";
import styles from "./BrewOptionsTable.module.css";

// ─── KIT DATA ──────────────────────────────────────────────────────────────
// To add a new kit: add an entry here AND in _tracking/BREW_OPTIONS.md (KIT-XXX)

const KITS = [
  {
    id: "KIT-001", name: "FWK — undiluted (15L)", shortName: "FWK undiluted",
    type: "fwk", supplier: "olbryggning.se",
    url: "https://www.olbryggning.se/ravaror/receptkit/fwk",
    batchLitres: 15, abv: 8.3,
    brewTimeMinutes: 20, boilRequired: false, splitBrewDay: false,
    fermTempMin: 18, fermTempMax: 28, fermTempIdeal: 20,
    kveikCompatible: true, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 18.75, minFermenterKveik: 21.4,
    packaging: ["3× Oxebar 4L", "5× 2.5L bottles"],
    dryHop: false,
    tags: ["fwk", "no-boil", "strong"],
    notes: "DIPA strength (~8.3%). No pot needed. Best for strong styles. Kveik at 14L max in 20L fermenter; standard yeast at 20L+.",
  },
  {
    id: "KIT-002", name: "FWK — main batch (16L std / 14L kveik)", shortName: "FWK main batch",
    type: "fwk", supplier: "olbryggning.se",
    url: "https://www.olbryggning.se/ravaror/receptkit/fwk",
    batchLitres: 16, abv: 7.0,
    brewTimeMinutes: 20, boilRequired: false, splitBrewDay: false,
    fermTempMin: 18, fermTempMax: 28, fermTempIdeal: 20,
    kveikCompatible: true, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 20, minFermenterKveik: 20,
    packaging: ["4× Oxebar 4L", "6× 2.5L bottles"],
    dryHop: false,
    tags: ["fwk", "no-boil"],
    notes: "12L wort + 4L water = 16L (std yeast). 3L remainder → 15L fermenter or Oxebar (max 5L safe). Kveik version: 10.5L + 3.5L = 14L, 4.5L remainder to 15L fermenter.",
  },
  {
    id: "KIT-003", name: "FWK — split with friend (2× ~10L)", shortName: "FWK split",
    type: "fwk", supplier: "olbryggning.se",
    url: "https://www.olbryggning.se/ravaror/receptkit/fwk",
    batchLitres: 10, abv: 6.0,
    brewTimeMinutes: 25, boilRequired: false, splitBrewDay: false,
    fermTempMin: 18, fermTempMax: 28, fermTempIdeal: 20,
    kveikCompatible: true, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 12.5, minFermenterKveik: 14.3,
    packaging: ["2× Oxebar 4L each", "4× 2.5L each"],
    dryHop: false,
    tags: ["fwk", "no-boil", "brewclub"],
    notes: "7.5L wort + 2.5L water each = 10L at ~6% ABV. Same wort, two yeasts = two different beers. BrewClub Brew 1 format.",
  },
  {
    id: "KIT-004", name: "Köksbryggeriet 10L — Stigberget WC IPA", shortName: "Stigberget IPA ⭐",
    type: "extract", supplier: "koksbryggeriet.se",
    url: "https://www.koksbryggeriet.se/sv/artiklar/stigbergets-west-coast-55-65-receptsats-10-liter",
    batchLitres: 10, abv: 5.5,
    brewTimeMinutes: 60, boilRequired: true, splitBrewDay: true,
    fermTempMin: 17, fermTempMax: 25, fermTempIdeal: 20,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 12.5, minFermenterKveik: 14.3,
    packaging: ["2× Oxebar 4L", "4× 2.5L bottles"],
    dryHop: true,
    tags: ["extract", "partial-boil", "ipa", "hoppy", "dry-hop", "brewlog-L01"],
    notes: "⭐ L-01 — brew this week! House 21–24°C ideal NOW, window closing. 4.5L partial boil in 10L pot. Split brew day: boil at lunch, transfer on coffee break.",
  },
  {
    id: "KIT-005", name: "Köksbryggeriet 4L refill", shortName: "Köksbryggeriet 4L",
    type: "extract", supplier: "koksbryggeriet.se",
    url: "https://www.koksbryggeriet.se/sv/artiklar/receptsatser/4-liter-refill-receptsats/index.html",
    batchLitres: 4, abv: 5.0,
    brewTimeMinutes: 45, boilRequired: true, splitBrewDay: true,
    fermTempMin: 17, fermTempMax: 25, fermTempIdeal: 20,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 5.0, minFermenterKveik: 5.7,
    packaging: ["1× Oxebar 4L", "2× 500mL bottles"],
    dryHop: false,
    tags: ["extract", "small-batch"],
    notes: "Needs 5.5L fermenter. Good for yeast experiments alongside a larger batch.",
  },
  {
    id: "KIT-006", name: "Mr Malt 5L beginner kit", shortName: "Mr Malt 5L kit",
    type: "kit", supplier: "mr-malt.se",
    url: "https://mr-malt.se/en/recipes/beginner-kit-for-5-liters-of-beer",
    batchLitres: 5, abv: 5.0,
    brewTimeMinutes: 60, boilRequired: true, splitBrewDay: true,
    fermTempMin: 18, fermTempMax: 24, fermTempIdeal: 20,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 6.25, minFermenterKveik: 7.1,
    packaging: ["5L party keg (natural carb, no CO2 cost)"],
    dryHop: false,
    tags: ["kit", "natural-carb", "brewclub", "free-fermenter"],
    notes: "Free 5.5L fermenter included. Natural carbonation in 5L party keg — no CO2 cost. Party keg tap already owned. Good BrewClub starter.",
  },
  {
    id: "KIT-007", name: "Georges 5L — IPA (pure extract)", shortName: "Georges IPA",
    type: "kit", supplier: "mr-malt.se",
    url: "https://mr-malt.se/en/recipes/extract/ipa-extract-kit-for-georges-beer-5-l",
    batchLitres: 5, abv: 5.5,
    brewTimeMinutes: 30, boilRequired: false, splitBrewDay: false,
    fermTempMin: 18, fermTempMax: 24, fermTempIdeal: 20,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 6.25, minFermenterKveik: 7.1,
    packaging: ["1× Oxebar 4L", "2× 2.5L bottles"],
    dryHop: false,
    tags: ["kit", "ipa", "no-boil"],
    notes: "Pure extract, no-boil, ~30 min. Needs 5.5L fermenter (not included).",
  },
  {
    id: "KIT-008", name: "Georges 5L — Lager/Pils (pure extract)", shortName: "Georges Lager",
    type: "kit", supplier: "mr-malt.se",
    url: "https://mr-malt.se/en/recipes/extract/lager-extract-kit-for-georges-beer-5-l",
    batchLitres: 5, abv: 4.5,
    brewTimeMinutes: 30, boilRequired: false, splitBrewDay: false,
    fermTempMin: 8, fermTempMax: 15, fermTempIdeal: 10,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 6.25, minFermenterKveik: 7.1,
    packaging: ["1× Oxebar 4L", "2× 2.5L bottles"],
    dryHop: false,
    tags: ["kit", "lager", "fridge-required", "no-boil"],
    notes: "Fridge at 8–12°C required. Autumn/winter project. Needs 5.5L fermenter.",
  },
  {
    id: "KIT-009", name: "Hembryggeriet extract 10L — Amarillo APA 5.3%", shortName: "Amarillo APA",
    type: "extract", supplier: "hembryggeriet.se",
    url: "https://www.hembryggeriet.se/amarillo-american-pale-ale-53-extraktkit-10l-2867",
    batchLitres: 10, abv: 5.3,
    brewTimeMinutes: 60, boilRequired: true, splitBrewDay: true,
    fermTempMin: 18, fermTempMax: 24, fermTempIdeal: 20,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 12.5, minFermenterKveik: 14.3,
    packaging: ["2× Oxebar 4L", "4× 2.5L bottles"],
    dryHop: false,
    tags: ["extract", "apa", "hoppy", "partial-boil"],
    notes: "349 SEK. Fruity hop-forward APA. House ideal now. Split brew day ✓.",
  },
  {
    id: "KIT-010", name: "Hembryggeriet extract 10L — Saaz Czech Pilsner 5.3%", shortName: "Czech Pilsner",
    type: "extract", supplier: "hembryggeriet.se",
    url: "https://www.hembryggeriet.se/saaz-czech-pilsner-53-extraktkit-10l-3457",
    batchLitres: 10, abv: 5.3,
    brewTimeMinutes: 60, boilRequired: true, splitBrewDay: true,
    fermTempMin: 8, fermTempMax: 14, fermTempIdeal: 10,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 12.5, minFermenterKveik: 14.3,
    packaging: ["2× Oxebar 4L", "4× 2.5L bottles"],
    dryHop: false,
    tags: ["extract", "lager", "fridge-required", "partial-boil", "project-P11"],
    notes: "349 SEK. Czech lager project (P-11). Best Oct–Nov in shed + fridge. Fridge available now if emptied.",
  },
  {
    id: "KIT-011", name: "Mangrove Jack's 10 Pints — Lager", shortName: "MJ Lager 10pt",
    type: "kit", supplier: "olbryggning.se",
    url: "https://www.olbryggning.se/mangrove-jack-s/109505/mangrove-jacks-10-pints-beer-kit--lager-olsats-extrakt-mangrove-jack-s",
    batchLitres: 5.7, abv: 4.5,
    brewTimeMinutes: 25, boilRequired: false, splitBrewDay: false,
    fermTempMin: 8, fermTempMax: 20, fermTempIdeal: 12,
    kveikCompatible: false, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 7.1, minFermenterKveik: 8.1,
    packaging: ["1× Oxebar 4L", "2× 2.5L bottles"],
    dryHop: false,
    tags: ["kit", "lager", "no-boil", "small-batch"],
    notes: "~5.7L (10 pints). No-boil. Herbal hop, bready malt. Fridge for clean lager or SH-45 hybrid at 14–18°C. Needs 5.5L fermenter.",
  },
  {
    id: "KIT-012", name: "Mangrove Jack's 10 Pints — Pale Ale", shortName: "MJ Pale Ale 10pt",
    type: "kit", supplier: "olbryggning.se",
    url: "https://www.olbryggning.se/mangrove-jack-s/109507/mangrove-jacks-10-pints-kit--pale-ale-olsats-extrakt-mangrove-jack-s",
    batchLitres: 5.7, abv: 4.8,
    brewTimeMinutes: 25, boilRequired: false, splitBrewDay: false,
    fermTempMin: 18, fermTempMax: 25, fermTempIdeal: 20,
    kveikCompatible: true, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 7.1, minFermenterKveik: 8.1,
    packaging: ["1× Oxebar 4L", "2× 2.5L bottles"],
    dryHop: false,
    tags: ["kit", "pale-ale", "no-boil", "small-batch", "kveik-friendly"],
    notes: "~5.7L. No-boil, ~25 min. Fruity hops, light caramel malt. Add Citra/Mosaic dry hop for tropical version. Good low-stakes kveik experiment.",
  },
  {
    id: "KIT-013", name: "Supermarket juice cider — dry hopped", shortName: "Juice cider",
    type: "cider", supplier: "supermarket",
    url: "",
    batchLitres: 10, abv: 5.5,
    brewTimeMinutes: 15, boilRequired: false, splitBrewDay: false,
    fermTempMin: 15, fermTempMax: 25, fermTempIdeal: 18,
    kveikCompatible: true, headspaceStd: 20, headspaceKveik: 30,
    minFermenterLitres: 12.5, minFermenterKveik: 14.3,
    packaging: ["2× Oxebar 4L", "4× 2.5L bottles", "natural carb in any vessel"],
    dryHop: true,
    tags: ["cider", "no-boil", "cheap", "brewclub", "kveik-friendly", "dry-hop"],
    notes: "⚠ Check label: NO potassium sorbate / sodium benzoate — kills yeast. 'Pure juice, no preservatives' = safe. Citra or Mosaic dry hop, 3–5 days = spectacular summer cider. BrewClub Brew 2.",
  },
];

const FERMENTERS = [
  { litres: 20, label: "20L" },
  { litres: 15, label: "15L" },
  { litres: 5.5, label: "5.5L" },
];

const TYPE_LABELS = { fwk: "FWK", extract: "Extract", kit: "Kit", cider: "Cider" };
const TYPE_COLORS = {
  fwk:     { background: "#EEEDFE", color: "#3C3489" },
  extract: { background: "#E1F5EE", color: "#085041" },
  kit:     { background: "#E6F1FB", color: "#0C447C" },
  cider:   { background: "#FAECE7", color: "#4A1B0C" },
};

function getFermStatus(kit, houseTemp, shedTemp, fridgeAvail, useKveik, fermenters) {
  const hs = useKveik ? kit.headspaceKveik : kit.headspaceStd;
  const fits = fermenters.some(f => f.litres * (1 - hs / 100) >= kit.batchLitres);
  if (!fits) return { ok: false, label: "No fermenter fits", level: "danger" };

  const houseFits = houseTemp >= kit.fermTempMin && houseTemp <= kit.fermTempMax;
  const shedFits = shedTemp !== null && shedTemp >= kit.fermTempMin && shedTemp <= kit.fermTempMax;
  const fridgeFits = fridgeAvail && kit.fermTempMin <= 16;

  if (houseFits) return { ok: true, label: "✓ House now", level: "success" };
  if (shedFits) return { ok: true, label: "✓ Shed now", level: "success" };
  if (fridgeFits) return { ok: true, label: "⚠ Fridge needed", level: "warning" };
  if (houseTemp > kit.fermTempMax) return { ok: false, label: `House too warm (>${kit.fermTempMax}°C)`, level: "danger" };
  return { ok: false, label: `Needs ${kit.fermTempMin}–${kit.fermTempMax}°C`, level: "danger" };
}

export default function BrewOptionsTable() {
  const [houseTemp, setHouseTemp] = useState(22);
  const [shedTemp, setShedTemp] = useState("");
  const [fridgeAvail, setFridgeAvail] = useState(true);
  const [useKveik, setUseKveik] = useState(false);
  const [has55L, setHas55L] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [showNow, setShowNow] = useState(false);
  const [showQuick, setShowQuick] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const shedNum = shedTemp === "" ? null : parseFloat(shedTemp);
  const fermenters = FERMENTERS.filter(f => f.litres !== 5.5 || has55L);

  const rows = useMemo(() => KITS.filter(kit => {
    if (typeFilter !== "all" && kit.type !== typeFilter) return false;
    if (useKveik && !kit.kveikCompatible && kit.type !== "cider") return false;
    const s = getFermStatus(kit, houseTemp, shedNum, fridgeAvail, useKveik, fermenters);
    if (showNow && !s.ok) return false;
    if (showQuick && kit.brewTimeMinutes > 30) return false;
    return true;
  }), [typeFilter, showNow, showQuick, useKveik, houseTemp, shedNum, fridgeAvail, fermenters]);

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <label className={styles.controlItem}>
          <span className={styles.controlLabel}>House temp (°C)</span>
          <input type="number" value={houseTemp} min={0} max={40}
            onChange={e => setHouseTemp(parseFloat(e.target.value) || 20)}
            className={styles.input} />
        </label>
        <label className={styles.controlItem}>
          <span className={styles.controlLabel}>Shed temp (°C)</span>
          <input type="number" value={shedTemp} placeholder="—"
            onChange={e => setShedTemp(e.target.value)}
            className={styles.input} />
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={fridgeAvail} onChange={e => setFridgeAvail(e.target.checked)} />
          Fridge available
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={has55L} onChange={e => setHas55L(e.target.checked)} />
          Have 5.5L fermenter
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={useKveik} onChange={e => setUseKveik(e.target.checked)} />
          Kveik (30% headspace)
        </label>
      </div>

      <div className={styles.filters}>
        {[["all","All"],["fwk","FWK"],["extract","Extract"],["kit","Kit"],["cider","Cider"]].map(([v,l]) => (
          <button key={v} onClick={() => setTypeFilter(v)}
            className={[styles.chip, typeFilter === v ? styles.chipActive : ""].join(" ")}>{l}</button>
        ))}
        <button onClick={() => setShowNow(!showNow)}
          className={[styles.chip, showNow ? styles.chipGreen : ""].join(" ")}>Ferments now</button>
        <button onClick={() => setShowQuick(!showQuick)}
          className={[styles.chip, showQuick ? styles.chipGreen : ""].join(" ")}>≤30 min brew</button>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {["Kit / option","Type","Batch","ABV","Brew time","Ferments now","Packaging",""].map(h => (
                <th key={h} className={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.flatMap(kit => {
              const s = getFermStatus(kit, houseTemp, shedNum, fridgeAvail, useKveik, fermenters);
              const isExp = expanded === kit.id;
              const tc = TYPE_COLORS[kit.type];
              return [
                <tr key={kit.id} onClick={() => setExpanded(isExp ? null : kit.id)} className={styles.row}>
                  <td className={styles.tdName}>
                    {kit.shortName}
                    {kit.tags.includes("brewlog-L01") && <span className={styles.badgeL01}>L-01</span>}
                  </td>
                  <td className={styles.td}>
                    <span className={styles.badge} style={tc}>{TYPE_LABELS[kit.type]}</span>
                  </td>
                  <td className={styles.td}>{kit.batchLitres}L</td>
                  <td className={styles.td}>{kit.abv}%</td>
                  <td className={styles.td}>
                    <span className={[styles.badge,
                      kit.brewTimeMinutes <= 20 ? styles.badgeFast :
                      kit.brewTimeMinutes <= 35 ? styles.badgeMid : styles.badgeSlow].join(" ")}>
                      ~{kit.brewTimeMinutes}m{kit.brewTimeMinutes <= 20 ? " ★" : ""}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <span className={[styles.badge,
                      s.level === "success" ? styles.badgeOk :
                      s.level === "warning" ? styles.badgeWarn : styles.badgeBad].join(" ")}>
                      {s.label}
                    </span>
                  </td>
                  <td className={[styles.td, styles.tdPkg].join(" ")}>{kit.packaging[0]}</td>
                  <td className={[styles.td, styles.tdChevron].join(" ")}>{isExp ? "▲" : "▼"}</td>
                </tr>,
                isExp ? (
                  <tr key={kit.id + "-detail"} className={styles.detailRow}>
                    <td colSpan={8} className={styles.detailCell}>
                      <div className={styles.detailGrid}>
                        <div>
                          <div className={styles.detailLabel}>Ferm temp</div>
                          <div>{kit.fermTempMin}–{kit.fermTempMax}°C (ideal {kit.fermTempIdeal}°C)</div>
                        </div>
                        <div>
                          <div className={styles.detailLabel}>Headspace</div>
                          <div>Standard: {kit.headspaceStd}% · Kveik: {kit.headspaceKveik}%</div>
                        </div>
                        <div>
                          <div className={styles.detailLabel}>All packaging</div>
                          <div>{kit.packaging.join(", ")}</div>
                        </div>
                        <div>
                          <div className={styles.detailLabel}>Features</div>
                          <div>
                            {kit.boilRequired ? "Boil required" : "No boil"}
                            {kit.splitBrewDay ? " · Split brew day ✓" : ""}
                            {kit.dryHop ? " · Dry hop included" : ""}
                            {kit.kveikCompatible ? " · Kveik-friendly" : ""}
                          </div>
                        </div>
                        <div className={styles.detailFull}>
                          <div className={styles.detailLabel}>Notes</div>
                          <div>{kit.notes}</div>
                        </div>
                        {kit.url && (
                          <div className={styles.detailFull}>
                            <a href={kit.url} target="_blank" rel="noopener noreferrer"
                              className={styles.link}>View on {kit.supplier} →</a>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : null,
              ].filter(Boolean);
            })}
          </tbody>
        </table>
        {rows.length === 0 && <div className={styles.empty}>No kits match the current filters.</div>}
      </div>

      <div className={styles.legend}>
        ★ = sub-20 min brew · click any row for details · Kveik toggle applies 30% headspace rule (Kveik Yeastery)
      </div>
    </div>
  );
}
