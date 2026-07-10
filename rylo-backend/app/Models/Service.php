<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
      protected $fillable = [
        'title',
        'slug',
        'description',
        'price',
          'feature1',
    'feature2',
    'feature3',
    'feature4',
        'image',
        'status',
    ];
  public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class, 'service_id');
    }


}
