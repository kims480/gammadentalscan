<?php

/**
 * Dealing with Results photos and storage system,
 * resutls photos/files
 */

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Model;

class ScanResults extends Model
{
    use SoftDeletes;
    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        'request_id',  'file_categ', 'folder_id', 'file_id', 'file_name',
        'file_downloadLink', 'file_ext', 'downloadtimes', 'delivered',    'uploaded_by', 'comment'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        //  'email_verified_at' => 'datetime',
        // 'active' => 'boolean',
    ];
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['download_link', 'view_link'];
    /**
     * Get Download Link
     *
     * @return string
     */
    public function getDownloadLinkAttribute()
    {
        return "https://drive.google.com/uc?id={$this->file_id}&export=download";
    }
    /**
     * Get Download Link
     *
     * @return string
     */
    public function getViewLinkAttribute()
    {
        return "https://drive.google.com/file/d/{$this->file_id}/preview?usp=drivesdk";
    }


    /**
     * Get the scanRequests that owns the ScanResults
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function scan_request()
    {
        return $this->belongsTo(ScanRequests::class, 'request_id', 'id');
    }
    /**
     * Get the users that owns the ScanResults
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function scanCateg()
    {
        return $this->belongsTo(ScanCateg::class, 'file_categ', 'id');
    }
    /**
     * Get the users that owns the ScanResults
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function users()
    {
        return $this->belongsTo(User::class, 'uploaded_by', 'id');
    }
}
