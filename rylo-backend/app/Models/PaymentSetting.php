<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentSetting extends Model
{
    protected $fillable = [
        'upi_name',
        'upi_id',
        'qr_code',
        'status'
    ];
}
