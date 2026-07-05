<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
     protected $fillable = [
        'welcome_text',
        'title',
        'subtitle',
        'description',
        'button1_text',
        'button1_link',
        'button2_text',
        'button2_link',
        'image',
        'happy_clients',
        'support',
        'trusted_service',
        'status',
    ];
}
