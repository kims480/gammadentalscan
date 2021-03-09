<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ScanCateg;
use App\Models\ScanRequests;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use App\Models\ScanResults;
use App\Models\ScanStatus;
use App\Models\ScanStaus;
use Dotenv\Result\success;
use Illuminate\Support\Facades\Auth;

class ScanResultsController extends Controller
{
    // protected $id;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        # code...
        //$this->auth = $auth;
        // $this->$id = $id;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $scanFiles = ScanResults::all();
        return response()->json(['message' => 'Request Dispatched successfully', 'success' => true, 'data' => $scanFiles], HttpFoundationResponse::HTTP_CREATED);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (is_array($request->requestFiles) && count($request->requestFiles) == 1) {
            $item = $request->requestFiles[0];
            $scanRequest = ScanResults::firstOrCreate(

                ['file_id' => $item['id']],
                [
                    // 'file_id' => $item['id'],
                    'file_name' => $item['name'],
                    'request_id' => $request->request_id,
                    'file_categ' => $request->file_categ['id'],
                    'folder_id' => $request->folder_id,
                    'file_ext' => pathinfo($item['name'], PATHINFO_EXTENSION),
                    'uploaded_by' => Auth::user()->id,
                    'comment' => $request->comment,
                ]
            );
            if ($scanRequest) {
                $scanStatus = ScanStatus::updateOrCreate(
                    ['Action_id' => 4],
                    [
                        'Action_id' => "Done",
                        'scan_request_id' => $request->request_id,
                        'Action_by' => Auth::user()->id,
                        // 'created_at' => date_format(date_create(), 'U = Y-m-d H:i:s')
                    ]
                );
                $scanStatus->save();
            }
            return response()->json(['message' => 'File Saved successfully', 'success' => true, 'data' => $scanRequest, 'status' => $scanStatus], HttpFoundationResponse::HTTP_CREATED);
        }
        if (is_array($request->requestFiles) && count($request->requestFiles) > 1) {
            foreach ($request->requestFiles as $sFile) {
                $scanRequest = ScanResults::firstOrCreate(
                    ['file_id' => $sFile['id']],
                    [
                        // 'file_id' => json_encode($sFile)['id'],
                        'file_name' => $sFile['name'],
                        'request_id' => $request->request_id,
                        'file_categ' => $request->file_categ['id'],
                        'folder_id' => $request->folder_id,
                        'file_ext' => pathinfo($sFile['name'], PATHINFO_EXTENSION),
                        'uploaded_by' => Auth::user()->id,
                        'comment' => $request->comment,
                    ]
                );
            }
            if ($scanRequest) {
                $permission = [
                    [
                        'Action_id' => 3, //insert has no acces for mutators //create Model::create -- has access to mutator 'Action_id' => 'On-Process',
                        'scan_request_id' => $request->request_id,
                        'Action_by' => Auth::user()->id,
                        'created_at' => date("Y-m-d H:i:s"),
                        'updated_at' => date("Y-m-d H:i:s")
                    ],
                    [
                        'Action_id' => 4,
                        'scan_request_id' => $request->request_id,
                        'Action_by' => Auth::user()->id,
                        'created_at' => date("Y-m-d H:i:s"),
                        'updated_at' => date("Y-m-d H:i:s")
                    ]
                ];
                $scanStatus = ScanStatus::insert($permission);
                // $scanStatus->save();
            }
            return response()->json(['message' => 'Files Saved successfully', 'success' => true, 'data' => $scanRequest, 'status' => $scanStatus], HttpFoundationResponse::HTTP_CREATED);
        }

        return response()->json(['message' => 'Error Saving files', 'success' => false, 'data' => $request->requestFiles], HttpFoundationResponse::HTTP_NOT_ACCEPTABLE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $scanResult = ScanRequests::select('id', 'rq_num')
            ->with(['scan_results' => function ($q) {
                $q->with(['scanCateg' => function ($r) {
                    $r->select('id', 'categ_name', 'points');
                }]);
            }])->where('id', $id)
            ->orWhere('rq_num', $id)->get();
        // $scanResult = ScanResults::with(['scan_request' => function ($q, $myId = $this->id) {
        //     $q->select('id', 'rqNum')->where('id', $myId)->orWhere('rq_num', $myId);
        // }, 'scanCategs' => function ($q) {
        //     $q->select('id', 'scan_name', 'points');
        // }])->where('request_id', $id)
        //     ->get();
        // $scanResults = collect($scanResults);
        // $scanFiles = $scanResults->transform(function ($value, $key) {
        //     return  [
        //         'files' => $value['scan_results'],

        //     ];
        // });
        // $scanfiles = $scanResult->scan_results();
        return response()->json(['message' => 'Case Files Collected', 'success' => true, 'files' => $scanResult[0]->scan_results], HttpFoundationResponse::HTTP_ACCEPTED);
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
        $result = ScanResults::find($id);

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
        $result = ScanResults::find($id);

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
        $result = ScanResults::find($id);

        $result->resote();
    }
}
