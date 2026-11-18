---
title: "DPDP Act and digital guest registers, what police must write down"
description: "Guest ID data is personal data. What an SP office should put in its written order on access, retention, deletion and search logs before a rollout."
cover: security
date: 2026-12-11
tags: [Police, Data protection, Compliance]
readingMinutes: 5
---

A lodge near the bus stand in Nanded photocopies every guest's ID card and staples the copy into a register. Now and then a constable comes to check the entries. Nobody has written down who may see those copies, or when they should be destroyed.

Now the district plans to move that register to software, visible to the police station as guests check in. The SP office gets faster information. It also becomes answerable for a large store of ID data, and the rules for that store should be on paper before the first lodge logs in.

## Guest ID data is personal data

A guest's name, mobile number, ID number, photograph and room dates identify a living person. Under the Digital Personal Data Protection Act 2023, that is personal data, and whoever decides why and how it is collected owes duties to the guest.

In general terms, the Act expects four things from anyone holding such data:

- Purpose: collect it for a stated, lawful reason and use it only for that reason.
- Limited access: only people who need it for that purpose should see it.
- Retention: do not keep it once the purpose is over, unless another law requires it.
- Security: reasonable safeguards against leaks and misuse.

The Act does not treat all processing by the State and by law enforcement the same way as commercial processing. How far those provisions cover a district guest register is a question for your legal cell, not for a software vendor.

Our working advice: **write the order as if every duty applies**. For the wider picture, read [what the DPDP Act means for government software](/blog/dpdp-act-government-software/).

## Who can see what

A digital register has three kinds of user, and the order should say what each one sees.

- Lodge front desk: enters guests and sees only its own lodge's entries. The owner decides which staff members get a login.
- Police station: sees the lodges in its own jurisdiction, through logins for the station in-charge and designated staff.
- SP office: sees the whole district, limited to officers and units the SP names in the order.

The weak point is usually **the shared password**. One login for a whole station means no one can say who searched for what. Give every officer a personal login, and close it when the officer is transferred.

## How long records are kept and how they are deleted

A paper register sits in a cupboard for years because nobody decided otherwise. A digital register should not copy that.

The order should state **one retention period and the rule it comes from**. That rule is the law or licence condition the lodge register is kept under in your district. We suggest no number here, because it must come from that rule. Ask your legal cell to confirm it.

Then write down how deletion works:

- The system deletes records when the period ends, not when someone remembers.
- A record linked to a registered case or active inquiry can be held longer, on a written hold from a named officer.
- Deletion covers ID images and backups, not only the visible entry.
- A deletion log shows how many records were removed and when, without the personal data itself.

## Audit logs of every police search

Picture a constable in Kolhapur whose acquaintance asks, as a favour, whether a certain person stayed at a certain lodge. On paper, that favour leaves no trace. In software, it should.

Every search by name, mobile number or ID number should be recorded: who searched, when, from which station, what was searched, and the case reference or reason. Users must not be able to edit or delete their own log.

A log that nobody reads protects no one. The order should name **a reviewing officer** at the SP office and say how often a sample of searches is checked. This protects guests, and it gives honest officers a clear reason to refuse such requests.

## What to put in the written order before a rollout

A standing order, circular or SOP should cover these points.

1. Purpose and legal basis: the law or licence condition the register is kept under, and the policing purposes the data may be used for.
2. Data fields: the exact list of what is collected from a guest.
3. Roles and access: the three levels, personal logins, and who approves and closes a login.
4. Retention and deletion: the period, its source and the hold procedure.
5. Search logs: a reason for every search, and the officer who reviews the log.
6. Notice to guests: a short front desk notice in Marathi and English saying what is collected and why.
7. Hosting and vendor duties: where the data is stored, how it is secured, and what happens to it if the contract ends.
8. Breach procedure: who is informed and in what sequence if data leaks.

Have the legal cell vet the draft, and share the final order with the district hotel association so lodge owners know their side of it. An outside check on access control and data protection is part of our [security and compliance work](/services/security-compliance/).

## Common questions

### Does the DPDP Act stop police from collecting guest ID data?

No, the Act sets conditions on how personal data is handled and does not ban collection for a lawful purpose. Which conditions apply to a police guest register is for your legal cell to confirm.

### Can a lodge keep its own copies of guest IDs after check-out?

It should keep only what the rule governing its register requires, and no longer than that rule says. Hotel associations should ask a legal advisor what members must keep and when it must be destroyed.

### Who should review the police search logs?

An officer senior to the people whose searches are being reviewed, named in the written order. Typically that is a designated officer at the SP office. The order should also say how often the review happens.

## Maha-Stay 360: a digital guest register for lodges and police

[Maha-Stay 360](/products/maha-stay-360/) is our digital guest register for lodges and hotels, visible to police in real time. It is demo ready, and pilot proposals have been submitted to district police. We work in Marathi and English, host data in India, and show a working demo on a free link before any purchase order. Bring your draft order to that demo and check it point by point: who sees what, how long records stay, and what the search log shows.

To see the demo, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
