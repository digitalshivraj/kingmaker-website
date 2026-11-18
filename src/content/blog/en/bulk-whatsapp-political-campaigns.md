---
title: "Bulk WhatsApp for campaigns: what gets numbers banned"
description: "Why bulk WhatsApp from unofficial tools gets campaign numbers banned, and how to build an opt-in list that fits WhatsApp and Election Commission rules."
cover: whatsapp
date: 2026-12-19
tags: [Elections, WhatsApp, Compliance]
readingMinutes: 5
---

Picture the IT cell of a Vidhan Sabha campaign in Latur district, a few days before nominations. Someone loads a spreadsheet of phone numbers into a bulk sender bought from a reseller, fits a box of new SIM cards, and presses send. By the evening meeting, several of those numbers are banned. One of them is printed on every pamphlet.

The message was polite. The method was the problem. Here is what WhatsApp and the Election Commission look at, and how to build a list that lasts until polling week.

## Why unofficial bulk tools get numbers banned

An unofficial tool automates the ordinary WhatsApp or WhatsApp Business app through a browser extension, a modified app or a script. WhatsApp's terms do not allow bulk or automated messaging through the app, so the tool is the first violation.

The second is behaviour. A number that gets banned typically shows this pattern:

- It messages many people who never saved the number and never wrote to it.
- The same text and the same link go out again and again.
- Recipients tap Block or Report, and every report counts against the number.
- The SIM is new and has no ordinary chat history.

**The ban lands on the number, not on the tool.** The reseller keeps the fee. The campaign loses the number supporters had saved.

## What the official platform asks for

The WhatsApp Business Platform is the official route for sending at volume. Our post on [doing WhatsApp the official way](/blog/whatsapp-business-api-vs-tools/) compares it with unofficial tools, and our [WhatsApp automation service](/services/whatsapp-automation/) is built on it. In general terms, it rests on three checks.

1. Opt-in. Meta's opt-in guidance treats a phone number alone as not enough; a recorded yes to future messages from that sender has to sit beside it. Two things have to be plain on the sign-up form: that the person is subscribing to messages, and the name of whoever will send them.
2. Templates. Any conversation you start must use a message template that Meta has approved beforehand. Free-form replies are allowed only for a limited window after the person writes to you.
3. Eligibility. Meta decides who may use the platform, and its messaging policy has carried restrictions on political parties and campaigns. **Read the current policy before you budget**, and get your provider's answer in writing.

If the platform is closed to your use, the fallback is not a bulk tool. It is karyakartas messaging people who know them, and a channel or group that supporters choose to join.

## What the Election Commission expects

WhatsApp's rules are only half of compliance. Bulk SMS, voice messages and social media posts sit on the same pre-certification list as TV and radio spots, as this [Akashvani report of the Commission's order](https://www.newsonair.gov.in/ec-mandates-pre-certification-of-political-ads-on-electronic-and-digital-media) sets out. Which Media Certification and Monitoring Committee (MCMC) you approach depends on the sender: a candidate's file belongs with the district committee, a state-headquartered party's with the state-level one.

The silence period before polling catches bulk SMS and voice messages too, going by a warning the Commission issued ahead of a recent state election. Switch off every message scheduler before that period begins.

A safe working order for a campaign office:

1. Ask the district MCMC in writing whether your planned WhatsApp messages need certification, and keep the reply.
2. Record the cost of every paid send for the expenditure account.
3. Confirm the silence hours and expenditure rules with the Returning Officer or your legal advisor.

Orders change from one election to the next, so confirm the details with the district election office. The list itself has rules too, covered in our note on [voter data access rules a party system must enforce](/blog/voter-data-access-rules-party-system/).

## Building an opt-in list from supporters

A scraped list gets a number banned. A list of people who asked for messages gets read.

- Put a QR code at sabhas, at the party office and on pamphlets. It opens a chat with a pre-filled "join" message, so the supporter writes first.
- Run a missed-call number or a web form that names the sender and says updates will come on WhatsApp.
- Let karyakartas ask during door visits and record the yes in their app, with booth and date. See our post on [a karyakarta app that ground workers actually open](/blog/karyakarta-app-ground-workers/).
- Add "reply STOP to leave" to every message, and honour each request.

Store **who agreed, when and where**, and tag each contact by booth and language.

## Measuring replies, not just sends

A large sent count measures the tool, not the campaign. These four numbers say more:

- Delivered and read, booth by booth.
- Replies: how many people wrote back, and what they asked.
- Opt-outs and blocks after each message. A rise here is the early warning before a restriction.
- Actions: who confirmed attendance or reported a local issue.

A message about a water problem from a ward in Solapur should reach the booth in charge, not sit unread in a shared inbox. A platform such as [Sanghatan](/products/sanghatan/) places these counts beside the booth structure, so the constituency head can see **which booths are talking back**.

## Common questions

### Can we use a bulk sender if we message only our own members?

No. The tool breaks WhatsApp's terms whoever is on the list. Ask those members to opt in instead.

### Does a WhatsApp message need MCMC pre-certification?

Treat any paid, bulk campaign message as a political advertisement until the committee tells you otherwise. Bulk SMS, voice messages and social media already appear by name in the Commission's order, so ask your district MCMC in writing how it treats WhatsApp.

### What should we do if a number is already banned?

Stop sending from the other numbers first, because the same list and tool will get them banned too. You can request a review inside the app, but do not plan the campaign around getting the number back.

## Election technology from Kingmaker Enterprises: outreach built on consent

Our [election technology service](/services/election-technology/) covers war rooms, karyakarta apps, booth management and voter outreach, built to Election Commission and data protection rules. For this problem, that means consent recorded at the booth, messages sent only through routes the platform and the Commission allow, and replies shown beside sends for every booth. Sanghatan, our party organisation and election campaign platform, is demo ready, with a pilot quoted for one Vidhan Sabha constituency.

To see a working demo on a free link, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
