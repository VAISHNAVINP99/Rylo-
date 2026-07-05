<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
     protected $fillable = [

        'title',
        'description',

        'hourly_price',
        'daily_price',
        'weekly_price',

        'feature1',
        'feature2',
        'feature3',
        'feature4',

        'status',

    ];
}
