<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;

use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRoles, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'phone', 'active', 'whatsapp', 'photo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'created_at', 'updated_at', 'pivot', 'photo', "email_verified_at"
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'active' => 'boolean',
    ];
    public function doctors()
    {
        return $this->hasMany(Doctors::class, 'user_id');
    }
    public function patients()
    {
        return $this->hasMany(Patient::class, 'refered_by');
    }
    public function scanrequests()
    {
        return $this->hasMany(ScanRequests::class, 'refered_by');
    }
    public function points()
    {
        return $this->hasMany(Points::class, 'user_id');
    }
    public function notifications()
    {
        return $this->hasMany('APP\Models\Notifications', 'user_id');
    }
    public function usersocial()
    {
        return $this->hasMany(UserSocial::class, 'user_id');
    }
}
