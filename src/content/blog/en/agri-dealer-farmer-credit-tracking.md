---
title: "Agri input dealers: tracking farmer credit and collections"
description: "How a fertiliser, seed and pesticide dealer can record every credit sale, see season-wise dues, send polite WhatsApp reminders and share statements."
cover: farmerRoad
date: 2026-12-22
tags: [Agriculture, Small business]
readingMinutes: 5
---

It is the second week of June in Jalna or Yavatmal. The first good rain has come and the counter of the krushi seva kendra is three farmers deep. One of them takes cotton seed and a few bags of fertiliser, says he will pay when the crop is sold, and the dealer writes a line in the notebook between two phone calls.

By Diwali that line is one of hundreds, spread over two notebooks, the backs of a few bills and the memory of whoever was at the counter that day. Some of it will be collected. Some will be argued over. Some will simply be forgotten.

## Where the notebook loses money

Credit is how this trade runs. A dealer who refuses udhari in sowing season loses the farmer to the next shop. So the question is never whether to give credit. It is whether you can say, on any day, who owes how much and since when.

The notebook cannot answer that. The usual problems look like this:

- Two farmers with the same name from different villages, and nobody sure whose entry it is.
- A part payment noted on another page, or not noted at all.
- Entries in a staff member's handwriting that only that person can read.
- Last season's balance carried in someone's head.
- A total outstanding figure that exists only after an evening with a calculator.

Meanwhile your own payment to the distributor falls due on the distributor's terms. **Forgotten credit is your working capital** lying in someone else's field.

## Record every credit sale against the farmer's name and village

The fix starts at the counter. Every sale on credit goes into one farmer account at the moment of sale, from a phone or the shop computer, in Marathi or English.

Each farmer account holds:

1. Name, village and mobile number, entered once.
2. Every credit sale with date, items, amount and the staff member who entered it.
3. Every payment received, whether cash, UPI or bank transfer.
4. A running balance that updates by itself.

The village is not a small detail. Search a common surname and you may get a dozen farmers. **Name plus village gives you one account**, and it lets you group dues village by village later.

Staff roles keep the ledger honest. Counter staff can add a sale or a payment. Only the owner can edit an old entry or write off an amount.

This ledger sits beside your billing and does not replace it. If your CA works in Tally, a clean [Tally export of payments received](/blog/tally-export-small-business-payments/) saves retyping. For invoice and GST questions on credit sales, confirm the rules with your CA.

## See dues season by season and work from a collection list

Farm credit follows the crop, not the calendar month. So each sale is tagged to a season: kharif, rabi or summer. The dues screen then shows what is pending from this kharif, what is carried over from the last rabi, and what is older than that.

From there the system prepares a **collection list**: farmers grouped by village, with the amount and the age of each balance. When soyabean has been sold around Latur or cotton is moving in Akola, you open the list for one village and plan the visit. A payment collected in the field is marked on the phone, and the farmer gets a receipt on WhatsApp.

The same view helps before the next sowing. You can see who cleared the last two seasons and who is still carrying an old balance, before you decide how much credit to extend.

## Send polite WhatsApp reminders after harvest

The farmer is your neighbour and next season's customer. A reminder should read like a hisab note, not a notice. Something like:

"Namaskar. Your kharif account at our shop shows ₹12,500 pending. You can check the full statement on this link. Please visit when convenient."

Three things keep this respectful.

- Timing: reminders go after that crop's harvest, never in the middle of sowing. You choose the date.
- Approval: you see the list before anything is sent, and you can remove a farmer who has had a crop loss or a family difficulty.
- Channel: messages go through the official WhatsApp Business API, not bulk forwards from a personal number, which risk getting the number blocked.

We set this up as part of our [WhatsApp automation](/services/whatsapp-automation/) work. If you are unsure about the difference, read our note on [doing WhatsApp the official way](/blog/whatsapp-business-api-vs-tools/). Take the farmer's mobile number with permission when you open the account.

## A statement the farmer can open on a phone

Most disputes over udhari are two memories disagreeing. A statement ends that.

Each farmer gets a link to their own statement: every purchase, every payment and the balance, in Marathi. No app to install. For a farmer without a smartphone, the same statement prints at the counter.

When both sides look at the same page, the conversation moves from "how much" to "when".

Many input dealers also sell drip and sprinkler sets and follow subsidy files for their farmers. That is a different kind of tracking. [Anudan Sarathi](/products/anudan-sarathi/), our subsidy application tracker, is in a live pilot with a sprinkler dealer under the PoCRA scheme.

## Common questions

### Do farmers need to install an app to see their statement?

No. The statement opens as a link in the phone's browser, and reminders arrive on ordinary WhatsApp. A farmer without a smartphone can take a printed statement at the counter.

### Can the system add interest on overdue credit?

It can calculate interest on the terms you set and show it as a separate line. Whether and how a dealer may charge interest is a legal and accounting question, so confirm it with your CA or a legal advisor before switching it on.

### What do the WhatsApp reminders cost?

Messages sent through the official API are charged by Meta, and the amount depends on the type of message. Our guide on [how WhatsApp Business API pricing works](/blog/whatsapp-business-api-cost-india/) explains this. Because reminders go only to farmers with a pending balance, you are not paying to message your whole contact list.

## Custom software from Kingmaker Enterprises for dealer credit ledgers

We build registers, ledgers and role-based portals as [custom software](/services/custom-software/), shaped around how one business works. For an agri input dealer that means farmer accounts by name and village, season-wise dues, a collection list, reminders you approve, and a statement link, in Marathi and English. You see a working demo on a free link before any purchase order, and your data is hosted in India.

Tell us how you record udhari today and we will show you how it would look on screen: [WhatsApp us on 99751 58770](https://wa.me/919975158770).
