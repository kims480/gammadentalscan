<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('patients');
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name_ar');

            $table->string('name_en')->nullable();
            $table->char('telephone', 25)->nullable();
            $table->string('address')->nullable();
            $table->string('email')->nullable();
            $table->char('whatsapp', 25)->nullable();
            $table->char('gender', 10)->nullable();
            $table->date('dob')->nullable();
            $table->integer('points')->nullable();
            $table->string('photo')->nullable();
            $table->jsonb('others')->nullable();
            $table->timestamps();
            // $table->foreignId('refered_by')->constrained('doctors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
