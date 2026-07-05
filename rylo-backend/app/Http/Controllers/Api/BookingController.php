<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return Booking::latest()->get();
    }

    public function store(Request $request)
    {
        $booking = Booking::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $booking
        ]);
    }

    public function show($id)
    {
        return Booking::findOrFail($id);
    }

    public function update(Request $request,$id)
    {
        $booking = Booking::findOrFail($id);

        $booking->update($request->all());

        return $booking;
    }

    public function destroy($id)
    {
        Booking::destroy($id);

        return response()->json([
            'success'=>true
        ]);
    }
}