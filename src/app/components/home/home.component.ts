import { Component, inject, effect } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { JsonLdService, faqPage } from '../../services/jsonld.service';
import { CITIES } from '../../data/cities';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public L = inject(LanguageService);
  private seo = inject(SeoService);
  private jsonLd = inject(JsonLdService);
  readonly cities = CITIES;

  constructor() {
    effect(() => {
      this.L.lang();
      this.seo.set('home');
      // Mirrors the six questions rendered in the FAQ section of this page.
      this.jsonLd.set('ld-faq', faqPage(
        [1, 2, 3, 4, 5, 6].map(n => ({
          q: this.L.t(`faq_q${n}`),
          a: this.L.t(`faq_a${n}`),
        }))
      ));
    });
  }
}
