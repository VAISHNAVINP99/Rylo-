import { test, expect } from '@playwright/test';

test.describe('Navbar Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Homepage loads', async ({ page }) => {
    await expect(page).toHaveURL('https://www.rylosupport.in/');
  });

  test('Navigate to About', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/about/);
  });

  test('Navigate to Services', async ({ page }) => {
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL(/services/);
  });

  test('Navigate to Job Openings', async ({ page }) => {
    await page.getByRole('link', { name: 'Job Openings' }).click();
    await expect(page).toHaveURL(/job_opening/);
  });

  test('Navigate to Contact', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/contact/);
  });

});