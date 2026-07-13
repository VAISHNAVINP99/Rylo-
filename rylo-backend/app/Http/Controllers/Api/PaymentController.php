<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PaymentSetting;

class PaymentController extends Controller
{
    public function index()
    {
        return PaymentSetting::where('status', true)->first();
    }
}