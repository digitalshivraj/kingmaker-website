---
title: "AI document checking: reading forms and bills, a person approves"
description: "How AI reads applications, bills, IDs and land records in Marathi and English, fills fields, flags gaps and leaves every decision to a person."
cover: binders
date: 2027-01-04
tags: [AI, Automation]
readingMinutes: 5
---

In a typical Nagar Parishad office in Amravati district, a clerk starts the morning with a stack of applications. Each file has a form, an Aadhaar copy, a property tax receipt and a bank passbook photocopy. She reads every page, types the same name and numbers into the computer, and only at the end notices that the passbook copy is cut off halfway through the account number.

The citizen is called back and the file waits. The same thing happens in a dealer's shop in Solapur, where supplier bills are typed into the accounts after closing, and in a transport office in Nagpur, where licences and vehicle papers sit in a folder nobody has checked.

## The documents that pile up

Most offices are not short of software. They are short of hands to read paper. The pile usually has four kinds of documents.

- Applications: scheme forms, certificate requests and admission forms, each with attachments.
- Bills: supplier invoices, hospital bills, transport receipts and expense claims.
- IDs: Aadhaar, PAN, voter ID, driving licence, staff and student proofs.
- Land records: extracts and ownership papers that come with farm scheme and loan files.

The work on each is the same: read it, type it, compare it with the other papers, and decide whether the file is complete. If your office already logs incoming papers, as in our post on [inward-outward register software for government offices](/blog/inward-outward-register-software/), document checking is the step right after the entry.

## What the AI does with each page

A scan or a phone photo goes in. From there the system works in a fixed order.

1. It identifies the document: an ID, a bill, a land record or an application form.
2. It reads the text and fills the fields on screen: name, date, amount, GST number, survey number.
3. It compares fields across documents. Does the name on the application match the ID? Does the bill total equal the sum of its lines?
4. It **flags what is missing or unclear**: a blank signature box, a cut-off page, a blurred number, a document that looks out of date.

The clerk stops typing. On one side is the filled form, on the other the original image, and below them a short list of items that need a second look.

A good system shows a smudged digit as a doubt, not as a confident wrong number.

## A person approves every decision

**The AI prepares the file and a person decides.** That is the rule we build around, and any office buying such a system should insist on it.

The AI does not approve an application, reject a claim, pay a bill or send a message to a citizen. It puts the file in front of the right person with its reading and its doubts. The officer or accountant corrects any field, then chooses approve, return or reject. The system records who decided and when, so there is a name behind every decision.

This matters most when the AI is wrong, which will happen. A wrong reading caught by a clerk is a small correction. A wrong reading that quietly rejects a farmer's application becomes a grievance.

## Marathi and English on the same page

Documents in Maharashtra are rarely in one language. A land record is in Marathi, the passbook in English, the application form in both, and the applicant's name is spelt differently on each.

The system reads Devanagari and English, including pages that mix the two. It can treat a Marathi name and its English spelling as a likely match and show the pair to the clerk for confirmation. The review screen works in Marathi and English, so the person approving reads it in the language they work in.

Printed text reads more reliably than handwriting, and a flat scan reads better than a photo taken at an angle. If documents come from the field, an upload link with simple photo guidance helps, the same idea we describe for [collecting staff KYC documents on one WhatsApp link](/blog/staff-kyc-documents-whatsapp-link/).

## Keeping documents secure and deleting them on time

An ID copy or a land record is personal data. Once the checking is done, the office is still responsible for it. Ask these questions of any system, including ours.

- Where is the data stored? We host in India.
- Who can open a document? Access should follow roles, so an operator does not see what only the officer needs.
- Is every view and download logged?
- Is there a **deletion schedule**? Documents should go once the purpose is served and the required retention period is over.
- Are the documents used for anything other than your checking work? They should not be.

How long you must keep each record depends on your department's rules and on tax and data protection law. Confirm the periods with your department, your CA or a legal advisor, then have the system enforce them. Our post on [the DPDP Act in plain language for offices buying software](/blog/dpdp-act-government-software/) covers the general duties, and our [security and compliance service](/services/security-compliance/) covers access control and reviews.

## Common questions

### Can the AI approve or reject a file on its own?

No. It reads, fills and flags, and a named person approves, returns or rejects every file. Nothing goes out to a citizen, customer or vendor without that approval.

### Does it read handwritten Marathi?

Partly. Clear handwriting can be read, but with less certainty than printed text, and results depend on the pen, the paper and the photo. Anything the system is unsure about is highlighted for the clerk instead of being guessed.

### What happens to the documents after checking?

They stay on servers in India, visible only to the roles you allow, and are deleted when the retention period you set is over. Confirm that period with your department, CA or legal advisor before the system is configured.

## AI automation by Kingmaker Enterprises: document checking with a person in charge

Our [AI automation service](/services/ai-automation/) builds this for offices and businesses in Maharashtra: AI that reads your forms, bills, IDs and land records in Marathi and English, fills the fields, flags the gaps and sends each file to the person who must approve it. Nothing goes out without that approval. Data is hosted in India, and you see a working demo on a free link before any purchase order.

To try it on your own forms, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
