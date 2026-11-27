# Website content changes: board review

This document lists every text change in the redesign so the board can approve it or roll it back section by section. "Old" is the text from the previous site (shortened where long). "New" is what the redesigned site says.

**Hard facts were not changed:** income limits, addresses, floor and door directions, phone number, booking links, hours, training dates and IRS links. They now live in one file, `js/site-data.js`, so every page shows the same values.

Spanish pages (`/es/`) are translations of the new English text. **They need review by a native Spanish speaker before launch.**

---

## Site-wide

| Section | Old | New |
|---|---|---|
| Header tagline | none | "Bloomington‑Normal Free Tax Services" |
| Menu | Home, About, Locations, Volunteer, Appointments, In Memoriam | Home, Appointments, Locations, Virtual VITA, FAQ, About, Volunteer, Donate, plus an **Español** switch. In Memoriam moves to the footer. |
| Footer "Latest News" | "February 1, 2027 will be our first day of operations for the 2026 tax season." | "Our season – First day of the season: February 1, 2027" |
| Footer contact | "Email: info@bnfreetaxservices.org" | Email, plus the Normal ARC phone 309-888-9099 |
| Copyright | Said 2021, 2025, 2026 or 2027 depending on the page | "© 2027 Bloomington Normal VITA Foundation · a 501(c)(3) nonprofit" on every page |
| Alert banner | Hand-edited, commented-out HTML on the homepage only | Optional banner on every page, switched on and off in `site-data.js` |
| Hours wording | Homepage showed open hours (e.g. 5–8pm); Appointments showed last-appointment times (e.g. 5–7:30pm) | Both everywhere: "Open 5:00 pm–8:00 pm · Last drop-off appointment: 7:30 pm" |

## Home (`index.html`)

| Section | Old | New |
|---|---|---|
| Headline | "Simple and accurate taxes prepared at no cost to qualifying taxpayers!" | "Free tax help for local families" |
| Intro | none | "If you qualify, our IRS-certified volunteers will prepare your federal and Illinois tax returns and e-file them for you, at no cost." |
| Booking notice | "Appointments are available up to 4 weeks in advance. New appointment slots will be opened on a rolling basis throughout the tax season starting on January 20." | "Booking opens January 20, 2027. You can book up to 4 weeks ahead, and we add new times all season long. All sites are by appointment only." |
| Who qualifies | "SINGLE with no dependents & income < $47,000" (and the other two rows) | "Single, no dependents – $47,000 or less" (same limits) plus "Not sure? Email us and we'll help you find out." |
| Hours | List of days and sites with booking links | "When & where" card driven by the schedule data |
| What to bring | Original list | Same items, plainer wording. "Social Security cards (or ITIN letters)" merges wording from the old Appointments page. |
| Intake form | Only on the Appointments page | Also on the homepage, with the nonresident form and the note that those returns are prepared only at HCC |
| How it works | none | Three steps: book, drop off, pick up |
| Why Choose Us | "Our tax preparers…", "get to know us more…", "what we offer…", "get in touch with us…" | "Certified volunteers", "Run by volunteers", "Federal + state, e-filed", "Questions? Just ask" (same meaning, shorter) |
| Volunteer/donate band | none | "Want to help your community? Become a volunteer (training is free), or support our work with a gift." |

## Appointments (`appointments.html`)

| Section | Old | New |
|---|---|---|
| Intro | "All sites will continue to operate with a drop-off/pick-up model by appointment only. There will be no walk-ins and no in-person waiting." | "All of our sites work by drop-off appointment only. There are no walk-ins and no waiting in line. You drop off your documents, and we prepare your return." |
| Process | One paragraph | Four numbered steps: fill out the intake form, book, drop off (and book pick-up), pick up |
| Sites | "Normal ARC (**Tue** 9am–2:30pm)" | **Thursday** 9:00 am–3:00 pm, last appointment 2:30 pm (the board confirmed Tuesday was an error) |
| HCC | none | Callout: nonresident and international student returns are prepared only at HCC, with a link to Form 13614-NR |
| BPL | none | Tag: "Limited Spanish-language services" |
| Virtual | Not linked | "Prefer to stay home? Try Virtual VITA" section |

## Locations (`locations.html`)

| Section | Old | New |
|---|---|---|
| Layout | Click-to-switch tabs with one map | One card per site with map, hours, booking button and directions |
| HCC directions | "…on the thrid floor of the Workforce Development Center (WDC) building." | Typo fixed: "Third floor of the Workforce Development Center (WDC) building." |
| ARC directions | "Use the west side north door to access the second floor." | "Use the north door on the west side to reach the second floor." |
| Intro | none | "We have three sites in Bloomington-Normal. Every site is by appointment only. English-language services are available at all sites." |

## Virtual VITA (`virtual.html`)

| Section | Old | New |
|---|---|---|
| Visibility | Page existed but was not in the menu; copyright 2021 | In the menu. Can be hidden with `virtual.enabled: false` in `site-data.js`. |
| Requirements | Inside the intro paragraph | "Is Virtual VITA right for you?" checklist, including "Each person signing needs their own email address" |
| Process | Eight bullets | Seven numbered steps with the same content |
| Booking window | "Our first appointments will be on Feb 1, so you will not be able to book an appointment until January 25 at the earliest." | "…you can start booking one week before our first day, February 1, 2027." |

**Please confirm:** is Virtual VITA running this season?

## FAQ (`faq.html`): new page

All answers are drawn from existing site content and from facts the board provided: Spanish services only at BPL, and nonresident returns only at HCC.

## About (`about.html`)

| Section | Old | New |
|---|---|---|
| Services | "We work with families throughout McLean County Illinois and beyond… There is never a charge for our services." | Same meaning, shorter |
| How it's free | Long paragraph | "How we keep it free" and "IRS-approved sites" cards. Same facts, including "without discrimination" and "Clients are never asked to donate." |
| Sign-up | "lAl of our sites are operating by drop-off appointment only…" plus walk-in / first-come-first-served text | Typo fixed. The outdated walk-in text is **removed** and replaced with a link to Appointments. |
| Story | none | "In 2011, when our sponsoring organization reduced its scope, longtime volunteer Bill Bartley founded the Bloomington Normal VITA Foundation…" |

## Volunteer (`volunteers.html`)

| Section | Old | New |
|---|---|---|
| Intro | "All of our volunteer tax preparers have been certified in tax law by the IRS…" | "Give back with your time and talents" plus the same facts |
| Roles | "greeters and intake coordinators, … tax preparers, … quality reviewers" | Three role cards with one-line descriptions |
| Training | Same dates; "Heartland Community College in TBD" | Same dates; "Heartland Community College (room to be announced)" |
| Old commented-out text | 2020/2022-season leftovers and the TaxSlayer practice link | Removed |
| Online training | Only inside commented-out text | "Online training is also available all year at apps.irs.gov/app/vita." |

## Donate (`donate.html`): new page

Uses the PayPal button (`3FUJ5QK6CPMEL`) that was commented out in the old footer, and links the existing memorial PayPal button. It makes no claims about tax deductibility.

## In Memoriam (`bill_bartley.html`)

| Section | Old | New |
|---|---|---|
| Tribute | Two paragraphs | Rewritten as an intro, a timeline (2002, 2005, 2011, 2020 at age 82, 2023) and a closing. Every fact is kept. |
| Memorial service | "A memorial service will be held at 11 a.m. Oct. 12 at St. John's Lutheran Church…" | **Removed** (past event). The obituary link and memorial PayPal link are kept. |
