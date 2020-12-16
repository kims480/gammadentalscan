<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Google Drive API</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link href="/css/lightbox.css" rel="stylesheet" />
    <link href="/css/drive.css" rel="stylesheet" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <script src="/js/lightbox.min.js"></script>
    <script src="/js/drive.js"></script>

    <script async defer src="https://apis.google.com/js/api.js"
            onload="this.onload=function(){};handleClientLoad()"
            onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>

    <script src="/js/upload.js"></script>
</head>

<body class="w3-light-grey">
    <!-- Login Container -->
    <div id="login-box" style="display:none">
        <h1>Sign In</h1>
        <p>Use your Google Account</p>
        <p>
            <button type="button" class="btn btn-default btn-sm" onclick="handleAuthClick()">
                <span class="glyphicon glyphicon-log-in"></span> Login
            </button>
        </p>
    </div>

    <div id="drive-box">
        <!-- Page Container -->
        <div class="w3-content w3-margin-top" style="max-width:1400px;">
            <!-- The Grid -->
            <div class="w3-row-padding">

                <!-- Left Column -->
                <div class="w3-third">
                    <div class="w3-white w3-text-grey w3-card-4">
                        <div class="w3-display-container">
                            <img src="/Images/google_drive_logo.png" style="width:80%; float:initial" alt="Avatar">
                        </div>
                        <div class="w3-container">
                            <p>
                                <div id="error-message" class="flash "></div>
                                <div id="status-message" class="flash "></div>
                            </p>
                            <hr>
                            <p class="w3-large"><b>Welcome <span id="span-name"></span></b></p>
                            <p style="font-size:15px; color:limegreen;">Total Storage: <span id="span-totalQuota" style="color:red;"></span></p>
                            <p style="font-size:15px; color:limegreen;">Used Storage: <span id="span-usedQuota" style="color:red;"></span></p>
                            <hr>
                            <p>
                                <button type="button" class="btn btn-default btn-sm" onclick="handleSignoutClick()">
                                    <span class="glyphicon glyphicon-log-out"></span> Log out
                                </button>
                            </p>
                            <hr>
                            <div id="drive-menu" style="float: left;">
                                <button type="button" id="button-reload" class="btn btn-default btn-sm">
                                    <span class="glyphicon glyphicon-refresh"></span> Refresh
                                </button>
                                <button type="button" id="button-upload" class="btn btn-default btn-sm button-opt">
                                    <span class="glyphicon glyphicon-cloud-upload"></span> Upload
                                </button>
                                <button type="button" id="button-addfolder" class="btn btn-default btn-sm button-opt">
                                    <span class="glyphicon glyphicon-folder-open"></span> Add Folder
                                </button>
                                <button type="button" id="button-share" class="btn btn-default btn-sm share-opt">
                                    <span class="glyphicon glyphicon-share-alt"></span> Share
                                </button>
                                <button type="button" id="button-trash" class="btn btn-default btn-sm trash-opt">
                                    <span class="glyphicon glyphicon-trash"></span> Trash
                                </button>
                            </div>
                            <br>
                            <br>
                            <hr>

                            <div id="box-UploadFile" style="display:none">
                                <div class="close-x"><img id="imgCloseAddFile" class="imgClose" src="/Images/button_close.png" alt="close" /></div>
                                <p class="w3-large"><b>Upload</b></p>

                                <div class="custom-file mb-3">
                                    <input type="file" id="fUpload" class="custom-file-input" name="filename">
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                            </div>

                            <hr>

                            <div id="box-AddFolder" style="display:none">
                                <div class="folder-form">
                                    <div class="close-x"><img id="imgCloseAddFolder" class="imgClose" src="/Images/button_close.png" alt="close" /></div>
                                    <p class="w3-large"><b>Add New Folder</b></p>
                                    <div><input type="text" id="txtFolder" class="text-input" /></div>

                                    <button type="button" id="btnAddFolder" class="btn btn-default btn-sm">
                                        <span class="glyphicon glyphicon-ok"></span> Add
                                    </button>
                                </div>
                            </div>

                            <hr>

                            <div id="box-info" style="display:none">
                                <div class="info-form">
                                    <div class="close-x"><img id="imgCloseInfo" class="imgClose" src="/Images/button_close.png" alt="close" /></div>
                                    <p class="w3-large"><b>View Details</b></p>

                                    <p style="font-size:15px; color:limegreen;">Created Date: <span id="spanCreatedDate" style="color:red;"></span></p>
                                    <p style="font-size:15px; color:limegreen;">Modified Date: <span id="spanModifiedDate" style="color:red;"></span></p>
                                    <p style="font-size:15px; color:limegreen;">Owner: <span id="spanOwner" style="color:red;"></span></p>


                                    <p style="font-size:15px; color:limegreen;">Title: <span id="spanTitle" style="color:red;"></span></p>
                                    <p style="font-size:15px; color:limegreen;">Size: <span id="spanSize" style="color:red;"></span></p>
                                    <p style="font-size:15px; color:limegreen;">Extension: <span id="spanExtension" style="color:red;"></span></p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <br>

                    <!-- End Left Column -->
                </div>

                <!-- Right Column -->
                <div class="w3-twothird">

                    <div class="w3-container w3-card w3-white w3-margin-bottom" style="border-radius:5px; min-height:30px;">
                        <div id="drive-breadcrumb">
                            <span class='breadcrumb-arrow'></span>
                            <a data-id='root' data-level='0'>Home</a>
                            <span id="span-navigation"></span>
                        </div>
                    </div>

                    <div class="w3-container w3-card w3-white" id="drive-content">
                    </div>

                    <!-- End Right Column -->
                </div>

                <!-- End Grid -->
            </div>

            <!-- End Page Container -->
        </div>
    </div>
</body>

</html>
