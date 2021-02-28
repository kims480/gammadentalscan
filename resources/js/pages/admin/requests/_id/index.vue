<template>
  <div>
    <progress-tracker text alignment="center" v-if="scanRequestData.status">
      <step-item
        v-for="n in trackerSteps"
        :key="n.id"
        :is-complete="n.id <= scanRequestData.status.id"
        :is-active="n.id === scanRequestData.status.id + 1"
        :is-rejected="scanRequestData.status.id === 9"
        :title="!$vuetify.breakpoint.mobile ? n.title : ''"
        :marker="n.labelmob"
        :textmob="$vuetify.breakpoint.mobile ? n.title : ''"
        :text="n.text"
        v-if="n.id !== 9"
      ></step-item>
    </progress-tracker>
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
    <v-divider></v-divider>
    <v-row class="mb-3 elevation-0 border-0" style="height: auto">
      <div class="col-12">
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
      </div>
    </v-row>
    <v-row class="grey lighten-5 mb-3" no-gutters style="height: auto">
      <v-col cols="12">
        <v-card outlined tile class="text-left">
          <v-card-text>
            <!-- <h4 class="card-title mb-3">Basic Tab With Icon</h4> -->
            <ul class="nav nav-tabs" id="myIconTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="contact-icon-tab"
                  data-toggle="tab"
                  href="#contactIcon"
                  role="tab"
                  aria-controls="contactIcon"
                  aria-selected="false"
                  ><i class="nav-icon i-Google-Drive mr-1"></i> G-Drive</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="home-icon-tab"
                  data-toggle="tab"
                  href="#homeIcon"
                  role="tab"
                  aria-controls="homeIcon"
                  aria-selected="true"
                  @click="addFolder = true"
                  ><i class="nav-icon i-Folder-Open mr-1"></i>Folder</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-icon-tab"
                  data-toggle="tab"
                  href="#profileIcon"
                  role="tab"
                  @click="addFiles = true"
                  aria-controls="profileIcon"
                  aria-selected="false"
                  ><i class="nav-icon i-Files mr-1"></i> Files</a
                >
              </li>
            </ul>
            <div class="tab-content" id="myIconTabContent">
              <div
                class="tab-pane fade"
                id="homeIcon"
                role="tabpanel"
                aria-labelledby="home-icon-tab"
              >
                <div class="folder-container-form d-flex align-center">
                  <v-text-field
                    v-model="newFolderName"
                    color="green"
                    class="mr-1"
                    dense
                  >
                    <!-- <v-icon slot="prepend" color="green">mdi-minus</v-icon> -->
                  </v-text-field>

                  <v-btn
                    small
                    text
                    outlined
                    color="indigo"
                    class="ml-auto"
                    @click="searchItem"
                  >
                    Search
                    <v-icon right>mdi-magnify</v-icon>
                  </v-btn>
                  <v-btn
                    small
                    text
                    class="mr-1"
                    outlined
                    color="green"
                    @click="btnAddFolder"
                  >
                    <v-icon left>mdi-folder-plus</v-icon>Create Folder
                  </v-btn>
                </div>
                <template v-if="FOLDER_ARRAY.length > 0">
                  <v-row>
                    <v-col cols="6" class="folder-list d-flex flex-column">
                      <v-radio-group
                        v-model="FOLDER_ID"
                        @change="handleGetFiles(FOLDER_ID)"
                      >
                        <template v-slot:label>
                          <div><strong>Related Folders</strong></div>
                        </template>
                        <v-radio
                          v-for="(folder, index) in FOLDER_ARRAY"
                          :key="index"
                          :value="folder.id"
                        >
                          <template v-slot:label>
                            <div>
                              <v-icon color="amber">mdi-folder-open</v-icon>
                              <strong class="success--text">{{
                                folder.title
                              }}</strong>
                            </div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="6" class="folder-list d-flex flex-column">
                      <v-btn
                        small
                        text
                        class="mr-1"
                        outlined
                        color="green"
                        @click="handleGetFiles(FOLDER_ID)"
                      >
                        <v-icon left>mdi-file-search</v-icon>Check Files
                      </v-btn>
                      <v-btn
                        small
                        text
                        class="mr-1"
                        outlined
                        color="green"
                        @click="saveFiles"
                      >
                        <v-icon left>mdi-file-cloud</v-icon>Save Files
                      </v-btn>
                      <v-btn
                        small
                        text
                        class="mr-1"
                        outlined
                        color="green"
                        @click="getSavedFiles"
                      >
                        <v-icon left>mdi-file-cloud</v-icon>Get Files
                      </v-btn>
                      <v-combobox
                        v-model="fileCateg"
                        :items="fileCategItems"
                        label="File Category"
                        item-text="categ_name"
                        return-object
                        dense
                        outlined
                        small-chips
                      ></v-combobox>

                      <div
                        class="d-flex align-center justify-between"
                        v-for="(file, index) in RequestFiles"
                        :key="index"
                      >
                        <v-checkbox
                          v-model="selectedRequestFiles"
                          :value="{ id: file.id, name: file.title }"
                        >
                          <template v-slot:label>
                            <div>
                              <img
                                v-if="file.fileExtension"
                                alt="Avatar"
                                :src="
                                  './../../../images/' +
                                  file.fileExtension +
                                  '-icon.png'
                                "
                                height="28px"
                                width="28px"
                              />
                              <v-icon
                                v-else
                                color="green"
                                v-text="File"
                              ></v-icon>

                              {{ file.title }}
                            </div>
                          </template>
                        </v-checkbox>
                        <div class="d-inline-flex">
                          <a
                            :href="
                              'https://drive.google.com/uc?id=' +
                              file.id +
                              '&export=download'
                            "
                            target="blank"
                            >download</a
                          >

                          <a
                            :href="
                              'https://drive.google.com/file/d/' +
                              file.id +
                              '/preview?usp=drivesdk'
                            "
                            target="blank"
                            >View</a
                          >
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </template>
                <template v-else>
                  <div><strong>Related Folders</strong></div>
                  <div>no related folders available</div>
                </template>
              </div>
              <div
                class="tab-pane fade"
                id="profileIcon"
                role="tabpanel"
                aria-labelledby="profile-icon-tab"
              >
                <template v-if="addFiles">
                  <v-card>
                    <v-card-text>
                      <v-combobox
                        v-model="fileCateg"
                        :items="fileCategItems"
                        label="File Category"
                        item-text="categ_name"
                        return-object
                        dense
                        outlined
                        small-chips
                      ></v-combobox>
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
                    </v-card-text>
                    <v-card-actions class="d-flex align-center justify-end">
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
                    </v-card-actions>
                  </v-card>
                </template>
              </div>
              <div
                class="tab-pane fade show active"
                id="contactIcon"
                role="tabpanel"
                aria-labelledby="contact-icon-tab"
              >
                <v-btn
                  color="green lighten-5 "
                  v-show="notSignedIn"
                  light
                  @click="handleAuthClick()"
                >
                  <v-icon left>mdi-login-variant</v-icon> Sign In
                </v-btn>
                <v-card class="pa-2 text-green" outlined tile>
                  You Aleady Signed In
                </v-card>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <div class="col-md-12">
        <div class="card mb-4">
          <div class="card-body">
            <div class="card-title mb-3">Form Inputs Rounded</div>
            <form>
              <div class="row">
                <div class="col-md-6 form-group mb-3">
                  <label for="firstName2">First name</label>
                  <input
                    class="form-control form-control-rounded"
                    id="firstName2"
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="lastName2">Last name</label>
                  <input
                    class="form-control form-control-rounded"
                    id="lastName2"
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="exampleInputEmail2">Email address</label>
                  <input
                    class="form-control form-control-rounded"
                    id="exampleInputEmail2"
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="phone1">Phone</label>
                  <input
                    class="form-control form-control-rounded"
                    id="phone1"
                    placeholder="Enter phone"
                  />
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="credit2">Cradit card number</label>
                  <input
                    class="form-control form-control-rounded"
                    id="credit2"
                    placeholder="Card"
                  />
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="website2">Website</label>
                  <input
                    class="form-control form-control-rounded"
                    id="website2"
                    placeholder="Web address"
                  />
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="picker3">Birth date</label>
                  <input
                    class="form-control form-control-rounded"
                    id="picker3"
                    placeholder="yyyy-mm-dd"
                    name="dp"
                  />
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="picker1">Select</label>
                  <select class="form-control form-control-rounded">
                    <option>Option 1</option>
                    <option>Option 1</option>
                    <option>Option 1</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </v-row>
    <!-- <v-row align="start" class="grey lighten-5" no-gutters style="height: auto">
      <v-card
        class="flex-grow-1 col-12 pa-2 mr-1 justify-space-between align-center"
        outlined
        tile
      >
      </v-card>
    </v-row> -->
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
    <div class="row">
      <div class="col-sm-12">
        <table
          class="display table table-striped table-bordered dataTable dtr-inline"
          id="hidden_column_table"
          style="width: 100%"
          role="grid"
          aria-describedby="hidden_column_table_info"
        >
          <thead>
            <tr role="row">
              <th
                class="sorting_asc"
                tabindex="0"
                aria-controls="hidden_column_table"
                rowspan="1"
                colspan="1"
                style="width: 350px"
                aria-sort="ascending"
                aria-label="Name: activate to sort column descending"
              >
                File Name
              </th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="hidden_column_table"
                rowspan="1"
                colspan="1"
                style="width: 110px"
                aria-label="Position: activate to sort column ascending"
              >
                Category
              </th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="hidden_column_table"
                rowspan="1"
                colspan="1"
                style="width: 136px"
                aria-label="Start date: activate to sort column ascending"
              >
                File Type
              </th>
              <th
                tabindex="0"
                aria-controls="hidden_column_table"
                rowspan="1"
                colspan="1"
                style="width: 99px"
                aria-label="Actions: activate to sort column ascending"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(file, index) in storedFiles"
              :key="index"
              role="row"
              :class="index % 2 == 1 ? 'odd' : 'even'"
            >
              <td style="padding: 0.15rem" tabindex="0" class="">
                <div class="d-flex table-td-flex justify-start">
                  {{ file.file_name }}
                </div>
              </td>
              <td style="padding: 0.15rem">
                <div class="d-flex table-td-flex">
                  {{ file.file_categ }}
                </div>
              </td>

              <td style="padding: 0.15rem">
                <div class="d-flex table-td-flex">
                  {{ file.file_ext }}
                </div>
              </td>
              <td style="padding: 0.15rem">
                <div class="d-flex table-td-flex">
                  <a
                    :href="file.view_link"
                    target="blank"
                    class="btn btn-info btn-icon btn-sm m-1 white--text"
                    color="white"
                    type="button"
                    ><v-icon small class="white--text">mdi-eye</v-icon></a
                  >
                  <a
                    :href="file.download_link"
                    target="blank"
                    color="white"
                    class="btn btn-success btn-sm btn-icon m-1 white--text"
                    type="button"
                  >
                    <v-icon small class="white--text"
                      >mdi-cloud-download</v-icon
                    ></a
                  >
                  <v-btn @click="GivePermission_Gdrive(file.file_id)">
                    <v-icon>mdi-fingerprint</v-icon>
                  </v-btn>
                  <button
                    class="btn btn-danger btn-sm btn-icon m-1"
                    type="button"
                  >
                    <v-icon small class="white--text">mdi-delete</v-icon>
                    <!-- <span class="ul-btn__icon"
                      ><i class="i-RSS white--text"></i
                    ></span> -->
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import gapiMixins from "@/mixins/gapiMixins.js";
import formatDateTimeMixin from "@/mixins/formatDateTimeMixin.js";
import ProgressTrackerMixin from "@/mixins/ProgressTrackerMixin.js";
//import { mapGetters } from "vuex";
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
  mixins: [gapiMixins, formatDateTimeMixin, ProgressTrackerMixin],
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
      fileCateg: {
        categ_name: "General",
        id: 1,
      },
      fileCategItems: [],
      selectedRequestFiles: [],
      FOLDER_ID: process.env.MIX_GDRIVE_FOLDER_ID ?? "root",
      currentItem: "tab-Web",
      items: ["Web", "Shopping", "Videos", "Images"],
      more: ["News", "Maps", "Books", "Flights", "Apps"],
      storedFiles: [],

      text:
        "Lorem ipsum  incididunt exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  head() {
    return {
      title: "Scan Request Details - " + this.$route.params.id,
    };
  },
  mounted() {},
  computed: {
    // ...mapGetters(["user"]),
  },
  methods: {
    initialize() {
      //   this.scanRequest.length = 0;
      if (this.scanRequest === null) {
        this.getRequestsListById(this.id);
      } else {
        this.scanRequestData = this.scanRequest;
        this.newFolderName = this.scanRequest.rqNum;
      }
      this.getScanCateg();
      this.getSavedFiles();
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
    async getScanCateg() {
      var _this = this;
      await this.$store
        .dispatch("scanResult/getScanCategs")
        .then((res) => {
          console.log(res);
          res.scanCategs.forEach(function (categ) {
            //console.log(categ)
            _this.fileCategItems.push(categ);
          });
          console.log(_this.fileCategItems);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    startSearch() {
      this.searchItem().then((res) => {
        // console.log(res);
        if (this.FOLDER_ARRAY == 0) {
          this.showErrorMessage(
            "Folder not exist - need to be created first",
            3000
          );
        } else {
          this.showStatus("Folder available", 2000);
        }
      });
    },
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    },
    async search() {
      var pageToken = null;
      var _this = this;
      var access_token = gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().access_token;
      var query = {
        q:
          "name contains '" +
          this.newFolderName +
          "' and mimeType='application/vnd.google-apps.folder'",
        fields: "nextPageToken, files(id, name)",
        spaces: "drive",
        pageToken: pageToken,
      };
      var request = gapi.client.request({
        path: "/drive/v3/files?q=" + query.q,

        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
        body: {
          query,
        },

        //   body: {},
      });
      return new Promise((resolve, reject) => {
        request.execute((resp) => {
          if (!resp.error) {
            console.log(resp);
            _this.FOLDER_ARRAY.length = 0;
            resp.files.forEach(function (file) {
              file.title = file.name;
              _this.FOLDER_ARRAY.push(file);

              if (file.name == _this.newFolderName) {
                _this.FOLDER_ID = file.id;
              }
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
    async searchItem() {
      var pageToken = null;
      var access_token = gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().access_token;
      var query = {
        q:
          this.newFolderName == null
            ? this.scanRequestData.request_Num
            : this.newFolderName +
              "' and mimeType='application/vnd.google-apps.folder'",
        fields: "nextPageToken, files(id, name)",
        spaces: "drive",
        pageToken: pageToken,
      };
      var _this = this;
      var request = gapi.client.request({
        path:
          "/drive/v2/files?q=" + "trashed=false and title contains '" + query.q,

        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
        body: {
          query,
        },

        //   body: {},
      });
      return new Promise((resolve, reject) => {
        request.execute((resp) => {
          if (!resp.error) {
            console.log(resp);
            _this.FOLDER_ARRAY.length = 0;
            resp.items.forEach(function (file) {
              _this.FOLDER_ARRAY.push(file);
              if (file.title == _this.newFolderName) {
                _this.FOLDER_ID = file.id;
              }

              console.log("Found file: ", file.title, file.id);
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

    afterGetFiles() {},
    handleGetFiles(FOLDER_ID) {
      this.RequestFiles = [];
      this.selectedRequestFiles.length = 0;
      this.getFiles(FOLDER_ID);
    },
    async searchItemById(id) {
      var pageToken = null;
      var access_token = gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().access_token;
      var query = {
        q:
          "title contains '" +
          this.newFolderName +
          "' and mimeType='application/vnd.google-apps.folder'",
        fields: "nextPageToken, files(id, name)",
        spaces: "drive",
        pageToken: pageToken,
      };
      var _this = this;
      var request = gapi.client.request({
        path: "/drive/v3/files/" + id,

        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
        body: {
          query,
        },

        //   body: {},
      });
      return new Promise((resolve, reject) => {
        request.execute((resp) => {
          if (!resp.error) {
            console.log(resp);
            // _this.FOLDER_ARRAY.length = 0;
            // resp.items.forEach(function (file) {
            //   _this.FOLDER_ARRAY.push(file);
            //   if (file.title == _this.newFolderName) {
            //     _this.FOLDER_ID = file.id;
            //   }

            //   console.log("Found file: ", file.title, file.id);
            // });
            // console.log(_this.FOLDER_ARRAY);
            // pageToken = resp.nextPageToken;
            resolve(resp);
          } else {
            console.error(resp.error.message);
            reject(resp);
          }
        });
      });
    },
    async saveFiles() {
      await this.$store
        .dispatch("scanResult/saveRequestFile", {
          requestFiles: this.selectedRequestFiles,
          request_id: this.id,
          file_categ: this.fileCateg,
          folder_id: this.FOLDER_ID,
          //uploaded_by: this.user.name,
          comment: "test",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getSavedFiles() {
      this.storedFiles = [];
      var _this = this;
      await this.$store
        .dispatch("scanResult/getRequestFileById", _this.id)
        .then((res) => {
          if (res.files.length > 0) {
            res.files.forEach(function (file) {
              _this.storedFiles.push(file);
            });
          } else {
            console.log(res);
          }
        })

        .catch((err) => {
          console.log(err);
        });
    },
    GivePermission_Gdrive(fileId) {
      console.log(fileId);
      gapi.load("client", function () {
        gapi.client.load("drive", "v2", function () {
          var request = gapi.client.drive.permissions.insert({
            fileId: fileId,
            resource: {
              type: "anyone",
              role: "reader",
              withLink: true,
            },
          });
          request.execute(function (executed) {
            console.log(executed);
          });
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
