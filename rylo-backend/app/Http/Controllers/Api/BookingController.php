<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\BookingAdminMail;
use App\Mail\BookingCustomerMail;

class BookingController extends Controller
{
    /**
     * Store Booking
     */
    public function store(Request $request)
    {
        $request->validate([

            'customer_name' => 'required|string|max:255',
            'mobile' => 'required|string|max:20',
            'whatsapp' => 'nullable|string|max:20',
            'email' => 'nullable|email',

            'service_id' => 'required|exists:services,id',

            'date' => 'required|date',
            'time' => 'required',
            'duration' => 'required|string',

            'location' => 'required|string|max:255',
            'notes' => 'nullable|string',

        ]);

        $service = Service::findOrFail($request->service_id);

        $booking = Booking::create([

            'customer_name' => $request->customer_name,
            'mobile' => $request->mobile,
            'whatsapp' => $request->whatsapp,
            'email' => $request->email,

            'service_id' => $service->id,
            'working_category' => $service->working_category,
            'working_time' => $service->working_time,
            'price' => $service->price,

            'date' => $request->date,
            'time' => $request->time,

            'location' => $request->location,
            'notes' => $request->notes,

            'status' => 'Pending',
        ]);

        Mail::to('vaishnavinp99@gmail.com')
    ->send(new BookingAdminMail($booking));

Mail::to($booking->email)
    ->send(new BookingCustomerMail($booking));

      return response()->json([
    'success' => true,
    'message' => 'Booking submitted successfully.',
    'booking_id' => $booking->id,
    'booking' => $booking
],201);
    }

    /**
     * List Bookings
     */
    public function index()
    {
        return Booking::with('service')
            ->latest()
            ->get();
    }

    /**
     * Show Booking
     */
    public function show($id)
    {
        return Booking::with('service')->findOrFail($id);
    }

    /**
     * Update Booking Status
     */
    public function update(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);

        $request->validate([
            'status' => 'required|in:Pending,Confirmed,Completed,Cancelled'
        ]);

        $booking->update([
            'status' => $request->status
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Booking updated successfully.',
            'booking' => $booking
        ]);
    }

    /**
     * Delete Booking
     */
    public function destroy($id)
    {
        Booking::findOrFail($id)->delete();

        return response()->json([
            'success' => true,
            'message' => 'Booking deleted successfully.'
        ]);
    }
}