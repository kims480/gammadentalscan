<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Facade\FlareClient\Http\Response;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Foundation\Auth\RegistersUsers;
// use Illuminate\Http\Client\Request;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth as MyAuth;

class RegisterController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = "App_Login";
    // protected $auth;
    protected $guard = "";
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(/* JWTAuth $auth */)
    {
        // $this->middleware('guest');
        // $this->auth = $auth;
        // $this->middleware('auth:api', ['except' => ['register']]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required','string'],
            'password' => ['required', 'string', 'min:8'],
            'confirm_password' => ['required', 'string', 'same:password'],
        ]);
    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
        ]);
        return response()->json(['Message' => 'user Registered Successfully'], HttpFoundationResponse::HTTP_CREATED);
    }
    public function register(Request $data)
    {
        $validator = $this->validator($data->all());
        if (!$validator->fails()) {
            // return response()->json([
            //     'success' => true, 'data'=>$data->all()],200);

            $user = $this->create($data->only('name','phone','email', 'password'));
            $token = auth($this->guard)->attempt($data->only('email', 'password'));
            if($token){
                $user=MyAuth::user();
                $jwt=$user->createToken('token')->plainTextToken;
                $cookie=Cookie('cookie-token',$jwt,60*24);
            }
                return response()->json([
                    'success' => true,
                    'Message' => 'User '.$user->name.' Registered Successfully',
                    'user' => $user,
                    'jwt' => $jwt
                ], HttpFoundationResponse::HTTP_CREATED);
             }else{
                return response()->json([
                    'success' => false,
                    'Message' => 'Failed to register',
                    'error' =>$validator->errors()//$data->validated(), //$validator->errors()
                ], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

            }

    }
}
