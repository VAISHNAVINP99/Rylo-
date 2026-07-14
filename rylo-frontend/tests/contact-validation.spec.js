import { test, expect } from "@playwright/test";

const URL = "https://rylosupport.in/contact";

test.describe("Contact Form Validation", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL, {
      waitUntil: "networkidle",
    });
  });

  test("Contact page loads", async ({ page }) => {

  await expect(
  page.getByRole("heading", {
    name: "Contact Us",
    level: 1,
  })
).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Send Message" })
    ).toBeVisible();

  });

  test("Required field validation", async ({ page }) => {

    await page.getByRole("button", {
      name: "Send Message",
    }).click();

    await expect(
      page.locator('input[name="name"]')
    ).toBeFocused();

  });

  test("Invalid email validation", async ({ page }) => {

    await page.fill(
      'input[name="name"]',
      "Playwright"
    );

    await page.fill(
      'input[name="phone"]',
      "9876543210"
    );

    await page.fill(
      'input[name="email"]',
      "abc"
    );

    await page.fill(
      'textarea[name="message"]',
      "Automation testing"
    );

    await page.getByRole("button", {
      name: "Send Message",
    }).click();

    await expect(
      page.locator('input[name="email"]')
    ).toHaveValue("abc");

  });

  test("Phone accepts invalid value (backend validation)", async ({ page }) => {

    await page.fill(
      'input[name="name"]',
      "Playwright"
    );

    await page.fill(
      'input[name="phone"]',
      "123"
    );

    await page.fill(
      'input[name="email"]',
      "playwright@test.com"
    );

    await page.fill(
      'textarea[name="message"]',
      "Automation testing"
    );

    page.once("dialog", async dialog => {
      console.log(dialog.message());
      await dialog.dismiss();
    });

    await page.getByRole("button", {
      name: "Send Message",
    }).click();

  });

  test("Successful contact form submission", async ({ page }) => {

    page.once("dialog", async dialog => {

      expect(dialog.message()).toContain(
        "Message Sent Successfully"
      );

      await dialog.dismiss();

    });

    await page.fill(
      'input[name="name"]',
      "Playwright Test"
    );

    await page.fill(
      'input[name="phone"]',
      "9876543210"
    );

    await page.fill(
      'input[name="email"]',
      "playwright@test.com"
    );

    await page.fill(
      'textarea[name="message"]',
      "This is a Playwright automation test."
    );

    await page.getByRole("button", {
      name: "Send Message",
    }).click();

    await expect(
      page.locator('input[name="name"]')
    ).toHaveValue("");

    await expect(
      page.locator('input[name="phone"]')
    ).toHaveValue("");

    await expect(
      page.locator('input[name="email"]')
    ).toHaveValue("");

    await expect(
      page.locator('textarea[name="message"]')
    ).toHaveValue("");

  });

});