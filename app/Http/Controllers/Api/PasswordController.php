<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResetRequest;
use App\Models\User;
// use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Symfony\Component\Console\Input\Input;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\Response;
class PasswordController extends Controller
{
    //
    public function forgot(Request $request){

        $email=$request->input('email');
        $token=Str::random(60);
        if(!$user=User::where('email', $email)->first()){
            return response()->json([
                'message'=>'User Not Found',
            ],
            Response::HTTP_NOT_FOUND);
        }
        $user->remember_token=$token;
        $user->save();
        DB::table('password_resets')->insert([
            'email'=>$email,
            'token'=>$token
        ]);

        Mail::send('reset', [
            'email'=>$email,
            'token'=>$token
        ], function (Message $message) use ($email) {
            // $message->from('mail2@localhost.org', 'John Doe');

            $message->to($email, 'Karim Salih');

            // $message->replyTo('email2@localhost.org', 'John Doe');
            $message->subject('no-reply | Reset Your password');
            // $message->priority(3);
            // $message->attach('pathToFile');
        });
        return response()->json([ 'message'=>'Check Your Email','token' => $token ,'email'=>$email ],200);
    }

    public function reset(ResetRequest $request)
    {
        # code...
        $passwordReset=DB::table('password_resets')->where('token',$request->input('token'))->first();
        if(!$user=User::where('email',$passwordReset->email)->first()){
            //DB::table('users')->
            // throw new NotFoundHttpException('User Not Found');
            //['message'=>'User Not Found','user'=>$user]
            return response()->json([
                'message'=>'User Not Found',
                'token' => $passwordReset ,
                'email'=>$passwordReset->email,
                'user'=>$user ],
            Response::HTTP_NOT_FOUND);
        }
        $user->password= Hash::make($request->input('password'));
        $user->save();
        $email=$user->email;
        Mail::send('newpassword', [
            'password'=>$request->input('password'),

        ], function (Message $message) use($email)  {
            // $message->from('mail2@localhost.org', 'John Doe');

            $message->to($email, 'Karim Salih');

            // $message->replyTo('email2@localhost.org', 'John Doe');
            $message->subject('no-reply | Password Reset Successfuly!');
            // $message->priority(3);
            // $message->attach('pathToFile');
        });
        return response()->json([
            'message' => 'Password reset Successfuly'
        ],Response::HTTP_ACCEPTED);
    }
}
