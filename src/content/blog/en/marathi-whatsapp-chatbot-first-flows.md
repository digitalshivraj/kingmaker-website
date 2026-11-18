---
title: "Planning the first flows of a Marathi WhatsApp chatbot"
description: "Plan a Marathi WhatsApp chatbot from your ten most asked questions, with a short menu, buttons, staff handover, real-user testing and measurement."
cover: citizen
date: 2026-12-24
tags: [WhatsApp, Automation]
readingMinutes: 5
---

At an agri dealer's counter in Jalgaon, the shop phone buzzes all morning. Is the shop open today? Which documents do I bring for the sprinkler subsidy? Has my file moved? One person answers each message by hand, between billing and loading, and by evening some messages are still unread.

A WhatsApp chatbot can take a good part of that load, but only if the first version is planned around what people really ask. The common mistake is to put the whole office into the bot at once. The result is a menu nobody finishes.

## Start with the ten questions you get most

Do not start with a feature list. Start with your phone. Open the office WhatsApp and the call notebook, and write down what people asked on ordinary working days. Ask the person who answers the phone, because they already know the list by heart.

Typically a small set of questions repeats again and again. For a clinic in Kolhapur it may be timings, fees and whether the doctor is in today, which is why [OPD tokens on WhatsApp](/blog/opd-tokens-on-whatsapp/) are a natural first flow for clinics. For a Nagar Parishad office in Latur it may be tax payment, certificates and complaint status.

Sort your ten questions into three groups:

- Fixed answers: timings, address, documents required, charges. The bot can answer these on its own.
- Answers from a record: application status, token number, payment received. The bot has to read these from your register or software.
- Answers that need judgement: disputes, exceptions, anything sensitive. These go to a person.

**Build the first group first.** The second group needs a system behind it. If your records sit in a paper register, that flow waits until there is [a digital register or dashboard](/services/custom-software/) for the bot to read.

## Write a short Marathi menu, not a maze

The first message decides whether people continue. Greet in Marathi, offer a switch to English, and show **four or five options** at most. For the dealer in Jalgaon, the menu could be this simple, shown here in English:

Namaskar. What information do you need?

1. Timings and address
2. Documents needed
3. Application status
4. Talk to staff

Write Marathi the way people speak at the counter, not the way a circular reads. Keep every message short enough to read on a small phone without scrolling. If a person needs more than two or three taps to reach an answer, the flow is too deep.

## Use buttons and lists instead of typing

Typing is where bots break. Some people type in Devanagari, some write Marathi in Roman letters, and spellings vary. A bot waiting for the Marathi word for status, typed in Devanagari, fails when someone types status or sthiti.

Buttons and lists remove the problem. WhatsApp lets a business show a few reply buttons under a message, and a list message for a longer set of choices. The exact limits are set by Meta, so design for small numbers. These interactive messages come with the official API, which is one more reason for [doing WhatsApp the official way](/blog/whatsapp-business-api-vs-tools/).

Some typing cannot be avoided: an application number, a mobile number, a date. Ask for **one thing at a time**, show an example of the format, and accept both Marathi and English numerals.

## Plan the handover to a person

Every menu needs a "talk to staff" option, and the bot should also hand over on its own when it fails to understand twice in a row. Decide these before launch:

1. **Who receives the chat**, by name, and who covers when they are on leave.
2. Which hours staff reply, and what the bot says outside those hours.
3. What staff see. The bot should pass on the name, number and option chosen, so the person is not asked again.
4. How the chat returns to the bot once staff close it.

Be honest in the wording. A line such as "Our staff will reply to you during office hours", written in Marathi, sets the right expectation. A bot that pretends to be a person loses trust the first time it gets something wrong.

## Test with real users before launch

The staff who planned the bot know too much to test it. Hand it to a few people who have never seen it: a farmer at the counter, an older patient, a karyakarta, someone on a basic Android phone with a weak network.

**Do not explain anything.** Watch where they stop, what they type instead of tapping, and which word they read twice. Then change the wording, not the user.

Test the odd cases too: a voice note, a photo, a "hi" in the middle of a flow, the same button tapped twice. Each should get a polite reply and a way back to the main menu. After that, open the number in stages: first at the counter, then on the website and printed material.

## Measure what people ask

Once the bot is running, it becomes your clearest record of what the public wants from you. Review these regularly:

- which menu options are tapped most, and which never
- where people leave a flow halfway
- how many chats go to staff, and for what
- **what people typed that the bot did not understand**

That last list is your next version. A question that keeps appearing gets its own flow. An option nobody taps comes off the menu. If free-text messages grow, [AI automation](/services/ai-automation/) can classify them and draft replies, with a person approving before anything goes out.

Volume also affects your bill, so read [how WhatsApp Business API pricing works](/blog/whatsapp-business-api-cost-india/) and confirm current rates with your provider.

## Common questions

### Should the chatbot be only in Marathi?

No, offer Marathi first with a clear switch to English. Some users are comfortable in only one of the two, and some type Marathi in Roman letters. Keep both versions of each message the same in meaning, so staff can support either.

### Do we need the official WhatsApp Business API for buttons and lists?

Yes, for an automated bot, interactive buttons and list messages come with the official WhatsApp Business platform from Meta. Unofficial tools that imitate them put your number at risk of being blocked. Confirm current features and policies with Meta or your provider.

### How many flows should the first version have?

As few as will cover your most repeated questions, which usually means a handful of fixed-answer flows plus a handover to staff. Add record-based flows such as status checks once the data behind them is reliable. Let the list of unanswered questions decide what comes next.

## WhatsApp automation by Kingmaker Enterprises, in Marathi and English

Kingmaker Enterprises builds Marathi and English bots on the official Meta Cloud API. Our [WhatsApp automation](/services/whatsapp-automation/) work is planned the way this post describes: your top questions first, short menus, buttons, and a clear handover to your staff. You see a working demo on a free link before any purchase order, and your data is hosted in India.

Send us your ten most asked questions and we will sketch the first flows with you: [WhatsApp us on 99751 58770](https://wa.me/919975158770).
