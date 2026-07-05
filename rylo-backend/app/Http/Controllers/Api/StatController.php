<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Stat;

class StatController extends Controller
{
    public function index()
    {
        return response()->json(
            Stat::where('status', true)
                ->orderBy('id')
                ->get()
        );
    }
}