@extends('layouts.mail')

@section('content')
    <table width="640" cellpadding="0" cellspacing="0" border="0"
        style="max-width:640px; width:100%; font-family:Verdana, Geneva, Tahoma, sans-serif;" class="wrapper"
        bgcolor="#FFFFFF">
        <tr>
            <td height="10" style="font-size:18px; line-height:18px;">
                <div class=""
                    style="display: flex; align-item:center;justify-content:flex-start; padding:5px; color:white; background-color:darkgreen;">
                    <h3>GAMMA Dental Scan</h3>
                </div>
            </td>
        </tr>
        <tr>
            <td>

                <table class="table" width="600" cellpadding="0" cellspacing="0">
                    <tr>
                        <td valign="top">


                            <div class="panel panel-default" style="min-height: 400px">

                                <div class="panel-body">
                                    <p><strong>Dear Mr. {{ $adminName }}</strong></p>
                                    <p> This to be notified That New user has been Registered</p>
                                    <!-- Default panel contents -->
                                    <div class="well well-lg">New User</div>
                                    <table border="1">
                                        <tr style="border:1px solid black">
                                            <th style="border:1px solid black">Name</th>
                                            <th style="border:1px solid black">EMAIL</th>
                                            <th style="border:1px solid black">Phone</th>
                                        </tr>
                                        <tr style="border:1px solid black">
                                            <td style="border:1px solid black">
                                                <strong>{{ $dataToPass ? $dataToPass['name'] : '' }}</strong>
                                            </td>
                                            <td style="border:1px solid black"><strong><a
                                                        href="mailto:  {{ $dataToPass ? $dataToPass['email'] : '' }}">{{ $dataToPass ? $dataToPass['email'] : '' }}</a></strong>
                                            </td>
                                            <td style="border:1px solid black"><strong><a
                                                        href="tel: {{ $dataToPass ? $dataToPass['telephone'] : '' }}">{{ $dataToPass ? $dataToPass['telephone'] : '' }}</a></strong>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
        <tr>
            <td style=" ">
                <div
                    style="font-size:14px; height:100px; line-height:14px;display: flex; color:white;background:black;padding:5px; align-items:center; justify-content:center">
                    GAMMA&copy; 2020
                </div>

            </td>
        </tr>
    </table>
@endsection
