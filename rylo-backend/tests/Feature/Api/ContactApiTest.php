<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class ContactApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function submit_contact_successfully(): void
    {
        $response = $this->postJson('/api/contact-enquiries', [
            'name' => 'Vaishnavi',
            'email' => 'test@test.com',
            'phone' => '9876543210',
            'message' => 'Testing Contact',
        ]);

        $response->assertCreated(); // or assertStatus(201)
    }

    #[Test]
    public function contact_validation_fails(): void
    {
        $response = $this->postJson('/api/contact-enquiries', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors([
                     'name',
                     'email',
                     'phone',
                     'message',
                 ]);
    }
}