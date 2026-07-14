<?php

namespace Tests\Feature\Api;

use App\Models\JobApplication;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class JobApplicationApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function apply_job_successfully(): void
    {
        Storage::fake('public');

        $file = UploadedFile::fake()->create('resume.pdf', 100, 'application/pdf');

        $response = $this->post('/api/job-applications', [
            'name'   => 'Vaishnavi',
            'email'  => 'test@test.com',
            'phone'  => '9876543210',
            'resume' => $file,
        ]);

        $response->assertCreated(); // HTTP 201

        $this->assertDatabaseHas('job_applications', [
            'email' => 'test@test.com',
        ]);
    }
}