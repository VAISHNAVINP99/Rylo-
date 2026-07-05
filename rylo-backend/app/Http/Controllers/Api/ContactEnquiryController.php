<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactEnquiry;
use Illuminate\Http\Request;

class ContactEnquiryController extends Controller
{
    public function index()
    {
        return ContactEnquiry::latest()->get();
    }

   public function store(Request $request)
{
    $enquiry = ContactEnquiry::create([
        'name' => $request->name,
        'phone' => $request->phone,
        'email' => $request->email,
        'message' => $request->message,
    ]);

    return response()->json($enquiry);
}

    public function show($id)
    {
        return ContactEnquiry::findOrFail($id);
    }

    public function destroy($id)
    {
        ContactEnquiry::destroy($id);

        return response()->json([
            'success'=>true
        ]);
    }
}