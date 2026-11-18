---
title: "Voter slip distribution: tracking which homes the team reached"
description: "How a booth team can mark each house reached on a phone, show booth-wise progress to the campaign office and follow up on the homes it missed."
cover: town
date: 2027-01-06
tags: [Elections, Sanghatan]
readingMinutes: 5
---

A booth head in Solapur collects a bundle of printed voter slips from the campaign office. A few days later the bundle is gone and the report to the office is one line on WhatsApp: "Slips done." Nobody can say which houses got a slip, which doors were locked, and which lane was skipped because it got dark.

On polling day the gap shows. A family calls the karyakarta to ask which booth they vote at, and the slip that should have told them is still lying in someone's scooter dickey.

## The gap between slips printed and slips delivered

Printing is easy to count. The printer gives a bill and the office knows the number. Delivery is counted on trust: the bundle went out, so the slips must have reached.

In a typical campaign, the gap comes from ordinary things, not bad intent.

- The house was locked and nobody went back.
- The family has shifted and the slip was left with a neighbour.
- Two karyakartas covered the same lane and nobody covered the next one.
- Slips were handed out at a chowk or a tea stall, not at the home.

**A slip counts only when it reaches the house.** The one person who knows that is the karyakarta at the door, so the record has to be made there, by that person, at that moment.

## Marking each house as reached on a phone

The voter list for a booth can be arranged house by house. Put that list on the karyakarta's phone and the bundle of slips becomes a checklist.

1. The booth head assigns lanes or house ranges to each karyakarta.
2. The karyakarta opens the app and sees only those houses.
3. At each door, **one tap**: delivered, locked, shifted or not found.
4. The mark is saved with the karyakarta's name and the time, and the house leaves the pending list.

If the worker has to type a sentence at every door, the marking stops by the third lane.

The app has to suit the people using it: Marathi labels, large buttons, and a list that still opens when the network drops. We have written about [a karyakarta app that ground workers actually open](/blog/karyakarta-app-ground-workers/), and the same thinking guides the [mobile apps](/services/mobile-apps/) we build for field teams.

## Booth-wise progress for the campaign office

Once marks come from the door, the campaign office stops waiting for "slips done". The campaign manager sees one row per booth: houses assigned, delivered, locked, shifted or not found, and still pending.

The screen is for moving people, not for scolding them. If one booth in Jalgaon is nearly complete and the next has half its houses pending, the manager can shift two karyakartas across.

**Pending houses, not slips issued**, is the number to watch, because only that number tells you what is left. It sits beside the other figures on [the booth committee dashboard a Vidhan Sabha head should see daily](/blog/booth-committee-dashboard/).

## Follow-up lists for the houses missed

The first round rarely reaches every house. What matters is that **the second round starts from a list**, not from memory.

Each status leads to a different action. Locked houses get a second visit at another time of day, since working families are often home in the evening. A shifted family is recorded as shifted, so the slip is not left with a neighbour and counted as delivered. For a house not found, the booth head sits with someone who knows the area and sorts out the address. Houses nobody has visited go to another karyakarta.

As polling day comes closer, the second-round list becomes short and specific: these houses, in these lanes, with these karyakartas. That is a job a booth head can finish.

## Keeping voter data limited to those who need it

A voter list with names, ages and addresses is personal data. A printed copy or an Excel sheet forwarded on WhatsApp cannot be called back once it leaves the office. A system with logins can be stricter.

- A karyakarta sees only the houses assigned to them.
- A booth head sees only their own booth.
- The campaign office sees counts for every booth, and only a few named people can open the house-level list.
- Field logins have no export or download.
- When a worker leaves the team, their login is switched off.

**Each person sees only what their task needs.** Our post on [the access rules a party system must enforce for voter data](/blog/voter-data-access-rules-party-system/) explains the reasoning, and our [election technology](/services/election-technology/) work is built to Election Commission and data protection rules. For what applies to your campaign, confirm with your legal advisor.

## Common questions

### Does every karyakarta need a costly phone and steady network?

No, a marking screen with a house list and four buttons can run on an ordinary Android phone. Ask any vendor to show you what happens when the network drops in the middle of a lane, and whether the marks are saved and sent once it returns.

### Is a party allowed to distribute voter slips?

Parties and candidates commonly do, but only within the conditions the Election Commission sets. Those conditions cover what a slip may carry and how and where it may be handed out. Check the current instructions with the Returning Officer's office or your legal advisor before you print.

### Can a WhatsApp group and a spreadsheet do the same job?

For one booth with a careful booth head, perhaps. Across a full constituency it breaks down, because someone has to retype every message into the sheet, and the sheet with voter names in it gets forwarded.

## Sanghatan: slip tracking from war room to booth

Sanghatan is Kingmaker Enterprises' party organisation and election campaign platform, from war room to booth. For slip distribution, it gives the karyakarta a house list to mark on the phone, the booth head a follow-up list of missed houses, and the campaign office booth-wise progress, with each role seeing only its own data, in Marathi and English. It is demo ready, and a pilot has been quoted for one Vidhan Sabha constituency. Read more on the [Sanghatan page](/products/sanghatan/), and ask us for a working demo on a free link.

To see it with your own booth structure, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
