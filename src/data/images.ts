// Photos are served from the Pexels CDN (free licence, no attribution required).
// To replace one with your own photo: put the file in public/images/ and set `src` to its path.

export interface Photo {
  id: number;
  alt: string;
}

export const photos = {
  hero: { id: 4267530, alt: 'Police officers working at computers in a control room' },
  police: { id: 30223365, alt: 'A police officer in khaki checking his phone on a rural road' },
  policeTeam: { id: 13062239, alt: 'A police officer standing beside a patrol vehicle' },
  citizen: { id: 17595470, alt: 'A woman in a saree using a smartphone' },
  meeting: { id: 16100484, alt: 'A crowd of people gathered under a tent at a public meeting' },
  villageMeeting: { id: 37495850, alt: 'Villagers sitting together under a tree for a meeting' },
  farmer: { id: 13554753, alt: 'A farmer standing in a green field holding a phone' },
  farmerRoad: { id: 20527373, alt: 'A woman farmer leading cattle on a countryside road' },
  doctor: { id: 6129444, alt: 'A doctor discussing a health record with a patient' },
  doctorHall: { id: 6129104, alt: 'A doctor reviewing charts in a hospital corridor' },
  nurses: { id: 31499386, alt: 'Two nurses discussing patient notes in a hospital corridor' },
  pharmacy: { id: 14797855, alt: 'A pharmacist checking medicines on a shelf' },
  school: { id: 18012456, alt: 'School children in uniform sitting in a classroom' },
  movers: { id: 20706506, alt: 'Movers loading boxes into a truck' },
  truck: { id: 20922619, alt: 'A goods truck on an Indian highway' },
  town: { id: 5191671, alt: 'A busy street in a small Indian town' },
  government: { id: 5548399, alt: 'The Secretariat buildings in New Delhi' },
  team: { id: 16323394, alt: 'Two young professionals working on laptops' },
  developer: { id: 36706459, alt: 'A software developer working on two monitors' },
  road: { id: 38065657, alt: 'A curved road through the countryside of Amravati, Maharashtra' },
  hotel: { id: 7820326, alt: 'A guest checking in at a hotel reception with a phone and passport' },
  whatsapp: { id: 4132538, alt: 'A hand holding a phone with WhatsApp open' },
  security: { id: 4973899, alt: 'A laptop showing a padlock icon on its screen' },
  papers: { id: 34568328, alt: 'Tall stacks of bound paper files in an office' },
  search: { id: 16368540, alt: 'A laptop with a search engine open' },
  typing: { id: 14706181, alt: 'Hands typing on a laptop at a desk' },
  coding: { id: 5475752, alt: 'Hands typing code on a laptop' },
  binders: { id: 17018372, alt: 'Ring binders and documents on a shelf' },
  phoneWoman: { id: 3924870, alt: 'A young woman with glasses using a smartphone' },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export function px(id: number, w: number, h: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;
}
