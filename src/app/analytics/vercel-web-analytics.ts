import { inject } from '@vercel/analytics';

export function initVercelWebAnalytics(isProduction: boolean): void {
  inject({
    mode: isProduction ? 'production' : 'development',
  });
}
