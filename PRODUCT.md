# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
The primary user is a job seeker in the United States with no legal or sales background. They arrive on a paid ad or a job board, most often on a phone. They decide within seconds whether the opportunity looks legitimate and worth a minute of their time, and then they either apply or leave.

The role being recruited is **case acquisition**: finding and bringing in leads from car-accident victims for the firm, a sales/intake job. No previous experience is required, and the firm provides the training.

A secondary path exists: some candidates are referred by a current team member. The form records this in the optional "Recommended by" field.

## Product Purpose
joincaa.team is the recruiting landing page for Car Accident Attorney (CAA). It exists to turn ad and job-board traffic into completed applications. Success means a qualified candidate submits name, email and phone in under a minute. Each application goes to an n8n webhook, and the recruitment team follows up from there.

## Positioning
This is an entry-level case-acquisition job with a personal-injury law firm. Candidates get monthly base pay plus bonuses, a flexible schedule, paid training and a path to leading a team. The work also has a purpose: it connects accident victims with legal help. Another employer could copy the perks, but it could not truthfully claim the CAA brand or this specific line of work.

## Operating Context
- Traffic comes from US ads and job boards. The site is English-only and mobile-first in practice.
- The hiring flow is: Apply → Interview → Training → Grow.
- Submissions go to `https://n8n.srv1075657.hstgr.cloud/webhook/Submit` as JSON: fullName, email, phone (US 10-digit format), recommendedBy, submittedAt, source, pageUrl, and UTM/`ref` parameters when present.
- Hosting is a static `html/` folder served by nginx:alpine behind Traefik at joincaa.team / www.joincaa.team (`docker-compose.yml`, `nginx.conf`).

## Capabilities and Constraints
- The site is plain static HTML/CSS/JS with no build step and no framework. Fonts are self-hosted in `html/fonts/` (woff2).
- The application form must keep these behaviors: client-side validation, US phone masking, the honeypot anti-spam field, a 15s timeout, error and success states, and UTM passthrough.
- Contact fields are limited to US phone numbers.
- **Client decision: the information on the current page is all the client wants published.** The page shows no pay amounts, no job title and no remote/location details, and it will not. This is final, not an open question. Do not add those facts or ask for them again.

## Brand Commitments
- Name: **Car Accident Attorney** (short form **CAA**). Domain: joincaa.team.
- Logo: a lion inside a shield with the "CAR ACCIDENT ATTORNEY.COM" wordmark (`html/assets/IMG_4141.webp`, `html/assets/IMG_4142.webp`, `html/assets/logo-horizontal.webp`, `html/assets/shield.webp`). These are existing identity assets and are used as provided.
- Voice: direct, encouraging and plain-spoken. It speaks to beginners ("No previous experience required"). The footer tagline is "Making a difference. Building futures."

## Evidence on Hand
- **On hand:** the brand logo assets and the OG image (`html/assets/og-image.jpg`). The former stock team photo was removed in the redesign.
- **Not on hand:** published pay amounts, testimonials, photos of the real team, headcount or growth statistics, and press coverage. Future work must not invent any of these. Benefit claims stay at the level of the current copy, which is the scope the client approved.

## Product Principles
1. **Applying comes first.** Every section either earns trust or moves the visitor to the form, and the form stays short.
2. **Credibility comes from honesty.** Recruiting pages for commission-style roles are viewed with suspicion, so be specific where facts exist and never inflate claims.
3. **Write for beginners.** Assume no legal or sales vocabulary. Stay within the information the client approved.
4. **Design for the phone.** The typical visit is a mobile ad click on a variable connection, so the page must load fast and the form must be easy to fill on a phone.

## Accessibility & Inclusion
Applicants come from the general public. The form must stay fully usable with keyboard and screen reader: labelled fields, live error messages and managed focus, as it is today. Motion must respect `prefers-reduced-motion`.
