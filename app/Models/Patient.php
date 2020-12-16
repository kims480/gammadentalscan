<?php

/**
 * Patients Profile
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    //

    public function user()
    {
        return $this->belongsTo('App\Doctors', 'refered_by');
    }
}
