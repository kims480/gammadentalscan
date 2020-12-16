<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorsPatientsView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


        $data = "CREATE VIEW `_doctors_patients` AS SELECT doctors.id AS `doctor_id`,doctors.name ,patients.* FROM doctors INNER JOIN patients ON patients.refered_by = doctors.id ";
        DB::statement($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS _doctors_patients');
    }
}
