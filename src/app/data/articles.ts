export interface ArticleSection { h?: string; p: string[]; }
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;      // display date
  iso?: string;      // ISO-8601 date for Article structured data (datePublished)
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
    iso: '2026-07-15',
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
    iso: '2026-07-15',
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
    iso: '2026-07-15',
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
    iso: '2026-07-15',
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
  {
    slug: 'appraisal-vs-home-inspection',
    title: "Appraisal vs. Home Inspection: What Is the Difference?",
    description: "An appraisal is an opinion of market value by an AIC-designated appraiser; a home inspection assesses condition. Learn when you need each in Canada.",
    date: 'August 2026',
    iso: '2026-08-10',
    read: "4 min read",
    intro: "Buyers, lawyers and homeowners often use \"appraisal\" and \"home inspection\" interchangeably, but the two answer completely different questions. An appraisal asks what a property is worth; a home inspection asks what physical condition it is in. Knowing which one your situation calls for — and who orders and pays for it — saves time, money and missed deadlines.",
    body: [
      { h: "Value versus condition: two different questions", p: [
        "An appraisal is an independent, unbiased opinion of market value for a defined property, as of a specific effective date. In Canada it is prepared by an appraiser designated by the Appraisal Institute of Canada (AIC) — either AACI (Accredited Appraiser Canadian Institute) or CRA (Canadian Residential Appraiser) — working under the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP). Every report names its intended use and intended user: a lender, a court, an executor, a tax filing.",
        "A home inspection is a visual, largely non-invasive examination of a building's physical condition — roof covering, foundation and structure, electrical, plumbing, heating and cooling, insulation and ventilation. The inspector reports what is worn, unsafe or nearing the end of its service life, and what a specialist should look at further. Licensing rules for home inspectors vary by province, so confirm an inspector's credentials before hiring.",
        "An appraiser observes condition only insofar as it affects value, and does not test systems or open up finished areas. An appraisal is no substitute for an inspection — and an inspection will never tell you what a property is worth."] },
      { h: "Who orders each one, and who pays", p: [
        "For a mortgage or refinance, the lender normally orders the appraisal, directly or through an appraisal management company, because it is the intended user and needs to understand the security behind the loan. The borrower frequently pays the fee, but paying for a report does not make you its client — the appraiser's duty runs to the party named in it. Some lenders waive the appraisal on straightforward, low-risk files and rely on an automated valuation instead.",
        "In private and legal matters — separation, an estate, capital gains, a tax appeal, expropriation, relocation — you engage the appraiser directly, usually on a lawyer's or accountant's advice, and you are the client.",
        "A home inspection is almost always arranged and paid for by the buyer, within the condition period of a purchase agreement, though some sellers commission a pre-listing inspection. For a standard house both services commonly fall in the low hundreds of dollars, with complex, rural or commercial properties considerably higher."] },
      { h: "What each report actually contains", p: [
        "An appraisal report describes the property, its site and neighbourhood, zoning and permitted use, then applies recognized approaches to value — most often direct comparison for homes, supported by the cost or income approach where relevant. It sets out the comparable sales and adjustments relied on, the effective date of value, the scope of work, assumptions and limiting conditions, and a signed certification naming the appraiser and their designation.",
        "An inspection report is organized by system and component, usually with photographs of deficiencies, notes on safety concerns, and recommendations to repair, monitor or investigate further. It contains no opinion of market value and no comparable sales, and no lender or court would accept it as a valuation."] },
      { h: "A note of caution: \"CRA\" means two different things", p: [
        "In appraisal, CRA is the Canadian Residential Appraiser designation granted by the Appraisal Institute of Canada. CRA-designated members are qualified to value residential dwellings of up to four units and residential building sites. AACI is broader, covering commercial, industrial, agricultural and other complex property as well as residential.",
        "Those same three letters are also the everyday abbreviation for the Canada Revenue Agency. An appraisal prepared for capital gains, a change in use, or a deemed disposition on death may be written by a CRA-designated appraiser and later filed in support of a return to the Canada Revenue Agency. When speaking with a lender, lawyer or accountant, spell out which CRA you mean."] },
      { h: "When you need one, the other, or both", p: [
        "You need an appraisal whenever a third party has to rely on a value: mortgage financing or refinancing, private lending, dividing matrimonial property (often a retrospective value at the date of separation), settling an estate at the date of death, capital gains, a property tax assessment appeal, insurance replacement cost, expropriation, and relocation programs including BGRS, government and corporate moves.",
        "You need a home inspection when you are about to take on the physical risk of a building — buying a resale home before waiving conditions, dealing with an older property, or planning a significant renovation.",
        "In a typical resale purchase with financing you will end up with both, in that order: the inspection during the condition period, the appraisal for the lender before funding. Neither replaces the other, and a clean inspection report does not raise an appraised value."] },
      { h: "Getting the right appraisal for your situation", p: [
        "Appraisal Canada provides appraisals, not home inspections. If your concern is the physical condition of a building, hire a qualified home inspector. If you need a defensible opinion of market value for a lender, a court, an executor, an accountant or a tax matter, we match you with an AIC-designated appraiser — AACI or CRA, depending on the property and the purpose — who works to CUSPAP standards and knows the local market.",
        "Tell us the property type, where it is and why you need the report, and we will connect you with the appropriately designated appraiser and send you a free, no-obligation quote. Service is available in English, French and Spanish."] },
    ],
  },
  {
    slug: 'how-to-prepare-for-a-home-appraisal',
    title: "How to Prepare for a Home Appraisal in Canada",
    description: "A practical Canadian checklist for your home appraisal: documents to gather, access and safety, what really affects value, and what happens on inspection day.",
    date: 'August 2026',
    iso: '2026-08-10',
    read: "4 min read",
    intro: "An appraisal is an independent opinion of value, not a negotiation. Even so, a prepared homeowner makes the process faster and more accurate, because an appraiser can only report what he or she is able to see, measure and verify. Here is a practical checklist for getting ready before the appraiser arrives.",
    body: [
      { h: "Gather your documents first", p: [
        "Start one folder, paper or digital, holding everything that describes the property: the land survey or Real Property Report (called a certificate of location in Quebec), your most recent property tax bill and municipal assessment notice, the deed or title, and any previous appraisal. If the home is a condominium, ask the property manager for the status certificate (estoppel certificate in Alberta, and the equivalent condominium documents in Quebec), plus the current monthly fee and what it covers.",
        "Add building permits and final sign-offs for structural work, and receipts for renovations. If the property is tenanted or has a secondary suite, include the lease and the rent actually collected. For rural properties, add well and septic records and zoning confirmation. None of this obliges the appraiser to reach a particular conclusion, but it saves verification time and prevents cautious assumptions where facts are missing."] },
      { h: "List your upgrades with dates and costs", p: [
        "Write a simple one-page list: what was done, in what year, roughly what it cost, and whether a permit was pulled. Age matters as much as the work itself, since a roof replaced two years ago is treated very differently from one replaced eighteen years ago.",
        "Be honest about the line between maintenance and improvement. Repainting, replacing a broken appliance and fixing a fence maintain current condition. Adding a bathroom, finishing a basement to permitted standards, replacing the furnace or windows, or building a garage can change how the property is rated. Unpermitted work is not ignored, but it is normally noted and treated conservatively, especially a basement suite that does not meet local requirements. Keeping the receipts helps elsewhere too, such as supporting an adjusted cost base if the Canada Revenue Agency later asks about capital gains on a property that was not your principal residence."] },
      { h: "Make the whole property accessible, and safe", p: [
        "The appraiser needs to see every room, plus the mechanical room, crawl space, attic hatch, garage, outbuildings and the exterior on all sides. Unlock what is locked, clear a path to the furnace and electrical panel, and move anything blocking a hatch. If an area cannot be inspected the report must say so, and what was actually seen is easier to credit than what has to be assumed.",
        "Canadian conditions add a practical layer. Clear snow and ice from the driveway, walkways and deck in winter, secure pets, and make sure gates open, since most homes are measured from the outside. If tenants occupy the property, arrange access ahead of time and follow your province's residential tenancy notice rules; your permission as owner is not a substitute for the tenant's notice."] },
      { h: "What genuinely affects value, and what does not", p: [
        "Permanent, verifiable characteristics drive the conclusion: location and the immediate street, lot size and shape, above-grade living area, room count and layout, construction quality, overall condition and effective age, and how all of that compares with recent sales of similar properties nearby. Those are the things measured, photographed and adjusted for.",
        "Clutter, dishes in the sink and dated decor do not by themselves lower value, and staging, fresh flowers or baking do not raise it. What tidiness affects is visibility: if stacked boxes hide water damage or a cracked foundation wall, the appraiser records only what can actually be observed. Fix the small obvious defects you can, point out what is not visible, and leave the rest alone. Remember too that for a mortgage appraisal the lender, not the owner, is usually the client."] },
      { h: "What happens on inspection day", p: [
        "For a typical house the visit is short, often between twenty and sixty minutes, and longer for large, rural or unusual properties. The appraiser measures the exterior, sketches the floor plan, photographs each room, the mechanical systems, the elevations and the street, and notes finishes, updates and deficiencies. Expect factual questions: the age of the roof and furnace, what the condo fee includes, whether the basement suite is permitted.",
        "Most of the work happens afterwards, selecting comparable sales, making adjustments and writing the report to the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP). Turnaround is commonly a few business days after the inspection, with rush service usually available at a higher fee. Fees vary widely by property type, region and complexity, so treat any figure you find online as a broad range rather than a quote."] },
      { h: "Get a free, no-obligation quote", p: [
        "Appraisals in Canada are prepared by appraisers designated through the Appraisal Institute of Canada (AIC). The CRA designation stands for Canadian Residential Appraiser and covers residential dwellings; despite the shared initials, it has nothing to do with the Canada Revenue Agency. The AACI designation, Accredited Appraiser Canadian Institute, extends to commercial, industrial, agricultural and other complex property. The right designation matters, because the report must be accepted by whoever relies on it.",
        "Appraisal Canada does not perform inspections itself. It matches you with an appropriately designated AIC appraiser for your property type, location and purpose, in English, French or Spanish. Send the address, the property type and the reason you need the appraisal, and we will come back with a free, no-obligation quote."] },
    ],
  },
  {
    slug: 'appraisal-came-in-low-what-to-do',
    title: "My Appraisal Came in Low — What Are My Options?",
    description: "Your appraisal came in below the purchase price? Why it happens in Canada, the effect on your mortgage, and how to request a reconsideration of value.",
    date: 'August 2026',
    iso: '2026-08-10',
    read: "4 min read",
    intro: "Few things stall a Canadian real estate transaction faster than an appraisal that lands below the agreed purchase price. It does not mean the deal is dead, but it does mean deciding quickly, usually inside your financing condition window. Here is why low appraisals happen and what your options are.",
    body: [
      { h: "Why an appraisal comes in below the purchase price", p: [
        "An appraisal is an opinion of market value as of a specific effective date, supported mostly by closed sales of comparable properties. The price you agreed to pay is what one buyer would pay on one day; market value is what the broader evidence supports. In a multiple-offer situation those numbers separate, particularly when the accepted offer sits well above list.",
        "Fast-moving markets are the other common cause. Because appraisers rely mainly on sales that have already closed, the data trails the market by weeks. When prices climb, the evidence available on the effective date may not yet reflect current bidding; when prices soften, a price agreed two months ago can look generous next to recent closings.",
        "Property characteristics matter too. Waterfront, acreages, heritage houses, custom builds and homes with unusual zoning have few directly comparable sales, so adjustments get larger and the range of defensible values widens. Rural markets have thinner data. Incorrect listing details, such as floor area or a finished basement, can also pull a value down, for correctable reasons."] },
      { h: "What a low value does to your financing", p: [
        "Lenders advance funds against the lesser of the purchase price and the appraised value. If the appraisal comes in under the price, the mortgage is sized on the lower figure and the gap becomes cash you must bring to closing on top of your planned down payment. For high-ratio mortgages, default insurers apply the same lesser-of logic, so the shortfall cannot be solved by borrowing more.",
        "On a refinance, a lower value shrinks the equity you can access rather than creating a shortfall at closing. The lender is normally the appraiser's client, so the report belongs to the lender, not you; ask your lender or broker for a copy, or at least for the comparables used and the effective date."] },
      { h: "How to request a reconsideration of value", p: [
        "The formal route is a reconsideration of value, submitted through whoever ordered the appraisal: usually the lender or broker, not the appraiser directly. It is not a negotiation over the number. It is a request to review specific evidence that may not have been available or considered.",
        "What helps is closed sales, not active listings or hopeful asking prices, genuinely similar in location, age, size, condition and sale date, with a short note on why each is more comparable than what was used. Factual corrections carry weight too: a measured floor area, correct lot dimensions, room counts, or dated permits and invoices for recent work.",
        "Appraisers work under the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP), which requires independence and impartiality: a value cannot be revised because the number is inconvenient, and pressure toward a predetermined figure is improper. A well-documented submission is still routine, and values do change when the evidence supports it."] },
      { h: "Renegotiating, restructuring, or stepping back", p: [
        "If the value holds, someone has to close the gap. The usual outcomes are a price reduction to the appraised value, splitting the difference, the buyer covering the shortfall in cash or from a larger down payment, or the buyer withdrawing where a properly drafted financing condition is still in place.",
        "Other levers are worth raising with your mortgage professional: another lender may order its own appraisal and reach a different conclusion, and gifted funds, a co-signer or a longer closing can bridge a small gap. If the agreement is already firm, speak to your real estate lawyer first, because your obligation to close may not be affected. Contract rules vary by province."] },
      { h: "When a second appraisal is appropriate", p: [
        "A second appraisal is not a do-over you are entitled to because you dislike the first number, and many lenders will not accept a report ordered by the borrower or from outside their approved panel. Ask whether one would be considered first.",
        "It is warranted when the property is unusual enough that competent appraisers could reasonably differ, when factual errors survived a reconsideration, when the first assignment had a limited scope such as a desktop or exterior-only inspection, or when the value is needed for something other than a purchase. Matrimonial division, estates, capital gains reporting to the Canada Revenue Agency (whose acronym, CRA, is unrelated to the appraiser designation below) and property tax appeals each call for an independent, CUSPAP-compliant report."] },
      { h: "Get a free quote for an independent appraisal", p: [
        "Designation matters when choosing who prepares that second opinion. Residential work is commonly completed by appraisers holding the Canadian Residential Appraiser (CRA) designation from the Appraisal Institute of Canada, which shares an acronym with the Canada Revenue Agency but means something entirely different. AACI (Accredited Appraiser Canadian Institute) members are qualified across all property types, including commercial, income-producing, land and complex properties.",
        "Appraisal Canada does not carry out inspections itself. It matches you with an AIC-designated appraiser who works to CUSPAP, knows your local market and holds the designation your situation calls for, in English, French or Spanish. Tell us the property type, location and purpose, and you will receive a free, no-obligation quote."] },
    ],
  },
  {
    slug: 'do-you-need-an-appraisal-to-refinance',
    title: "Do You Need an Appraisal to Refinance Your Mortgage in Canada?",
    description: "Does refinancing in Canada require a home appraisal? When lenders accept an AVM or drive-by, how loan-to-value works, timelines, and who pays the fee.",
    date: 'August 2026',
    iso: '2026-08-10',
    read: "4 min read",
    intro: "Refinancing replaces your existing mortgage with a new one, usually a larger one, and before a lender advances additional funds it needs an independent answer to a simple question: what is the property worth today? Sometimes that answer comes from a full appraisal by a designated appraiser, and sometimes the lender will accept a computer-generated estimate instead. Here is how Canadian lenders make that call, and what it means for your loan amount, your timeline and your out-of-pocket cost.",
    body: [
      { h: "Full appraisal, drive-by, or automated valuation?", p: [
        "Canadian lenders work with three levels of valuation. An automated valuation model (AVM) is a statistical estimate built from sales data and property records, with nobody visiting the property. A drive-by, or exterior-only appraisal, has a designated appraiser inspect the outside of the property and the surrounding neighbourhood, then complete the analysis from records and comparable sales. A full appraisal adds an interior inspection, so the appraiser can verify size, layout, condition and any recent work.",
        "Which one you get is the lender's decision. AVMs are most often accepted for standard urban properties where the requested loan-to-value is modest and recent comparable sales are plentiful, which is why a unit in a large condominium complex is a better AVM candidate than a rural acreage. Lenders escalate to a full appraisal when a property is rural or on a large lot, has unusual construction or a secondary suite, has been substantially renovated, is multi-unit or mixed-use, or when the borrower wants a high share of the value. Ask your broker or lender early which route applies, since it affects cost and timing."] },
      { h: "How loan-to-value is calculated on a refinance", p: [
        "Loan-to-value (LTV) is the total mortgage debt registered against the property divided by its current market value. On a refinance, that value comes from whatever valuation the lender accepts, not from your municipal assessment or an online estimate. Municipal assessments use a mass-appraisal method and a legislated valuation date, and often differ materially from market value.",
        "Most conventional refinances in Canada are capped at 80 percent of appraised value, since mortgage default insurance is generally not available on a refinance. Your available funds are the appraised value times the lender's maximum LTV, minus what you still owe. On a home appraised at $800,000 with an 80 percent cap and $520,000 outstanding, roughly $120,000 is available before fees, and if the appraisal lands low, that shortfall comes straight off the top.",
        "Where the new financing includes a readvanceable home equity line of credit, the revolving portion is normally capped at a lower share of value, with revolving and amortizing pieces together staying inside the overall limit."] },
      { h: "Accessing equity, consolidating debt, buying out a co-owner", p: [
        "Canadians most often refinance to fund renovations, to consolidate higher-interest unsecured debt into one lower-rate payment, to raise a down payment on a second property, or to fund a business. In every case the appraised value sets the ceiling on what is possible.",
        "Separation and matrimonial buyouts are a special case. Refinancing to pay out a former spouse usually needs an appraisal that satisfies both the lender and the separation agreement, and lawyers often want a retrospective value as of the date of separation rather than today's. Those are two separate assignments, so say so up front.",
        "If the property is a rental, or you are changing its use, keep the report. A dated, professionally prepared opinion of value is useful support if the Canada Revenue Agency later questions a deemed disposition or an adjusted cost base. Be aware that in appraisal circles the same initials, CRA, denote a professional designation, explained below."] },
      { h: "B-lenders, credit unions and private lenders", p: [
        "Alternative and private lenders almost always require a full appraisal with an interior inspection, and their rules tend to be stricter than a chartered bank's. Many keep an approved panel of appraisal firms and will not accept a report from outside it, many require the report to be recent, commonly within about 90 days, and most require that it name them as the intended user, so a report you ordered for your own purposes may not transfer.",
        "With second mortgages and private financing, the appraisal carries more of the underwriting weight than it does at a bank. Expect comment on marketability and estimated exposure time, and expect rural or unusual properties to be held to a lower maximum LTV."] },
      { h: "Who does the appraisal, who pays, and how long it takes", p: [
        "Refinance appraisals in Canada are performed by appraisers designated by the Appraisal Institute of Canada (AIC). Two designations matter: CRA, the Canadian Residential Appraiser designation, covering residential properties of up to four units and individual residential dwelling units; and AACI, Accredited Appraiser Canadian Institute, covering all property types, including commercial, industrial, multi-residential and land. To settle a common confusion, here CRA is an appraiser designation; the federal tax authority, the Canada Revenue Agency, simply shares the initials. Both require work to the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP).",
        "The borrower normally pays, either directly to the appraisal firm or as a closing cost, though some lenders and brokers cover or rebate the fee as part of an offer. Fees for a straightforward urban home commonly sit in the low hundreds of dollars, with rural, acreage, multi-unit and commercial assignments higher and rush service above standard pricing. Inspections are usually booked within a few business days and take well under an hour for a typical home, with the written report often following a few business days later. Rural, unique or thinly traded markets take longer."] },
      { h: "Getting your refinance appraisal arranged", p: [
        "If you are not sure whether your lender will require a full appraisal, it costs nothing to have a quote in hand. Appraisal Canada is a matching service: we connect you with an AIC-designated appraiser holding the right designation for your property, CRA for most residential work and AACI for commercial, multi-residential, land, and machinery and equipment, working under CUSPAP.",
        "Tell us the property type, the location and who the report is for, and we will send back a free, no-obligation quote and a realistic turnaround. We work in English, French and Spanish."] },
    ],
  },
  {
    slug: 'what-do-appraisers-look-for',
    title: "What Do Appraisers Look For? How Home Value Is Determined",
    description: "How Canadian appraisers determine property value: the three approaches to value, how comparable sales are adjusted, and why CUSPAP reports satisfy lenders.",
    date: 'August 2026',
    iso: '2026-08-10',
    read: "5 min read",
    intro: "Homeowners often assume an appraisal is a walk-through and a gut feeling. In practice, a designated appraiser follows a structured method set out in the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP), weighing evidence drawn from the market rather than opinion. Here is what actually goes into the number.",
    body: [
      { h: "The three approaches to value", p: [
        "Every appraisal in Canada rests on up to three recognized approaches. The direct comparison approach analyses recent sales of similar properties and adjusts them to the subject; it is the primary method for most houses, condominiums and townhouses. The cost approach estimates what it would cost to rebuild the improvements today, subtracts depreciation and adds the land value as if vacant; it suits new construction, unusual properties and insurance replacement cost work. The income approach converts the rent a property can reasonably produce into a value figure, and carries most commercial, industrial and multi-residential assignments.",
        "An appraiser does not apply all three by default. CUSPAP requires each to be considered, and the report explains which were used and why the others were excluded. A forty-year-old bungalow with a dozen recent sales on nearby streets rarely needs a cost approach; a purpose-built rental building with no close comparables usually needs the income approach to carry the conclusion."] },
      { h: "How comparable sales are chosen and adjusted", p: [
        "Comparables are not simply the nearest recent sales. The appraiser looks for arm's-length transactions of properties that competed with the subject for the same buyer — similar neighbourhood, style, size, lot, age and condition — and that closed recently enough to reflect the current market. Active and expired listings can support conclusions about market direction, but closed sales carry the weight.",
        "Adjustments are then made line by line. A comparable with an extra bathroom, a finished basement, a double garage or two hundred more square feet is adjusted downward toward the subject; one on a busier street or a smaller lot is adjusted upward. The adjustment is not the cost of the feature — it is what the market has paid for it, often considerably less. If prices moved between a comparable's sale date and the effective date of the appraisal, a time adjustment applies too."] },
      { h: "Location, lot, size, age, condition and permitted use", p: [
        "Location does the heaviest lifting, at a fine grain: a school catchment, a transit line, a quiet crescent versus an arterial road, a ravine or waterfront exposure, and proximity to commercial or industrial uses can separate two otherwise identical houses. Lot size, shape, frontage, servicing and topography follow closely, and dominate for acreages and vacant land, where the parcel is the asset.",
        "Inside the improvements, appraisers measure gross living area to a consistent standard, count above-grade bedrooms and bathrooms separately from below-grade space, and record effective age rather than chronological age alone — a 1965 home with newer windows, roof, furnace and wiring may have a much younger effective age. Construction quality, functional layout and deferred maintenance are recorded too.",
        "Permitted use is the legal envelope around all of it. Zoning, official plan designation, legal non-conforming status, a registered secondary suite versus an unregistered one, easements and rights-of-way determine what an owner may legally do with the property. Appraisers value the use that is legally permissible, physically possible and financially feasible — not what a seller hopes will be allowed someday."] },
      { h: "What does not move the value", p: [
        "Several things clients expect to count usually do not. What you paid, what you still owe, what you spent on renovations, and what you need to clear a debt are not evidence of market value. Neither is a provincial assessment notice, which is prepared for taxation on a different effective date and methodology.",
        "Personal circumstances — a separation, a job transfer, an urgent closing date — cannot influence the conclusion either. CUSPAP requires impartiality, and a designated appraiser may not accept an assignment conditioned on reaching a predetermined value. Staging, furniture and decor are excluded, as are chattels that are not part of the real property. Nor does every renovation return its cost: a high-end kitchen in a modest neighbourhood usually recovers only part of the outlay, because value is bounded by what buyers in that segment will pay."] },
      { h: "Why CUSPAP reports hold up with lenders and courts", p: [
        "Appraisers holding a designation from the Appraisal Institute of Canada — AACI, or CRA, which here means Canadian Residential Appraiser and not the Canada Revenue Agency — must comply with CUSPAP. The standards govern scope of work, disclosure of assumptions and limiting conditions, retention of a working file supporting the conclusion, and independence from the outcome.",
        "That structure is why a CUSPAP-compliant report is generally accepted by lenders for mortgage financing and refinancing, relied on by courts in matrimonial and estate matters, and used wherever a supportable value must be documented — including capital gains matters involving the Canada Revenue Agency, the federal tax authority that shares those initials. A signed report also carries professional accountability behind it, which an automated online estimate does not."] },
      { h: "Get a value you can rely on", p: [
        "The right appraiser depends on the property and the purpose. A house, condominium or small multiplex is often well served by a CRA-designated appraiser (Canadian Residential Appraiser), while commercial, industrial, agricultural, machinery and equipment, or otherwise complex assignments call for an AACI. Appraisal Canada does not carry out inspections itself; it matches you with an appropriately designated AIC member for your property type, location and intended use, in English, French or Spanish.",
        "Tell us the property, the reason for the appraisal and your timing, and we will connect you with the right appraiser and confirm the price up front — free, with no obligation."] },
    ],
  },
];

export const ARTICLE_BY_SLUG: Record<string, Article> =
  ARTICLES.reduce((a, x) => { a[x.slug] = x; return a; }, {} as Record<string, Article>);
