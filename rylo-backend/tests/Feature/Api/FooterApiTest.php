<?php

namespace Tests\Feature\Api;

use App\Models\FooterSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class FooterApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function footer_api_returns_footer_settings(): void
    {
        FooterSetting::create([
            'company_name' => 'RYLO Support Services',
            'address' => 'Kozhikode, Kerala',
            'phone' => '9876543210',
            'email' => 'info@rylosupport.in',
            'facebook' => 'https://facebook.com/rylo',
            'instagram' => 'https://instagram.com/rylo',
            'linkedin' => 'https://linkedin.com/company/rylo',
            'youtube' => 'https://youtube.com/@rylo',
            'copyright' => '© 2026 RYLO Support Services',
            'status' => true,
        ]);

        $response = $this->getJson('/api/footer-settings');

        $response->assertOk();
    }
}