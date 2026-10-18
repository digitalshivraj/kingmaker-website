export type Sector =
  | 'Government and police'
  | 'Political and elections'
  | 'Healthcare'
  | 'Agriculture and rural'
  | 'Business and logistics'
  | 'Finance and trading'
  | 'Marketing and AI'
  | 'Websites and brands'
  | 'Tools and utilities';

export interface Project {
  name: string;
  marathi?: string;
  sector: Sector;
  summary: string;
  stack?: string;
  status: 'Live' | 'Pilot' | 'Demo ready' | 'In build' | 'Planned';
  product?: string;
}

export const projects: Project[] = [
  {
    name: 'Maha-Stay 360',
    marathi: 'महा-स्टे 360',
    sector: 'Government and police',
    summary: 'Digital guest register for lodges and hotels with live visibility for police stations and the district SP. ID capture, missing-ID flags, night reports.',
    stack: 'Web app, Marathi and English UI, Supabase',
    status: 'Demo ready',
    product: 'maha-stay-360',
  },
  {
    name: 'Social media and rumour monitoring',
    marathi: 'अफवा मॉनिटरिंग प्रणाली',
    sector: 'Government and police',
    summary: 'District-level monitoring of Marathi and Minglish posts for rumours, sentiment and early warnings, with a daily cyber bulletin for the SP office.',
    stack: 'AI classification, dashboards, alerts',
    status: 'Planned',
  },
  {
    name: 'Parichay',
    marathi: 'परिचय',
    sector: 'Government and police',
    summary: 'Student ID card data collection, AI photo quality check and print-ready card generation for PM SHRI schools across 20 districts of Bihar.',
    stack: 'Next.js, Supabase, AI vision QC, PDF print packs',
    status: 'Live',
    product: 'parichay',
  },
  {
    name: 'JanSeva',
    marathi: 'जनसेवा',
    sector: 'Political and elections',
    summary: 'Citizen app and office dashboard for MLA and MP offices and Nagar Parishads: grievances, appointment requests, scheme help, events and follow-up.',
    stack: 'PWA citizen app, admin dashboard, multi-tenant',
    status: 'Demo ready',
    product: 'janseva',
  },
  {
    name: 'Sanghatan',
    marathi: 'संघटन',
    sector: 'Political and elections',
    summary: 'Party organisation and campaign platform: war room dashboard, booth-wise committee wall, karyakarta app with feed, membership, party fund and grievance chatbot.',
    stack: 'Mobile-first app, dashboard, role-based access',
    status: 'Demo ready',
    product: 'sanghatan',
  },
  {
    name: 'Chanakya election management',
    marathi: 'चाणक्य',
    sector: 'Political and elections',
    summary: 'Campaign cadre app with daily content feed, birthday cards, DP frames, booth committee tracking and panna-wise voter list management built for DPDP and ECI rules.',
    stack: 'React Native, Supabase, n8n',
    status: 'Demo ready',
  },
  {
    name: 'Padvidhar voter app',
    marathi: 'पदवीधर मतदार ॲप',
    sector: 'Political and elections',
    summary: 'Voter handling app for the graduates (MLC) electoral roll across 8 districts: roll import, matching with contact data, booth and follow-up tracking.',
    stack: 'Data matching pipeline, mobile app',
    status: 'In build',
  },
  {
    name: 'Hospital management system',
    marathi: 'हॉस्पिटल मॅनेजमेंट सिस्टीम',
    sector: 'Healthcare',
    summary: 'OPD tokens, prescriptions, pharmacy, lab, billing, nursing and IPD for clinics and 50-plus bed hospitals, sold as a low-cost monthly subscription.',
    stack: 'Mobile-first web app, WhatsApp booking number',
    status: 'Demo ready',
    product: 'hospital-management-system',
  },
  {
    name: 'Devdoot',
    marathi: 'देवदूत',
    sector: 'Healthcare',
    summary: 'Doctor booking and patient waiting-queue platform: patients book OPD tokens from their phone, clinics manage the queue, WhatsApp updates built in.',
    stack: 'Web app, in-house WhatsApp automation',
    status: 'In build',
    product: 'devdoot',
  },
  {
    name: 'CareSync',
    sector: 'Healthcare',
    summary: 'Medication companion app for seniors: prescription scanning, reminders and a care circle so family members can follow along.',
    stack: 'PWA, Firebase',
    status: 'Live',
  },
  {
    name: 'Shatayu Ayurved Hospital website',
    sector: 'Healthcare',
    summary: 'Bilingual Marathi and English hospital website with enquiry capture, WhatsApp fallback, schema data and ad-tracking ready for campaigns.',
    stack: 'Single-file site, CRM webhook',
    status: 'Live',
  },
  {
    name: 'Tricos',
    sector: 'Healthcare',
    summary: 'Two-sided marketplace where hair transplant clinics bid for patient cases through a reverse auction.',
    stack: 'Web platform',
    status: 'Demo ready',
  },
  {
    name: 'Looks Studio CRM',
    sector: 'Healthcare',
    summary: 'Lead and patient CRM prototype for a hair transplant clinic chain handling more than 1.3 lakh leads across branches.',
    stack: 'CRM, lead routing',
    status: 'Demo ready',
  },
  {
    name: 'Anudan Sarathi',
    marathi: 'अनुदान सारथी',
    sector: 'Agriculture and rural',
    summary: 'Subsidy application tracking for sprinkler dealers under PoCRA: village camps, document stages, WhatsApp updates to farmers and five staff roles.',
    stack: 'Web portal, Supabase, WhatsApp',
    status: 'Pilot',
    product: 'anudan-sarathi',
  },
  {
    name: 'Lendy Manyad Foundation chatbot and site',
    sector: 'Agriculture and rural',
    summary: 'Marathi WhatsApp chatbot for an NGO (scheme help, member registration, volunteers), a Marathi ID card generator and the foundation website.',
    stack: 'Meta Cloud API, n8n, Supabase',
    status: 'Live',
  },
  {
    name: 'Mahima One',
    sector: 'Business and logistics',
    summary: 'Franchise logistics platform for a packers and movers company: bookings, tracking, franchise panels and a head-office super admin, hosted on the client VPS.',
    stack: 'Web platform, VPS deployment',
    status: 'Live',
    product: 'mahima-one',
  },
  {
    name: 'Muzaffarpur property platform',
    sector: 'Business and logistics',
    summary: 'Real estate marketplace and sales CRM: buyer portal, field-team listing intake and a lead engine with campaign attribution.',
    stack: 'Web platform, CRM',
    status: 'Demo ready',
  },
  {
    name: 'Payment and party ledger',
    sector: 'Business and logistics',
    summary: 'Payment tracker and party ledger for small businesses with bank reconciliation and Tally export for the accountant.',
    stack: 'Web app, Tally XML export',
    status: 'Planned',
  },
  {
    name: 'Employee document portal',
    sector: 'Business and logistics',
    summary: 'One WhatsApp link that collects staff KYC documents (Aadhaar, PAN, cheque, photo, marksheet, EPF Form 11) into an organised folder.',
    stack: 'Web form, cloud storage',
    status: 'Live',
  },
  {
    name: 'Gem Items store',
    sector: 'Business and logistics',
    summary: 'Shopify store setup with supplier integration for a dropshipping business, including catalogue, checkout and ads tracking.',
    stack: 'Shopify',
    status: 'Live',
  },
  {
    name: 'NIRYAT customs copilot',
    sector: 'Business and logistics',
    summary: 'AI-assisted customs filing copilot built on the ICEGATE Open API, with a framework for customs service provider accreditation.',
    stack: 'ICEGATE API, AI assistance',
    status: 'Demo ready',
  },
  {
    name: 'PropDesk',
    sector: 'Finance and trading',
    summary: 'Prop-firm management CRM: trader challenges, funded accounts, payouts, support tickets and admin controls.',
    stack: 'Web app, role-based logins',
    status: 'Demo ready',
  },
  {
    name: 'Broker back-office CRM',
    sector: 'Finance and trading',
    summary: 'Forex broker CRM covering client and MT5 account management, IB structures, bonuses, transactions, tickets and reports.',
    stack: 'Web app, dark command-deck UI',
    status: 'Demo ready',
  },
  {
    name: 'TradeHub',
    sector: 'Finance and trading',
    summary: 'All-in-one trader super app built with a broker partner: accounts, signals, journal and education in one place.',
    stack: 'Mobile-first web app',
    status: 'In build',
  },
  {
    name: 'MT5 Relay',
    sector: 'Finance and trading',
    summary: 'TradingView-to-MetaTrader 5 signal bridge so alerts place trades automatically, with risk controls and logs.',
    stack: 'Bridge service, MT5',
    status: 'In build',
  },
  {
    name: 'MetaTrader broker plugins',
    sector: 'Finance and trading',
    summary: 'Server-side MT4 and MT5 plugins for brokers: risk rules, account automation and reporting.',
    stack: 'MetaQuotes server API',
    status: 'Planned',
  },
  {
    name: 'Citeloop',
    sector: 'Marketing and AI',
    summary: 'Multi-client SEO, AEO and GEO delivery platform: asset register, audit engine, work log, reporting and AI-search visibility tracking.',
    stack: 'Multi-tenant SaaS',
    status: 'In build',
  },
  {
    name: 'Headliner',
    sector: 'Marketing and AI',
    summary: 'Compliance-gated AI cold-outreach pipeline for a healthcare client: lead ingestion, AI copywriting, compliance checks and sending.',
    stack: 'n8n, Supabase, Claude models, Instantly',
    status: 'Live',
  },
  {
    name: 'OutreachOS',
    sector: 'Marketing and AI',
    summary: 'Multi-agent outreach system (scout, copywriter, compliance agent with veto) built for a global hackathon, with a public demo.',
    stack: 'Multi-agent, Streamlit',
    status: 'Live',
  },
  {
    name: 'Kasauti lead firewall',
    marathi: 'कसोटी',
    sector: 'Marketing and AI',
    summary: 'Lead qualification firewall and verified appointment engine for businesses running lead ads, so sales teams only call real, interested leads.',
    stack: 'Self-serve SaaS',
    status: 'Planned',
  },
  {
    name: 'Multi-LLM router',
    sector: 'Marketing and AI',
    summary: 'Low-cost routing layer that sends each AI task to a local model, Claude, Gemini or free tiers based on need, cutting token spend.',
    stack: 'LiteLLM style proxy',
    status: 'In build',
  },
  {
    name: 'Ads management for clinics, packers and a UK cleaning firm',
    sector: 'Marketing and AI',
    summary: 'Google, Meta and TikTok campaigns with lead-quality tracking for an aesthetic clinic chain, packers and movers, and a Birmingham canopy-cleaning company.',
    stack: 'Google Ads, Meta Ads, TikTok Ads, WATI broadcasts',
    status: 'Live',
  },
  {
    name: 'Astra Global',
    sector: 'Websites and brands',
    summary: 'Parent-led child development coaching dashboard with structured programmes and progress tracking.',
    stack: 'Web app',
    status: 'Live',
  },
  {
    name: "Minky's brand and online presence",
    sector: 'Websites and brands',
    summary: 'Complete brand identity, packaging direction and online presence for a food and snacks company.',
    stack: 'Brand system, website, social',
    status: 'In build',
  },
  {
    name: 'Maa Santoshi Packers and Movers identity',
    sector: 'Websites and brands',
    summary: 'Logo, stationery and brand identity for a Patna packers and movers business.',
    stack: 'Brand identity',
    status: 'Live',
  },
  {
    name: 'Mahima Packers website audit and ads',
    sector: 'Websites and brands',
    summary: 'Full launch audit (technical SEO, GEO, UX, legal, accessibility) with a phased action plan, followed by site changes and ad setup.',
    stack: 'SEO audit, Google Ads',
    status: 'Live',
  },
  {
    name: 'PDF text editor',
    sector: 'Tools and utilities',
    summary: 'Edit text inside any PDF while keeping the original font, with bulk find-and-replace across many files.',
    stack: 'FastAPI, PyMuPDF',
    status: 'Live',
  },
  {
    name: 'Marathi ID card and print pipelines',
    sector: 'Tools and utilities',
    summary: 'Automated generation of Marathi ID cards, certificates and one-school-one-PDF print packs from spreadsheet data.',
    stack: 'Python, HarfBuzz, PDF',
    status: 'Live',
  },
];

export const sectors: Sector[] = [
  'Government and police',
  'Political and elections',
  'Healthcare',
  'Agriculture and rural',
  'Business and logistics',
  'Finance and trading',
  'Marketing and AI',
  'Websites and brands',
  'Tools and utilities',
];

export const canBuild = [
  { name: 'Housing society management', note: 'Maintenance billing, complaints, notices, visitor log, owner groups.' },
  { name: 'School and college ERP', note: 'Admissions, fees, attendance, ID cards, parent WhatsApp updates.' },
  { name: 'Temple and trust management', note: 'Donations with receipts, events, member records, compliance registers.' },
  { name: 'Hotel and lodge management', note: 'Rooms, guest register, billing, police reporting built in.' },
  { name: 'Dealer and distributor CRM', note: 'Orders, schemes, subsidy tracking, field staff reporting.' },
  { name: 'Inventory and billing', note: 'GST invoices, stock, purchase, Tally export.' },
  { name: 'NGO and foundation systems', note: 'Member registration, volunteer management, scheme help, chatbots.' },
  { name: 'Government MIS and reporting', note: 'Department dashboards, daily reports, tender and scheme tracking.' },
  { name: 'E-commerce store setup', note: 'Shopify or custom store, payments, delivery and ads tracking.' },
  { name: 'Clinic and diagnostic lab software', note: 'Appointments, reports delivery on WhatsApp, billing.' },
  { name: 'Packers, movers and transport', note: 'Bookings, tracking, franchise and fleet panels.' },
  { name: 'Farmer and agri platforms', note: 'Scheme tracking, procurement, advisory in Marathi.' },
];
