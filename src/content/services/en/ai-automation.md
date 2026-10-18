---
title: AI automation and agents
marathi: एआय ऑटोमेशन
summary: AI that checks documents, drafts messages, classifies requests and routes work, always with a person approving before anything goes out.
photo: coding
order: 4
icon: spark
deliverables:
  - AI quality checks on photos, documents and data entry
  - Classification of complaints, posts and leads in Marathi and English
  - Drafting and summarising with human approval gates
  - Multi-model routing to keep AI costs low
  - Workflow automation with n8n connected to your existing tools
forWhom:
  - Departments processing thousands of records or photos
  - Marketing and sales teams handling leads and outreach
  - Police and civic offices monitoring public information
---

## Practical AI, not demos

We use AI where it removes a bottleneck: a model that checks 20,000 student photos for blur and framing, a classifier that sorts citizen complaints by department, a writer that drafts outreach emails that a human then approves.

## Our rule

Every AI system we build is a copilot with a mandatory human approval gate. The AI prepares, a person decides. This keeps the output trustworthy and keeps you compliant.

## What we have built

- Vision quality control in a state-wide ID card pipeline
- A compliance-gated outreach pipeline (scout, copywriter, compliance check with veto)
- A multi-agent outreach system built for a global hackathon
- A routing layer that sends each task to a local model, Claude, Gemini or free tiers to cut token spend
- Rumour and sentiment monitoring for district police (in development)

## Tools we use

Claude and Gemini models, local open models where data must not leave your server, n8n for workflows, Postgres with vector search for your own documents.
