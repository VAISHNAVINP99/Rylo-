<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('terms_conditions', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('subtitle')->nullable();

            $table->string('company_name');

            $table->longText('service_booking');
            $table->longText('minimum_booking');
            $table->longText('payments');
            $table->longText('cancellation');

            $table->longText('responsibility_one');
            $table->longText('responsibility_two');
            $table->longText('responsibility_three');

            $table->string('email');
            $table->string('phone');
            $table->string('location');

            $table->boolean('status')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('terms_conditions');
    }
};
