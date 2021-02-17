<template>
  <div>
    <v-row align="start" class="mb-3" no-gutters style="height: auto">
      <div
        class="col-lg-4 col-md-4 col-sm-6 col-12 d-flex pa-1"
        v-for="(item, name, index) in scanRequest"
        :key="index"
      >
        <v-card
          class="flex-grow-1 col-4 blue-grey darken-1 pa-2 mr-1 text-white text-subtitle-2 text-center justify-center align-center"
          outlined
          tile
        >
          {{
            name
              .trim()
              .toLowerCase()
              .replace("_", " ")
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              )
          }}
        </v-card>

        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 blue--text text-no-wrap rounded-r-xl pa-2"
          outlined
          v-if="typeof item !== 'object'"
          >{{ item }}
        </v-card>
        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 text-no-wrap rounded-r-xl pa-2"
          outlined
          v-else
          style="font-family: 'Kufi', 'Helvetica Neue', Helvetica, Arial"
        >
          <router-link
            style="
              font-family: 'Kufi', 'Helvetica Neue', Helvetica, Arial,
                sans-serif;
            "
            :to="{
              name: name == 'patient' ? 'edit-patient' : 'edit-user',
              params: item,
            }"
            >{{ item.name }}</router-link
          >
        </v-card>
      </div>
    </v-row>
    <v-row
      align="start"
      class="grey lighten-5 mb-3"
      no-gutters
      style="height: auto"
    >
      <v-card
        class="flex-grow-1 col-12 pa-2 mr-1 justify-space-between align-center"
        outlined
        tile
      >
        <v-btn
          color="green lighten-5 "
          v-show="!driveBox"
          light
          @click="handleAuthClick()"
        >
          <v-icon left>mdi-login-variant</v-icon> Sign In
        </v-btn>
        <template v-if="driveBox">
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
                <v-icon dark>mdi-folder-multiple-plus </v-icon>
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
        <v-divider class="mx-4"></v-divider>

        <v-text-field
          v-if="addFolder"
          append-outer-icon="mdi-folder-plus"
          append-icon="mdi-folder-search"
          @click:append-outer="btnAddFolder"
          @click:append="searchItem"
          v-model="newFolderName"
        >
          <!-- <v-icon slot="prepend" color="green">mdi-minus</v-icon> -->
        </v-text-field>
        <template v-if="addFiles">
          <div class="file-upload">
            <v-file-input
              v-model="files"
              color="light-green accent-4"
              counter
              clearable
              dense
              outlined
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
            <!-- upload -->
            <v-btn
              class="ma-2 white--text upload-btn"
              depressed
              :disabled="files.length == 0"
              color="blue-grey"
              @click="workerfUpload"
            >
              Upload
              <v-icon right>mdi-cloud-upload</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-if="FOLDER_ARRAY.length > 0">
          <div class="folder-list d-flex flex-column">
            <v-radio-group v-model="FOLDER_ID">
              <template v-slot:label>
                <div>Search <strong>Results</strong></div>
              </template>
              <v-radio
                v-for="(folder, index) in FOLDER_ARRAY"
                :key="index"
                :value="folder.id"
              >
                <template v-slot:label>
                  <div>
                    <v-icon color="yellow accent-4">mdi-folder-open</v-icon>
                    <strong class="success--text">{{ folder.name }}</strong>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </template>
      </v-card>
    </v-row>
    <v-row align="start" class="grey lighten-5" no-gutters style="height: auto">
      <v-card
        class="flex-grow-1 col-12 pa-2 mr-1 justify-space-between align-center"
        outlined
        tile
      >
        <template v-if="errorMessage">
          <v-alert
            v-model="errorMessage"
            transition="slide-y-reverse-transition"
            dismissible
            border="top"
            dense
            text
            type="error"
            class="notif-message"
            id="error-message"
            >{{ errorMessageTxt }}
          </v-alert>
        </template>
        <template v-if="statusMessage">
          <v-alert
            v-model="statusMessage"
            transition="slide-y-reverse-transition"
            dismissible
            dense
            type="info"
            class="notif-message"
            id="status-message"
            >{{ statusMessageTxt }}</v-alert
          >
        </template>
      </v-card>
    </v-row>
    <v-row align="start" class="grey lighten-5" no-gutters style="height: auto">
      <v-card
        class="flex-grow-1 col-12 pa-2 mr-1 justify-space-between align-center"
        outlined
        tile
      >
        <v-btn small v-if="!accepted">Accept</v-btn>
        <v-btn small>Add Result Files</v-btn>
        <v-btn @click="searchItem" small> search</v-btn>
      </v-card>
    </v-row>
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
      <span>{{ uploadPercentageTxt }}</span>
    </v-alert>
  </div>
</template>

<script>
Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
import gapi from "@/services/gapi.js";
import { MediaUploader, RetryHandler } from "@/services/upload.js";

export default {
  props: {
    scanRequest: {
      type: Object,
      default: null,
    },
    id: {
      type: [Number, String],
      required: true,
    },
  },

  data() {
    return {
      alignments: ["start", "center", "end"],
      dispatched: true,
      accepted: false,
      done: false,
      rejected: false,
      delivered: false,
      details: [],
      optBtn: true,
      addFolder: false,
      addFiles: false,
      statusMessage: false,
      statusMessageTxt: "",
      errorMessage: false,
      errorMessageTxt: "",
      newFolderName: null,
      files: [],
      driveBox: false,
      SCOPES: ["https://www.googleapis.com/auth/drive", "profile"],
      CLIENT_ID:
        "909780462877-7uqkksfdop3v16avj4ae077134aluoim.apps.googleusercontent.com",
      FOLDER_NAME: "",
      FOLDER_ID: "1Yzzo2skepl_U5Xirv9FwBEyEx_tzgWGE",
      FOLDER_PERMISSION: true,
      FOLDER_LEVEL: 0,
      NO_OF_FILES: 100,
      DRIVE_FILES: [],
      FILE_COUNTER: 0,
      FOLDER_ARRAY: [],
      uploadPercentage: false,
      uploadPercentageTxt: "",
      showUploadProgress: false,
      percentageValue: 0,
      setShowLoading: false,
      showLoadingTxt: "Loading Google Drive files...",
      dataLevel: "",
      dataId: 0,
      access_token: "",
    };
  },
  head() {
    return {
      title: "Scan Request Details - " + this.$route.params.id,
    };
  },
  mounted() {
    this.handleClientLoad();
  },

  methods: {
    initialize() {
      this.$store
        .dispatch("scanRequest/getRequestsListById", this.id)
        .then((res) => {
          // console.log(res.requests);
          //  var _this=this
          res.requests.forEach((request) => {
            request.created_at = this.GetFormattedDate(request.created_at);
            request.updated_at = this.GetFormattedDate(request.updated_at);
            this.desserts.push(request);
          });

          // console.log(this.desserts);
        })
        .catch((err) => {});
    },
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
          this.access_token = gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getAuthResponse().access_token;
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
        this.showLoading();
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
          Authorization: "Bearer " + access_token,
        },
        body: {
          title: _this.newFolderName,
          mimeType: "application/vnd.google-apps.folder",
          parents: [
            {
              kind: "drive#file",
              id: _this.FOLDER_ID,
            },
          ],
        },
      });

      request.execute((resp) => {
        if (!resp.error) {
          console.log(resp);
          //   _this.showStatus("Loading Google Drive files...");
          //   _this.getDriveFiles();
          _this.hideLoading();
          _this.newFolderName = null;
        } else {
          _this.hideStatus();
          _this.hideLoading();
          _this.showErrorMessage("Error: " + resp.error.message);
        }
      });
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
            id: _this.FOLDER_ID,
          },
        ],
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

        worker.onmessage = function (e) {
          // console.log(e.data);
          if (e.data.message == "Initiate") {
            console.log({
              fileName: e.data.fileName,
              fileSize: e.data.fileSize,
              totalFiles: e.data.totalFiles,
            });
            progress = 0;
            fileName = e.data.fileName;
            fileSize = e.data.fileSize;
            fileCount = e.data.totalFiles;
            fileNumber = e.data.fileNumber;
          }

          if (e.data.message == "onError") {
            var errorResponse = JSON.parse(e.data.response);
            _this.showErrorMessage("Error: " + errorResponse.error.message);
            _this.file = null;
            _this.showUploadProgress = false;
            // _this.getDriveFiles();
          }
          if (e.data.message == "onProgress") {
            _this.showProgressPercentage(
              Math.round(
                ((progress * 1048576 + e.data.eventLoaded / e.data.eventTotal) /
                  fileSize) *
                  100,
                0
              ),
              fileName
            );
            if (e.data.eventLoaded == e.data.eventTotal) progress++;
          }
          if (e.data.message == "onComplete") {
            var errorResponse = JSON.parse(e.data.response);
            if (errorResponse.message != null) {
              console.error("inside Mediauploader OnComplete Error");
              _this.showErrorMessage("Error: " + errorResponse.error.message);
              _this.files = null;
              //   _this.getDriveFiles();
            } else {
              console.log("inside Mediauploader OnComplete Done");
              console.log(errorResponse);
              //   _this.showStatus("Loading Google Drive files...");
              //   _this.getDriveFiles();
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
          _this.showErrorMessage("Error: " + errorResponse.error.message);
          _this.file = null;
          _this.showUploadProgress = false;
          _this.getDriveFiles();
        }
        worker.postMessage({
          files: _this.files,
          metadata: metadata,
          token: gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getAuthResponse().access_token,
        });
      } catch (exc) {
        console.log("inside Mediauploader OnComplete on Catch");
        _this.showErrorMessage("Error: " + exc);
        _this.files = [];
        // _this.getDriveFiles();
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
    async search() {
      var pageToken = null;
      return new Promise((resolve, reject) => {
        drive.files
          .list({
            q:
              "name = 'Gamma-Dental' and mimeType='application/vnd.google-apps.folder'",
            fields: "nextPageToken, files(id, name)",
            spaces: "drive",
            pageToken: pageToken,
          })
          .then((res) => {
            res.files.forEach(function (file) {
              console.log("Found file: ", file.name, file.id);
            });
            pageToken = res.nextPageToken;
            resolve(res.data);
          })
          .catch((err) => {
            if (err) {
              // Handle error
              console.error(err);
              reject(err);
            } else {
              return !!pageToken;
            }
          });
      });
    },
    async searchItem() {
      var pageToken = null;
      var access_token = gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().access_token;
      var _this = this;
      var request = gapi.client.request({
        path:
          "/drive/v3/files?q=name contains '" +
          this.newFolderName +
          "' and mimeType='application/vnd.google-apps.folder'",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
          q:
            "name='Gamma-Dental' and mimeType='application/vnd.google-apps.folder'",
          fields: "nextPageToken, files(id, name)",
          spaces: "drive",
          pageToken: pageToken,
          //   body: {},
        },
      });
      return new Promise((resolve, reject) => {
        request.execute((resp) => {
          if (!resp.error) {
            console.log(resp);
            _this.FOLDER_ARRAY.length = 0;
            resp.files.forEach(function (file) {
              _this.FOLDER_ARRAY.push(file);
              console.log("Found file: ", file.name, file.id);
            });
            console.log(_this.FOLDER_ARRAY);
            pageToken = resp.nextPageToken;
            resolve(resp.data);
          } else {
            console.error(resp.error.message);
            reject(resp);
          }
        });
      });
    },
  },
  created() {
    this.initialize();
    console.log(this.$route.params);
    console.log("-" + this.id + "-");
    console.log(this.scanRequest);
  },
};
</script>

<style lang="scss" scoped>
</style>
