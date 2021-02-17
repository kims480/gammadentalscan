<?php

/**
 * Registering New Scan Requests
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScanRequests extends Model
{

    protected $table = 'scan_requests';

    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'scan_name',    'details',    'created_at',    'updated_at',    'refered_by',
        'patient_id',    'purpose',    'two_d_imaging',    'three_d_imaging',
        'photography',    'three_d_printing',    'report_type', 'status', 'rq_num'

    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at', 'pivot'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        // 'purpose' => Json::class,
        'purpose' => 'array',
        'two_d_imaging' => 'array',
        'three_d_imaging' => 'array',
        'report_type' => 'array',
        'three_d_printing' => 'array',
        'photography' => 'array',
    ];
    /**
     * Accessor
     * Get the user's full name.
     *
     * @return string
     */
    public function getStatusAttribute($value)
    {
        if ($value == 1) return "Dispatched";
        if ($value == 2) return "Accepted";
        if ($value == 3) return "On-Process";
        if ($value == 4) return "Done";
        if ($value == 9) return "Rejected";
    }
    /**
     * Accessor
     * Get the Patinet Name
     *
     * @return string
     */
    public function getPatientNameAttribute()
    {
        //  return $value;
        return ['id' => $this->patient_id, 'name' => $this->patient->name_en . ' : ' . $this->patient->name_ar];
    }
    /**
     * Accessor
     * Get the Doctor Name
     *
     * @return string
     */
    public function getDoctorNameAttribute()
    {
        //  return $value;
        return ['id' => $this->refered_by, 'name' => $this->user->name];
    }
    /**
     * Mutator
     * Set the user's first name.
     *
     * @param  string  $value
     * @return void
     */
    public function setStatusAttribute($value)
    {
        if ($value == "Dispatched")
            $this->attributes['status'] = 1;
        if ($value == "Accepted")
            $this->attributes['status'] = 2;
        if ($value == "On-Process")
            $this->attributes['status'] = 3;
        if ($value == "Done")
            $this->attributes['status'] = 4;
        if ($value == "Rejected")
            $this->attributes['status'] = 9;
    }



    public function user()
    {
        return $this->belongsTo('App\Models\User', 'refered_by', 'id');
    }
    public function patient()
    {
        return $this->belongsTo('App\Models\Patient', 'patient_id', 'id');
    }
}
