import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ROUTES = ['/', '/services', '/services/website-development', '/about', '/partnerships', '/work', '/blog', '/contact', '/privacy'];

for (const path of ROUTES) {
  for (const theme of ['light', 'dark'] as const) {
    test(`${path} has no serious/critical a11y violations (${theme})`, async ({ page }) => {
      // Set next-themes' own localStorage key before navigating so the theme is correct
      // from first paint — mutating the `data-theme` attribute after load races with
      // next-themes' hydration effect, which resets it back and produces a mixed
      // light/dark state that isn't representative of either real theme.
      await page.addInitScript((t) => window.localStorage.setItem('theme', t), theme);
      // Scroll-revealed content (Reveal, LayeredVisual cards) sits at opacity:0 with a
      // paused animation until scrolled into view — axe would otherwise sample those
      // mid-animation and report false-positive contrast failures on invisible text.
      // Reduced motion renders everything in its final visible state immediately, which
      // is what a real visitor eventually sees and what we actually want to check.
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
      const results = await new AxeBuilder({ page }).analyze();
      const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
    });
  }
}
