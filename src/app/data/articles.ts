export interface ArticleSection { h?: string; p: string[]; }
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;      // display date
  read: string;      // read time
  intro: string;
  body: ArticleSection[];
}

/** SEO resource articles (English). Rendered at /resources/<slug>. */
export const ARTICLES: Article[] = [
  {
    slug: 'how-much-does-a-home-appraisal-cost-in-canada',
    title: 'How Much Does a Home Appraisal Cost in Canada?',
    description: 'A clear guide to real estate appraisal costs in Canada — typical price ranges for residential, commercial and land appraisals, and what affects the fee.',
    date: 'July 2026',
    read: '4 min read',
    intro: 'If you need a property appraisal in Canada, the first question is usually: what will it cost? Fees vary by property type, location and complexity — here is a practical overview so you know what to expect.',
    body: [
      { h: 'Typical residential appraisal cost', p: [
        'For a standard single-family home, a full appraisal in Canada typically ranges from about $300 to $600. Condominiums are often at the lower end, while larger or rural properties can be higher.',
        'A "drive-by" or desktop appraisal (a more limited scope) can cost less, while a detailed full inspection with a comprehensive report costs more.'] },
      { h: 'Commercial, land and equipment appraisals', p: [
        'Commercial appraisals are more involved and usually start higher — often $1,000 and up, depending on the property type, size and income analysis required.',
        'Land (vacant lot or acreage) and machinery & equipment appraisals are priced case by case, based on size, location and the level of analysis needed.'] },
      { h: 'What affects the price', p: [
        'Property type and size, location (urban vs. rural), complexity, the purpose of the appraisal (mortgage, divorce, estate, capital gains), and how quickly you need it (rush service costs more).',
        'The appraiser’s designation and the type of report (full narrative vs. short form) also affect the fee.'] },
      { h: 'The best way to get an exact price', p: [
        'Because every property is different, the most reliable way to know your cost is to request a free, no-obligation quote. At Appraisal Canada we match you with the right AIC-designated appraiser for your property and give you an exact price up front.'] },
    ],
  },
  {
    slug: 'what-is-a-land-appraisal',
    title: 'What Is a Land Appraisal — and When Do You Need One?',
    description: 'Learn what a land (vacant land) appraisal is, how appraisers value land in Canada, and the common situations where you need one.',
    date: 'July 2026',
    read: '3 min read',
    intro: 'A land appraisal estimates the market value of vacant or undeveloped land. It is different from appraising a house, because there is no building to compare — the value comes from the land itself.',
    body: [
      { h: 'How appraisers value land', p: [
        'Appraisers look at recent sales of comparable parcels, zoning and permitted uses, size and shape, access and services (road, water, hydro), topography, and development potential.',
        'For land with income or development potential, the analysis can be more detailed, factoring in what the land could reasonably be used for.'] },
      { h: 'When you need a land appraisal', p: [
        'Buying or selling vacant land or an acreage; securing financing or a construction loan; estate settlement or dividing assets; capital gains and tax matters; expropriation or a right-of-way; or resolving a dispute.'] },
      { h: 'Getting an accurate land value', p: [
        'Land valuation requires local market knowledge and the right designation. Appraisal Canada connects you with appraisers experienced in land and rural property across the country — request a free quote to get started.'] },
    ],
  },
  {
    slug: 'appraisal-for-divorce-or-estate',
    title: 'Do You Need an Appraisal for a Divorce or Estate Settlement?',
    description: 'Why a professional, legally valid property appraisal matters for divorce, separation of assets and estate settlement in Canada.',
    date: 'July 2026',
    read: '3 min read',
    intro: 'When property is involved in a divorce, separation or estate, everyone needs to agree on a fair, defensible value. A professional appraisal provides exactly that — an unbiased, legally recognized opinion of value.',
    body: [
      { h: 'Divorce and separation of assets', p: [
        'Dividing property fairly starts with knowing what it is worth. A qualified appraiser provides an independent valuation that both parties — and the courts — can rely on, which helps avoid disputes.',
        'In many cases a "retrospective" appraisal is needed (the value as of a specific past date, such as the date of separation).'] },
      { h: 'Estates and probate', p: [
        'Settling an estate often requires a date-of-death or current market value for the property, both for fair distribution among heirs and for tax and probate purposes.'] },
      { h: 'Why "legally valid" matters', p: [
        'For these situations, the report must be prepared by a designated appraiser following the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP), so it is recognized by courts and financial institutions.',
        'Appraisal Canada works only with AIC-designated (AACI & CRA) appraisers, so your report holds up where it counts. Request a free, confidential quote.'] },
    ],
  },
  {
    slug: 'aaci-vs-cra-appraiser-designations',
    title: 'AACI vs CRA: Understanding AIC Appraiser Designations',
    description: 'What the AACI and CRA designations from the Appraisal Institute of Canada mean, and how to choose the right appraiser for your property.',
    date: 'July 2026',
    read: '3 min read',
    intro: 'When you hire an appraiser in Canada, their designation matters. The two main professional designations come from the Appraisal Institute of Canada (AIC): AACI and CRA.',
    body: [
      { h: 'CRA — Canadian Residential Appraiser', p: [
        'The CRA designation focuses on residential property. CRA appraisers are qualified to value individual dwellings such as single-family homes, duplexes and triplexes.'] },
      { h: 'AACI — Accredited Appraiser Canadian Institute', p: [
        'The AACI designation covers a broader range, including complex commercial, industrial, institutional and agricultural property — as well as residential.'] },
      { h: 'CUSPAP standards', p: [
        'Both designations require the appraiser to follow the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP), which is why their reports are recognized by lenders, courts and government bodies.'] },
      { h: 'Choosing the right appraiser', p: [
        'The right choice depends on your property and purpose. Rather than searching yourself, Appraisal Canada selects the appropriately designated appraiser for your specific need — request a free quote and we match you with the right professional.'] },
    ],
  },
];

export const ARTICLE_BY_SLUG: Record<string, Article> =
  ARTICLES.reduce((a, x) => { a[x.slug] = x; return a; }, {} as Record<string, Article>);
