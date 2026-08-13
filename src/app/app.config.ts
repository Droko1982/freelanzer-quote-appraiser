import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Angular's default scrollPositionRestoration is 'disabled', which means the
     * router leaves the browser's scroll offset alone across in-app navigation.
     * Every CTA on this site sits near the bottom of a long page, so clicking
     * "Get a Free Quote" landed the visitor at the bottom of the quote form —
     * past the heading and the first six fields — and a city-to-city link opened
     * the new page thousands of pixels below its own H1. 'enabled' scrolls to the
     * top on forward navigation and restores the saved offset on back/forward.
     */
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })),
    provideHttpClient(),
    provideClientHydration(),
  ]
};
