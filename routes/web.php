<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'Myweb\\HomeController@index')->name('home');
Route::get('/google', 'Myweb\\HomeController@google')->name('gdrive');
Route::get('/googleDrive', 'Myweb\\HomeController@googleDrive')->name('googleDrive');
// Route::get('/app', 'AppController@index')->name('App_Main'); //middleware('auth')->
Route::get('/app/signin', 'AppController@index')->name('App_Home');
Route::get('/app/register', 'AppController@index')->name('App_Register');;
Route::get('/home', 'Myweb\\HomeController@index')->name('web_Home');

Auth::routes();

Route::middleware('auth:sanctum')->get('/app/{any?}', 'AppController@index')->where('any', '^(?!api\/)[\/\w\.\,-]*'); //middleware('auth')->

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//  ->where('any','.*');
//  ->where('any', '^(?!api\/)[\/\w\.\,-]*')
