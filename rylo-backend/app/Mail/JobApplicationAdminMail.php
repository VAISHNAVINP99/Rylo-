<?php

namespace App\Mail;

use App\Models\JobApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class JobApplicationAdminMail extends Mailable
{
    use Queueable, SerializesModels;

    public JobApplication $application;

    /**
     * Create a new message instance.
     */
    public function __construct(JobApplication $application)
    {
        $this->application = $application;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Job Application - RYLO Support Services',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.job-admin',
            with: [
                'application' => $this->application,
            ],
        );
    }

    /**
     * Get the attachments.
     */
    public function attachments(): array
    {
        return [];
    }
}