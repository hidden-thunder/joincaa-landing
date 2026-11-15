---
version: 1
slug: "html-index-html"
primary_target: "html/index.html"
related_targets: []
---

# Surface: joincaa.team landing (html/index.html)

Mode: Persuade. Recruiting landing page for case-acquisition applicants. Most visitors arrive from US ads or job boards, usually on a phone.

## Constraints from the user (2026-11-14)
- The application form stays in the first viewport.
- The CAA logo is used exactly as supplied.
- The page publishes only what the current copy says: no pay figures, no job title, no remote/location info. Copy may be reorganized, but no facts may be added.
- The page must not read as generic, as a stiff law firm, or as a scam/MLM.
- Success = brand image: the client feels the page lives up to the brand.
- The stock photo may be dropped.

## Direction contract
THESIS: Joining CAA means making the team. The page speaks the American varsity recruiting language: felt, two-layer twill, jersey numerals and roster sheets, with the lion from the logo as the mascot. It refuses the category default of a stock office photo, a form card and a grid of icon cards.
OWN-WORLD: The ground is navy wool felt (#14365b→#0d2540), rendered from a raster fiber tile (assets/tex/felt-grain.webp, procedural).
- Grounds: heather sweatshirt grey (#dfe2e6, same fiber tile) is the secondary ground for the steps band, and a wool off-white (#f4f4f1) motto strip sits between two rib cuffs.
- Lettering: collegiate block lettering as heat-sealed two-layer twill. Both layers carry the twill-weave raster (assets/tex/twill.webp): the face is clipped to it, and the outer layer gets it through an SVG multiply filter. The face has a keyline. Colors swap per ground: wool/navy/red on felt, navy/wool/red on heather.
- Dividers: knit rib cuffs (raster tile assets/tex/rib.webp) divide the sections.
- Benefits: patches with raster merrowed rims (assets/tex/merrow.webp) and satin-stitch emblems (assets/tex/satin.webp masked to assets/emb/*.svg). They are sewn on a felt panel in four silhouettes (round, shield, block, oval) at varied size and angle.
- Mascot: the supplied lion shield, unaltered, sewn as a mascot patch above the closing call.
- Application: a white roster sheet with ruled lines.
- Red (#b62126) is used for action, outlines and patch fills only, never as a whole ground. No dashed CSS "stitching".
- Amended after finish reviews: the earlier chenille and then tackle-twill wording could not be rendered honestly without image generation, so the lettering is two-layer twill. The tape strip was removed.
STORY: In seconds the visitor sees a team that is recruiting beginners and offers training, flexibility and growth. They believe it is a real team rather than a pitch, and they sign the roster.
FIRST VIEWPORT: full-bleed felt. Logo patch top-left, red "Apply now" button top-right. Left column: two-layer twill headline "Build your career with CAA" set in three lines at ~5.75rem on desktop (two lines are not reachable beside the form at this face's width), "CAA" in red twill with a wool keyline; lead; five-item checklist. Right column: the roster sheet (live form), slightly rotated. Mobile: headline, lead, then the form begins inside the first screen.
FORM: Varsity Recruiting, candidate 1 of 7 (IMPECCABLE'S PICK, chosen over the rolled candidate 3). seed:4b5d895827f3c315
SIGNATURE: the headline's outer twill layer is sewn on once at load (left-to-right clip reveal, reduced-motion respected). Steps are jersey numerals 1–4 in two-layer twill at 6rem (display cap). Patches straighten and lift on hover.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
