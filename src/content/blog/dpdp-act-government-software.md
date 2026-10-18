---
title: The DPDP Act, 2023 in plain language for offices buying software
description: What the Digital Personal Data Protection Act means for a police station, an MLA office or a hospital when it buys or builds software, and the five things to put in the contract.
date: 2026-09-08
tags: [Data protection, Government, Compliance]
readingMinutes: 7
---

The Digital Personal Data Protection Act, 2023 is India's first general data protection law. It applies to any organisation that decides why and how personal data is processed, which includes a police department running a lodge register, an MLA office tracking complaints, a hospital holding patient records and a party storing voter contact details.

This is not legal advice; we build software and this is how we read the law for the systems we deliver. Take the contract points below to your own legal advisor.

## The roles

The **data fiduciary** is the organisation that decides the purpose of processing. If your office buys a system, your office is the fiduciary. The software vendor is a **data processor**, acting on your instructions. The citizen, patient or voter is the **data principal**.

This matters because the fiduciary is accountable even when the processor makes the mistake. Choose vendors accordingly.

## What the Act asks of a fiduciary

- Process data only for a lawful purpose, with consent or under one of the Act's legitimate uses (which include certain government functions and provision of benefits and services).
- Give notice of what is collected and why.
- Keep data accurate and secure, with reasonable safeguards.
- Delete data when the purpose is served, unless a law requires retention.
- Report breaches to the Data Protection Board and affected people.
- Answer requests from people to see, correct or erase their data.

## Five things to put in every software contract

1. **Where the data lives.** Name the country and ideally the city of the servers. Government and health data should stay in India.
2. **Who can access it.** The system must have roles and logs. The contract should say the vendor accesses production data only with written permission and for a stated purpose.
3. **Retention.** Write the rule down: "guest entries are retained for X years and then deleted" or "complaint records are retained for the term of the office and one year after".
4. **Ownership and exit.** The office owns the data and, on full payment, the source code. At the end of the contract the vendor returns all data and deletes its copies.
5. **Breach handling.** Who notifies whom, within how many hours, and who pays for what.

## What it means in practice for a lodge register or a grievance system

A digital register done to the Act is safer than the notebook it replaces: access is logged, data is encrypted, retention is enforced and a lost phone does not mean a lost register. A WhatsApp group with three years of complaint photos, by contrast, is a breach waiting to be reported.

## Our commitments

Every system we build keeps data on Indian servers or on the client's own infrastructure, enforces access at the database level, logs every view and edit, follows a written retention rule, and transfers ownership of data and code to the client. We write these into the proposal, before any purchase, so the procurement officer does not have to ask.
