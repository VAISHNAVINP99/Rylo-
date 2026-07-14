<?php

namespace Tests\Feature\Api;

use App\Models\PaymentSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class PaymentApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_payment_api()
    {
      PaymentSetting::create([
    'upi_name' => 'RYLO Support Services',
    'upi_id'   => 'rylo@upi',
    'qr_code'  => 'payment/test-qr.png',
    'status'   => true,
]);

        $response=$this->getJson('/api/payment-setting');

     $response->assertOk()
         ->assertJsonFragment([
             'upi_name' => 'RYLO Support Services',
             'upi_id'   => 'rylo@upi',
             'status'   => true,
         ]);
    }
}