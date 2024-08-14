import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const appConfig: ApplicationConfig = {
  /**
   * Configures the providers for the Angular application.
   *
   * The `providers` array sets up the following:
   * - Configures the router with the defined routes
   * - Provides the HTTP client for making HTTP requests
   * - Imports the HttpClientModule for HTTP functionality
   * - Configures the TranslateModule for internationalization
   *   - Specifies the TranslateHttpLoader as the loader for translation files
   *   - Sets the default language to 'en'
   */
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }).providers!,
  ],
};