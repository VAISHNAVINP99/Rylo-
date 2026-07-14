# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> Accessibility Tests >> Accessibility: /about
- Location: tests\accessibility.spec.js:20:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://rylosupport.in/about", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - link "RYLO" [ref=e5] [cursor=pointer]:
        - /url: /
        - heading "RYLO" [level=1] [ref=e6]
      - generic [ref=e7]:
        - link "Home" [ref=e8] [cursor=pointer]:
          - /url: /
        - link "About" [ref=e9] [cursor=pointer]:
          - /url: /about
        - link "Services" [ref=e10] [cursor=pointer]:
          - /url: /services
        - link "Job Openings" [ref=e11] [cursor=pointer]:
          - /url: /job_opening
        - link "Contact" [ref=e12] [cursor=pointer]:
          - /url: /contact
  - generic [ref=e14]:
    - heading "About us" [level=1] [ref=e15]
    - paragraph [ref=e16]: scdffg
  - generic [ref=e19]:
    - img "Rylo Trading" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e24]: frg
      - heading "Rylo Trading" [level=2] [ref=e25]
      - paragraph [ref=e27]: At RYLO Support Services, we are dedicated to providing dependable and professional support solutions that make everyday life easier. Whether you require a skilled call driver, compassionate caregiving, patient assistance, or reliable housekeeping services, our experienced team is committed to delivering safe, timely, and high-quality service tailored to your needs.
      - paragraph [ref=e29]: At RYLO Support Services, we are dedicated to providing dependable and professional support solutions that make everyday life easier. Whether you require a skilled call driver, compassionate caregiving, patient assistance, or reliable housekeeping services, our experienced team is committed to delivering safe, timely, and high-quality service tailored to your needs.
  - generic [ref=e31]:
    - generic [ref=e32]:
      - heading "Mission & Vision" [level=2] [ref=e33]
      - paragraph [ref=e34]: Our purpose and future direction.
    - generic [ref=e35]:
      - generic [ref=e36]:
        - heading "Our Mission" [level=3] [ref=e37]
        - paragraph [ref=e39]: To deliver reliable, professional, and customer-focused support services that improve the quality of life for individuals, families, and businesses through trust, compassion, and excellence.
      - generic [ref=e40]:
        - heading "Our Vision" [level=3] [ref=e41]
        - paragraph [ref=e43]: To become the most trusted and preferred support service provider by setting the standard for quality, reliability, and customer satisfaction while creating a positive impact in every community we serve.
  - generic [ref=e45]:
    - generic [ref=e46]:
      - generic [ref=e47]: Why Choose Us
      - paragraph [ref=e48]: We provide reliable, professional and affordable support services tailored to your personal, family and business needs.
    - generic [ref=e50]:
      - heading "gghggfg" [level=3] [ref=e51]
      - paragraph [ref=e53]: hvgcfdfxdfhbhjbjhbhj ghydfrtdrd
  - generic [ref=e56]:
    - heading "Need Reliable Support? We're Here to Help." [level=2] [ref=e57]
    - paragraph [ref=e58]: Whether you need a professional driver, caring support, patient assistance, or housekeeping services, RYLO Support Services is just a call away.
    - link "+9887665" [ref=e59] [cursor=pointer]:
      - /url: https://wa.me/8590244455
  - contentinfo [ref=e60]:
    - generic [ref=e62]:
      - generic [ref=e63]:
        - heading "Rylo Trading" [level=2] [ref=e64]
        - paragraph [ref=e65]: bvvbcc
        - paragraph [ref=e66]: jvgfgxdfxdf vytfrtderd hbhcfg
      - generic [ref=e67]:
        - heading "Quick Links" [level=3] [ref=e68]
        - list [ref=e69]:
          - listitem [ref=e70]:
            - link "Home" [ref=e71] [cursor=pointer]:
              - /url: /
          - listitem [ref=e72]:
            - link "About Us" [ref=e73] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e74]:
            - link "Services" [ref=e75] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e76]:
            - link "Contact" [ref=e77] [cursor=pointer]:
              - /url: /contact
          - listitem [ref=e78]:
            - link "Admin Login" [ref=e79] [cursor=pointer]:
              - /url: https://api.rylosupport.in/admin/login
      - generic [ref=e80]:
        - heading "Contact Us" [level=3] [ref=e81]
        - generic [ref=e82]:
          - generic [ref=e83]:
            - img [ref=e85]
            - link "08590247676" [ref=e87] [cursor=pointer]:
              - /url: tel:08590247676
          - generic [ref=e88]:
            - img [ref=e90]
            - link "mmrrmhj@gmail.com" [ref=e92] [cursor=pointer]:
              - /url: mailto:mmrrmhj@gmail.com
          - generic [ref=e93]:
            - img [ref=e95]
            - paragraph [ref=e97]: Puthgfdd gftddrdssdf bgguffgx
      - generic [ref=e98]:
        - heading "Our Branches" [level=3] [ref=e99]
        - generic [ref=e101]:
          - heading "kozhikode" [level=4] [ref=e102]
          - paragraph [ref=e103]: Puthiyottum Kandi Parambu Puthiyappa
          - paragraph [ref=e104]: 📞 08590247676
          - paragraph [ref=e105]: ✉️ mmrrm@gmail.com
    - generic [ref=e108]:
      - paragraph [ref=e109]: copyright@2026
      - generic [ref=e110]:
        - link "Privacy Policy" [ref=e111] [cursor=pointer]:
          - /url: /privacy-policy
        - link "Terms & Conditions" [ref=e112] [cursor=pointer]:
          - /url: /terms-and-conditions
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import AxeBuilder from "@axe-core/playwright";
  3  | 
  4  | const pages = [
  5  |   "/",
  6  |   "/about",
  7  |   "/services",
  8  |   "/payment",
  9  |   "/contact",
  10 |   "/booking/1",
  11 |   "/job_opening",
  12 |   "/privacy-policy",
  13 |   "/terms-conditions",
  14 | ];
  15 | 
  16 | test.describe("Accessibility Tests", () => {
  17 | 
  18 |   for (const route of pages) {
  19 | 
  20 |     test(`Accessibility: ${route}`, async ({ page }) => {
  21 | 
> 22 |       await page.goto(`https://rylosupport.in${route}`, {
     |                  ^ Error: page.goto: Test timeout of 30000ms exceeded.
  23 |         waitUntil: "networkidle",
  24 |       });
  25 | 
  26 |       const results = await new AxeBuilder({
  27 |         page,
  28 |       }).analyze();
  29 | 
  30 |       expect(results.violations).toEqual([]);
  31 | 
  32 |     });
  33 | 
  34 |   }
  35 | 
  36 | });
```