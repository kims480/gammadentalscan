<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <title>Google Drive API</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <meta hid="description" name="description"
        content="Gamma Dental Scan Radiology, We are Spcialist for dental radio scans We care to deliver the most accurate dental scans in Egypt and Middle East">
    <meta hid="keywords" name="keywords"
        content="Gamma, Dental, Radiology, Scan, New Request, Impaction, 3d printing, 3d imaging, 2d printing, 2d imaging">
    <meta hid="author" name="author" content="Gamma Dental Radiology Scan">
    <link href="drive.css" rel="stylesheet" />
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

                            <p>
                                <button type="button" class="btn btn-default btn-sm" onclick="handleSignoutClick()">
                                    <span class="glyphicon glyphicon-log-out"></span> Log out
                                </button>
                            </p>
                            <hr>
                        </div>
                    </div>
                    <br>
                    <!-- End Left Column -->
                </div>

                <!-- Right Column -->
                <div class="w3-twothird">

                    <div class="w3-container w3-card w3-white w3-margin-bottom"
                        style="border-radius:5px; min-height:30px;">
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <script src="drive.js"></script>

    <script async defer src="https://apis.google.com/js/api.js" onload="this.onload=function(){};handleClientLoad()"
        onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
</body>

</html>
