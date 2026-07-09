<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return response()->json(Booking::latest()->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_name' => 'required|string|max:255',
            'mobile' => 'required|string|max:20',
            'whatsapp' => 'required|string|max:20',
            'email' => 'nullable|email|max:255',
            'service_id' => 'required|exists:services,id',
            'date' => 'required|date',
            'time' => 'required',
            'duration' => 'required',
            'location' => 'required|string|max:255',
            'notes' => 'nullable|string',
        ]);

        $booking = Booking::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Booking submitted successfully.',
            'data' => $booking,
        ], 201);
    }

    public function show($id)
    {
        return response()->json(Booking::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);

        $validated = $request->validate([
            'customer_name' => 'sometimes|string|max:255',
            'mobile' => 'sometimes|string|max:20',
            'whatsapp' => 'sometimes|string|max:20',
            'email' => 'nullable|email|max:255',
            'service_id' => 'sometimes|exists:services,id',
            'date' => 'sometimes|date',
            'time' => 'sometimes',
            'duration' => 'sometimes',
            'location' => 'sometimes|string|max:255',
            'notes' => 'nullable|string',
            'status' => 'sometimes|string',
        ]);

        $booking->update($validated);

        return response()->json([
            'success' => true,
            'data' => $booking,
        ]);
    }

    public function destroy($id)
    {
        Booking::findOrFail($id)->delete();

        return response()->json([
            'success' => true,
            'message' => 'Booking deleted successfully.',
        ]);
    }
}