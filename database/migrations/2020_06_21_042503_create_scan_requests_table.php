<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScanRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scan_requests', function (Blueprint $table) {
            $table->id();
            $table->char('scan_name', 50);
            $table->jsonb('details')->nullable(); //{"scan_ids",[scan_item1,scan_item2]}

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
        Schema::dropIfExists('scan_requests');
    }
}
