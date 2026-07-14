import { test, expect } from '@playwright/test';

test.describe('Terms & Conditions Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/terms-and-conditions');
    await page.waitForLoadState('networkidle');
  });

  test('Terms & Conditions page loads', async ({ page }) => {
    await expect(page).toHaveURL(/terms-and-conditions/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Hero heading is visible', async ({ page }) => {
    await expect(page.getByRole('heading').first()).toBeVisible();
  });

  test('Company name is visible', async ({ page }) => {
    await expect(page.getByRole('heading').nth(1)).toBeVisible();
  });

  test('Service Booking section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Service Booking' })
    ).toBeVisible();
  });

  test('Minimum Booking Rule section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Minimum Booking Rule' })
    ).toBeVisible();
  });

  test('Payments section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Payments' })
    ).toBeVisible();
  });

  test('Cancellation Policy section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Cancellation Policy' })
    ).toBeVisible();
  });

  test('Customer Responsibilities section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Customer Responsibilities' })
    ).toBeVisible();
  });

  test('Contact Information section exists', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Contact Information' })
    ).toBeVisible();
  });

  test('Footer is visible', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
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