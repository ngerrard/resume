import { inject as injectVercelWebAnalytics } from '@vercel/analytics';

/** Initializes Vercel Web Analytics (script injection + page view tracking). */
export function initVercelWebAnalytics(): void {
  injectVercelWebAnalytics({ framework: 'angular' });
}
