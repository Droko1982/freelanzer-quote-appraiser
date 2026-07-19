import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { ARTICLES } from '../../data/articles';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  public L = inject(LanguageService);
  private titleSvc = inject(Title);
  private meta = inject(Meta);
  readonly articles = ARTICLES;

  constructor() {
    effect(() => {
      this.L.lang();
      const title = 'Appraisal Resources & Guides | Appraisal Canada';
      const desc = 'Guides on real estate appraisal in Canada: costs, land appraisals, appraisals for divorce and estates, and AIC appraiser designations (AACI & CRA).';
      this.titleSvc.setTitle(title);
      this.meta.updateTag({ name: 'description', content: desc });
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: desc });
      this.meta.updateTag({ name: 'twitter:title', content: title });
      this.meta.updateTag({ name: 'twitter:description', content: desc });
    });
  }

  heading(): string {
    switch (this.L.lang()) {
      case 'fr': return 'Ressources et guides';
      case 'es': return 'Recursos y guías';
      default: return 'Appraisal Resources & Guides';
    }
  }
  sub(): string {
    switch (this.L.lang()) {
      case 'fr': return 'Réponses claires sur l’évaluation immobilière au Canada.';
      case 'es': return 'Respuestas claras sobre el evalúo inmobiliario en Canadá.';
      default: return 'Clear answers about real estate appraisal in Canada.';
    }
  }
}
