---
title: "Meta lead ads for clinics: enquiries that become appointments"
description: "Why Facebook and Instagram form leads go cold for clinics, and how to qualify them, reply first, track appointments and feed results back to Meta."
cover: doctor
date: 2027-01-11
tags: [Lead generation, Healthcare]
readingMinutes: 5
---

A skin clinic in Nashik runs an Instagram ad for acne consultations. By Monday morning there are a few dozen names in a downloaded sheet. The receptionist starts calling between patients. Half do not pick up, some say they never filled any form, and by Thursday the sheet is forgotten.

The ad worked. The form worked. What failed is everything after the form. This post is about that part: turning an enquiry into a patient who walks into the clinic.

## Why form leads go cold

A Meta lead form is easy to fill. Facebook or Instagram puts in the name and phone number, so two taps are enough. That ease is also the problem.

Typical reasons:

- The person tapped out of curiosity while scrolling and has no real need yet.
- The clinic called much later from an unknown number, and the person had forgotten the ad.
- The number on the profile is old, or belongs to someone else in the family.
- Nobody owns the sheet. Leads sit in the ad account until someone remembers to download them.

Spending more on the ad fixes none of these. **A lead goes cold in the gap between the form and the first reply**, and that gap is fully in your control.

## Ask two or three questions in the form

Add a few questions the person must answer before submitting. Each one filters out casual taps and gives the receptionist a way to open the call.

Questions that work for a clinic:

1. What do you need help with? Give choices that match your services, such as acne, hair fall, pigmentation or other.
2. When would you like to visit? This week, this month, or just enquiring.
3. Which city are you in?

Keep the answers as choices, not typing. Meta's form settings also offer a review screen where the person confirms their details before submitting. Turn it on, and **state in the form that the clinic will reply on WhatsApp and by phone**.

One caution: do not ask for medical history in an ad form. Health details are sensitive, so collect only what you need to book the visit. Our post on [patient data and the DPDP Act](/blog/clinic-patient-data-dpdp-act/) explains the general idea. Advertising by doctors also has professional conduct rules, so confirm your ad wording with a legal advisor or your medical council.

## Let a system send the first reply

The first few minutes matter most. The person has just seen your ad and still remembers the clinic's name. A receptionist in a busy Solapur or Jalgaon clinic, handling the OPD queue, billing and the phone, cannot watch a sheet as well.

So the first reply should not depend on anyone remembering:

- The lead goes from Meta straight into a lead register, not a file someone downloads.
- A WhatsApp message goes out at once, in Marathi or English, naming the clinic and the chosen service, with a way to pick a slot.
- The receptionist gets an alert with the form answers. If the person does not book, the lead becomes a call task.
- A lead that arrives at night gets the message immediately and a call the next morning.

Send that message through the official WhatsApp Business API, not a personal number with a bulk tool. Our post on [WhatsApp for a clinic, done the official way](/blog/whatsapp-business-api-vs-tools/) explains the difference, and we build this kind of flow under [WhatsApp automation](/services/whatsapp-automation/).

## Track which leads became appointments

Every lead needs a status, and the list should be short:

- New
- Contacted
- Appointment booked
- Visited
- Not reachable
- Not relevant

The receptionist changes the status with one tap. Anything longer will not be done on a busy OPD day.

Once the marking is honest, the owner can see which ad and which form brought patients, and which brought only names. An ad with cheap leads may send nobody to the clinic. Another with costlier leads may fill the Saturday slots. **Cost per visit is the number to watch**, not cost per lead. Our post on [how to stop paying for leads that never answer](/blog/lead-quality-stop-paying-for-bad-leads/) goes deeper.

## Feed the result back to the ad account

Meta's system looks for more of whatever you tell it is a success. If the only signal is a submitted form, it finds more people who submit forms. If it also learns which leads booked and visited, it can look for people like those.

A lead register or CRM can send such events back to Meta. The order is simple:

1. Store the lead ID that Meta sends with every lead.
2. When a status changes to appointment booked or visited, the system reports that event against the lead ID.
3. Once enough events have gone back, set the campaign to optimise for these quality leads instead of all leads.

Send the status only. Never the diagnosis, the treatment or the bill amount. **The ad account needs to know that a lead was good, not why.**

## Common questions

### Will more questions reduce the number of leads?

Yes, you will usually get fewer leads, and that is the intent. People who answer three questions are typically more serious, so the receptionist spends her calls on those likely to come. Judge the form by appointments, not by lead count.

### Should a clinic use a lead form or a click-to-WhatsApp ad?

Either can work, and the choice depends on who will reply. A form gives structured answers and a lead ID to track, while a WhatsApp ad starts a chat that needs a bot or a person to respond at once.

### Can a clinic do this without hospital software?

Yes, a lead register with statuses and a WhatsApp connection is enough to begin. If the clinic already uses appointment or hospital software, the lead should flow into it so the status updates when the patient gets a token.

## What Kingmaker built: Meta campaigns with lead-quality tracking

Kingmaker Enterprises runs Google and Meta campaigns with lead-quality tracking, so the owner's report shows appointments and not just form fills. Under our [digital marketing service](/services/digital-marketing/), the form questions, the first WhatsApp reply in Marathi or English, the lead register and the feedback to the ad account are planned as one system. You see a working demo on a free link before any purchase order, and the data is hosted in India.

To see how it would look for your clinic, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
