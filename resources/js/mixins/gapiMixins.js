import * as lightbox from "@/services/lightbox.min.js";
import gapi from "@/services/gapi.js";
import { MediaUploader, RetryHandler } from "@/services/upload.js";
import { isNull } from "lodash";
Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
export default {
    components: {},
    data() {
        return {
            files: [],
            optBtn: true,
            SCOPES: [
                "https://www.googleapis.com/auth/drive",
                "profile",
                "https://www.googleapis.com/auth/drive.file"
            ],
            CLIENT_ID:
                "909780462877-7uqkksfdop3v16avj4ae077134aluoim.apps.googleusercontent.com",
            FOLDER_NAME: "",
            FOLDER_ID: "1Yzzo2skepl_U5Xirv9FwBEyEx_tzgWGE",
            DELETE_FROM_TRASH: false,
            optBtn: true,
            addFolder: false,
            addFiles: false,
            statusMessage: false,
            statusMessageTxt: "",
            errorMessage: false,
            errorMessageTxt: "",
            newFolderName: null,
            driveBox: false,
            FOLDER_NAME: "",
            FOLDER_PERMISSION: true,
            FOLDER_LEVEL: 0,
            NO_OF_FILES: 100,
            DRIVE_FILES: [],
            FILE_COUNTER: 0,
            FOLDER_ARRAY: [],
            RequestFiles: [],
            uploadPercentage: false,
            uploadPercentageTxt: "",
            showUploadProgress: false,
            percentageValue: 0,
            setShowLoading: false,
            showLoadingTxt: "Loading Google Drive files...",
            dataLevel: "",
            dataId: 0,
            access_token: "",
            notSignedIn: false
        };
    },
    methods: {
        async handleClientLoad() {
            //gapi is client library, it used for Load the API client and auth2 library
            this.errorMessageTxt = "";
            this.statusMessageTxt = "";

            console.log("handleClientLoad");
            await gapi.load("client:auth2", this.initClient);
        },
        onload: () => {},
        onreadystatechange: () => {
            return this.readyState === "complete" ?? this.onload;
        },
        //authorize apps
        async initClient() {
            console.log("initClient");

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
                    this.driveBox = window.gapi.auth2
                        .getAuthInstance()
                        .isSignedIn.get();
                    this.notSignedIn = !this.driveBox;
                    if (this.driveBox) {
                        this.startSearch();
                        // Listen for sign-in state changes.
                        gapi.auth2
                            .getAuthInstance()
                            .isSignedIn.listen(updateSigninStatus);
                        this.updateSigninStatus(this.isGoogleSigned());
                        this.access_token = gapi.auth2
                            .getAuthInstance()
                            .currentUser.get()
                            .getAuthResponse().access_token;
                    }

                    // this.getDriveFiles();
                    // Handle the initial sign-in state.
                })
                .catch(err => {
                    // this.driveBox=false;
                    console.log("err", err);
                });
        },
        isGoogleSigned() {
            console.log("isGoogleSignIN");
            let isSigned = gapi.auth2.getAuthInstance().isSignedIn.get();
            this.driveBox = isSigned;
            return isSigned;
        },
        updateSigninStatus(isSignedIn) {
            console.log("updateSigninStatus");
            if (isSignedIn) {
                // this.showLoading();
                //  this.showdriveBox();
                // this.getDriveFiles();
            } else {
                // this.hidedriveBox();
            }
            return;
        },

        async handleAuthClick(event) {
            console.log("handleAuthClick");
            await gapi.auth2.getAuthInstance().signIn();
            this.handleClientLoad();
        },

        handleSignoutClick(event) {
            console.log("handleSignoutClick");
            if (confirm("Are you sure you want to logout?")) {
                gapi.auth2.getAuthInstance().signOut();
                this.hidedriveBox();
                this.notSignedIn = true;
            }
        },
        showStatus(text, time = null) {
            this.statusMessage = true;
            this.statusMessageTxt = text;
            if (!isNull(time)) {
                setTimeout(() => {
                    this.statusMessage = false;
                    this.statusMessageTxt = "";
                }, time);
            }
        },
        hideStatus() {
            this.statusMessage = false;
            this.statusMessageTxt = "";
        },
        showErrorMessage(errorMessage, time = null) {
            this.errorMessage = true;
            this.errorMessageTxt = errorMessage;
            if (!isNull(time)) {
                setTimeout(() => {
                    this.errorMessage = false;
                    this.errorMessageTxt = "";
                }, time);
            }
        },
        showdriveBox() {
            this.driveBox = true;
        },
        hidedriveBox() {
            this.driveBox = false;
        },
        showLoading() {
            this.setShowLoading = true;
        },
        hideLoading() {
            this.setShowLoading = false;
        },
        btnAddFolder(event) {
            //$("#box-AddFolder").hide();
            this.showLoading();
            this.showStatus("Creating folder in progress...");
            var access_token = gapi.auth2
                .getAuthInstance()
                .currentUser.get()
                .getAuthResponse().access_token;
            var _this = this;
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
                    console.log(resp);
                    _this.onCompleteDone();
                    _this.hideLoading();
                    _this.newFolderName = null;
                } else {
                    _this.hideStatus();
                    _this.hideLoading();
                    _this.showErrorMessage("Error: " + resp.error.message);
                }
            });
        },
        OnErrorUpload() {
            return;
        },
        onCompleteDone() {
            return;
        },
        workerfUpload() {
            this.showLoading();
            this.showStatus("Uploading file in progress...");
            var _this = this;
            var metadata = {
                description: "File Upload",
                parents: [
                    {
                        kind: "drive#file",
                        id: _this.FOLDER_ID
                    }
                ]
            };
            var progress = 0;
            var fileNumber = 0;
            var fileName = "";
            var fileCount = 0;
            var fileSize = 0;
            this.showProgressPercentage(0);
            _this.showUploadProgress = true;
            try {
                var worker = new Worker("./../../drive/uploadworker.js");
                worker.onmessage = function(e) {
                    // console.log(e.data);
                    if (e.data.message == "Initiate") {
                        console.log({
                            fileName: e.data.fileName,
                            fileSize: e.data.fileSize,
                            totalFiles: e.data.totalFiles
                        });
                        progress = 0;
                        fileName = e.data.fileName;
                        fileSize = e.data.fileSize;
                        fileCount = e.data.totalFiles;
                        fileNumber = e.data.fileNumber;
                    }
                    /* On Error */
                    if (e.data.message == "onError") {
                        var errorResponse = JSON.parse(e.data.response);
                        _this.showErrorMessage(
                            "Error: " + errorResponse.error.message
                        );
                        _this.file = null;
                        _this.showUploadProgress = false;
                        _this.OnErrorUpload();
                    }
                    /* On Progress */
                    if (e.data.message == "onProgress") {
                        var progValue = Math.round(
                            ((progress * 1048576 +
                                e.data.eventLoaded / e.data.eventTotal) /
                                fileSize) *
                                100,
                            0
                        );
                        console.log("File upload progress: " + progValue);
                        _this.showProgressPercentage(progValue, fileName);
                        if (e.data.eventLoaded == e.data.eventTotal) progress++;
                    }
                    /* On Complete */
                    if (e.data.message == "onComplete") {
                        var errorResponse = JSON.parse(e.data.response);
                        if (errorResponse.message != null) {
                            console.error(
                                "inside Mediauploader OnComplete Error"
                            );
                            _this.showErrorMessage(
                                "Error: " + errorResponse.error.message
                            );
                            _this.files = null;
                            _this.onErrorUpload();
                        } else {
                            console.log("inside Mediauploader OnComplete Done");
                            console.log(errorResponse);
                            _this.onCompleteDone();
                            //  _this.showUploadProgress=false
                        }
                        _this.hideLoading();
                        // _this.addFiles=false;
                        _this.files.length = 0;
                        _this.showUploadProgress = false;
                    }
                };
                worker.onerror = werror;
                function werror(e) {
                    console.log(
                        "ERROR: Line ",
                        e.lineno,
                        " in ",
                        e.filename,
                        ": ",
                        e.message
                    );
                    var errorResponse = JSON.parse(response);
                    _this.showErrorMessage(
                        "Error: " + errorResponse.error.message
                    );
                    _this.file = null;
                    _this.showUploadProgress = false;
                    _this.OnErrorUpload();
                }
                worker.postMessage({
                    files: _this.files,
                    metadata: metadata,
                    token: gapi.auth2
                        .getAuthInstance()
                        .currentUser.get()
                        .getAuthResponse().access_token
                });
            } catch (exc) {
                console.log("inside Mediauploader OnComplete on Catch");
                _this.showErrorMessage("Error: " + exc);
                _this.files = [];
                _this.onErrorUpload();
                _this.hideLoading();
                _this.showUploadProgress = false;
                _this.hideStatus();
            }
        },
        showProgressPercentage(percentageValue, message = "") {
            /*  if (this.uploadPercentageTxt == 0) {
                     this.uploadPercentage=true;
                  } */

            this.uploadPercentageTxt =
                message + " : " + percentageValue.toString() + "%";
            this.percentageValue = percentageValue;
        },

        buttonDownload(event) {
            this.showLoading();
            this.showStatus("Downloading file in progress...");
            const FILE_COUNTER = event.target.dataset.fileCounter;
            var _this = this;
            setTimeout(function() {
                //If there is a text version, we get this version instead.
                if (_this.DRIVE_FILES[FILE_COUNTER].webContentLink == null) {
                    window.open(
                        _this.DRIVE_FILES[FILE_COUNTER]["exportLinks"][
                            "text/plain"
                        ]
                    );
                } else {
                    window.open(_this.DRIVE_FILES[FILE_COUNTER].webContentLink);
                }
                _this.hideLoading();
                _this.hideStatus();
            }, 1000);
        },

        buttonDelete(event) {
            var c = confirm("Are you sure to delete this?");
            var _this = this;
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
                            this.showErrorMessage(
                                "Error: " + resp.error.message
                            );
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
                            this.showErrorMessage(
                                "Error: " + resp.error.message
                            );
                        }
                        this.getDriveFiles();
                        this.hideLoading();
                    });
                }
            }
        },

        // fUpload() {
        //     this.showLoading();
        //     this.showStatus("Uploading file in progress...");
        //     var _this = this;
        //     // var file = this.files[0];
        //     // console.dir(file)
        //     if (this.files.length > 0) {
        //         this.files.forEach(file => {
        //             var metadata = {
        //                 title: file.name,
        //                 description: "File Upload",
        //                 mimeType: file.type || "application/octet-stream",
        //                 parents: [
        //                     {
        //                         kind: "drive#file",
        //                         id: _this.FOLDER_ID
        //                     }
        //                 ]
        //             };
        //             // console.dir(metadata)

        //             //if user upload an empty content, create a temp blob with a space content on it.
        //             if (file.size <= 0) {
        //                 var emptyContent = " ";
        //                 file = new Blob([emptyContent], {
        //                     type: file.type || "application/octet-stream"
        //                 });
        //             }

        //             this.showProgressPercentage(0);
        //             // console.log(MediaUploader);
        //             //   _this.showUploadProgress=false
        //             _this.showUploadProgress = true;

        //             try {
        //                 var uploader = new MediaUploader({
        //                     file: file,
        //                     token: gapi.auth2
        //                         .getAuthInstance()
        //                         .currentUser.get()
        //                         .getAuthResponse().access_token,
        //                     metadata: metadata,
        //                     onError: function(response) {
        //                         var errorResponse = JSON.parse(response);
        //                         _this.showErrorMessage(
        //                             "Error: " + errorResponse.error.message
        //                         );
        //                         _this.file = null;
        //                         _this.showUploadProgress = false;
        //                         _this.OnErrorUpload();
        //                     },
        //                     onComplete: function(response) {
        //                         console.log("inside Mediauploader OnComplete");
        //                         _this.hideStatus();

        //                         console.log(response);
        //                         var errorResponse = JSON.parse(response);
        //                         if (errorResponse.message != null) {
        //                             console.log(
        //                                 "inside Mediauploader OnComplete Error"
        //                             );
        //                             _this.showErrorMessage(
        //                                 "Error: " + errorResponse.error.message
        //                             );
        //                             _this.files = null;
        //                             _this.OnErrorUpload();
        //                         } else {
        //                             console.log(
        //                                 "inside Mediauploader OnComplete Done"
        //                             );
        //                             _this.showStatus(
        //                                 "Loading Google Drive files..."
        //                             );
        //                             _this.OnErrorUpload();
        //                             //  _this.showUploadProgress=false
        //                         }
        //                         _this.hideLoading();
        //                         // _this.addFiles=false;
        //                         _this.files.length = 0;
        //                         _this.showUploadProgress = false;
        //                     },
        //                     onProgress: function(event) {
        //                         // console.log('inside Mediauploader OnComplete on Progress')
        //                         _this.showProgressPercentage(
        //                             Math.round(
        //                                 (event.loaded / event.total) * 100,
        //                                 0
        //                             )
        //                         );
        //                     },
        //                     params: {
        //                         convert: false,
        //                         ocr: false
        //                     }
        //                 });
        //                 uploader.upload();
        //             } catch (exc) {
        //                 console.log("inside Mediauploader OnComplete on Catch");
        //                 _this.showErrorMessage("Error: " + exc);
        //                 _this.files = [];
        //                 _this.OnErrorUpload();
        //                 _this.hideLoading();
        //                 _this.showUploadProgress = false;
        //                 _this.hideStatus();
        //             }
        //         });
        //     }
        // },
        formatBytes(bytes) {
            if (bytes < 1024) return bytes + " Bytes";
            else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
            else if (bytes < 1073741824)
                return (bytes / 1048576).toFixed(3) + " MB";
            else return (bytes / 1073741824).toFixed(3) + " GB";
        },
        buttonReload() {
            this.showLoading();
            this.showStatus("Loading Google Drive files...");
            this.afterButtonReload();
        },
        afterButtonReload() {
            return;
        },
        afterGetFiles(resp = null) {
            return;
        },
        async getFiles(id = null) {
            var query = isNull(id)
                ? "trashed=false and '" + this.FOLDER_ID + "' in parents"
                : "trashed=false and '" +
                  id +
                  "' in parents and mimeType != 'application/vnd.google-apps.folder'";
            // console.log('resp')
            var _this = this;
            await gapi.load("client", function() {
                gapi.client.load("drive", "v2", function() {
                    var request = gapi.client.drive.files.list({
                        maxResults: _this.NO_OF_FILES,
                        q: query
                    });
                    request.execute(resp => {
                        // console.log(resp)
                        if (!resp.error) {
                            // console.log(resp);
                            _this.afterGetFiles(resp.items);
                            _this.RequestFiles.length = 0;
                            resp.items.forEach(function(file) {
                                _this.RequestFiles.push(file);
                            });
                            console.log(_this.RequestFiles);
                            // _this.showUserInfo();
                            // _this.DRIVE_FILES = resp.items;
                            // _this.buildFiles();
                            // _this.hideLoading();
                            // _this.hideStatus();
                        } else {
                            _this.showErrorMessage(
                                "Error: " + resp.error.message
                            );
                        }
                    });
                });
            });
        }
    },
    computed: {
        // ...mapGetters({ isAuth: "isAuth" })
    },
    mounted() {
        // let gDrive = document.createElement("script");
        //     gDrive.setAttribute("type", "text/javascript");
        //     // gDrive.async=true
        //     gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
        //     document.head.appendChild(gDrive);
        // console.log(gapi)
        //  let jquery = document.createElement('script')
        //     jquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
        //     document.head.appendChild(jquery)
    },
    created() {}
};
/*
async initClient() {
      console.log("initClient");

      await gapi.client
        .init({
          clientId: this.CLIENT_ID,
          scope: this.SCOPES.join(" "),
        })
        .then((o) => {
          console.log(
            "signed in",
            window.gapi.auth2.getAuthInstance().isSignedIn.get()
          );
          this.driveBox = window.gapi.auth2.getAuthInstance().isSignedIn.get();

          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          this.updateSigninStatus(this.isGoogleSigned());
          // this.getDriveFiles();
          // Handle the initial sign-in state.
        })
        .catch((err) => {
          // this.driveBox=false;
          console.log("err", err);
        });
    },
    isGoogleSigned() {
      console.log("isGoogleSignIN");
      let isSigned = gapi.auth2.getAuthInstance().isSignedIn.get();
      this.driveBox = isSigned;
      return isSigned;
    },

    updateSigninStatus(isSignedIn) {
      console.log("updateSigninStatus");
      if (isSignedIn) {

      } else {
        // this.hidedriveBox();
      }
      return;
    },

    async handleAuthClick(event) {
      console.log("handleAuthClick");
      await gapi.auth2.getAuthInstance().signIn();
      this.handleClientLoad();
    },

    handleSignoutClick(event) {
      console.log("handleSignoutClick");
      if (confirm("Are you sure you want to logout?")) {
        gapi.auth2.getAuthInstance().signOut();
        this.hidedriveBox();
      }
    },
    showStatus(text) {
      this.statusMessage = true;
      this.statusMessageTxt = text;
    },
    hideStatus() {
      this.statusMessage = false;
      this.statusMessageTxt = "";
    },
    showErrorMessage(errorMessage) {
      this.errorMessage = true;
      this.errorMessageTxt = errorMessage;
      setTimeout(function () {
        this.errorMessage = false;
        this.errorMessageTxt = "";
      }, 3000);
    },
    showLoading() {
      this.setShowLoading = true;
    },
    hideLoading() {
      this.setShowLoading = false;
    },
    showProgressPercentage(percentageValue, message = "") {
      /*  if (this.uploadPercentageTxt == 0) {
               this.uploadPercentage=true;
            }

            this.uploadPercentageTxt =
            message + " : " + percentageValue.toString() + "%";
          this.percentageValue = percentageValue;
        },
        statusMessage: false,
      statusMessageTxt: "",
      uploadPercentage: false,
      uploadPercentageTxt: "",
      showUploadProgress: false,
      percentageValue: 0,
      errorMessage: false,
      errorMessageTxt: "",
      setShowLoading: false,
      showLoadingTxt: "Loading Google Drive files...",
      dataLevel: "",
      dataId: 0,

*/
