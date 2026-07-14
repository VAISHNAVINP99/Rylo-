import { test, expect } from '@playwright/test';

test.describe('WhatsApp Button', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('WhatsApp button is visible', async ({ page }) => {

    const whatsapp = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');

    await expect(whatsapp).toBeVisible();

  });

  test('WhatsApp link has correct URL', async ({ page }) => {

    const whatsapp = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');

    const href = await whatsapp.getAttribute('href');

    expect(href).toBeTruthy();
    expect(href).toContain('wa.me');

  });

  test('WhatsApp button is clickable', async ({ page }) => {

    const whatsapp = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');

    await expect(whatsapp).toBeEnabled();

  });

  test('WhatsApp opens in new tab', async ({ page }) => {

    const whatsapp = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');

    const target = await whatsapp.getAttribute('target');

    expect(target).toBe('_blank');

  });

});