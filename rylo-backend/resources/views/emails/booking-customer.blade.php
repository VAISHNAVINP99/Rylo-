<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Booking Confirmation</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:30px 0;">
    <tr>
        <td align="center">

            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,.08);">

                <!-- Header -->
                <tr>
                    <td align="center" style="padding:30px;background:linear-gradient(90deg,#6d28d9,#2563eb);">
                        <h1 style="margin:0;color:#ffffff;font-size:30px;">
                            Booking Confirmation
                        </h1>
                    </td>
                </tr>

                <!-- Greeting -->
                <tr>
                    <td style="padding:35px;">
                        <p style="font-size:16px;color:#444;margin-top:0;">
                            Dear <strong>{{ $booking->customer_name }}</strong>,
                        </p>

                        <p style="font-size:16px;color:#555;line-height:28px;">
                            Thank you for choosing <strong>RYLO Support Services</strong>.
                            We are pleased to inform you that your booking request has been received successfully.
                        </p>

                        <p style="font-size:16px;color:#555;line-height:28px;">
                            Below are your booking details:
                        </p>

                        <!-- Booking Details -->
                        <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;border:1px solid #e5e7eb;">

                            <tr style="background:#f8fafc;">
                                <td style="font-weight:bold;width:35%;border:1px solid #e5e7eb;">Service</td>
                                <td style="border:1px solid #e5e7eb;">
                                    {{ optional($booking->service)->title }}
                                </td>
                            </tr>

                            <tr>
                                <td style="font-weight:bold;border:1px solid #e5e7eb;">Date</td>
                                <td style="border:1px solid #e5e7eb;">
                                    {{ $booking->date }}
                                </td>
                            </tr>

                            <tr style="background:#f8fafc;">
                                <td style="font-weight:bold;border:1px solid #e5e7eb;">Time</td>
                                <td style="border:1px solid #e5e7eb;">
                                    {{ $booking->time }}
                                </td>
                            </tr>

                            <tr>
                                <td style="font-weight:bold;border:1px solid #e5e7eb;">Location</td>
                                <td style="border:1px solid #e5e7eb;">
                                    {{ $booking->location }}
                                </td>
                            </tr>

                         

                        </table>

                        <p style="margin-top:30px;font-size:16px;color:#555;line-height:28px;">
                            Our team will review your request and contact you shortly to confirm your booking and provide any additional information if required.
                        </p>

                        <p style="font-size:16px;color:#555;line-height:28px;">
                            We appreciate your trust in RYLO Support Services and look forward to serving you.
                        </p>

                        <p style="font-size:16px;color:#444;">
                            Kind Regards,<br>
                            <strong>RYLO Support Services Team</strong>
                        </p>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td align="center" style="background:#f8fafc;padding:25px;border-top:1px solid #e5e7eb;">

                        <h3 style="margin:0;color:#6d28d9;">
                            RYLO Support Services
                        </h3>

                        <p style="margin:10px 0;color:#666;font-size:14px;">
                            Reliable People. Reliable Support.
                        </p>

                        <p style="margin:5px 0;font-size:14px;color:#666;">
                            📧 rylosupportservices@gmail.com
                        </p>

                        <p style="margin:5px 0;font-size:14px;color:#666;">
                            📞 +91 79945 73013
                        </p>

                        <p style="margin-top:20px;font-size:12px;color:#999;">
                            This is an automated confirmation email. Please do not reply to this message.
                        </p>

                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>

</body>
</html>