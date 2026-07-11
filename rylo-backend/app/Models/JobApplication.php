<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    protected $fillable = [

        'name',

        'phone',

        'whatsapp',

        'email',

        'place',

        'job_type',

        'position',

        'resume',

        'message',

        'status',

    ];
}