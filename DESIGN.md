# Kingmaker Enterprises website: design system

The site follows the structure of large consumer and industrial company sites (reference: pepsico.com, studied page by page in November 2026), in Kingmaker's own brand. Nothing is copied: no PepsiCo fonts, colours, words or images. What is borrowed is the grammar: poster-sized display type, full-bleed photography, colour-blocked sections, mega menus, carousels and a quiet editorial article template.

## Type

| Role | Font | Use |
|---|---|---|
| Display | Khand 700 (Latin and Devanagari) | Page titles, section statements, numbers. English is uppercase, line-height 0.92. Marathi is not uppercased and uses line-height 1.1. |
| UI and headings | Sora 600/700 (English), Mukta 700 (Marathi) | Navigation, buttons, card titles, article headlines (sentence case). |
| Body | Mukta 400/500 | All running text in both languages. |

Display sizes: hero up to 128px, page title up to 112px, section statement up to 88px, all fluid with clamp().

## Colour

Brand colours from the brand kit, used as full-width blocks:

- Navy #0F2747: header text, primary blocks, footer band
- Ink #0A1830: footer
- Royal #24477C: the blue "What's new" band and marquee
- Sky #7FB2E8: light pill buttons on dark, accents in display type
- Gold #C9952E and Gold light #E3C27A: one accent per screen, pill buttons on navy, the gold story panel
- Sand #F5F2EC: warm section and article background
- Paper #F3F6FA, Line #D6DDE8, Text #16233A, Muted #4A5A70

## Components

- Header: floating white bar inset from the edges, logo left, menu centre, contact, language and WhatsApp right. Services and Products open full-width mega menus with a navy intro panel on the left and grouped links on the right. On phones a full-screen menu with grouped sections.
- Page heads, three kinds: photo (full-bleed photo, giant title at the bottom), pattern (navy field of repeated outline words, giant title) and plain (centred title and intro on sand or white).
- Word marquee: rows of giant words in brand colours with rounded photo chips, moving sideways.
- Carousel: horizontal scroll-snap track with arrow buttons and dots, keyboard and swipe friendly, no library.
- Story panels: full-height split sections (photo and colour panel) that stack over each other on scroll, numbered 01, 02, 03.
- Cards: large rounded photo cards (radius 22px), category label above the title, lift on hover.
- Stat cards: big display numbers on sand cards.
- Pre-footer band: giant statement on royal blue with stacked pill links.
- Footer: ink, large white logo, link columns, registered business details (the full registered office address must stay, Meta verification checks it).
- Article: sand head, breadcrumb, sentence-case headline, lead, date and reading time, share buttons, wide rounded cover, narrow reading column, related articles carousel.

## Rules that do not change

- Every page in English and Marathi; each version reads purely in its own language.
- Real photographs on every page; no stock platform names anywhere.
- City-level locations only in marketing text; the registered office address appears only in the footer and the government vendor table.
- No em dashes, no delivery timelines.
- Motion respects prefers-reduced-motion; every carousel works without JavaScript as a scrollable row.
