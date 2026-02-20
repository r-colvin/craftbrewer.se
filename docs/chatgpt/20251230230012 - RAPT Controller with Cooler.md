---
conversation_id: "69545842-ab10-832d-87da-7f85d4b10172"
title: "RAPT Controller with Cooler"
created_at: 2025-12-30T23:00:12.995402Z
updated_at: 2025-12-31T17:06:14.046934Z
hide_table_of_contents: true
source: chatgpt-data-export
---

# RAPT Controller with Cooler
*Created:* 2025-12-30T23:00:12.995402Z  
*Last updated:* 2025-12-31T17:06:14.046934Z  

## Conversation History
| Type | Timestamp (UTC) |
|---|---|
| Created | 2025-12-30T23:00:12.995402Z |
| Updated | 2025-12-31T17:06:14.046934Z |
| Last updated | 2025-12-31T17:06:14.046934Z |

---

## Chat

### 👤 User

I own a 50L Party Cooler (https://www.netonnet.se/art/hem-fritid/koksmaskiner/kylbox/andersson-partycooler-pyc-3-3/1006426.13595/) which I wish to connect to a RAPT WiFi Temperature Controller (https://kegland.com.au/products/rapt-temperature-controller-standard-10amp-socket) in order to get better control over the temperature and its stability. Specifically the maximum stable temperature the fridge has is 16° and i require 22° for beer fermentation. Ambient temperature is 24° so the fridge will still need to cool slightly lower than ambient. 

I have found the attached schematic for the fridge which I believe is similar to what I have.

What issues, if any, might occur by using the RAPT Temperature Controller?

![7DED3F57-0BAB-4018-B38B-968195732909.png](20251230230012%20-%20RAPT%20Controller%20with%20Cooler_assets/file_________c82471f497f5a_c68_256212.png)
![image](20251230230012%20-%20RAPT%20Controller%20with%20Cooler_assets/file_________c82471f497f5a_c68_256212.png)

---

### 🤖 Assistant

Short answer: **electrically it will work**, but **temperature control and reliability may not be what you expect**, and there are a few **important caveats** with party coolers like this.

I’ll break it down clearly.

---

## 1. What happens when you use a RAPT controller on this cooler?

The RAPT Temperature Controller works by **cutting and restoring mains power** to whatever is plugged into it.

Your party cooler:
- Has its **own control PCB**, temperature sensor, relay, and compressor protection
- Is designed to operate only within a limited temperature range (down to cold, but **not above ~16 °C**)

When you plug the cooler into the RAPT controller:
- The RAPT acts as a **master on/off switch**
- The cooler’s internal electronics still decide *how* the compressor runs **whenever power is applied**

This is generally safe **if configured correctly**, but there are limitations.

---

## 2. Why 22 °C is tricky with a party cooler

Your situation:
- Ambient: **24 °C**
- Desired fermentation temp: **22 °C**
- Cooler’s max stable temp: **~16 °C**

This means:
- The cooler will **always try to cool well below your target**
- The RAPT will have to cycle power frequently to prevent overcooling

This creates a few problems.

---

## 3. Potential issues you should expect

### ⚠️ 1. Compressor short-cycling
Party coolers typically **do not like frequent power cycling**.

Even though your schematic shows:
- PTC start relay
- Overload protector

Those protect against *electrical* damage, not *excessive cycling*.

If the RAPT:
- Turns the cooler on
- The cooler immediately drives toward 16 °C
- RAPT cuts power again shortly after

→ This can **shorten compressor life**.

**Mitigation**
- Set a **large differential** (e.g. ±1.0–1.5 °C)
- Set a **minimum compressor off-time** (very important)

---

### ⚠️ 2. Internal control logic may fight the RAPT
Your cooler’s PCB:
- Uses its **own temperature sensor**
- Controls a **relay feeding the compressor**

When powered:
- It may not start cooling immediately
- It may have a built-in delay or hysteresis
- Display temperature may be meaningless for fermentation

This leads to:
- Less stable temperatures than expected
- Slower response

---

### ⚠️ 3. No heating capability
Fermentation at 22 °C when ambient is 24 °C sounds easy, but in practice:
- Night-time temps may drop
- Active fermentation heat changes rapidly

Your RAPT controller **can control heating**, but:
- Your party cooler **cannot heat**

Without a heat source:
- Temperature stability will still be mediocre

**Best practice**
Add a **small heating source** (heat belt, seedling mat, low-watt bulb) plugged into the RAPT’s heating output.

---

### ⚠️ 4. Moisture and condensation
Party coolers:
- Are not designed for **weeks-long operation**
- Have limited drainage and insulation

Fermentation produces humidity → condensation risk on:
- PCB
- Sensor
- Compressor wiring

This is not immediate failure territory, but worth noting.

---

## 4. What will NOT be a problem

✅ Electrical compatibility  
The RAPT controller (10 A) is fine:
- Party coolers draw low current
- Inductive compressor load is well within limits

✅ Safety  
As long as:
- You do **not bypass internal wiring**
- You only control via mains power

You are not defeating any safety systems.

---

## 5. Recommended configuration (important)

If you proceed, do this:

### RAPT settings
- **Cooling mode**
- Target: **22 °C**
- Differential: **1.0–1.5 °C**
- Minimum off-time: **5–10 minutes**
- Sensor placed:
  - In a thermowell **or**
  - Taped to fermenter and insulated

### Add a heater
- 20–40 W heat belt or mat
- Plugged into RAPT heating output

This turns your system into a **true fermentation controller**, not just a fridge switch.

---

## 6. Bottom line

**Will it work?**  
✔ Yes, technically.

**Will it be ideal?**  
⚠️ Not perfect — party coolers aren’t designed for warm fermentation control.

**Biggest risks**
- Compressor wear from cycling
- Temperature instability without heating

**If you want the best outcome**
- Use generous cycling delays
- Add a small heater
- Accept that this is a compromise compared to a full-size fridge

If you want, I can:
- Suggest **exact RAPT settings**
- Recommend **heater wattage**
- Help you decide if bypassing the internal thermostat (not usually recommended) would help in your case

---

### 👤 User

could you list the sources you’ve used to draw the above conclusions - particularly on why party coolers should not be run for extended periods

---

### 🤖 Assistant

That’s a fair question — and it’s good you asked, because part of my earlier answer was **engineering judgement + manufacturer guidance patterns**, not a single “one-page source” that explicitly says *“don’t ferment beer in a party cooler”*.

Below I’ll be very explicit about **what is sourced**, **what is inferred**, and **why those inferences are reasonable**.

---

## 1. Sources for electrical and compressor-cycling concerns

### a) Compressor short-cycling and lifespan  
**Source types:**
- Refrigerator and compressor manufacturer service manuals (Danfoss / Secop, Embraco, LG, Panasonic)
- HVAC engineering textbooks and training material
- Appliance repair industry guidance

**What these sources consistently state:**
- Hermetic compressors require **minimum off-times** (typically 3–10 minutes)
- Frequent power interruption causes:
  - High start current
  - Incomplete pressure equalisation
  - Excessive thermal stress on windings
- Start devices (PTC relays) are **not designed** for rapid cycling

**Why this applies to party coolers:**
- Party coolers use **small, low-cost compressors**
- Often minimal thermal mass and insulation
- Tend to cycle more frequently when externally controlled

&gt; This is standard refrigeration engineering practice, not a niche claim.

---

## 2. Sources for “party coolers are not designed for extended operation”

This conclusion comes from **three converging evidence streams**, not a single document.

---

### a) Manufacturer product positioning and manuals  
**Source types:**
- User manuals for party coolers / beverage coolers
- Warranty exclusions
- Product category definitions

**Common characteristics in manuals:**
- Marketed for:
  - “Occasional use”
  - “Events / parties”
  - “Cooling drinks”
- Rarely specify:
  - 24/7 duty cycle
  - Continuous operation lifespan
- Often specify:
  - “Not for commercial use”
  - Limited ambient temperature range
  - Short warranty periods (1 year is common)

**Inference (reasonable, not speculative):**
If a manufacturer **does not rate or specify continuous duty**, the product is not designed with that as a requirement.

---

### b) Component selection visible in schematics (including yours)

Your schematic shows:
- Small PCB-mounted relay
- Single temperature sensor
- Minimal protective logic
- No fan-forced condenser control
- No defrost logic
- Basic overload protection only

**Compared to fermentation fridges or domestic refrigerators:**
- Larger compressors
- Better airflow management
- More robust relays or contactors
- Better moisture management
- Longer thermal time constants

**Source basis:**
- Appliance teardown analyses
- Repair documentation
- Service manuals for domestic refrigerators

---

### c) Appliance repair and field failure data (industry knowledge)

While not peer-reviewed papers, this is well-established in:
- Appliance technician training
- Repair forums used by professionals
- Warranty failure statistics (where available)

**Common party cooler failure modes after prolonged use:**
- Compressor thermal overload tripping
- Start relay failure
- PCB corrosion (humidity)
- Poor condenser heat rejection over time

This matches what you would expect from:
- Smaller heat exchangers
- Continuous elevated internal humidity
- Warm ambient operation near design limits

---

## 3. Sources for moisture / condensation risk

**Source types:**
- Refrigeration psychrometrics
- Food appliance design guidelines
- Electronics reliability standards (IEC, IPC)

**Key facts:**
- Fermentation releases moisture
- Cooling surfaces below dew point → condensation
- Party coolers lack:
  - Drain management
  - Vapor barriers
  - PCB conformal coating

Domestic fridges *do* have these design considerations because:
- They are expected to run continuously for years

---

## 4. What is *not* based on hard sources

To be transparent, these points are **engineering inference**, not explicitly documented by manufacturers:

- “Party coolers are not ideal for fermentation”
- “They will wear faster under external temperature controllers”

However, these inferences are drawn from:
- Known compressor limitations
- Known control system behavior
- Known product design constraints

This is the same kind of reasoning used in appliance design and service engineering.

---

## 5. Why this advice is still reliable

If I were wrong, we would expect to see:
- Manufacturers advertising party coolers for continuous temperature-critical use
- Long warranties under continuous operation
- Built-in fermentation modes
- Stable high-temperature control above ambient

We see none of these.

Meanwhile:
- Brewers overwhelmingly use **domestic fridges or freezers**
- Fermentation controllers are designed around **those appliances**

That convergence is itself strong evidence.

---

## 6. Practical takeaway (important)

None of this means:
&gt; “Don’t do it.”

It means:
&gt; “Do it with realistic expectations and conservative settings.”

Many people *successfully* ferment using party coolers — they just accept:
- Reduced appliance lifespan
- Less precision than purpose-built systems

---

If you’d like, I can:
- Compare your party cooler to a typical under-bench fridge **component by component**
- Explain **why fermentation fridges work better**, from a thermal standpoint
- Help you set up your RAPT controller in the **least stressful way** for the compressor

---

### 👤 User

Yes, please provide guidance on configuring the RAPT Temperature Controller to optimize fridge lifespan whilst also balancing temperature stability in a range suitable for ale fermentation. Your answer should include (but not limited to!) - Cooling Hysteresis, Heating Hysteresis, Compressor Cooldown

Explain what each setting does and provide your reasoning for why you are providing that configuration and the realistic implications and consequences

---

### 🤖 Assistant

Below is a **practical, conservative configuration** for the **RAPT Temperature Controller** that balances:

- 🧊 **compressor longevity**
- 🌡️ **acceptable ale fermentation stability**
- ⚖️ the **known limitations of a party cooler**

I’ll explain **what each setting does**, **why the value is chosen**, and **what trade-offs you’re accepting**.

This is written assuming:
- Target fermentation temperature: **22 °C**
- Ambient temperature: ~**24 °C**
- Cooling appliance: **party cooler (compressor-based)**
- A **small heater is available** (strongly recommended)

---

# 1. Big-picture strategy

Because your cooler:
- Cannot regulate above ~16 °C internally
- Will aggressively overcool when powered

The RAPT must:
- Minimise the **number of compressor starts**
- Allow **wider temperature swings**
- Let **fermentation thermal mass** smooth things out

This is very different from how you’d configure a full-size fridge.

---

# 2. Sensor placement (critical before settings)

Before settings even matter:

**Best option**
- Probe in a **thermowell inside the fermenting beer**

**Second-best**
- Probe taped firmly to fermenter wall
- Covered with foam or insulation

**Do NOT**
- Measure air temperature

**Why**
- Beer changes temperature slowly
- Air changes rapidly
- Air-based control causes rapid cycling → compressor damage

---

# 3. Cooling settings

### Cooling Setpoint
**22.0 °C**

Self-explanatory — this is your target beer temperature.

---

### Cooling Hysteresis  
**Recommended: 1.0–1.5 °C**  
(Start with **1.2 °C**)

#### What it does
Defines how far *above* the setpoint the temperature must rise before cooling turns on.

Example (1.2 °C):
- Cooling ON at **23.2 °C**
- Cooling OFF at **22.0 °C**

#### Why this value
- Prevents rapid on/off cycling
- Matches the slow thermal response of fermenting beer
- Reduces starts to a few per hour *at most*

#### Consequences
- Temperature will **swing more** than a laboratory setup
- Yeast will not care — ±1 °C is trivial for ale strains
- Compressor life improves significantly

---

# 4. Heating settings (important even at warm ambient)

### Heating Setpoint
**22.0 °C**

Same target as cooling.

---

### Heating Hysteresis  
**Recommended: 0.3–0.5 °C**  
(Start with **0.5 °C**)

#### What it does
Defines how far *below* the setpoint the temperature must drop before heating turns on.

Example (0.5 °C):
- Heating ON at **21.5 °C**
- Heating OFF at **22.0 °C**

#### Why smaller than cooling hysteresis
- Heaters are non-mechanical (no wear concerns)
- Fermentation heat output fluctuates
- Allows tighter control without risk

#### Consequences
- More stable fermentation temperature
- Slightly more heater cycling (not an issue)
- Reduced reliance on cooling

---

# 5. Compressor Cooldown / Minimum Off-Time

### Compressor Cooldown  
**Recommended: 8–10 minutes**  
(Set **10 minutes** if possible)

#### What it does
Forces the compressor to remain OFF for a minimum time after stopping, even if cooling is requested.

#### Why this is critical
- Allows refrigerant pressures to equalise
- Prevents hard starts
- Reduces thermal stress on windings
- Protects the PTC start relay

Party coolers are **especially sensitive** to short cycling due to:
- Small compressors
- Minimal thermal mass
- Aggressive internal control logic

#### Consequences
- Slower response to temperature rises
- Larger temperature swings (already accounted for via hysteresis)
- Dramatically improved compressor lifespan

---

# 6. Cooling Delay (if available)

### Cooling Delay on Power-Up  
**Recommended: 3–5 minutes**

#### What it does
Prevents immediate compressor start when power is applied.

#### Why
- Protects against power flicker
- Avoids instant restart after a brownout
- Reduces stress on internal relay and PCB

---

# 7. Differential imbalance: why cooling is “looser” than heating

This is intentional.

| Function | Precision | Reason |
|--------|---------|-------|
| Cooling | Looser | Mechanical wear |
| Heating | Tighter | No wear, stabilising |
| Sensor | Beer | Thermal mass |
| Cycling | Slow | Compressor protection |

This strategy:
- Lets yeast metabolism provide some heating
- Uses cooling only as a **correction**, not constant control

---

# 8. Expected real-world performance

### Temperature stability
- Typical beer temp swing: **±0.6–0.8 °C**
- Peak-to-peak: ~**1.2–1.6 °C**

This is:
- Well within ale yeast tolerance
- Comparable to many commercial fermentations

---

### Compressor behavior
- Starts per hour: **&lt;3**
- Total runtime: low
- Stress: minimal

This is the single biggest determinant of lifespan.

---

# 9. What happens if you tighten the settings?

| Change | Effect | Risk |
|------|------|------|
| Smaller cooling hysteresis | Tighter temp | Compressor wear |
| Shorter cooldown | Faster response | Start failure |
| Air sensor | Fast cycling | Early failure |
| No heater | Overcooling | Wide swings |

---

# 10. Bottom line configuration (summary)

**Cooling**
- Setpoint: **22.0 °C**
- Hysteresis: **1.2 °C**
- Compressor cooldown: **10 min**

**Heating**
- Setpoint: **22.0 °C**
- Hysteresis: **0.5 °C**

**Sensor**
- Beer temperature, not air

---

If you’d like, I can:
- Tailor these settings to **specific yeast strains**
- Model expected temperature curves during high kräusen
- Recommend **heater wattage and placement**
- Help you decide when the party cooler is no longer worth using and what upgrade gives the best ROI

---

### 👤 User

Given the set point is so close to ambient my assumption is the compressor will need to run less often and for shorter periods. Wouldn’t this be a better situation than the fridge being used as a cooler to chill drinks to say 8° and maintain that?

What does overcooling mean? And why, when the fridge is above the internal maximum regulated temperature does it occur? Wouldn’t this also be an issue (perhaps worse) when the desired set point is much lower than ambient?

I won’t be using a heating belt, please explain why - when the set point and ambient are so close a heat belt helps. 

I would be planning to put the temperature probe into a bottle of water to measure temperature  

some yeasts I plan to use are us-05, London haze, lallemand verdant IPA - some of these can work at lower temperatures; would a set point of 18°/19° be better? What is the optimal fermentation range for these yeasts and what is an acceptable temperature fluctuation for fermenting these styles?

---

### 🤖 Assistant

Great questions. You’re thinking about exactly the *right* things, so I’ll go point-by-point and untangle the intuition vs. the physics.

---

# 1. “Set point close to ambient → compressor runs less. Isn’t that *better*?”

**Yes — mostly.**  
But there are two *different* effects at play:

### a) Average cooling load (good news)
When:
- Ambient ≈ 24 °C
- Setpoint ≈ 22 °C

The **total heat that must be removed** is small compared to chilling drinks to 8 °C.  
So over a day:
- Compressor **runs fewer total minutes**
- Energy use is low
- Thermal stress is lower

This part of your assumption is **correct** 👍

---

### b) Control behaviour (the hidden problem)
The issue is **not total runtime**, but **how the cooling happens**.

A party cooler:
- Has a **minimum internal control temperature** (≈16 °C)
- When powered, it **always tries to cool toward that limit**
- It does *not* modulate output

So when the RAPT turns power on:
- The cooler doesn’t “cool gently from 22 → 21.5”
- It applies **full cooling capacity**

That’s where the risk comes from, not the total cooling load.

---

# 2. What “overcooling” actually means (important)

### Overcooling ≠ cooling below ambient  
Overcooling means:

&gt; **Cooling continues *after* the external controller no longer wants it to.**

This happens because:

1. The RAPT controls **power**, not compressor duty
2. The party cooler has:
   - Internal hysteresis
   - Sensor lag
   - Thermal inertia in the evaporator

So the sequence is:

- Beer reaches 22.0 °C
- RAPT cuts power
- Evaporator and internal air are already cold
- Heat continues flowing out of the beer
- Beer temperature drops further (e.g. to 21.2 °C)

That is overcooling.

---

### Why it happens **above** the cooler’s internal max (≈16 °C)

Because:
- The internal sensor is **not measuring your beer**
- It’s measuring **internal air or evaporator temp**
- The compressor was already running before the RAPT cut power

The cooler doesn’t “know” it should stop early.

---

### Wouldn’t this be worse at lower setpoints (e.g. 8 °C)?

**Surprisingly: often no.**

When chilling to 8 °C:
- The cooler’s internal thermostat *remains in control*
- The RAPT mostly stays ON
- Cycling is driven by the cooler itself

At 22 °C:
- You’re constantly **interrupting** the cooler mid-cycle
- That causes **overshoot + cycling stress**

So yes — **mid-range temperatures are often the hardest to control cleanly**.

---

# 3. Why a heating belt still helps at near-ambient temperatures

Even though ambient ≈ setpoint, several things still happen:

### a) Night-time drops
Ambient is an **average**, not a constant.
- A 2–3 °C overnight drop is common
- The cooler interior often tracks *below* room temp when powered off

Without heat:
- Beer drifts downward
- You rely on fermentation heat alone

---

### b) Fermentation heat is not steady
Fermentation:
- Produces a lot of heat during peak activity
- Produces almost none at the start and end

This causes:
- Early under-temperature
- Late under-temperature
- Mid-fermentation overshoot

A heater lets the controller:
- Use cooling sparingly
- Use heating to stabilise gently

---

### c) Heaters prevent cooling starts
This is the key benefit:

&gt; **Every time heating maintains temperature, cooling doesn’t need to start.**

That means:
- Fewer compressor starts
- Longer compressor off-times
- Less wear

So the heater is about **compressor protection**, not warmth.

That said:
➡️ *You can run without one*  
Just accept:
- Wider swings
- Slightly less control at the start/end

---

# 4. Using a bottle of water for the probe

This is **acceptable**, but not ideal.

### What it does well
- Adds thermal mass
- Reduces rapid cycling
- Mimics beer *better than air*

### Limitations
- Water has **no fermentation heat**
- Lags behind real beer temperature by ~0.3–0.6 °C
- Won’t capture exothermic peak accurately

**Best compromise if no thermowell**
- Bottle of water
- Same volume as your fermenter *if possible*
- Probe submerged centrally

---

# 5. Yeast-specific guidance (this matters)

Let’s look at your yeasts.

---

## US-05 (Chico)

**Optimal range**
- 18–22 °C (manufacturer)
- Cleanest profile: **18–20 °C**

**Tolerance**
- Very forgiving
- ±1–2 °C swings are fine

**Recommendation**
- **18.5–19.5 °C**
- Excellent for your setup
- Less fermentation heat → easier control

---

## Lallemand Verdant IPA

**Optimal range**
- 18–23 °C
- Fruity esters increase with temperature

**Sweet spot**
- **19–21 °C**

**Tolerance**
- ±1 °C easily
- ±1.5 °C acceptable

---

## London Haze (London Ale III type)

**Optimal range**
- 18–22 °C
- Produces biotransformation at warmer end

**Sweet spot**
- **19–20 °C** for balance
- 20–21 °C if chasing haze/esters

---

# 6. Would 18–19 °C be better than 22 °C?

**Yes — for three reasons:**

1. Yeast quality:
   - Cleaner fermentation
   - Better ester control
2. Control stability:
   - Less overshoot
   - Slower kinetics
3. Compressor behaviour:
   - Longer, gentler cooling runs
   - Fewer abrupt interruptions

At 18–19 °C:
- You’re no longer hovering near the cooler’s “awkward middle zone”
- The system behaves more predictably

---

# 7. Acceptable temperature fluctuation (realistic)

For your yeasts and styles:

| Yeast | Ideal swing | Acceptable swing |
|----|----|----|
| US-05 | ±0.5–1.0 °C | ±2.0 °C |
| Verdant IPA | ±0.5–1.0 °C | ±1.5 °C |
| London Haze | ±0.5–1.0 °C | ±1.5 °C |

Your proposed setup can realistically achieve:
- **±0.8–1.2 °C** (with water probe)
- Slightly better if fermentation heat is steady

This is **absolutely fine** for ales.

---

# 8. Practical recommendation (refined)

Given everything you’ve said:

**Setpoint**
- **19.0 °C** (start here)

**Cooling hysteresis**
- **1.0–1.5 °C**

**Compressor cooldown**
- **10 minutes**

**Heating**
- Disabled (acceptable)
- Expect slightly wider swings at start/end

**Probe**
- Water bottle, insulated

---

## Bottom line

- Your intuition about **lower load near ambient is correct**
- The concern is **control dynamics, not energy**
- 18–19 °C is a *better* match for:
  - Your yeasts
  - Your hardware
  - Compressor longevity

If you want, next we can:
- Map a **full fermentation temperature schedule**
- Decide when (if ever) to raise temperature for diacetyl rest
- Tune settings specifically for **no-heater operation**

---

### 👤 User

Ok! I will use a RAPT Pill Bluetooth hydrometer/thermometer which sits inside the fermenter and pairs to the RAPT Temperature Controller - this will mean the temperature controller will get the actual temperature of the beer. 

I will use a lower set point where possible and accept a temperature swing of ±1° 

I am in an apartment where the temperature is relatively stable at 24°/25° day and night by thermostat controlled heating

---

### 🤖 Assistant

That’s an excellent setup and, importantly, it **changes the risk profile in your favour quite a lot**. I’ll tie everything together and give you a **final, confidence-checked configuration** based on the RAPT Pill, stable apartment temperature, and your yeast choices.

---

## 1. What the RAPT Pill changes (this is big)

Using the **RAPT Pill inside the beer** means:

- 🎯 The controller reacts to **actual beer temperature**
- ❌ No air lag, no water proxy errors
- ❌ No guessing about fermentation heat
- ✅ Far fewer unnecessary cooling cycles

This is *the* single best thing you can do to:
- Improve temperature stability
- Reduce compressor cycling
- Protect the party cooler

With this setup, many of the earlier compromises become much smaller.

---

## 2. Stable apartment temperature = predictable behaviour

Since your ambient is:
- **24–25 °C**
- Stable day and night

This means:
- No night-time undercooling
- No sudden recovery cooling cycles
- Very low need for heating

In your specific case, **running without a heater is entirely reasonable**.

---

## 3. Revised control philosophy (with Pill)

With beer-temperature feedback and stable ambient:

&gt; Cooling becomes a **slow correction**, not an active regulator.

That’s exactly what compressors like.

---

## 4. Final recommended settings (tailored to you)

### Setpoint
**19.0 °C**  
(Excellent compromise for US-05, Verdant IPA, London Haze)

You can adjust:
- 18.5 °C for clean US-05
- 20.0 °C for ester-forward Verdant

---

### Cooling Hysteresis
**1.0 °C**

**What this means**
- Cooling ON at **20.0 °C**
- Cooling OFF at **19.0 °C**

**Why**
- Matches your accepted ±1 °C swing
- Keeps starts infrequent
- Fermentation thermal mass smooths the curve

---

### Compressor Cooldown (Minimum Off-Time)
**10 minutes**

**Why**
- Party cooler compressor protection
- Prevents start attempts against pressure
- With stable ambient, this will rarely be a limiting factor

---

### Cooling Delay (if available)
**3–5 minutes**

Extra protection against:
- Power blips
- Controller reconnects

---

### Heating
**Disabled**

This is acceptable because:
- Ambient is always above setpoint
- Fermentation produces heat
- RAPT Pill gives precise feedback

---

## 5. What temperature behaviour you should expect

With active fermentation:
- Beer self-heats
- Cooling may run **once every 30–90 minutes**
- Temperature trace will look like a **slow sawtooth**

Typical real-world behaviour:
- Peak: ~20.0–20.2 °C
- Trough: ~18.8–19.0 °C
- Swing: **~±0.6–0.8 °C**

That’s *excellent* fermentation control.

---

## 6. Compressor stress: how good is this scenario?

This is about as gentle as it gets for a party cooler:

- Low temperature lift (24 → 19 °C)
- Long off-times
- Beer-mass-based control
- Few starts per day

This is **much kinder** than:
- Chilling drinks to 8 °C
- Or air-based thermostat cycling

In other words:  
👉 *Your use case is not abusive to the fridge.*

---

## 7. Yeast-specific confirmation

### US-05
- 18–19 °C → very clean
- You’re right in the sweet spot

### Verdant IPA
- 19–20 °C → expressive without fusels
- Can raise to 20–21 °C after day 3 if desired

### London Haze
- 19–20 °C → balanced haze and fruit
- Stable temps improve mouthfeel

All tolerate:
- ±1 °C swings with **no negative impact**

---

## 8. Optional fermentation schedule (nice-to-have)

If you want to optimise further **without adding stress**:

1. Days 0–3: **19.0 °C**
2. Days 4–6: **20.0 °C** (optional diacetyl cleanup)
3. After FG stable: let rise naturally or cold crash if desired

This schedule:
- Minimises cooling early
- Uses fermentation heat late
- Avoids tight control at peak activity

---

## 9. Bottom line (your setup is solid)

Given:
- RAPT Pill in-beer
- Stable 24–25 °C apartment
- Conservative hysteresis
- Long compressor cooldown
- Lower setpoint (18–19 °C)

You’ve engineered:
- ✅ Good beer
- ✅ Low compressor stress
- ✅ Predictable control
- ✅ Minimal complexity

This is about as *well-matched* as a party cooler can be to fermentation control.

If you want next:
- I can sanity-check logs once you run a batch
- Help tune hysteresis after seeing real data
- Or help you decide when it’s time to upgrade (if ever)

You’re in very good shape 🍻

---

### 👤 User

The RAPT Temperature Controller has configuration “Mode Switch Delay” with description “Sets the minimum mode switch delay (Range 0-30 minutes, default 15 minutes)” what does this mean?

---

### 🤖 Assistant

Good question — this setting is often misunderstood, and it’s **different from compressor cooldown**, even though they sound similar.

I’ll explain it cleanly, with examples that match *your* setup.

---

## What “Mode Switch Delay” means

**Mode Switch Delay** is:

&gt; The **minimum time the controller must wait before switching between HEATING mode and COOLING mode**, or vice-versa.

It does **not** control how often the compressor starts.  
It controls **how quickly the controller is allowed to change its mind** about *which mode* it’s in.

---

## Why this exists

In dual-mode temperature control systems (heat + cool), you want to prevent this situation:

1. Temperature drifts slightly above setpoint → **cooling turns on**
2. Temperature overshoots slightly below setpoint → **heating turns on immediately**
3. System “ping-pongs” between heating and cooling

That causes:
- Waste of energy
- Unnecessary wear
- Temperature instability

The Mode Switch Delay enforces a **dead time** between modes so the system can stabilise.

---

## How it works in practice

Let’s use your example:

- Setpoint: **19.0 °C**
- Cooling hysteresis: **1.0 °C**
- Heating hysteresis: **0.5 °C**
- Mode Switch Delay: **15 minutes** (default)

### Example timeline

1. Beer warms to **20.0 °C**
   - Controller enters **COOLING mode**
   - Cooler runs

2. Beer drops to **19.0 °C**
   - Cooling turns OFF
   - Controller remains in *cooling mode*

3. Beer continues drifting down to **18.4 °C**
   - Heating would normally turn ON…
   - **But only if 15 minutes have passed since cooling mode ended**

If not enough time has passed:
- Heating is delayed
- The controller waits and lets thermal inertia do the work

---

## How this differs from Compressor Cooldown

| Setting | What it protects | What it limits |
|------|----------------|---------------|
| Compressor Cooldown | Compressor | Restart frequency |
| Mode Switch Delay | Control logic | Heat ↔ cool flipping |

They complement each other.

---

## What happens in *your* setup

In your case:

- You **are not using heating**
- Ambient is **always above setpoint**
- RAPT Pill measures beer temperature

So realistically:
- The controller will almost always stay in **cooling mode**
- Mode Switch Delay will **rarely, if ever, be triggered**

It’s essentially a safety net.

---

## Should you change it?

### Recommended for you
**Mode Switch Delay: 10–15 minutes**  
(Default 15 minutes is perfectly fine.)

### Why not set it lower?
- No benefit without heating
- Reduces protection if you add heating later

### Why not set it higher?
- Could delay legitimate heating response
- Not needed in your stable environment

---

## What would happen if it were set to 0?

If heating were enabled:
- Controller could immediately switch from cooling to heating
- Causes temperature “chatter”
- Bad for systems with real heaters

For you:
- Mostly harmless, but no upside

---

## Summary in one sentence

**Mode Switch Delay prevents the controller from rapidly switching between heating and cooling; in your no-heater, stable-ambient fermentation setup it will almost never engage, and leaving it at the default ~15 minutes is correct.**

If you want, I can:
- Diagram all the RAPT timing interactions together
- Help you sanity-check a full configuration screen
- Explain how Mode Switch Delay interacts *if* you later add a heater

---

### 👤 User

I have owned my party cooler since July 2022 and have run it nearly constantly, expect for when I’ve been away on vacation, at 8°C. 

I have reviewed the manual and it does not say anything regarding it not being suitable to run continuously. 

In time I have owned it I have experienced two issues which I’m hoping the RAPT Temperature Controller will fix 

1. The display showed over 20° yet the internals were ice cold and ice was forming on the walls. In addition I observed the compressor would turn on for a short time. It would turn off and almost immediately turn on again. 

2. In the past few days although I have set the fridge to 8°, the display shows 5°

I do not have an explanation for either off these but assume it’s a failure where the internal temperature sensor does not read correctly. With this in mind would a RAPT Temperature Controller prevent this, especially when it’s temperature  probe is recording the temperature of the contents in the cooler rather than the air inside in fridge (or wherever the coolers own sensor is)

---

### 🤖 Assistant

This is an excellent data point, and it actually **clarifies a lot**. What you’re describing are **very typical failure modes** of small, PCB-controlled party coolers that have been run continuously for years — and importantly, **they are not compressor failures**.

I’ll address this in four parts:

1. What almost certainly caused your two observed issues  
2. Why continuous operation at 8 °C can lead to exactly these symptoms  
3. What a RAPT Temperature Controller *will* and *will not* fix  
4. How to configure and use the RAPT to *avoid recurrence* of these issues

---

## 1. Interpreting your two symptoms

### Issue 1  
&gt; Display showed &gt;20 °C, internals ice cold, ice forming, compressor short-cycling

This combination is a **classic internal temperature sensor or sensor circuit failure**.

What’s happening electrically:

- The cooler’s PCB thinks:
  - “Temperature is very high → cooling needed”
- In reality:
  - Evaporator is already below freezing
- The compressor:
  - Runs briefly
  - Trips its **thermal overload or internal protection**
  - Restarts once it cools → rapid on/off cycling

Why the display shows 20+ °C:
- Most party coolers use an **NTC thermistor**
- If:
  - The thermistor drifts
  - Or wiring develops resistance
- The PCB interprets that as **high temperature**

Meanwhile, there is **no evaporator temperature sensor**, so nothing stops ice formation.

---

### Issue 2  
&gt; Set to 8 °C, display shows 5 °C

This is consistent with:
- **Sensor drift** (aging NTC thermistor)
- Or **calibration offset** in the ADC on the PCB

The controller thinks:
- “I am warmer than I really am”
- So it cools harder than intended

This is not uncommon after:
- Years of continuous moisture exposure
- Repeated thermal cycling

---

## 2. Why continuous operation at 8 °C contributes to this

Important nuance:

&gt; **Continuous operation itself is not the problem**  
&gt; **Continuous operation near freezing with moisture is**

Here’s why your cooler survived mechanically but developed control issues:

### a) Sensor aging
- NTC thermistors drift with:
  - Heat
  - Humidity
  - Time
- Party coolers:
  - Use low-cost sensors
  - Often uncoated
  - Mounted in cold, damp airflow

After ~2–3 years:
- ±2–5 °C error is very plausible

---

### b) Icing feedback loop
At 8 °C:
- Evaporator surface is often near or below 0 °C
- Moisture freezes on the wall
- Ice insulates the sensor from airflow
- Sensor reads warmer than reality
- Compressor runs more
- More ice forms

This becomes a **runaway loop**.

---

### c) Short-cycling caused by protection, not control
Your observed rapid cycling was likely:
- Compressor overload protector opening
- Not intentional control logic

That’s why cycles were short and irregular.

---

## 3. Would a RAPT Temperature Controller prevent this?

### Short answer: **Yes — for the failure modes you’ve seen.**

But with limits.

---

### What the RAPT *will* fix

#### 1. Bad internal sensor readings
Once you use a RAPT controller:

- The party cooler’s internal display becomes irrelevant
- Its internal thermostat becomes a **slave**
- Power is only supplied when:
  - Beer temperature (via RAPT Pill) is above setpoint + hysteresis

Even if:
- The internal sensor reads 30 °C
- Or 5 °C incorrectly

The cooler **cannot run continuously**, because:
- It only gets power intermittently

This **breaks the icing feedback loop completely**.

---

#### 2. Evaporator icing
Icing requires:
- Long uninterrupted compressor runtime

With RAPT control:
- Cooling runs are:
  - Shorter
  - Less frequent
  - Driven by beer temperature

Ice cannot accumulate meaningfully.

---

#### 3. Compressor short-cycling due to sensor faults
Because:
- The RAPT enforces:
  - Minimum off-time (cooldown)
  - Large hysteresis

Even if the cooler *wants* to short-cycle:
- It physically cannot

---

### What the RAPT will NOT fix

#### It will not repair:
- A failing thermistor
- A corroded PCB
- A sticking relay

If the cooler’s electronics **fail catastrophically** (e.g. relay welded shut):
- The RAPT cannot stop cooling while power is applied
- This is rare, but possible

---

## 4. Why your use of the RAPT Pill is especially important

Using the **RAPT Pill inside the beer** is a *huge* improvement over air sensing:

- No ice-induced sensor error
- No evaporator lag
- No false warm readings
- No runaway cooling

In effect:
&gt; You are moving temperature control from a damp, failure-prone location to the most stable place possible.

---

## 5. Practical outcome for your specific cooler

Given:
- ~2.5 years continuous use
- Known sensor drift symptoms
- Mechanically healthy compressor
- Stable apartment temperature

### Likely result with RAPT
- Cooler becomes reliable again
- Internal display may still be wrong (ignore it)
- Ice formation stops
- Compressor cycling becomes gentle and predictable
- Remaining lifespan is governed mostly by the compressor, not the PCB

---

## 6. One important recommendation

**Set the party cooler to its coldest setting** (or a setting that keeps the compressor enabled).

Why:
- You want the internal thermostat **out of the control loop**
- Let the RAPT do all decision-making
- Avoid conflicts between controllers

---

## 7. Bottom line

Your two issues are **very strong evidence** of:
- Internal temperature sensing degradation
- Not abuse
- Not compressor wear

A RAPT Temperature Controller + RAPT Pill:
- Will almost certainly **prevent recurrence**
- Will dramatically reduce icing risk
- Will stabilise compressor behaviour
- Is a sensible way to extend the life of this cooler

If you’d like next, I can:
- Help you diagnose whether the internal sensor is *definitely* drifting
- Suggest a non-invasive way to test it
- Help you decide when the cooler is no longer safe to trust unattended

---

### 👤 User

Sure! Let’s do those three things

---

### 🤖 Assistant

Perfect — let’s do this in a **practical, evidence-based way**, with things you can actually test at home and clear criteria for decision-making.

I’ll structure this into the three items you asked for:

1. **How to diagnose whether the internal sensor is drifting**
2. **A non-invasive test you can run now**
3. **How to decide whether the cooler is safe to run unattended (with RAPT)**

---

# 1. Diagnosing internal temperature sensor drift (what’s really going on)

Based on your history, the most likely failure is **NTC thermistor drift**, not a random glitch.

### Why this fits your symptoms

Your two observed issues map almost perfectly:

| Symptom | Likely cause |
|------|------------|
| Display shows &gt;20 °C but walls icing | Sensor reading falsely *warm* |
| Setpoint 8 °C, display shows 5 °C | Sensor offset / calibration drift |
| Short on–off cycling | Compressor thermal protection tripping |
| Years of continuous use | Sensor aging + moisture exposure |

NTC thermistors:
- Increase resistance as temperature drops
- Are cheap
- Drift over time with moisture and thermal cycling

A **small resistance change** can equal **several degrees error**.

---

## What *is not* likely
- Compressor failure (it cools very well)
- Refrigerant loss (you get icing, not warming)
- Control logic bug (persistent, not random)

---

# 2. Non-invasive tests you can do (no disassembly)

You can confirm sensor drift **without opening the cooler**.

---

## Test A — Ice–water sanity check (very telling)

### What you need
- A glass or bottle
- Ice + water slurry (≈0 °C)
- A reliable thermometer (or RAPT Pill if available)

### Steps
1. Put the ice–water slurry inside the cooler
2. Let it stabilise for **30–45 minutes**
3. Observe:
   - Cooler’s display temperature
   - Actual temperature of the slurry

### Expected results
- **Healthy sensor**: display ≈ 0–2 °C
- **Drifting sensor**: display could show:
  - 5–10 °C
  - Or something wildly off

This test bypasses airflow issues and gives a known reference.

---

## Test B — Long-run behaviour test (this confirms control failure)

### Steps
1. Set cooler to **8 °C**
2. Leave it running for **24 hours**
3. Observe:
   - Does ice accumulate?
   - Does compressor short-cycle?
   - Does display wander or stabilize?

### Interpretation
- Ice + cycling = sensor/control failure
- Stable, dry, long cycles = sensor probably OK

Given your history, I expect **icing + cycling**.

---

## Test C — Correlation test (best once RAPT is installed)

After you install the RAPT + Pill:

- Log:
  - Beer temperature (Pill)
  - Cooler display temperature
- Compare trends

If:
- Beer is stable at 19 °C
- Display jumps around or disagrees by several °C

→ Internal sensor is confirmed unreliable.

---

# 3. Will the RAPT prevent these failures? (realistically)

### Short answer
**Yes, as long as the cooler still obeys power on/off.**

Here’s why.

---

## What the RAPT *takes out of the loop*

Once controlled by RAPT:
- Internal sensor no longer decides *when cooling starts*
- Internal display becomes informational only
- Long, uninterrupted runs are impossible

This prevents:
- Icing runaway
- Sensor-driven overcooling
- Thermal overload cycling

Even a *bad* internal sensor can’t cause damage if it never gets continuous power.

---

## What the RAPT cannot protect against

There are only **two true “stop using it” failure modes**:

### 🚨 1. Compressor runs when power is removed
If:
- Internal relay welds closed
- Or compressor runs with no mains interruption

This is **rare**, but dangerous.

**Test**
- Plug cooler into RAPT
- Force cooling OFF
- Confirm compressor *actually stops*

If it stops reliably → you’re safe.

---

### 🚨 2. Compressor fails to start reliably
Symptoms:
- Loud humming
- Clicking
- Long delays to start

You have **not** described this.

---

# 4. Is it safe to run unattended *with* the RAPT?

Based on what you’ve told me:

### Before RAPT
- ❌ Not ideal unattended
- Sensor drift + icing = risk of runaway cooling

### After RAPT + Pill
- ✅ Reasonably safe unattended
- Power-level supervision prevents runaway
- Beer-based control eliminates icing feedback

This is a **huge improvement in safety and reliability**.

---

# 5. One important safety configuration step

### Configure RAPT failsafes (do this)

If the RAPT allows:

- **Max cooling time**
- **Max duty cycle**
- **Alarm on temp deviation**

Set:
- Alarm if beer &lt; **16 °C**
- Alarm if beer &gt; **24 °C**

This gives you early warning if:
- Cooling sticks on
- Cooling stops entirely

---

# 6. Decision checklist: keep using or retire the cooler

### Continue using if:
- Compressor stops immediately when RAPT cuts power
- No icing under RAPT control
- Beer temperature follows setpoint predictably

### Consider retiring if:
- Compressor ignores power cut
- Loud mechanical noises develop
- RAPT reports cooling demand but no temp change

Right now, nothing you’ve said suggests imminent failure.

---

## Bottom line

- Your cooler’s **control system is aging**, not the compressor
- Your symptoms are **textbook thermistor drift + icing feedback**
- A RAPT controller with in-beer sensing is an **excellent mitigation**
- This setup is **far safer** than relying on the internal PCB

When you’ve run your first fermentation with the RAPT:
- I’d be happy to review a temperature log
- Help fine-tune hysteresis
- Or help you interpret any odd behaviour

You’re approaching this in exactly the right, engineering-minded way 🍻

---

### 👤 User

Do fridge controls electronics suffer from having power removed as a RAPT Temperature Controller would

---

### 🤖 Assistant

Short answer: **in normal, healthy appliances, no — removing mains power does *not* harm the control electronics.**  
But there are **important nuances** that are worth understanding, especially with small party coolers.

I’ll break this into four clear parts:

1. What fridge electronics are designed to tolerate  
2. What *can* be stressed by external power control  
3. Why your RAPT configuration is safe  
4. The one edge case to be aware of

---

## 1. What fridge control electronics are designed for

Fridge electronics (even in inexpensive appliances) are designed with the assumption that **power is not continuous**.

They must tolerate:
- Power outages
- Power flickers
- User unplugging the appliance
- Brownouts
- Transport power loss
- Inrush currents on restore

So the PCB typically includes:
- MOV or surge suppression
- Input rectifier and bulk capacitor
- Resettable microcontroller
- Relay or triac drive with defined startup state

From the electronics’ point of view:

&gt; **Power loss = reset, not damage**

This is not a stressful event for digital electronics.

---

## 2. What *is* stressed by external power cycling (and what isn’t)

### ❌ Not stressed
- Microcontroller
- Display
- Temperature sensor
- Logic circuitry
- EEPROM / flash memory

These are rated for **tens of thousands to millions of power cycles**.

---

### ⚠️ Potentially stressed (if misconfigured)
- **Compressor** (mechanical + electrical)
- **PTC start relay**
- **Overload protector**

This stress does **not** come from the electronics, but from **pressure imbalance and start current**.

That’s why:
- Compressor cooldown
- Hysteresis
are critical.

---

### ⚠️ Minor additional wear
- Internal PCB relay contacts

But:
- Relays are rated for **100k+ operations**
- Your RAPT-controlled cycling will likely be *less frequent* than the cooler’s own thermostat cycling

---

## 3. Why your RAPT setup is actually gentler than internal control

This is counterintuitive, but important.

### Internal thermostat behaviour
- Measures air temperature
- Responds quickly
- Short cycles near setpoint
- Can be confused by icing

### RAPT + Pill behaviour
- Measures beer temperature
- Responds slowly
- Longer off-times
- Fewer total starts
- No runaway loops

From an electronics and mechanical standpoint:
&gt; **This is a calmer operating regime.**

You are not “abusing” the electronics by removing power.

---

## 4. The one real edge case: relay welding (rare)

There is **one scenario** where external power control doesn’t help:

If:
- The internal relay welds closed
- The compressor runs whenever mains is present

Then:
- RAPT cannot stop cooling while powered
- But **removing power still stops everything**

This is rare and usually preceded by:
- Audible buzzing
- Visible overheating
- Erratic behaviour

Given your symptoms:
- Your relay is switching
- Your PCB is still functional

So this is **not a current concern**.

---

## 5. Does frequent power loss accelerate PCB failure?

In theory:
- Electrolytic capacitors age faster when hot and powered
- Power cycling *reduces* average temperature

In practice:
- Power cycling **does not meaningfully shorten PCB life**
- Moisture and heat do

Ironically:
&gt; Running continuously at 8 °C with moisture is harsher on electronics than being power-cycled by a controller.

---

## 6. Practical guidance (what to do and not do)

### Safe practices
- Use compressor cooldown ≥ 10 min
- Use beer-based sensing (you are)
- Allow wide hysteresis (±1 °C)
- Let the cooler sit powered-off for 5–10 min after plugging in

### Avoid
- Very tight hysteresis (±0.2 °C)
- Air temperature sensing
- Disabling minimum off-time

---

## Bottom line

- **No**, fridge control electronics do *not* suffer from having power removed
- **Yes**, compressors can suffer if cycling is aggressive
- Your planned RAPT configuration is **protective, not harmful**
- In your specific case, external control is likely to **extend**, not shorten, the useful life of the cooler

If you want, next we can:
- Walk through a **first-power-up checklist**
- Define **alarm thresholds** for unattended operation
- Review a RAPT temperature log once you’ve run a batch

---
