import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
  });

  test('Contact page loads', async ({ page }) => {
    await expect(page).toHaveURL(/contact/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Page heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading').first()).toBeVisible();
  });

  test('Contact form is visible', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
  });

  test('Can fill contact form', async ({ page }) => {

    await page.locator('input[name="name"]').fill('Playwright Test');

    await page.locator('input[name="email"]').fill('playwright@test.com');

    await page.locator('input[name="phone"]').fill('9876543210');

    await page.locator('textarea').fill('This is an automated Playwright test.');

  });

test('Send Message button exists', async ({ page }) => {
  await expect(
    page.getByRole('button', { name: 'Send Message' })
  ).toBeVisible();
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