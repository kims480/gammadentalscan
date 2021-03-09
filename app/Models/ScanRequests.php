<?php

/**
 * Registering New Scan Requests
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;

class ScanRequests extends Model
{
    use SoftDeletes;

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
        if ($value == 1) return json_decode('{"id" : ' . $value . ' , "text":"Dispatched"}');
        if ($value == 2) return json_decode('{"id" : ' . $value . ' , "text":"Accepted"}');
        if ($value == 3) return json_decode('{"id" : ' . $value . ' , "text":"On-Process"}');
        if ($value == 4) return json_decode('{"id" : ' . $value . ' , "text":"Done"}');
        if ($value == 5) return json_decode('{"id" : ' . $value . ' , "text":"Delivered"}');
        if ($value == 9) return json_decode('{"id" : ' . $value . ' , "text":"Rejected"}');
        if ($value == 10) return json_decode('{"id" : ' . $value . ' , "text":"Canceled"}');
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
        return ['id' => $this->refered_by, 'name' => $this->user->name ?? null];
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
        if ($value == "Delivered")
            $this->attributes['status'] = 5;
        if ($value == "Rejected")
            $this->attributes['status'] = 9;
        if ($value == "Canceled")
            $this->attributes['status'] = 10;
        if (is_numeric($value))
            $this->attributes['status'] = $value;
    }



    public function user()
    {
        return $this->belongsTo('App\Models\User', 'refered_by', 'id');
    }
    public function patient()
    {
        return $this->belongsTo('App\Models\Patient', 'patient_id', 'id');
    }
    /**
     * Get all of the scanResults for the ScanRequests
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function scan_results()
    {
        return $this->hasMany('App\Models\ScanResults', 'request_id', 'id');
    }
    /**
     * Get the users that owns the ScanResults
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function scanCategs()

    {

        return $this->hasManyThrough(ScanCateg::class, ScanRequests::class);
    }
}
