<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
// use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

// use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

class AuthController extends Controller
{
    protected $auth;
    protected $guard = '';
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
        $this->middleware('auth:client', ['except' => ['login']]);
    }
    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        // $this->validateLogin($request);
        $credentials = request(['email', 'password']);
        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if (
            method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)
        ) {
            $this->fireLockoutEvent($request);

            return response()->json([
                'success' => false,
                'error' => 'You have been locked out',
            ], HttpFoundationResponse::HTTP_LOCKED);
        }
        //$this->incrementLoginAttempts($request);
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                // return $this->sendLoginResponse($request);
                /**$this->attemptLogin($request) */
                return response()->json([
                    'success' => false,
                    'error' => 'Unautherized - Email Or Password Error',
                ], HttpFoundationResponse::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException $e) {
            return response()->json([
                'success' => false,
                'error' => $e,
            ], HttpFoundationResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.


        return response()->json([
            'success' => true,
            // 'data' => $request->user($this->guard),
            // 'token' => $token,
            'token_access' => $this->respondWithToken($token), // auth($this->guard)->attempt($request->only('email', 'password')),
        ], HttpFoundationResponse::HTTP_ACCEPTED);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // public function login(Request $request)
    // {


    //     if (!$token = ) {
    //     }


    // }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth($this->guard)->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::guard($this->guard)->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth($this->guard)->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'token_type' => 'bearer',
            'access_token' => $token,
            'expires_in' => auth('client')->factory()->getTTL() * 60
        ]);
    }
    public function guard()
    {
        return Auth::guard('client');
    }
}
