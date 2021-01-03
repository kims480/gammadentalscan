<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ADDCOLDocIDTODOCTORPROFILE extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('doctor_profiles', function (Blueprint $table) {
            // $table->dropForeign(['Doc_id']);
            $table->unsignedBigInteger('doctor_id')->default(null)->nullable();
            $table->foreign('doctor_id')
                ->references('id')
                ->on('doctors')
                ->onDelete('SET NULL');

            // $table->foreignId('Categ_id')->constrained('scan_categs')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('doctor_profiles', function (Blueprint $table) {
            $table->dropForeign('doctor_profiles_doctor_id_foreign');
            $table->dropColumn('doctor_id');
        });
    }
}
