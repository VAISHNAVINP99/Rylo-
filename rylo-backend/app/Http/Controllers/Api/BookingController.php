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

        Mail::to('rylosupportservices@gmail.com')
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

public function payment(Booking $booking)
{
    return response()->json([
        'success' => true,
        'message' => 'Payment request received. We will verify your payment shortly.',
    ]);
}

public function submitPaymentProof(Request $request, $id)
{
    $request->validate([
        'utr_number' => 'required|string|max:255',
        'payment_proof' => 'required|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    $booking = Booking::findOrFail($id);

    $path = $request->file('payment_proof')->store('payment-proofs', 'public');

    $booking->update([
        'utr_number' => $request->utr_number,
        'payment_proof' => $path,
        'payment_status' => 'Waiting Verification',
        'status' => 'Pending',
    ]);

    return response()->json([
        'message' => 'Payment proof submitted successfully'
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