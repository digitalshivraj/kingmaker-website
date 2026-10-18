# Adding content to kingmakerenterprises.in

The site is a static Astro build. Every push to `main` rebuilds and publishes it through GitHub Actions. No server, no database, no cost.

## Add a blog post

Create one markdown file in `src/content/blog/`. The file name becomes the URL: `src/content/blog/my-post.md` is published at `/blog/my-post/`.

Use lowercase letters, digits and hyphens only in the file name.

```md
---
title: Plain, specific title under 70 characters
description: One or two sentences, under 160 characters. Shown on the blog list, in search results and in the page's meta description.
date: 2026-11-02
tags: [Healthcare, Hospitals]
readingMinutes: 5
---

Opening paragraph that states the problem in one or two sentences.

## Subheading in sentence case

Body text. Use ## for sections, bullet lists for lists, and bold for the one phrase per section that matters.
```

Rules the site already follows, so new posts match:

- Write for the reader who will act on it: an SP office, a hospital owner, a dealer, a party office, a business owner.
- Sentence case headings. No all-caps labels.
- No em dashes. Use a comma, a full stop or a colon.
- No middle dots between items. Write them as a sentence or a list.
- Marathi is welcome inside posts; the body font supports Devanagari.
- Every post ends by saying what Kingmaker built for this problem, in one or two sentences, and invites a WhatsApp message.
- 700 to 1,200 words is the normal length. Set `readingMinutes` to words divided by 200.
- Tags already in use: Police, Government, Maha-Stay 360, Political offices, Citizen services, JanSeva, Healthcare, Hospitals, Pricing, WhatsApp, Automation, Small business, Data protection, Compliance, SEO, AI search, Websites. Reuse these before inventing new ones.

## Add a service or product page

Services live in `src/content/services/`, products in `src/content/products/`. Copy an existing file, change the frontmatter and body. The `order` field controls position in lists. For products, `mock` must be one of: lodge, citizen, booth, subsidy, idcard, opd, queue, logistics (it picks the illustrated screen).

## Add a project to the portfolio list

Edit `src/data/portfolio.ts` and add an object to the `projects` array. `sector` must be one of the listed sectors. If the project has a full product page, set `product` to that page's file name without `.md`.

## Change contact details, registrations or address

Edit `src/data/site.ts`. Every page reads from it.

## 24 blog titles to write next

Government and police

1. How a district SP office can see every lodge guest tonight: a pilot plan
2. Rumour monitoring for district police: what AI can and cannot do with Marathi social media
3. What a Nagar Parishad citizen app should do in its first month
4. Five reports every Zilla Parishad department should get automatically
5. GeM for small IT vendors: how a department buys software without a tender
6. Digital guest registers and the DPDP Act: what police must write into the rules

Healthcare

7. OPD tokens on WhatsApp: how a clinic cuts waiting-room crowding in a week
8. Pharmacy stock and expiry: the module that pays for hospital software
9. Why a doctor should let patients book from a link instead of calling
10. Lab reports on WhatsApp: the right and wrong way to send them
11. Choosing hospital software: ten questions to ask any vendor

Political and elections

12. Booth committees on a dashboard: what a Vidhan Sabha head should see every morning
13. A karyakarta app that ground workers actually open: what we learned building one
14. Voter data and the Election Commission: the access rules a party system must enforce
15. Membership drives with UPI receipts: a digital party fund that stands up to audit

Agriculture, dealers and rural business

16. Subsidy files that never get stuck: tracking PoCRA applications from camp to credit
17. Running a village camp for scheme applications with a phone and a checklist
18. WhatsApp updates for farmers: what to send at each stage of a subsidy application

Business, logistics and finance

19. A franchise panel for packers and movers: what the head office needs to see
20. Tally export for small business owners: stop retyping payments for your CA
21. Collecting staff KYC documents on one WhatsApp link
22. What a prop firm or broker CRM needs that a generic CRM does not

Marketing and AI

23. Lead firewall: how to stop paying for leads that never answer the phone
24. Cutting AI costs: routing tasks across local, cheap and strong models

## Local preview

```
npm install
npm run dev
```

Opens the site at `http://localhost:4321`. `npm run build` writes the finished site to `dist/`.
