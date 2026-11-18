---
title: "Cutting AI costs: routing tasks across local, cheap and strong models"
description: "Stop sending every AI task to the costliest model. How to route work across local, small and strong models, cache repeats and measure cost per task."
cover: coding
date: 2026-12-07
tags: [AI, Automation]
readingMinutes: 5
---

A distributor in Nashik starts using AI for three jobs: sorting WhatsApp enquiries, reading supplier invoices and drafting replies to customers. It works. Then the bill arrives, and it is higher than last month, which was higher than the month before.

Nobody did anything wrong. The team connected everything to the strongest model on offer, because that is what the first trial used, and every small task has been paying the top rate ever since.

## Not every task needs the strongest model

AI providers charge by the amount of text that goes in and comes out. The strongest models cost a multiple of the smallest ones for the same text. Open your provider's current price sheet and you will see the gap.

Now look at what your team actually sends. "Is this message a new order, a complaint or a payment query?" is a sorting job. "Pull the invoice number, date and amount from this PDF" is a copying job. A small model is usually enough for both.

**Paying the top rate for a sorting job** is like sending a senior CA to count petty cash. The work gets done, but the cost makes no sense.

The strong model earns its price on hard work: a long contract with conflicting clauses, a complaint with a tangled history, a decision where several rules pull in different directions.

## Three lanes for your AI work

Routing means each task goes to the **cheapest model that can do it properly**. Most businesses need three lanes.

- Local model: runs on a computer in your office or on your own server. There is no charge per use, though you pay for the machine and its upkeep. Suits sorting, extraction and documents you would rather not send outside.
- Small paid model: a low-priced model from a provider. Suits classification, pulling fields out of documents, short summaries and routine draft replies.
- Strong model: kept for reasoning, long documents, sensitive wording and anything the smaller models got wrong.

Add one escalation rule. The small model goes first. If it says it is unsure, or its output fails a simple check such as a missing amount or an impossible date, the task moves up to the strong model. The strong model then sees only the hard cases.

One caution: smaller models can be weaker on Marathi and on mixed Marathi-English messages. Test each lane on your own real messages before you trust it. If your enquiries arrive through [WhatsApp automation](/services/whatsapp-automation/), the sorting step is a natural place to start.

## Stop paying twice for the same prompt

Repetition costs money in two ways.

The first is repeated questions. A furniture showroom in Kolhapur is asked about timings, delivery areas and EMI options again and again. Write each answer once, have the owner approve it, store it, and send the stored answer without calling any model.

The second is repeated instructions. Every call carries the same long block: your tone, your product list, your rules. Many providers bill this repeated opening text at a lower rate, provided it stays identical. So keep the fixed part at the start, word for word the same, and put the customer's message at the end. **Confirm with your provider** how their caching is billed.

## Measure cost per task, not the monthly bill

A monthly total does not tell you where the money goes. Set up the measurement in this order.

1. List every task type the AI handles: enquiry sorting, invoice reading, reply drafting and so on.
2. Log each call with its task type, the model used, the amount of text in and out, and the cost.
3. Add a column for whether a person had to correct the result.
4. Total by task type, so you can see what one invoice read or one sorted enquiry costs.
5. Move one task type to a cheaper lane, compare cost and corrections against the old numbers, then decide whether to keep the change.

The correction column matters as much as the cost column. A cheap model whose output staff keep fixing is not cheap. A shared sheet is enough to begin, and a small dashboard built as [custom software](/services/custom-software/) helps once the volume grows.

## Keep a person in the loop for anything sent outside

Cheaper models raise a fair worry: what if one gets something wrong in front of a customer?

The rule we follow is simple. Internal work, such as sorting and filing, can run on its own with spot checks. **Anything that leaves the office waits for a person**: a reply to a customer, a quotation, an email to a supplier, a letter to a government department.

The draft sits in a queue with the original message beside it. A staff member reads it, edits if needed and approves. This catches mistakes from any model, strong or small, and it is what makes the cheaper lanes safe to use.

If customer data goes to an outside AI provider, ask your legal advisor which [data protection rules](/blog/dpdp-act-government-software/) apply to you.

## Common questions

### Will a cheaper model give worse answers to my customers?

Not if you match the task to the model and test it on your own data first. Sorting and extraction rarely need a strong model, and anything a customer sees still passes through a person before it goes out. Where the small model struggles, the escalation rule sends that case up.

### Do I need my own server to run a local model?

No, the local lane is optional. You can start by splitting work between a small paid model and a strong one, then add a local model later if your volume is high or your documents are sensitive.

### Which task should I move first?

Move the task that runs most often and has the clearest right answer. In a typical office that is sorting incoming messages or pulling fields from a standard document. It is easy to check, and the change shows up in your cost per task log.

## AI automation from Kingmaker Enterprises, with routing built in

Our [AI automation service](/services/ai-automation/) checks documents, drafts messages, classifies requests and routes work, in Marathi and English. We split the work by task, place each task on the smallest model that passes testing on your own data, and log cost per task so you can see where the money goes. A person approves before anything goes out, and you see a working demo on a free link before any purchase order.

Want a second look at your AI bill and task list? [WhatsApp us on 99751 58770](https://wa.me/919975158770).
