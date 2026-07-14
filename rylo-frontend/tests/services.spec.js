import { test, expect } from '@playwright/test';

test.describe('Services Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');
  });

  test('Services page loads', async ({ page }) => {
    await expect(page).toHaveURL(/services/);
  });

  test('Service cards are displayed', async ({ page }) => {
    const cards = page.getByTestId('service-card');

    await expect(cards.first()).toBeVisible();

    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('Service images are visible', async ({ page }) => {
    const images = page.getByTestId('service-image');

    const count = await images.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  });

  test('Book Now button exists', async ({ page }) => {
    const buttons = page.getByTestId('book-now');

    expect(await buttons.count()).toBeGreaterThan(0);

    await expect(buttons.first()).toBeVisible();
  });

});