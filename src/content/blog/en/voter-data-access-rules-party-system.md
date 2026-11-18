---
title: "Voter data and the ECI: access rules a party system must enforce"
description: "What voter data a party holds, who should see phone numbers, who can export, what to log, and when to delete campaign data after the election."
cover: security
date: 2026-12-09
tags: [Political offices, Elections, Data protection]
readingMinutes: 5
---

A week before polling, a campaign office in Solapur finds its booth-wise voter sheet, phone numbers included, sitting in a WhatsApp group that nobody in the office created. Nobody can say who exported it, when, or how many phones it has reached since.

This is a typical way voter data leaves a party. Nobody hacked anything. Someone had a spreadsheet and a forward button. A stricter warning to karyakartas will not fix it. A system that enforces a few access rules will.

## What voter data a party holds and where it comes from

Most party systems hold three layers.

- The electoral roll: name, relative's name, age, gender, house number, voter ID number, and the part and serial number that tie a voter to a booth. For a recognised party this layer costs nothing, in draft or in final form, as the [Election Commission's note on roll revision](https://www.eci.gov.in/Documents/Final-ER-FAQ.pdf) records.
- Contact details the party collected itself: phone numbers from membership drives, missed-call campaigns, event registrations and door visits. The roll does not give you phone numbers.
- Notes added by workers: who was met, what issue the family raised, who has shifted to Pune or Mumbai for work.

The second and third layers are where the risk sits. **Record the source of every phone number** at the time of entry. If a vendor cannot say where a ready phone list came from, do not load it. A number a citizen gave an MLA office for a water complaint was not given for campaign calls, so keep those two systems apart.

## Who sees phone numbers and who can export

Decide access by role, not by seniority or trust. A workable starting set:

1. Booth worker: sees only the voters of the assigned booth. Phone numbers stay masked, and calls go through a tap-to-call button. No export.
2. Ward or mandal in-charge: sees the booths under them, with counts and progress. No export.
3. Constituency manager: sees the full constituency and can request an export with a written reason.
4. Data administrator: one or two named people who approve export requests and manage logins.
5. Outside agency, such as a call centre or printer: a login to a limited list that expires on a set date, never a copy of the database.

**Export is a separate permission** from viewing. Most leaks start with a download, so keep that list of people very short. Every exported file should carry the name of the user who generated it, so a forwarded sheet can be traced back.

This also settles what happens when a worker leaves the campaign. A login can be disabled. A file cannot. This is the model we follow in [Sanghatan](/products/sanghatan/), our party organisation platform.

## Log every search and every export

A log answers the Solapur office's three questions: who, when and what. The system should record these, with no switch a user can turn off:

- every login, with the device used
- every search: who searched and for what
- every export: who asked, which filter, how many records, the reason and who approved
- every change to a role

Logs help only if someone reads them. Give the data administrator a short weekly review. The patterns are plain: a worker in Kolhapur searching names from a Nagpur constituency, or one login opening record after record late at night.

## What the Model Code of Conduct and data protection law expect

The Election Commission's own description of the [Model Code of Conduct](https://eci.gov.in/faqs/mcc/model-code-of-conduct-r15/) rests on the parties' consent to its norms. One general-conduct norm in [the code](https://old.eci.gov.in/mcc/) protects each person's peaceful home life, whatever that person's politics.

A system that lets any worker pull a phone list and call at any hour makes that norm hard to keep. Build in calling hours, a **do-not-contact flag** that every role must respect, and message templates approved by the party's legal cell. Ask the legal cell which current Commission instructions cover calls and bulk messages.

Two events trigger erasure under India's [Digital Personal Data Protection Act](https://indiacode.gov.in/server/api/core/bitstreams/52f9ecbb-b927-4ba6-ae6f-ca2fac50d4df/content): withdrawn consent, or a purpose that is over. A record that some other law tells you to keep is the exception. For a campaign, the purpose has a natural end: the election.

How each obligation applies to a political party, and to roll data that is already published, is a question for your legal advisor. Our earlier post on [what the DPDP Act means for government software](/blog/dpdp-act-government-software/) covers the basics.

## Deleting data after the election

Deletion fails when it is left for after the result, because by then nobody owns it. Fix the steps and their order before the campaign starts.

1. Write down which data is campaign data: collected phone numbers, worker notes, call lists and every export.
2. Fix a deletion date in advance, linked to the end of the election process, and name the person responsible.
3. On that date, expire agency logins and collect written confirmation that agencies have deleted their copies.
4. Delete the campaign data from the system and from backups, following the backup cycle.
5. Keep **a signed deletion record** along with the access logs, as your legal advisor directs.

## Common questions

### Should booth workers see voters' phone numbers?

Not in full. A booth worker needs to reach voters of one booth, and a masked number with a tap-to-call button does that job.

### Does data protection law apply to a party's voter database?

Assume it does for everything the party collected itself, such as phone numbers and notes. The exact position for political parties and for published roll data needs a legal advisor's opinion.

### What should we keep after the election?

Keep the access logs and the deletion record, not the phone lists. Membership data that people gave for party membership has its own purpose and should sit in a separate register.

## Sanghatan: election technology with these rules built in

Sanghatan is our party organisation and election campaign platform, from war room to booth. It is demo ready, with a pilot quoted for one Vidhan Sabha constituency. We design role-based access, masked phone numbers, export approval, logs and a deletion step into it, in Marathi and English, with data hosted in India. Read how we approach [election technology](/services/election-technology/), and ask for a working demo on a free link before any purchase order.

To see it with your own constituency structure, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
