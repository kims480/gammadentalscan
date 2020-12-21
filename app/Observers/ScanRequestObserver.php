<?php

namespace App\Observers;

use App\Models\ScanRequests;

class ScanRequestObserver
{
    /**
     * Handle the scan requests "created" event.
     *
     * @param  \App\ScanRequests  $scanRequests
     * @return void
     */
    public function created(ScanRequests $scanRequests)
    {
        //
    }

    /**
     * Handle the scan requests "updated" event.
     *
     * @param  \App\ScanRequests  $scanRequests
     * @return void
     */
    public function updated(ScanRequests $scanRequests)
    {
        //
    }

    /**
     * Handle the scan requests "deleted" event.
     *
     * @param  \App\ScanRequests  $scanRequests
     * @return void
     */
    public function deleted(ScanRequests $scanRequests)
    {
        //
    }

    /**
     * Handle the scan requests "restored" event.
     *
     * @param  \App\ScanRequests  $scanRequests
     * @return void
     */
    public function restored(ScanRequests $scanRequests)
    {
        //
    }

    /**
     * Handle the scan requests "force deleted" event.
     *
     * @param  \App\ScanRequests  $scanRequests
     * @return void
     */
    public function forceDeleted(ScanRequests $scanRequests)
    {
        //
    }
}
