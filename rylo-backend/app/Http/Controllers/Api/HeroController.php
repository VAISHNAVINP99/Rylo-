<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HeroSection;

class HeroController extends Controller
{
    public function index()
{
    return Hero::where('status', true)
        ->orderBy('id')
        ->get();
}
}