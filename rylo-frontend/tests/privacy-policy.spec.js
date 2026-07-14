import { test, expect } from '@playwright/test';

test.describe('Privacy Policy Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/privacy-policy');
    await page.waitForLoadState('networkidle');
  });

  test('Privacy Policy page loads', async ({ page }) => {
    await expect(page).toHaveURL(/privacy-policy/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Page has a heading', async ({ page }) => {
    await expect(page.getByRole('heading').first()).toBeVisible();
  });

  test('Privacy Policy content is visible', async ({ page }) => {
    const paragraphs = page.locator('p');

    expect(await paragraphs.count()).toBeGreaterThan(0);

    await expect(paragraphs.first()).toBeVisible();
  });

  test('No broken images', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  });

  test('No JavaScript errors', async ({ page }) => {
    const errors = [];

    page.on('pageerror', error => {
      errors.push(error.message);
    });

    await page.reload();

    expect(errors).toEqual([]);
  });

});