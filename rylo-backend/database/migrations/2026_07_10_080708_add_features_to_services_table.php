<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->string('feature1')->nullable()->after('price');
            $table->string('feature2')->nullable()->after('feature1');
            $table->string('feature3')->nullable()->after('feature2');
            $table->string('feature4')->nullable()->after('feature3');
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn([
                'feature1',
                'feature2',
                'feature3',
                'feature4',
            ]);
        });
    }
};
