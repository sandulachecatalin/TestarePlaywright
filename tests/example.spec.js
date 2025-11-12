const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the "Get started" link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect page to have a heading with the name "Installation".
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});