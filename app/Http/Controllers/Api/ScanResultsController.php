<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ScanRequests;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use App\Models\ScanResults;
use Dotenv\Result\Success;
use Illuminate\Support\Facades\Auth;

class ScanResultsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $scanFiles = ScanResults::all();
        return response()->json(['Message' => 'Request Dispatched Successfully', 'Success' => true, 'data' => $scanFiles], HttpFoundationResponse::HTTP_CREATED);
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
                    'file_id' => $item['id'],
                    'file_name' => $item['name'],
                    'request_id' => $request->request_id,
                    'file_categ' => $request->file_categ,
                    'folder_id' => $request->folder_id,
                    'uploaded_by' => Auth::user(),
                    'comment' => $request->comment,
                ]
            );
            return response()->json(['Message' => 'Request Dispatched Successfully', 'Success' => true, 'data' => $scanRequest], HttpFoundationResponse::HTTP_CREATED);
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
            return response()->json(['Message' => 'Request Dispatched Successfully', 'Success' => true, 'data' => $scanRequest], HttpFoundationResponse::HTTP_CREATED);
        }

        return response()->json(['Message' => 'Error Creating Request', 'Success' => false, 'data' => $request->requestFiles], HttpFoundationResponse::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $scanResult = ScanRequests::select('id', 'rq_num')->with(['scan_results'])->where('id', $id)
            ->orWhere('rq_num', $id)->get();
        // $scanResults = collect($scanResults);
        // $scanFiles = $scanResults->transform(function ($value, $key) {
        //     return  [
        //         'files' => $value['scan_results'],

        //     ];
        // });
        // $scanfiles = $scanResult->scan_results();
        return response()->json(['Message' => 'Case Files Collected', 'Success' => true, 'files' => $scanResult[0]->scan_results], HttpFoundationResponse::HTTP_ACCEPTED);
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
        $result = ScanResults::find(1);

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
        $result = ScanResults::find(1);

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
        $result = ScanResults::find(1);

        $result->resote();
    }
}
