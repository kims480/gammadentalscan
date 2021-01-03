<?php

/**
 * Registering New Scan Requests
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScanRequests extends Model
{
    //
      /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable =[
        'scan_name',	'details',	'created_at',	'updated_at',	'refered_by',
        'patient_id',	'purpose',	'two_d_imaging',	'three_d_imaging',
        'photography',	'three_d_printing',	'report_type'

    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at','updated_at','pivot'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'refered_by', 'id');
    }
    public function patient()
    {
        return $this->belongsTo('App\Models\Patient', 'patient_id', 'id');
    }

}
