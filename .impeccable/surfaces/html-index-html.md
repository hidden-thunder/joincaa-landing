---
version: 1
slug: "html-index-html"
primary_target: "html/index.html"
related_targets: []
---

# Surface: joincaa.team landing (html/index.html)

Mode: Persuade. This is the recruiting landing page for case-acquisition applicants. Most visitors come from US ads or job boards, mostly on a phone.

## Constraints from the user (2026-11-14)
- The application form stays in the first viewport.
- The CAA logo is used exactly as supplied.
- Only the current copy is published. There are no pay figures, no job title and no remote/location info. The copy may be reorganized but no facts may be added.
- The page must not read as generic, as a stiff law firm, or as a scam/MLM.
- Success means brand image.
- The stock photo may be dropped.
- Copy note: "Takes less than a minute.", "Apply in under a minute" (meta) and the privacy line are not in production (5047919), but they were on the page the user confirmed as the client's approved content on 2026-11-14 (commit 0835701). They are kept as approved.
- Branch history: the Varsity Recruiting version is kept at tag `landing-varsity`. The user asked to see the less collegiate alternative, the rolled direction.

## Direction contract
THESIS: The page is the storefront window of a real local office that is hiring. It has hand-lettered gold leaf on dark glass, an "Apply within" card hung inside the window, and the working form is that card. This refuses two category defaults: the stock-photo careers hero, and a grid of icon cards.

OWN-WORLD: The ground is night window glass (#0b1626 → #10213a) with one soft diagonal reflection.
- **Sign painter's lettering.** Ultra block letters are gilded with a raster gold-leaf tile (assets/tex/gold-leaf.webp, procedural, with visible leaf seams). Each letter is outlined in red (#b62126) and carries a dark-red block shade (#4a0d10), which is the sign painter's "outline and shade".
- **Arched "NOW HIRING".** It is set along an SVG arc, as on real window lettering.
- **Accents.** Casual script accents are set in Yellowtail, and dividers are gold pinstripe double rules.
- **Enamel plates.** Steps sit on a flat porcelain plaque (#f7f6f2, navy border) hung on the night glass. The motto sits on a flat red porcelain sign with a white rim, which never uses the button's gold pinstripe.
- **Body type.** Body text is Barlow.
- **No icons.** The page has no icon tiles and no cards except the application card.

STORY: The visitor sees a real office with a sign in the window saying it is hiring beginners and will train them. They believe it is a local, legitimate place and not a pitch, and they fill in the card in the window.

FIRST VIEWPORT:
- **Ground.** Full-bleed dark glass.
- **Header.** An enamel logo plate sits top left and a red enamel "Apply now" button with gold pinstripe sits top right.
- **Left column.** It holds the arched gold "NOW HIRING", then the h1 "Build your career with CAA" in gilded Ultra, outlined and shaded, at about 4.5–5rem. The lead and the checklist follow, with gold ticks.
- **Right column.** It holds the white "Apply within" card, with a red script header and the live form.
- **Mobile.** The arch and the h1 come first, then the card starts inside the first screen.

FORM: Now Hiring — Apply Within, candidate 3 of 7 (THE ROLL, the assigned direction). seed:4b5d895827f3c315

SIGNATURE: A single gold glint sweeps across the gilded headline once on load (reduced motion respected). Benefits read as a glass-door directory of gilded names with gold pinstripe rules. Steps read as an enamel "hours" plaque with dotted leaders.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
