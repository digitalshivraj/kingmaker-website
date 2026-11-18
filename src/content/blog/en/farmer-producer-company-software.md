---
title: "Software for a farmer producer company: members, purchases, payments"
description: "What farmer producer company software should handle: member and share records, produce purchase, payments on WhatsApp, input sales and board reports."
cover: farmer
date: 2027-01-03
tags: [Agriculture, Small business]
readingMinutes: 5
---

It is harvest season at a farmer producer company's collection centre in Latur district. Tractors wait outside, each weighbridge slip goes into a notebook, the day's rate went out on a WhatsApp group in the morning, and the accountant will type everything into Excel at night. The crop changes, onion in Nashik, banana in Jalgaon, but the scene does not.

After a few days the questions begin. A member calls a director to ask why his payment is ₹600 less than he calculated. The CEO cannot say how much tur was bought yesterday without phoning the centre. Nobody is hiding anything. The records are simply in five places.

## Member records and shares in one register

Everything in an FPC starts from the member. If the member list is one Excel file and the share details are another, every later step inherits the confusion.

A proper member record holds:

- Name in Marathi and English, mobile number and address
- Land and main crops, as far as the company needs them
- Bank details for payment, checked once at entry
- Shares held, amount paid, allotment date and certificate number
- Nominee details

**One member, one record** is the rule. The same ID follows the member into purchases, payments and input sales, so nobody is entered twice under two spellings.

An FPC is a registered company, so the register of members and share records also have a legal format. Confirm what must be kept with your CA or a legal advisor. The software should print that register from the same data, not from a second file.

## Buying produce: weight, grade and rate on one slip

Purchase is where disputes usually start, because weight, quality and rate are noted by different people at different moments. The system should tie them together at the gate.

1. The operator picks the member by name or mobile number.
2. Crop, variety and bags are entered, then gross and tare weight. Net weight is **calculated, not typed**.
3. Grade or moisture is recorded as per the rules the board has set for that crop.
4. The rate comes from the day's approved rate list. The operator cannot change it.
5. Deductions the board has approved, such as hamali or bags, are applied by the system.
6. A purchase slip shows the amount payable, and the member gets it on WhatsApp before leaving the centre.

If a correction is needed later, it is made by someone with the right to do so, and the old figure stays on record.

## Payments to members and statements on WhatsApp

Once every slip sits against a member, payment stops being a calculation exercise. The accountant sees what is payable, member by member, with advances and input dues adjusted as per the board's policy.

From that list the accountant prepares a payment batch for the bank and records the bank reference against each payment. Part payments and held payments stay visible, so nothing depends on memory.

The member should not have to call anyone. A Marathi message goes at each step: slip created, payment sent, balance pending. A member can also ask for a **statement on WhatsApp** and receive a PDF of every delivery, rate, deduction and payment for the season.

These messages should go through the official Meta Cloud API, not a personal number. Our [WhatsApp automation](/services/whatsapp-automation/) service sets this up in Marathi and English.

## Input sales to members

Many FPCs also sell seed, fertiliser and pesticide to members, often on credit until harvest. If the input shop runs on a separate bill book, the company never knows a member's true position.

In one system, each sale is billed against the member's record, stock reduces by batch, and the outstanding amount shows on the **member's ledger**. When that member brings produce, the accountant sees the dues and adjusts them as the board's policy allows. Our post on [tracking farmer credit and collections](/blog/agri-dealer-farmer-credit-tracking/) covers the basics.

Input sales raise licence, stock register and GST questions. Ask your CA and the agriculture department what applies to your company, and have the software print invoices and registers in that format.

Some FPCs also help members with [drip and sprinkler subsidy files](/blog/drip-sprinkler-subsidy-documents-maharashtra/). Our [Anudan Sarathi](/products/anudan-sarathi/), now in a live pilot with a sprinkler dealer under the PoCRA scheme, tracks such applications.

## Reports for the board and the auditor

A director should be able to open a phone before the board meeting and see the company's position without asking anyone to prepare a sheet.

- Purchases by crop, centre and date, with quantity and average rate
- Amount paid to members and amount still payable
- Input stock, sales and outstanding credit, member-wise
- Each member's business with the company for the season
- Share capital and the current member register

The auditor needs something different: every figure traceable to a slip, a bill or a bank reference, and a log of **who changed what**. Role-based access does this. The gate operator enters weights, the accountant handles payments, directors view reports, and no closed entry is edited without a trail.

Many accountants will keep the final books in Tally, which is fine. The system should hand over entries in a file Tally can import, as explained in our post on [Tally export without retyping payments](/blog/tally-export-small-business-payments/).

## Common questions

### Do members need to install an app?

No. Members receive purchase slips, payment messages and statements on WhatsApp, in Marathi. Only staff and directors log in to the system.

### Can we keep our accounts in Tally?

Yes. The system records daily operations and exports purchases, payments and sales for the accountant to import. Your CA finalises the books as before.

### Will it work at a collection centre with weak network?

Yes, if it is built for that from the start. Entries are saved on the device at the centre and uploaded when the connection returns. Show the vendor your weakest centre first, not your best one.

## Custom software from Kingmaker Enterprises for your FPC

Kingmaker Enterprises builds registers, dashboards and role-based portals as [custom software](/services/custom-software/), and an FPC system is that kind of work: one member record carrying shares, purchases, payments, input sales and reports. We build it in Marathi and English around your crops, centres and board rules, with data hosted in India. You see a working demo on a free link before any purchase order.

Tell us your crops and number of centres: [WhatsApp us on 99751 58770](https://wa.me/919975158770).
