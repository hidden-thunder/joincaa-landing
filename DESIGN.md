---
name: CAA Careers
description: A lit storefront window at night. Gold-leaf sign lettering on dark glass, an "Apply within" card hung inside, and porcelain enamel plates for the details.
colors:
  glass: "#0b1626"
  glass-2: "#10213a"
  glass-deep: "#08111e"
  navy: "#14365b"
  red: "#b62126"
  red-deep: "#8f1a1e"
  shade: "#4a0d10"
  gold: "#d6a94f"
  gold-light: "#f2d995"
  gold-dim: "#9c7a36"
  enamel: "#f7f6f2"
  card: "#fdfdfc"
  rule: "#cfd6e0"
  ink: "#142338"
  ink-soft: "#44536a"
  on-glass: "#eef1f5"
  on-glass-soft: "#b9c5d4"
  error-wash: "#fdf1f1"
typography:
  display:
    fontFamily: "Ultra, Rockwell Extra Bold, serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Ultra, Rockwell Extra Bold, serif"
    fontSize: "clamp(2.125rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "0.01em"
  title:
    fontFamily: "Ultra, Rockwell Extra Bold, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.1
  title-sm:
    fontFamily: "Ultra, Rockwell Extra Bold, serif"
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.1
  script:
    fontFamily: "Yellowtail, cursive"
    fontSize: "clamp(2.5rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
  button:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  card: "4px"
  alert: "6px"
  button: "8px"
  sign: "10px"
  plaque: "18px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1200px"
  field: "14px"
  stack: "28px"
  entry: "24px"
  sign-band: "clamp(36px, 5vw, 56px)"
  section: "clamp(72px, 10vw, 128px)"
  cta: "clamp(80px, 11vw, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "1.05em 1.7em"
  button-primary-small:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "0.95em 1.3em"
  button-primary-block:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "1.15em 1.4em"
    width: "100%"
  card-apply:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "30px clamp(22px, 3vw, 36px) 26px"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 2px 8px"
  input-field-invalid:
    backgroundColor: "{colors.error-wash}"
    textColor: "{colors.ink}"
  sign-enamel:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    rounded: "{rounded.sign}"
    padding: "24px clamp(20px, 4vw, 48px)"
  plaque-enamel:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plaque}"
    padding: "clamp(40px, 6vw, 64px) clamp(24px, 6vw, 72px)"
  directory-entry:
    textColor: "{colors.on-glass-soft}"
    padding: "24px 0"
  logo-plate:
    backgroundColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "6px 12px"
---

# Design System: CAA Careers

## Overview

**Creative North Star: "The Lit Storefront Window"**

The whole page is one pane of shop-window glass at night: a deep navy ground (glass to glass-2) crossed by a single soft diagonal reflection. Everything sits on that glass or behind it. On the glass there is sign painter's lettering: Ultra block letters filled with burnished gold leaf, ringed in red and stepped down-right with a dark-red block shade. Behind it hang real objects: one white application card, a red porcelain sign, an enamel plaque. The visitor should read a real local office that is hiring, not a careers template.

Density is low and the pace is deliberate. Long dark passages of glass separate a few objects. Each object has its own physical material (gilt, porcelain, card stock), and that material is shown through layered inset rims and soft drop shadows, not through decoration added on top. Brand inks come from the CAA logo (navy and red). Gold is the sign painter's metal and never becomes a flat UI color for surfaces.

The world rejects two category defaults: the stock-photo careers hero and the grid of icon cards.

**Key Characteristics:**
- Night window glass for the ground, with one diagonal reflection and no other light effects.
- Gilded Ultra lettering for display headings, with a red outline and a dark-red block shade.
- One white card, which is the working application form. It is hung slightly askew.
- Porcelain enamel plates for the motto (red sign) and the steps (cream plaque, navy border).
- Gold pinstripe double rules for dividers and sills.
- Barlow for body text, Barlow Condensed uppercase for labels and buttons, and Yellowtail script for a few sign phrases.

## Colors

A night palette: deep glass navies, the two logo inks, one sign painter's gold family, and warm porcelain whites.

### Primary
- **Logo Red** (red): The enamel of the button and the motto sign, the outline ring of gilded letters, the double rule under card and plaque headings, the script accents, the step numbers, the caret, and error text.
- **Lacquer Red Deep** (red-deep): The bottom of the button gradient, the inner rim of the button, and error alert text.
- **Block Shade** (shade): Used only for the stepped block shade behind gilded lettering and the arched "NOW HIRING". It is never used as a fill or as text.

### Secondary
- **Leaf Gold** (gold): The checklist ticks, the directory names, the button pinstripe, text selection, and the low-alpha gold hairlines on the header and footer.
- **Burnish Gold** (gold-light): The hover pinstripe and the focus ring. It is the brightest point of the metal.
- **Tarnish Gold** (gold-dim): The double-rule sill under the first window, the directory's top double rule, and the scrollbar thumb.
- The gold-leaf raster (`assets/tex/gold-leaf.webp`) is the real gold surface. These hexes only approximate it in the places a raster cannot go.

### Tertiary
- **Logo Navy** (navy): Headings and labels on light surfaces, the plaque's border ring, and the input's focus underline.

### Neutral
- **Window Glass** (glass) and **Glass Lift** (glass-2): The page ground, the header, and the alternating vertical gradient of the pane.
- **Glass Deep** (glass-deep): The footer, which reads as the dark frame below the window.
- **Enamel Cream** (enamel): The steps plaque.
- **Card Stock** (card): The application card.
- **Pencil Rule** (rule): The input underline at rest.
- **Ink** (ink) and **Ink Soft** (ink-soft): Body text and secondary text on light surfaces.
- **On Glass** (on-glass) and **On Glass Soft** (on-glass-soft): Strong text and body text on the glass.
- **Error Wash** (error-wash): The background of invalid inputs and the form alert.

### Named Rules
**The Metal Is Not Paint Rule.** Gold appears as leaf (the raster clipped into letters), as pinstripe, or as a tick or hairline. Never fill a panel, button, or background with gold.

**The Two Inks Rule.** Red and navy are the logo's inks and the only chromatic colors besides gold. Do not add a success green, a blue link color, or any other accent hue. The success state is a red badge with a white rim.

## Typography

**Display Font:** Ultra (with Rockwell Extra Bold, serif)
**Body Font:** Barlow (with system-ui, sans-serif)
**Label Font:** Barlow Condensed 700 (with Barlow, system-ui)
**Script Font:** Yellowtail (with cursive)

**Character:** Ultra is the sign painter's slab block, heavy enough to hold leaf, outline, and shade at once. Barlow is plain enough to be a working office's paperwork. Condensed uppercase labels sound like stencilled shopfront type, and Yellowtail is the single flourish a sign painter adds.

### Hierarchy
- **Display** (Ultra 400, clamp(2.5rem, 5.4vw, 4.75rem), 1.08): The gilded h1 only. Keep it to about 12 to 14ch with balanced wrapping.
- **Headline** (Ultra 400, clamp(2.125rem, 4.6vw, 3.75rem), 1.08): Gilded section headings on the glass. Keep them to about 18 to 20ch.
- **Title** (Ultra 400, clamp(1.75rem, 3.4vw, 2.75rem), 1.1): Navy headings on enamel, such as the plaque title. The card heading uses the same face at 1.375rem.
- **Title Small** (Ultra 400, clamp(1.375rem, 2vw, 1.75rem), 1.1): Directory names, which get a 1px red outline and a 2px shade instead of the full gilt. Step names use the same face at 1.5rem in navy, and step numbers use it at 1.75rem in red.
- **Script** (Yellowtail 400, clamp(2.5rem, 4vw, 3rem), 1): The card's "Apply within" phrase, the "Thank you!" success heading, and the footer tagline (1.75rem).
- **Lead** (Barlow 400, clamp(1.0625rem, 1.4vw, 1.25rem), 1.55): The first-window paragraph, kept to 34rem or less.
- **Body** (Barlow 400, 1.0625rem, 1.55): All running text. Descriptions on glass are kept to 40ch or less. Input text uses weight 500.
- **Label** (Barlow Condensed 700, 0.875rem, 0.08em, uppercase): Field labels. The checklist uses the same face at 1.125rem with 0.05em tracking, and the motto sign uses it at clamp(1.125rem, 2.2vw, 1.5rem) with 0.06em tracking.
- **Button** (Barlow Condensed 700, 1.0625rem, 0.1em, uppercase): All button labels.

### Named Rules
**The Lettering Is Painted Rule.** Ultra on glass is always gilded: leaf fill, red outline ring, and block shade together. Ultra on enamel or card is flat navy or red ink. Never set plain gold or white Ultra on the glass.

**The One Flourish Rule.** Yellowtail is reserved for short sign phrases on the card, the success state, and the footer. It is never used for body text, labels, or a line stacked above a section heading.

## Layout

The page uses one centered container, `min(100% - 2 × gutter, 1200px)`, with a fluid gutter. It reads as one continuous pane. `main` carries the glass gradient and the reflection, so sections don't create their own backgrounds.

- **First window:** Two columns of 1.15fr and minmax(340px, .85fr), with the copy and checklist on the left and the card spanning both rows on the right. The column gap is clamp(32px, 5vw, 80px) and the row gap is 28px. The window ends in a 9px double gold pinstripe sill. At 980px or less it becomes one column ordered copy, card, checklist, so the card starts inside the first phone screen.
- **Rhythm:** Sections use the section padding. The sign band is tighter (sign-band), and the final call is looser (cta). Within the card, each field adds 14px of top padding.
- **Directory:** Two columns on desktop with a column gap of clamp(32px, 6vw, 96px), and one column at 980px or less.
- **Hours rows:** A four-track grid (number, name, dotted leader, text). At 980px or less the text drops under the name, and at 620px or less the leader is hidden.
- **Header:** Sticky and 76px tall, or 64px at 620px or less. The logo plate sits on the left and the small button on the right.

**The One Pane Rule.** The glass is a single surface from header to final call. Don't add section bands with their own background tints. Objects hang on the glass instead.

## Elevation & Depth

Depth is physical, not abstract. Objects sit in front of the glass and cast real shadows, made of a tight contact shadow plus a long, soft, negative-spread drop. Material edges are built from stacked `inset` rings: the button's lacquer rim and pinstripe, the sign's white rim, the plaque's navy border. The glass itself is lit by one diagonal reflection and nothing else.

### Shadow Vocabulary
- **Hung card** (`0 2px 4px rgb(0 0 0 / .3), 0 30px 60px -20px rgb(0 0 0 / .7)`): The application card, the only object that floats this far forward.
- **Plaque** (`0 4px 6px rgb(0 0 0 / .3), 0 30px 50px -20px rgb(0 0 0 / .6)`, plus inset 10px enamel and 12px navy rings): The steps plaque.
- **Button** (`0 2px 3px rgb(0 0 0 / .3), 0 10px 22px -8px rgb(0 0 0 / .55)`, plus inset 3px red-deep and 4.5px gold rings): On hover it lifts 2px and the drop deepens.
- **Sign** (`0 3px 5px rgb(0 0 0 / .35)`, plus inset 6px red and 9px white rings): The motto sign sits flat against the glass.
- **Logo plate** (`inset 0 0 0 1.5px rgb(20 54 91 / .25), 0 2px 6px rgb(0 0 0 / .35)`): The white plate that holds the logo.
- **Block shade** (five stepped text shadows from .06em to .12em down-right in shade): This shadow belongs to the lettering, not to the objects.

### Named Rules
**The Single Reflection Rule.** The glass gets exactly one diagonal reflection (105°, white at about 8.5% or less) as a fixed layer behind the content. Don't add glows, spotlights, noise, or extra light streaks.

**The Shade Belongs To Letters Rule.** Hard, zero-blur, offset shadows are allowed only as the sign painter's block shade on Ultra lettering. Objects (card, plates, buttons) always cast soft shadows.

## Shapes

Corners are slight and belong to the material. Card stock is almost square (4px) and hung at −0.8° on desktop, straightening at 980px or less. Buttons and the logo plate are pressed enamel (8px). The motto sign is a little rounder (10px), and the hours plaque is the softest (18px), like a stamped porcelain plate. Inputs have no corners at all: they are a 2px underline on the card. Dividers are always double rules, either 4px double red under headings on light surfaces or 4px double gold-dim on glass, with single 1px hairlines for list rows. The only circle is the success badge.

## Components

### Buttons
Red enamel with a gold pinstripe. It is tactile and lacquered, and it is the only call to action.
- **Shape:** Pressed enamel corners (8px).
- **Primary:** A vertical lacquer gradient (#c5292e to red at 55% to red-deep), white Barlow Condensed uppercase text, an inset 3px red-deep rim, and a 4.5px gold pinstripe inside it.
- **Sizes:** Small in the header, default in the final call (1.125rem there), and block at full width on the card (1.125rem).
- **Hover / Focus:** It lifts 2px, the pinstripe brightens to gold-light, the drop deepens, and the trailing arrow nudges 3px. Focus is the global 3px gold-light outline with a 3px offset.
- **Loading:** The button is disabled with a progress cursor at 85% opacity while the arrow pulses.

### The "Apply within" Card (form)
The one card on the page, which is also the working application form.
- **Corner Style:** 4px, rotated −0.8° on desktop.
- **Background:** Card stock with ink text, and the hung-card shadow.
- **Head:** Centered. The red Yellowtail "Apply within" sits above a navy Ultra heading and a soft subline, closed by a 4px double red rule.
- **Internal Padding:** 30px top, clamp(22px, 3vw, 36px) at the sides, and 26px at the bottom.
- **After submit:** A red success badge with a white inner rim, a red script "Thank you!", and soft body text.

### Inputs / Fields
- **Style:** A transparent field with a 2px pencil-rule underline, no radius, Barlow 500 text, a red caret, and navy condensed uppercase labels above it.
- **Hover:** The underline darkens.
- **Focus:** The underline turns navy, a faint blue wash fills the field, and a 2px navy shadow line appears on focus-visible.
- **Error:** The underline turns red over the error wash, with a 600-weight red message below. The form alert is an error-wash panel with a 6px radius and red-deep text.

### Directory
A glass-door directory for the benefits: gilded names painted on glass, not cards.
- A two-column definition list under a 4px double gold-dim top rule. Each entry has 24px of block padding and a 1px gold hairline (gold at 28% alpha) below it.
- Names are Ultra in gold with a 1px red outline and a 2px shade. Descriptions are on-glass-soft, kept to 40ch or less.

### Hours Plaque
The steps, shown as a porcelain "hours" plaque with dotted leaders.
- An enamel cream plate with an 18px radius and a navy ring inset 10px from the edge. The navy Ultra title closes with a 4px double red rule.
- Each row has a red Ultra number, a navy Ultra name, a 3px dotted leader, and soft text. Rows are separated by 1px hairlines, and the last row has none.

### Motto Sign
A flat red porcelain sign with a white rim inset 6px from the edge, and white condensed uppercase text with a cream highlight phrase. It never carries the button's gold pinstripe, so it cannot be read as clickable.

### Gilded Lettering (signature)
Two stacked copies of the same text. The back copy is red, ringed by a 12-point text-shadow outline at .045em plus the five-step block shade. The front copy is transparent, with the gold-leaf raster clipped into the glyphs at a tile size of 1.7em, so the leaf seams scale with the letters. For the arched "NOW HIRING", the same three layers (shade offset, red stroke, leaf pattern fill) are set on an SVG arc.
- **Glint:** On headings marked for it, one specular band (105°, warm white at 85%) sweeps once across the leaf over 1.8s on the out-expo easing after a 0.5s delay. It plays once and never loops. Reduced motion turns it off.

### Logo Plate
The CAA logo, used exactly as supplied, on a white enamel plate with an 8px radius and a faint navy inner line. It is 46px tall in the header, 36px on phones, and 64px in the footer.

## Do's and Don'ts

### Do:
- **Do** gild every Ultra heading on the glass with all three layers: leaf, red ring, and block shade.
- **Do** hang new content as objects on the one pane, with soft object shadows and inset material rims.
- **Do** use double rules for dividers: red on light surfaces, gold-dim on glass.
- **Do** keep the application card as the only card, and keep the form inside the first viewport on every breakpoint.
- **Do** use stroke icons only where they do a job (tick, arrow, lock, alert), inline at 1.1 to 1.25em in currentColor.
- **Do** honor reduced motion. The glint, the transitions, and smooth scroll all turn off.

### Don't:
- **Don't** build grids of icon cards or tiles. Lists are directories, plaques, or ticked checklists.
- **Don't** use a stock-photo hero.
- **Don't** give the motto sign or any other non-interactive plate the gold pinstripe. The pinstripe means "press".
- **Don't** add a second reflection, a glow, or a texture to the glass.
- **Don't** fill surfaces with gold or introduce a new accent hue.
- **Don't** stack small labels or script lines above section headings. Script is for the card, the success state, and the footer only.
- **Don't** alter, recolor, or crop the CAA logo, or set it directly on the glass without its plate.
