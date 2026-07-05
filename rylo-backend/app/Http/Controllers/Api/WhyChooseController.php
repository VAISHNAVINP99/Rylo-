<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WhyChoose;

class WhyChooseController extends Controller
{
    public function index()
    {
        return response()->json(
            WhyChoose::where('status', true)
                ->orderBy('id')
                ->get()
        );
    }
}