import { test, expect } from '@playwright/test';

test('renders resume root element', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('app-resume')).toBeVisible();
});

