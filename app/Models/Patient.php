<?php

/**
 * Patients Profile
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use SoftDeletes;
    //
    /* The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'address',
        'dob',
        'email',
        'gender',
        'id',
        'name_ar',
        'name_en',
        'others',
        'points',
        'refered_by',
        'telephone',
        'whatsapp'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
        'updated_at', 'pivot',
        'interstedToRecvMails',
        'interstedToRecvNot',
        'photo',
        'address',

        'others',
        'refered_by',
        'whatsapp'
    ];
    /**
     * Accessor
     * Get the Patinet Name
     *
     * @return string
     */
    public function getGenderAttribute($value)
    {
        if ($value == 1) return "Male";
        if ($value == 2) return "Female";
        return 'NA';
    }


    public function user()
    {
        return $this->belongsTo('App\Models\User', 'refered_by');
    }

    public function scanrequests()
    {
        return $this->hasMany('App\Models\ScanRequest', 'patient_id', 'id');
    }
}
