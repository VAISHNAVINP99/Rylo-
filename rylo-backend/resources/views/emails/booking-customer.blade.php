<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Booking Confirmation</title>
</head>

<body>

    <h2>Booking Confirmation</h2>

    <p>Dear {{ $booking->customer_name }},</p>

    <p>Thank you for choosing <strong>RYLO Support Services</strong>.</p>

    <p>Your booking has been received successfully.</p>

    <table cellpadding="6" cellspacing="0" border="1">
        <tr>
            <td><strong>Service</strong></td>
            <td>{{ optional($booking->service)->title }}</td>
        </tr>
        <tr>
            <td><strong>Date</strong></td>
            <td>{{ $booking->date }}</td>
        </tr>
        <tr>
            <td><strong>Time</strong></td>
            <td>{{ $booking->time }}</td>
        </tr>
        <tr>
            <td><strong>Location</strong></td>
            <td>{{ $booking->location }}</td>
        </tr>
        <tr>
            <td><strong>Duration</strong></td>
            <td>{{ $booking->duration }}</td>
        </tr>
    </table>

    <br>

    <p>Our team will contact you shortly to confirm your booking.</p>

    <p>Thank you.</p>

    <p>
        <strong>RYLO Support Services</strong><br>
        Email: rylosupportservices@gmail.com<br>
        Phone: +91 79945 73013
    </p>

</body>

</html>