---
title: "Hosting software in India: what offices and hospitals should ask"
description: "Before you buy software, ask where the data sits, who can log in to the server, how backups are tested and how you leave. A plain checklist for buyers."
cover: developer
date: 2027-01-17
tags: [Hosting, Data protection]
readingMinutes: 5
---

Picture a 40-bed hospital in Solapur on a Monday morning. The OPD screen will not load, the queue at reception is growing, and the vendor's phone is switched off. Nobody in the building can say where the server is, who holds the password or when the last backup was taken.

The same thing can happen to a government office in Amravati or a dealer in Jalgaon. Buyers compare features and price, and the hosting questions get asked only after something breaks. Here are the questions to ask before you sign.

## Where the data physically sits

The cloud is not a place. Your records sit on a machine in a data centre in a particular city, rented from a particular company, under somebody's account. Ask the vendor to name all three.

For a government office or a hospital, the plain answer you want is a data centre in India, with the backup copies also in India. Some departments and sectors have their own rules on where citizen or patient data may be kept, so confirm what applies to you with your department or a legal advisor. Our post on [the DPDP Act in plain language for offices buying software](/blog/dpdp-act-government-software/) covers the general duties.

Then ask the question most buyers miss: **in whose name is the server account registered?** If it sits in one developer's personal account, your data depends on one person's email and payment. It should be in the vendor company's name or your organisation's name, and the work order should say which.

## Who has server access

Inside your office you already control who sees what. The same discipline must apply to the people who can log in to the server itself, because they can see everything.

Ask the vendor:

1. How many people can log in to the server and the database, and who are they?
2. Does each person have a separate login, or is one password shared across the team?
3. Is every login recorded, and can you see that record on request?
4. What happens to a person's access when they leave the vendor's company?
5. Does your organisation hold an owner-level login of its own?

A **short list of named people** is a good answer. "Our whole team has it" is not. If you want an outside check, a [security and access review](/services/security-compliance/) looks at exactly these points.

## Backups, restore tests and uptime

Every vendor says backups are taken. A backup that has never been restored is a hope, not a safeguard.

Ask how often backups run, where the copies are stored and how many days of copies are kept. The copies should sit away from the main server, so one failure cannot take both. Then ask for the date of the last **restore test** and what it showed. In a restore test, the vendor takes a backup, rebuilds the system on a separate machine and checks that the records open.

On uptime, ask for the commitment in writing, not a verbal "it never goes down". Ask how planned maintenance is announced and at which hours it is done. A hospital cannot lose the system during morning OPD, and an office cannot lose it on the last day of a scheme's application window.

Ask who you call when the system is down, and keep a paper token book or register ready for those hours.

## What happens if you change vendor

Vendors change. Prices rise, a company closes, or your needs outgrow the product. **The data is yours** and it must leave with you.

Before you sign, get these points in writing:

- A full export of your records in a format you can open, such as Excel or CSV, along with uploaded documents and reports.
- The domain name registered in your organisation's name.
- Clear terms on the source code: whether you own it or hold a licence to keep using it.
- Help with handover to the new vendor.
- Deletion of your data from the old vendor's servers after handover, confirmed in writing.

For some organisations the cleanest answer is their own server. Our franchise logistics platform [Mahima One](/products/mahima-one/) runs live on the client's own server, so the company holds both the machine and the data.

A government department can write these terms into the requirement itself, as our guide on [how a government department should write a software requirement](/blog/software-requirement-government-department/) shows. Hospital owners will find the same exit questions among the [ten questions to ask any hospital software vendor](/blog/hospital-software-questions-to-ask/).

## Security updates and monitoring

Software does not stay safe by itself. The operating system, the database and the code libraries under your application all receive security fixes, and somebody has to apply them.

Ask who applies security updates and on what schedule, and whether that work is included in the maintenance fee or billed separately.

Then ask about monitoring. When the server goes down or the disk fills up, **who gets the alert**: a person on duty, or nobody until you call? Finally, ask what the vendor will tell you, and how, if your data is ever exposed. You may have reporting duties of your own in that situation, so confirm them with a legal advisor.

## Common questions

### Does our data have to be hosted in India?

It depends on your department and the kind of data you hold, so confirm the rule with your department or a legal advisor. Hosting in India keeps the answer simple for most offices and hospitals.

### Should we buy our own server or use the vendor's hosting?

Either works if the account ownership, the access list and the backups are clear in writing. Your own server gives you control, but somebody must still maintain it. Vendor hosting is simpler, provided the exit terms are agreed first.

### What should we get in writing before signing?

Get five things: the data location, the list of people with server access, the backup and restore routine, the uptime commitment and the exit terms. A vendor who hosts carefully can answer all five on a single page.

## Hosting and maintenance by Kingmaker Enterprises

Kingmaker Enterprises hosts client data in India, and the team that builds your software also hosts and supports it. Our [hosting and maintenance service](/services/hosting-maintenance/) covers servers, backups and monthly maintenance, so there is one team to call when something needs attention. Put every question from this post to us and we will answer in writing, before any purchase order.

To discuss hosting for your office or hospital, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
