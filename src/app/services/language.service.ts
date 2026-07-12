import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'en' | 'fr';

/**
 * Runtime bilingual (English / Français) service.
 * Central dictionary for the whole site so text stays in one place and is easy to revise.
 * SSR-safe: guards all browser-only APIs (no window/localStorage on the prerender server).
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private platformId = inject(PLATFORM_ID);
  readonly lang = signal<Lang>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('freelanzer_lang') as Lang | null;
      if (saved === 'en' || saved === 'fr') {
        this.lang.set(saved);
      } else if (navigator.language?.toLowerCase().startsWith('fr')) {
        this.lang.set('fr');
      }
      document.documentElement.lang = this.lang();
    }
  }

  toggle(): void {
    this.set(this.lang() === 'en' ? 'fr' : 'en');
  }

  set(l: Lang): void {
    this.lang.set(l);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('freelanzer_lang', l);
      document.documentElement.lang = l;
    }
  }

  /** Translate a key for the active language. Falls back to the key itself if missing. */
  t(key: string): string {
    return DICT[this.lang()][key] ?? DICT.en[key] ?? key;
  }
}

type Dictionary = Record<string, string>;

const en: Dictionary = {
  // Brand / header
  brand_name: 'Freelanzer',
  brand_tagline: 'Quote & Appraiser',
  nav_home: 'Home',
  nav_services: 'Services',
  nav_contact: 'Contact',
  lang_switch: 'FR',
  lang_switch_aria: 'Passer au français',

  // Home
  home_why_title: 'Why Is an Appraisal Essential?',
  home_intro:
    'Appraisals are crucial for a variety of purposes, including mortgage financing, estate planning, matrimonial asset division, relocations, and more. They provide an unbiased, professional opinion of value that plays a critical role in making informed decisions in various financial and legal contexts.',
  home_benefits_title: 'The Key Benefits of an Appraisal',
  home_b1_t: 'Accurate Valuation:',
  home_b1_d:
    'An appraisal report offers a reliable and precise estimate of market value, supported by thorough market analysis conducted by a qualified appraiser. This ensures a credible and professional evaluation that you can trust when making important decisions.',
  home_b2_t: 'Legal Recognition:',
  home_b2_d:
    'Professionally conducted appraisals are recognized by courts, financial institutions, and government bodies. This recognition is crucial in cases of litigation, divorce settlements, expropriation, or disputes, where the opinion of value must meet strict standards.',
  home_b3_t: 'Market Insight:',
  home_b3_d:
    'An up-to-date appraisal reflects current market conditions, offering the most accurate valuation for your property, whether you are buying, selling, or refinancing.',
  home_b4_t: 'Protection and Peace of Mind:',
  home_b4_d:
    'Appraisals conducted by designated professionals, adhering to the Canadian Uniform Standards of Professional Appraisal Practice (CUSPAP), ensure that your interests are safeguarded through a diligent, unbiased approach.',
  home_b5_t: 'Versatility and Adaptability:',
  home_b5_d:
    'Appraisals are essential for a wide range of purposes, including pre-listing evaluations, foreclosure processes, tax assessment appeals, replacement costing, estate settlements, and more.',
  home_specialize:
    'We connect you with reputable, recognized, and registered appraisal professionals across Canada who provide expert services tailored to your specific needs. Whether you’re planning for the future, navigating a legal matter, or seeking a property valuation for financial purposes, we can guide you to the right professionals who adhere to the highest industry standards.',
  home_contact_cta_pre: 'Contact us today',
  home_contact_cta_post:
    ' to discuss your appraisal needs and benefit from our professional advice. Let us help you make informed decisions with confidence.',
  home_get_quote_btn: 'Get a Quote Now',

  // Services
  serv_title: 'Our Services',
  serv_intro:
    'We offer a comprehensive range of appraisal services to meet your residential and commercial needs. Our network of appraisers is committed to providing accurate and professional valuations for a wide variety of property types across Canada.',
  serv_areas_title: 'Service Areas — Coast to Coast',
  serv_areas_intro:
    'We connect clients with qualified appraisers in every province and territory in Canada. Wherever your property is located, we can help.',
  serv_area_on: 'Ontario',
  serv_area_on_d:
    'Ottawa, Toronto (GTA), Mississauga, Brampton, Hamilton, London, Kitchener–Waterloo, Kingston, Windsor, Barrie, Sudbury, Thunder Bay and surrounding communities.',
  serv_area_qc: 'Quebec',
  serv_area_qc_d:
    'Montréal, Québec City, Laval, Gatineau, Longueuil, Sherbrooke, Trois-Rivières, Saguenay and surrounding regions.',
  serv_area_bc: 'British Columbia',
  serv_area_bc_d:
    'Vancouver, Victoria, Surrey, Burnaby, Kelowna, Richmond, Abbotsford, Nanaimo and the Lower Mainland.',
  serv_area_ab: 'Alberta',
  serv_area_ab_d: 'Calgary, Edmonton, Red Deer, Lethbridge, Fort McMurray and surrounding areas.',
  serv_area_prairies: 'Manitoba & Saskatchewan',
  serv_area_prairies_d: 'Winnipeg, Brandon, Saskatoon, Regina, Prince Albert and nearby communities.',
  serv_area_atlantic: 'Atlantic Canada',
  serv_area_atlantic_d:
    'Halifax, Moncton, Fredericton, Saint John, St. John’s, Charlottetown and the Maritime provinces.',
  serv_area_north: 'Northern Canada',
  serv_area_north_d: 'Whitehorse, Yellowknife, Iqaluit and the territories.',
  serv_desig_title: 'Professional Appraiser Designations',
  serv_aaci_t: 'Accredited Appraiser Canadian Institute (AACI)',
  serv_aaci_d:
    'This designation is typically pursued by commercial property appraisers, though it also covers residential appraisals. AACI appraisers are qualified to appraise a wide range of real property types, including complex commercial, industrial, institutional, and agricultural properties.',
  serv_cra_t: 'Canadian Residential Appraiser (CRA)',
  serv_cra_d:
    'This designation is focused on residential property appraisals. CRA appraisers specialize in appraising individual dwellings, including single-family homes, duplexes, and triplexes.',
  serv_get_btn: 'Get a Specialized Appraiser',

  // Footer
  footer_tel: 'Tel:',
  footer_rights: 'All rights reserved.',
  call_aria: 'Call Us',
  whatsapp_aria: 'WhatsApp Us',

  // Contact form
  ct_title: 'Contact Us — Get an Appraiser',
  ct_first: 'First Name',
  ct_first_ph: 'Please enter your first name',
  ct_last: 'Last Name',
  ct_last_ph: 'Please enter your last name',
  ct_email: 'Email Address',
  ct_email_ph: 'Please enter your email address',
  ct_phone: 'Phone Number',
  ct_phone_ph: 'Please enter your phone number',
  ct_address: 'Property Address',
  ct_address_ph: 'Please enter the property address',
  ct_reportType: 'Report Type',
  ct_reportType_ph: 'Please select report type',
  ct_propertyType: 'Property Type',
  ct_propertyType_ph: 'Please select property type',
  ct_purposeType: 'Purpose',
  ct_purposeType_ph: 'Please select purpose',
  ct_specify: 'Please specify',
  ct_purchaseType: 'Purchase Type',
  ct_purchaseType_ph: 'Please select purchase type',
  ct_constructionCompany: 'Construction Company',
  ct_constructionCompany_ph: 'Please select construction company',
  ct_otherCompany: 'Other Company',
  ct_otherCompany_ph: 'Please specify the construction company',
  ct_houseModel: 'Model of the House',
  ct_houseModel_ph: 'Please select model of the house',
  ct_purchasePrice: 'Purchase Price',
  ct_purchasePrice_ph: 'Please enter purchase price',
  ct_mortgageType: 'Mortgage Type',
  ct_mortgageType_ph: 'Please select mortgage type',
  ct_lender: 'Who is the lender?',
  ct_lender_ph: 'Please enter the lender',
  ct_refinanceAmount: 'Refinance Amount',
  ct_refinanceAmount_ph: 'Please enter refinance amount',
  ct_loanToValue: 'Loan-to-Value Ratio',
  ct_loanToValue_ph: 'Please enter loan-to-value ratio',
  ct_relocationType: 'Relocation Type',
  ct_relocationType_ph: 'Please select relocation type',
  ct_otherRelocation_ph: 'Please specify the relocation type',
  ct_referenceNumber: 'Reference Number',
  ct_referenceNumber_ph: 'Please enter reference number',
  ct_dwellingStyle: 'Dwelling Style',
  ct_dwellingStyle_ph: 'Please select dwelling style',
  ct_condoFees: 'Condo Fees',
  ct_condoFees_ph: 'Please enter condo fees',
  ct_parking: 'Has Parking',
  ct_select: 'Please select',
  ct_parkingType: 'Parking Type',
  ct_parkingType_ph: 'Please select parking type',
  ct_parkingSpaces: 'How many parking spaces?',
  ct_parkingSpaces_ph: 'Please enter number of parking spaces',
  ct_locker: 'Locker',
  ct_specialAssessments: 'Special Assessments',
  ct_specialAssessments_ph: 'Please enter special assessments',
  ct_dwellingType: 'Dwelling Type',
  ct_dwellingType_ph: 'Please select dwelling type',
  ct_additionalInfo:
    'Please provide any additional information you feel may be pertinent to the valuation',
  ct_additionalInfo_ph: 'Please specify additional information',
  ct_isRetro: 'Is this a retrospective appraisal?',
  ct_retroDate: 'Retrospective Date',
  ct_retroDate_ph: 'Please enter date',
  ct_send: 'Send Form',

  // Form submission feedback
  ok_title: 'Form Submitted Successfully!',
  ok_body: 'Your request has been sent successfully. We will contact you shortly.',
  ok_thanks: 'Thank you for reaching out!',
  ok_btn: 'Okay',
  err_title: 'Error Sending Form',
  err_body: 'There was a problem submitting your form. Please try again later.',
  err_help: 'If the issue persists, please contact us directly.',
  err_btn: 'Retry',
  pending_title: 'Almost Ready!',
  pending_body:
    'Thank you! Online submissions are being finalized. In the meantime, please call or WhatsApp us and we will handle your appraisal request right away.',
  pending_btn: 'Okay',
};

const fr: Dictionary = {
  // Brand / header
  brand_name: 'Freelanzer',
  brand_tagline: 'Devis & Évaluation',
  nav_home: 'Accueil',
  nav_services: 'Services',
  nav_contact: 'Contact',
  lang_switch: 'EN',
  lang_switch_aria: 'Switch to English',

  // Home
  home_why_title: 'Pourquoi une évaluation est-elle essentielle?',
  home_intro:
    'Les évaluations sont essentielles à de nombreuses fins : financement hypothécaire, planification successorale, partage des biens matrimoniaux, réinstallations et bien plus. Elles fournissent une opinion de valeur professionnelle et impartiale qui joue un rôle déterminant dans la prise de décisions éclairées, tant sur le plan financier que juridique.',
  home_benefits_title: 'Les principaux avantages d’une évaluation',
  home_b1_t: 'Évaluation précise :',
  home_b1_d:
    'Un rapport d’évaluation offre une estimation fiable et précise de la valeur marchande, appuyée par une analyse approfondie du marché réalisée par un évaluateur qualifié. Vous obtenez ainsi une évaluation crédible et professionnelle sur laquelle vous pouvez compter pour vos décisions importantes.',
  home_b2_t: 'Reconnaissance juridique :',
  home_b2_d:
    'Les évaluations réalisées par des professionnels sont reconnues par les tribunaux, les institutions financières et les organismes gouvernementaux. Cette reconnaissance est cruciale en cas de litige, de divorce, d’expropriation ou de différend, où l’opinion de valeur doit respecter des normes strictes.',
  home_b3_t: 'Connaissance du marché :',
  home_b3_d:
    'Une évaluation à jour reflète les conditions actuelles du marché et offre la valorisation la plus exacte de votre propriété, que vous soyez en train d’acheter, de vendre ou de refinancer.',
  home_b4_t: 'Protection et tranquillité d’esprit :',
  home_b4_d:
    'Les évaluations réalisées par des professionnels désignés, conformément aux Normes uniformes de pratique professionnelle en matière d’évaluation au Canada (NUPPEC / CUSPAP), garantissent que vos intérêts sont protégés grâce à une approche rigoureuse et impartiale.',
  home_b5_t: 'Polyvalence et adaptabilité :',
  home_b5_d:
    'Les évaluations sont essentielles pour une vaste gamme de besoins : évaluations avant mise en vente, procédures de saisie, contestations d’évaluation foncière, coût de remplacement, règlements successoraux et bien plus.',
  home_specialize:
    'Nous vous mettons en relation avec des évaluateurs réputés, reconnus et agréés partout au Canada, qui offrent des services experts adaptés à vos besoins précis. Que vous prépariez l’avenir, gériez une affaire juridique ou recherchiez une évaluation à des fins financières, nous vous orientons vers les bons professionnels, respectueux des normes les plus élevées de l’industrie.',
  home_contact_cta_pre: 'Contactez-nous dès aujourd’hui',
  home_contact_cta_post:
    ' pour discuter de vos besoins en évaluation et profiter de nos conseils professionnels. Laissez-nous vous aider à prendre des décisions éclairées en toute confiance.',
  home_get_quote_btn: 'Obtenez un devis',

  // Services
  serv_title: 'Nos services',
  serv_intro:
    'Nous offrons une gamme complète de services d’évaluation pour répondre à vos besoins résidentiels et commerciaux. Notre réseau d’évaluateurs s’engage à fournir des évaluations précises et professionnelles pour une grande variété de types de propriétés partout au Canada.',
  serv_areas_title: 'Zones de service — d’un océan à l’autre',
  serv_areas_intro:
    'Nous mettons les clients en relation avec des évaluateurs qualifiés dans chaque province et territoire du Canada. Où que se trouve votre propriété, nous pouvons vous aider.',
  serv_area_on: 'Ontario',
  serv_area_on_d:
    'Ottawa, Toronto (RGT), Mississauga, Brampton, Hamilton, London, Kitchener–Waterloo, Kingston, Windsor, Barrie, Sudbury, Thunder Bay et les environs.',
  serv_area_qc: 'Québec',
  serv_area_qc_d:
    'Montréal, Ville de Québec, Laval, Gatineau, Longueuil, Sherbrooke, Trois-Rivières, Saguenay et les régions avoisinantes.',
  serv_area_bc: 'Colombie-Britannique',
  serv_area_bc_d:
    'Vancouver, Victoria, Surrey, Burnaby, Kelowna, Richmond, Abbotsford, Nanaimo et le Lower Mainland.',
  serv_area_ab: 'Alberta',
  serv_area_ab_d: 'Calgary, Edmonton, Red Deer, Lethbridge, Fort McMurray et les environs.',
  serv_area_prairies: 'Manitoba et Saskatchewan',
  serv_area_prairies_d: 'Winnipeg, Brandon, Saskatoon, Regina, Prince Albert et les communautés avoisinantes.',
  serv_area_atlantic: 'Canada atlantique',
  serv_area_atlantic_d:
    'Halifax, Moncton, Fredericton, Saint John, St. John’s, Charlottetown et les provinces maritimes.',
  serv_area_north: 'Nord du Canada',
  serv_area_north_d: 'Whitehorse, Yellowknife, Iqaluit et les territoires.',
  serv_desig_title: 'Désignations professionnelles d’évaluateur',
  serv_aaci_t: 'Évaluateur accrédité de l’Institut canadien (AACI)',
  serv_aaci_d:
    'Cette désignation est généralement obtenue par les évaluateurs de biens commerciaux, mais elle couvre aussi les évaluations résidentielles. Les évaluateurs AACI sont qualifiés pour évaluer une vaste gamme de biens immobiliers, y compris des propriétés commerciales, industrielles, institutionnelles et agricoles complexes.',
  serv_cra_t: 'Évaluateur résidentiel canadien (CRA)',
  serv_cra_d:
    'Cette désignation est axée sur l’évaluation de propriétés résidentielles. Les évaluateurs CRA se spécialisent dans l’évaluation de logements individuels, y compris les maisons unifamiliales, les duplex et les triplex.',
  serv_get_btn: 'Trouvez un évaluateur spécialisé',

  // Footer
  footer_tel: 'Tél. :',
  footer_rights: 'Tous droits réservés.',
  call_aria: 'Appelez-nous',
  whatsapp_aria: 'Écrivez-nous sur WhatsApp',

  // Contact form
  ct_title: 'Contactez-nous — Trouvez un évaluateur',
  ct_first: 'Prénom',
  ct_first_ph: 'Veuillez saisir votre prénom',
  ct_last: 'Nom',
  ct_last_ph: 'Veuillez saisir votre nom',
  ct_email: 'Adresse courriel',
  ct_email_ph: 'Veuillez saisir votre adresse courriel',
  ct_phone: 'Numéro de téléphone',
  ct_phone_ph: 'Veuillez saisir votre numéro de téléphone',
  ct_address: 'Adresse de la propriété',
  ct_address_ph: 'Veuillez saisir l’adresse de la propriété',
  ct_reportType: 'Type de rapport',
  ct_reportType_ph: 'Veuillez choisir le type de rapport',
  ct_propertyType: 'Type de propriété',
  ct_propertyType_ph: 'Veuillez choisir le type de propriété',
  ct_purposeType: 'Objet de l’évaluation',
  ct_purposeType_ph: 'Veuillez choisir l’objet',
  ct_specify: 'Veuillez préciser',
  ct_purchaseType: 'Type d’achat',
  ct_purchaseType_ph: 'Veuillez choisir le type d’achat',
  ct_constructionCompany: 'Constructeur',
  ct_constructionCompany_ph: 'Veuillez choisir le constructeur',
  ct_otherCompany: 'Autre constructeur',
  ct_otherCompany_ph: 'Veuillez préciser le constructeur',
  ct_houseModel: 'Modèle de la maison',
  ct_houseModel_ph: 'Veuillez choisir le modèle de la maison',
  ct_purchasePrice: 'Prix d’achat',
  ct_purchasePrice_ph: 'Veuillez saisir le prix d’achat',
  ct_mortgageType: 'Type d’hypothèque',
  ct_mortgageType_ph: 'Veuillez choisir le type d’hypothèque',
  ct_lender: 'Qui est le prêteur?',
  ct_lender_ph: 'Veuillez saisir le prêteur',
  ct_refinanceAmount: 'Montant du refinancement',
  ct_refinanceAmount_ph: 'Veuillez saisir le montant du refinancement',
  ct_loanToValue: 'Ratio prêt-valeur',
  ct_loanToValue_ph: 'Veuillez saisir le ratio prêt-valeur',
  ct_relocationType: 'Type de réinstallation',
  ct_relocationType_ph: 'Veuillez choisir le type de réinstallation',
  ct_otherRelocation_ph: 'Veuillez préciser le type de réinstallation',
  ct_referenceNumber: 'Numéro de référence',
  ct_referenceNumber_ph: 'Veuillez saisir le numéro de référence',
  ct_dwellingStyle: 'Style d’habitation',
  ct_dwellingStyle_ph: 'Veuillez choisir le style d’habitation',
  ct_condoFees: 'Frais de copropriété',
  ct_condoFees_ph: 'Veuillez saisir les frais de copropriété',
  ct_parking: 'Stationnement inclus',
  ct_select: 'Veuillez choisir',
  ct_parkingType: 'Type de stationnement',
  ct_parkingType_ph: 'Veuillez choisir le type de stationnement',
  ct_parkingSpaces: 'Combien de places de stationnement?',
  ct_parkingSpaces_ph: 'Veuillez saisir le nombre de places',
  ct_locker: 'Casier / rangement',
  ct_specialAssessments: 'Cotisations spéciales',
  ct_specialAssessments_ph: 'Veuillez saisir les cotisations spéciales',
  ct_dwellingType: 'Type d’habitation',
  ct_dwellingType_ph: 'Veuillez choisir le type d’habitation',
  ct_additionalInfo:
    'Veuillez fournir tout renseignement supplémentaire que vous jugez pertinent pour l’évaluation',
  ct_additionalInfo_ph: 'Veuillez préciser les renseignements supplémentaires',
  ct_isRetro: 'S’agit-il d’une évaluation rétrospective?',
  ct_retroDate: 'Date rétrospective',
  ct_retroDate_ph: 'Veuillez saisir la date',
  ct_send: 'Envoyer le formulaire',

  // Form submission feedback
  ok_title: 'Formulaire envoyé avec succès!',
  ok_body: 'Votre demande a été envoyée avec succès. Nous vous contacterons sous peu.',
  ok_thanks: 'Merci de nous avoir contactés!',
  ok_btn: 'D’accord',
  err_title: 'Erreur lors de l’envoi',
  err_body: 'Un problème est survenu lors de l’envoi du formulaire. Veuillez réessayer plus tard.',
  err_help: 'Si le problème persiste, veuillez nous contacter directement.',
  err_btn: 'Réessayer',
  pending_title: 'Presque prêt!',
  pending_body:
    'Merci! L’envoi en ligne est en cours de finalisation. Entretemps, appelez-nous ou écrivez-nous sur WhatsApp et nous traiterons votre demande d’évaluation sans délai.',
  pending_btn: 'D’accord',
};

const DICT: Record<Lang, Dictionary> = { en, fr };
