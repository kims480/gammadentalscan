<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditScanResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('scan_results', function (Blueprint $table) {
            $table->unsignedBigInteger('request_id')->after('id')->nullable();
            $table->foreign('request_id')
                ->references('id')
                ->on('scan_requests')
                ->onDelete('CASCADE');
            $table->char('file_categ', 60)->after('request_id')->nullable();
            $table->char('folder_id', 60)->after('file_categ')->nullable();
            $table->char('file_id', 60)->after('folder_id')->nullable()->index();
            $table->char('file_name', 60)->after('file_id')->nullable();
            $table->char('file_downloadLink', 150)->after('file_name')->nullable();
            //embedLink: "https://drive.google.com/file/d/1InOc7Xdj4ldk6YBcrbkjGa_cOsSzOYps/preview?usp=drivesdk"
            //"fileDownloadLink": "https://drive.google.com/u/0/uc?id=1InOc7Xdj4ldk6YBcrbkjGa_cOsSzOYps&export=download"
            $table->char('file_ext', 10)->after('file_downloadLink')->nullable();
            $table->tinyInteger('downloadtimes')->after('file_ext')->default(0);
            $table->boolean('delivered')->after('downloadtimes')->default(0);
            $table->unsignedBigInteger('uploaded_by')->after('delivered')->nullable();
            $table->foreign('uploaded_by')
                ->references('id')
                ->on('users')
                ->onDelete('CASCADE');
            $table->char('comment', 100)->nullable()->after('uploaded_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('scan_results', function (Blueprint $table) {
            $table->dropForeign('scan_results_request_id_foreign');
            $table->dropForeign('scan_results_uploaded_by_foreign');
            $table->dropIndex('scan_results_file_id_index');
            $table->dropColumn('request_id');
            $table->dropColumn('file_categ');
            $table->dropColumn('folder_id');
            $table->dropColumn('file_id');
            $table->dropColumn('file_name');
            $table->dropColumn('file_downloadLink');
            $table->dropColumn('file_ext');
            $table->dropColumn('downloadtimes');
            $table->dropColumn('delivered');
            $table->dropColumn('uploaded_by');
            $table->dropColumn('comment');
        });
    }
}
