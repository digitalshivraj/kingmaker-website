export type Lang = 'en' | 'mr';
export const langs: Lang[] = ['en', 'mr'];

export function localize(path: string, lang: Lang) {
  const clean = path.replace(/^\/mr(?=\/|$)/, '') || '/';
  return lang === 'mr' ? `/mr${clean === '/' ? '/' : clean}` : clean;
}

export function stripLang(path: string) {
  return path.replace(/^\/mr(?=\/|$)/, '') || '/';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'mr' : 'en';
}

export function entrySlug(id: string) {
  return id.replace(/^(en|mr)\//, '');
}

export function byLang<T extends { id: string }>(entries: T[], lang: Lang) {
  return entries.filter((e) => e.id.startsWith(`${lang}/`));
}

const locale = (lang: Lang) => (lang === 'mr' ? 'mr-IN-u-nu-latn' : 'en-IN');

export function fmtDate(d: Date, lang: Lang) {
  return d.toLocaleDateString(locale(lang), { day: 'numeric', month: 'long', year: 'numeric' });
}

export function fmtDateShort(d: Date, lang: Lang) {
  return d.toLocaleDateString(locale(lang), { day: 'numeric', month: 'short', year: 'numeric' });
}

export const htmlLang: Record<Lang, string> = { en: 'en', mr: 'mr' };
export const ogLocale: Record<Lang, string> = { en: 'en_IN', mr: 'mr_IN' };
