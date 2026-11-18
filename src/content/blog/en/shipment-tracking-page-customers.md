---
title: "A shipment tracking page that ends \"where is my goods\" calls"
description: "How a tracking page by consignment number, step-wise status entries, WhatsApp updates and proof of delivery cut status calls for transporters."
cover: truck
date: 2026-12-31
tags: [Logistics, Small business]
readingMinutes: 5
---

It is eleven in the morning at a transport office in Nashik. Three customers are at the booking counter and the phone rings again: "Where is my goods?" The clerk puts the caller on hold, rings the driver, gets no answer and promises to call back.

After lunch the same customer calls again. So does the consignee waiting in Nagpur. By evening the clerk has answered more status questions than he has booked consignments, and nobody on either end of the phone is satisfied.

## What status calls really cost

A status call looks free. It is not. One question from a customer usually sets off two or three more calls inside your own business.

- The counter clerk stops booking to answer the phone.
- The driver picks up while driving, or does not pick up at all.
- Regular customers skip the office and call the owner directly.
- Nothing is written down, so in a later dispute nobody can say when the goods reached.

The real problem is not the calls. It is that **the information exists but lives in someone's head**. The driver knows, the godown supervisor knows, and the customer who paid the freight does not.

## A tracking page that opens with the consignment number

The fix starts with the number already printed on your receipt or bilty. Put a tracking box on your website. The customer types the consignment number and sees where the goods are, with no login and no app to install.

A good tracking page shows only what answers the question:

- Origin city, destination city and booking date
- Current status and when it was last updated
- Earlier steps with date and time
- The delivery branch phone number, for the rare case that still needs a call

It should not show names, addresses, phone numbers or the declared value. Anyone who has the number can open the page, so it should carry **nothing a stranger could misuse**.

All this assumes every booking already sits in one system. If yours is split across a register, Excel and WhatsApp groups, start with our note on [packers and movers software that runs from enquiry to delivery](/blog/packers-movers-software/).

## Status entered at each step, by the person who is there

A tracking page is only as honest as the entries behind it. The rule: **whoever handles the goods marks the step**, on their own phone, at that moment.

1. Booked: the clerk creates the consignment and the number is generated.
2. Loaded: the supervisor marks it once the goods are on the vehicle.
3. Dispatched: the origin branch marks the vehicle as left.
4. Reached: the hub or destination branch marks arrival.
5. Out for delivery: the delivery staff mark it as they leave the branch.
6. Delivered: closed with proof, covered below.

Each entry should be one tap, with the system recording who made it and when. Drivers and loaders will not fill forms, so the [field app must work on a basic phone and a weak network](/services/mobile-apps/), holding the entry until the signal returns.

Add exception statuses too: held at branch, vehicle breakdown, consignee not available. An honest "delayed" stops more calls than silence does. If you run several branches, the same entries feed the head office view described in our post on [courier franchise software](/blog/courier-franchise-software/).

## Automatic WhatsApp updates at key steps

Most customers will not open the tracking page unless something reminds them. So send the update to where they already are.

Pick three or four steps, not all of them: booked (with the tracking link), dispatched, out for delivery and delivered. The message goes out when the status is entered. Nobody in the office types or forwards anything.

Do this on the official WhatsApp Business API, not from a personal number with a broadcast list. Our [WhatsApp automation](/services/whatsapp-automation/) work uses the official Meta Cloud API in Marathi and English, and our post on [how WhatsApp Business API pricing works in India](/blog/whatsapp-business-api-cost-india/) explains what you pay for.

The "out for delivery" message does one more job. A shop owner in Kolhapur who knows the tempo is coming today keeps someone at the shop to receive it.

## Proof of delivery with photo and signature

"Delivered" is the one status a customer can dispute, so it should not close on a tap alone. At the door, the delivery person:

- takes a photo of the goods as handed over
- enters the receiver's name
- collects a signature on the phone screen

The system adds the date and time and attaches everything to the consignment. The sender gets it on WhatsApp and the office keeps it on record.

This changes two familiar conversations. "We never received it" is answered with a photo and a name. A damage complaint can be checked against how the goods looked at handover.

If you plan to rely on these records in an insurance claim or a formal dispute, ask your insurer or legal advisor what form of proof they accept.

## Common questions

### Does the customer need an app to track a shipment?

No. The tracking page opens in any phone browser, from the link in the WhatsApp message or by typing the consignment number on your website. There is nothing to install and no password to remember.

### What if a driver or branch forgets to update the status?

The page keeps showing the last entered step with its time, so the gap is visible to the office as well as the customer. The lasting fix is to make the entry part of the handover, so a branch cannot receive or release goods without marking it.

### Can a stranger see customer details with the consignment number?

No, provided the page is built to show only movement: cities, status, dates and times. Names, addresses, phone numbers and delivery photos stay in the office system and in the WhatsApp message to the sender.

## Mahima One: the logistics platform we build this on

Mahima One is the franchise logistics platform Kingmaker Enterprises built for packers, movers and courier networks. It is live on the client's own server and used by a packers and movers company. Every consignment, branch and status entry sits in one record, so the tracking page, WhatsApp updates and proof of delivery read from the same place instead of from phone calls. See [Mahima One](/products/mahima-one/) and ask for a working demo on a free link before you decide.

Send us your consignment format and we will show how your tracking page could look: [WhatsApp us on 99751 58770](https://wa.me/919975158770).
