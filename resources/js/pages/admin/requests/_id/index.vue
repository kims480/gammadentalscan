<template>
  <div>
    <v-row align="start" class="mb-3" no-gutters style="height: auto">
      <div
        class="col-lg-4 col-md-4 col-sm-6 col-12 d-flex pa-1"
        v-for="(item, name, index) in scanRequestData"
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
          v-show="notSignedIn"
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
import gapiMixins from "@/mixins/gapiMixins.js";

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
  mixins: [gapiMixins],
  data() {
    return {
      scanRequestData: {},
      alignments: ["start", "center", "end"],
      dispatched: true,
      accepted: false,
      done: false,
      rejected: false,
      delivered: false,
      details: [],
      FOLDER_ID: "1Yzzo2skepl_U5Xirv9FwBEyEx_tzgWGE",
    };
  },
  head() {
    return {
      title: "Scan Request Details - " + this.$route.params.id,
    };
  },
  mounted() {},

  methods: {
    initialize() {
      //   this.scanRequest.length = 0;
      if (this.scanRequest === null) {
        this.getRequestsListById(this.id);
      } else {
        this.scanRequestData = this.scanRequest;
        this.newFolderName = this.scanRequest.rqNum;
      }
    },
    getRequestsListById(id) {
      this.$store
        .dispatch("scanRequest/getRequestsListById", id)
        .then((res) => {
          // console.log(res.requests);
          //  var _this=this

          this.scanRequestData = res.data[0];
          this.scanRequestData.created_at = this.GetFormattedDate(
            res.data[0].created_at
          );
          this.scanRequestData.updated_at = this.GetFormattedDate(
            res.data[0].updated_at
          );
          this.newFolderName = this.scanRequestData.request_Num;

          // console.log(this.desserts);
        })
        .catch((err) => {});
    },
    GetFormattedDate(date) {
      let current_datetime = new Date(date);
      let formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
      return formatted_date;
    },
    startSearch() {
      this.searchItem().then((res) => {
        // console.log(res);
        if (res.files.length == 0) {
          this.showErrorMessage(
            "Folder not exist - need to be created first",
            3000
          );
        } else {
          this.showStatus("Folder available", 2000);
        }
      });
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
            // console.log(resp);
            _this.FOLDER_ARRAY.length = 0;
            resp.files.forEach(function (file) {
              _this.FOLDER_ARRAY.push(file);
              console.log("Found file: ", file.name, file.id);
            });
            console.log(_this.FOLDER_ARRAY);
            pageToken = resp.nextPageToken;
            resolve(resp);
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
    if (!this.notSignedIn) {
      this.handleClientLoad();
    }
    // console.log(this.$route.params);
    // console.log("-" + this.id + "-");
    // console.log(this.scanRequest);
  },
};
</script>

<style lang="scss" scoped>
</style>
