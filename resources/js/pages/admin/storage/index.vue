<template>
    <v-container class="grey lighten-5">
        <template v-if="!driveBox">
            <v-card elevation="6" dark color="green" id="login-box">
                <v-card-title  class="d-flex justify-content-center" style="background: darkslategray;">
                    <v-avatar
                  size="36px"
                >
                  <img
                    alt="Gmail Login"
                    src="@/assets/images/Gmail-logo.png">
                </v-avatar> GMAIL Sign In
                </v-card-title>
                <v-card-text color="light-blue lighten-5">Use your Google Account</v-card-text>
                <v-card-actions class="d-flex justify-content-center">
                    <v-btn color="green lighten-5 " light   @click="handleAuthClick()">
                        <v-icon  left>mdi-login-variant</v-icon> Google Sign In
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>

        <template v-else>
             <v-alert
                v-model="showUploadProgress"
                transition="slide-y-reverse-transition"
                dismissible
                color="cyan"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-cloud-upload"
                 class="proress-upload"
                >
                    <v-progress-linear
                        color="light-green darken-4"
                        height="10"
                        :value="percentageValue"
                        striped

                        ></v-progress-linear>
                        <span>{{uploadPercentageTxt}}</span>
            </v-alert>
            <v-sheet transition="slide-y-transition" id="drive-box">
            <v-row>
                <v-col cols="12" md="4">
                    <v-card class="pa-2" outlined tile>
                        <div class="w3-display-container">
                                <img src="./../../../assets/images/google_drive_logo.png" style="width:80%; float:initial" alt="Avatar">
                            </div>

                        <v-divider class="mx-3"></v-divider>

                        <v-container>

                            <div class="w3-container">
                                <p>
                                <template v-if="errorMessage">
                                    <v-alert
                                        v-model="errorMessage"
                                        transition="slide-y-reverse-transition"
                                        dismissible
                                        border="top"
                                        dense
                                        outlined
                                        type="error"
                                        class="notif-message" id="error-message">{{errorMessageTxt}}
                                    </v-alert>
                                </template>
                                <template v-if="statusMessage">
                                    <v-alert
                                        v-model="statusMessage"
                                        transition="slide-y-reverse-transition"
                                        dismissible
                                        dense
                                        text
                                        type="info"
                                        class="notif-message"
                                         id="status-message"
                                        >{{statusMessageTxt}}</v-alert>
                                </template>
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
                                <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="ma-2"
                                        color="error"
                                        v-bind="attrs"
                                        v-on="on"
                                        dark
                                        @click="handleSignoutClick"
                                    >
                                        <v-icon dark left>mdi-exit-to-app </v-icon> Logout
                                    </v-btn>
                                </template>
                                <span>Log Out</span>
                            </v-tooltip>
                                <hr>
                            </div>
                            <v-progress-linear
                                :active="active"
                                :background-opacity="opacity"
                                :bottom="bottom"
                                :buffer-value="buffer"
                                :height="height"
                                :indeterminate="indeterminate"
                                :query="query"
                                :rounded="rounded"
                                :stream="stream"
                                :striped="striped"
                                :top="top"
                                :value="utilization"
                                background-color="success"
                                color="light-blue"
                            ></v-progress-linear>
                        </v-container>
                        <v-divider class="mx-3"></v-divider>
                        <div class="text-center">
                            <!-- refresh -->
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="ma-2"
                                        icon
                                        text
                                        color="green"
                                        v-bind="attrs"
                                        v-on="on"
                                        dark
                                        @click="buttonReload"
                                    >
                                        <v-icon dark right>mdi-refresh </v-icon>
                                    </v-btn>
                                </template>
                                <span>Refresh</span>
                            </v-tooltip>
                            <template v-if="optBtn">
                                <!-- upload -->
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            class="ma-2"
                                            text
                                            icon
                                            color="indigo"
                                            v-bind="attrs"
                                            v-on="on"
                                            dark
                                        >
                                            <v-icon dark>mdi-cloud-upload</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Upload</span>
                                </v-tooltip>
                                <!-- addFolder -->
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            class="ma-2"
                                            text
                                            icon
                                            color="green"
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="addFolder = !addFolder"
                                            dark
                                        >
                                            <v-icon dark
                                                >mdi-folder-multiple-plus
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Add Folder</span>
                                </v-tooltip>
                                <!-- addFiles -->
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            class="ma-2"
                                            text
                                            icon
                                            color="green"
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="addFiles = !addFiles"
                                            dark
                                        >
                                            <v-icon dark>mdi-file-plus </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Add Files</span>
                                </v-tooltip>
                            </template>
                            <!-- share -->
                            <v-tooltip v-if="shareBtn" top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="ma-2"
                                        text
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        color="blue lighten-2"
                                        @click="handleShareTrash('Shared')"
                                    >
                                        <v-icon>mdi-share-variant </v-icon>
                                    </v-btn>
                                </template>
                                <span>Share</span>
                            </v-tooltip>
                            <!-- Trash -->
                            <v-tooltip v-if="trashBtn" top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="ma-2"
                                        text
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        color="red lighten-2"
                                         @click="handleShareTrash('Trashed')"
                                    >
                                        <v-icon>mdi-trash-can</v-icon>
                                    </v-btn>
                                </template>
                                <span>Trash</span>
                            </v-tooltip>
                        </div>

                        <v-divider class="mx-4"></v-divider>

                        <v-text-field v-if="addFolder"
                            append-outer-icon="mdi-folder-plus"
                            @click:append-outer="btnAddFolder"
                            v-model="newFolderName"
                        >

                            <!-- <v-icon slot="prepend" color="green">mdi-minus</v-icon> -->
                        </v-text-field>

                        <v-file-input
                            v-model="files"
                            color="light-green accent-4"
                            counter
                            clearable
                            dense
                            append-outer-icon="mdi-file-plus"
                            @click:append-outer="fUpload"
                            v-if="addFiles"
                            label="Add Files"
                            multiple
                            placeholder="Select your files"
                            prepend-icon="mdi-paperclip"
                            :show-size="1000"
                        >
                            <template v-slot:selection="{ index, text }">
                                <v-chip
                                    v-if="index < 3"
                                    color="green accent-4"
                                    dark
                                    label
                                    small
                                >
                                    {{ text }}
                                </v-chip>

                                <span
                                    v-else-if="index === 3"
                                    class="overline grey--text text--darken-3 mx-2"
                                >
                                    +{{ files.length - 3 }} File(s)
                                </span>
                            </template>
                        </v-file-input>
                        <div id="box-info" v-show="boxInfo">
                            <v-card class="info-form">
                                <v-card-title class="subheading font-weight-bold">
                                    File Info
                                <div class="close-x" @click="hideFileInfo"><img id="imgCloseInfo" class="imgClose" src="./../../../assets/images/button_close.png" alt="close" /></div>
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-list dense>
                                    <v-list-item>
                                    <v-list-item-content class="file-info-title">Created Date:</v-list-item-content>
                                    <v-list-item-content class="align-end file-info-value">
                                        {{ fileCreatedDate }}
                                    </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                    <v-list-item-content class="file-info-title">Modified Date: </v-list-item-content>
                                    <v-list-item-content class="align-end file-info-value">
                                        {{ fileModifiedDate }}
                                    </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                    <v-list-item-content class="file-info-title">Owner:</v-list-item-content>
                                    <v-list-item-content class="align-end file-info-value">
                                        {{ fileOwner}}
                                    </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                    <v-list-item-content class="file-info-title">ID:</v-list-item-content>
                                    <v-list-item-content class="align-end file-info-value">
                                        {{ fileId }}
                                    </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                    <v-list-item-content class="file-info-title">Title:</v-list-item-content>
                                    <v-list-item-content class="align-end file-info-value">
                                        {{ fileTitle }}
                                    </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                    <v-list-item-content class="file-info-title">Size:</v-list-item-content>
                                    <v-list-item-content class="align-end file-info-value">
                                        {{ fileSize }}
                                    </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                    <v-list-item-content class="file-info-title">Extension:</v-list-item-content>
                                    <v-list-item-content class="align-end file-info-value">
                                        {{ fileExtension }}
                                    </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                            </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="8">
                    <v-card class="mx-auto" shaped>
                        <v-breadcrumbs :items="items" >
                            <template v-slot:item="{ item }">
                                <v-breadcrumbs-item

                                >
                                   <span class='folder-name'><a
                                    :spanCreatedDate="item.createdDate"
                                    :spanModifiedDate="item.modifiedDate"
                                    :spanOwner="item.Owner"
                                    :spanSize="item.Size"
                                    :spanExtension="item.Extension"
                                    :spanTitle="item.text"
                                    :data-id="item.folderId"
                                    :data-level="item.Level"
                                    :folderPermission="item.Permission"

                                    @click="bb">

                                   {{ item.text.toUpperCase() }}</a></span>
                                </v-breadcrumbs-item>
                            </template>
                            <template v-slot:divider>
                                <v-icon>mdi-forward</v-icon>
                            </template>
                        </v-breadcrumbs>
                    </v-card>

                    <v-card  class="w3-container w3-card w3-white my-4" id="drive-content" raised>

                            <template v-if="DRIVE_FILES.length > 0">
                                <div v-for="(file,index) in DRIVE_FILES" :key="index" :class='file.mimeType == "application/vnd.google-apps.folder"?"folder" + "-box" : "file" + "-box"'>
                                    <template v-if='file.fileType == "folder"'>
                                            <a class='folder-icon' :data-file-counter='index'
                                                :data-level='file.level' :data-parent='file.parentID'
                                                :data-size='file.fileSize' :data-id='file.id'  @click='browseFolder(file,index) '
                                                :title='file.fileType != "file" ? "Browse " + file.title  : file.title'
                                                :data-name='file.title' :data-has-permission='file.hasPermission'>
                                                    <div class='image-preview'><img src='./../../../assets/images/folder.png'/></div>
                                            </a>
                                    </template>
                                    <template v-else>
                                        <template v-if='file.fileType !== "folder"'>
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
                                            <v-icon class='button-download'
                                                    title='Download' :data-id='file.id' @click="buttonDownload" :data-file-counter='index'>mdi-download</v-icon>

                                        </template>
                                        <v-icon class='button-info' title='Info'
                                            :data-id='file.id' @click="showFileData" :data-file-counter='index' color='indigo'>mdi-information</v-icon>

                                        <template v-if='file.hasPermission'>
                                            <template v-if='file.labels.trashed'>
                                                <template v-if='file.hasPermission'>
                                                    <v-icon class='button-delete' @click="buttonDelete" title='Delete' color='danger' :data-id='file.id'>mdi-delete-circle</v-icon>
                                                </template>
                                                <template v-else-if='file.fileType !== "folder"'>
                                                    <v-icon class='button-delete' title='Delete' color='red' :data-id='file.id'>mdi-delete-circle</v-icon>
                                                </template>
                                                    <v-icon class='button-restore' @click="buttonRestore" title='Restore' color='green' :data-id='file.id'>mdi-delete-restore</v-icon>
                                            </template>
                                            <template v-else>
                                                <template v-if='file.hasPermission'>
                                                   <v-icon class='button-delete' @click="buttonDelete" title='Delete' color='red' :data-id='file.id'>mdi-delete-circle</v-icon>
                                                </template>
                                                <template v-else-if='file.fileType !== "folder"'>
                                                    <v-icon class='button-delete' @click="buttonDelete" title='Delete' :data-id='file.id'>mdi-delete-circle</v-icon>
                                                </template>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div >Empty Folder</div>
                            </template>

                    </v-card>
                </v-col>
            </v-row>
            </v-sheet>
        </template>
    </v-container>
</template>

<script>
import * as lightbox from '@/services/lightbox.min.js'
import gapi from'@/services/gapi.js'
import MediaUploader from '@/services/upload.js'
export default {
    name: "index",

    data() {
        return {
            files: [],
            addFolder: false,
            addFiles: false,
            absolute: false,
            active: true,
            opacity: 0.3,
            bottom: false,
            buffer: 100,
            fixed: false,
            height: 10,
            indeterminate: false,
            query: false,
            driveBox: false,
            loginBox: false,
            driveBoxLoading: false,
            rounded: true,
            stream: false,
            striped: true,
            top: false,
            value: 25,
            optBtn:true,
            shareBtn:true,
            trashBtn:true,
            items: [
                {
                    text: "Root",
                    disabled: false,
                },
            ],

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
            showUploadProgress:false,
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
            totalQuota:0,
            usedQuota:0,
            fileModifiedDate:'',
            fileCreatedDate:'',
            fileOwner:'',
            fileSize:'',
            fileTitle:'',
            fileSize:'',
            fileId:'',
            fileExtension:'',
            ShowSharedFiles:false,
            ShowTrashFiles:false,
            boxInfo:false,
            newFolderName:null,
            newFile:null,
            driveBreadcrumbLink:'Root',




        };
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

         async handleClientLoad() {
        //gapi is client library, it used for Load the API client and auth2 library
            this.errorMessageTxt='';
            this.statusMessageTxt='';

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
                    console.log(
                        "signed in",
                        window.gapi.auth2.getAuthInstance().isSignedIn.get()
                    );
                    this.driveBox=window.gapi.auth2.getAuthInstance().isSignedIn.get();




                    // Listen for sign-in state changes.
                    gapi.auth2
                        .getAuthInstance()
                        .isSignedIn.listen(updateSigninStatus);
                    this.updateSigninStatus(this.isGoogleSigned());
                        // this.getDriveFiles();
                    // Handle the initial sign-in state.
                })
                .catch(err => {
                    // this.driveBox=false;
                    console.log("err", err);
                });
        },
        isGoogleSigned() {
            console.log('isGoogleSignIN');
            let isSigned = gapi.auth2.getAuthInstance().isSignedIn.get();
            this.driveBox=isSigned;
            return isSigned;
        },
        showdriveBox(){
             this.driveBox=true
        },
        hidedriveBox(){
             this.driveBox=false
        },
        updateSigninStatus(isSignedIn) {
             console.log('updateSigninStatus');
             if (isSignedIn) {
                this.showLoading();
                //  this.showdriveBox();
                this.getDriveFiles();
            } else {
                // this.hidedriveBox();
            }
            return;
        },

        async handleAuthClick(event) {
            console.log('handleAuthClick');
            await gapi.auth2.getAuthInstance().signIn();
            this.handleClientLoad()
        },

        handleSignoutClick(event) {
            console.log('handleSignoutClick');
            if (confirm("Are you sure you want to logout?")) {
                gapi.auth2.getAuthInstance().signOut();
                this.hidedriveBox()
            }
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
           /*  if (this.uploadPercentageTxt == 0) {
               this.uploadPercentage=true;
            } */

            this.uploadPercentageTxt=percentageValue.toString() + "%";
            this.percentageValue=percentageValue;
        },
        showUserInfo() {
                let request = gapi.client.drive.about.get();

                request.execute(resp => {
                    if (!resp.error) {

                        this.driveInfo=true;
                        this.userName=resp.name;
                        this.spanTotalQuota=this.formatBytes(resp.quotaBytesTotal);
                        this.spanUsedQuota=this.formatBytes(resp.quotaBytesUsed);
                        this.totalQuota=resp.quotaBytesTotal;
                        this.usedQuota=resp.quotaBytesUsed;

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
                temp[key] = this.cloneObject(obj[key]);
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
        hasPermission(file){
            return file.userPermission.role == 'owner' || file.userPermission.role == 'writter'
        },
        formatBytes(bytes) {
            if (bytes < 1024) return bytes + " Bytes";
            else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
            else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
            else return (bytes / 1073741824).toFixed(3) + " GB";
        },
        showFileData(event){
            console.log(event.target.dataset.id);
            console.log(event.target.dataset.fileCounter);

            const fileIndex=event.target.dataset.fileCounter;
            // console.log(event.target.dataset["file-counter"])
            this.fileCreatedDate = new Date(this.DRIVE_FILES[fileIndex].createdDate);
            this.fileModifiedDate = new Date(this.DRIVE_FILES[fileIndex].modifiedDate);

            this.fileCreatedDate= this.fileCreatedDate.toString("dddd, d MMMM yyyy h:mm:ss tt");

            this.fileModifiedDate=this.fileModifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt");

            this.fileOwner=
                this.DRIVE_FILES[fileIndex].owners[0].displayName.length > 0
                    ? this.DRIVE_FILES[fileIndex].owners[0].displayName
                    : "";

            this.fileTitle=this.DRIVE_FILES[fileIndex].title;
            this.fileId=this.DRIVE_FILES[fileIndex].id;
            this.fileSize=
                this.DRIVE_FILES[fileIndex].fileSize == null
                    ? "N/A"
                    : this.formatBytes(this.DRIVE_FILES[fileIndex].fileSize);
            this.fileExtension=
                this.DRIVE_FILES[fileIndex].fileExtension == null
                    ? "N/A"
                    : this.DRIVE_FILES[fileIndex].fileExtension;
            this.boxInfo=true;

        },
        hideFileInfo(){
            this.boxInfo=false;
        },
        getFiles() {
             var query = "";
                if (this.ifShowSharedFiles()) {
                    this.optBtn=false;
                    this.trashBtn=false;
                    if (this.driveBreadcrumbLink == "Share") {
                        if (this.spanNavigation == "") {
                            this.driveBreadcrumbLink == "Share";
                        } else {
                            this.optBtn=false;
                            this.trashBtn=false;
                        }
                    } else {
                        this.driveBreadcrumbLink == "Share";
                    }

                    this.DELETE_FROM_TRASH = false;
                    query =
                        this.FOLDER_ID == "root"
                            ? "trashed=false and sharedWithMe"
                            : "trashed=false and '" + this.FOLDER_ID + "' in parents";
                } else if (this.ifShowTrashFiles()) {
                    this.optBtn=false;
                    this.shareBtn=false;
                   this.DELETE_FROM_TRASH = true;

                    if (this.driveBreadcrumbLink == "Trash") {
                        if (this.spanNavigation == "") {
                            this.driveBreadcrumbLink == "Trash";
                        } else {
                            this.optBtn=false;
                            this.shareBtn=false;
                        }
                    } else {
                        this.driveBreadcrumbLink == "Trash";
                    }

                    query = "trashed=true";
                    //query = "starred=true";
                    //query = "trashed=true and mimeType='application/vnd.google-apps.folder'";
                } else {
                    if (this.driveBreadcrumbLink == "Trash") {
                        if (this.spanNavigation == "") {
                            this.driveBreadcrumbLink == "Root";
                        }
                    } else if (this.driveBreadcrumbLink == "Share") {
                        if (this.spanNavigation == "") {
                            this.driveBreadcrumbLink == "Root";

                        }
                    }


                    this.DELETE_FROM_TRASH = false;
                    query = "trashed=false and '" + this.FOLDER_ID + "' in parents";
                    this.optBtn=true;
                    this.shareBtn=true;
                    this.trashBtn=true;
                }
                this.initBread();
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
                                _this.buildFiles();
                                _this.hideLoading();
                                _this.hideStatus();

                            } else {
                                _this.showErrorMessage("Error: " + resp.error.message);
                            }
                        });
                    })
                })

        },
        buildFiles() {

        if (this.DRIVE_FILES.length > 0) {
            for (var i = 0; i < this.DRIVE_FILES.length; i++) {
                this.DRIVE_FILES[i].textContentURL = "";
                this.DRIVE_FILES[i].level = (parseInt(this.FOLDER_LEVEL) + 1).toString();
                this.DRIVE_FILES[i].parentID =
                    this.DRIVE_FILES[i].parents.length > 0
                        ? this.DRIVE_FILES[i].parents[0].id
                        : "";
                this.DRIVE_FILES[i].thumbnailLink = this.DRIVE_FILES[i].thumbnailLink || "";
                this.DRIVE_FILES[i].fileType =
                    this.DRIVE_FILES[i].fileExtension == null ? "folder" : "file";
                this.DRIVE_FILES[i].permissionRole = this.DRIVE_FILES[i].userPermission.role;
                this.DRIVE_FILES[i].hasPermission =
                    this.DRIVE_FILES[i].permissionRole == "owner" ||
                    this.DRIVE_FILES[i].permissionRole == "writer";

                if (this.DRIVE_FILES[i]["exportLinks"] != null) {
                    this.DRIVE_FILES[i].fileType = "file";
                    this.DRIVE_FILES[i].textContentURL =
                        this.DRIVE_FILES[i]["exportLinks"]["text/plain"];
                }
             }
            }else{
                this.DRIVE_FILES=[]
            }
        },
        btnAddFolder(event) {
            //$("#box-AddFolder").hide();
            this.showLoading();
            this.showStatus("Creating folder in progress...");
            var access_token = gapi.auth2
                .getAuthInstance()
                .currentUser.get()
                .getAuthResponse().access_token;
            var _this=this;
            var request = gapi.client.request({
                path: "/drive/v2/files/",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + access_token
                },
                body: {
                    title: _this.newFolderName,
                    mimeType: "application/vnd.google-apps.folder",
                    parents: [
                        {
                            kind: "drive#file",
                            id: _this.FOLDER_ID
                        }
                    ]
                }
            });

            request.execute(resp => {
                if (!resp.error) {
                    console.log(resp)
                    _this.showStatus("Loading Google Drive files...");
                    _this.getDriveFiles();
                    _this.hideLoading();
                    _this.newFolderName=null;
                } else {
                    _this.hideStatus();
                    _this.hideLoading();
                    _this.showErrorMessage("Error: " + resp.error.message);
                }
            });

        },
        fUpload () {

                this.showLoading();
                this.showStatus("Uploading file in progress...");
                var _this =this
                var file = this.files[0];
                // console.dir(file)
                var metadata = {
                    title: file.name,
                    description: "File Upload",
                    mimeType: file.type || "application/octet-stream",
                    parents: [
                        {
                            kind: "drive#file",
                            id: _this.FOLDER_ID
                        }
                    ]
                };
                // console.dir(metadata)

                //if user upload an empty content, create a temp blob with a space content on it.
                if (file.size <= 0) {
                    var emptyContent = " ";
                    file = new Blob([emptyContent], {
                        type: file.type || "application/octet-stream"
                    });
                }

                this.showProgressPercentage(0);
                // console.log(MediaUploader);
                //   _this.showUploadProgress=false
                _this.showUploadProgress=true

                try {
                    var uploader = new MediaUploader({

                        file: file,
                        token: gapi.auth2
                            .getAuthInstance()
                            .currentUser.get()
                            .getAuthResponse().access_token,
                        metadata: metadata,
                        onError: function(response) {
                            var errorResponse = JSON.parse(response);
                            _this.showErrorMessage("Error: " + errorResponse.error.message);
                            _this.file=null;
                              _this.showUploadProgress=false
                            _this.getDriveFiles();
                        },
                        onComplete: function(response) {
                             console.log('inside Mediauploader OnComplete')
                            _this.hideStatus();

                            console.log(response)
                            var errorResponse = JSON.parse(response);
                            if (errorResponse.message != null) {
                                console.log('inside Mediauploader OnComplete Error')
                                _this.showErrorMessage(
                                    "Error: " + errorResponse.error.message
                                );
                                _this.files=null;
                                _this.getDriveFiles();
                            } else {
                                console.log('inside Mediauploader OnComplete Done')
                                _this.showStatus("Loading Google Drive files...");
                                _this.getDriveFiles();
                                //  _this.showUploadProgress=false
                            }
                                _this.hideLoading();
                                _this.showUploadProgress=false
                        },
                        onProgress: function(event) {
                            // console.log('inside Mediauploader OnComplete on Progress')
                            _this.showProgressPercentage(
                                Math.round((event.loaded / event.total) * 100, 0)
                            );

                        },
                        params: {
                            convert: false,
                            ocr: false
                        }
                    });
                    uploader.upload();

                } catch (exc) {
                    console.log('inside Mediauploader OnComplete on Catch')
                    _this.showErrorMessage("Error: " + exc);
                    _this.files=[];
                    _this.getDriveFiles();
                    _this.hideLoading();
                      _this.showUploadProgress=false
                    _this.hideStatus();
                }
        },
        buttonDownload(event){
            this.showLoading();
            this.showStatus("Downloading file in progress...");
            const FILE_COUNTER = event.target.dataset.fileCounter;
            var _this=this
            setTimeout(function() {
                //If there is a text version, we get this version instead.
                if (_this.DRIVE_FILES[FILE_COUNTER].webContentLink == null) {
                    window.open(
                        _this.DRIVE_FILES[FILE_COUNTER]["exportLinks"]["text/plain"]
                    );
                } else {
                    window.open(_this.DRIVE_FILES[FILE_COUNTER].webContentLink);
                }
                _this.hideLoading();
                _this.hideStatus();
            }, 1000);
        },
        buttonRestore(event){
            this.showLoading();
            this.showStatus("Restoring file in progress...");
            var request = gapi.client.drive.files.untrash({
                fileId: event.target.dataset.id
            });
            var _this=this
            request.execute(resp => {
                _this.hideStatus();
                if (resp.error) {
                    _this.showErrorMessage("Error: " + resp.error.message);
                }
                _this.getDriveFiles();
            });
        },
        buttonDelete(event){
            var c = confirm("Are you sure to delete this?");
            var _this=this;
            if (c) {

                this.showLoading();
                this.showStatus("Deleting file in progress...");

                if (this.DELETE_FROM_TRASH) {
                    this.showStatus("Deleting file for forever...");
                    var request = gapi.client.drive.files.delete({
                        fileId: event.target.dataset.id
                    });

                    request.execute(resp => {
                        this.hideStatus();
                        if (resp.error) {
                            this.showErrorMessage("Error: " + resp.error.message);
                        }
                        this.getDriveFiles();
                        this.hideLoading();
                    });
                } else {
                    this.showStatus("Moving file into the trash...");
                    var request = gapi.client.drive.files.trash({
                        fileId: event.target.dataset.id
                    });

                    request.execute(resp => {
                        this.hideStatus();
                        if (resp.error) {
                            this.showErrorMessage("Error: " + resp.error.message);
                        }
                        this.getDriveFiles();
                        this.hideLoading();
                    });
                }
            }
        },
        //browse folder
        browseFolder(folder,index) {
            // console.log(index)
            var flag= index !=null ? 0:1;
            // console.log(folder.id);
            // console.log(folder.title);
            // console.log( parseInt(folder.level));
            // console.log( index);
            // console.log(this.hasPermission(folder));
            //Clear all before Insert
            this.fileCreatedDate=""
            this.fileModifiedDate=""
            this.fileOwner=""
            this.fileTitle=""
            this.fileId=""
            this.fileSize=""
            this.fileExtension=""

            if(typeof folder !=="undefined"){
                this.FOLDER_ID =folder.id;
                this.FOLDER_NAME =folder.title;
                this.FOLDER_LEVEL = parseInt(folder.level);
                this.FOLDER_PERMISSION =folder.hasPermission;

            //-------------------------------------------------------------
                if (flag == 0) {
                    this.FILE_COUNTER = index;

                    if (this.DRIVE_FILES[this.FILE_COUNTER] != null) {
                        var createdDate = new Date(this.DRIVE_FILES[this.FILE_COUNTER].createdDate);
                        var modifiedDate = new Date(this.DRIVE_FILES[this.FILE_COUNTER].modifiedDate);
                        this.fileCreatedDate=
                            createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt")

                        this.fileModifiedDat
                            modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt")

                        this.fileOwner=
                            this.DRIVE_FILES[this.FILE_COUNTER].owners[0].displayName.length > 0
                                ? this.DRIVE_FILES[this.FILE_COUNTER].owners[0].displayName
                                : ""

                        this.fileTitle=this.DRIVE_FILES[this.FILE_COUNTER].title;
                        this.fileId=this.DRIVE_FILES[this.FILE_COUNTER].title;
                        this.fileSize=
                            this.DRIVE_FILES[this.FILE_COUNTER].fileSize == null
                                ? "N/A"
                                : this.formatBytes(this.DRIVE_FILES[this.FILE_COUNTER].fileSize)

                        this.fileExtension=this.DRIVE_FILES[this.FILE_COUNTER].fileExtension;
                    }
                } else {
                        var createdDate = new Date(folder.createdDate);
                        var modifiedDate = new Date(folder.modifiedDate);
                        this.fileCreatedDate=
                            createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt")

                        this.fileModifiedDate=
                            modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt")

                        this.fileOwner=  folder.owner
                        this.FOLDER_PERMISSION=  folder.folderPermission


                        this.fileTitle=folder.title;
                        this.fileId=folder.title;
                        this.fileSize=this.formatBytes(folder.fileSize)

                        this.fileExtension=folder.fileExtension;
                }
            }
            //-----------------------------------------------------------------------------------------------------------
            if (typeof this.FOLDER_NAME === "undefined" || typeof folder ==="undefined") {
                this.FOLDER_NAME = "";
                this.FOLDER_ID = "root";
                this.FOLDER_LEVEL = 0;
                this.FOLDER_PERMISSION = true;
                this.FOLDER_ARRAY = [];
                this.boxInfo=false;
            } else {
                if (this.FOLDER_LEVEL == this.FOLDER_ARRAY.length && this.FOLDER_LEVEL > 0) {
                    //do nothing
                } else if (this.FOLDER_LEVEL < this.FOLDER_ARRAY.length) {
                    var tmpArray = this.cloneObject(this.FOLDER_ARRAY);
                    this.FOLDER_ARRAY = [];

                    for (var i = 0; i < tmpArray.length; i++) {
                        this.FOLDER_ARRAY.push(tmpArray[i]);
                        if (tmpArray[i].Level >= this.FOLDER_LEVEL) {
                            break;
                        }
                    }
                } else {
                    //breadcrumb navigation data insert
                    var fd = {
                        Name: this.FOLDER_NAME,
                        folderId: this.FOLDER_ID,
                        Level: this.FOLDER_LEVEL,
                        Permission: this.FOLDER_PERMISSION,

                        text: this.fileTitle,
                        createdDate: this.fileCreatedDate,
                        modifiedDate: this.fileModifiedDate,
                        Owner: this.fileOwner,

                        Size: this.fileSize,
                        Extension: this.fileExtension
                    };
                    this.FOLDER_ARRAY.push(fd);
                }
            }

            this.initBread();
            for (var i = 0; i < this.FOLDER_ARRAY.length; i++) {
                this.items.push(this.FOLDER_ARRAY[i]);

            }

            this.showLoading();
            this.showStatus("Loading Google Drive files...");
            this.getDriveFiles();
        },
        bb(event){
            if(event.target.attributes.spanTitle.value=="Root"){
                this.browseFolder()
            }else{
            const folder ={
                id:event.target.dataset.id,
                title:event.target.attributes.spanTitle.value,
                level:event.target.dataset.level,
                hasPermission:event.target.attributes.folderPermission?event.target.attributes.folderPermission.value:false,
                spanCreatedDate:event.target.attributes.spancreateddate.value,
                spanModifiedDate:event.target.attributes.spanModifieddate.value,

            };
                this.browseFolder(folder)
            }
        },
        initBread(){
            this.items=[
                 {
                    Name: '',
                    folderId: '',
                    Level: '',
                    Permission: '',
                    text: this.driveBreadcrumbLink,
                    CreatedDate: '',
                    ModifiedDate: '',
                    Owner: '',
                    Size: '',
                    Extension: ''
                }
            ]
            return;
        },
        handleShareTrash(mode){
            this.driveBreadcrumbLink=mode;
            if(mode=='Shared'){
                this.ShowSharedFiles=!this.ShowSharedFiles;
                this.ShowTrashFiles=false;
            }
            else if(mode=='Trashed'){
                this.ShowTrashFiles=!this.ShowTrashFiles;
                this.ShowSharedFiles=false;
            }
            if(this.ShowTrashFiles ==false && this.ShowSharedFiles==false){

                this.driveBreadcrumbLink='Root';
            }
            this.getDriveFiles();
        }
    },
    created(){

    },
    computed:{
        message(){
            return this.statusMessageTxt
        },
        folderArray(){
            // this.FOLDER_ARRAY.push(Promise)
        },
        driveFiles(){
            // this.DRIVE_FILES.push(Promise)
        },
        utilization(){
            return (this.usedQuota/this.totalQuota)*100;
        },
        spanNavigation(){
            return 'home'
        }

    },
};
</script>

<style lang="scss" scoped>
.gdrive-logo {
    height: 50px;
    text-align: center;
}
.gdrive-breadcrumb {
    background: light-blue;
}
#login-box {
    // font-size: medium;
    text-align: center;
    // padding-top: 40px;
    // padding-bottom: 50px;
    /* background-color: darkolivegreen; */
    width: 400px;
    // height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 5px 10px #b4b4b4;
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
    /* padding: 10px;
    margin: 10px;
    width: 98%; */
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
    height: 100%;

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

        cursor: pointer;
    position: absolute;
    right: 10px;

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
    // color: red;
    // border: solid 1px #fbfbd4;
    // background: #fbfbd4;
    // border-radius: 5px;
    // padding: 5px;
    // /*position:absolute;*/
    // right: 10px;
    // bottom: 10px;
    // z-index: 9999999999;
    // font-size: 15px;
}

#error-message{
    // border:solid 1px #f2fcb9;
    // background:#d83813;
    // border-radius:5px;
    // color:#fff;
    // padding:10px;
    // /*position:absolute;*/
    // left:10px;
    // bottom:10px;
    // z-index:9999999999;
    // max-width:400px;
    // border-radius:5px;
    // display:none;
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
.proress-upload{
    position: fixed;
    bottom: 20px;
    right:0;
    left:0;
    width: 50%;
    display: flex;
    flex-direction: column;
    z-index: 100;
    justify-content: stretch;
    z-index: 100;
    justify-items: center;
    align-content: center;
    text-align: center;
    transform: translateX(50%);

}
.file-info-value{
    flex-grow: 2;
    color:#338daf;
}
.file-info-title{

    font-weight: bolder;
}
.notif-message{
    position: fixed;
    top: 60px;
    /* left: 0; */
    /* right: 0; */
    transform: translate(50%, 50%);
    width: 40vw;
    z-index: 100;
}
.folder-name,.folder-name a{
    color:rgb(11, 126, 126);
}
</style>
