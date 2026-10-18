export const site = {
  name: 'Kingmaker Enterprises',
  marathiName: 'किंगमेकर एंटरप्रायझेस',
  legalName: 'Kingmaker Enterprises (Proprietor: Swapnil Dilip Byale)',
  proprietor: 'Swapnil Dilip Byale',
  tagline: 'Software for government offices, hospitals and growing businesses in Maharashtra',
  url: 'https://kingmakerenterprises.in',
  email: 'contact@kingmakerenterprises.in',
  phoneDisplay: '99751 58770',
  phoneIntl: '+919975158770',
  whatsapp: 'https://wa.me/919975158770',
  address: 'Parbhani (registered office) and Pune, Maharashtra',
  addressMarathi: 'परभणी (नोंदणीकृत कार्यालय) आणि पुणे, महाराष्ट्र',
  udyam: 'UDYAM-MH-25-0009665',
  gstin: '27CIBPB3085M3Z4',
  shopAct: '2642000321593482',
  since: 2019,
  hours: 'Monday to Saturday, 10 am to 7 pm',
};

export function whatsappLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
