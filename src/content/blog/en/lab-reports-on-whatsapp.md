---
title: "The right and wrong way to send lab reports on WhatsApp"
description: "How a pathology lab should send reports on WhatsApp, with an official number, the registered patient number, a secure link, consent and a send record."
cover: nurses
date: 2026-12-14
tags: [Healthcare, WhatsApp, Data protection]
readingMinutes: 5
---

It is seven in the evening at a pathology lab in Nashik. The reports are signed, the counter is crowded, and a technician is sending PDFs from his own phone to numbers written on sample slips. One digit is read wrong. A stranger now has someone's thyroid report, and the patient is still waiting.

Patients want their reports on WhatsApp, and they are right to. It saves a second trip to the lab. The problem is not WhatsApp. It is how the report gets there.

## The wrong way: PDFs forwarded from personal phones

In most labs nobody designed this. A patient asked once, a staff member obliged, and it became the system.

- The report stays in the staff member's chats and phone gallery long after the patient has gone home.
- The number is typed by hand from a slip, so one wrong digit sends a health record to a stranger.
- When that staff member leaves the job, the chats, the patient numbers and the reports leave too.
- The patient gets a medical report from an unknown personal number and cannot tell if it is really from the lab.
- When a patient says the report never came, nobody can check. The owner has to take someone's word.

None of this is carelessness. **A personal phone became the lab's delivery system** and nobody decided that it should.

## The right way: one official number, one registered patient number

The fix has three parts: an official business number, the patient's own registered number, and a secure link instead of a loose file.

1. The lab gets one WhatsApp business number in its own name, running on the official WhatsApp Business API. Messages come from the lab, not from a person.
2. At registration, the counter staff enter the patient's mobile number and read it back. That number is saved against the patient, and the report goes **only to the registered patient number**.
3. When the pathologist approves the report, the system sends the message by itself. Nobody copies a file or picks a contact.
4. The message carries a secure link, not the result. The patient opens it, passes a simple check such as a one-time code, and sees the report. The link stops working after a set period.

Staff phones are out of the picture. If you are wondering whether the free WhatsApp Business app can do the same job, we have compared the options in [WhatsApp Business API versus tools](/blog/whatsapp-business-api-vs-tools/).

## Consent and patient data protection

A lab report is health information. India's data protection law expects you to hold personal data with the person's permission, for a stated purpose, with reasonable safeguards. The exact duties for a lab depend on the rules in force, so confirm them with your legal advisor.

In daily practice, everything starts with **the patient's recorded consent**:

- Ask at the counter: "Shall we send the report to this WhatsApp number?" Save the answer against the patient. Anyone who says no gets a printout.
- Send the report to the patient only. A referring doctor or a family member gets a copy only if the patient agreed.
- Keep results out of the chat text. The message says the report is ready, and the result sits behind the link. This matters most for sensitive tests.
- Limit who in the lab can see reports and patient numbers, by role.

## Reports that open on any phone, in a format the patient understands

The person opening the report may be on an old Android phone in Jalgaon district, on a weak network. A heavy scanned PDF will not load, and a table of abbreviations will not help.

- A light page or small PDF that opens in the phone's browser. No app to install.
- Patient name, test name and date at the top, in text large enough to read.
- Each result beside its reference range, with values outside the range clearly marked.
- A short message in Marathi or English, as the patient prefers, saying which report is ready and which number to call with questions.

The signed report stays the report. Leave the explaining to the doctor, and say so in one line: please show this report to your doctor.

## A record of what was sent and when

Every send should leave a line in a log: which report, to which number, at what time, who approved it, whether it was delivered and whether the link was opened.

That log settles the common argument at the counter. A patient in Solapur says the report never came. The receptionist looks it up, sees where it went, and resends it. A wrong number is corrected at the counter after checking who the patient is, and that correction is logged too.

If your lab sits inside a small hospital, our [hospital management system](/products/hospital-management-system/) covers the lab along with OPD, pharmacy, billing, IPD and staff roles. It is demo ready, and we are onboarding small hospitals and clinics.

## Common questions

### Do we need the patient's consent to send a report on WhatsApp?

Yes, work on the basis that you do. Ask at registration, save the answer against the patient, and give a printout to anyone who declines. For the exact legal requirement that applies to your lab, check with your legal advisor.

### What if the patient does not use WhatsApp or has changed their number?

The patient gets a printed report at the counter, as before. A change of number is made at the counter after staff confirm who they are speaking to, never on a request from an unknown chat.

### Can the referring doctor receive the report as well?

Yes, if the patient agreed to it at registration. The doctor's number is saved against the doctor in the system, and the log shows that a copy went there.

## WhatsApp automation for labs from Kingmaker Enterprises

Kingmaker Enterprises builds [WhatsApp automation](/services/whatsapp-automation/) in Marathi and English on the official Meta Cloud API. For a lab, that means one business number, reports released only to the registered patient number through a secure link, and a log of every send. Patient data is hosted in India, and you see a working demo on a free link before any purchase order.

Send us a sample of your report format and we will show you how it would reach a patient: [WhatsApp us on 99751 58770](https://wa.me/919975158770).
