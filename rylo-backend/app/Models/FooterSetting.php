<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FooterSetting extends Model
{
     protected $fillable = [

        'company_name',
        'tagline',
        'description',

        'phone',
        'email',
        'address',

        'facebook',
        'instagram',
        'whatsapp',

        'copyright',

        'status'

    ];
}
