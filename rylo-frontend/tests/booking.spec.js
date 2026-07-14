import { test, expect } from '@playwright/test';

test.describe('Booking Page', () => {

  test.beforeEach(async ({ page }) => {
    // Change 1 to any valid service ID if needed
    await page.goto('/booking/1');
    await page.waitForLoadState('networkidle');
  });

  test('Booking page loads', async ({ page }) => {
    await expect(page).toHaveURL(/booking/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Booking form is visible', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
  });

  test('Fill booking form', async ({ page }) => {

    await page.locator('input[name="customer_name"]').fill('Playwright Test');

    await page.locator('input[name="mobile"]').fill('9876543210');

    // Fill these only if they exist on your form
    if (await page.locator('input[name="whatsapp"]').count()) {
      await page.locator('input[name="whatsapp"]').fill('9876543210');
    }

    if (await page.locator('textarea[name="notes"]').count()) {
      await page.locator('textarea[name="notes"]').fill('Automated booking test');
    }

  });

  test('Book Now button is visible', async ({ page }) => {

    const button = page.getByRole('button', { name: /book/i });

    await expect(button).toBeVisible();

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