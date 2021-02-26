<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSocial extends Model
{
    use SoftDeletes;
    //
    protected $table = 'user_social';
    protected $fillable = [
        'user_id', 'social_id', 'service'
    ];
    public function user()
    {
        return $this->hasOne('App\ModelsUser', 'id'/* forign_key */, 'user_id'/* local_key */);
    }
}
