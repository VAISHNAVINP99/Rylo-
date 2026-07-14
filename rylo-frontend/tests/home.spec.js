import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {

  test.beforeEach(async ({ page }) => {

    // Why Choose
    await page.route("**/api/why-choose", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: 1,
            title: "Trusted Professionals",
            description: "Professional support services"
          }
        ])
      });
    });

    // Stats
    await page.route("**/api/stats", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: 1,
            title: "Happy Customers",
            value: "500+"
          },
          {
            id: 2,
            title: "Services",
            value: "25+"
          }
        ])
      });
    });

    // CTA
    await page.route("**/api/cta", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          title: "Need Professional Support?",
          phone: "917994573013",
          call_button: "Call Now",
          whatsapp: "917994573013",
          whatsapp_button: "WhatsApp"
        })
      });
    });

    // Reviews
    await page.route("**/api/reviews", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: 1,
            name: "John",
            rating: 5,
            review: "Excellent service",
            image: null
          }
        ])
      });
    });

    await page.goto("https://rylosupport.in");
  });

  test("Home page loads", async ({ page }) => {
    await expect(page).toHaveTitle(/RYLO/i);
  });

  test("Navbar is visible", async ({ page }) => {
    await expect(page.locator("nav")).toBeVisible();
  });

  test("Why Choose section is visible", async ({ page }) => {
    await expect(page.getByText("Why Choose Us")).toBeVisible();
    await expect(page.getByText("Trusted Professionals")).toBeVisible();
  });

  test("Stats section is visible", async ({ page }) => {
    await expect(page.getByText("500+")).toBeVisible();
    await expect(page.getByText("Happy Customers")).toBeVisible();
  });

  test("Customer Reviews section is visible", async ({ page }) => {
    await expect(page.getByText("Customer Reviews")).toBeVisible();
    await expect(page.getByText("John")).toBeVisible();
    await expect(page.getByText("Excellent service")).toBeVisible();
  });

  test("CTA section is visible", async ({ page }) => {
    await expect(page.getByText("Need Professional Support?")).toBeVisible();
    await expect(page.getByRole("link", { name: "Call Now" })).toBeVisible();
    await expect(page.getByRole("link", { name: "WhatsApp" })).toBeVisible();
  });

  test("Footer is visible", async ({ page }) => {
    await expect(page.locator("footer")).toBeVisible();
  });

  test("WhatsApp floating button is visible", async ({ page }) => {
    const whatsappButton = page.locator('a[href*="wa.me"]').last();
    await expect(whatsappButton).toBeVisible();
  });

});