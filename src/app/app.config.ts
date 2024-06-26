import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment.development';
import { provideHttpClient, withFetch } from '@angular/common/http';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes, withInMemoryScrolling(scrollConfig)),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};
