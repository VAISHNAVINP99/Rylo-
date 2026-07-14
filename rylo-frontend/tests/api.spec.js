import { test, expect } from "@playwright/test";

const API = "https://api.rylosupport.in/api";

const endpoints = [
  { name: "Hero", url: "/hero", type: "array" },
  { name: "About", url: "/about", type: "object" },
  { name: "Services", url: "/services", type: "array" },
  { name: "Stats", url: "/stats", type: "array" },
  { name: "Reviews", url: "/reviews", type: "array" },
  { name: "CTA", url: "/cta", type: "object" },
  { name: "Footer", url: "/footer-settings", type: "object" },
  { name: "Payment", url: "/payment-setting", type: "object" },
  { name: "Why Choose", url: "/why-choose", type: "array" },
];

for (const endpoint of endpoints) {

  test(`${endpoint.name} API`, async ({ request }) => {

    const response = await request.get(`${API}${endpoint.url}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    if (endpoint.type === "array") {
      expect(Array.isArray(body)).toBeTruthy();
    } else {
      expect(typeof body).toBe("object");
      expect(body).not.toBeNull();
    }

  });

}