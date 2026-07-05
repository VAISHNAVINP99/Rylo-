<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
      protected $fillable = [
        'customer_name',
        'mobile',
        'whatsapp',
        'email',
        'service_id',
        'date',
        'time',
        'location',
        'duration',
        'notes',
        'status',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
