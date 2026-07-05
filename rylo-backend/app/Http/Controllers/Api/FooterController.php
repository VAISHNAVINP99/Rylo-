<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FooterSetting;

class FooterController extends Controller
{
    public function index()
    {
        return response()->json(

            FooterSetting::where('status',1)->first()

        );
    }
}