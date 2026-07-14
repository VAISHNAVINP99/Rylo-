<?php

namespace Tests\Feature\Api;

use App\Models\Review;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class ReviewApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function reviews_api_returns_all_reviews(): void
    {
        Review::create([
            'name' => 'Vaishnavi',
            'review' => 'Excellent Service',
            'rating' => 5,
            'status' => true,
        ]);

        Review::create([
            'name' => 'Rahul',
            'review' => 'Very Good',
            'rating' => 4,
            'status' => true,
        ]);

        Review::create([
            'name' => 'Anu',
            'review' => 'Highly Recommended',
            'rating' => 5,
            'status' => true,
        ]);

        $response = $this->getJson('/api/reviews');

        $response->assertOk()
                 ->assertJsonCount(3);
    }

    #[Test]
    public function reviews_api_contains_review_data(): void
    {
        Review::create([
            'name' => 'Vaishnavi',
            'review' => 'Excellent Service',
            'rating' => 5,
            'status' => true,
        ]);

        $response = $this->getJson('/api/reviews');

        $response->assertOk()
                 ->assertJsonFragment([
                     'name' => 'Vaishnavi',
                     'review' => 'Excellent Service',
                     'rating' => 5,
                 ]);
    }

    #[Test]
    public function reviews_api_returns_empty_when_no_reviews_exist(): void
    {
        $response = $this->getJson('/api/reviews');

        $response->assertOk()
                 ->assertExactJson([]);
    }
}