<?php

namespace App\Listeners;

use App\Events\NewUserEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateUserListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(NewUserEvent $event)
    {
        $this->updateUser($event->user);
    }

    public function updateUser($user)
    {
        // if ($user->status < 5)

        //     $user->status = $user->status + 1;
        $user->active =  !$user->active;


        $user->save();
    }
}
