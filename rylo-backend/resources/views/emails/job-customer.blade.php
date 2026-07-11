<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Application Received</title>
</head>

<body>

<h2>Thank You For Applying</h2>

<p>Dear {{ $application->name }},</p>

<p>
Thank you for applying for a position at 
<strong>RYLO Support Services</strong>.
</p>

<p>
We have successfully received your application.
Our HR team will review your details and contact you soon.
</p>

<br>

<p>
<strong>Application Details</strong>
</p>

<p>
Name: {{ $application->name }}<br>
Email: {{ $application->email }}<br>
Phone: {{ $application->phone }}
</p>

<br>

<p>
Regards,<br>
<strong>RYLO Support Services</strong><br>
Email: rylosupportservices@gmail.com<br>
Phone: +91 79945 73013
</p>

</body>

</html>