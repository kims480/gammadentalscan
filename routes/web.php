<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use Spatie\Permission\Contracts\Permission;
use Spatie\Permission\Models\Permission;
// use Spatie\Permission\Contracts\Role;
use Spatie\Permission\Models\Role;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'Myweb\\HomeController@index')->name('web_Home');
Route::get('/google', 'Myweb\\HomeController@google')->name('gdrive');
Route::get('/googleDrive', 'Myweb\\HomeController@googleDrive')->name('googleDrive');
// Route::get('/app', 'AppController@index')->name('App_Main'); //middleware('auth')->
// Route::get('/app/signin', 'AppController@index')->name('App_Home');
// Route::get('/app/register', 'AppController@index')->name('App_Register');;
Route::get('/home', 'Myweb\\HomeController@index')->name('web_Home');


//create role and its related permissions
Route::get('/create-role/{name?}/{guard?}', function($name=null,$guard='web'){

    if(!$name){
        return response()->json(['Error'=>'<b>nothing to Create please pass role name after / url</b>'],401);
    }
    $name=strtoupper($name);
    $role='';
    if ($name=='ADMIN' || $name=='DEVELOPER'){

        if($name=='ADMIN' && Role::where([['name','=','ADMIN'],['guard_name','=',$guard]])->count() == 0)
            $role = Role::create(['name' => 'ADMIN','guard_name'=>$guard]);
        if($name=='DEVELOPER' && Role::where([['name','=','DEVELOPER'],['guard_name','=',$guard]])->count() == 0)
            $role = Role::create(['name' => $name,'guard_name'=>$guard]);

        return response()->json(['Role'=>$role],201);
    };
    if($name=='USERS'){
        if(Role::where([['name','=','ADMIN'],['guard_name','=',$guard]])->count() == 0)
        $role = Role::create(['name' => 'ADMIN','guard_name'=>$guard]);
        // return response()->json(['Error'=>'ADMIN ROLE Must be intiated to create Users permissions'],401);
    }else{

        $role = Role::create(['name' => $name,'guard_name'=>$guard]);
    }
    // Permission::whereIn('name',['READ_'.$name,'ADD_'.$name,'DELETE_'.$name,'UPDATE_'.$name])->delete();
    $permissions=[
        'ReadUsers' => Permission::create(['name' => 'READ_'.$name,'guard_name'=>$guard]),
        'AddUsers' => Permission::create(['name' => 'ADD_'.$name,'guard_name'=>$guard]),
        'UpdateUsers' => Permission::create(['name' => 'UPDATE_'.$name,'guard_name'=>$guard]),
        'DeleteUsers' => Permission::create(['name' => 'DELETE_'.$name,'guard_name'=>$guard]),
        ];
    $role->syncPermissions($permissions);
    return response()->json(['Role'=>$role, 'Permissions'=>$permissions],201);
    });


    // Assign Role and permissions to user
Route::get('/assign-role/{role}/{guard?}', function($role,$guard='web'){

    $role=strtoupper($role);
    if ($role=='ADMIN'||$role=='SUPER_ADMIN' || $role=='DEVELOPPER'){
        Auth::user()->assignRole($role);
        return Auth::user();
    };
    Auth::user()->assignRole(($role=='USERS')?'ADMIN':$role);
    Auth::user()->givePermissionTo('READ_'.$role);
    Auth::user()->givePermissionTo('UPDATE_'.$role);
    Auth::user()->givePermissionTo('ADD_'.$role);
    Auth::user()->givePermissionTo('DELETE_'.$role);

    return Auth::user();
    });

Auth::routes();

// Route::middleware('auth:sanctum')->get('/app/{any?}', 'AppController@index')->where('any', '^(?!api\/)[\/\w\.\,-]*'); //middleware('auth')->

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//  ->where('any','.*');
//  ->where('any', '^(?!api\/)[\/\w\.\,-]*')
