<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    // Get all active services
    public function index()
    {
        $services = Service::where('status', true)
            ->latest()
            ->get();

        return response()->json($services);
    }

    // Get single service
    public function show($id)
    {
        $service = Service::where('status', true)
            ->findOrFail($id);

        return response()->json($service);
    }

    // Store service
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'working_category' => 'required|string|max:255',
            'working_time' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image' => 'nullable|string',
            'status' => 'boolean',
        ]);

        $service = Service::create($validated);

        return response()->json([
            'message' => 'Service created successfully.',
            'data' => $service,
        ], 201);
    }

    // Update service
    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'working_category' => 'required|string|max:255',
            'working_time' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image' => 'nullable|string',
            'status' => 'boolean',
        ]);

        $service->update($validated);

        return response()->json([
            'message' => 'Service updated successfully.',
            'data' => $service,
        ]);
    }

    // Delete service
    public function destroy($id)
    {
        $service = Service::findOrFail($id);

        $service->delete();

        return response()->json([
            'message' => 'Service deleted successfully.',
        ]);
    }
}