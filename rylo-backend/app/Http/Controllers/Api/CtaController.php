<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cta;

class CtaController extends Controller
{
    public function index()
    {
        return response()->json(

            Cta::where('status', true)->first()

        );
    }
}
