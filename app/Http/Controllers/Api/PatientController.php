<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Patient;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use Illuminate\Support\Facades\Validator;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $Patient = Patient::with(['user' => function ($q) {
            $q->select('id', 'name');
        }])->orderBy('created_at', 'desc')->get();
        return response()->json($Patient);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPatientList()
    {
        //
        $patient = Patient::select('id', 'name_en', 'name_ar')->orderBy('created_at', 'desc')->get();
        $Patients = collect($patient);
        $patientList = $Patients->transform(function ($value, $key) {
            return ['id' => $value['id'], 'name' => $value['name_en'] . ' : ' . $value['name_ar']];
        });
        $patient = $patient->keyBy('id');
        $patient = $patient->all();
        return response()->json(['patients' => $patientList, 'list' => array_values($patient)], 201);
    }
    /**
     * Display a listing of the resource of specifc doctor.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPatientListOfDoctor($doctorId = null)
    {
        //
        $patient = Patient::select('id', 'name_en', 'name_ar', 'gender', 'created_at', 'telephone', 'dob', 'email')->where('refered_by', $doctorId != null ? $doctorId : Auth::user()->id)->orderBy('created_at', 'desc')->get();
        //with(['user' => function ($q) {  $q->select('id', 'name');  }])->
        $patient->makeVisible('created_at');
        $patient = $patient->keyBy('id');
        $patient = $patient->all();
        return response()->json(['list' => array_values($patient)], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // if(!$request->user()->hasRole('SUPER_ADMIN'))
        //      return response()->json(['message'=>'You are not authorized for this request'],HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        //  return    response()->json([
        //     'success' => true,
        //    // 'Message' => 'User '.$user->name.' Registered Successfully',
        //     'myRequest' => $request->all(),
        //     //'image' => $request->file('image')->getClientOriginalName(),

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

        $myPatient = $this->create($request); //only('name','phone','email', 'password','active','whatsapp','image')


        if ($myPatient)
            return response()->json([
                'success' => true,
                'Message' => 'Patient ' . $myPatient->name_en . ' Registered Successfully',


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
        $myPatient = Patient::with(['user' => function ($q) {
            $q->select('id', 'name');
        }])->find($id);
        $myPatient->makeVisible(['dob']);
        // $doctors = $myUser->doctors;
        // $user=User::find($id);
        if (!$myPatient) {
            return response()->json(['message' => 'Patient Not valid'], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
        }
        // if(!Auth::user()->hasRole('SUPER_ADMIN'))
        //     return response()->json(['message'=>'You are not authorized for this request'],HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);

        return response()->json(['patient' => $myPatient, 'message' => 'My Roles Successfuly Collected', "success" => true], HttpFoundationResponse::HTTP_ACCEPTED);
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
     * Create a new user instance after a valid registration.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \App\Models\User
     */
    protected function create(Request $request)
    {

        return Patient::create([
            'name_en' => $request->name_en,
            'name_ar' => $request->name_ar,
            'email' => $request->email,
            'telephone' => $request['phone'],
            'dob' => $request->dob,
            'gender' => $request['gender'],
            'whatsapp' => $request['whatsapp'],
            'refered_by' => Auth::user()->id

        ]);
        return response()->json(['Message' => 'Patient Added Successfully'], HttpFoundationResponse::HTTP_CREATED);
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
            'name_en' => ['required', 'string', 'max:255'],
            'email' => ['string', 'email', 'max:255', 'unique:patients'],
            'phone' => ['required', 'string'],
            // 'photo'=>'image|null|max:1999'
        ]);
    }
}
