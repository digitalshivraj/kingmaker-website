---
title: "GST invoices from your own business software: what to get right"
description: "What a GST invoice from your own software must carry, plus numbering, credit notes, e-invoicing, e-way bills and exports your CA can use."
cover: papers
date: 2026-12-27
tags: [Small business, Compliance]
readingMinutes: 5
---

Picture a pipe and fittings trader in Jalgaon who gets his own billing software built because the ready-made package never matched how his counter works. The first month goes well. Then his CA calls: two invoices carry the same number, a sales return was handled by deleting the original bill, and the export has no column for the buyer's GSTIN.

Nobody wrote down what a GST invoice needs before the first screen was designed. This post is that list.

## What every GST invoice should carry

Your software should print your own name, address and GSTIN on every invoice, and the same details for a registered buyer, as [Rule 46 of the CGST Rules](https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter6/rule46_v1.00.html) lists them. In general terms, the layout needs room for:

- Invoice number and date
- Description of the goods or services, with the HSN or SAC code that applies to you
- Quantity, unit and taxable value after any discount
- Each tax that applies, CGST with SGST or IGST, and the rate charged
- Place of supply, the total, and a signature or digital signature

Stop typing these at the counter. Keep the buyer's GSTIN and state in a **customer master**, and the HSN code and tax rate in an item master. The invoice picks them up, and the place of supply decides between CGST with SGST and IGST.

Your software also has to know if you are a composition dealer or sell only exempt goods, because the document then becomes a bill of supply. Mixed taxable and exempt lines raise a similar question, covered in our post on [hospital billing and GST for a small hospital](/blog/hospital-billing-gst-small-hospital/).

## Numbering series and credit notes

Numbering is where home-grown software usually slips. Build these rules in from the start:

1. The system assigns the number when the invoice is saved. No one types it.
2. Numbers run in order, with no repeats and no gaps inside a financial year.
3. Separate series, say for a Nashik counter and a Solapur godown, each get their own prefix.
4. A fresh series starts with the new financial year.

The rules also limit the length of an invoice number and the characters it may use. Show your CA the format before the first real bill is printed.

Once an invoice has gone to the customer, it is locked. **Never delete an issued invoice.** A return, a rate mistake or a later discount is handled with a credit note, and an undercharge with a debit note. A credit note should point back to the number and date of the invoice it corrects, and show the value and tax being reversed. Give credit notes their own series.

## When e-invoicing and e-way bills come into play

E-invoicing does not mean sending a PDF by email. The invoice details go to the government's invoice registration portal, which sends back a reference number and a QR code to print on the invoice.

Whether it applies to you depends on turnover. Owners near the ₹5 crore mark should watch their aggregate turnover: [Central Tax notification 10/2023](https://www.gstcouncil.gov.in/node/4365) pulled businesses above that figure into e-invoicing from 1 August 2023. The limit has been revised before and can be revised again. Even below it, store invoice data in clean, separate fields, so the portal connection can be added later without rebuilding the invoice screen.

An e-way bill is about **goods on the move**, not about the sale itself. Your dispatch screen should ask for transport details once a consignment is worth more than ₹50,000, the figure in [Rule 138 of the CGST Rules](https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/rules/cgst_rules/active/chapter16/rule138_v1.00.html). Smaller consignments can travel with one too, if you or the transporter prefer. Limits for movement inside a state and the list of exempt goods can differ, so confirm what applies to your goods in Maharashtra.

## Exports your CA can use

At month end, a typical accounts desk in Kolhapur or Amravati prints invoices and retypes them into the accounting package. Good exports end that. Ask for:

- A sales register with invoice number, date, buyer GSTIN, place of supply, taxable value and each tax in its own column
- A credit and debit note register that shows the original invoice number
- An HSN-wise summary of sales
- A list of cancelled invoices with the reason for each

Dates must export as dates and amounts as numbers, not as text. The **totals on the export must match the totals on screen**. If your CA works in Tally, read our note on [Tally export for small business payments](/blog/tally-export-small-business-payments/) before you fix the file layout.

Invoices have to be kept for years, so plan [server backups and monthly maintenance](/services/hosting-maintenance/) along with the software.

## Confirm with your CA before the first bill

Software applies the rules. It does not decide which rules apply to you. Settle these with your CA or a legal advisor:

- Tax invoice or bill of supply, and for which items
- The invoice number format and how many series you will run
- Whether e-invoicing applies to you, and how your turnover is counted
- The e-way bill limit for your goods and routes

Then have your CA check one sample of each document and one sample export before real billing starts.

GST rates and limits change by notification. Keep them as settings an authorised user can update, not as values buried in the code.

## Common questions

### Can I issue GST invoices from custom software instead of an accounting package?

Yes, provided the invoice carries the details the GST rules ask for and the numbering follows them. Have your CA approve a sample invoice and a sample export before you start.

### Do I need e-invoicing if my business is small?

It depends on your aggregate turnover, not on the software you use. The limit is set by notification, so ask your CA whether you are covered this year.

### What should I do when an issued invoice has a mistake?

Do not edit or delete it. Raise a credit note or debit note that refers to the original invoice, or cancel it in the way your CA advises, and record the reason.

## Custom invoice software built by Kingmaker Enterprises

Kingmaker Enterprises builds [custom software for growing businesses](/services/custom-software/): registers, dashboards and role-based portals shaped around how your counter and accounts desk already work. For invoicing, that means customer and item masters, system-locked numbering, credit notes tied to the original bill, and exports laid out the way your CA asks, in Marathi and English. You see a working demo on a free link before any purchase order, and your data is hosted in India.

Send us a sample of your current invoice: [WhatsApp us on 99751 58770](https://wa.me/919975158770).
