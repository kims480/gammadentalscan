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
    <template v-if="uploadPercentage">
        <div id='upload-percentage' class='flash'>{{percentageValue.toString() + "%"}}</div>
    </template>



    <div id="drive-box" v-show="showDriveBox">
        <!-- Page Container -->
        <div class="w3-content w3-margin-top" style="max-width:1400px;">
            <!-- The Grid -->
            <div class="w3-row-padding">

                <!-- Left Column -->
                <div class="w3-third">
                    <div class="w3-white w3-text-grey w3-card-4">
                        <div class="w3-display-container">
                            <img src="./../../../assets/images/google_drive_logo.png" style="width:80%; float:initial" alt="Avatar">
                        </div>
                        <div class="w3-container">
                            <p>
                                <div id="error-message" class="flash ">{{errorMessageTxt}}</div>
                                <div id="status-message" class="flash ">{{statusMessageTxt}}</div>
                            </p>
                             <template v-if="setShowLoading">
                                <div id='drive-box-loading'>
                                    <div id='loading-wrapper'><div id='loading'><img src='./../../../assets/images/loading.gif'></div></div>
                                </div>
                            </template>
                            <hr>
                            <p class="w3-large"><b>Welcome <span id="span-name">{{userName}}</span></b></p>
                            <p style="font-size:15px; color:limegreen;">Total Storage: <span id="span-totalQuota" style="color:blue;">{{spanTotalQuota}}</span></p>
                            <p style="font-size:15px; color:limegreen;">Used Storage: <span id="span-usedQuota" style="color:green;">{{spanUsedQuota}}</span></p>
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
                                <div class="close-x"><img id="imgCloseAddFile" class="imgClose" src="./../../../assets/images/button_close.png" alt="close" /></div>
                                <p class="w3-large"><b>Upload</b></p>

                                <div class="custom-file mb-3">
                                    <input type="file" id="fUpload" class="custom-file-input" name="filename">
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                            </div>

                            <hr>

                            <div id="box-AddFolder" style="display:none">
                                <div class="folder-form">
                                    <div class="close-x"><img id="imgCloseAddFolder" class="imgClose" src="./../../../assets/images/button_close.png" alt="close" /></div>
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
                                    <div class="close-x"><img id="imgCloseInfo" class="imgClose" src="./../../../assets/images/button_close.png" alt="close" /></div>
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
                        <template v-if="DRIVE_FILES.length > 0">
                            <div v-for="(file,index) in DRIVE_FILES" :key="index" :class='file.mimeType == "application/vnd.google-apps.folder"?"folder" + "-box" : "file" + "-box"'>
                                <template v-if='file.mimeType == "application/vnd.google-apps.folder"'>
                                        <div class='folder-icon' :data-file-counter='index'
                                            :data-level='file.level' :data-parent='file.parentID'
                                            :data-size='file.fileSize' :data-id='file.id'
                                            :title='file.fileType != "file" ? "Browse " + file.title  : file.title'
                                            :data-name='file.title' :data-has-permission='file.hasPermission'>
                                                <div class='image-preview'><img src='./../../../assets/images/folder.png'/></div>
                                        </div>
                                </template>
                                <template v-else>
                                     <template v-if='file.fileType !== "file"'>
                                        <template v-if='file.thumbnailLink'>
                                            <div class='image-icon' :data-file-counter='index' >
                                                <div class='image-preview'>
                                                    <a :href='file.thumbnailLink.replace("s220", "s800")' :data-lightbox='"image-"+index'>
                                                        <img :src='file.thumbnailLink'/>
                                                    </a>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <template v-if='isFileExtension(file)'>
                                                <div class='file-icon' :data-file-counter='index' >
                                                    <div class='image-preview'>
                                                        <img :src='"./../../../assets/images/" +file.fileExtension +  "-icon.png"'/>
                                                    </div>
                                                </div>
                                            </template>
                                            <template v-else>
                                                    <div class='file-icon' :data-file-counter='index' >
                                                        <div class='image-preview'>
                                                            <img src="./../../../assets/images/undefined-icon.png"/>
                                                        </div>
                                                    </div>
                                            </template>
                                        </template>
                                     </template>
                                </template>
                                <div class='item-title'>{{file.title}}</div>
                                <div class='button-box'>
                                    <template v-if='file.fileType !== "folder"'>
                                        <v-icon>mdi-download</v-icon>
                                            <span class='glyphicon glyphicon-download-alt button-download'
                                                title='Download' :data-id='file.id' :data-file-counter='index'>
                                            </span>
                                    </template>
                                    <v-icon color='black'>mdi-info</v-icon>
                                    <span class='glyphicon glyphicon-info-sign button-info' title='Info'
                                        :data-id='file.id' :data-file-counter='index'>
                                    </span>
                                    <template v-if='file.hasPermission'>
                                        <template v-if='file.labels.trashed'>
                                            <template v-if='file.permissionRole == "owner"'>
                                                <v-icon>mdi-delete</v-icon>
                                                <span class='glyphicon glyphicon-remove button-delete' title='Delete' :data-id='file.id'>
                                                </span>
                                            </template>
                                            <template v-else-if='file.fileType != "folder"'>
                                                <span class='glyphicon glyphicon-remove button-delete' title='Delete' :data-id='file.id'></span>
                                            </template>
                                            <span class='glyphicon glyphicon-retweet button-restore' title='Restore' :data-id='file.id'>
                                            </span>
                                        </template>
                                        <temolate v-else>
                                            <template v-if='file.permissionRole == "owner"'>
                                                <span class='glyphicon glyphicon-remove button-delete' title='Delete' :data-id='file.id'>
                                                </span>
                                            </template>
                                            <template v-else-if='file.fileType != "folder"'>
                                                <span class='glyphicon glyphicon-remove button-delete' title='Delete' :data-id='file.id'></span>
                                            </template>
                                        </temolate>
                                    </template>
                                </div>
                            </div>
                        </template>
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
// function updateSigninStatus(isSignedIn) {
//     if (isSignedIn) {
//         $("#drive-box").show();
//         $("#login-box").hide();
//         showLoading();
//         getDriveFiles();
//     } else {
//         $("#login-box").show();
//         $("#drive-box").hide();
//     }
//     return;
// }
// function isGoogleSigned() {
//     return window.gapi.auth2.getAuthInstance().isSignedIn.get();
// }
import * as lightbox from '@/services/lightbox.min.js'
// import drive from '@/services/drive.js'
// import * as upload from'@/services/upload.js'
import gapi from'@/services/gapi.js'
export default {
    data(){
        return{
            SCOPES : ["https://www.googleapis.com/auth/drive", "profile"],
            CLIENT_ID :
                "909780462877-7uqkksfdop3v16avj4ae077134aluoim.apps.googleusercontent.com",
            FOLDER_NAME :"",
            FOLDER_ID :"root",
            FOLDER_PERMISSION :true,
            FOLDER_LEVEL :0,
            NO_OF_FILES :100,
            DRIVE_FILES :[],
            FILE_COUNTER:0,
            FOLDER_ARRAY :[],
            DELETE_FROM_TRASH:false,
            statusMessage:false,
            statusMessageTxt:'',
            uploadPercentage:false,
            uploadPercentageTxt:'',
            percentageValue:0,
            errorMessage:false,
            errorMessageTxt:'',
            setShowLoading:false,
            showLoadingTxt:'Loading Google Drive files...',
            dataLevel:'',
            dataId:0,
            driveInfo:false,
            userName:'',
            spanTotalQuota:0,
            spanUsedQuota:0,
            showDriveBox:false,
            ShowSharedFiles:false,
            ShowTrashFiles:false,
        }
    },
    mounted(){
        // let gDrive = document.createElement("script");
        //     gDrive.setAttribute("type", "text/javascript");
        //     // gDrive.async=true
        //     gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
        //     document.head.appendChild(gDrive);
            this.handleClientLoad().then(()=>{

                    this.getDriveFiles()
                })
                // console.log(gapi)

         let jquery = document.createElement('script')
            jquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
            document.head.appendChild(jquery)
    },

    methods:{
        // handleAuthClick(){
        //     return drive.handleAuthClick();
        // },
        // handleSignoutClick(){
        //     return drive.handleSignoutClick();
        // },
         async handleClientLoad() {
        //gapi is client library, it used for Load the API client and auth2 library
            console.log('handleClientLoad');
            await gapi.load("client:auth2", this.initClient);
         },
        onload: () => {},
        onreadystatechange: () => {
            return this.readyState === "complete" ?? this.onload;
        },
        //authorize apps
        async initClient() {
            console.log('initClient');
             await gapi.client
                .init({
                    clientId: this.CLIENT_ID,
                    scope: this.SCOPES.join(" ")
                })
                .then(o => {
                    console.log("o", o);
                    console.log(
                        "signed in",
                        window.gapi.auth2.getAuthInstance().isSignedIn.get()
                    );
                    this.showDriveBox=true
                    // Listen for sign-in state changes.
                    gapi.auth2
                        .getAuthInstance()
                        .isSignedIn.listen(updateSigninStatus);
                    this.updateSigninStatus(this.isGoogleSigned());
                        // this.getDriveFiles();
                    // Handle the initial sign-in state.
                })
                .catch(err => {
                    console.log("err", err);
                });
        },
        isGoogleSigned() {
            console.log('isGoogleSignIN');
            return gapi.auth2.getAuthInstance().isSignedIn.get();
        },
         updateSigninStatus(isSignedIn) {
             console.log('updateSigninStatus');
             if (isSignedIn) {
                 $("#drive-box").show();
                $("#login-box").hide();
                this.showLoading();
                this.getDriveFiles();
            } else {
                $("#login-box").show();
                $("#drive-box").hide();
            }
            return;
        },

        async handleAuthClick(event) {
            console.log('handleAuthClick');
            await gapi.auth2.getAuthInstance().signIn();
        },

        handleSignoutClick(event) {
            console.log('handleSignoutClick');
            if (confirm("Are you sure you want to logout?")) {
                gapi.auth2.getAuthInstance().signOut();
            }
        },
        upload(){
            // this.
        },
        showStatus(text) {
            this.statusMessage=true;
            this.statusMessageTxt=text;
        },
        hideStatus() {
            this.statusMessage=false;
            this.statusMessageTxt='';
        },
        showErrorMessage(errorMessage) {
            this.errorMessage=true;
            this.errorMessageTxt=errorMessage;
            setTimeout(function() {
                this.errorMessage=false;
                this.errorMessageTxt='';

            }, 3000);
        },
        showLoading(){
            this.setShowLoading=true;
        },
        hideLoading(){
            this.setShowLoading=false;
        },
        showProgressPercentage(percentageValue) {
            if (this.uploadPercentageTxt == 0) {
               this.uploadPercentage=true;
            }
            this.uploadPercentageTxt=percentageValue.toString() + "%";
        },
        showUserInfo() {
                let request = gapi.client.drive.about.get();

                request.execute(resp => {
                    if (!resp.error) {

                        this.driveInfo=true;
                        this.userName=resp.name;
                        this.spanTotalQuota=this.formatBytes(resp.quotaBytesTotal);
                        this.spanUsedQuota=this.formatBytes(resp.quotaBytesUsed);
                    } else {
                        this.showErrorMessage("Error: " + resp.error.message);
                    }
                });
            },
        buttonReload() {
            this.showLoading();
            this.showStatus("Loading Google Drive files...");
            this.getDriveFiles();
        },
        getDriveFiles() {
            // console.log(gapi.load("drive", "v2", this.getFiles()));
            this.showStatus("Loading Google Drive files...");
            var _this=this
            gapi.load('client', function () {
                        gapi.client.load('drive', 'v2', _this.getFiles());
            });
        },
        cloneObject(obj) {
            if (obj === null || typeof obj !== "object") {
                return obj;
            }
            var temp = obj.constructor();
            for (var key in obj) {
                temp[key] = cloneObject(obj[key]);
            }
            return temp;
        },
        ifShowSharedFiles(){
            return this.ShowSharedFiles;

        },
        ifShowTrashFiles(){
            return this.ShowTrashFiles;
        },
        isFileExtension(file){
            return
                file.fileExtension == "txt" ||
                        file.fileExtension == "xls" ||
                        file.fileExtension == "xlsx" ||
                        file.fileExtension == "pdf" ||
                        file.fileExtension == "ppt" ||
                        file.fileExtension == "pptx" ||
                        file.fileExtension == "csv" ||
                        file.fileExtension == "doc" ||
                        file.fileExtension == "docx"
        },
        formatBytes(bytes) {
            if (bytes < 1024) return bytes + " Bytes";
            else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
            else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
            else return (bytes / 1073741824).toFixed(3) + " GB";
        },
        getFiles() {
             var query = "";
                if (this.ifShowSharedFiles()) {
                    $(".button-opt").hide();
                    $(".trash-opt").hide();

                    if ($("#drive-breadcrumb a").html() == "Share") {
                        if ($("#span-navigation").html() == "") {
                            $("#drive-breadcrumb a").html("Share");
                        } else {
                            $(".button-opt").hide();
                            $(".trash-opt").hide();
                        }
                    } else {
                        $("#drive-breadcrumb a").html("Share");
                    }

                    this.DELETE_FROM_TRASH = false;
                    query =
                        this.FOLDER_ID == "root"
                            ? "trashed=false and sharedWithMe"
                            : "trashed=false and '" + this.FOLDER_ID + "' in parents";
                } else if (this.ifShowTrashFiles()) {
                    $(".button-opt").hide();
                    $(".share-opt").hide();
                   this.DELETE_FROM_TRASH = true;

                    if ($("#drive-breadcrumb a").html() == "Trash") {
                        if ($("#span-navigation").html() == "") {
                            $("#drive-breadcrumb a").html("Trash");
                        } else {
                            $(".button-opt").hide();
                            $(".share-opt").hide();
                        }
                    } else {
                        $("#drive-breadcrumb a").html("Trash");
                    }

                    query = "trashed=true";
                    //query = "starred=true";
                    //query = "trashed=true and mimeType='application/vnd.google-apps.folder'";
                } else {
                    if ($("#drive-breadcrumb a").html() == "Trash") {
                        if ($("#span-navigation").html() == "") {
                            $("#drive-breadcrumb a").html("Home");
                        }
                    } else if ($("#drive-breadcrumb a").html() == "Share") {
                        if ($("#span-navigation").html() == "") {
                            $("#drive-breadcrumb a").html("Home");
                        }
                    }

                    this.DELETE_FROM_TRASH = false;
                    query = "trashed=false and '" + this.FOLDER_ID + "' in parents";
                    $(".button-opt").show();
                    $(".share-opt").show();
                    $(".trash-opt").show();
                }

                    console.log('resp')
                    var _this= this
                    gapi.load('client', function () {
                        gapi.client.load('drive', 'v2',function(){

                            var request =gapi.client.drive.files.list({
                                    maxResults:  _this.NO_OF_FILES,
                                    q: query
                                });
                            request.execute(resp => {
                                console.log(resp)

                                if (!resp.error) {
                                    _this.showUserInfo();
                                    _this.DRIVE_FILES = resp.items;
                                    // this.buildFiles();
                                } else {

                                    _this.showErrorMessage("Error: " + resp.error.message);
                                }
                            });
                        })
                    })



            },





    },
    created(){
        // this.handleAuthClick()

    },
     computed:{
        message(){
            return this.statusMessageTxt
        },
        folderArray(){
            this.FOLDER_ARRAY.push(Promise)
        },
        driveFiles(){
            this.DRIVE_FILES.push(Promise)
        },

    },


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
    background: url("../../../assets/images/arrow_right.png") no-repeat 0 7px;
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
    // display: none;
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
    display: inline-block;
    float: right;
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
    display: inline-block;
    float: right;
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
  background: url(/../../../assets/images/loading.gif) no-repeat;
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
  background: url(/../../../assets/images/prev.png) left 48% no-repeat;
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
  background: url(/../../../assets/images/next.png) right 48% no-repeat;
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
  background: url(/../../../assets/images/close.png) top right no-repeat;
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
/* Preload images */


article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}
audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}
audio:not([controls]){display:none;height:0}[hidden],template{display:none}
a{background-color:transparent}a:active,a:hover{outline-width:0}
abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
b,strong{font-weight:bolder}dfn{font-style:italic}mark{background:#ff0;color:#000}
small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}
button,input,select,textarea,optgroup{font:inherit;margin:0}optgroup{font-weight:bold}
button,input{overflow:visible}button,select{text-transform:none}
button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}
button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}
button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}
fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}
legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}
[type=checkbox],[type=radio]{padding:0}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
[type=search]{-webkit-appearance:textfield;outline-offset:-2px}
[type=search]::-webkit-search-decoration{-webkit-appearance:none}
::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
/* End extract */
html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}
h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}
.w3-serif{font-family:serif}.w3-sans-serif{font-family:sans-serif}.w3-cursive{font-family:cursive}.w3-monospace{font-family:monospace}
h1,h2,h3,h4,h5,h6{font-family:"Segoe UI",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}
hr{border:0;border-top:1px solid #eee;margin:20px 0}
.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}
.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}
.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}
.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}
.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}
.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}
.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}
.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}
.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}
.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}
.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}
.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}
.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}
.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}
.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}
.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}
.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}
.w3-dropdown-hover:hover .w3-dropdown-content{display:block}
.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}
.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}
.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}
.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}
.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}
.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}
.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}
.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}
.w3-main,#main{transition:margin-left .4s}
.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}
.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}
.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}
.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}
.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}
.w3-bar .w3-button{white-space:normal}
.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}
.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}
.w3-responsive{display:block;overflow-x:auto}
.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,
.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:"";display:table;clear:both}
.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}
.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}
.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}
.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}
@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}
.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}
.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}
@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}
.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}
.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}
.w3-rest{overflow:hidden}.w3-stretch{margin-left:-16px;margin-right:-16px}
.w3-content,.w3-auto{margin-left:auto;margin-right:auto}.w3-content{max-width:980px}.w3-auto{max-width:1140px}
.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}
.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}
.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}
@media (max-width:1205px){.w3-auto{max-width:95%}}
@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}
.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}
.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}
.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}
@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}
@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}
@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}
@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}
.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}
.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}
.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}
.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}
.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}
.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}
.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}
.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}
.w3-display-position{position:absolute}
.w3-circle{border-radius:50%}
.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}
.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}
.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}
.w3-code,.w3-codespan{font-family:Consolas,"courier new";font-size:16px}
.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}
.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}
.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}
.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}
.w3-spin{animation:w3-spin 2s infinite linear}@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}
.w3-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}
.w3-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}
.w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.w3-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}
.w3-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}
.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}
.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}
.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}
.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{filter:grayscale(100%)}
.w3-greyscale,.w3-grayscale{filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{filter:grayscale(50%)}
.w3-sepia{filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{filter:sepia(100%)}.w3-sepia-min{filter:sepia(50%)}
.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}
.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}
.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}
.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}
.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}
.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}
.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}
.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}
.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}
.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}
.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}
.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}
.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}
.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}
.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}
.w3-padding-top-64{padding-top:64px!important}.w3-padding-top-48{padding-top:48px!important}
.w3-padding-top-32{padding-top:32px!important}.w3-padding-top-24{padding-top:24px!important}
.w3-left{float:left!important}.w3-right{float:right!important}
.w3-button:hover{color:#000!important;background-color:#ccc!important}
.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}
.w3-hover-none:hover{box-shadow:none!important}
/* Colors */
.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}
.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}
.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}
.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}
.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}
.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}
.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}
.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}
.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}
.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}
.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}
.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}
.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}
.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}
.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}
.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}
.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}
.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}
.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}
.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}
.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}
.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}
.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}
.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}
.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}
.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}
.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}
.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}
.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}
.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}
.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}
.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}
.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}
.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}
.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}
.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}
.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}
.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}
.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}
.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}
.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}
.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}
.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}
.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}
.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}
.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}
.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}
.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}
.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}
.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}
.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}
.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}
.w3-text-black,.w3-hover-text-black:hover{color:#000!important}
.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}
.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}
.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}
.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}
.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}
.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}
.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}
.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}
.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}
.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}
.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}
.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}
.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}
.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}
.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}
.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}
.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}
.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}
.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}
.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}
.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}
.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}
.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}
.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}
.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}
.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}
.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}
.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}
.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}
.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}
.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}

</style>


