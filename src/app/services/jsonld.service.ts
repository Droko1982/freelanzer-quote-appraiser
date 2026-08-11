import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Writes (and rewrites) a keyed <script type="application/ld+json"> block in <head>.
 * Keying by id means a route can update its own structured data without stacking
 * duplicates as the visitor navigates.
 */
@Injectable({ providedIn: 'root' })
export class JsonLdService {
  private doc = inject(DOCUMENT);

  set(id: string, data: object): void {
    let s = this.doc.getElementById(id) as HTMLScriptElement | null;
    if (!s) {
      s = this.doc.createElement('script');
      s.id = id;
      s.type = 'application/ld+json';
      this.doc.head.appendChild(s);
    }
    s.textContent = JSON.stringify(data);
  }

  remove(id: string): void {
    this.doc.getElementById(id)?.remove();
  }
}

/** Builds a FAQPage graph from question/answer pairs that are visible on the page. */
export function faqPage(qa: { q: string; a: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(x => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.a },
    })),
  };
}
