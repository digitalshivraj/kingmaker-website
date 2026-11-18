---
title: "Bulk certificates from a spreadsheet, with a QR check"
description: "Generate every certificate from one spreadsheet, add a unique number and QR verification page, and send each one by WhatsApp or email."
cover: typing
date: 2027-01-12
tags: [Education, Automation]
readingMinutes: 5
---

A training institute in Nashik finishes a batch of a few hundred students. The certificate function is on Saturday. The computer operator opens the template, types a name, saves the PDF, goes back and types the next name. By evening the names are blurring together, and on stage one student will be handed a certificate with someone else's surname.

Six months later an employer in Pune calls the institute to ask whether a certificate is real. Nobody can answer without finding the right register in the right cupboard.

## Why typing names one by one goes wrong

The problem is not the operator. It is the method. Every name is typed twice: once into the admission record or attendance sheet, and again into the template. Each retyping is a fresh chance for an error.

Typical things that go wrong:

- A spelling changes between the sheet and the certificate, especially with Marathi names written in English.
- One row is skipped, or one person gets two certificates.
- The course name or date from the previous certificate stays on the next one.
- Nobody records which certificate went to whom, so there is nothing to check against later.

Schools, event organisers and associations face the same thing: a sports meet in Kolhapur, a workshop in Amravati, membership certificates for a traders' association in Solapur.

## Generating every certificate from one sheet

The fix is to type each name once, in a spreadsheet, and let the system place it on the design. **One row in the sheet becomes one certificate.**

The steps, in order:

1. Fix the design. Your template stays as it is, with marked positions for the name, course or event, date, grade and certificate number.
2. Prepare the sheet. Use one row per person and one column per field. If the certificate carries the name in Marathi and English, keep a column for each.
3. Upload and check. The system flags blank cells, duplicate rows and names too long for the line before anything is generated.
4. Preview a few. A person in your office looks at sample certificates and approves the batch.
5. Generate. Every person gets a separate PDF, and the printer gets one print pack in the right order.

The output is only as good as the sheet. The habits we describe for [collecting student data and photos for school ID cards](/blog/school-id-card-data-collection/) apply here too: let people confirm their own spelling before the sheet is locked. Our [Parichay](/products/parichay/) platform works this way for student ID cards. It is live, used for PM SHRI schools across 20 districts of Bihar.

## A unique number and a QR code on every certificate

During generation each certificate gets a number that is never reused, and a QR code printed in a corner. The QR code holds a link. Scanning it with a phone camera opens a **verification page** on your own website.

That page shows what your record says: the name, the course or event, the date of issue, and whether the certificate is valid, corrected or cancelled. An employer or a college admission clerk compares the page with the paper in hand. If someone has edited the name on a copy, the page still shows the original.

Keep the page minimal. It should not show a phone number, address or date of birth. Certificates carry personal data, so read our [plain-language guide to the DPDP Act](/blog/dpdp-act-government-software/) and confirm with a legal advisor what your organisation may display publicly.

## Sending each certificate by WhatsApp or email

Add two more columns to the sheet: mobile number and email. Each person then receives their own PDF, sent to them alone, instead of a folder dropped in a group where everyone scrolls for their name.

For WhatsApp, send through the official Meta Cloud API, not a personal number with a broadcast list, which can get the number blocked. Our post on [doing WhatsApp the official way](/blog/whatsapp-business-api-vs-tools/) explains the difference, and our [WhatsApp automation](/services/whatsapp-automation/) service handles it in Marathi and English.

The office sees a status against every row: sent, delivered or failed. A wrong number shows up as a failed row, so staff follow up with those few people instead of answering "did you send mine?" calls from everyone. Email works as the fallback, and the print pack still serves the function on stage.

## Correcting one certificate without redoing the batch

Mistakes will still happen. A student points out that her father's name is misspelt. With the manual method this means finding the file, retyping it and hoping the old copy is not in circulation.

With a sheet-based system, the operator corrects that one row and regenerates that one certificate. The certificate number stays the same, the verification page shows the corrected details, and the new PDF goes to that person again. The rest of the batch is untouched.

Two things should be recorded each time: who made the change and what the old value was. If a certificate has to be withdrawn entirely, it is marked cancelled, and the QR code shows that status to anyone who scans it.

## Common questions

### Can the certificates carry names in Marathi?

Yes. The name can be printed in Marathi, in English or in both, as long as the sheet has a column for each. The preview step is where your staff check that the Devanagari text sits correctly on the design.

### What if someone copies the QR code onto a fake certificate?

The copied code still opens the original record, so the name on the verification page will not match the name on the fake. The check works only when the person verifying reads the page, so print a short "scan to verify" line next to the code.

### Can we still print certificates for the function?

Yes. The same batch produces individual PDFs for sending and a print pack for your printer, sorted in the order you choose, such as class, batch or roll number.

## Data and document systems from Kingmaker Enterprises

Kingmaker Enterprises builds [data and document systems](/services/data-document-systems/) for exactly this work: certificates, ID cards, bulk PDFs and print packs generated from one sheet, each with a unique number and a QR verification page. Delivery by WhatsApp and email, and single-certificate corrections with a change record, are part of the same system. It works in Marathi and English, the data is hosted in India, and you see a working demo on a free link before any purchase order.

Send us your template and a sample sheet: [WhatsApp us on 99751 58770](https://wa.me/919975158770)
