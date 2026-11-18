---
title: "Patient data and the DPDP Act: what a clinic should change"
description: "Patient records are personal data under the DPDP Act, 2023. What a clinic should change at registration, in staff logins, on WhatsApp and in old files."
cover: security
date: 2027-01-05
tags: [Healthcare, Data protection, Compliance]
readingMinutes: 5
---

In a typical clinic in Jalgaon or Solapur, the lab technician photographs a report and posts it in the staff WhatsApp group. The receptionist forwards it to the patient from her own phone. A nurse who left last year is still in that group.

Nobody meant any harm. But each photo carries a patient's name, phone number and diagnosis, and the clinic no longer knows how many phones hold a copy. Under the Digital Personal Data Protection Act, 2023, that is the clinic's problem to fix.

## Patient records are personal data

The Act covers personal data in digital form, meaning anything that identifies a person. In a clinic that is the registration entry, the prescription, the lab report, the bill and the phone number on the token list. The Act calls the patient the Data Principal and the clinic the **Data Fiduciary**.

In general terms, the Act expects a clinic to:

- tell the patient what is collected and for what purpose
- take clear consent, and use the data only for that purpose
- protect the data with reasonable security safeguards
- let the patient ask to see, correct or erase their data
- report a data breach in the way the rules lay down
- erase data once the purpose is over, unless another law says to keep it

The Act and its rules take effect in stages as the government notifies them. Which duties apply to your clinic, and from when, is a question for a legal advisor. For the buyer's side, read our [plain-language guide to the DPDP Act for offices buying software](/blog/dpdp-act-government-software/).

## Consent and purpose at registration

Patient data enters the clinic at the registration desk, so start there. Many clinics collect an ID copy or a relative's number only because the old form had a box for it.

Change the desk routine in this order:

1. List every field on the registration form and write the reason next to it. Remove the fields that have no reason.
2. Put a short notice in Marathi and English on the form, at the desk and on the booking screen. It should say what you collect, why, and whom to contact with a complaint.
3. Record the consent: a signature on paper, or a tick with the date and time in the software.
4. Ask separately for anything beyond treatment, such as health camp messages. The patient should be able to say no and still be treated.

The working rule is **one purpose, one consent**. The Act also recognises some uses without fresh consent, and emergency treatment is the usual example. Ask your advisor which apply to you.

## Who on the staff can see what

In a paper clinic, whoever holds the cupboard key can read every file. Software often starts the same way, with one shared login for everyone.

The fix is **role-based access**: each person has their own login and sees only what the job needs.

- Receptionist: registration, appointments and bills, not clinical notes.
- Pharmacist: the current prescription, not the full history.
- Lab technician: the test order and the result they enter.
- Doctor: the full record of their own patients.
- Owner: everything, plus a log of who opened which record.

When a staff member leaves, switch off that login on their last working day. Staff roles set by the owner are part of our [hospital management system](/products/hospital-management-system/), which is demo ready and onboarding small hospitals and clinics.

## Reports on personal phones and WhatsApp groups

This is where a typical clinic leaks the most. A report posted in a staff group sits in every member's gallery and phone backup, and the clinic cannot take it back.

Four changes close most of the gap:

- Stop posting patient documents in any group.
- Send a report only to the number the patient gave at registration, from the [clinic's official number](/blog/whatsapp-business-api-vs-tools/), not a personal phone.
- Keep the report inside the clinic's system. **The phone should only view it**, not store it.
- Remove former staff from every group and delete old groups that hold patient photos.

Our post on the [right and wrong way to send lab reports on WhatsApp](/blog/lab-reports-on-whatsapp/) explains the sending routine step by step.

## How long to keep records and how to delete them

The DPDP Act says, in general, not to keep personal data longer than the purpose needs. Medical council regulations, tax law, insurance claims and medico-legal cases can each require a clinic to keep certain records for a minimum period.

Do not guess the periods. Ask your legal advisor and your CA, then write a one-page **retention schedule**: the type of record, how long it is kept, under which rule, and who approves deletion.

A record is deleted only when it is gone from the software, its backups, exported files on pen drives, the old billing computer and staff phones. Paper files should be shredded, not sold as scrap. Keep a deletion log with the date and the approver, and hold any record linked to a dispute or police case until your advisor clears it.

## Common questions

### Does the DPDP Act apply to a small clinic with one doctor?

In general, yes, if the clinic holds patient data in digital form, including on a phone or a billing computer. The Act lets the government relax some duties for certain classes of organisations, so ask a legal advisor which ones apply to you.

### Can a clinic still send reports to patients on WhatsApp?

Yes, as a working practice, provided the patient has agreed and the report goes only to the patient's own number. The risk lies in groups and personal phones, not in the app.

### Must we delete a record when a patient asks?

Not always. The Act gives a patient the right to ask for erasure, but in general a record that another law requires you to keep can be retained for that period. Note the request and take advice before deleting any clinical record.

## Security and compliance service from Kingmaker Enterprises

Our [security and compliance service](/services/security-compliance/) covers data protection, access control and security reviews. For a clinic, that means listing where patient data sits today, giving each staff member a role-based login and moving report sharing off personal phones. We are a software company and not a law firm, so your legal advisor should approve the notice and the retention periods.

To see how this would work in your clinic, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
