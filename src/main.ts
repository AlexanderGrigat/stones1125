import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(
  App, {
    providers:[
      provideHttpClient(),
      provideRouter(appRoutes),
    ]
  }
)