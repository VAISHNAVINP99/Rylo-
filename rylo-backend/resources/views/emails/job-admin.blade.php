<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>New Job Application</title>
</head>

<body>

<h2>New Job Application Received</h2>

<p><strong>Name:</strong> {{ $application->name }}</p>

<p><strong>Email:</strong> {{ $application->email }}</p>

<p><strong>Phone:</strong> {{ $application->phone }}</p>

<p><strong>Qualification:</strong> {{ $application->qualification }}</p>

<p><strong>Experience:</strong> {{ $application->experience }}</p>

<p><strong>Message:</strong> {{ $application->message ?? 'N/A' }}</p>

<br>

<p>
<strong>RYLO Support Services</strong><br>
New applicant notification
</p>

</body>

</html>