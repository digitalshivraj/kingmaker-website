---
title: "Doctor appointment booking app: what a clinic should look for"
description: "What a doctor or clinic owner should check in an appointment booking app, from no-install booking and WhatsApp tokens to data ownership and fees."
cover: phoneWoman
date: 2026-11-24
tags: [Healthcare, Devdoot Care]
readingMinutes: 5
---

It is 10 am at a children's clinic in Latur. The waiting room is full, the bench outside is full, and the receptionist is answering the phone with one hand and writing names in a register with the other. Most callers ask the same thing: "Which number is going on now?"

Most doctors who look for a booking app want to end this scene. The trouble is that some apps are built for a marketplace that lists doctors, not for the clinic's own front desk. Here are six things to check before you choose one.

## Booking without asking the patient to install an app

Think about who comes to your clinic: a farmer from outside town, a grandmother with a basic smartphone, a parent with a sick child. If booking needs a download, a sign-up and a password, many of them will simply call, and the receptionist is back on the phone.

Look for booking that works through something the patient already has: a WhatsApp chat or a link that opens in the phone's browser. The patient gives a name and a mobile number, picks a doctor and a slot, and is done. Marathi should be there from the first screen.

A simple test: **ask a family member who is not comfortable with phones to book an appointment**. If they finish without help, the app passes.

## Slots, leave days and daily limits the doctor controls

A doctor's timetable changes often: a surgery morning, a conference, a festival holiday, an emergency call. The app should let the doctor or the receptionist change the schedule from a phone, without calling the vendor.

Check that you can set:

- Morning and evening sessions, with different timings on different days.
- Leave days and holidays, so nobody books a day the clinic is closed.
- A daily limit on tokens for each session, so the list does not run past closing time.
- A stop on today's bookings when an emergency takes the doctor away.

Also ask what happens to patients already booked when the doctor takes sudden leave. They should get a message, not find a locked door.

## Tokens and queue updates on WhatsApp

Booking is half the job. The other half is the wait. A good system gives the patient a token number at the time of booking and sends a message when their turn is close, so they can wait at home instead of in a crowded room. We explain the full flow in our post on [OPD tokens on WhatsApp](/blog/opd-tokens-on-whatsapp/).

Ask the vendor how the messages are sent. They should go through the official WhatsApp Business platform, the way our [WhatsApp automation](/services/whatsapp-automation/) work does, and not from a personal number tied to an unofficial tool that WhatsApp can block.

On the clinic side, the receptionist should move the queue with one tap: next patient, skip, not present.

## Walk-ins and phone bookings in the same list

Not every patient will book online. In a typical clinic in Jalgaon or Solapur, many patients still walk in, and regulars call the receptionist as they always have.

If the app shows only online bookings, the receptionist runs two lists, the app and the paper register, and arguments start over whose turn it is.

Staff should be able to add a walk-in or a phone booking with a name and a number, and that patient should get the next token like anyone else. Look for **one list and one token sequence**, whatever the source of the booking.

## Who owns the patient list

Some booking apps are marketplaces. The patient searches for a doctor and the app shows your clinic next to others. In that model it is fair to ask whose patient it is. Ask the vendor in writing:

1. Can I export my patient list and appointment history to Excel whenever I want?
2. If I stop using the app, do I get my data, and is it removed from your servers?
3. Will you show my patients other doctors or send them promotions?
4. Where is the data stored, and who in your company can see it?

Patient names, mobile numbers and visit records are personal data, and India's data protection law places duties on whoever collects and stores them. Our [plain-language guide to the DPDP Act](/blog/dpdp-act-government-software/) is a useful starting point. Confirm your own obligations with a legal advisor.

## Fees: commission per booking or a flat subscription

With commission per booking, the clinic pays for every appointment, or the patient pays a convenience fee. It looks cheap at the start. But the cost grows with every patient, so a busy clinic pays the most, and a fee charged to the patient can push them back to calling the receptionist.

With a flat subscription, the clinic pays a fixed amount each month whatever the number of patients. Ask what the amount covers: how many doctors, how many staff logins, and whether WhatsApp messages are included. Business messages on WhatsApp carry their own charges, and our post on [how WhatsApp Business API pricing works](/blog/whatsapp-business-api-cost-india/) explains the structure.

Whichever model you are offered, **work out the cost on your own daily patient count**, not on the vendor's example. Ask about any one-time fee as well.

## Common questions

### Do patients need to download an app to book an appointment?

No, and a good booking system should not require it. Booking through WhatsApp or a browser link works on the smartphone the patient already owns.

### Can the receptionist still take bookings on the phone?

Yes, as long as the system lets staff add phone and walk-in patients to the same queue. If the app cannot do this, the clinic will end up keeping a paper register beside it.

### What if my clinic later needs pharmacy, lab and billing too?

Then you need hospital software, not only a booking app. We build a [hospital management system](/products/hospital-management-system/) for small hospitals that covers OPD, pharmacy, lab, billing and IPD on one subscription.

## Devdoot Care: book a doctor, get a token, wait at home

Devdoot Care is what Kingmaker Enterprises has built for this problem. The patient books a doctor, gets a token and waits at home, with queue updates on WhatsApp. It is in testing and we are onboarding our first doctors, so you can see it early and tell us what your clinic needs. Read more on the [Devdoot Care page](/products/devdoot/), and ask for a working demo on a free link.

To see the demo, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
