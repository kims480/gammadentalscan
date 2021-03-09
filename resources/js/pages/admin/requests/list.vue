<template>
  <v-card class="elevation-2">
    <v-card-title>Request List</v-card-title>
    <v-card-text>
      <v-row class="d-flex">
        <v-col cols="12" sm="4" class="py-0" md="2">
          <v-text-field
            :value="itemsPerPage"
            label="Items per page"
            type="number"
            small
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0" md="12">
          <v-data-table
            dense
            id="request-list"
            :headers="headers"
            :items="desserts"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            >
            <template v-slot:item.rqNum="{ item }">
              <router-link
                :to="{
                  name: 'request-view',
                  params: { id: item.id, scanRequest: item },
                }"
                :class="
                  statusAColor(item.status ? item.status.text : '') +
                  `--text subtitle-2`
                "
                >{{ item.rqNum }}</router-link
              >
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                v-if="item.status !== null"
                class="ma-2"
                :color="statusColor(item.status ? item.status.text : '')"
                x-small
              >
                {{ item.status ? item.status.text : "" }}</v-chip
              >
            </template>
            <template v-slot:item.actions="{ item }">
              <div class="d-flex">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="getRequestById(item.id)"
                    >
                      <v-icon class="mr-2" color="info"> mdi-eye </v-icon>
                    </v-btn>
                  </template>
                  <span>View</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="
                        $router.push({
                          name: 'request-view',
                          params: { id: item.id, scanRequest: item },
                        })
                      "
                    >
                      <v-icon class="mr-2" color="teal darken-4"
                        >mdi-open-in-new
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Open</span>
                </v-tooltip>
                <v-menu bottom left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn dark icon v-bind="attrs" v-on="on">
                      <v-icon color="green">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item @click="acceptRequest(item.id)">
                      <v-list-item-title>Accept</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="doneRequest(item.id)">
                      <v-list-item-title>Done</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="deliverRequest(item.id)">
                      <v-list-item-title>Delivered</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="acceptRequest(item.id)"
                    >
                      <v-icon class="mr-2" color="indigo darken-3">
                        mdi-checkbox-marked-circle-outline
                      </v-icon></v-btn
                    >
                  </template>
                  <span>Accept</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="rejectRequest(item.id)"
                    >
                      <v-icon color="error">
                        mdi-close-circle-outline
                      </v-icon></v-btn
                    >
                  </template>
                  <span>Reject</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="delRequest(item.id)"
                    >
                      <v-icon color="error"> mdi-trash-can </v-icon></v-btn
                    >
                  </template>
                  <span>Delete</span>
                </v-tooltip>
              </div>
            </template>
            <template v-slot:no-data>
              <v-btn small color="primary" @click="initialize"> Refresh </v-btn>
            </template>
          </v-data-table>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-col>

        <v-col cols="12" sm="12" class="py-0" md="12">
          <v-dialog
            v-model="requestView"
            transition="dialog-bottom-transition"
            max-width="900"
          >
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="success" dense dark>
                  <v-row>
                    <div class="display-6">Request Details</div>
                    <v-btn text class="justify-end" @click="requestView = false"
                      >Close</v-btn
                    >
                  </v-row>
                </v-toolbar>
                <v-card-text>
                  <div class="text-center">
                    <!-- <v-row>
                      <template v-if="requestData != {}">
                        <v-list dense>
                          <v-list-item>
                            <v-list-item-content>
                              <v-col cols="12" sm="12" md="2"
                                >Photography:</v-col
                              >
                              <v-col cols="12" sm="12" md="8">
                                {{ requestData.Photography }}
                              </v-col>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-col cols="12" sm="12" md="2"
                                >ThreeDPrinting:</v-col
                              >
                              <v-col cols="12" sm="12" md="8">
                                {{ requestData.ThreeDPrinting }}
                              </v-col>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-col cols="12" sm="12" md="2"
                                >purposesFinal:</v-col
                              >
                              <v-col cols="12" sm="12" md="8">
                                {{ requestData.purposesFinal }}
                              </v-col>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-col cols="12" sm="12" md="2"
                                >requiredPhoto:</v-col
                              >
                              <v-col cols="12" sm="12" md="8">
                                {{ requestData.requiredPhoto }}
                              </v-col>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-col cols="12" sm="12" md="2"
                                >threeDImaging:</v-col
                              >
                              <v-col cols="12" sm="12" md="8">
                                {{ requestData.threeDImaging }}
                              </v-col>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-col cols="12" sm="12" md="2"
                                >twoDImaging:</v-col
                              >
                              <v-col cols="12" sm="12" md="8">
                                {{ requestData.twoDImaging }}
                              </v-col>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-col cols="12" sm="12" md="2"
                                >getOtherPurpose:</v-col
                              >
                              <v-col cols="12" sm="12" md="8">
                                {{ requestData.getOtherPurpose }}
                              </v-col>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </template>
                    </v-row> -->
                    <ViewRequest :requestData="requestData" />
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="requestView = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ViewRequest from "./view.vue";
import formatDateTimeMixin from "@/mixins/formatDateTimeMixin.js";
import tableResizeMixin from "@/mixins/tableResizeMixin.js";
export default {
  components: {
    ViewRequest,
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "Request#",
          align: "start",
          sortable: false,
          value: "rqNum",
        },
        { text: "Patient Name", value: "patient.name" },
        { text: "Doctor", value: "doctor.name" },
        { text: "Status", value: "status" },
        { text: "Created", value: "created_at" },
        { text: "Action", sortable: false, value: "actions" },
      ],
      requestData: {},
      requestView: false,
      desserts: [
        // {
        //   created_at: new Date("2021-01-11T11:08:44.000000Z","YYYY-MM-DD"),
        //   doctor: {
        //     id: 156,
        //     name: "Possimus in dolor h"
        //   },
        //   id: 3,
        //   patient: {
        //     id: 6,
        //     name: "Mr. Jo Larson : Mellie Bartell DVM",
        //   },
        //   status: null,
        //   updated_at: "2021-01-11T11:08:44.000000Z",
        // }
      ],
    };
  },
  mixins: [formatDateTimeMixin, tableResizeMixin],
  created() {
    this.initialize();
  },
  head() {
    return {
      title: "Requests List",
    };
  },
  methods: {
    initialize() {
      this.$store
        .dispatch("scanRequest/getRequestsList")
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
    getRequestById(id) {
      this.$store
        .dispatch("scanRequest/getRequestById", id)
        .then((res) => {
          // console.log(res.requests);
          //  var _this=this
          //   res.requests.forEach((request) => {
          //     request.created_at = this.GetFormattedDate(request.created_at);
          this.requestData = res.request[0];
          this.requestView = true;
          //   Object.entries(this.requestData).forEach(([key, value]) => {
          //     // console.log(typeof value);
          //     if (typeof value != "object") {
          //       console.dir(`${key} = ${value}`);
          //     } else {
          //       Object.entries(value).forEach(([SubKey, subValue]) => {
          //         console.dir(`${SubKey} = ${subValue}`);
          //       });
          //     }
          //   });
          //   });

          // console.log(this.desserts);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    acceptRequest(id) {
      console.log(id);
      this.$store
        .dispatch("scanRequest/acceptRequest", { id: id, action: "Accepted" })
        .then((res) => {
          //Find index of specific object using findIndex method.
          let objIndex = this.desserts.findIndex((obj) => obj.id == id);
          this.desserts[objIndex].status = res[0]["status"];
          this.$toasted
            .success(res.message, {
              position: "top-center",
              className: "mytoast",
              type: "success",
              iconPack: "material",
              icon: {
                name: "check",
                after: true,
              },
            })
            .goAway(3000);
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    doneRequest(id) {
      this.$store
        .dispatch("scanRequest/acceptRequest", { id: id, action: "Done" })
        .then((res) => {
          //Find index of specific object using findIndex method.
          let objIndex = this.desserts.findIndex((obj) => obj.id == id);
          this.desserts[objIndex].status = res[0]["status"];
          this.$toasted
            .success(res.message, {
              position: "top-center",
              className: "mytoast",
              type: "success",
              iconPack: "material",
              icon: {
                name: "check",
                after: true,
              },
            })
            .goAway(3000);
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    deliverRequest(id) {
      this.$store
        .dispatch("scanRequest/acceptRequest", { id: id, action: "Delivered" })
        .then((res) => {
          //Find index of specific object using findIndex method.
          let objIndex = this.desserts.findIndex((obj) => obj.id == id);
          this.desserts[objIndex].status = res[0]["status"];
          this.$toasted
            .success(res.message, {
              position: "top-center",
              className: "mytoast",
              type: "success",
              iconPack: "material",
              icon: {
                name: "check",
                after: true,
              },
            })
            .goAway(3000);
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    rejectRequest(id) {
      this.$store
        .dispatch("scanRequest/acceptRequest", { id: id, action: "Rejected" })
        .then((res) => {
          //Find index of specific object using findIndex method.
          let objIndex = this.desserts.findIndex((obj) => obj.id == id);
          this.desserts[objIndex].status = res[0]["status"];
          this.$toasted
            .success(res.message, {
              position: "top-center",
              className: "mytoast",
              type: "success",
              iconPack: "material",
              icon: {
                name: "check",
                after: true,
              },
            })
            .goAway(3000);
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    delRequest(id) {
      this.$store
        .dispatch("scanRequest/delRequest", { id: id, action: "Deleted" })
        .then((res) => {
          //Find index of specific object using findIndex method.
          let objIndex = this.desserts.findIndex((obj) => obj.id == id);
          //   this.desserts[objIndex].status = res[0]["status"];
          if (objIndex !== -1) this.desserts.splice(objIndex, 1);
          this.$toasted
            .success(res.message, {
              position: "top-center",
              className: "mytoast",
              type: "success",
              iconPack: "material",
              icon: {
                name: "check",
                after: true,
              },
            })
            .goAway(3000);
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {},
};
</script>

<style lang="scss" >
</style>
