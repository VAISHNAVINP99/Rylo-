<?php

namespace Tests\Feature\Api;

use App\Models\Service;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class BookingApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function create_booking_successfully(): void
    {
        $service = Service::create([
            'title' => 'Cleaning Service',
            'description' => 'Home cleaning service',
            'image' => 'services/cleaning.jpg',
            'working_category' => 'Home',
            'working_time' => '2 Hours',
            'price' => 500,
            'status' => true,
        ]);

        $response = $this->postJson('/api/bookings', [
            'service_id' => $service->id,
            'name' => 'Vaishnavi',
            'email' => 'test@test.com',
            'phone' => '9876543210',
            'address' => 'Kozhikode',
            'booking_date' => now()->addDay()->toDateString(),
        ]);

        $response->assertCreated(); // or ->assertStatus(201)

        $this->assertDatabaseHas('bookings', [
            'email' => 'test@test.com',
        ]);
    }

    #[Test]
    public function booking_validation_fails(): void
    {
        $response = $this->postJson('/api/bookings', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors([
                     'name',
                     'phone',
                 ]);
    }
}