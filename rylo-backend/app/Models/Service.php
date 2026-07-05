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
        'image',
        'status',
    ];

    public function servicePricing()
{
    return $this->hasOne(ServicePricing::class, 'service_id');
}

public function pricingFeatures()
{
    return $this->hasMany(PricingFeature::class, 'service_id');
}
}
