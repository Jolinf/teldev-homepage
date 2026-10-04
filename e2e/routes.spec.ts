import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/services',
  '/services/helpdesk-support',
  '/services/network-infrastructure',
  '/services/website-development',
  '/services/cloud-solutions',
  '/services/it-consulting',
  '/services/ai-automation',
  '/about',
  '/partnerships',
  '/partnerships/nams-western-region-convention-2026',
  '/work',
  '/work/ai-ready-schools',
  '/blog',
  '/blog/introducing-tars-teldev-ai-ready-schools',
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
