import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService, Lang } from './language.service';

export type SeoPage = 'home' | 'services' | 'contact';

interface SeoEntry { title: string; desc: string; }

/**
 * Per-page, per-language SEO. Updates <title> + meta description + Open Graph.
 * Called from each route component so prerendered pages get unique, keyword-rich metadata.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private titleSvc = inject(Title);
  private meta = inject(Meta);
  private L = inject(LanguageService);

  set(page: SeoPage): void {
    const e = SEO[this.L.lang()][page];
    this.titleSvc.setTitle(e.title);
    this.meta.updateTag({ name: 'description', content: e.desc });
    this.meta.updateTag({ property: 'og:title', content: e.title });
    this.meta.updateTag({ property: 'og:description', content: e.desc });
    this.meta.updateTag({ name: 'twitter:title', content: e.title });
    this.meta.updateTag({ name: 'twitter:description', content: e.desc });
  }
}

const SEO: Record<Lang, Record<SeoPage, SeoEntry>> = {
  en: {
    home: {
      title: 'Appraisal Canada | Free Real Estate Appraisal Quotes Across Canada',
      desc: 'Free, fast quotes for residential & commercial real estate appraisals anywhere in Canada. AACI & CRA designated appraisers, CUSPAP standards. Bilingual EN/FR — get your quote today.',
    },
    services: {
      title: 'Appraisal Services & Nationwide Coverage | Appraisal Canada',
      desc: 'Residential, commercial, mortgage, matrimonial, capital gains, estate, insurance and expropriation appraisals. Appraisers serving Ontario, Quebec, BC, Alberta and every Canadian province.',
    },
    contact: {
      title: 'Get a Free Appraisal Quote — Anywhere in Canada | Appraisal Canada',
      desc: 'Request a free, no-obligation real estate appraisal quote across Canada. Fast reply, residential & commercial, bilingual service. Tell us about your property and get quoted today.',
    },
  },
  fr: {
    home: {
      title: 'Appraisal Canada | Soumissions d’évaluation immobilière partout au Canada',
      desc: 'Soumissions gratuites et rapides pour évaluations immobilières résidentielles et commerciales partout au Canada. Évaluateurs agréés AACI et CRA, normes NUPPEC. Service bilingue EN/FR.',
    },
    services: {
      title: 'Services d’évaluation et couverture nationale | Appraisal Canada',
      desc: 'Évaluations résidentielles, commerciales, hypothécaires, matrimoniales, gains en capital, successions, assurance et expropriation. Évaluateurs en Ontario, Québec, C.-B., Alberta et partout au Canada.',
    },
    contact: {
      title: 'Obtenez une soumission d’évaluation gratuite au Canada | Appraisal Canada',
      desc: 'Demandez une soumission d’évaluation immobilière gratuite et sans engagement partout au Canada. Réponse rapide, résidentiel et commercial, service bilingue.',
    },
  },
};
