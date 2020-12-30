<?php

namespace App\Traits;

// use Illuminate\Http\Client\Request;
use Illuminate\Http\Request as HttpRequest;

Trait UserTrait
{
    /**
     * Create a new user instance after a valid registration.
     *
     * @param  Request  $request
     *
     */

     function showUplsoadFile(HttpRequest $request) {
        $file = $request->file('image');

        //Display File Name
        echo 'File Name: '.$file->getClientOriginalName();
        echo '<br>';

        //Display File Extension
        echo 'File Extension: '.$file->getClientOriginalExtension();
        echo '<br>';

        //Display File Real Path
        echo 'File Real Path: '.$file->getRealPath();
        echo '<br>';

        //Display File Size
        echo 'File Size: '.$file->getSize();
        echo '<br>';

        //Display File Mime Type
        echo 'File Mime Type: '.$file->getMimeType();

        //Move Uploaded File
        $destinationPath = 'uploads';
        $file->move($destinationPath,$file->getClientOriginalName());
     }
    /**
     * Display a listing of the resource.
     * @param [file] $photo
     * @param [string] $directory
     * @return $imageName
     */
     function saveImage($photo,$directory="uploads"){

        // $file->getClientOriginalName();
        // $file->getClientOriginalExtension();
        // $file->getRealPath();
        // $file->getSize();
        // $file->getMimeType();
        $imageName='noImage.jpg';
        if($photo){
            $imageName=time().$photo->getClientOriginalName();//.$file->getClientOriginalExtension();

            $photo->move($directory,$imageName);
        }
        return $imageName;
     }

}
