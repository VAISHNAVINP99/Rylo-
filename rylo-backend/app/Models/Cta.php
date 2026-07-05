<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cta extends Model
{
    protected $fillable = [

        'title',
        'phone',
        'whatsapp',
        'call_button',
        'whatsapp_button',
        'status',

    ];
}
