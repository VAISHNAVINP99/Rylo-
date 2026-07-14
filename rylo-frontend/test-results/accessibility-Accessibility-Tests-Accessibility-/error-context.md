# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> Accessibility Tests >> Accessibility: /
- Location: tests\accessibility.spec.js:20:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 345

- Array []
+ Array [
+   Object {
+     "description": "Ensure buttons have discernible text",
+     "help": "Buttons must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright",
+     "id": "button-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button class=\"h-3 rounded-full transition-all duration-300 w-8 bg-purple-700\"></button>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".w-8",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button class=\"h-3 rounded-full transition-all duration-300 w-3 bg-gray-300 hover:bg-purple-500\"></button>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".w-3",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.9.1",
+     ],
+   },
+   Object {
+     "description": "Ensure the document has a main landmark",
+     "help": "Document should have one main landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/landmark-one-main?application=playwright",
+     "id": "landmark-one-main",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-main",
+             "impact": "moderate",
+             "message": "Document does not have a main landmark",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Document does not have a main landmark",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"grid lg:grid-cols-2 gap-16 items-center\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".lg\\:grid-cols-2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<section class=\"py-20 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".py-20",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<section class=\"py-16\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".py-16:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"text-center mb-14\"><h2 class=\"text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent\">Customer Reviews</h2><p class=\"text-gray-600 mt-4\">What our customers say about RYLO Support Services</p></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".mb-14",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"swiper-wrapper\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".swiper-wrapper",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<section class=\"py-16\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".py-16:nth-child(6)",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+       "RGAAv4",
+       "RGAA-9.2.1",
+     ],
+   },
+ ]
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
    - generic [ref=e15]:
      - generic [ref=e16]:
        - generic [ref=e17]: Welcome to RYLO Support Services
        - heading "gbhn" [level=1] [ref=e18]
        - heading "Professional Assistance When You Need It Most" [level=2] [ref=e19]
        - paragraph [ref=e20]: fgbfdn gdbgfnhg hgh
        - generic [ref=e21]:
          - link "Book Service" [ref=e22] [cursor=pointer]:
            - /url: /book-now
          - generic [ref=e23]:
            - img [ref=e24]
            - text: WhatsApp
      - img "gbhn" [ref=e27]
    - generic [ref=e28]:
      - button [ref=e29]
      - button [ref=e30]
  - generic [ref=e32]:
    - generic [ref=e33]:
      - generic [ref=e34]: Why Choose Us
      - paragraph [ref=e35]: We provide reliable, professional and affordable support services tailored to your personal, family and business needs.
    - generic [ref=e37]:
      - heading "gghggfg" [level=3] [ref=e38]
      - paragraph [ref=e40]: hvgcfdfxdfhbhjbjhbhj ghydfrtdrd
  - generic [ref=e45]:
    - heading "6777" [level=3] [ref=e46]
    - paragraph [ref=e47]: hfxdxfg
  - generic [ref=e49]:
    - generic [ref=e50]:
      - heading "Customer Reviews" [level=2] [ref=e51]
      - paragraph [ref=e52]: What our customers say about RYLO Support Services
    - generic [ref=e56]:
      - img "bvvbvv" [ref=e58]
      - generic [ref=e59]:
        - generic [ref=e60]: ★
        - generic [ref=e61]: ★
        - generic [ref=e62]: ★
        - generic [ref=e63]: ★
        - generic [ref=e64]: ★
      - paragraph [ref=e65]: "\"bvghfgfg\""
      - heading "bvvbvv" [level=3] [ref=e66]
  - generic [ref=e69]:
    - heading "xabhj ghjgvghfdfsdf" [level=2] [ref=e71]
    - generic [ref=e72]:
      - link "Call Now" [ref=e73] [cursor=pointer]:
        - /url: tel:8767665676
      - link "WhatsApp" [ref=e74] [cursor=pointer]:
        - /url: https://wa.me/8590244455
  - contentinfo [ref=e75]:
    - generic [ref=e77]:
      - generic [ref=e78]:
        - heading "Rylo Trading" [level=2] [ref=e79]
        - paragraph [ref=e80]: bvvbcc
        - paragraph [ref=e81]: jvgfgxdfxdf vytfrtderd hbhcfg
      - generic [ref=e82]:
        - heading "Quick Links" [level=3] [ref=e83]
        - list [ref=e84]:
          - listitem [ref=e85]:
            - link "Home" [ref=e86] [cursor=pointer]:
              - /url: /
          - listitem [ref=e87]:
            - link "About Us" [ref=e88] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e89]:
            - link "Services" [ref=e90] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e91]:
            - link "Contact" [ref=e92] [cursor=pointer]:
              - /url: /contact
          - listitem [ref=e93]:
            - link "Admin Login" [ref=e94] [cursor=pointer]:
              - /url: https://api.rylosupport.in/admin/login
      - generic [ref=e95]:
        - heading "Contact Us" [level=3] [ref=e96]
        - generic [ref=e97]:
          - generic [ref=e98]:
            - img [ref=e100]
            - link "08590247676" [ref=e102] [cursor=pointer]:
              - /url: tel:08590247676
          - generic [ref=e103]:
            - img [ref=e105]
            - link "mmrrmhj@gmail.com" [ref=e107] [cursor=pointer]:
              - /url: mailto:mmrrmhj@gmail.com
          - generic [ref=e108]:
            - img [ref=e110]
            - paragraph [ref=e112]: Puthgfdd gftddrdssdf bgguffgx
      - generic [ref=e113]:
        - heading "Our Branches" [level=3] [ref=e114]
        - generic [ref=e116]:
          - heading "kozhikode" [level=4] [ref=e117]
          - paragraph [ref=e118]: Puthiyottum Kandi Parambu Puthiyappa
          - paragraph [ref=e119]: 📞 08590247676
          - paragraph [ref=e120]: ✉️ mmrrm@gmail.com
    - generic [ref=e123]:
      - paragraph [ref=e124]: copyright@2026
      - generic [ref=e125]:
        - link "Privacy Policy" [ref=e126] [cursor=pointer]:
          - /url: /privacy-policy
        - link "Terms & Conditions" [ref=e127] [cursor=pointer]:
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
  22 |       await page.goto(`https://rylosupport.in${route}`, {
  23 |         waitUntil: "networkidle",
  24 |       });
  25 | 
  26 |       const results = await new AxeBuilder({
  27 |         page,
  28 |       }).analyze();
  29 | 
> 30 |       expect(results.violations).toEqual([]);
     |                                  ^ Error: expect(received).toEqual(expected) // deep equality
  31 | 
  32 |     });
  33 | 
  34 |   }
  35 | 
  36 | });
```