<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
    protected $fillable = [
        'service_id',

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

        public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}