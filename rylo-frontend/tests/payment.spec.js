import { test, expect } from "@playwright/test";


test.describe("Payment Page", () => {


    test.beforeEach(async ({ page }) => {


        // Mock payment setting API
        await page.route(
            "https://api.rylosupport.in/api/payment-setting",
            async route => {

                await route.fulfill({
                    status: 200,
                    contentType: "application/json",
                    body: JSON.stringify({

                        qr_code: "payment/sample-qr.png",
                        upi_id: "rylosupport@upi",
                        upi_name: "RYLO Support Services"

                    })
                });

            }
        );


        await page.goto(
            "http://rylosupport.in/payment/1"
        );

    });



    test("Payment page heading visible", async ({ page }) => {


        await expect(
            page.getByText("Complete Your Payment")
        ).toBeVisible();


    });



    test("Booking ID displayed", async ({ page }) => {


        await expect(
            page.getByText("Booking ID : #1")
        ).toBeVisible();


    });



    test("QR code image visible", async ({ page }) => {


        const qrImage = page.locator(
            "img[alt='QR Code']"
        );


        await expect(
            qrImage
        ).toBeVisible();


        await expect(
            qrImage
        ).toHaveAttribute(
            "src",
            "https://api.rylosupport.in/storage/payment/sample-qr.png"
        );


    });



    test("UPI name and ID visible", async ({ page }) => {


        await expect(
            page.getByText("RYLO Support Services")
        ).toBeVisible();


        await expect(
            page.getByText("rylosupport@upi")
        ).toBeVisible();


    });



    test("Payment instructions visible", async ({ page }) => {


        await expect(
            page.getByText("Payment Instructions")
        ).toBeVisible();


        await expect(
            page.getByText(
                "Open any UPI app (PhonePe, GPay, Paytm)."
            )
        ).toBeVisible();


    });



    test("Copy UPI button exists", async ({ page }) => {


        const buttons = page.locator("button");


        await expect(
            buttons.first()
        ).toBeVisible();


    });



    test("Submit payment button works", async ({ page }) => {


        await page.route(
            "https://api.rylosupport.in/api/bookings/1/payment",
            async route => {


                await route.fulfill({

                    status:200,

                    contentType:"application/json",

                    body:JSON.stringify({

                        message:"Payment submitted successfully"

                    })

                });


            }
        );


        page.on(
            "dialog",
            async dialog => {

                await dialog.accept();

            }
        );


        await page.getByText(
            "I've Completed Payment"
        )
        .click();


        await expect(
            page
        )
        .toHaveURL(
            "http://rylosupport.in/"
        );


    });



    test("WhatsApp help button visible", async ({ page }) => {


        const whatsapp = page.getByText(
            "Need Help? Chat on WhatsApp"
        );


        await expect(
            whatsapp
        ).toBeVisible();


    });



    test("Secure payment message visible", async ({ page }) => {


        await expect(
            page.getByText(
                "Secure Payment"
            )
        ).toBeVisible();


    });



});