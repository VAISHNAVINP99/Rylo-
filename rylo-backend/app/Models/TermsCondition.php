<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TermsCondition extends Model
{
     protected $fillable = [

        'title',
        'subtitle',
        'company_name',

        'service_booking',
        'minimum_booking',
        'payments',
        'cancellation',

        'responsibility_one',
        'responsibility_two',
        'responsibility_three',

        'email',
        'phone',
        'location',

        'status',
    ];
}
