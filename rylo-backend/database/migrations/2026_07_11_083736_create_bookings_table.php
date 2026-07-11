<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {

            $table->id();

            $table->string('customer_name');
            $table->string('mobile');
            $table->string('whatsapp')->nullable();
            $table->string('email')->nullable();

            $table->foreignId('service_id')
                  ->constrained()
                  ->cascadeOnDelete();

            $table->string('working_category');
            $table->string('working_time');
            $table->decimal('price',10,2);

            $table->date('date');
            $table->time('time');
            $table->string('duration');

            $table->string('location');

            $table->text('notes')->nullable();

            $table->enum('status',[
                'Pending',
                'Confirmed',
                'Completed',
                'Cancelled'
            ])->default('Pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};