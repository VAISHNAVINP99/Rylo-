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
       Schema::create('pricing_pages', function (Blueprint $table) {
    $table->id();

    $table->string('hero_title');
    $table->string('hero_subtitle');

    $table->string('notice_title');
    $table->text('notice_description');

    $table->string('cta_title');
    $table->text('cta_description');
    $table->string('cta_button');

    $table->boolean('status')->default(true);

    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pricing_pages');
    }
};
