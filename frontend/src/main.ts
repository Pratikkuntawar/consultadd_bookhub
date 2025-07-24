// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { CookieService } from 'ngx-cookie-service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/auth-interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([authInterceptor])),
    CookieService,
  ]
}).catch(err => console.error(err));
