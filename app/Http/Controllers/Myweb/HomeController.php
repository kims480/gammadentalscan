<?php

namespace App\Http\Controllers\Myweb;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'google', 'testmail', 'googleDrive', 'newscan');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
    public function google()
    {
        session_start();
        setcookie('foo', 'bar', time() + 3600);
        header("location: googledrive.php");
        return view('layouts.admin');
    }
    public function testmail()
    {
        session_start();
        setcookie('foo', 'bar', time() + 3600);

        return view('newuser', ['adminName' => 'Super Admin', 'dataToPass' => [
            "email" => "newtest6@localhost.org",
            "name" => "newtest6",
            "telephone" => "011223344556"
        ]]);
    }
    public function googleDrive()
    {

        return view('google.drive');
    }


    public function dashboard()
    {
        return view('layouts.admin');
    }
    public function login()
    {
        return view('sessions.login');
    }
    public function test()
    {
        return view('pages.test');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
     * New Scan Request Form
     *
     * @return \Illuminate\View\View|\Illuminate\Contracts\View\Factory
     */
    public function newscan()
    {
        return view('section.scan');
    }
}
