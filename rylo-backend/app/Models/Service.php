<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
   protected $fillable = [

    'title',
    'description',
    'image',
    'working_category',
    'working_time',
    'price',
    'status'

];

  public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
