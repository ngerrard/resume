vi.mock('@vercel/speed-insights', () => ({
  injectSpeedInsights: vi.fn(),
}));

import { injectSpeedInsights } from '@vercel/speed-insights';
import { initVercelSpeedInsights } from './vercel-speed-insights';

describe('initVercelSpeedInsights', () => {
  beforeEach(() => {
    vi.mocked(injectSpeedInsights).mockClear();
  });

  it('registers Vercel Speed Insights for production', () => {
    initVercelSpeedInsights(true);
    expect(injectSpeedInsights).toHaveBeenCalledWith(
      expect.objectContaining({ debug: false, framework: 'angular' }),
    );
  });

  it('registers Vercel Speed Insights for development', () => {
    initVercelSpeedInsights(false);
    expect(injectSpeedInsights).toHaveBeenCalledWith(
      expect.objectContaining({ debug: true, framework: 'angular' }),
    );
  });
});
