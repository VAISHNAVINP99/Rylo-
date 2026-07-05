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
        Schema::table('ctas', function (Blueprint $table) {

            $table->string('title')->after('id');

            $table->string('phone')->after('title');

            $table->string('whatsapp')->after('phone');

            $table->string('call_button')
                  ->default('Call Now')
                  ->after('whatsapp');

            $table->string('whatsapp_button')
                  ->default('WhatsApp')
                  ->after('call_button');

            $table->boolean('status')
                  ->default(true)
                  ->after('whatsapp_button');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ctas', function (Blueprint $table) {
            //
        });
    }
};
