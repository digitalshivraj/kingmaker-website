---
title: "How a government department should write a software requirement"
description: "A plain guide for officers buying software. Build the requirement on users, reports, Marathi, phones, data rules and a working demo, not a brochure."
cover: government
date: 2027-01-15
tags: [Government]
readingMinutes: 5
---

A file reaches the table of a department head in a Zilla Parishad or Collector office, in Jalgaon, Solapur or Amravati. The note on it is one line: "Software required for monitoring of scheme works." Three vendors are called, three quotations arrive, and no two describe the same thing.

One quotes a website, one a mobile app, one a product it already sells. The department has no fair way to compare them, and the typical result is software that matches the quotation but not the office. The trouble started with that one-line note.

## Start from the problem and the people who will use it

Do not begin with "we need a portal". Begin with what goes wrong today. For example: taluka offices send progress figures on WhatsApp, a clerk retypes them into a spreadsheet, and the department head sees last month's position when a senior officer asks for today's.

Then name the people. A good requirement answers these questions in plain sentences:

1. Who enters the information, and where are they when they do it?
2. Who checks or approves it?
3. Who only views it, and how often?
4. What do citizens or beneficiaries see, if anything?
5. What happens on paper today that must still be possible, such as a signed print for the file?

**Write the problem before the solution.** A vendor who reads this knows the work, and the quotations start to look alike.

## List the reports officers need

Officers do not use software for its screens. They use it for the sheet they carry into a review meeting. So list every report by name, who receives it and how often.

- Daily position by taluka, for the department head
- Pending cases older than the department's own limit, for the section officer
- Monthly abstract in the format the divisional office or Mantralaya already asks for
- A drill-down from district total to the individual entry, for inspection

Attach the current formats, even if they are photographs of a register. If the software cannot produce the review-meeting sheet, staff will keep the old spreadsheet alive beside it. Our post on [reports a Zilla Parishad department should get automatically](/blog/zilla-parishad-automatic-reports/) shows what such a list looks like.

## Make Marathi, phones and weak networks written requirements

These three are usually assumed and rarely written. Then the software arrives in English, opens properly only on a desktop, and stops working in a taluka office when the network drops.

Write them as conditions:

- Every screen, report and message in Marathi and English, with Marathi typing and Marathi print.
- All field entry possible on an ordinary Android phone.
- Entries saved on the phone when there is no network, and sent when it returns.
- Photographs compressed before upload.

If a gram sevak or field supervisor cannot use it standing at a work site, it is not built for your department. This is how we approach [mobile apps for field staff](/services/mobile-apps/): cheap phones and weak networks first.

## Write down the data, hosting and access rules

State in one sentence that **the data belongs to the department**. Then write the rules that follow from it.

Hosting: servers located in India, with regular backups and a named person responsible. Access: role-based logins, so a taluka officer sees only that taluka, and every edit records who made it and when. Exit: a full export in a common format whenever the department asks, and at the end of the contract.

If the system holds citizens' personal details such as mobile numbers, identity documents or bank accounts, data protection law applies to the department as well as the vendor. Read [the DPDP Act in plain language for offices buying software](/blog/dpdp-act-government-software/), and confirm the exact obligations with your legal advisor. A vendor should be able to explain its [access control and security practice](/services/security-compliance/) without jargon.

## Describe the work, not one vendor's product

A common shortcut is to copy a feature list from a brochure into the requirement. It ties the department to one product, can invite objections from other vendors, and fills the document with features nobody asked for.

Describe tasks instead. "The taluka officer enters the measurement and uploads two photographs" is a requirement. "The system shall have the XYZ module" is an advertisement.

This keeps the file clean whichever purchase route applies. If you are considering GeM, our guide on [buying software through GeM](/blog/gem-portal-software-for-departments/) explains the basics. Confirm the route and limits for your office with your accounts section.

## Ask vendors for a working demo before deciding

A presentation shows what a vendor intends. **A working demo** shows what the vendor understood. Ask each vendor to put a small working version on a link, with your talukas, your designations and one of your reports in it. Then hand a phone to a clerk and a field officer, not only to the IT cell.

Check four things:

- Marathi appears correctly on screen and in print.
- An entry can be made on a phone.
- The report matches your format.
- Nothing is lost when the network is switched off and on again.

Write the demo into the requirement itself, so every vendor is judged on the same test.

## Common questions

### How long should a software requirement be?

A few pages are enough if they cover users, tasks, reports, language, data rules and the demo. Length matters less than whether an officer outside the section can read it and understand the work. Attach existing registers and report formats as annexures.

### Can the requirement name a specific product or brand?

It is safer to describe the work and let vendors propose how they will do it. Purchase rules on naming brands differ by route and department, so confirm with your accounts section or procurement officer before the file moves.

### Who should own the data and the source code?

The department should own the data in every case, with a full export available on request and at the end of the contract. Source code ownership depends on whether you are buying a custom build or subscribing to a product. Have the terms checked by your legal advisor.

## Government project work from Kingmaker Enterprises

Kingmaker Enterprises handles proposals, pilots and delivery for district administrations, police and public bodies. We start from the problem and the people who will use the system, work in Marathi and English, host data in India, and show a working demo on a free link before any purchase order. Procurement can go through GeM or a departmental work order. See how we take up [government projects](/services/government-projects/).

To discuss a requirement your department is drafting, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
