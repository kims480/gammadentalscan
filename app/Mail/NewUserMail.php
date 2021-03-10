<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NewUserMail extends Mailable
{
    use Queueable, SerializesModels;
    private $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('New User Registered')
            ->view('newuser', $this->data);

        // $message->replyTo('email2@localhost.org', 'John Doe');
        // Mail::send('newuser',  $this->data, function (Message $message) use ($email) {
        //     // $message->from('mail2@localhost.org', 'John Doe');


        //     // $message->priority(3);
        //     // $message->attach('pathToFile');
        // });
        // return $this->view('view.name');
    }
}
