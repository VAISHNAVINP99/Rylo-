import { test, expect } from "@playwright/test";
import path from "path";

const URL = "https://rylosupport.in/job_opening";

test.describe("Job Application Form Validation", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL, {
      waitUntil: "networkidle",
    });
  });

  test("Job application page loads", async ({ page }) => {

    await expect(
      page.getByRole("heading", { name: "Job Application" })
    ).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Submit Application" })
    ).toBeVisible();

  });

  test("Required field validation", async ({ page }) => {

    await page.getByRole("button", {
      name: "Submit Application",
    }).click();

    await expect(
      page.getByText("Full Name is required")
    ).toBeVisible();

    await expect(
      page.getByText("Phone Number is required")
    ).toBeVisible();

    await expect(
      page.getByText("Place is required")
    ).toBeVisible();

  await expect(
    page.locator("p.text-red-500").filter({
        hasText: "Select Job Type",
    })
).toBeVisible();
    await expect(
      page.getByText("Upload Resume")
    ).toBeVisible();

  });

  test("Invalid email validation", async ({ page }) => {

    await page.fill('input[name="name"]', "Playwright");

    await page.fill('input[name="phone"]', "9876543210");

    await page.fill('input[name="email"]', "abc");

    await page.fill('input[name="place"]', "Kozhikode");

    await page.selectOption(
      'select[name="job_type"]',
      "Full Time"
    );

    await page.setInputFiles(
      "#resume",
      "./tests/sample-files/sample.pdf"
    );

    await page.getByRole("button", {
      name: "Submit Application",
    }).click();

    await expect(
      page.locator('input[name="email"]')
    ).toHaveValue("abc");

  });

  test("Resume upload works", async ({ page }) => {

    await page.setInputFiles(
      "#resume",
   "./tests/sample-files/sample.pdf"
    );

    const fileInput = page.locator("#resume");

    await expect(fileInput).toHaveJSProperty(
      "files",
      await fileInput.evaluateHandle(el => el.files)
    );

  });

  test("Successful job application", async ({ page }) => {

    await page.fill(
      'input[name="name"]',
      "Playwright Test"
    );

    await page.fill(
      'input[name="phone"]',
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
      'input[name="place"]',
      "Kozhikode"
    );

    await page.fill(
      'input[name="position"]',
      "Housekeeping"
    );

    await page.selectOption(
      'select[name="job_type"]',
      "Full Time"
    );

    await page.fill(
      'textarea[name="message"]',
      "This is an automated Playwright application."
    );

  await page.setInputFiles(
    "#resume",
    "./tests/sample-files/sample.pdf"
);

    await page.getByRole("button", {
      name: "Submit Application",
    }).click();

    await expect(
      page.getByText("Application submitted successfully.")
    ).toBeVisible();

  });

});