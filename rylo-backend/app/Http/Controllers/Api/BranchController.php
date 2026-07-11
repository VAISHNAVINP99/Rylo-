<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    /**
     * Display all active branches.
     */
    public function index()
    {
        $branches = Branch::where('status', true)
            ->orderBy('id', 'asc')
            ->get();

        return response()->json($branches);
    }

    /**
     * Display a single active branch.
     */
    public function show($id)
    {
        $branch = Branch::where('status', true)
            ->findOrFail($id);

        return response()->json($branch);
    }
}