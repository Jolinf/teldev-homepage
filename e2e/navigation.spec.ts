import { test, expect } from '@playwright/test';

test.describe('Header keyboard navigation', () => {
  test('Services dropdown opens with click, closes with Escape', async ({ page }) => {
    await page.goto('/');
    const trigger = page.getByRole('button', { name: 'Services', exact: false });
    await trigger.click();
    await expect(page.getByRole('menu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('menu')).toBeHidden();
  });

  test('mobile menu opens and closes by keyboard-accessible button', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    const openBtn = page.getByRole('button', { name: 'Open menu' });
    await openBtn.click();
    await expect(page.getByRole('button', { name: 'Close menu' })).toBeVisible();
  });
});

test.describe('Theme toggle', () => {
  test('persists across navigation', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /switch to (dark|light) mode/i });
    await toggle.click();
    const theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    await page.goto('/about');
    const themeAfterNav = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(themeAfterNav).toBe(theme);
  });
});

test.describe('Contact form', () => {
  test('shows validation errors only after an invalid submission, not by default', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('.ds-error-text')).toHaveCount(0);

    // Fill every natively-required field so the browser lets the form submit to the
    // server action, then trip a server-only check (the agreement checkbox) so the
    // error we're asserting on actually comes from the server, not native HTML5
    // validation intercepting the submit first.
    await page.getByLabel('Full name').fill('Ada Okafor');
    await page.getByLabel('Email address').fill('ada@example.com');
    await page.getByLabel('Message').fill('Testing the contact form.');
    await page.getByLabel('I agree to be contacted about this enquiry.').uncheck();
    await page.getByRole('button', { name: 'Send message' }).click();

    await expect(page.locator('.ds-error-text').first()).toBeVisible();
  });
});
