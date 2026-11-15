---
name: CAA Careers
description: Varsity recruiting in navy wool felt, two-layer twill lettering, sewn patches and a roster sheet.
colors:
  navy: "#14365b"
  navy-deep: "#0d2540"
  navy-ink: "#0a1c31"
  red: "#b62126"
  red-deep: "#8f1a1e"
  red-bright: "#e0474c"
  wool: "#f4f4f1"
  heather: "#dfe2e6"
  paper: "#fdfdfb"
  rule: "#c7d3e2"
  ink: "#10243b"
  ink-soft: "#3d5168"
  on-felt: "#f4f4f1"
  on-felt-soft: "#c8d3e1"
  success: "#1d7a4a"
typography:
  display:
    fontFamily: "Graduate, Rockwell, serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.03em"
  numeral:
    fontFamily: "Graduate, Rockwell, serif"
    fontSize: "clamp(4.5rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.03em"
  headline:
    fontFamily: "Graduate, Rockwell, serif"
    fontSize: "clamp(2.125rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "0.03em"
  title:
    fontFamily: "Graduate, Rockwell, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  checklist:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  roster: "6px"
  alert: "8px"
  button: "10px"
  block-patch: "18px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1200px"
  header: "76px"
  header-mobile: "64px"
  section: "clamp(72px, 10vw, 128px)"
  rib: "30px"
  field: "14px"
  patch-rim: "7px"
components:
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    typography: "{typography.title}"
    rounded: "{rounded.button}"
    padding: "1.05em 1.6em"
  button-red-hover:
    backgroundColor: "{colors.red-deep}"
  button-white:
    backgroundColor: "{colors.wool}"
    textColor: "{colors.navy}"
    rounded: "{rounded.button}"
    padding: "1.05em 1.6em"
  button-block:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "1.15em 1.4em"
    width: "100%"
  roster-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.roster}"
    padding: "44px clamp(22px, 3vw, 36px) 28px"
  roster-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 2px 8px"
  roster-label:
    textColor: "{colors.navy}"
    typography: "{typography.label}"
  patch-logo:
    backgroundColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "6px 12px"
  patch:
    backgroundColor: "{colors.wool}"
    textColor: "{colors.navy}"
    rounded: "{rounded.round}"
    size: "112px"
  patch-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.wool}"
  patch-navy:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.wool}"
  rib-cuff:
    backgroundColor: "{colors.navy-ink}"
    height: "{spacing.rib}"
  motto-band:
    backgroundColor: "{colors.wool}"
    textColor: "{colors.ink-soft}"
    padding: "26px 0"
---

# Design System: CAA Careers

## Overview

**Creative North Star: "The Varsity Roster"**

Joining CAA is presented as making the team. Every surface is a physical piece of American varsity kit: navy wool felt as the ground, heat-sealed two-layer twill for lettering, knit rib cuffs between sections, merrowed patches with satin-stitch emblems, jersey numerals for steps, and a white roster sheet as the application. The lion shield from the logo is the mascot. The system is material first: textures are real raster tiles (procedural, with provenance sidecars in `html/assets/tex/`), and the CSS layers them; it never fakes thread with dashed borders.

Density is low and confident. Big collegiate block lettering carries the hierarchy, the body copy stays plain and short in Barlow, and red is spent only where a thread or an action would be red on a letterman jacket. Objects sit on the felt slightly askew, as if sewn or laid down by hand, and settle straight when touched.

The logo is an identity asset used exactly as supplied, always on a white patch; it is never recolored, traced or rebuilt in twill.

**Key Characteristics:**
- Navy felt ground with a raster fiber grain; heather and wool as the only secondary grounds.
- Display type is always two-layer twill: wool face, navy keyline, red outer layer (inverted on light grounds).
- Sections are divided by knit rib cuffs, not rules or gradients.
- Benefits are patches in four silhouettes at varied size and tilt; steps are twill jersey numerals.
- The form is a ruled roster sheet on paper, slightly rotated on desktop.
- Motion is sewing and settling: one outline reveal on load, patches straighten on hover.

## Colors

Team colors taken from the CAA logo: a deep dyed navy and a single varsity red, on wool and paper whites.

### Primary
- **Varsity Navy** (navy): the felt dye. Hero, benefits and closing grounds (as a gradient to Felt Shadow), twill keylines on felt, the face of twill on light grounds, field labels and roster headings.
- **Felt Shadow** (navy-deep): the lower end of the felt gradient and the body of navy patches.
- **Locker Navy** (navy-ink): page background, sticky header, footer, and the base of every rib cuff.

### Secondary
- **Letterman Red** (red): action buttons, the outer twill layer, the "CAA" accent letters, checklist discs, patch rims and red patch bodies, field error text.
- **Pressed Red** (red-deep): button hover and alert text.
- **Signal Red** (red-bright): focus outline only (3px, 3px offset), chosen to read on both navy and paper.

### Neutral
- **Wool White** (wool / on-felt): twill faces on felt, the motto band, wool patch bodies, white buttons, primary text on felt.
- **Sweatshirt Heather** (heather): the secondary ground for the steps band, carrying the same felt-grain tile.
- **Roster Paper** (paper): the application sheet.
- **Roster Ruling** (rule): the 2px underline of every roster field.
- **Ink** (ink) and **Faded Ink** (ink-soft): text on paper, heather and wool.
- **Felt Haze** (on-felt-soft): secondary text on felt, tinted from navy rather than gray.
- **Clearance Green** (success): the success badge only.

### Named Rules
**The Thread Not Ground Rule.** Red is thread and action: buttons, outlines, accent letters, patch rims and patch fills. It never covers a section ground.

**The Three Grounds Rule.** A section sits on navy felt, heather, or wool. Paper is reserved for the roster sheet; locker navy for header, footer and cuffs.

## Typography

**Display Font:** Graduate (with Rockwell, serif), self-hosted, weight 400 only
**Body Font:** Barlow (with system-ui, sans-serif), 400 to 700
**Label Font:** Barlow Condensed 700 (with Barlow)

**Character:** Graduate is collegiate block lettering, the face of a team jacket; it is always uppercase and almost always rendered as twill. Barlow is the plain-spoken voice underneath, and its condensed cut does the uniform-label work: checklists, field labels, the motto.

### Hierarchy
- **Display** (Graduate 400, clamp(2.6rem, 6.2vw, 5.75rem), 1.02): the hero headline, in two-layer twill, max 11ch (14ch below 980px), balanced.
- **Numeral** (Graduate 400, clamp(4.5rem, 8vw, 6rem), 0.95): jersey step numbers in twill; 6rem is the display cap.
- **Headline** (Graduate 400, clamp(2.125rem, 4.6vw, 3.75rem), 1.06): section titles in twill; the closing call runs up to 4.25rem at max 22ch.
- **Title** (Graduate 400, 1.375 to 1.75rem, 1.1): patch, step, roster and success headings, plain (no twill), uppercase, wool on felt or navy on light.
- **Body** (Barlow 400, 1.0625rem, 1.55): copy; the lead runs to 1.25rem at max 34rem. Patch and step copy hold 26 to 30ch.
- **Label** (Barlow Condensed 700, 0.875rem, 0.08em, uppercase): roster field labels. The checklist uses the same cut at 1.125rem / 0.02em, the motto at clamp(1.125rem, 2.2vw, 1.5rem) / 0.04em.

### Named Rules
**The Twill Rule.** Display, headline and numeral type is set as two-layer twill: a back copy (outer layer, red, 0.1em ring, woven through the `#twill-weave` SVG filter), a front copy (face with a 0.035em keyline) and a texture copy clipped to the twill tile. On light grounds use the on-light variant: navy face, wool keyline, 0.075em outline, inverted screen texture.

**The One Red Word Rule.** Inside a twill line, a red word (red face, 0.05em wool keyline) marks the brand name only.

## Layout

A single 1200px container with a fluid gutter (clamp(16px, 4vw, 40px)) and a sticky 76px header (64px under 620px). Sections are full-bleed bands with clamp(72px, 10vw, 128px) vertical padding, separated by 30px rib cuffs: under the hero, around the motto band, above the closing call and above the footer.

The hero is a two-column grid (1.15fr copy and checklist, 0.85fr roster with a 340px floor), column gap clamp(32px, 5vw, 80px). Under 980px it stacks copy, form, checklist so the form begins inside the first phone screen; the roster drops its rotation and caps at 560px.

Benefits use a three-column patch grid where the middle column drops 56px, giving a sewn-on scatter; under 980px it becomes two columns with even items dropping 40px. Steps use four columns, two under 980px, and a single list with a 96px numeral column under 620px.

## Elevation & Depth

Depth is physical: objects lie on the felt and cast short, dark, navy-tinted shadows (a tight contact shadow plus a soft negative-spread drop). Nothing glows and nothing floats in empty space. The felt and the twill carry their own depth through the raster tiles and blend modes.

### Shadow Vocabulary
- **Button rest** (`0 2px 3px rgb(5 15 30 / .25), 0 8px 18px -6px rgb(5 15 30 / .45)`) and **lift** (`0 4px 6px rgb(5 15 30 / .25), 0 14px 26px -8px rgb(5 15 30 / .5)`) with a 2px rise.
- **Patch** (`0 3px 4px rgb(3 10 20 / .35), 0 12px 22px -8px rgb(3 10 20 / .55)`); the felt body inside the rim takes `inset 0 1px 2px rgb(0 0 0 / .25)`.
- **Mascot** (`0 4px 6px rgb(3 10 20 / .4), 0 16px 30px -10px rgb(3 10 20 / .6)`).
- **Roster sheet** (`0 2px 4px rgb(0 0 0 / .2), 0 30px 60px -20px rgb(0 0 0 / .6)`): the deepest drop, a sheet of paper laid on felt.
- **Logo patch** (`0 2px 6px rgb(0 0 0 / .3)`).
- **Twill lift** (`0 .1em .16em rgb(5 15 30 / .45)`) under the outer twill layer.

### Named Rules
**The Laid-On Rule.** Every shadow pairs a contact shadow with a blurred, negatively spread drop. No hard offset shadows, no colored glows.

## Shapes

Silhouettes come from sewn goods. Patches are a 7px merrowed rim (the merrow tile dyed in the thread color) around a felt body, in four shapes: round (50%), shield (16px top corners, 50%/62% elliptical bottom), block (18px, 1.3 ratio) and oval (50%, 1.35 ratio). Patches tilt between -6deg and 7deg; the roster tilts 0.6deg; the mascot -4deg.

Elsewhere corners are modest: 10px for buttons and the logo patch, 6px for the roster sheet, 8px for alerts. Roster fields are square, underline-only. Checklist marks and the success badge are full circles. The roster head closes with a 3px double navy rule.

## Components

### Buttons
Heavy, sewn-on tabs set in Graduate.
- **Shape:** gently rounded (10px), uppercase Graduate at 1rem, 0.03em tracking, 0.55em icon gap.
- **Red (primary):** Letterman Red on white text. Small (0.8125rem) in the header; block (full width, 1.0625rem) as the roster submit; 1.125rem in the closing call.
- **White:** Wool White with navy text, hover to pure white.
- **Hover / Focus:** 2px rise with the lift shadow over 0.25s ease-out; red deepens to Pressed Red; the arrow icon slides 3px right. Focus is the global Signal Red outline.
- **Loading:** disabled at 0.8 opacity with progress cursor; the arrow nudges 4px on a 0.9s loop.

### Roster Sheet (application form)
- **Container:** Roster Paper, 6px corners, roster shadow, rotated 0.6deg on desktop. Head: shield emblem at 56px, Graduate title in navy, a 3px double navy rule beneath.
- **Fields:** transparent, square, 2px Roster Ruling underline, Barlow 500 at 1.0625rem, red caret. Labels in Barlow Condensed 700 navy; "(optional)" drops to Barlow 500 Faded Ink.
- **Focus:** underline turns navy, field washes to #f1f5fa, plus a 2px navy under-shadow on keyboard focus. Hover darkens the underline to #9fb1c7.
- **Error:** underline turns red, field washes to #fdf1f1, a 0.875rem 600 red message appears below. The form-level alert is a #fdf1f1 box with a #f0c4c6 border, 8px corners, Pressed Red text.
- **Success:** a 76px Clearance Green disc with a check, a Graduate "Thank you!" title, Faded Ink copy.

### Patches (benefits)
Sewn felt patches with embroidered emblems.
- **Construction:** the rim is the thread color multiplied over the merrow tile (10px); the body is the base color with the felt grain (200px, soft-light); the emblem is a satin-stitch tile masked to an SVG emblem at 46% of the patch.
- **Variants:** wool body with red rim and navy emblem; red body with wool rim and emblem; felt-shadow body with red rim and wool emblem.
- **Hover:** the patch straightens to 0deg and scales 1.04 over 0.45s ease-out.

### Rib Cuff
A 30px band of the rib tile (12x30, navy / wool / red / wool / navy with knit ridges) repeating horizontally on Locker Navy. Decorative, aria-hidden.

### Mascot Patch
The supplied lion shield, unaltered at 86px, on a white disc inside a 148px red merrowed rim, tilted -4deg. It sits above the closing call only.

### Logo Patch
The supplied horizontal logo on a white patch, 6px 12px padding, 10px corners. 46px tall in the header (36px on phones), 64px in the footer.

### Checklist
Barlow Condensed 700 uppercase items, each led by a 26px Letterman Red disc holding a white 3-weight check. Two columns, one under 620px.

### Jersey Numerals (steps)
Twill numerals 1 to 4 on heather (on-light variant), each with a Graduate navy title and short Faded Ink copy.

### Motion
One easing for everything: `cubic-bezier(.16, 1, .3, 1)`. The signature is the sew: the hero headline's outer twill layer reveals left to right once on load (1.1s, 0.25s delay, clip-path). Everything else is hover response (0.2 to 0.45s). Under `prefers-reduced-motion` all animation and transition is removed and smooth scroll is off.

## Do's and Don'ts

### Do:
- **Do** render every material from its raster tile: felt-grain (400px, soft-light), twill (32px), merrow (10px), satin (6 to 8px), rib (12x30). New tiles ship with a provenance sidecar.
- **Do** set display, section and numeral type as two-layer twill, switching to the on-light variant on heather or wool.
- **Do** divide full-bleed bands with a 30px rib cuff.
- **Do** keep red to thread and action: buttons, twill outlines, the brand word, checklist discs, patch rims and fills.
- **Do** tilt sewn objects slightly (between -6deg and 7deg) and let them settle straight on hover.
- **Do** show the logo and the lion shield exactly as supplied, on white patches.
- **Do** keep the application on the roster sheet: paper, underline fields, condensed navy labels.

### Don't:
- **Don't** draw stitching with dashed or dotted CSS borders; thread comes only from the merrow, satin and rib rasters.
- **Don't** use red as a section ground.
- **Don't** recolor, trace or re-letter the logo or the lion shield.
- **Don't** use hard offset shadows or colored glows; shadows are contact plus soft drop, navy-tinted.
- **Don't** set Graduate in lowercase or for running copy; body, labels and form text stay in Barlow.
- **Don't** set any twill type larger than 6rem.
