<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ScanStatus extends Model
{
    use SoftDeletes;

    protected $table = 'scan_status';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        'scan_request_id',    'Action_id',    'Action_by', 'created_at'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'pivot', 'deleted_at'
    ];
    /**
     * Accessor
     * Get the user's full name.
     *
     * @return string
     */
    public function getActionIdAttribute($value)
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
     * Mutator
     * Set the user's first name.
     *
     * @param  string  $value
     * @return void
     */
    public function setActionIdAttribute($value)
    {
        if ($value == "Dispatched")
            $this->attributes['Action_id'] = 1;
        if ($value == "Accepted")
            $this->attributes['Action_id'] = 2;
        if ($value == "On-Process")
            $this->attributes['Action_id'] = 3;
        if ($value == "Done")
            $this->attributes['Action_id'] = 4;
        if ($value == "Delivered")
            $this->attributes['Action_id'] = 5;
        if ($value == "Rejected")
            $this->attributes['Action_id'] = 9;
        if ($value == "Canceled")
            $this->attributes['Action_id'] = 10;
        if (is_numeric($value))
            $this->attributes['Action_id'] = $value;
    }

    /**
     * Get the user that owns the ScanStaus
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'Action_by', 'id');
    }
    /**
     * Get the scan_request that owns the ScanStaus
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function scan_request()
    {
        return $this->belongsTo(ScanRequests::class, 'scan_request_is', 'id');
    }
}
