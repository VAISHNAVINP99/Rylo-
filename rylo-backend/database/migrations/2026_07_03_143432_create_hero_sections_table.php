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
        Schema::create('hero_sections', function (Blueprint $table) {
    $table->id();

    $table->string('welcome_text')->nullable();
    $table->string('title');
    $table->string('subtitle')->nullable();
    $table->text('description')->nullable();

    $table->string('button1_text')->default('Book Service');
    $table->string('button1_link')->default('/book-now');

    $table->string('button2_text')->default('WhatsApp');
    $table->string('button2_link')->nullable();

    $table->string('image')->nullable();

    $table->integer('happy_clients')->default(500);
    $table->string('support')->default('24/7');
    $table->string('trusted_service')->default('100%');

    $table->boolean('status')->default(true);

    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_sections');
    }
};
