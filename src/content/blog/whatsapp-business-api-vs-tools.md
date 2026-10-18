---
title: WhatsApp for your office or clinic, done the official way
description: The difference between the official WhatsApp Business API and grey-market tools, why numbers get banned, and what a Marathi chatbot can and cannot do.
date: 2026-09-18
tags: [WhatsApp, Automation, Small business]
readingMinutes: 6
---

Everyone wants a WhatsApp bot. A clinic wants appointment confirmations, an NGO wants to answer scheme questions at night, a dealer wants to tell farmers when their subsidy file moves. The intent is right. The way many organisations go about it gets their number banned within a month.

## Three ways to put WhatsApp to work

**The ordinary WhatsApp Business app.** Free, one phone, quick replies and a catalogue. Fine for a shop. It cannot send automatic messages from your software or handle hundreds of conversations.

**Grey-market broadcast tools.** Software that drives a normal WhatsApp account through a phone or emulator to send bulk messages. Cheap, popular, and against WhatsApp's terms. Meta detects the pattern and bans the number, usually when you have just built a list of a few thousand contacts.

**The official WhatsApp Business API (Meta Cloud API).** Your organisation is verified by Meta, your number becomes an API number, and your software sends and receives messages through it. Messages to people who have opted in are allowed, templates are approved in advance, and there is a small per-conversation cost. This is the only way that lasts.

## What business verification needs

Meta checks that the organisation is real. The name on the WhatsApp Business account must match the name on the registration document you upload, exactly. A foundation applying with a proprietorship's GST certificate will be rejected, silently, every time. Have your registration certificate, PAN and a recent utility bill or bank statement in the same name, and a website whose footer shows the legal name, address and phone.

Verification takes a week or two. Plan for it before you plan the bot.

## What a Marathi chatbot can do

A menu-driven bot in Marathi works well for things with a clear answer: book an OPD token, check a subsidy file status, register as a member, get the document list for a scheme, report a complaint with a photo. The bot takes the structured part and hands the conversation to a person when the question goes outside the menu.

We built one for an NGO that answers scheme questions, registers members and volunteers, and sends back a generated Marathi ID card. We built farmer updates for a subsidy dealer and token messages for clinics.

## What it should not do

It should not pretend to be a person. It should not broadcast to people who did not opt in. It should not be the only way to reach you; a human number stays on the website.

## Cost

The API itself charges a few rupees per conversation. The expensive part is usually a monthly subscription to a chat tool. For many organisations it is cheaper to build the automation in-house on n8n or a small custom service and pay only Meta's per-conversation charge, with no per-seat fee. We do both, and we tell you which one fits before you commit.
