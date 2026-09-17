import { test, expect } from '@playwright/test';

test('reduced motion: reveal content is visible immediately, no drift', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about');

  const reveal = page.locator('.ds-reveal').first();
  await expect(reveal).toHaveCSS('opacity', '1');

  const float = page.locator('.ds-float').first();
  if (await float.count()) {
    const animationName = await float.evaluate((el) => getComputedStyle(el).animationName);
    expect(animationName).toBe('none');
  }
});
