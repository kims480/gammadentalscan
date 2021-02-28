<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register', ['App\\Http\\Controllers\\Api\\Auth\\RegisterController', 'register']);
Route::post('/login',   ['App\\Http\\Controllers\\Api\\Auth\\LoginController', 'login']);
Route::post('/forgot',   ['App\\Http\\Controllers\\Api\\PasswordController', 'forgot']);
Route::post('/reset',   ['App\\Http\\Controllers\\Api\\PasswordController', 'reset']);
// Route::post('/user',   ['App\\Http\\Controllers\\Api\\Auth\\LoginController','user']); // this not work without middleware
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user',   ['App\\Http\\Controllers\\Api\\Auth\\LoginController', 'user']); // this not work without middleware
    Route::post('/logout',   ['App\\Http\\Controllers\\Api\\Auth\\LoginController', 'logout']);
    Route::get('/get-users', 'Api\\UserController@getUsers');
    Route::get('/getUserRolesById/{id}', 'Api\\UserController@getUserRolesById');
    Route::get('/getUserPermissionsById/{id}', 'Api\\UserController@getUserPermissionsById');
    Route::get('/getAllPermissions', 'Api\\UserController@getAllPermissions');
    Route::get('/getAllRoles', 'Api\\UserController@getAllRoles');
    Route::get('/getAllRolesPremissions', 'Api\\UserController@getAllRolesPremissions');

    Route::post('/createWithRolesPremissions', 'Api\\UserController@createWithRolesPremissions');

    ///////////////////////////// Ptients ///////////////////////////////
    Route::post('/patient-list', 'Api\\PatientController@getPatientList')->name('patient.list');
    Route::post('/getPatientListOfDoctor', 'Api\\PatientController@getPatientListOfDoctor')->name('patient.list');
    Route::post('/doctors-patients-list', 'Api\\ScanRequestsController@getDoctorsPatientsList')->name('doctors.patients.list');
    Route::post('/dispatch-request', 'Api\\ScanRequestsController@dispatchRequest')->name('dispatch.request');
    Route::get('/scanrequest/{id}', 'Api\\ScanRequestsController@scanRequest')->name('scan.request.id');
    Route::post('/scanresult/{id}', 'Api\\ScanRequestsController@scanResult')->name('scan.result.id');

    Route::apiResources([

        'notifications' => 'Api\\NotificationsController',
        'messages' => 'Api\\MessagesController',
        'doctors' => 'Api\\DoctorsController',

        'patient' => 'Api\\PatientController',
        'categ' => 'Api\\CategController',
        'scans' => 'Api\\ScanController',
        'results' => 'Api\\ScanResultsController',
        'scanrequests' => 'Api\\ScanRequestsController',
        'services' => 'Api\\ServicesController',
        'softwares' => 'Api\\SoftwaresController',
        'webcontent' => 'Api\\WebContentController',
        'websetting' => 'Api\\WebSettingController',
        'purpose' => 'Api\\PurposeController',
        'users' => 'Api\\UserController',
    ]);
});
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::group([
//     //s'middleware' => 'auth:client',
//     'prefix' => 'auth'
// ], function ($router) {
//     // Route::post('login', 'AuthController@login');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');
//     Route::post('register', 'Auth\RegisterController@register');
// });
// Route::group([
//     'middleware' => 'auth:api',
//     // 'prefix' => 'child'
// ], function ($router) {
//     Route::post('patients/{id}', 'DoctorsController@patients');
//     Route::post('doctors/{id}', 'UserController@doctors');
//     Route::post('getDoctorsForUser/{id}', 'UserController@getDoctorsForUser');
//     Route::post('getUsersWithDoctorRole', 'UserController@getUsersWithDoctorRole');
//     Route::post('getActiveUsersWithDoctorRole', 'UserController@getActiveUsersWithDoctorRole');
//     Route::post('getUserRoles', 'UserController@getUserRoles');
//     Route::post('getActiveusers', 'UserController@getActiveusers');
// });

// Route::post('signin', 'UserController@signin');
// Route::post('register', 'UserController@signup');
// Route::post('logout', 'UserController@logout');
// // Route::post('login', 'UserController@login');
// Route::post('user', 'UserController@user');
// Route::post('getusers', 'UserController@getusers');
// Route::apiResources([

//     'notifications' => 'NotificationsController',
//     'messages' => 'MessagesController',
//     'doctors' => 'DoctorsController',

//     'patient' => 'PatientController',
//     'categ' => 'CategController',
//     'scans' => 'ScanController',
//     'results' => 'ScanResultsController',
//     'requests' => 'ScanRequestsController',
//     'services' => 'ServicesController',
//     'softwares' => 'SoftwaresController',
//     'webcontent' => 'WebContentController',
//     'websetting' => 'WebSettingController',
//     'purpose' => 'PurposeController',
//     'users' => 'UserController',
// ]);
// Route::post('/sanctum/token', function (Request $request) {
//     $request->validate([
//         'email' => 'required|email',
//         'password' => 'required',
//         // 'device_name' => 'required',
//     ]);

//     $user = User::where('email', $request->email)->first();

//     if (! $user || ! Hash::check($request->password, $user->password)) {
//         throw ValidationException::withMessages([
//             'email' => ['The provided credentials are incorrect.'],
//         ]);
//     }

//     return $user->createToken($request->device_name)->plainTextToken;
// });
