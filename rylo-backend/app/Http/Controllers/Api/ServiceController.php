<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
 public function index()
{
    return response()->json(
        Service::where('status', 1)->get()
    );
}

 public function show($slug)
{
    $service = Service::with('pricing')
        ->where('slug', $slug)
        ->where('status', 1)
        ->firstOrFail();

    return response()->json($service);
}

    public function store(Request $request)
    {
        return response()->json(
            Service::create($request->all())
        );
    }

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        $service->update($request->all());

        return response()->json($service);
    }

    public function destroy($id)
    {
        Service::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Deleted Successfully'
        ]);
    }
}