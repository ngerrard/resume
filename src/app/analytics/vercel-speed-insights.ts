import { injectSpeedInsights } from '@vercel/speed-insights';

export function initVercelSpeedInsights(isProduction: boolean): void {
  injectSpeedInsights({
    debug: !isProduction,
    framework: 'angular',
  });
}
