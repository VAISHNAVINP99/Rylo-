import { test, expect } from '@playwright/test';

test.describe('About Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('About page loads', async ({ page }) => {
    await expect(page).toHaveURL(/about/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('No broken images', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  });

  test('Page has heading', async ({ page }) => {
    await expect(page.getByRole('heading').first()).toBeVisible();
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