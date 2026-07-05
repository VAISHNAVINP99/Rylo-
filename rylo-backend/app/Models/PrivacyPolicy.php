<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PrivacyPolicy extends Model
{
    protected $fillable = [

        'title',
        'subtitle',

        'information_collect',
        'information_usage',

        'data_protection',

        'third_party',

        'email',
        'phone',
        'location',

        'status'

    ];
}
