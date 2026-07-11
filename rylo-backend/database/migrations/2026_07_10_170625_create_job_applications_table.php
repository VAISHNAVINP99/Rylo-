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
        Schema::create('job_applications', function (Blueprint $table) {

            $table->id();

            $table->string('name');

            $table->string('phone');

            $table->string('whatsapp')->nullable();

            $table->string('email')->nullable();

            $table->string('place');

            $table->enum('job_type', [
                'Part Time',
                'Full Time'
            ]);

            $table->string('position')->nullable();

            $table->string('resume');

            $table->text('message')->nullable();

            $table->enum('status', [
                'Pending',
                'Reviewed',
                'Selected',
                'Rejected'
            ])->default('Pending');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};