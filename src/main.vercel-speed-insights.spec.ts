import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const mainTsPath = join(dirname(fileURLToPath(import.meta.url)), 'main.ts');

describe('main bootstrap', () => {
  it('initializes Vercel Speed Insights from the app entry', () => {
    const source = readFileSync(mainTsPath, 'utf8');
    expect(source).toContain("from './app/analytics/vercel-speed-insights'");
    expect(source).toMatch(
      /initVercelSpeedInsights\s*\(\s*environment\.production\s*\)/,
    );
  });
});
