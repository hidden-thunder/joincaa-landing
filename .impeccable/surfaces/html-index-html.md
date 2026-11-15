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

## Direction contract (branch redesign/landing-clasico, 2026-11-15)
The user asked for a version close to the original production page (5047919) with its generic-style problems corrected.

THESIS: Keep the original's identity (white header, navy hero, red accents, heavy uppercase Montserrat, Open Sans, "Career opportunities") and fix what made it generic: no stock photo, no cyan, no stars or title dashes, no icon-circle grid, and the form moves into the hero.

FIRST VIEWPORT: h1 + lead + application card (desktop side by side; phone copy → card, checks below).

SIGNATURE: the original's angled panel behind the form, kept as plain geometry; the headline wipes in once.
