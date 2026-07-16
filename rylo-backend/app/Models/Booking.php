<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
   protected $fillable = [
    'customer_name',
    'mobile',
    'whatsapp',
    'email',

    'service_id',
    'working_category',
    'working_time',
    'price',

    'date',
    'time',
    'location',
    'notes',

    'status',

    // Payment fields
    'payment_status',
    'utr_number',
    'payment_proof',
    'payment_verified_at',
];

    /**
     * A booking belongs to a service.
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}