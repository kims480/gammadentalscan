<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatusToScanRequests extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requests_status', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('request_id');
            $table->foreign('request_id')
                ->references('id')
                ->on('scan_requests')
                ->onDelete('CASCADE');
            $table->tinyInteger('status');
            $table->unsignedBigInteger('action_by');
            $table->foreign('action_by')
                ->references('id')
                ->on('users')
                ->onDelete('CASCADE');
            $table->char('comment',100)->nullable();
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
        Schema::table('requests_status', function (Blueprint $table) {
            //
            $table->dropForeign('requests_status_request_id_foreign');
            $table->dropForeign('requests_status_action_by_foreign');

        });
        Schema::drop('requests_status');
    }
}
