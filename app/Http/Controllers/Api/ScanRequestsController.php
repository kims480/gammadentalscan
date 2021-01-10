<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\Scan;
use App\Models\User;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScanRequestsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPatientList()
    {
        //
        $patient=Patient::select('id','name_en','name_ar')->get();
        $Patients = collect($patient);
        $patientList=$Patients->transform(function($value,$key){
            return ['id'=>$value['id'],'name'=>$value['name_en']. ' : '.$value['name_ar']] ;
        });
        $patient=$patient->keyBy('id');
        $patient=$patient->all();
        return response()->json(['list'=> $patientList, 'patients'=> array_values( $patient)],201);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getDoctorsPatientsList(Request $request)
    {
        //
        $doctorList='';
        $patient=Patient::select('id','name_en','name_ar')->get();
        $Patients = collect($patient);
        $patientList=$Patients->transform(function($value,$key){
            return ['id'=>$value['id'],'name'=>$value['name_en']. ' : '.$value['name_ar']] ;
        });
        $patient=$patient->keyBy('id');
        $patient=$patient->all();
        if($request->user()->hasRole('SUPER_ADMIN')){
            $doctor=User::role('DOCTOR')->select('id','name')->get();
            $doctors = collect($doctor);
            $doctorList=$doctors->transform(function($value,$key){
                return ['id'=>$value['id'],'name'=>$value['name']] ;
            });


        }
        return response()->json(['patients'=> $patientList, 'doctors'=> $doctorList],201);
    }
}
