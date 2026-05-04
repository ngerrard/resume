vi.mock('@vercel/analytics', () => ({
  inject: vi.fn(),
}));

import { inject } from '@vercel/analytics';
import { initVercelWebAnalytics } from './vercel-web-analytics';

describe('initVercelWebAnalytics', () => {
  beforeEach(() => {
    vi.mocked(inject).mockClear();
  });

  it('registers Vercel Web Analytics in production mode', () => {
    initVercelWebAnalytics(true);
    expect(inject).toHaveBeenCalledWith(
      expect.objectContaining({ mode: 'production' }),
    );
  });

  it('registers Vercel Web Analytics in development mode', () => {
    initVercelWebAnalytics(false);
    expect(inject).toHaveBeenCalledWith(
      expect.objectContaining({ mode: 'development' }),
    );
  });
});
