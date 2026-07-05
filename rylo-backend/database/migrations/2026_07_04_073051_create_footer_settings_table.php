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
        Schema::create('footer_settings', function (Blueprint $table) {
            $table->id();
              $table->string('company_name');

            $table->string('tagline')->nullable();

            $table->text('description')->nullable();

            $table->string('phone');

            $table->string('email');

            $table->string('address');

            $table->string('facebook')->nullable();

            $table->string('instagram')->nullable();

            $table->string('whatsapp')->nullable();

            $table->string('copyright');

            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('footer_settings');
    }
};
