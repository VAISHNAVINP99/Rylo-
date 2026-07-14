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

const viewports = [
  { name: "Mobile", width: 375, height: 667 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Desktop", width: 1440, height: 900 },
];

for (const pagePath of pages) {
  for (const viewport of viewports) {
    test(`${pagePath} - ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      await page.goto(`https://rylosupport.in${pagePath}`);

      await expect(page.locator("body")).toBeVisible();

      const overflow = await page.evaluate(() => {
        return (
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth
        );
      });

      expect(overflow).toBe(false);
    });
  }
}