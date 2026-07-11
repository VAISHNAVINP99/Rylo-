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
        'duration',

        'location',
        'notes',

        'status',
    ];

    /**
     * A booking belongs to a service.
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}