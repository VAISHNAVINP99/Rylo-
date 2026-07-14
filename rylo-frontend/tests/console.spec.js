import { test, expect } from "@playwright/test";

const pages = [
  "/",
  "/about",
  "/services",
  "/payment",
  "/booking",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
];

for (const path of pages) {
  test(`Console errors: ${path}`, async ({ page }) => {
    const errors = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    page.on("pageerror", (error) => {
      errors.push(error.message);
    });

    await page.goto(`https://rylosupport.in${path}`, {
      waitUntil: "networkidle",
    });

    expect(errors).toEqual([]);
  });
}