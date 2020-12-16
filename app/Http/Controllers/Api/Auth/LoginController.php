<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as MyAuth;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest')->except('logout');
    }

    public function login(Request $request){
        $credentials = request(['email', 'password']);
        if(!MyAuth::attempt($credentials)){
            return response()->json([
                'success' => false,
                'message' => 'Unable to login'
            ],HttpFoundationResponse::HTTP_UNAUTHORIZED);
        }else{
            $user=MyAuth::user();
            $jwt=$user->createToken('token')->plainTextToken;
            $cookie=Cookie('cookie-token',$jwt,60*24);
            return response()->json([
                'success' => true,
                'message' => 'Login Successful',
                // 'user' => $user,
                'jwt'=>$jwt
            ],HttpFoundationResponse::HTTP_ACCEPTED)->withCookie($cookie);
        }

    }
    public function user(Request $request){
        return $request->user();
    }

    public function logout(Request $request){

        // Revoke a specific user token
        // Auth::user()->tokens()->where('id', $id)->delete();
        // // Get user who requested the logout
        // $user = request()->user(); //or Auth::user()
        // // Revoke current user token
        // $this->guard()->logout();

        // $request->session()->invalidate();

        // $request->session()->regenerateToken();

        // if ($response = $this->loggedOut($request)) {
        //     return $response;
        // }


        $cookie=Cookie::forget('cookie-token');
        // if($x=$user->tokens()->where('id', $user->currentAccessToken()->id)->delete()){

        //     return response()->json(['Message'=>'Logged Out Sucessfully','data'=>$x],HttpFoundationResponse::HTTP_ACCEPTED)->withCookie($cookie);
        // };
        return response()->json(['Message'=>'Logged Out Sucessfully'],HttpFoundationResponse::HTTP_ACCEPTED)->withCookie($cookie);
    }
    public function logoutId($id){
        $cookie=Cookie::forget('cookie-token');

        // Revoke a specific user token
        Auth::user()->tokens()->where('id', $id)->delete();
        // // Get user who requested the logout
        // $user = request()->user(); //or Auth::user()
        // // Revoke current user token
        // $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return response()->json(['Message'=>'Logged Out Sucessfully'],HttpFoundationResponse::HTTP_ACCEPTED)->withCookie($cookie);
    }


}
