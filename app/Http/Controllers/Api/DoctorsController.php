<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Doctors;
use PhpParser\Comment\Doc;

class DoctorsController extends Controller
{
    public function __construct()
    {
        # code...
        // $this->middleware('auth:api'); //, ['except' => ['login', 'signin', 'signup']]
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $doctors = Doctors::get(); // ::withoutGlobalScope('active')
        return response()->json(['doctors' => $doctors], 200);
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
        return Doctors::create($request->all());
        return response()->json(['Message' => 'Doctor Registered Successfully'], 200);
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
        $doctor = Doctors::find($id);


        return response()->json(['doctor' => $doctor], 200);


        // foreach ($post->tags as $tag) {
        //     //
        // }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function patients($id)
    {
        //
        $doctor = Doctors::withoutGlobalScope('active')->find($id);
        if (is_object($doctor)) {
            $patients = $doctor->patients;

            if (is_object($patients)) {
                return response()->json(['doctor_id' => $doctor->id, 'doctor_name' => $doctor->name, 'patients' => $patients], 200);
            } else {
                return response()->json(['doctor_id' => $doctor->id, 'doctor_name' => $doctor->name, 'patients' => []], 200);
            }
        } else {
            return response()->json(['doctor' => 'No Such doctor in our Database', 'message' => 'No Such doctor in our Database', 'patients' => []], 404);
        }

        // foreach ($post->tags as $tag) {
        //     //
        // }
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
}
