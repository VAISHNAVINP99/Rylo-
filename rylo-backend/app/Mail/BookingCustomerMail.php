<?php

namespace App\Mail;

use App\Models\Booking;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class BookingCustomerMail extends Mailable
{
    use Queueable, SerializesModels;

    public Booking $booking;

    /**
     * Create a new message instance.
     */
    public function __construct(Booking $booking)
    {
        $this->booking = $booking;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: ' Booking Confirmed | RYLO Support Services',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.booking-customer',
            with: [
                'booking' => $this->booking,
                'customerName' => $this->booking->customer_name,
                'service' => optional($this->booking->service)->title,
                'bookingDate' => $this->booking->date,
                'bookingTime' => $this->booking->time,
                'location' => $this->booking->location,
                'price' => $this->booking->price,
                'status' => $this->booking->status,
                'paymentStatus' => $this->booking->payment_status,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     */
    public function attachments(): array
    {
        return [];
    }
}