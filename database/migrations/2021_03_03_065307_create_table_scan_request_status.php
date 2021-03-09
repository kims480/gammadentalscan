<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableScanRequestStatus extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scan_status', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('scan_request_id')->nullable();
            $table->foreign('scan_request_id')
                ->references('id')
                ->on('scan_requests')
                ->onDelete('CASCADE');
            $table->boolean('Action_id')->default(0);
            $table->unsignedBigInteger('Action_by')->nullable();
            $table->foreign('Action_by')
                ->references('id')
                ->on('users')
                ->onDelete('CASCADE');


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
        Schema::drop('scan_status');
    }
}
