<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pricing;

class PricingController extends Controller
{
    public function index()
    {
        return response()->json(
            Pricing::where('status', true)->get()
        );
    }

    public function show($id)
    {
        return response()->json(
            Pricing::findOrFail($id)
        );
    }
}