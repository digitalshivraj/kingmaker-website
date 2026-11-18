---
title: "UPI receipts for party membership drives that stand up to audit"
description: "How a party treasurer can replace cash receipt books with UPI collection, WhatsApp receipts and booth-wise member records an auditor can check."
cover: citizen
date: 2026-12-25
tags: [Political offices, Compliance]
readingMinutes: 5
---

A membership drive closes in Kolhapur or Jalgaon. Receipt books went out to every taluka and ward. Some come back full, some half used, and a few do not come back at all.

The treasurer now holds a bag of cash, a pile of counterfoils in different handwriting, and a total that matches neither. Most likely nobody has taken anything. But nobody can prove that, and the auditor will ask.

## Where cash receipt books go wrong

The receipt book survives because everyone knows how to use it. The trouble starts after the drive, when the books have to add up.

- **Missing books**: a book was issued to a worker who has since moved, and no one noted which receipt numbers were used.
- Unrecorded amounts: money collected at a meeting with a promise of "receipt later".
- Unreadable members: a first name, a surname spelt three ways, a mobile number with a digit missing.
- Late deposits: cash sits in a drawer, so the bank statement and the books never agree by date.

Each of these is small. Together they mean the treasurer signs accounts that cannot be traced back to a person and a payment.

## What changes when the member pays by UPI

The money moves from the member's bank to the party's bank account. No one carries it, counts it or deposits it.

A typical collection goes in this order.

1. The karyakarta opens the member form on a phone and enters the name, mobile number and booth.
2. The member scans the party's QR code and pays the membership fee. The QR code belongs to the party's own bank account, never to an office bearer's personal account.
3. The bank's payment reference is matched to that member's entry.
4. A numbered receipt goes to the member on WhatsApp, with the name, amount, date and receipt number.
5. The same entry appears on the district office dashboard.

The system issues receipt numbers in sequence, so **there is no book to lose and no gap to explain**. Send receipts from the party's official number on the [WhatsApp Business API](/services/whatsapp-automation/), not from a worker's personal phone.

Some older members will still want to pay cash. Record that payment in the same system, tagged as cash, with the collector's name.

## Member records linked to booth and ward

A receipt answers "how much". The member record answers "who, and where".

Each member is tied to a booth, a ward, a taluka and a district. That gives the organisation **one member, one booth, one receipt**. A district president in Amravati can see which wards have enrolled members and which have none. A booth pramukh in Solapur sees only their own booth.

After the drive, renewal reminders go to the number that received the receipt. Before an election, the list shows who the party can call on at each booth, which is where [election technology](/services/election-technology/) begins.

Party membership is sensitive personal information. Collect only what you need and give each office bearer access to their own area only.

## Reports the treasurer and auditor need

An auditor does not want a dashboard. An auditor wants registers that agree with the bank statement.

- Receipt register: every receipt in number order, with member, amount, mode, date and bank reference.
- Bank reconciliation: the day-wise total of UPI receipts against the credits in the party's account.
- Ward-wise and collector-wise summary: what each unit enrolled and collected.
- Cash register: every cash entry, who collected it and when it was deposited.
- Larger contributions: name, address and amount for anyone who gave above the reporting limit.
- Cancelled and refunded receipts: the reason and who approved it.

Each report should export to a spreadsheet and PDF, in **the format your CA asks for**, not the format the software prefers.

## What the rules say, in general terms

Read these official sources with your CA before the drive begins.

- A membership subscription counts as a contribution for Sections 29B and 29C of the [Representation of the People Act, 1951](https://www.indiacode.nic.in/bitstream/123456789/1941/1/195143.pdf), and foreign money stays outside what a party may accept.
- The yearly report under Section 29C of the [same Act](https://www.indiacode.nic.in/bitstream/123456789/1941/1/195143.pdf) falls to the treasurer, or another person the party authorises, and covers contributions above ₹20,000 from any person in that financial year.
- A party's income tax exemption comes with conditions: a named record with address for larger contributions, accounts audited by an accountant, and a limit on how much any single donation may be paid in cash, with bank routes such as a cheque, a draft or an electronic transfer expected above it.
- The [Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026](https://www.incometaxindia.gov.in/w/income-tax-act-2025-comes-into-force-from-1st-april-2026), so section numbers and limits you may have seen quoted for earlier years can differ. Your CA will tell you which provision and which limits apply to this financial year.
- The Election Commission's transparency guidelines, as recalled in [this ECI note](https://www.eci.gov.in/files/file/14187-major-push-by-eci-for-enforcing-due-compliances-by-registered-unrecognized-political-parties-rupps/), also expect audited annual statements from parties.

Tax law is amended and renumbered from time to time. Ask your CA which provisions apply to your financial year, whether your UPI collection qualifies as an accepted electronic mode, and how membership fees should appear in the accounts. Software keeps the record. It does not make a party compliant on its own.

## Common questions

### Can a member still pay in cash?

Yes, a cash payment can be recorded with the collector's name and a cash tag. Cash carries limits under the tax rules, so ask your CA what is acceptable before the drive starts.

### Should the QR code be in the party's name?

Yes, it should be linked to the party's own bank account. Money collected into an office bearer's personal account is hard to explain to an auditor, even if every rupee is transferred later.

### What happens if a payment fails or is made twice?

A failed payment produces no receipt, because the receipt is issued only after the bank reference is matched. A duplicate payment shows up in the reconciliation report, and the treasurer can approve a refund recorded against the original receipt.

## Sanghatan: party organisation software from Kingmaker Enterprises

[Sanghatan](/products/sanghatan/) is our party organisation and election campaign platform, from war room to booth. It holds the organisation in the same district, ward and booth structure a membership drive needs, so a member, a payment and a receipt can sit in one record the treasurer reports on. It is demo ready, and a pilot has been quoted for one Vidhan Sabha constituency. We show a working demo on a free link, in Marathi and English, before any purchase order.

To plan a membership drive for your district, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
