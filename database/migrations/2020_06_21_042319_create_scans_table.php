<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('scans', function (Blueprint $table) {
            $table->id();

            $table->jsonb('scan_item'); //{"title":"arch","type":"options","item_names":["option1","option2"]}
            $table->unsignedBigInteger('Categ_id');
            $table->string('photo')->nullable();
            $table->integer('points')->default(0);
            $table->boolean('acive')->default(1);
            $table->timestamps();

            $table->foreign('Categ_id')->references('id')->on('scan_categs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scans');
    }
}
