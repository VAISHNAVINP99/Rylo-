import { test, expect } from "@playwright/test";

const URL = "https://rylosupport.in/booking/1"; // Change 1 to a valid service ID

test.describe("Booking Form Validation", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL, {
      waitUntil: "networkidle",
    });
  });

  test("Booking page loads", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Book a Service" })
    ).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Submit Booking" })
    ).toBeVisible();
  });

  test("Required fields are enforced", async ({ page }) => {

    await page.getByRole("button", { name: "Submit Booking" }).click();

    await expect(
      page.locator('input[name="customer_name"]')
    ).toBeFocused();

  });

  test("Invalid email validation", async ({ page }) => {

    await page.fill('input[name="customer_name"]', "Playwright");

    await page.fill('input[name="mobile"]', "9876543210");

    await page.fill('input[name="email"]', "abc");

    await page.fill('input[name="date"]', "2026-07-20");

    await page.fill('input[name="time"]', "10:00");

    await page.fill(
      'input[name="location"]',
      "Kozhikode"
    );

    await page.getByRole("button", {
      name: "Submit Booking",
    }).click();

    await expect(
      page.locator('input[name="email"]')
    ).toHaveValue("abc");

  });

  test("Mobile accepts only invalid short number (backend validation expected)", async ({ page }) => {

    await page.fill(
      'input[name="customer_name"]',
      "Playwright"
    );

    await page.fill(
      'input[name="mobile"]',
      "12345"
    );

    await page.fill(
      'input[name="date"]',
      "2026-07-20"
    );

    await page.fill(
      'input[name="time"]',
      "10:00"
    );

    await page.fill(
      'input[name="location"]',
      "Kozhikode"
    );

    page.once("dialog", async dialog => {
      console.log(dialog.message());
      await dialog.dismiss();
    });

    await page.getByRole("button", {
      name: "Submit Booking",
    }).click();

  });

  test("Booking with valid details", async ({ page }) => {

    await page.fill(
      'input[name="customer_name"]',
      "Playwright Test"
    );

    await page.fill(
      'input[name="mobile"]',
      "9876543210"
    );

    await page.fill(
      'input[name="whatsapp"]',
      "9876543210"
    );

    await page.fill(
      'input[name="email"]',
      "playwright@test.com"
    );

    await page.fill(
      'input[name="date"]',
      "2026-07-20"
    );

    await page.fill(
      'input[name="time"]',
      "10:00"
    );

    await page.fill(
      'input[name="location"]',
      "Kozhikode"
    );

    await page.fill(
      'textarea[name="notes"]',
      "Playwright automation testing"
    );

    await page.getByRole("button", {
      name: "Submit Booking",
    }).click();

    await expect(page).toHaveURL(/payment/);

  });

});