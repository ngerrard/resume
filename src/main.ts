import { enableProdMode, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { initVercelSpeedInsights } from './app/analytics/vercel-speed-insights';
import { initVercelWebAnalytics } from './app/analytics/vercel-web-analytics';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

initVercelWebAnalytics(environment.production);
initVercelSpeedInsights(environment.production);

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()],
})
  .catch(err => console.error(err));
