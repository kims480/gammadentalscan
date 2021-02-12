<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScanThreeDTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scan_three_d', function (Blueprint $table) {
            $table->id();
            // {"GammaTeethLR1":"true","GammaTeethLR2":"true","GammaTeethLR3":"true","GammaTeethLR4":"true","GammaTeethLR5":"true","GammaTeethLR6":"true","GammaTeethLR7":"true","GammaTeethLR8":"true","GammaTeethLL1":"false","GammaTeethLL2":"false","GammaTeethLL3":"false","GammaTeethLL4":"false","GammaTeethLL5":"false","GammaTeethLL6":"false","GammaTeethLL7":"false","GammaTeethLL8":"false","GammaTeethUR1":"true","GammaTeethUR2":"true","GammaTeethUR3":"true","GammaTeethUR4":"true","GammaTeethUR5":"true","GammaTeethUR6":"true","GammaTeethUR7":"true","GammaTeethUR8":"true","GammaTeethUL1":"false","GammaTeethUL2":"false","GammaTeethUL3":"false","GammaTeethUL4":"false","GammaTeethUL5":"false","GammaTeethUL6":"false","GammaTeethUL7":"false","GammaTeethUL8":"false"}
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
        Schema::dropIfExists('scan_three_d');
    }
}
