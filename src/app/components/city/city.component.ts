import { Component, inject, effect, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { CityInfo, CITIES, CITY_BY_SLUG } from '../../data/cities';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  public L = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private titleSvc = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  city = signal<CityInfo>(CITIES[0]);

  constructor() {
    this.route.data.subscribe(d => {
      this.city.set(CITY_BY_SLUG[d['slug']] ?? CITIES[0]);
    });
    // Re-run SEO whenever the city or language changes.
    effect(() => { this.updateSeo(); });
  }

  private fr(): boolean { return this.L.lang() === 'fr'; }
  cityName(): string { return this.fr() ? this.city().nameFr : this.city().name; }
  provName(): string { return this.fr() ? this.city().provFr : this.city().prov; }
  blurb(): string { return this.fr() ? this.city().blurbFr : this.city().blurb; }

  heading(): string {
    return this.fr() ? `Évaluation immobilière à ${this.cityName()}` : `Real Estate Appraisal in ${this.cityName()}`;
  }
  subhead(): string {
    const c = this.cityName();
    return this.fr()
      ? `Soumissions gratuites et rapides d’évaluateurs agréés AACI et CRA au service de ${c} et des environs — résidentiel et commercial, sans engagement.`
      : `Fast, free quotes from AACI & CRA-designated appraisers serving ${c} and the surrounding area — residential and commercial, no obligation.`;
  }
  intro(): string {
    const c = this.cityName(); const p = this.provName();
    return this.fr()
      ? `Vous cherchez une évaluation immobilière professionnelle à ${c}? Appraisal Canada vous met en relation avec des évaluateurs qualifiés et reconnus pour les propriétés résidentielles et commerciales partout à ${c}, ${p}. Que ce soit pour un financement hypothécaire, un refinancement, un achat, un divorce, un règlement successoral ou des gains en capital, nous vous jumelons avec le bon évaluateur et vous obtenons une soumission gratuite et sans engagement — souvent le jour même.`
      : `Looking for a professional real estate appraisal in ${c}? Appraisal Canada connects you with qualified, recognized appraisers for residential and commercial property throughout ${c}, ${p}. Whether it’s for mortgage financing, refinancing, a purchase, divorce, estate settlement or capital gains, we match you with the right appraiser and get you a free, no-obligation quote — often the same day.`;
  }
  servicesTitle(): string {
    return this.fr() ? `Services d’évaluation à ${this.cityName()}` : `Appraisal services in ${this.cityName()}`;
  }
  whyTitle(): string {
    return this.fr() ? `Pourquoi choisir Appraisal Canada à ${this.cityName()}` : `Why choose Appraisal Canada in ${this.cityName()}`;
  }
  ctaTitle(): string {
    return this.fr() ? `Obtenez votre soumission gratuite à ${this.cityName()}` : `Get your free ${this.cityName()} appraisal quote`;
  }
  nearbyTitle(): string {
    return this.fr() ? 'Autres régions desservies' : 'Other areas we serve';
  }

  services(): string[] {
    return this.fr()
      ? ['Évaluations résidentielles', 'Évaluations commerciales', 'Machinerie et équipement', 'Financement hypothécaire et refinancement', 'Divorce / séparation des biens', 'Successions et homologation', 'Gains en capital', 'Évaluations avant mise en vente']
      : ['Residential appraisals', 'Commercial appraisals', 'Machinery & equipment', 'Mortgage & refinance', 'Divorce / matrimonial', 'Estate & probate', 'Capital gains', 'Pre-listing valuations'];
  }
  whyPoints(): string[] {
    return this.fr()
      ? ['Évaluateurs désignés AACI et CRA', 'Normes NUPPEC / CUSPAP respectées', 'Service bilingue (anglais et français)', 'Soumission gratuite et sans engagement', 'Réponse rapide, souvent le jour même']
      : ['AACI & CRA designated appraisers', 'CUSPAP standards followed', 'Bilingual service (English & French)', 'Free, no-obligation quote', 'Fast response, often same day'];
  }
  nearby(): CityInfo[] {
    return CITIES.filter(c => c.slug !== this.city().slug).slice(0, 8);
  }

  private updateSeo(): void {
    const c = this.cityName();
    const url = `https://appraisalcanada.ca/appraisal/${this.city().slug}`;
    const title = this.fr()
      ? `Évaluation immobilière à ${c} | Soumission gratuite — Appraisal Canada`
      : `${c} Real Estate Appraisal | Free Quote — Appraisal Canada`;
    const desc = this.fr()
      ? `Évaluation immobilière résidentielle et commerciale à ${c}. Évaluateurs agréés AACI et CRA, soumission gratuite et rapide, service bilingue. Obtenez votre devis dès aujourd’hui.`
      : `Residential & commercial real estate appraisal in ${c}. AACI & CRA designated appraisers, fast free quote, bilingual service. Get your quote today.`;
    this.titleSvc.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: desc });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
