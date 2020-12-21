<?php

/**
 * Doctors Registeration
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Doctors extends Model
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token',
        "telephone",
        "photo",
        "interstedToRecvMails",
        "interstedToRecvNot",
        'user_id', "whatsapp","points", 'created_at','updated_at'
    ];
    //
    protected $fillable = [
        "active", "name", "name_ar", 'user_id', "whatsapp","points",
        "photo",
        "interstedToRecvMails",
        "interstedToRecvNot"

    ];
    protected static function booted()
    {
        /*User::withoutGlobalScope(AgeScope::class)->get();*/
        // static::addGlobalScope(new UserActive);

        /*
        User::withoutGlobalScope('age')->get();
        */
        static::addGlobalScope('active', function (Builder $builder) {
            $builder->where('active', 1);
        });
    }
    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePopular($query)
    {
        return $query->where('votes', '>', 100);
    }

    /**
     * Scope a query to only include active users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
    public function patients()
    {
        return $this->hasMany('App\Models\Patient', 'refered_by', 'id');
    }
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}
