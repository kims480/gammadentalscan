<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\ScanRequests;
use App\Models\ScanStatus;
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
    public function index(Request $request)
    {
        //
        // $scanRequest = ScanRequests::get();
        if ($request->user()->hasRole('SUPER_ADMIN') || $request->user()->hasRole('DEVELOPER') || $request->user()->hasRole('ADMIN')) {
            $scanRequest = ScanRequests::with(['user', 'patient'])->orderBy('id', 'desc')->get();
        } elseif ($request->user()->hasRole('DOCTOR')) {
            $scanRequest = ScanRequests::with(['user', 'patient'])->where('refered_by', Auth::user()->id)->orderBy('id', 'desc')->get();
        } else {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to access'
            ], HttpFoundationResponse::HTTP_FORBIDDEN);
        }

        // $scanRequest = ScanRequests::with(['user', 'patient'])->orderBy('id', 'desc')->get();
        $scanRequest = $scanRequest->makeVisible(['created_at', 'updated_at']);
        $scanRequest = collect($scanRequest);
        $requestList = $scanRequest->transform(function ($value, $key) {
            return  [
                'id' => $value['id'],
                'patient' => $value['patient_name'],
                'doctor' => $value['doctor_name'],
                'status' =>  $value['status'],
                'rqNum' => $value['rq_num'],
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
                'success' => true,
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
    public function scanRequest(Request $request, $id)
    {
        //
        // $scanRequest = ScanRequests::get();
        if ($request->user()->hasRole('SUPER_ADMIN') || $request->user()->hasRole('DEVELOPER') || $request->user()->hasRole('ADMIN')) {

            $scanRequests = ScanRequests::select('id', 'rq_num', 'status', 'created_at', 'updated_at', 'patient_id', 'refered_by', 'scan_name')->whereId($id)->orWhere('rq_num', $id)->with([
                'user' => function ($q) {
                    $q->select('id', 'name');
                },
                'patient' => function ($q) {
                    $q->select('id', 'name_en', 'name_ar');
                }
            ])->orderBy('id', 'desc')->get();
        } elseif ($request->user()->hasRole('DOCTOR') && !($request->user()->hasRole('SUPER_ADMIN') || $request->user()->hasRole('DEVELOPER'))) {
            $scanRequests = ScanRequests::select('id', 'rq_num', 'status', 'created_at', 'updated_at', 'patient_id', 'refered_by', 'scan_name')
                ->where('refered_by', Auth::user()->id)->whereId($id)->orWhere('rq_num', $id)->with([
                    'user' => function ($q) {
                        $q->select('id', 'name');
                    },
                    'patient' => function ($q) {
                        $q->select('id', 'name_en', 'name_ar');
                    }
                ])->orderBy('id', 'desc')->get();
        } else {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to access'
                //  'patient_name'=>$scanRequest['patient']->name_en
                //  'kk'=>$scanRequest

            ], HttpFoundationResponse::HTTP_FORBIDDEN);
        }
        $scanRequests = $scanRequests->makeVisible(['created_at', 'updated_at']);
        $scanRequest = collect($scanRequests);
        $requestList = $scanRequest->transform(function ($value, $key) {
            return  [
                'id' => $value['id'],
                'rqNum' => $value['rq_num'],
                'patient' => $value['patient_name'],
                'doctor' => $value['doctor_name'] ? $value['doctor_name'] : json_decode("{'id':" . Auth::user()->id . ",'name':" . Auth::user()->name . "'}"),
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
                'extra' => $scanRequests,
                'success' => true,
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
    public function updateRequestStatus(Request $request, $id)
    {
        //
        // $scanRequest = ScanRequests::get();
        if ($request->user()->hasRole('SUPER_ADMIN') || $request->user()->hasRole('DEVELOPER') || $request->user()->hasRole('ADMIN')) {

            $scanRequests = ScanRequests::findOrFail($id);
            $scanRequests->status =  $request['status'];
            $scanRequests->save();
        } elseif ($request->user()->hasRole('DOCTOR') && $request['status'] === 'Canceled') {
            $scanRequests = ScanRequests::findOrFail($id);
            $scanRequests->status =  $request['status'];
            $scanRequests->save();
        } else {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to access'
                //  'patient_name'=>$scanRequest['patient']->name_en
                //  'kk'=>$scanRequest

            ], HttpFoundationResponse::HTTP_FORBIDDEN);
        }
        $actions = $request['status'] ?
            (
                ($request['status'] === 'Canceled') ? 10
                : (
                    ($request['status'] === 'Dispatched') ? 1
                    : (
                        ($request['status'] === 'Accepted') ? 2
                        : (
                            ($request['status'] === 'Processing') ? 3
                            : (
                                ($request['status'] === 'Done') ? 4
                                : (
                                    ($request['status'] === 'Delivered') ? 3
                                    : (
                                        ($request['status'] === 'Rejected') ? 9 : 0))))))) : 0;

        $scanStatus = ScanStatus::updateOrCreate(
            ['scan_request_id' => $id, 'Action_id' => $actions],
            [
                'Action_id' => $request['status'],
                'scan_request_id' => $id,
                // 'scan_request_id' => $request->request_id,
                'Action_by' => Auth::user()->id,
                'updated_at' => date("Y-m-d H:i:s")
            ]
        );
        $scanStatus->save();

        return response()->json(
            [

                [
                    'id' => $scanRequests->id,
                    'rqNum' => $scanRequests->rq_num,
                    'status' => $scanRequests->status
                ],
                'status' => $scanStatus,
                'success' => true,
                //  'patient_name'=>$scanRequest['patient']->name_en
                //  'kk'=>$scanRequest
                'message' => 'Request (' . $scanRequests->rq_num . ') status is ' . $request['status'] . ' now.'
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
    public function show(Request $request, $id)
    {
        if ($request->user()->hasRole('SUPER_ADMIN') || $request->user()->hasRole('DEVELOPER') || $request->user()->hasRole('ADMIN')) {
            $scanRequest = ScanRequests::whereId($id)->with([
                'user' => function ($q) {
                    $q->select('id', 'name');
                },
                'patient' => function ($q) {
                    $q->select('id', 'name_en', 'name_ar');
                }
            ])->orderBy('id', 'desc')->get();
        } elseif ($request->user()->hasRole('DOCTOR')) {

            $scanRequest = ScanRequests::where('id', $id)->where('refered_by', Auth::user()->id)->with([
                'patient' => function ($q) {
                    $q->select('id', 'name_en', 'name_ar');
                }
            ])->orderBy('id', 'desc')->get();
        } else {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to access'

                //  'patient_name'=>$scanRequest['patient']->name_en
                //  'kk'=>$scanRequest

            ], HttpFoundationResponse::HTTP_FORBIDDEN);
        }
        $scanRequest = $scanRequest->makeVisible(['created_at', 'updated_at']);
        $scanRequest = collect($scanRequest);
        $requestList = $scanRequest->transform(function ($value, $key) {
            return  [
                'id' => $value['id'],
                'rqNum' => $value['rq_num'],
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
            'message' => 'Request Collected Sucessfully',
            'success' => true,
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
        //\
        $result = ScanRequests::find($id);

        $result->delete();

        //ScanResults::destroy(1); //it can delete the record directly instead of calling then delete
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
        $result = ScanRequests::find($id);

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
        $result = ScanRequests::find($id);

        $result->resote();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPatientList(Request $request)
    {
        //
        $patient = '';
        if ($request->user()->hasRole('SUPER_ADMIN') || $request->user()->hasRole('DEVELOPER') || $request->user()->hasRole('ADMIN')) {
            $patient = Patient::select('id', 'name_en', 'name_ar')->get();
        } elseif ($request->user()->hasRole('DOCTOR')) {
            $patient = Patient::select('id', 'name_en', 'name_ar')->where('refered_by', Auth::user()->id)->get();
        } else {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to access'
                //  'patient_name'=>$scanRequest['patient']->name_en
                //  'kk'=>$scanRequest

            ], HttpFoundationResponse::HTTP_FORBIDDEN);
        }
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
        $patientList = '';
        if ($request->user()->hasRole('SUPER_ADMIN') || $request->user()->hasRole('DEVELOPER') || $request->user()->hasRole('ADMIN')) {
            $patient = Patient::select('id', 'name_en', 'name_ar')->get();
            $doctor = User::role('DOCTOR')->select('id', 'name')->get();
            $doctors = collect($doctor);
            $doctorList = $doctors->transform(function ($value, $key) {
                return ['id' => $value['id'], 'name' => $value['name']];
            });
        } elseif ($request->user()->hasRole('DOCTOR')) {
            $patient = Patient::select('id', 'name_en', 'name_ar')->where('refered_by', Auth::user()->id)->get();
        } else {
            return response()->json([
                'success' => false,
                'message' => 'You are not authorized to access'
            ], HttpFoundationResponse::HTTP_FORBIDDEN);
        }
        $Patients = collect($patient);
        $patientList = $Patients->transform(function ($value, $key) {
            return ['id' => $value['id'], 'name' => $value['name_en'] . ' : ' . $value['name_ar']];
        });
        // $patient = $patient->keyBy('id');
        // $patient = $patient->all();

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
            'refered_by' => $request->doctor ? intval($request->doctor['id']) : Auth::user()->id,
            'patient_id' =>  intval($request->patient['id']),
            'purpose' => $request->purposesFinal,
            'two_d_imaging' => $request->twoDImaging,
            'three_d_printing' => $request->ThreeDPrinting,
            'three_d_imaging' => $request->threeDImaging,
            'photography' => $request->Photography,
            'report_type' => $request->requiredPhoto,
            'scan_name' => $request->getOtherPurpose ? $request->getOtherPurpose : '',
            'status' => "Dispatched",
            'rq_num' => $this->genRq()
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
    public function genRq()
    {
        $latest_RQ = ScanRequests::select('id', 'rq_num')->orderBy('id', 'desc')->limit(1)->get();

        if (count($latest_RQ) > 0) {
            $latest_RQ_decoded = json_decode($latest_RQ, true);
            $temp = explode('-', $latest_RQ_decoded[0]['rq_num']);
            date_default_timezone_set('Africa/Cairo');

            if ((int)$temp[1] == (int)date('Ymd')) {
                $rqNum = 'RQ-' . date('Ymd') . '-' . (sprintf('%06d', (int)$temp[2] + 1));
            } else {
                $rqNum = 'RQ-' . date('Ymd') . '-' . (sprintf('%06d', 1));
            }
        } else {
            $rqNum = 'RQ-' . date('Ymd') . '-' . (sprintf('%06d', 1));
        }
        return $rqNum;
    }
}
