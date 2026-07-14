import { test, expect } from '@playwright/test';

test.describe('Footer', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Footer is visible', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Quick Links section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Quick Links' })
    ).toBeVisible();
  });

  test('Home link exists', async ({ page }) => {
    await expect(
      page.locator('footer').getByRole('link', { name: 'Home' })
    ).toBeVisible();
  });

  test('About Us link exists', async ({ page }) => {
    await expect(
      page.locator('footer').getByRole('link', { name: 'About Us' })
    ).toBeVisible();
  });

  test('Services link exists', async ({ page }) => {
    await expect(
      page.locator('footer').getByRole('link', { name: 'Services' })
    ).toBeVisible();
  });

  test('Contact link exists', async ({ page }) => {
    await expect(
      page.locator('footer').getByRole('link', { name: 'Contact' })
    ).toBeVisible();
  });

  test('Privacy Policy link exists', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Privacy Policy' })
    ).toBeVisible();
  });

  test('Terms & Conditions link exists', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Terms & Conditions' })
    ).toBeVisible();
  });

  test('Contact Us section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Contact Us' })
    ).toBeVisible();
  });

  test('Our Branches section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Our Branches' })
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