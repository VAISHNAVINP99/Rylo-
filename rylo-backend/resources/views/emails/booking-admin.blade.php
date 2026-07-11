<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>New Booking</title>
</head>

<body>

    <h2>New Service Booking</h2>

    <p><strong>Name:</strong> {{ $booking->customer_name }}</p>

    <p><strong>Email:</strong> {{ $booking->email }}</p>

    <p><strong>Phone:</strong> {{ $booking->mobile }}</p>

    <p><strong>Service:</strong> {{ optional($booking->service)->title }}</p>

    <p><strong>Date:</strong> {{ $booking->date }}</p>

    <p><strong>Time:</strong> {{ $booking->time }}</p>

    <p><strong>Location:</strong> {{ $booking->location }}</p>

    <p><strong>Duration:</strong> {{ $booking->duration }}</p>

    <p><strong>Notes:</strong> {{ $booking->notes }}</p>

</body>

</html>