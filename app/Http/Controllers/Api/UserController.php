<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Jobs\SendNewUserMail;
use Illuminate\Foundation\Auth\User as Authinticated;
use App\Models\User;
use App\Traits\UserTrait;
use Error;
use Exception;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Http\Client\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;
use PDO;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

class UserController extends Controller
{
    use UserTrait;
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
        if ($user->save()) {
            return response()->json([
                'message' => 'Successfully created user!'
            ], 201);
        } else {
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
            'phone' => ['required', 'string'],
            'password' => ['required', 'string', 'min:8'],
            'confirm_password' => ['required', 'string', 'same:password'],
            // 'photo'=>'image|null|max:1999'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \App\Models\User
     */
    protected function create(Request $request)
    {
        $imageName = $this->saveImage($request->file('image'), 'uploads/users');
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request['phone'],
            'password' => Hash::make($request['password']),
            'active' => $request['active'] ? 1 : 0,
            'whatsapp' => $request['whatsapp'],
            'photo' => $imageName,
        ]);
        return response()->json(['Message' => 'user Registered Successfully'], HttpFoundationResponse::HTTP_CREATED);
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createWithRolesPremissions(Request $request)
    {
        if (!$request->user()->hasRole('SUPER_ADMIN'))
            return response()->json(['message' => 'You are not authorized for this request'], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        //  return    response()->json([
        //     'success' => true,
        //    // 'Message' => 'User '.$user->name.' Registered Successfully',
        //     'myRequest' => $request->all(),
        //     //'image' => $request->file('image')->getClientOriginalName(),
        //     'photo' => $request->file('image')?$request->file('photo')->getClientOriginalName():'NoImage.jpg'
        // ], HttpFoundationResponse::HTTP_CREATED);

        $validator = $this->validator($request->all());



        if ($validator->fails())
            return response()->json([
                'success' => false,
                'Message' => 'Failed to register',
                'error' => $validator->errors() //$data->validated(), //$validator->errors()
            ], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        // return response()->json([
        //     'success' => true, 'data'=>$data->all()],200);

        $user = $this->create($request); //only('name','phone','email', 'password','active','whatsapp','image')
        $roles = $user->syncRoles($request->only('userRoles'));
        $permissions = $user->syncPermissions($request->only('userPermissions'));


        if ($user && $roles && $permissions)
            $emailUsers = User::select('name', 'email')->role('SUPER_ADMIN')->get();
        dispatch(new SendNewUserMail(['emailUsers' => $emailUsers, 'dataToPass' => [
            'email' => $request->email,
            'name' => $request->name,
            'telephone' => $request->phone
        ]]));

        return response()->json([
            'success' => true,
            'Message' => 'User ' . $user->name . ' Registered Successfully',
            // 'admin_emails' => $emailUsers,
            'user' => $user,

        ], HttpFoundationResponse::HTTP_CREATED);

        return response()->json([
            'success' => false,
            'Message' => 'General Error',
        ], HttpFoundationResponse::HTTP_CREATED);
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
        // return response()->json(['message'=>'User Not valid'],HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        $myUser = User::with('doctors')->find($id);
        // $doctors = $myUser->doctors;
        // $user=User::find($id);
        if (!$myUser) {
            return response()->json(['message' => 'User Not valid'], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        }
        if (!Auth::user()->hasRole('SUPER_ADMIN'))
            return response()->json(['message' => 'You are not authorized for this request'], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        return response()->json(['user' => $myUser, "roles" => $myUser->getRoleNames(), 'permissions' => $myUser->getPermissionNames(), 'message' => 'My Roles Successfuly Collected', "success" => true], HttpFoundationResponse::HTTP_ACCEPTED);
        // return response()->json(["roles" => $myUser->getRoleNames(), 'message' => 'My Roles Successfuly Collected', "success" => true],HttpFoundationResponse::HTTP_ACCEPTED);

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
        // return response()->json([
        //     'message' => 'Testing response',


        //     'success' => true,
        //     // 'Message' => 'User '.$user->name.' Registered Successfully',
        //     'myRequest' => $request->all(),
        //     //'image' => $request->file('image')->getClientOriginalName(),
        //     'photo' => $request->file('image') ? $request->file('image')->getClientOriginalName() : 'NoImage.jpg'

        // ], HttpFoundationResponse::HTTP_ACCEPTED);
        if (!$request->user()->hasRole('SUPER_ADMIN'))
            return response()->json(['message' => 'You are not authorized for this request'], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        // $validator = $this->validator($request->all());



        // if ($validator->fails())
        //     return response()->json([
        //         'success' => false,
        //         'Message' => 'Failed to register',
        //         'error' => $validator->errors()
        //     ], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        $imageName = $this->saveImage($request->file('image'), 'uploads/users');
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'id' => $id,
                'Message' => 'User Not Vailable',
            ], HttpFoundationResponse::HTTP_NOT_FOUND);
        }
        // $user = $request->all();
        // $user->email = $request->email;
        // $user->phone = $request['phone'];
        // $user->password = Hash::make($request['password']);
        // $user->active = $request['active'] ? 1 : 0;
        // $user->whatsapp = $request['whatsapp'];
        // $user->photo = $imageName;
        try {

            $user->update($request->all());
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'id' => $id,
                'Message' => $e,
                'request' => $request->all()
            ], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        }

        $roles = $user->syncRoles($request->only('userRoles') ? $request->only('userRoles') : $request->only('roles'));
        $permissions = $user->syncPermissions($request->only('userPermissions'));

        if ($user && $roles && $permissions) {

            return response()->json([
                'success' => true,
                'Message' => 'User ' . $user->name . ' Updated Successfully',
                'user' => $user,
                // 'request' => $request->all()

            ], HttpFoundationResponse::HTTP_CREATED);
        }

        return response()->json([
            'success' => false,
            'Message' => 'General Error',
        ], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
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
        $result = user::find($id);

        $result->delete();
    }
    /**
     * permanently Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function force_destroy($id)
    {
        //
        $result = User::find($id);

        $result->forceDelete();

        // You may also use the forceDelete method when building Eloquent relationship queries:

        //     $flight->history()->forceDelete();
    }
    /**
     * permanently Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        //
        $result = User::find($id);

        $result->resote();
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
        return response()->json(["user" => $request->user(), "roles" => $request->user()->roles, "success" => true]);
    }
    /**
     * Get All Users
     * @return [json] user object
     */
    public function getUsers(Request $request)
    {
        $users = User::with(['roles' => function ($q) {
            $q->select('name', 'guard_name');
        }])->get(); //Isdoctor()->

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
        return response()->json(["roles" => $request->user()->getRoleNames(), 'message' => 'My Roles Successfuly Collected', "success" => true]);
    }
    /**
     * Get the authenticated User Roles
     *
     * @return [json] roles object
     */
    public function getUserRolesById(Request $request, $id)
    {

        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User Not valid'], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        }
        if (!$request->user()->hasRole('SUPER_ADMIN'))
            return response()->json(['message' => 'You are not authorized for this request'], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        return response()->json(["roles" => $user->getRoleNames(), 'message' => 'My Roles Successfuly Collected', "success" => true], HttpFoundationResponse::HTTP_ACCEPTED);
    }
    public function getAllRoles(Request $request)
    {
        // if(!$request->user()->hasRole('SUPER_ADMIN'))
        //     return response()->json(['message'=>'You are not authorized for this request'],HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        $roles = collect(Role::select('id', 'name', 'guard_name')->get());

        $tranformedRoles = $roles->transform(function ($value, $key) {
            return $value['name'];
        });

        return response()->json(["AllRoles" => $tranformedRoles, 'message' => 'My Roles Successfuly Collected', "success" => true], HttpFoundationResponse::HTTP_ACCEPTED);
    }
    public function getAllPermissions(Request $request)
    {
        // if(!$request->user()->hasRole('SUPER_ADMIN'))
        //     return response()->json(['message'=>'You are not authorized for this request'],HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        $permissions = collect(Permission::get());

        $GroupedPermission = $permissions->groupBy('guard_name');
        $tranformedPermission = $permissions->transform(function ($value, $key) {
            return $value['name'];
        });

        return response()->json(["AllPermissionTransform" => $tranformedPermission, 'groupedPermission' => $GroupedPermission, 'message' => 'My Roles Successfuly Collected', "success" => true], HttpFoundationResponse::HTTP_ACCEPTED);
    }
    public function getAllRolesPremissions(Request $request)
    {
        // if(!$request->user()->hasRole('SUPER_ADMIN'))
        //     return response()->json(['message'=>'You are not authorized for this request'],HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        $roles = collect(Role::select('id', 'name', 'guard_name')->where('guard_name', 'web')->get());

        $tranformedRoles = $roles->transform(function ($value, $key) {
            return $value['name'];
        });
        $permissions = collect(Permission::get());

        $GroupedPermission = $permissions->groupBy('guard_name');
        $tranformedPermission = $permissions->transform(function ($value, $key) {
            return $value['name'];
        });

        return response()->json(["allRoles" => $tranformedRoles, 'allPermissions' => $tranformedPermission, 'message' => 'My Roles Successfuly Collected', "success" => true], HttpFoundationResponse::HTTP_ACCEPTED);
    }
}
################ Spatie methods ############################################
// or at least one role from an array of roles:
// $user->hasRole(['editor', 'moderator']);

// All current roles will be removed from the user and replaced by the array given
//$user->syncRoles(['writer', 'admin']);

//A role can be removed from a user:
//$user->removeRole('writer');

// $user->assignRole('writer');

// // You can also assign multiple roles at once
// $user->assignRole('writer', 'admin');
// // or as an array
// $user->assignRole(['writer', 'admin']);

// $user->givePermissionTo('edit articles');

// // You can also give multiple permission at once
// $user->givePermissionTo('edit articles', 'delete articles');

// // You may also pass an array
// $user->givePermissionTo(['edit articles', 'delete articles']);

//A permission can be revoked from a user:
//$user->revokePermissionTo('edit articles');

//Or revoke & add new permissions in one go:
//$user->syncPermissions(['edit articles', 'delete articles']);

// You can check if a user has a permission:

//     Or you may pass an integer representing the permission id

// $user->hasPermissionTo('1');
// $user->hasPermissionTo(Permission::find(1)->id);
// $user->hasPermissionTo($somePermission->id);

// You can check if a user has Any of an array of permissions:

//     $user->hasAnyPermission(['edit articles', 'publish articles', 'unpublish articles']);

// ...or if a user has All of an array of permissions:
//     $user->hasAllPermissions(['edit articles', 'publish articles', 'unpublish articles']);

// You may also pass integers to lookup by permission id
// $user->hasAnyPermission(['edit articles', 1, 5]);

// So you can check if a user has a permission with Laravel's default can function:
// $user->can('edit articles');


################## Collections #############

// $x=collect([1,2,3,5,54,5,69,6]);
// return $x->duplicates();
// return $x->countBy(); // counts the repeatation for each element and return non duplicated array

/*
public function complexFilter(){
$categ=MainCateg::get();
$categ= collect($categ);
$resultOfFilter=$categ->filter(function($value,$key){
    return $value['active']==1;
}); // return result which has key of active with value 1
return array_values($resultOfFilter->all());
}

public function complexTrans(){
$categ=MainCateg::get();
$categ= collect($categ);
$resultOfFilter=$categ->tranform(function($value,$key){
    return $value['name'];
}); // return only name property from the whole object

return $categ;
}
//each
//filter
//search
//transform
