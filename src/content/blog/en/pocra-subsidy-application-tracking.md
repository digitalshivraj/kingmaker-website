---
title: "Tracking PoCRA subsidy applications from camp to credit"
description: "How a PoCRA subsidy file moves from application to payment, where it gets stuck, and how one tracker gives every farmer's file a next action."
cover: farmer
date: 2026-11-19
tags: [Agriculture, Government, Anudan Sarathi]
readingMinutes: 5
---

A sprinkler dealer in Jalna holds a camp on a Sunday. By evening there is a stack of photocopies on the counter: land records, Aadhaar cards, bank passbooks, each clipped to a slip with a farmer's name and mobile number. Every one of those farmers goes home believing the subsidy is now in motion.

Some weeks later the phone starts ringing. "Saheb, when will the subsidy come?" The dealer opens a notebook, then an Excel sheet, then a WhatsApp chat with the staff member who ran the camp, and still cannot say where that one file stands.

## How a subsidy application moves, in general terms

Under the Nanaji Deshmukh Krishi Sanjivani Prakalp, known as PoCRA, and under most farm subsidy schemes, a file passes through roughly the same stages.

1. Registration and application. The farmer registers and applies for a component such as a sprinkler or drip set.
2. Document check. Officials check the application and the documents submitted with it.
3. Pre-sanction. The farmer receives approval to go ahead with the purchase.
4. Purchase and installation. The farmer buys from a dealer and the set is installed in the field.
5. Bill upload. The invoice and supporting papers are submitted.
6. Inspection. An official visits the field and verifies the work.
7. Payment. The approved subsidy is credited to the farmer's bank account.

The exact steps, documents and time limits depend on the component and the guidelines in force that season. **Confirm the current process with your taluka agriculture office** before you promise a farmer anything.

## Where files get stuck

In a typical shop, a file does not stop because someone refused it. It stops because the next step belongs to someone who does not know it is their turn.

- Missing documents. A land record is out of date, a name is spelt one way on the Aadhaar card and another way on the passbook, or a page was never scanned. The query sits until someone notices it.
- Pre-sanction. The approval arrives, but the farmer does not see the message, or does not realise that buying can now begin. Where the sanction carries a time limit, a quiet delay here can cost the farmer the whole application.
- Inspection. The set is installed, but nobody has told the shop when the visit will happen, and the farmer is away that day.
- Bill upload. The invoice is ready in the shop but has not been submitted, or it went in with a detail that does not match the application.

In each case **the file is waiting for one small action**, and no single person can see that.

## One tracker, one next action per file

The fix is not more registers. It is one record per farmer that answers three questions: which stage is this file at, what is the next action, and who has to do it.

A tracker built this way shows every file as a row with the farmer's name, village, component, current stage and pending step. "Passbook copy unclear, collect again." "Pre-sanction received, fix installation date." "Bill ready, upload it." When the step is done, the file moves to the next stage and a new action appears.

When a farmer calls, anyone in the shop can open that file and answer in one sentence. **The answer no longer lives in one person's head.**

## The dealer's view across farmers and villages

A dealer in Akola or Latur is rarely handling ten files. A busy season means files from many villages, collected at different camps by different staff, sitting at every stage at once.

So the owner needs a view above the single file:

- how many files are at each stage today
- which files have not moved since the last check
- which villages have installations pending, so one vehicle trip covers them all
- which bills are ready but not yet uploaded
- which staff member holds each pending action

This changes the morning routine. Instead of asking the team what is pending, the owner opens one screen and sees **the stuck files first**. For dealers who extend credit to farmers until the subsidy arrives, the same screen shows where that money is waiting.

## WhatsApp updates to the farmer at each stage

The typical call to the shop is one question: where is my file? A short WhatsApp message in Marathi at each stage answers it before the farmer asks.

The messages are plain. Application received. One document is needed, with its name. Pre-sanction has come, call the shop to fix the installation date. Inspection is due, please be at the field. Bill uploaded. File at the payment stage, check your bank account.

Two things matter here. First, messages should go from an official business number, not from a staff member's personal phone, so the history stays with the shop when staff change. We build this on the official Meta Cloud API, as described on our [WhatsApp automation](/services/whatsapp-automation/) page, and our post on [WhatsApp Business API versus tools](/blog/whatsapp-business-api-vs-tools/) explains the difference. Second, a message must say only what the dealer knows. **Never promise a payment date** that only the department can decide.

## Common questions

### Does a tracker replace the government portal?

No. The application, the sanction and the payment stay with the department and its portal. The tracker is the dealer's own working record of where each file stands and what is pending.

### Does it work for schemes other than PoCRA?

Today it runs as a live pilot under the PoCRA scheme only. Many subsidy schemes follow similar stages of documents, sanction, installation, bill, inspection and payment. Tell us which scheme you handle and we will say plainly whether it fits.

### Can I see it before I pay anything?

Yes. We show a working demo on a free link before any purchase order, in Marathi and English.

## Anudan Sarathi: subsidy tracking built for dealers

[Anudan Sarathi](/products/anudan-sarathi/) is what Kingmaker Enterprises built for this exact problem: every farmer's file in one tracker with its stage and next action, a dealer view across farmers and villages, and WhatsApp updates to the farmer as the file moves. It is in a live pilot with a sprinkler dealer under the PoCRA scheme. Data is hosted in India.

If you handle subsidy files for farmers, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
