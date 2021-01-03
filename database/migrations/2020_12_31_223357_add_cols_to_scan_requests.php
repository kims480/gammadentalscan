<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColsToScanRequests extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('scan_requests', function (Blueprint $table) {
            //
            // $table->dropColumn('refered_by');
            // $table->dropColumn('patient_id');
            // $table->dropColumn('purpose');
            // $table->dropColumn('two_d_imaging');
            // $table->dropColumn('three_d_imaging');
            // $table->dropColumn('photography');
            // $table->dropColumn('three_d_printing');
            // $table->dropColumn('report_type');

            $table->unsignedBigInteger('refered_by')->default(null)->nullable();
            $table->foreign('refered_by')
                ->references('id')
                ->on('users')
                ->onDelete('SET NULL');
            $table->unsignedBigInteger('patient_id')->default(null)->nullable();
            $table->foreign('patient_id')
                ->references('id')
                ->on('patients')
                ->onDelete('SET NULL');
            $table->json('purpose')->default(null)->nullable();
            $table->json('two_d_imaging')->default(null)->nullable();
            $table->json('three_d_imaging')->default(null)->nullable();
            $table->json('photography')->default(null)->nullable();
            $table->json('three_d_printing')->default(null)->nullable();
            $table->json('report_type')->default(null)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('scan_requests', function (Blueprint $table) {
            //
            $table->dropForeign('scan_requests_refered_by_foreign');
            $table->dropForeign('scan_requests_patient_id_foreign');
            $table->dropColumn('refered_by');
            $table->dropColumn('patient_id');
            $table->dropColumn('purpose');
            $table->dropColumn('two_d_imaging');
            $table->dropColumn('three_d_imaging');
            $table->dropColumn('photography');
            $table->dropColumn('three_d_printing');
            $table->dropColumn('report_type');
        });
    }
}
