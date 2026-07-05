<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TermsCondition;

class TermsConditionController extends Controller
{
    public function index()
    {
        return TermsCondition::where('status',1)->first();
    }
}