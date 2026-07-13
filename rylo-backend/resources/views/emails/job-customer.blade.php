<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Application Received</title>
</head>

<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:30px 0;">
        <tr>
            <td align="center">

                <table width="600" cellpadding="0" cellspacing="0"
                    style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,.08);">

                    <!-- Header -->
                    <tr>
                        <td align="center"
                            style="padding:30px;background:linear-gradient(90deg,#6d28d9,#2563eb);">
                            <h1 style="margin:0;color:#ffffff;font-size:30px;">
                                Application Received
                            </h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding:35px;">

                            <p style="font-size:16px;color:#444;margin-top:0;">
                                Dear <strong>{{ $application->name }}</strong>,
                            </p>

                            <p style="font-size:16px;color:#555;line-height:28px;">
                                Thank you for your interest in joining
                                <strong>RYLO Support Services</strong>.
                                We appreciate the time and effort you invested in submitting your application.
                            </p>

                            <p style="font-size:16px;color:#555;line-height:28px;">
                                This email confirms that we have successfully received your application.
                                Our HR team will carefully review your profile, and if your qualifications
                                match our current requirements, we will contact you regarding the next steps in the recruitment process.
                            </p>

                            <!-- Application Details -->
                            <table width="100%" cellpadding="12" cellspacing="0"
                                style="margin-top:25px;border-collapse:collapse;border:1px solid #e5e7eb;">

                                <tr style="background:#f8fafc;">
                                    <td style="width:35%;font-weight:bold;border:1px solid #e5e7eb;">
                                        Applicant Name
                                    </td>
                                    <td style="border:1px solid #e5e7eb;">
                                        {{ $application->name }}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="font-weight:bold;border:1px solid #e5e7eb;">
                                        Email Address
                                    </td>
                                    <td style="border:1px solid #e5e7eb;">
                                        {{ $application->email }}
                                    </td>
                                </tr>

                                <tr style="background:#f8fafc;">
                                    <td style="font-weight:bold;border:1px solid #e5e7eb;">
                                        Phone Number
                                    </td>
                                    <td style="border:1px solid #e5e7eb;">
                                        {{ $application->phone }}
                                    </td>
                                </tr>

                            </table>

                            <p style="margin-top:30px;font-size:16px;color:#555;line-height:28px;">
                                We sincerely appreciate your interest in becoming a part of our team and wish you the best of luck throughout the recruitment process.
                            </p>

                            <p style="font-size:16px;color:#444;">
                                Kind Regards,<br>
                                <strong>RYLO Support Services Team</strong>
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center"
                            style="background:#f8fafc;padding:25px;border-top:1px solid #e5e7eb;">

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
                                This is an automated email confirming receipt of your application.
                                Please do not reply to this message.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>

</html>