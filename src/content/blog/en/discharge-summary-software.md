---
title: "Discharge summaries patients understand, made from the IPD file"
description: "How a small hospital can build discharge summaries from the IPD record, with a Marathi medicine schedule, follow-up date, WhatsApp copy and print."
cover: doctorHall
date: 2027-01-14
tags: [Healthcare, Hospitals]
readingMinutes: 5
---

It is discharge day at a 25-bed hospital in Latur. The patient is dressed and ready, the son is standing at the billing counter, and the summary is not. The doctor is in OPD, the file is with the ward sister, and the operator is typing from handwriting he can only half read.

When the paper finally comes, it says "BD x 5 days" and "review SOS". At home that evening, the family opens the medicine bag and has to guess which tablet goes with which meal. This post is about closing that gap, using the record the hospital has already written during the stay.

## Where handwritten and retyped summaries go wrong

A discharge summary is usually written at the worst moment. The bed is needed, the family is in a hurry, and the doctor has a queue outside. So it gets written from memory, or retyped from the file by someone who was not in the ward.

The typical mistakes are familiar to anyone who has run a small hospital:

- A medicine stopped midway through the stay still appears in the discharge list, because it was copied from the admission sheet.
- A digit or a strength is misread from handwriting during retyping.
- A procedure done during the stay is left out, and the insurance desk asks for a corrected copy later.
- The summary is in English shorthand that the family cannot read.
- The follow-up date is told at the door and forgotten by the time they reach home.

None of this is carelessness. It is **the same information being written twice**, the second time under pressure.

## What the IPD record already holds

If admission, daily notes and medicine orders are entered in the IPD module as they happen, the summary is mostly written before discharge day arrives. The software only has to collect it.

A good system pulls these from the IPD record:

1. Patient details, admission and discharge dates, and the treating doctor, from the admission entry.
2. Diagnosis, from the doctor's notes, confirmed as final at discharge.
3. Procedures and operations, with dates, from the procedure entries.
4. Key lab results, from the lab module.
5. Medicines to continue at home, from the orders active on the last day, not the admission sheet.
6. Advice on diet, rest, wound care and warning signs, from templates the doctor has set for common conditions.

The doctor then reads the draft, corrects what needs correcting, and approves it. **Nothing goes to the patient without that approval.** The doctor's work shifts from writing to checking.

This works only if the ward enters things during the stay. If your admissions still live on paper, start with [a bed board the whole staff can see](/blog/ipd-bed-management-small-hospital/), and the notes follow from there.

## A medicine schedule the family can read in Marathi

Doctors write for other doctors, and that part of the summary should stay as it is, because the next doctor needs it. But the person who gives the medicines at home in Jalgaon or Solapur is often an elderly spouse or a daughter-in-law who has never seen the abbreviation "TDS".

So the summary should carry a second part: a **medicine schedule in plain Marathi**, laid out by time of day. One line per medicine. In English, it reads like this:

- Morning, after breakfast: 1 tablet (for BP)
- Afternoon, after lunch: 1 tablet (antibiotic, 5 days)
- Night, before sleep: 1 tablet (for acidity)

The software builds this from the same medicine orders. The doctor picks the frequency once, and the system prints it in words the family uses, with the number of days and what the medicine is for. Nobody translates by hand at the counter.

## The follow-up date, written where nobody misses it

"Come after eight days" is not a date. The summary should print the follow-up as a day and a date, with the doctor's name, the OPD timing and what to bring: this summary, the medicine strips and any pending report.

Add a short line of warning signs in Marathi with the hospital's phone number, so the family knows when not to wait for that date.

Once the date sits in the system and not only on paper, the hospital can send [follow-up reminders that bring patients back for their review](/blog/patient-follow-up-reminders/).

## Sending it on WhatsApp and printing it

The family should leave with **two copies**.

The printed copy, signed and stamped, goes into the file they carry to the next doctor and to the insurance desk. Insurers and TPAs have their own expectations for what a summary must contain, so confirm the format with them or with your legal advisor before you fix your template.

The WhatsApp copy is a PDF sent to the mobile number given at admission. It stays on the phone and can be forwarded to a son working in Pune who wants to know what the doctor said.

Send it from the hospital's official number, not from a staff member's personal phone, for the reasons covered in [the right and wrong way to send lab reports on WhatsApp](/blog/lab-reports-on-whatsapp/). If the hospital has no official number yet, our [WhatsApp automation service](/services/whatsapp-automation/) sets one up on the official Meta Cloud API.

## Common questions

### Does the doctor still have to write the discharge summary?

No, the doctor reviews and approves a draft that the system puts together from the IPD record. Diagnosis, procedures and medicines come from entries already made during the stay, and the doctor can edit any line before approving.

### Can the summary be in both English and Marathi?

Yes, and it should be. The clinical part stays in English for the next doctor, while the medicine schedule, advice and follow-up date are printed in plain Marathi for the family.

### Is it safe to send a discharge summary on WhatsApp?

Yes, when it goes from the hospital's official number to the number the patient gave at admission, with the patient's consent. A discharge summary is health data, so decide which staff can send and view it. Confirm your obligations under data protection law with a legal advisor.

## Hospital management system: discharge summaries from the IPD record

Kingmaker Enterprises has built a [hospital management system](/products/hospital-management-system/) for small hospitals: OPD, pharmacy, lab, billing, IPD and staff roles on one low-cost subscription. Because admission, notes and medicine orders sit in one IPD record, the discharge summary is drawn from that record for the doctor to approve, with a Marathi schedule for the family, a print for the file and a copy on WhatsApp. It is demo ready, and we are onboarding small hospitals and clinics. You can see it on a free demo link before any decision.

To see a sample discharge summary, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
