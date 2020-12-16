<template>

<div class="w3-light-grey">
    <!-- Login Container -->
    <div id="login-box" style="display:none;">
        <h1>Sign In</h1>
        <p>Use your Google Account</p>
        <p>
            <button type="button" class="btn btn-default btn-sm" @click="handleAuthClick()">
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
                                <button type="button" class="btn btn-default btn-sm" @click="handleSignoutClick()">
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
</div>
</template>
<script>
import * as lightbox from '@/services/lightbox.min.js'
import drive from '@/services/drive.js'
import * as upload from'@/services/upload.js'
export default {
    data(){
        return{

        }
    },
    computed:{

    },
    methods:{
        handleAuthClick(){
            return drive.handleAuthClick();
        },
        handleSignoutClick(){
            return drive.handleSignoutClick();
        }
    },
    created(){
        drive.handleClientLoad()
    },
    mounted(){

         let jquery = document.createElement('script')
            jquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
            document.head.appendChild(jquery)
            // document.head.appendChild(lightbox)
            // document.head.appendChild(drive)
        // let gogoleApi = document.createElement('script')
        //     gogoleApi.async=true
        //     gogoleApi.defer=true
        //     gogoleApi.setAttribute('src', 'https://apis.google.com/js/api.js')
        //     gogoleApi.setAttribute('onload', `this.onload=function(){};`)
        //     gogoleApi.setAttribute('onreadystatechange', "if (this.readyState === 'complete') this.onload()")
        //     document.head.appendChild(gogoleApi)
            // document.head.appendChild(upload)
    }

}

</script>

<style lang="scss" scoped>

/*************** Google Login Box ***************/
#login-box {
    font-size: medium;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 50px;
    background-color: lightgreen;
    width: 400px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 5px 10px #888888;
}

.logout-link {
    cursor: pointer;
}
/*************** END Google Login Box ***************/

/*************** Google Drive Breadcrumb ***************/
#drive-breadcrumb {
    font-size: 14px;
}

    #drive-breadcrumb a {
        cursor: pointer;
        color: red;
    }

.breadcrumb-arrow {
    background: url(/Images/arrow_right.png) no-repeat 0 7px;
    display: inline-block;
    height: 20px;
    width: 15px;
}
/*************** END Google Drive Breadcrumb ***************/

/*************** Google Drive Box ***************/
#drive-box {
    padding: 10px;
    margin: 10px;
    width: 98%;
    box-sizing: border-box;
    display: none;
    position: relative;
    min-height: 150px;
}

#transparent-wrapper {
    display: none;
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 1001;
    -moz-opacity: 0.35;
    opacity: .35;
    filter: alpha(opacity=35);
}

#drive-content {
    clear: both;
    font-size: 15px;
}

.folder-box, .file-box {
    float: left;
    font-family: Arial;
    width: 150px;
    height: 150px;
    text-align: center;
    padding: 10px;
    margin: 8px;
}

.image-preview {
    text-align: center;
    height: 80px;
}

    .image-preview img {
        max-width: 100%;
        height: 100%;
        cursor: pointer;
    }

.item-title {
    word-wrap: break-word;
    text-align: center;
    font-size: 12px;
    color: blue;
    white-space: nowrap;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
}

#drive-menu {
    float: right;
    display: inline-block;
}

    #drive-menu div:hover {
        background-color: #fafccc;
        border: solid 1px #000;
    }

#button-share.flash {
    background-color: green;
    color: white;
}

#button-trash.flash {
    background-color: orangered;
    color:white;
}

.button-box {
    padding-top: 10px;
}

.button-delete, .button-info, .button-download {
    width: 20px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
    margin-right: 5px;
}

/*************** END Google Drive Box ***************/

/************* User Drive Information **************/
#user-info {
    position: absolute;
    height: 100px;
    right: 0;
    width: 200px;
    margin-top: -110px;
    background: #338daf;
    z-index: 99999999;
    color: #fff;
    padding: 5px;
    box-sizing: border-box;
    text-align: right;
    font-size: 11px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.user-item {
    padding-bottom: 4px;
}

#drive-info {
    position: absolute;
    height: 90px;
    right: 0;
    width: 200px;
    margin-top: -120px;
    background: #338daf;
    z-index: 99999999;
    color: #fff;
    padding: 5px;
    box-sizing: border-box;
    text-align: right;
    font-size: 11px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
/************* END User Drive Information **************/

/************* FLOATING BOX *********************/
.float-box {
    border-radius: 0px;
    -webkit-box-shadow: 7px 7px 5px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 7px 7px 5px rgba(50, 50, 50, 0.75);
    box-shadow: 7px 7px 5px rgba(50, 50, 50, 0.75);
    width: 400px;
    padding: 7px 15px;
    border: solid 1px #ccc;
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 35%;
    z-index: 1000000;
    background-color: #fff;
    display: none;
}

.close-x {
    float: right;
    display: inline-block;
    cursor: pointer;
}

.tbl-info {
    border-left: solid 1px #ccc;
    border-top: solid 1px #ccc;
    margin-bottom: 10px;
    width: 100%;
}

    .tbl-info td {
        border-right: solid 1px #ccc;
        border-bottom: solid 1px #ccc;
        padding: 5px 10px;
        font-size: 11px;
    }

        .tbl-info td.label {
            background: #5f5d5c;
            color: #fff;
            text-align: right;
            width: 50%;
        }

#text-content {
    margin-bottom: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 180px;
    border: solid 1px #ccc;
}

.text-input {
    width: 100%;
    margin-bottom: 10px;
    color: forestgreen;
    font-size: medium;
}

/************* END FLOATING BOX *********************/

/*************** NOTIFICATION ******************/
#loading-wrapper {
    width: 100%;
    height: 100%;
    top: 50px;
    left: 0;
    position: absolute;
}

#loading {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    margin-top: -60px;
    width: 120px;
}

#status-message {
    color: red;
    border: solid 1px #fbfbd4;
    background: #fbfbd4;
    border-radius: 5px;
    padding: 5px;
    /*position:absolute;*/
    right: 10px;
    bottom: 10px;
    z-index: 9999999999;
    font-size: 15px;
}

#error-message{
    border:solid 1px #f2fcb9;
    background:#d83813;
    border-radius:5px;
    color:#fff;
    padding:10px;
    /*position:absolute;*/
    left:10px;
    bottom:10px;
    z-index:9999999999;
    max-width:400px;
    border-radius:5px;
    display:none;
}

#upload-percentage {
    position: absolute;
    left: 46%;
    top: 87%;
    margin-left: -25px;
    margin-top: -100px;
    width: 301px;
    height: 50px;
    border-radius: 50px;
    background: #297B07;
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    font-size: 15px;
    display: none;
}
/*************** END NOTIFICATION ******************/

/***************** MISC ************************/
.button {
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    background-image: -moz-linear-gradient(top, #3498db, #2980b9);
    background-image: -ms-linear-gradient(top, #3498db, #2980b9);
    background-image: -o-linear-gradient(top, #3498db, #2980b9);
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    border: none;
    -webkit-border-radius: 8;
    -moz-border-radius: 8;
    border-radius: 8px;
    font-family: Arial;
    color: #ffffff;
    font-size: 11px;
    padding: 5px 10px;
    text-decoration: none;
    cursor: pointer;
}

    .button:hover {
        background: #3cb0fd;
        background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
        background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
        text-decoration: none;
        border: none;
    }

.hide {
    display: none;
}

.flash {
    -webkit-animation-name: flash;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-name: flash;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;
    animation-name: flash;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@-moz-keyframes flash {
    0% {
        opacity: 1.0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1.0;
    }
}

@-webkit-keyframes flash {
    0% {
        opacity: 1.0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1.0;
    }
}

@keyframes flash {
    0% {
        opacity: 1.0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1.0;
    }
}
/***************** END MISC ************************/

.lightboxOverlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: black;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
  display: none;
}

.lightbox {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 10000;
  text-align: center;
  line-height: 0;
  font-weight: normal;
}

.lightbox .lb-image {
  display: block;
  height: auto;
  max-width: inherit;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
}

.lightbox a img {
  border: none;
}

.lb-outerContainer {
  position: relative;
  background-color: white;
  *zoom: 1;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
}

.lb-outerContainer:after {
  content: "";
  display: table;
  clear: both;
}

.lb-container {
  padding: 4px;
}

.lb-loader {
  position: absolute;
  top: 43%;
  left: 0;
  height: 25%;
  width: 100%;
  text-align: center;
  line-height: 0;
}

.lb-cancel {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  background: url(/Images/loading.gif) no-repeat;
}

.lb-nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.lb-container > .nav {
  left: 0;
}

.lb-nav a {
  outline: none;
  background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
}

.lb-prev, .lb-next {
  height: 100%;
  cursor: pointer;
  display: block;
}

.lb-nav a.lb-prev {
  width: 34%;
  left: 0;
  float: left;
  background: url(/Images/prev.png) left 48% no-repeat;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}

.lb-nav a.lb-prev:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

.lb-nav a.lb-next {
  width: 64%;
  right: 0;
  float: right;
  background: url(/Images/next.png) right 48% no-repeat;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}

.lb-nav a.lb-next:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

.lb-dataContainer {
  margin: 0 auto;
  padding-top: 5px;
  *zoom: 1;
  width: 100%;
  -moz-border-radius-bottomleft: 4px;
  -webkit-border-bottom-left-radius: 4px;
  border-bottom-left-radius: 4px;
  -moz-border-radius-bottomright: 4px;
  -webkit-border-bottom-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.lb-dataContainer:after {
  content: "";
  display: table;
  clear: both;
}

.lb-data {
  padding: 0 4px;
  color: #ccc;
}

.lb-data .lb-details {
  width: 85%;
  float: left;
  text-align: left;
  line-height: 1.1em;
}

.lb-data .lb-caption {
  font-size: 13px;
  font-weight: bold;
  line-height: 1em;
}

.lb-data .lb-number {
  display: block;
  clear: left;
  padding-bottom: 1em;
  font-size: 12px;
  color: #999999;
}

.lb-data .lb-close {
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  background: url(/Images/close.png) top right no-repeat;
  text-align: right;
  outline: none;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  -o-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.lb-data .lb-close:hover {
  cursor: pointer;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

</style>


