<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Http\Request;

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

            $resumePath = $request
                ->file('resume')
                ->store('resumes', 'public');
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

        return response()->json([

            'success' => true,

            'message' => 'Application submitted successfully.',

            'data' => $application

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