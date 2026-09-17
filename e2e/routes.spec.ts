import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/services',
  '/services/website-development',
  '/services/it-support',
  '/services/cloud-microsoft-365',
  '/services/ai-automation',
  '/about',
  '/partnerships',
  '/work',
  '/work/cloud-migration-with-zero-downtime',
  '/blog',
  '/contact',
  '/privacy',
];

for (const path of ROUTES) {
  test(`${path} renders with exactly one h1`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
  });
}

test('unknown route returns a real 404', async ({ page }) => {
  const response = await page.goto('/this-route-does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('Page not found');
});
