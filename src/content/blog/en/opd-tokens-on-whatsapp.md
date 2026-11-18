---
title: "OPD tokens on WhatsApp: how a clinic cuts waiting-room crowding"
description: "How a clinic gives OPD tokens by WhatsApp, sends live queue updates and keeps walk-ins in one line, so patients wait at home and not in a full hall."
cover: doctorHall
date: 2026-11-18
tags: [Healthcare, WhatsApp, Devdoot Care]
readingMinutes: 5
---

At a busy OPD clinic in Latur or Jalgaon, the doctor starts at ten but the hall is full before nine. Patients come early because the only way to hold a place is to write a name in the register and sit near it. A mother with a feverish child waits beside a man with a cough, and neither knows how long it will be.

The receptionist spends the morning answering one question: "How many before me?" The phone rings with the same question. By the time the doctor walks in, the crowd is already tired and the first argument about who came first is over.

## Why the morning crowd forms

The crowd is rarely about the number of patients. It is about not knowing. When a patient cannot tell whether their turn will come at half past ten or at one, the safe choice is to come early and stay.

A paper register makes this worse in a few ways:

- A place in the line is held only by being present, so nobody dares to leave.
- Patients from outside the city travel early to be safe, then sit through half the session.
- Sick and well people share one hall for far longer than the consultation needs.
- The receptionist becomes the queue display, with little attention left for fees, files and calls.

The fix is not a bigger hall. **Give each patient a number and tell them how the line is moving**, and most will choose to wait somewhere else.

## Booking by WhatsApp message or link

The patient already has WhatsApp, and that is enough.

1. The patient sends a message to the booking number, or taps the clinic's booking link. The link can sit on the clinic's Google listing, its visiting card and the board at the door.
2. They pick the doctor and the session, morning or evening.
3. They give the patient's name, which may be a parent or a child and not the phone's owner.
4. A token number comes back on WhatsApp, in Marathi or English.

The place in the line is now held by the token, not by sitting on a bench.

These messages should go out through [the official WhatsApp route](/blog/whatsapp-business-api-vs-tools/), not from a personal number on the reception phone that one staff member controls. That is how we build [WhatsApp automation](/services/whatsapp-automation/): on the official Meta Cloud API, in Marathi and English.

## Live queue updates bring patients in when their turn is close

As the doctor finishes each consultation, the queue moves and the waiting patients are told. Someone holding token 23 can see that the clinic is on token 9. They stay at home, finish the morning at the shop, or let the child sleep.

When only a few tokens remain before theirs, a message asks them to start for the clinic. The clinic decides how early that message goes. A patient crossing Nagpur in traffic needs more notice than one who lives in the next lane.

One honest limit: the update shows position, not a promised time. One consultation is short and the next is long, and no system can predict that. What the patient gets is **a moving number they can plan around**, which is far more than the register ever gave them.

The hall now holds the people who are about to be seen, and the reception phone goes quiet.

## Walk-in patients still get tokens from the reception

Not every patient will book from a phone. An elderly patient may not use WhatsApp. A regular patient may simply walk in as they always have.

None of them is turned away. The receptionist types the name and gives the next token in the same queue. There is **one line, not two**, so a walk-in is never pushed behind every online booking, and an online booking is never jumped at the counter.

If the walk-in patient has WhatsApp, the same updates can reach them and they can step out for tea. If not, they wait in the hall as before, but in a hall that is less full. Emergencies remain the doctor's call. A token system should never stop a doctor from seeing a serious case first.

## What the doctor sees

The doctor's screen is short, because nobody reads a dashboard between two patients.

- Today's list: every token in order, booked and walk-in together, with who is next and how many are waiting.
- No-shows: patients who booked and did not come. The reception can call them, and the doctor can see whether one session loses more patients than another.
- Follow-ups: patients who were asked to come back and are due. A diabetic patient told to return with reports should not depend on memory, theirs or the clinic's.

A clinic that also runs a pharmacy, a lab or a few beds may want billing and records on the same system. For that, see our [hospital management system](/products/hospital-management-system/), built for small hospitals.

## Common questions

### Does the patient need to install an app?

No. The patient books with a WhatsApp message or by opening a link, and the token and queue updates arrive on WhatsApp. Anyone who can read a message can use it.

### What happens when a patient misses their turn?

The token is marked as a no-show and the queue moves to the next patient. If the patient arrives late, the clinic applies its own rule, for example fitting them in after the next few tokens. Decide that rule once and put it on the board, so the reception does not have to argue it each time.

### Is patient information safe on WhatsApp?

Yes, as long as the messages carry only a token number and the queue position, never the complaint or the diagnosis. Kingmaker Enterprises hosts client data in India. For what data protection rules ask of your clinic, confirm with a legal advisor.

## Devdoot Care: tokens and queue updates for OPD clinics

Devdoot Care is what Kingmaker Enterprises built for this exact morning: the patient books a doctor, gets a token and waits at home, with queue updates on WhatsApp. It is in testing, and we are onboarding the first doctors. If you run an OPD clinic, we will show you a working demo on a free link before you decide anything. Read more on the [Devdoot Care page](/products/devdoot/).

To see it for your own clinic, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
