---
title: "Backups for hospitals and offices: three questions for your vendor"
description: "Three questions to ask your software vendor about backups, what to do if ransomware or a disk failure hits, and a monthly check any owner can run."
cover: security
date: 2027-01-18
tags: [Hosting, Data protection]
readingMinutes: 5
---

Picture a 25-bed hospital in Solapur on a Monday morning. The billing computer will not start. The disk that held three years of patient records, pharmacy stock and pending bills has failed. The owner calls the software vendor, who says there is a backup. Then it turns out the backup was saved on the same disk.

The same thing happens in a government office in Amravati or a dealer's shop in Jalgaon. Everyone was told a backup existed. Nobody asked the three questions that show whether it would work on the bad day.

## Question one: what is backed up, and how often

"We take backups" can mean many things. Ask the vendor to list in writing what is included. This applies whether you run one billing program or a full [hospital management system](/products/hospital-management-system/) with OPD, pharmacy, lab and IPD.

- The database: patient records, bills, stock, ledgers, inward and outward entries.
- Uploaded files: lab reports, scanned letters, ID proofs, photos. These often sit in a separate folder and get missed.
- Settings: staff logins and roles, bill formats, rate lists, test lists.

Then ask about frequency with one question: "If the server fails right now, **how much work do we enter again**?" If the backup runs once every night and the server fails at 5 pm, the whole day's OPD, billing and pharmacy sales are gone. A busy hospital usually needs copies through the day. A small office with a few entries may be fine with one daily copy.

Also ask how many older copies are kept. If a record was deleted or damaged last week and you noticed only today, yesterday's backup carries the same damage.

## Question two: where are the backups kept

A copy on the same server, the same disk, or a pen drive lying beside the computer is a second copy, not a backup. A fire, a theft, a power surge or ransomware takes both together.

Ask these four things:

- Is at least one copy kept **away from the main server**, on a different machine in a different location?
- Is that location in India? Our post on [hosting software in India](/blog/hosting-in-india-office-hospital-software/) explains why this matters for offices and hospitals.
- Can the main server delete or overwrite its own backups? If it can, so can ransomware that takes over the server.
- Is the backup encrypted, and who holds the key?

A backup contains every patient or citizen record you hold, so it deserves the same [access control and security review](/services/security-compliance/) as the live system. For clinics, our note on [patient data and the DPDP Act](/blog/clinic-patient-data-dpdp-act/) covers what else to change.

## Question three: when was a restore last tested

A backup that has never been restored is a hope, not a plan. Backup jobs typically fail quietly: the disk fills up, a file gets corrupted, or the password for the encrypted copy leaves with a staff member.

So ask for a date: "When did you last restore our data on a separate machine and open it?"

A good answer names the date, what was restored and what was checked, such as the last bill number, yesterday's OPD count and one lab report opened on screen. A weak answer is "it runs automatically, do not worry".

Better still, **ask to see a restore**. The vendor restores your data to a test link, and you log in and search for a patient or a letter from last week. If you are still comparing systems, add this to the [questions to ask any hospital software vendor](/blog/hospital-software-questions-to-ask/).

## If ransomware or a disk failure hits

What you do first decides how much you lose. Keep this order printed near the main computer.

1. Disconnect the affected machine from the network and the internet. Do not keep restarting it, and do not let anyone try to "repair" the disk.
2. Call your vendor before anyone else touches the system. Tell them what you saw and when.
3. Move to paper. Handwritten tokens, a numbered receipt book and a pharmacy register keep the work going and give you something to enter later.
4. Do not connect any backup drive to the affected machine. **Restore onto a clean machine**, never onto the infected one.
5. For ransomware, do not pay in panic. Payment does not guarantee the data comes back. Report it to the cyber police in your district. Data protection rules may also require you to inform authorities and the people affected, so confirm this with a legal advisor.
6. After the restore, check the latest records, enter the paper entries and change every password.

## A simple monthly check

The owner or office head does not need to understand servers. Fix one date every month, send the vendor four questions and write the answers in a register.

1. What is the date and time of the last successful backup?
2. Did any backup fail this month, and why?
3. Where is the off-site copy, and how many older copies exist?
4. When was the last restore test?

Every few months, ask for a restore and open a record yourself. If the answers are vague or change from month to month, **treat that as the warning**.

## Common questions

### Is a pen drive or external hard disk backup enough?

No, not on its own. It sits next to the computer, depends on someone remembering to copy, and is often plugged in when ransomware strikes. Keep it as an extra copy, but the main backup should run automatically and be stored away from your premises.

### Does cloud hosting mean my data is already backed up?

Not automatically. A cloud server is still one server, and a database that is deleted or encrypted there is lost unless separate backups were set up. Ask a cloud vendor the same three questions.

### Can I get a copy of my own data from the vendor?

Yes, you should be able to, and it is best written into the agreement before you start. Ask what format the copy comes in and whether it includes uploaded files such as reports and scans.

## Hosting and maintenance from Kingmaker Enterprises

Kingmaker Enterprises offers [hosting and maintenance](/services/hosting-maintenance/) for offices and hospitals: servers, backups and monthly maintenance, with data hosted in India. The same team that builds your system hosts and supports it, so there is one number to call on the bad day. Put the three questions from this post to us before you sign anything, and we will show you a working demo on a free link.

To talk through backups for your hospital or office, [WhatsApp us on 99751 58770](https://wa.me/919975158770).
