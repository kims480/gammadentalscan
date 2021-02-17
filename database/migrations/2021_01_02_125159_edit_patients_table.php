<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditPatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // DB::statement
        Schema::table('patients', function (Blueprint $table) {
            //
            // $table->dropColumn('telephone');
            // $table->dropColumn('whatsapp');
            // $table->char('telephone',25)->default('0000000000');
            // $table->char('whatsapp',25)->default('0000000000');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patients', function (Blueprint $table) {
            //
            // $table->dropColumn('telephone')
        });
    }
}
