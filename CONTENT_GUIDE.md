# Adding content to kingmakerenterprises.in

The site is a static Astro build. Every push to `main` rebuilds and publishes it through GitHub Actions. No server, no database, no cost.

## Add a blog post

Create one markdown file in `src/content/blog/en/` (English) or `src/content/blog/mr/` (Marathi). The file name becomes the URL: `src/content/blog/en/my-post.md` is published at `/blog/my-post/`, and `src/content/blog/mr/my-post.md` at `/mr/blog/my-post/`. Use the same file name in both folders when a post exists in both languages; the language switch in the header then links the two versions. A post that exists only in English is listed on the Marathi blog page under "इंग्रजीत".

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
- English posts stay fully English and Marathi posts fully Marathi. Write a quote or a sample message in the language of the page; the other version carries it in its own language.
- Never state how long setup or delivery takes. Describe the steps instead.
- Name places at city or district level only.
- Every post ends by saying what Kingmaker built for this problem, in one or two sentences, and invites a WhatsApp message.
- 700 to 1,200 words is the normal length. Set `readingMinutes` to words divided by 200.
- Tags already in use: Police, Government, Maha-Stay 360, Political offices, Citizen services, JanSeva, Healthcare, Hospitals, Pricing, WhatsApp, Automation, Small business, Data protection, Compliance, SEO, AI search, Websites. Reuse these before inventing new ones.

## Add a service or product page

Services live in `src/content/services/en/` and `src/content/services/mr/`, products in `src/content/products/en/` and `src/content/products/mr/`. Every service and product must exist in both folders with the same file name (the Marathi file has the Marathi `title` and the English name in `marathi`; the English file is the reverse). Copy an existing file, change the frontmatter and body. The `order` field controls position in lists. For products, `mock` must be one of: lodge, citizen, booth, subsidy, idcard, opd, queue, logistics (it picks the illustrated screen).

## Add a project to the portfolio list

Edit `src/data/portfolio.ts` and add an object to the `projects` array. `sector` must be one of the listed sectors. If the project has a full product page, set `product` to that page's file name without `.md`.

## Change contact details, registrations or address

Edit `src/data/site.ts`. Every page reads from it.

## Scheduling posts

A post dated in the future is hidden on the live site until that date. The deploy workflow rebuilds the site every morning at 06:05 IST, so a post goes live on its date with no manual step. To schedule a post, give it a future `date`.

Vercel preview builds of other branches show scheduled posts too, so a batch can be read on its preview link before it is merged into `main`.

The 24 planned titles from this list were written in November 2026 and scheduled Monday, Wednesday and Friday.

## Local preview

```
npm install
npm run dev
```

Opens the site at `http://localhost:4321`. `npm run build` writes the finished site to `dist/`.


## Interface text (buttons, headings, FAQ, footer)

All fixed text on the site is in `src/i18n/ui.ts`, once in English (`en`) and once in Marathi (`mr`). Edit both when changing a label. Project list and sector names are in `src/data/portfolio.ts` (`summary` and `summaryMr`).
