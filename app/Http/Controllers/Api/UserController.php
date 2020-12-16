<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User as Authinticated;
use App\Models\User;
// use Illuminate\Http\Client\Request;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;

class UserController extends Controller
{
    protected $guard = '';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        # code...
        //$this->auth = $auth;
        $this->middleware('auth:sanctum', ['except' => ['login', 'signin', 'signup']]);
    }
    public function index()
    {
        //
        // $doctors = User::active()->get();
        // return response()->json($doctors);
    }
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     * @return [string] phone
     * @return [string] whatsapp
     */
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string|regex:/[A-Za-z0-9 ].{4,}/i',
            'email' => 'required|string|email|unique:users|regex:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i',
            'phone' => 'unique:users|regex:/[0-9].{5,}/i',
            'password' => 'required|string|regex:/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])).{7,}/' //confirmed
        ]);
        $user = new User([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        if($user->save()){
            return response()->json([
                'message' => 'Successfully created user!'
            ], 201);

        }else{
            return response()->json([
                'message' => 'Error creating User!'
            ], 422);
        }


    }

    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */

    public function login(Request $request)
    {
        // $request->validate([

        //     'email' => 'required|string|email|unique:users', //|regex:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i',
        //     'password' => 'required|string' //|regex:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/' //confirmed
        // ]);
        // return response()->json(['test' => config('services.passport.login_endpoint')], 200);
        // $valid = $request->validate([

        //     $this->username() => 'required|string|unique:users', // . $this->username() == 'email' ? '|email' . $this->mailReg() : '',
        //     'password' => 'required|string|regex:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/' //confirmed
        // ]);
        // if ($valid) {
        //     return response()->json(['message' => 'Please Provide proper Username and Password'], 400);
        // } else {
        $http = new \GuzzleHttp\Client;
        try {
            $response = $http->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->username,
                    'password' => $request->password,
                    'scope' => '*',
                    'connect_timeout' => 3.14
                ]
            ]);
            return $response->getBody();
            // return response()->json(['login' => $response->getBody()], 200);
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            if ($e->getCode() === 400) {
                return response()->json(["message" => 'Invalid request please enter proper username and password', "username" => $request->username, 'password' => $request->password], $e->getCode());
            } else if ($e->getCode() === 401) {
                return response()->json('Your credintial are incorect, Please try again', $e->getCode());
            }
            return response()->json('Somthing went wrong on Server', $e->getCode());
        }
        // }
    }


    /**
     * Same as login but differient technice
     */
    public function signin(Request $request)
    {
        $request->validate([

            $this->username() => 'required|string|unique:users' . $this->username() == 'email' ? '|email' . $this->mailReg() : '',
            'password' => 'required|string|regex:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/' //confirmed
        ]);
        $credentials = request([$this->username(), 'password']);
        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user($this->guard);
        $tokenResult = Auth::guard()->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // //
        // return Doctors::create($request->all());
        // return response()->json(['Message' => 'Doctor Registered Successfully'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $myUser = User::find($id);
        $doctors = $myUser->doctors;

        return response()->json(['user' => $myUser, 'doctors' => $doctors], 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //


    }
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        // $request->user()->token()->revoke();
        auth('api')->user()->tokens()->each(function ($token, $key) {
            $token->delete();
        });
        return response()->json([
            'message' => 'Successfully logged out'
        ], 204);
    }
    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json(["user" => $request->user(), "success" => true]);
    }
    /**
     * Get All Users
     * @return [json] user object
     */
    public function getUsers(Request $request)
    {
        $users = User::get(); //Isdoctor()->
        if (is_object($users)) {
            return response()->json(["users" => $users, "message" => "Users collected successfuly", 'success' => true], 200);
        } else {
            return response()->json(['User' => 'No Users in our Database', 'success' => false, 'message' => 'No User in our Database'], 201);
        }
    }
    /**
     * Get All Active Users
     * @return [json] user object
     */
    public function getActiveusers(Request $request)
    {
        $users = User::get(); //Isdoctor()->
        if (is_object($users)) {
            return response()->json(["users" => $users, "message" => "Active Users collected successfuly", 'success' => true], 200);
        } else {
            return response()->json(['User' => 'No Users in our Database', 'success' => false, 'message' => 'No User in our Database'], 201);
        }
    }
    /**
     * @return which field will be considered username
     */
    public function username()
    {
        return 'email';
    }
    /**
     * @return reg for email format
     */
    public function emailReg()
    {
        return '|regex:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i';
    }
    /**
     * Get All doctors related to user_id
     * @return [json] user object
     */
    public function getDoctorsForUser(Request $request, $id)
    {
        $users = User::withoutGlobalScope('active')->find($id); //->->;->Isdoctor()->
        if (is_object($users)) {
            $doctors = $users->doctors;

            if (is_object($doctors)) {
                return response()->json(['message' => 'All doctors related to ' . $id . ' Successfuly Collected', 'success' => true, 'User_id' => $users->id, 'User_name' => $users->name, 'isDoctor' => $doctors], 200);
            } else {
                return response()->json(['message' => 'No Such User with Doctor role in our Database', 'success' => true, 'User_id' => $users->id, 'User_name' => $users->name, 'isDoctor' => []], 200);
            }
        } else {
            return response()->json(['User' => 'No Such User exist in our Database', 'success' => false, 'message' => 'No Such doctor in our Database', 'isDoctor' => []], 404);
        }
    }
    /**
     * Get All Users with role doctor
     * @return [json] user object
     */
    public function getUsersWithDoctorRole(Request $request)
    {
        $users = User::withoutGlobalScope('active')->Isdoctor()->get(); //->->;->Isdoctor()->
        if (is_object($users)) {
            return response()->json(['All Users with role doctor Successfuly Collected' => 'Success', 'success' => true, 'users' => $users], 200);
        } else {
            return response()->json(['message' => 'No Users with role doctor Found', 'success' => false, 'users' => []], 200);
        }
    }
    /**
     * Get All Active Users with role doctor
     * @return [json] user object
     */
    public function getActiveUsersWithDoctorRole(Request $request)
    {
        $users = User::Isdoctor()->get(); //->->;->Isdoctor()->
        if (is_object($users)) {
            return response()->json(['message' => 'Active Users with role doctor Successfuly Collected', 'success' => true, 'users' => $users], 200);
        } else {
            return response()->json(['message' => 'Not Found', 'success' => false, 'users' => []], 200);
        }
    }
    /**
     * Get the authenticated User Roles
     *
     * @return [json] roles object
     */
    public function getUserRoles(Request $request)
    {
        return response()->json(["roles" => $request->user()->role['role'], 'message' => 'My Roles Successfuly Collected', "success" => true]);
    }
}
