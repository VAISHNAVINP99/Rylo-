import { test, expect } from '@playwright/test';

test.describe('Job Openings Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/job_opening');
    await page.waitForLoadState('networkidle');
  });

  test('Job Openings page loads', async ({ page }) => {
    await expect(page).toHaveURL(/job_opening/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('Page has a heading', async ({ page }) => {
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
