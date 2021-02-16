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
            <template v-slot:item.id="{ item }">
              <router-link
                :to="{
                  name: 'request-view',
                  params: { id: item.id, scanRequest: item },
                }"
                >{{ item.id }}</router-link
              >
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                v-if="item.status !== null"
                class="ma-2"
                :color="statusColor(item.status)"
                x-small
              >
                {{ item.status }}</v-chip
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
                      @click="acceptItem(item)"
                    >
                      <v-icon class="mr-2" color="success">
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
                      @click="rejectItem(item)"
                    >
                      <v-icon color="error">
                        mdi-close-circle-outline
                      </v-icon></v-btn
                    >
                  </template>
                  <span>Reject</span>
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
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
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

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    statusColor(status) {
      return status == "Dispatched"
        ? "primary"
        : status == "Accpted"
        ? "warning"
        : status == "Completed"
        ? "success"
        : "light";
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
  },
  mounted() {
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
      resizableGrid(tables[i]);
    }

    function resizableGrid(table) {
      var row = table.getElementsByTagName("tr")[0],
        cols = row ? row.children : undefined;
      if (!cols) return;

      table.style.overflow = "hidden";

      var tableHeight = table.offsetHeight;

      for (var i = 0; i < cols.length; i++) {
        var div = createDiv(tableHeight);
        cols[i].appendChild(div);
        cols[i].style.position = "relative";
        setListeners(div);
      }

      function setListeners(div) {
        var pageX, curCol, nxtCol, curColWidth, nxtColWidth;

        div.addEventListener("mousedown", function (e) {
          curCol = e.target.parentElement;
          nxtCol = curCol.nextElementSibling;
          pageX = e.pageX;

          var padding = paddingDiff(curCol);

          curColWidth = curCol.offsetWidth - padding;
          if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;
        });

        div.addEventListener("mouseover", function (e) {
          e.target.style.borderRight = "2px solid #0000ff";
        });

        div.addEventListener("mouseout", function (e) {
          e.target.style.borderRight = "";
        });

        document.addEventListener("mousemove", function (e) {
          if (curCol) {
            var diffX = e.pageX - pageX;

            if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + "px";

            curCol.style.width = curColWidth + diffX + "px";
          }
        });

        document.addEventListener("mouseup", function (e) {
          curCol = undefined;
          nxtCol = undefined;
          pageX = undefined;
          nxtColWidth = undefined;
          curColWidth = undefined;
        });
      }

      function createDiv(height) {
        var div = document.createElement("div");
        div.style.top = 0;
        div.style.right = 0;
        div.style.width = "5px";
        div.style.position = "absolute";
        div.style.cursor = "col-resize";
        div.style.userSelect = "none";
        div.style.height = height + "px";
        return div;
      }

      function paddingDiff(col) {
        if (getStyleVal(col, "box-sizing") == "border-box") {
          return 0;
        }

        var padLeft = getStyleVal(col, "padding-left");
        var padRight = getStyleVal(col, "padding-right");
        return parseInt(padLeft) + parseInt(padRight);
      }

      function getStyleVal(elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
      }
    }
  },
};
</script>

<style lang="scss" >
</style>
