export interface CityInfo {
  slug: string;
  name: string;
  nameFr: string;
  prov: string;
  provFr: string;
  blurb: string;
  blurbFr: string;
}

/** Target city markets for local SEO landing pages (/appraisal/<slug>). */
export const CITIES: CityInfo[] = [
  {
    slug: 'ottawa', name: 'Ottawa', nameFr: 'Ottawa', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'From Centretown and the Glebe to Kanata, Barrhaven and Orléans, we cover condos, single-family homes and commercial property across the National Capital Region.',
    blurbFr: 'De Centretown et du Glebe à Kanata, Barrhaven et Orléans, nous couvrons les condos, les maisons unifamiliales et les propriétés commerciales dans toute la région de la capitale nationale.',
  },
  {
    slug: 'toronto', name: 'Toronto', nameFr: 'Toronto', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'From downtown condos to homes in North York, Scarborough and Etobicoke, we serve residential and commercial property across the Greater Toronto Area.',
    blurbFr: 'Des condos du centre-ville aux maisons de North York, Scarborough et Etobicoke, nous desservons les propriétés résidentielles et commerciales dans toute la région du Grand Toronto.',
  },
  {
    slug: 'mississauga', name: 'Mississauga', nameFr: 'Mississauga', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'Port Credit, Streetsville, Meadowvale and City Centre — residential and commercial valuations across Peel Region.',
    blurbFr: 'Port Credit, Streetsville, Meadowvale et City Centre — évaluations résidentielles et commerciales dans toute la région de Peel.',
  },
  {
    slug: 'hamilton', name: 'Hamilton', nameFr: 'Hamilton', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'From the escarpment and Ancaster to Stoney Creek and Dundas, we appraise homes and commercial property across the city.',
    blurbFr: 'De l’escarpement et d’Ancaster à Stoney Creek et Dundas, nous évaluons maisons et propriétés commerciales dans toute la ville.',
  },
  {
    slug: 'london', name: 'London', nameFr: 'London', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'Old North, Byron, Masonville and surrounding Middlesex County — residential and commercial appraisals.',
    blurbFr: 'Old North, Byron, Masonville et le comté de Middlesex — évaluations résidentielles et commerciales.',
  },
  {
    slug: 'kitchener-waterloo', name: 'Kitchener–Waterloo', nameFr: 'Kitchener–Waterloo', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'Serving Waterloo Region including Cambridge, uptown Waterloo and the surrounding tech corridor.',
    blurbFr: 'Au service de la région de Waterloo, y compris Cambridge, le centre de Waterloo et le corridor technologique environnant.',
  },
  {
    slug: 'kingston', name: 'Kingston', nameFr: 'Kingston', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'From historic limestone homes downtown to the west end and CFB Kingston, across Frontenac County.',
    blurbFr: 'Des maisons historiques en pierre calcaire du centre-ville jusqu’à l’ouest et la BFC Kingston, dans tout le comté de Frontenac.',
  },
  {
    slug: 'barrie', name: 'Barrie', nameFr: 'Barrie', prov: 'Ontario', provFr: 'Ontario',
    blurb: 'Simcoe County waterfront, Painswick and the surrounding communities around Lake Simcoe.',
    blurbFr: 'Le bord de l’eau du comté de Simcoe, Painswick et les communautés environnantes autour du lac Simcoe.',
  },
  {
    slug: 'montreal', name: 'Montréal', nameFr: 'Montréal', prov: 'Quebec', provFr: 'Québec',
    blurb: 'From the Plateau, Westmount and NDG to the West Island and off-island suburbs, in English and French.',
    blurbFr: 'Du Plateau, de Westmount et NDG à l’Ouest-de-l’Île et aux banlieues hors île, en français et en anglais.',
  },
  {
    slug: 'gatineau', name: 'Gatineau', nameFr: 'Gatineau', prov: 'Quebec', provFr: 'Québec',
    blurb: 'Hull, Aylmer and Buckingham — serving the Outaouais just across the river from Ottawa.',
    blurbFr: 'Hull, Aylmer et Buckingham — au service de l’Outaouais, juste de l’autre côté de la rivière face à Ottawa.',
  },
  {
    slug: 'vancouver', name: 'Vancouver', nameFr: 'Vancouver', prov: 'British Columbia', provFr: 'Colombie-Britannique',
    blurb: 'From the West End and Kitsilano to Burnaby, Richmond and the North Shore across Metro Vancouver.',
    blurbFr: 'Du West End et de Kitsilano à Burnaby, Richmond et la Rive-Nord, dans tout le Grand Vancouver.',
  },
  {
    slug: 'calgary', name: 'Calgary', nameFr: 'Calgary', prov: 'Alberta', provFr: 'Alberta',
    blurb: 'From the inner city and Beltline to the suburbs across the Bow Valley and surrounding area.',
    blurbFr: 'Du centre-ville et du Beltline aux banlieues, dans la vallée de la Bow et les environs.',
  },
  {
    slug: 'edmonton', name: 'Edmonton', nameFr: 'Edmonton', prov: 'Alberta', provFr: 'Alberta',
    blurb: 'Downtown, Old Strathcona and communities across the capital region of Alberta.',
    blurbFr: 'Le centre-ville, Old Strathcona et les communautés de la région de la capitale de l’Alberta.',
  },
  {
    slug: 'winnipeg', name: 'Winnipeg', nameFr: 'Winnipeg', prov: 'Manitoba', provFr: 'Manitoba',
    blurb: 'From River Heights and Tuxedo to the suburbs across the city and surrounding Manitoba.',
    blurbFr: 'De River Heights et Tuxedo aux banlieues de la ville et aux environs au Manitoba.',
  },
  {
    slug: 'halifax', name: 'Halifax', nameFr: 'Halifax', prov: 'Nova Scotia', provFr: 'Nouvelle-Écosse',
    blurb: 'The peninsula, Dartmouth, Bedford and the surrounding Halifax Regional Municipality.',
    blurbFr: 'La péninsule, Dartmouth, Bedford et la municipalité régionale d’Halifax environnante.',
  },
];

export const CITY_BY_SLUG: Record<string, CityInfo> =
  CITIES.reduce((acc, c) => { acc[c.slug] = c; return acc; }, {} as Record<string, CityInfo>);
