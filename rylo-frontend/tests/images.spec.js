import { test, expect } from "@playwright/test";

const BASE_URL = "https://rylosupport.in";

const pages = [
  "/",
  "/about",
  "/services",
];

test.describe("Website Images", () => {

  for (const pagePath of pages) {

    test(`Images on ${pagePath}`, async ({ page, request }) => {

      await page.goto(`${BASE_URL}${pagePath}`, {
        waitUntil: "domcontentloaded",
      });

      // Wait for React + Axios rendering
      await page.waitForTimeout(5000);

      const images = page.locator("img");

      const count = await images.count();

      console.log(`${pagePath}: ${count} images found`);

      // Don't fail if a page legitimately has no images
      if (count === 0) {
        console.log(`No images found on ${pagePath}`);
        return;
      }

      for (let i = 0; i < count; i++) {

        const image = images.nth(i);

        await expect(image).toBeVisible();

        const src = await image.getAttribute("src");

        expect(src).toBeTruthy();

        let imageUrl = src;

        if (!src.startsWith("http")) {
          imageUrl = new URL(src, BASE_URL).toString();
        }

        const response = await request.get(imageUrl);

        expect(response.ok()).toBeTruthy();

        console.log(`✓ ${imageUrl}`);

      }

    });

  }

});