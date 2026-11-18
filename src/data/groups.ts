// How services are grouped in the menu, on the services page and in filters.
export const serviceGroups: [string, string[]][] = [
  ['build', ['custom-software', 'mobile-apps', 'websites-seo', 'data-document-systems', 'brand-design']],
  ['automate', ['whatsapp-automation', 'ai-automation', 'digital-marketing']],
  ['public', ['government-projects', 'election-technology', 'hosting-maintenance', 'security-compliance']],
];

export const groupOf = (slug: string) => serviceGroups.find(([, slugs]) => slugs.includes(slug))?.[0] ?? 'build';

/** Blog topic filters (matched on the English tags, so Marathi posts sort the same way). */
export const newsCats = ['all', 'gov', 'health', 'biz'] as const;
export function postCats(tags: string[]): string[] {
  const cats: string[] = [];
  if (tags.some((tg) => ['Police', 'Government', 'Political offices', 'Elections', 'Citizen services', 'Agriculture'].includes(tg))) cats.push('gov');
  if (tags.some((tg) => ['Healthcare', 'Hospitals'].includes(tg))) cats.push('health');
  if (!cats.length || tags.some((tg) => ['Small business', 'Logistics', 'AI', 'AI search', 'Automation', 'Lead generation', 'SEO', 'Websites', 'WhatsApp'].includes(tg))) cats.push('biz');
  return cats;
}
