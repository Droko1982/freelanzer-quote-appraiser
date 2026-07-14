export interface CityInfo {
  slug: string;
  name: string;
  nameFr: string;
  nameEs: string;
  prov: string;
  provFr: string;
  provEs: string;
  blurb: string;
  blurbFr: string;
  blurbEs: string;
}

/** Target city markets for local SEO landing pages (/appraisal/<slug>). */
export const CITIES: CityInfo[] = [
  {
    slug: 'ottawa', name: 'Ottawa', nameFr: 'Ottawa', nameEs: 'Ottawa', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'From Centretown and the Glebe to Kanata, Barrhaven and Orléans, we cover condos, single-family homes and commercial property across the National Capital Region.',
    blurbFr: 'De Centretown et du Glebe à Kanata, Barrhaven et Orléans, nous couvrons les condos, les maisons unifamiliales et les propriétés commerciales dans toute la région de la capitale nationale.',
    blurbEs: 'De Centretown y el Glebe a Kanata, Barrhaven y Orléans, cubrimos condominios, casas unifamiliares y propiedades comerciales en toda la región de la capital nacional.',
  },
  {
    slug: 'toronto', name: 'Toronto', nameFr: 'Toronto', nameEs: 'Toronto', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'From downtown condos to homes in North York, Scarborough and Etobicoke, we serve residential and commercial property across the Greater Toronto Area.',
    blurbFr: 'Des condos du centre-ville aux maisons de North York, Scarborough et Etobicoke, nous desservons les propriétés résidentielles et commerciales dans toute la région du Grand Toronto.',
    blurbEs: 'De los condominios del centro a las casas de North York, Scarborough y Etobicoke, atendemos propiedades residenciales y comerciales en toda la región del Gran Toronto.',
  },
  {
    slug: 'mississauga', name: 'Mississauga', nameFr: 'Mississauga', nameEs: 'Mississauga', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'Port Credit, Streetsville, Meadowvale and City Centre — residential and commercial valuations across Peel Region.',
    blurbFr: 'Port Credit, Streetsville, Meadowvale et City Centre — évaluations résidentielles et commerciales dans toute la région de Peel.',
    blurbEs: 'Port Credit, Streetsville, Meadowvale y City Centre — evalúos residenciales y comerciales en toda la región de Peel.',
  },
  {
    slug: 'hamilton', name: 'Hamilton', nameFr: 'Hamilton', nameEs: 'Hamilton', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'From the escarpment and Ancaster to Stoney Creek and Dundas, we appraise homes and commercial property across the city.',
    blurbFr: 'De l’escarpement et d’Ancaster à Stoney Creek et Dundas, nous évaluons maisons et propriétés commerciales dans toute la ville.',
    blurbEs: 'Del escarpe y Ancaster a Stoney Creek y Dundas, evaluamos casas y propiedades comerciales en toda la ciudad.',
  },
  {
    slug: 'london', name: 'London', nameFr: 'London', nameEs: 'London', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'Old North, Byron, Masonville and surrounding Middlesex County — residential and commercial appraisals.',
    blurbFr: 'Old North, Byron, Masonville et le comté de Middlesex — évaluations résidentielles et commerciales.',
    blurbEs: 'Old North, Byron, Masonville y el condado de Middlesex — evalúos residenciales y comerciales.',
  },
  {
    slug: 'kitchener-waterloo', name: 'Kitchener–Waterloo', nameFr: 'Kitchener–Waterloo', nameEs: 'Kitchener–Waterloo', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'Serving Waterloo Region including Cambridge, uptown Waterloo and the surrounding tech corridor.',
    blurbFr: 'Au service de la région de Waterloo, y compris Cambridge, le centre de Waterloo et le corridor technologique environnant.',
    blurbEs: 'Al servicio de la región de Waterloo, incluidos Cambridge, el centro de Waterloo y el corredor tecnológico.',
  },
  {
    slug: 'kingston', name: 'Kingston', nameFr: 'Kingston', nameEs: 'Kingston', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'From historic limestone homes downtown to the west end and CFB Kingston, across Frontenac County.',
    blurbFr: 'Des maisons historiques en pierre calcaire du centre-ville jusqu’à l’ouest et la BFC Kingston, dans tout le comté de Frontenac.',
    blurbEs: 'De las históricas casas de piedra caliza del centro al oeste y la BFC Kingston, en todo el condado de Frontenac.',
  },
  {
    slug: 'barrie', name: 'Barrie', nameFr: 'Barrie', nameEs: 'Barrie', prov: 'Ontario', provFr: 'Ontario', provEs: 'Ontario',
    blurb: 'Simcoe County waterfront, Painswick and the surrounding communities around Lake Simcoe.',
    blurbFr: 'Le bord de l’eau du comté de Simcoe, Painswick et les communautés environnantes autour du lac Simcoe.',
    blurbEs: 'La costa del condado de Simcoe, Painswick y las comunidades alrededor del lago Simcoe.',
  },
  {
    slug: 'montreal', name: 'Montréal', nameFr: 'Montréal', nameEs: 'Montreal', prov: 'Quebec', provFr: 'Québec', provEs: 'Quebec',
    blurb: 'From the Plateau, Westmount and NDG to the West Island and off-island suburbs, in English and French.',
    blurbFr: 'Du Plateau, de Westmount et NDG à l’Ouest-de-l’Île et aux banlieues hors île, en français et en anglais.',
    blurbEs: 'Del Plateau, Westmount y NDG al West Island y los suburbios fuera de la isla, en inglés, francés y español.',
  },
  {
    slug: 'gatineau', name: 'Gatineau', nameFr: 'Gatineau', nameEs: 'Gatineau', prov: 'Quebec', provFr: 'Québec', provEs: 'Quebec',
    blurb: 'Hull, Aylmer and Buckingham — serving the Outaouais just across the river from Ottawa.',
    blurbFr: 'Hull, Aylmer et Buckingham — au service de l’Outaouais, juste de l’autre côté de la rivière face à Ottawa.',
    blurbEs: 'Hull, Aylmer y Buckingham — al servicio de la Outaouais, al otro lado del río frente a Ottawa.',
  },
  {
    slug: 'vancouver', name: 'Vancouver', nameFr: 'Vancouver', nameEs: 'Vancouver', prov: 'British Columbia', provFr: 'Colombie-Britannique', provEs: 'Columbia Británica',
    blurb: 'From the West End and Kitsilano to Burnaby, Richmond and the North Shore across Metro Vancouver.',
    blurbFr: 'Du West End et de Kitsilano à Burnaby, Richmond et la Rive-Nord, dans tout le Grand Vancouver.',
    blurbEs: 'Del West End y Kitsilano a Burnaby, Richmond y la North Shore, en todo el Gran Vancouver.',
  },
  {
    slug: 'calgary', name: 'Calgary', nameFr: 'Calgary', nameEs: 'Calgary', prov: 'Alberta', provFr: 'Alberta', provEs: 'Alberta',
    blurb: 'From the inner city and Beltline to the suburbs across the Bow Valley and surrounding area.',
    blurbFr: 'Du centre-ville et du Beltline aux banlieues, dans la vallée de la Bow et les environs.',
    blurbEs: 'Del centro y el Beltline a los suburbios en el valle del Bow y alrededores.',
  },
  {
    slug: 'edmonton', name: 'Edmonton', nameFr: 'Edmonton', nameEs: 'Edmonton', prov: 'Alberta', provFr: 'Alberta', provEs: 'Alberta',
    blurb: 'Downtown, Old Strathcona and communities across the capital region of Alberta.',
    blurbFr: 'Le centre-ville, Old Strathcona et les communautés de la région de la capitale de l’Alberta.',
    blurbEs: 'El centro, Old Strathcona y las comunidades de la región capital de Alberta.',
  },
  {
    slug: 'winnipeg', name: 'Winnipeg', nameFr: 'Winnipeg', nameEs: 'Winnipeg', prov: 'Manitoba', provFr: 'Manitoba', provEs: 'Manitoba',
    blurb: 'From River Heights and Tuxedo to the suburbs across the city and surrounding Manitoba.',
    blurbFr: 'De River Heights et Tuxedo aux banlieues de la ville et aux environs au Manitoba.',
    blurbEs: 'De River Heights y Tuxedo a los suburbios de la ciudad y los alrededores de Manitoba.',
  },
  {
    slug: 'halifax', name: 'Halifax', nameFr: 'Halifax', nameEs: 'Halifax', prov: 'Nova Scotia', provFr: 'Nouvelle-Écosse', provEs: 'Nueva Escocia',
    blurb: 'The peninsula, Dartmouth, Bedford and the surrounding Halifax Regional Municipality.',
    blurbFr: 'La péninsule, Dartmouth, Bedford et la municipalité régionale d’Halifax environnante.',
    blurbEs: 'La península, Dartmouth, Bedford y la municipalidad regional de Halifax.',
  },
];

export const CITY_BY_SLUG: Record<string, CityInfo> =
  CITIES.reduce((acc, c) => { acc[c.slug] = c; return acc; }, {} as Record<string, CityInfo>);
