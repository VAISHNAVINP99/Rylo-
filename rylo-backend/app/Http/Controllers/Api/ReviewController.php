<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        return Review::where('status',1)->get();
    }

    public function store(Request $request)
    {
        return Review::create($request->all());
    }

    public function update(Request $request,$id)
    {
        $review = Review::findOrFail($id);

        $review->update($request->all());

        return $review;
    }

    public function destroy($id)
    {
        Review::destroy($id);

        return response()->json([
            'success'=>true
        ]);
    }
}