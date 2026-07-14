<?php

namespace Tests\Feature\Api;

use App\Models\HeroSection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class HeroApiTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function hero_api_returns_success()
    {
       HeroSection::create([
    'title' => 'Welcome to RYLO',
    'subtitle' => 'Reliable People',
    'description' => 'Testing',
    'status' => true,
]);

        $response = $this->getJson('/api/hero');

        $response->assertOk();

        $response->assertJsonFragment([
            'title' => 'Welcome to RYLO',
        ]);
    }

    /** @test */
    public function hero_api_returns_200_when_no_data_exists()
    {
        $response = $this->getJson('/api/hero');

        $response->assertOk();
    }
}