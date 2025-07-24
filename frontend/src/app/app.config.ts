import { ApplicationConfig, importProvidersFrom,provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient,withFetch ,withInterceptors} from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptor } from './auth-interceptor';
import { CookieService } from 'ngx-cookie-service';
export const appConfig: ApplicationConfig = {
  providers: [
    CookieService,
    provideHttpClient(
      withFetch(),  // To support fetch & keepalive
      withInterceptors([authInterceptor]) // Register your interceptor
    ),
    importProvidersFrom(BrowserAnimationsModule),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,),
    provideToastr()

  ]
};
