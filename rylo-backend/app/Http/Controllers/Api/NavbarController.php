<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Navbar;

class NavbarController extends Controller
{
    public function index()
    {
        return response()->json(
            Navbar::first()
        );
    }
}