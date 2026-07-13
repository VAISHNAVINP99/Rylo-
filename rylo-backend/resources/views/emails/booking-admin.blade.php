<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Service Booking</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:30px 0;">
        <tr>
            <td align="center">

                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">

                    <!-- Header -->
                    <tr>
                        <td style="background:linear-gradient(90deg,#6d28d9,#2563eb);padding:25px;text-align:center;">
                            <h1 style="margin:0;color:#ffffff;font-size:28px;">
                                New Service Booking
                            </h1>
                        </td>
                    </tr>

                    <!-- Intro -->
                    <tr>
                        <td style="padding:30px;">
                            <p style="margin:0 0 20px;font-size:16px;color:#555;">
                                A new service booking has been submitted through the RYLO Support Services website.
                            </p>

                            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

                                <tr style="background:#f8f9fc;">
                                    <td style="font-weight:bold;width:35%;">Customer Name</td>
                                    <td>{{ $booking->customer_name }}</td>
                                </tr>

                                <tr>
                                    <td style="font-weight:bold;">Email Address</td>
                                    <td>{{ $booking->email }}</td>
                                </tr>

                                <tr style="background:#f8f9fc;">
                                    <td style="font-weight:bold;">Phone Number</td>
                                    <td>{{ $booking->mobile }}</td>
                                </tr>

                                <tr>
                                    <td style="font-weight:bold;">Service</td>
                                    <td>{{ optional($booking->service)->title }}</td>
                                </tr>

                                <tr style="background:#f8f9fc;">
                                    <td style="font-weight:bold;">Booking Date</td>
                                    <td>{{ $booking->date }}</td>
                                </tr>

                                <tr>
                                    <td style="font-weight:bold;">Booking Time</td>
                                    <td>{{ $booking->time }}</td>
                                </tr>

                                <tr style="background:#f8f9fc;">
                                    <td style="font-weight:bold;">Service Location</td>
                                    <td>{{ $booking->location }}</td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background:#f8f9fc;padding:20px;text-align:center;font-size:13px;color:#777;">
                            This is an automated notification from
                            <strong>RYLO Support Services</strong>.<br>
                            Please contact the customer to confirm the booking.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>