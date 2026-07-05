<?php



namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\About;
use App\Models\WhyChoose;

class AboutController extends Controller
{
    public function index()
{
    $about = About::where('status', true)->first();

    return response()->json([
        'about' => $about,
        'why_choose' => WhyChoose::where('status', true)->get(),
    ]);
}
}
