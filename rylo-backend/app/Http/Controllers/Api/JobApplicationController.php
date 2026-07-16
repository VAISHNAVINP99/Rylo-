<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Mail\JobApplicationAdminMail;

use App\Mail\JobApplicationCustomerMail;

class JobApplicationController extends Controller
{
    /**
     * Store Job Application
     */

 public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'phone' => 'required|string|max:20',
        'whatsapp' => 'nullable|string|max:20',
        'email' => 'nullable|email|max:255',
        'place' => 'required|string|max:255',
        'job_type' => 'required|in:Part Time,Full Time',
        'position' => 'nullable|string|max:255',
        'resume' => 'required|mimes:pdf,doc,docx|max:5120',
        'message' => 'nullable|string',
    ]);

    $resumePath = null;

    if ($request->hasFile('resume')) {
        $resumePath = $request->file('resume')->store('resumes', 'public');
    }

    $application = JobApplication::create([
        'name' => $request->name,
        'phone' => $request->phone,
        'whatsapp' => $request->whatsapp,
        'email' => $request->email,
        'place' => $request->place,
        'job_type' => $request->job_type,
        'position' => $request->position,
        'resume' => $resumePath,
        'message' => $request->message,
        'status' => 'Pending',
    ]);

    Mail::to('rylosupportservices@gmail.com')
    ->send(new JobApplicationAdminMail($application));

Mail::to($application->email)
    ->send(new JobApplicationCustomerMail($application));

    return response()->json([
        'success' => true,
        'title' => 'Application Submitted Successfully',
        'message' => 'Thank you for applying to RYLO Support Services. We have received your application successfully. Our recruitment team will review your application and contact you if your profile is shortlisted.',
        'data' => $application,
    ], 201);
}
    /**
     * List Applications
     */

    public function index()
    {
        return response()->json(

            JobApplication::latest()->get()

        );
    }

    /**
     * View Single Application
     */

    public function show($id)
    {
        return response()->json(

            JobApplication::findOrFail($id)

        );
    }
}