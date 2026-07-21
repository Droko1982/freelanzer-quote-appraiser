import { Component, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

const SITE_URL = 'https://appraisalcanada.ca';

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private router = inject(Router);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  private firstNav = true;

  constructor() {
    // Every route (including prerendered pages) gets a self-referencing canonical
    // and matching og:url, so no page claims to be a duplicate of the homepage.
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      const path = (e as NavigationEnd).urlAfterRedirects.split('?')[0].split('#')[0];
      // GitHub Pages serves every route as a directory (/services/), so canonical URLs
      // must carry the trailing slash — otherwise they point at a 301 redirect.
      const url = SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, '') + '/');
      this.setCanonical(url);
      this.meta.updateTag({ property: 'og:url', content: url });
      // GA4 only auto-tracks the initial load; report SPA navigations ourselves.
      if (isPlatformBrowser(this.platformId) && !this.firstNav) {
        window.gtag?.('event', 'page_view', {
          page_path: path,
          page_location: url,
          page_title: this.doc.title,
        });
      }
      this.firstNav = false;
    });

    // Conversion tracking for ads: record WhatsApp / phone / email taps site-wide.
    if (isPlatformBrowser(this.platformId)) {
      this.doc.addEventListener('click', (ev) => {
        const a = (ev.target as Element | null)?.closest?.('a');
        if (!a) { return; }
        const href = a.getAttribute('href') ?? '';
        if (href.includes('wa.me')) {
          window.gtag?.('event', 'contact_whatsapp', { link_url: href });
        } else if (href.startsWith('tel:')) {
          window.gtag?.('event', 'contact_phone', { link_url: href });
        } else if (href.startsWith('mailto:')) {
          window.gtag?.('event', 'contact_email', { link_url: href });
        }
      });
    }
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
