---
title: "What a Nagar Parishad citizen app should do first"
description: "A Nagar Parishad citizen app should start with complaints, bill status and certificates, routed ward-wise with WhatsApp updates. Here is the order."
cover: town
date: 2026-12-02
tags: [Government, Citizen services, JanSeva]
readingMinutes: 5
---

A resident in a town in Solapur district photographs a choked drain outside her lane and sends it to her councillor on WhatsApp. The councillor forwards it to a group. The sanitary inspector may see it, or it may sink under the day's other messages. Nobody writes it down, nobody gives her a date, and she sends the same photo again the following week.

When the council finally decides to build a citizen app, the first proposal on the table usually lists everything: news, a photo gallery, tourist places, the president's message, a tender section. Citizens open that app once. This post is about what to build first so that they open it a second time.

## Start with what citizens already come to the office for

Stand at the inward counter of a Nagar Parishad in Jalgaon, Latur or Amravati district for a morning and you will typically hear the same three requests. A citizen app should handle these three before anything else.

- Complaints with a photo and location: the citizen picks a category such as drainage, water supply, street light, garbage or road, takes a photo, and the phone attaches the location. No long form, no typing an address.
- Property tax and water bill status: the citizen enters a property number or connection number and sees what is due and what has been paid. Showing the status alone removes a typical reason for visiting the counter.
- Certificates: a list of what the council issues, the documents needed for each, and the status of an application already made.

Some certificates are issued through state systems and carry their own rules. Confirm with the department which ones your council can offer through its own app before you promise them to citizens.

Of the three, **complaints come first**. They are the one service where the council controls the whole process, from receipt to closure.

## Route every complaint by ward and department

A complaint app without routing is only a new inbox. The complaint has to reach the one person who can act on it, with a date attached.

The order of work looks like this:

1. The category decides the department: drainage goes to sanitation, a dead street light goes to the electrical section, a leaking pipeline goes to water supply.
2. The location decides the ward, and the ward decides which staff member in that department receives it.
3. That staff member sees the complaint on their phone and sets a **follow-up date**. The citizen sees the same date.
4. If the date passes without an update, the complaint moves up to the head of department's list.
5. When the work is done, the staff member uploads a photo, and the citizen can confirm or reopen.

The councillor of the ward sees every complaint from that ward without forwarding anything. MLA offices face the same problem, and we have written about [grievances getting lost in MLA office WhatsApp groups](/blog/mla-office-grievance-system/).

## Send updates on WhatsApp instead of forcing a download

Most citizens will not install an app to report one broken street light. An app that is used twice a year is the first one to be deleted.

So the app should be **one door, not the only door**. A citizen should be able to file the same complaint from a web link or a WhatsApp message, and every update should arrive on WhatsApp in Marathi: complaint received, which department has it, the follow-up date, work done.

This should run on the official WhatsApp Business API, not on a staff member's personal number, so the record stays with the council when staff are transferred. Our [WhatsApp automation](/services/whatsapp-automation/) page explains how that works.

## Give the chief officer a pending list by department and ward

The chief officer does not need charts. The chief officer needs to know, before a review meeting, where work is stuck.

Two views are enough to begin with:

- Pending by department: how many complaints are open with sanitation, water supply, electrical and works, and how many have crossed their follow-up date.
- Pending by ward: which wards have the most open complaints, and which categories keep repeating there.

The president and councillors should see the figures for their own wards too. When the same numbers are on the table in a general body meeting, the discussion moves from who forwarded what to which work is pending and why.

## What to leave for later

Everything on this list is useful. None of it should hold up the first release.

- Online payment of property tax and water bills. This needs a payment gateway, reconciliation with the accounts section and clear rules on receipts. Confirm the process with your accounts department and CA before adding it.
- Building permissions and trade licences. These have their own procedures and are often tied to state systems.
- News, photo galleries and event pages. A website does this better.
- Citizen polls, chat assistants and tourism sections.

The test for each feature is simple: is the back office ready to answer it? If a citizen applies and nobody inside the council is assigned to respond, the feature damages trust in the whole app.

## Common questions

### Do citizens have to download an app to file a complaint?

No, and they should not have to. A well-planned system also accepts complaints from a web link and WhatsApp, and sends every update on WhatsApp. The app is for citizens who use council services often.

### Can the app show property tax and water bill dues?

Yes, if the council's existing tax and billing records can be shared with the app. Start by showing status only. Add online payment later, once the accounts section has agreed how receipts and reconciliation will work.

### Can a Nagar Parishad procure this through GeM?

Yes. Kingmaker Enterprises can be procured through the Government e-Marketplace (GeM) or a departmental work order. Check with your accounts department which route suits your council.

## JanSeva: the citizen app and office dashboard for a Nagar Parishad

JanSeva is our citizen app and office dashboard, demo ready, built for MLA offices and a Nagar Parishad variant. The Nagar Parishad variant follows the order in this post: complaints first, routed by ward and department, with a pending list for the chief officer. It works in Marathi and English, with data hosted in India. You can see a working demo of [JanSeva](/products/janseva/) on a free link before any purchase order.

To see it with your own wards and departments, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
