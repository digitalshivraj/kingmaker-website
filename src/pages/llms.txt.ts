import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { projects, sectors, sectorNames } from '../data/portfolio';
import { byLang, entrySlug } from '../i18n/utils';

export const GET: APIRoute = async () => {
  const base = site.url;
  const services = byLang(await getCollection('services'), 'en').sort((a, b) => a.data.order - b.data.order);
  const products = byLang(await getCollection('products'), 'en').sort((a, b) => a.data.order - b.data.order);
  const posts = byLang(await getCollection('blog'), 'en').sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const mrPosts = byLang(await getCollection('blog'), 'mr');

  const lines: string[] = [
    `# ${site.name} (${site.marathiName})`,
    '',
    `> Software, web portals, mobile apps, WhatsApp automation and AI systems for government offices, police departments, hospitals, political organisations and businesses in Maharashtra, India. Registered proprietorship in Parbhani since ${site.since} (Udyam ${site.udyam}, GSTIN ${site.gstin}). Builds in Marathi and English, demonstrates on a free link before payment, hosts in India. Services can be procured by government departments through the Government e-Marketplace (GeM) or a departmental work order.`,
    '',
    `- Website: ${base}/ (English) and ${base}/mr/ (Marathi)`,
    `- Contact: ${site.email}, WhatsApp ${site.phoneDisplay} (${site.whatsapp})`,
    `- Address: ${site.address}`,
    `- Proprietor: ${site.proprietor}`,
    `- Hours: ${site.hours}`,
    '',
    '## Services',
    '',
    ...services.map((s) => `- [${s.data.title}](${base}/services/${entrySlug(s.id)}/): ${s.data.summary}`),
    '',
    '## Products (ready platforms)',
    '',
    ...products.map((p) => `- [${p.data.title}](${base}/products/${entrySlug(p.id)}/): ${p.data.tagline} Status: ${p.data.status}.`),
    '',
    '## All projects by sector',
    '',
    ...sectors.flatMap((sec) => [
      `### ${sectorNames[sec].en}`,
      ...projects.filter((p) => p.sector === sec).map((p) => `- ${p.name}${p.marathi ? ` (${p.marathi})` : ''}: ${p.summary} Status: ${p.status}.`),
      '',
    ]),
    '## Government and GeM',
    '',
    `- [For government departments](${base}/government/): vendor details, documents, procurement process and data protection commitments.`,
    '',
    '## Articles',
    '',
    ...posts.map((p) => `- [${p.data.title}](${base}/blog/${entrySlug(p.id)}/): ${p.data.description}`),
    '',
    '## Marathi pages',
    '',
    `- [मुख्य पान](${base}/mr/)`,
    `- [सेवा](${base}/mr/services/)`,
    `- [उत्पादने](${base}/mr/products/)`,
    `- [शासकीय विभागांसाठी](${base}/mr/government/)`,
    `- [संपर्क](${base}/mr/contact/)`,
    ...mrPosts.map((p) => `- [${p.data.title}](${base}/mr/blog/${entrySlug(p.id)}/)`),
    '',
    '## Other',
    '',
    `- [About](${base}/about/)`,
    `- [Contact](${base}/contact/)`,
    `- [Sitemap](${base}/sitemap-index.xml)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
