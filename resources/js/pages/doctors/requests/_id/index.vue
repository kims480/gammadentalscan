<template>
  <div>
    <!-- <ul class="progress-tracker">
  <li class="progress-step is-complete">
    <div class="progress-marker"></div>
  </li>
  <li class="progress-step is-complete">
    <div class="progress-marker"></div>
  </li>
  <li class="progress-step is-active">
    <div class="progress-marker"></div>
  </li>
  <li class="progress-step">
    <div class="progress-marker"></div>
  </li>
  <li class="progress-step">
    <div class="progress-marker"></div>
  </li>
</ul> -->
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
      <div class="col-lg-4 col-md-4 col-sm-6 col-12 d-flex pa-1">
        <v-card
          class="flex-grow-1 col-4 blue-grey darken-1 pa-2 mr-1 text-white text-subtitle-2 text-center justify-center align-center"
          outlined
          tile
        >
          Case ID
        </v-card>

        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 blue--text text-no-wrap rounded-r-xl pa-2"
          outlined
          >{{ scanRequestData.rqNum }} - {{ scanRequestData.id }}
        </v-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-12 d-flex pa-1">
        <v-card
          class="flex-grow-1 col-4 blue-grey darken-1 pa-2 mr-1 text-white text-subtitle-2 text-center justify-center align-center"
          outlined
          tile
        >
          Patient
        </v-card>
        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 text-no-wrap rounded-r-xl pa-2"
          outlined
          style="font-family: 'Kufi', 'Helvetica Neue', Helvetica, Arial"
        >
          <router-link
            style="
              font-family: 'Kufi', 'Helvetica Neue', Helvetica, Arial,
                sans-serif;
            "
            :to="{
              name: 'edit-patient',
              params: scanRequestData.patient,
            }"
            >{{ scanRequestData.patient["name"] }}</router-link
          >
        </v-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-12 d-flex pa-1">
        <v-card
          class="flex-grow-1 col-4 blue-grey darken-1 pa-2 mr-1 text-white text-subtitle-2 text-center justify-center align-center"
          outlined
          tile
        >
          Status
        </v-card>

        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 blue--text text-no-wrap rounded-r-xl pa-2"
          outlined
          >{{ scanRequestData.status ? scanRequestData.status.text : "" }}
        </v-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-12 d-flex pa-1">
        <v-card
          class="flex-grow-1 col-4 blue-grey darken-1 pa-2 mr-1 text-white text-subtitle-2 text-center justify-center align-center"
          outlined
          tile
        >
          Created
        </v-card>

        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 blue--text text-no-wrap rounded-r-xl pa-2"
          outlined
          >{{ scanRequestData.created_at }}
        </v-card>
      </div>
    </v-row>
    <v-divider></v-divider>

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
            <tr v-if="!loadfiles && storedFiles.length == 0">
              <td colspan="4">
                <span class="d-flex justify-center align-center">
                  <span
                    ><v-progress-circular
                      indeterminate
                      color="green"
                    ></v-progress-circular
                  ></span>
                  Looding Files ...
                </span>
              </td>
            </tr>
            <tr v-if="loadfiles && storedFiles.length == 0">
              <td colspan="4">
                <span class="d-flex justify-center align-center">
                  No Files Uploaded for this case
                </span>
              </td>
            </tr>
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
import formatDateTimeMixin from "@/mixins/formatDateTimeMixin.js";
import tableResizeMixin from "@/mixins/tableResizeMixin.js";
import ProgressTrackerMixin from "@/mixins/ProgressTrackerMixin.js";

export default {
  props: {
    scanRequest: {
      type: Object,
      default: null,
    },
    id: {
      type: [Number, String],
      required: false,
    },
    rqNum: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      scanRequestData: {
        doctor: {
          id: null,
          name: null,
        },
        id: 14,
        patient: {
          id: null,
          name: null,
        },
        rqNum: null,
        status: null,
        created_at: null,
        updated_at: null,
      },
      alignments: ["start", "center", "end"],
      dispatched: true,
      accepted: false,
      done: false,
      rejected: false,
      delivered: false,
      storedFiles: [],
      loadfiles: false,
    };
  },
  mixins: [formatDateTimeMixin, tableResizeMixin, ProgressTrackerMixin],
  head() {
    return {
      title: "Case Info | " + this.$route.params.rqNum,
    };
  },

  methods: {
    initialize() {
      if (this.scanRequest === null) {
        this.getRequestsListById(this.id ?? this.rqNum);
      } else {
        this.scanRequestData = this.scanRequest;
      }

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
        })
        .catch((err) => {});
    },

    async getSavedFiles() {
      this.loadfiles = false;
      this.storedFiles = [];
      var _this = this;
      await this.$store
        .dispatch("scanResult/getRequestFileById", _this.id ?? _this.rqNum)
        .then((res) => {
          _this.loadfiles = true;
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
  },
  created() {
    this.initialize();
  },
};
</script>

