<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('address')->nullable();
            $table->char('telephone', 15)->nullable();
            $table->char('whatsapp', 15)->nullable();
            $table->char('website', 50)->nullable();
            $table->char('gender', 10)->nullable();
            $table->date('dob')->nullable();
            $table->jsonb('others')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctor_profiles');
    }
}
