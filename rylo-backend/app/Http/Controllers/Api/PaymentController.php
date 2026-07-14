<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PaymentSetting;

class PaymentController extends Controller
{
    public function index()
    {
        $payment = PaymentSetting::where('status', true)->first();

        if (!$payment) {
            return response()->json([
                'message' => 'Payment setting not found'
            ], 404);
        }

        if ($payment->qr_code) {
            $payment->qr_code = asset('storage/' . $payment->qr_code);
        }

        return response()->json($payment);
    }
}