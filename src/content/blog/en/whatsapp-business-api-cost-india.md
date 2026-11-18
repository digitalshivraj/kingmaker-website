---
title: "WhatsApp Business API cost in India: how pricing works"
description: "How Meta bills WhatsApp Business API messages in India, what a provider adds on top, and how to estimate and reduce your monthly bill."
cover: whatsapp
date: 2026-11-21
tags: [WhatsApp, Pricing]
readingMinutes: 5
---

A clinic owner in Latur asks two vendors to quote for appointment reminders on WhatsApp. One quotes a flat monthly fee. The other quotes a smaller fee and adds a line: "Meta charges extra, at actuals." Neither can say what a busy month will cost.

That gap is the real problem. A WhatsApp Business API bill has two layers, Meta's charge and the provider's charge, and most quotes explain only one. Once you know both, you can read any quote and estimate a month.

## How Meta charges: by message, category and country

Billing on Meta's side counts individual messages, not chats and not months. You will see four labels on every rate card and invoice: marketing, utility, authentication and service.

- Marketing: a Diwali offer from a tractor dealer in Jalgaon belongs here, along with anything else that promotes or sells.
- Utility: a clinic's appointment reminder or a shop's payment receipt qualifies, because it follows something the customer already did.
- Authentication: login codes and OTPs make up this group.
- Service: your typed reply to a person who wrote to you first is a service message.

Two things decide the price of a template: **the country of the recipient's number and the category it falls under**. A shop in Nashik messaging customers across Maharashtra pays the India rate. Expect promotions to be the costliest thing you send, in India as in every other market.

We are not printing rupee figures here. Rate cards move, and the only number worth budgeting on is the one shown for India on [Meta's official pricing page](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing).

## What is free, and what changed in October 2026

Nothing is billed when a customer writes to you.

Typed replies inside the customer service window, the period after a customer's last message, used to cost nothing, however many you sent. Provider notices describe a new arrangement from 1 October 2026: a monthly free allowance of service replies tied to each phone number, with billing once it is used up.

The same notices record the end of a second exemption, the one that let utility templates go out free inside an open window. Promotional and OTP templates never had that relief.

One free route remains for chats that begin from an ad. A Click to WhatsApp ad or a page button is the usual starting point for what Meta calls the free entry point window, and all four categories go unbilled for as long as it stays open. A prompt reply from your side is the condition for opening it.

So **replies are no longer unlimited and free**. Confirm the allowance and the window lengths on Meta's page before you budget.

## What a provider or developer adds on top

Meta's charge is the first layer. Indian pricing guides split the rest of the invoice the same way: a provider markup, platform fees and GST. In a typical quote you will find:

- Platform subscription: a monthly fee for the shared inbox, bot builder and reports.
- Per-message markup: some providers add a margin on every message, others pass Meta's rate through unchanged.
- Build cost: a one-time charge for designing flows, writing Marathi and English templates, and connecting the bot to your billing or appointment software.
- Hosting and upkeep: a bot on its own server needs [hosting and maintenance](/services/hosting-maintenance/).
- GST: ask whether the quoted figures include it, and confirm the treatment with your CA.

Also ask **whose name the WhatsApp Business account and number are registered in**. They should be in yours. Our post on [the official API and unofficial bulk tools](/blog/whatsapp-business-api-vs-tools/) explains why that matters.

## How to estimate your monthly bill

Start with one normal month.

1. List every kind of message your office sends and place each under one of the four categories.
2. Count the templates in each category. Delivery is the trigger for billing, going by provider guides, so use delivered counts where you have them.
3. Estimate your service replies and compare the number with the free allowance on Meta's page. Only the excess is billable.
4. Set aside chats that came from ads and were answered inside the free entry point window.
5. Multiply each billable count by the India rate for its category.
6. Add the provider's subscription, any markup, hosting and GST.

Repeat the sum for **your peak month**. A clinic has its monsoon rush, a saree shop in Kolhapur its Diwali season. A clinic running [OPD tokens on WhatsApp](/blog/opd-tokens-on-whatsapp/), the model behind our [Devdoot Care](/products/devdoot/), will typically find its volume is mostly utility and service.

## Ways to keep the bill down

- Keep reminders clean. An offer added to the end of an appointment reminder can push the whole template into the marketing category.
- **Let the customer start.** Put a QR code at the counter and a chat link on your website. Their message is free and your answer is a service reply.
- Say it in one reply. A bot that sends five short messages uses the allowance five times as fast as one complete answer.
- Send promotions only to people who asked for them. A smaller, consented list costs less, and our post on [the DPDP Act in plain language](/blog/dpdp-act-government-software/) explains the consent idea. Confirm your own obligations with a legal advisor.
- Answer ad leads promptly, so that the chat falls inside the free entry point window.

## Common questions

### Does Meta charge when a customer messages us first?

No, you pay nothing for a message the customer sends. Your typed answer is a service reply, which draws on the monthly free allowance and is billed only beyond it.

### What is the per-message rate in India right now?

The current rate is whatever Meta's official pricing page shows today for India against your message category. We do not print it because Meta revises the card.

### Do we pay for templates that are not delivered?

No, going by provider guides, an undelivered template does not reach your bill. Match the provider's delivery report against the invoice to confirm.

## WhatsApp automation by Kingmaker Enterprises, on the official Meta Cloud API

Kingmaker Enterprises builds Marathi and English WhatsApp bots on the official Meta Cloud API, so what you pay Meta follows the published rate card. Send us your monthly message list and we will sort it into Meta's categories with you. You see a working demo on a free link before any purchase order. The details are on our [WhatsApp automation](/services/whatsapp-automation/) page.

To talk it through, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
