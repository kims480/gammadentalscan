<?php

/**
 * Patients Profile
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
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
        'updated_at','pivot',
        'interstedToRecvMails',
        'interstedToRecvNot',
        'photo' ,
        'address',
        'dob',
        'id',
        'others',
        'refered_by',
        'whatsapp'
    ];


    public function user()
    {
        return $this->belongsTo('App\Doctors', 'refered_by');
    }
}
