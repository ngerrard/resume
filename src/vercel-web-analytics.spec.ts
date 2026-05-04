import { beforeEach, describe, expect, it, vi } from 'vitest';

const { mockInject } = vi.hoisted(() => ({
  mockInject: vi.fn(),
}));

vi.mock('@vercel/analytics', () => ({
  inject: mockInject,
}));

import { initVercelWebAnalytics } from './vercel-web-analytics';

describe('initVercelWebAnalytics', () => {
  beforeEach(() => {
    mockInject.mockClear();
  });

  it('injects Vercel Web Analytics with the Angular framework option', () => {
    initVercelWebAnalytics();

    expect(mockInject).toHaveBeenCalledOnce();
    expect(mockInject).toHaveBeenCalledWith({ framework: 'angular' });
  });
});
