---
name: CAA Careers — Classic, refined
description: The original joincaa.team identity (white header, navy hero, red accents, heavy uppercase Montserrat, Open Sans) with its generic patterns removed and the form moved into the hero.
colors:
  navy: "#0b1f3f"
  navy-deep: "#071630"
  navy-2: "#13294f"
  red: "#c8102e"
  red-hover: "#a50d26"
  red-on-navy: "#ff4a4f"
  white: "#ffffff"
  gray-50: "#f4f6f9"
  gray-200: "#dfe4eb"
  gray-300: "#c6cdd8"
  text: "#1c2638"
  text-soft: "#4a5568"
  on-navy-soft: "#c9d3e2"
  error: "#b42318"
typography:
  display:
    fontFamily: "Montserrat, Arial Black, sans-serif"
    fontSize: "clamp(2.4rem, 4.9vw, 4.375rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    textTransform: uppercase
  headline:
    fontFamily: "Montserrat, Arial Black, sans-serif"
    fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 1.05
    textTransform: uppercase
  label:
    fontFamily: "Montserrat, Arial Black, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    textTransform: uppercase
  body:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  control: "4px"
  card: "8px"
  pill: "50%"
---

# Design System: CAA Careers — Classic, refined

## Overview
This is the original production page made right. It keeps what the client already recognizes (white sticky header, navy hero, red, heavy uppercase Montserrat, "Career opportunities") and removes what made it generic: the stock photo, the cyan, the stars, the dashes beside titles and the icon-circle grid. The application form moves into the hero so it is in the first viewport.

## Colors
- **Navy** `#0b1f3f` is the hero and footer ground; **navy-2 → navy-deep** fill the angled panel behind the form; **navy-deep** is the hero strip.
- **Red** `#c8102e` for buttons, check discs, step dots, the benefit tick and the CTA band (white text 5.6:1). **Red-on-navy** `#ff4a4f` only for large text on navy (headline second line, strip close).
- **Text** `#1c2638`, **text-soft** `#4a5568` on white and gray-50; **on-navy-soft** `#c9d3e2` for body on navy.

## Typography
- **Montserrat** (variable, self-hosted) 700–900 uppercase for headings, labels and buttons; **Open Sans** (variable) for body.
- The h1 is two stacked lines, white and red; its size is capped so "OPPORTUNITIES" always fits its column.

## Layout
- Container 1200px. Hero grid areas `copy card / checks card`; under 980px `copy → card → checks` so the form stays in the first viewport on phones.
- Benefits: 3-column definition list with hairline tops and a 28×3px red tick above each term (2 columns tablet, 1 phone).
- Process: four columns joined by a gray line through red numbered dots; on phones the dots sit left of each step.
- CTA is a red band; footer is navy with a 4px red top rule and the logo on a white plate.

## Elevation
Only the application card and buttons are lifted: card `0 2px 6px rgba(0,0,0,.18), 0 24px 48px -16px rgba(0,0,0,.55)`; red buttons carry a soft red-tinted drop.

## Components
- **Application card** (`#apply.apply-card`): white, 8px radius, 5px red top border, boxed inputs (4px radius) with navy focus ring; email and phone share a row on desktop.
- **Checks**: white text with red discs holding a white check.
- **Hero strip**: the original floating "You don't need experience" card, turned into a centered band at the foot of the hero.
- **Success**: red disc with a white check, "Thank you!" in Montserrat 900.

## Motion
One moment: the two headline lines wipe in from the left (clip-path, 0.9s expo-out, second line delayed 120ms). Off under `prefers-reduced-motion`.

## Do's and Don'ts
- Don't bring back stars, dashes beside titles, cyan, icon circles or a stock photo.
- Don't use colored side borders; the red accents are top borders, ticks and dots.
- Do keep red-on-navy for large text only.
