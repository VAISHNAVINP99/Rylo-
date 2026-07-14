<?php

namespace Tests\Feature\Api;

use App\Models\Service;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class ServiceApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_services()
    {
        Service::create([
            'title' => 'Cleaning',
            'description' => 'Cleaning service',
            'image' => 'services/cleaning.jpg',
            'working_category' => 'Home',
            'working_time' => '2 Hours',
            'price' => 500,
            'status' => true,
        ]);

        Service::create([
            'title' => 'Plumbing',
            'description' => 'Plumbing service',
            'image' => 'services/plumbing.jpg',
            'working_category' => 'Home',
            'working_time' => '1 Hour',
            'price' => 700,
            'status' => true,
        ]);

        Service::create([
            'title' => 'Electrical',
            'description' => 'Electrical service',
            'image' => 'services/electrical.jpg',
            'working_category' => 'Home',
            'working_time' => '3 Hours',
            'price' => 900,
            'status' => true,
        ]);

        $response = $this->getJson('/api/services');

        $response->assertOk()
                 ->assertJsonCount(3);
    }

    public function test_single_service()
    {
        $service = Service::create([
            'title' => 'Cleaning',
            'description' => 'Cleaning service',
            'image' => 'services/cleaning.jpg',
            'working_category' => 'Home',
            'working_time' => '2 Hours',
            'price' => 500,
            'status' => true,
        ]);

        $response = $this->getJson("/api/services/{$service->id}");

        $response->assertOk()
                 ->assertJsonFragment([
                     'title' => 'Cleaning',
                 ]);
    }
}