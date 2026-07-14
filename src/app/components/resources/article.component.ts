import { Component, inject, effect, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { Article, ARTICLES, ARTICLE_BY_SLUG } from '../../data/articles';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './resources.component.css'
})
export class ArticleComponent {
  public L = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private titleSvc = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  article = signal<Article>(ARTICLES[0]);

  constructor() {
    this.route.data.subscribe(d => {
      this.article.set(ARTICLE_BY_SLUG[d['slug']] ?? ARTICLES[0]);
      this.updateSeo();
    });
  }

  ctaLabel(): string {
    switch (this.L.lang()) {
      case 'fr': return 'Obtenez une soumission gratuite';
      case 'es': return 'Obtén una cotización gratis';
      default: return 'Get a Free Quote';
    }
  }
  backLabel(): string {
    switch (this.L.lang()) {
      case 'fr': return '← Toutes les ressources';
      case 'es': return '← Todos los recursos';
      default: return '← All resources';
    }
  }
  more(): Article[] {
    return ARTICLES.filter(a => a.slug !== this.article().slug).slice(0, 3);
  }

  private updateSeo(): void {
    const a = this.article();
    const url = `https://appraisalcanada.ca/resources/${a.slug}`;
    this.titleSvc.setTitle(`${a.title} | Appraisal Canada`);
    this.meta.updateTag({ name: 'description', content: a.description });
    this.meta.updateTag({ property: 'og:title', content: a.title });
    this.meta.updateTag({ property: 'og:description', content: a.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) { link = this.doc.createElement('link'); link.setAttribute('rel', 'canonical'); this.doc.head.appendChild(link); }
    link.setAttribute('href', url);
  }
}
