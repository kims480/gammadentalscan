<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\ScanRequests;
use App\Models\User;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

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
        // $scanRequest = ScanRequests::get();
        $scanRequest = ScanRequests::with(['user', 'patient'])->get();
        $scanRequest = $scanRequest->makeVisible(['created_at', 'updated_at']);
        $scanRequest = collect($scanRequest);
        $requestList = $scanRequest->transform(function ($value, $key) {
            return  [
                'id' => $value['id'],
                'patient' => $value['patient_name'],
                'doctor' => $value['doctor_name'],
                'status' =>  $value['status'],
                // 'purposesFinal'=>$value['purpose'],
                // 'getOtherPurpose'=>$value['scan_name'],
                // 'twoDImaging'=>$value['two_d_imaging'],
                // 'ThreeDPrinting'=>$value['three_d_printing'],
                // 'threeDImaging'=>$value['three_d_imaging'],
                // 'Photography'=>$value['photography'],
                // 'requiredPhoto'=>$value['report_type'],
                'created_at' => $value['created_at'],
                'updated_at' => $value['updated_at'],
            ];
        });
        return response()->json(
            [
                'requests' => $requestList->all(),
                //  'patient_name'=>$scanRequest['patient']->name_en
                //  'kk'=>$scanRequest
                'message' => 'Requests Collected Sucessfully'
            ],
            HttpFoundationResponse::HTTP_ACCEPTED
        );
    }
    /**
     * Display a single item of list of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function scanRequest($id)
    {
        //
        // $scanRequest = ScanRequests::get();
        $scanRequest = ScanRequests::whereId($id)->with([
            'user' => function ($q) {
                $q->select('id', 'name');
            },
            'patient' => function ($q) {
                $q->select('id', 'name_en', 'name_ar');
            }
        ])->get();
        $scanRequest = $scanRequest->makeVisible(['created_at', 'updated_at']);
        $scanRequest = collect($scanRequest);
        $requestList = $scanRequest->transform(function ($value, $key) {
            return  [
                'id' => $value['id'],
                'patient' => $value['patient_name'],
                'doctor' => $value['doctor_name'],
                'status' =>  $value['status'],
                // 'purposesFinal'=>$value['purpose'],
                // 'getOtherPurpose'=>$value['scan_name'],
                // 'twoDImaging'=>$value['two_d_imaging'],
                // 'ThreeDPrinting'=>$value['three_d_printing'],
                // 'threeDImaging'=>$value['three_d_imaging'],
                // 'Photography'=>$value['photography'],
                // 'requiredPhoto'=>$value['report_type'],
                'created_at' => $value['created_at'],
                'updated_at' => $value['updated_at'],
            ];
        });
        return response()->json(
            [
                'data' => $requestList->all(),
                //  'patient_name'=>$scanRequest['patient']->name_en
                //  'kk'=>$scanRequest
                'message' => 'Requests Collected Sucessfully'
            ],
            HttpFoundationResponse::HTTP_ACCEPTED
        );
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
        $scanRequest = ScanRequests::whereId($id)->with([
            'user' => function ($q) {
                $q->select('id', 'name');
            },
            'patient' => function ($q) {
                $q->select('id', 'name_en', 'name_ar');
            }
        ])->get();
        $scanRequest = $scanRequest->makeVisible(['created_at', 'updated_at']);
        $scanRequest = collect($scanRequest);
        $requestList = $scanRequest->transform(function ($value, $key) {
            return  [
                'id' => $value['id'],
                'patient' => $value['patient_name'],
                'doctor' => $value['doctor_name'],
                'status' =>  $value['status'],
                'purposesFinal' => $value['purpose'],
                'getOtherPurpose' => $value['scan_name'],
                'twoDImaging' => $value['two_d_imaging'],
                'ThreeDPrinting' => $value['three_d_printing'],
                'threeDImaging' => $value['three_d_imaging'],
                'Photography' => $value['photography'],
                'requiredPhoto' => $value['report_type'],
                'created_at' => $value['created_at'],
                'updated_at' => $value['updated_at'],
            ];
        });
        return response()->json([
            'request' => $scanRequest,
            'message' => 'Request Collected Sucessfully'
            //  'patient_name'=>$scanRequest['patient']->name_en
            //  'kk'=>$scanRequest

        ], HttpFoundationResponse::HTTP_ACCEPTED);
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
        $patient = Patient::select('id', 'name_en', 'name_ar')->get();
        $Patients = collect($patient);
        $patientList = $Patients->transform(function ($value, $key) {
            return ['id' => $value['id'], 'name' => $value['name_en'] . ' : ' . $value['name_ar']];
        });
        $patient = $patient->keyBy('id');
        $patient = $patient->all();
        return response()->json(['list' => $patientList, 'patients' => array_values($patient)], 201);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getDoctorsPatientsList(Request $request)
    {
        //
        $doctorList = '';
        $patient = Patient::select('id', 'name_en', 'name_ar')->get();
        $Patients = collect($patient);
        $patientList = $Patients->transform(function ($value, $key) {
            return ['id' => $value['id'], 'name' => $value['name_en'] . ' : ' . $value['name_ar']];
        });
        $patient = $patient->keyBy('id');
        $patient = $patient->all();
        if ($request->user()->hasRole('SUPER_ADMIN')) {
            $doctor = User::role('DOCTOR')->select('id', 'name')->get();
            $doctors = collect($doctor);
            $doctorList = $doctors->transform(function ($value, $key) {
                return ['id' => $value['id'], 'name' => $value['name']];
            });
        }
        return response()->json(['patients' => $patientList, 'doctors' => $doctorList], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function dispatchRequest(Request $request)
    {

        $scanRequest = ScanRequests::create([
            // return    response()->json([
            'refered_by' => intval($request->doctor['id']),
            'patient_id' =>  intval($request->patient['id']),
            'purpose' => $request->purposesFinal,
            'two_d_imaging' => $request->twoDImaging,
            'three_d_printing' => $request->ThreeDPrinting,
            'three_d_imaging' => $request->threeDImaging,
            'photography' => $request->Photography,
            'report_type' => $request->requiredPhoto,
            'scan_name' => $request->getOtherPurpose,
            'status' => "Dispatched"
        ]);
        if ($scanRequest)
            return response()->json(['Message' => 'Request Dispatched Successfully'], HttpFoundationResponse::HTTP_CREATED);

        return response()->json(['Message' => 'Error Creating Request'], HttpFoundationResponse::HTTP_CREATED);
        // if(!$request->user()->hasRole('SUPER_ADMIN'))
        //      return response()->json(['message'=>'You are not authorized for this request'],HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        // $patient=$request->patient;
        // foreach(item  )
        //  return    response()->json([
        //     'success' => true,
        //    // 'Message' => 'User '.$user->name.' Registered Successfully',
        //     'myRequest' => $request->all(),
        //     // 'patient' => json_decode($request->patient[0],true),
        //     //'image' => $request->file('image')->getClientOriginalName(),
        //     // 'photo' => $request->file('image')?$request->file('photo')->getClientOriginalName():'NoImage.jpg'
        // ], HttpFoundationResponse::HTTP_CREATED);

        /*
                'scan_name',	'details',	'created_at',	'updated_at',	'refered_by',
                'patient_id',	'purpose',	'two_d_imaging',	'three_d_imaging',
                'photography',	'three_d_printing',	'report_type'
                */
    }
}
