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
    Schema::create('abouts', function (Blueprint $table) {

        $table->id();

        $table->string('hero_title');
        $table->string('hero_subtitle')->nullable();

        $table->string('image');

        $table->string('who_we_are_title');

        $table->string('company_name');

        $table->longText('description_one');

        $table->longText('description_two');

        $table->longText('mission');

        $table->longText('vision');

        $table->string('cta_title');

        $table->text('cta_description');

        $table->string('cta_button');

        $table->string('whatsapp');

        $table->boolean('status')->default(true);

        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abouts');
    }
};
