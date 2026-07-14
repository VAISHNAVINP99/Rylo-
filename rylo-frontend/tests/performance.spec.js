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
  test(`Performance: ${path}`, async ({ page }) => {
    const start = Date.now();

    await page.goto(`https://rylosupport.in${path}`, {
      waitUntil: "domcontentloaded",
    });

    const loadTime = Date.now() - start;

    console.log(`${path}: ${loadTime} ms`);

    expect(loadTime).toBeLessThan(3000);
  });
}