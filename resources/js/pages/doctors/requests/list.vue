<template>
  <v-card class="elevation-2">
    <v-card-title class="green darken-3 white--text">
      <span class="headline">Cases List</span>
      <v-spacer></v-spacer>
      <v-btn
        color=" darken-3"
        class="no-print"
        @click="$router.push({ name: 'doctor-request-new' })"
        elevation="2"
        fab
        x-small
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-row class="justify-space-between">
        <v-col cols="12" sm="4" class="py-0" md="6">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
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
            :search="search"
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
                  name: 'doctor-request-view',
                  params: { id: item.id, rqNum: item.rqNum, scanRequest: item },
                }"
                :class="
                  statusAColor(item.status ? item.status.text : '') +
                  `--text subtitle-2`
                "
                >{{ item.rqNum }}</router-link
              >
            </template>
            <template v-slot:item.status="{ item }" class="text-center">
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
                          name: 'doctor-request-view',
                          params: {
                            id: item.id,
                            rqNum: item.rqNum,
                            scanRequest: item,
                          },
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
                <template v-if="item.status ? item.status.id < 4 : false">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="cancelRequest(item.id)"
                      >
                        <v-icon color="error">
                          mdi-close-circle-outline
                        </v-icon></v-btn
                      >
                    </template>
                    <span>Cancel</span>
                  </v-tooltip>
                </template>
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
      search: "",
      itemsPerPage: 10,
      headers: [
        {
          text: "Case ID",
          align: "start",
          sortable: true,
          value: "rqNum",
        },
        { text: "Patient Name", value: "patient.name" },

        { text: "Status", sortable: false, filterable: false, value: "status" },
        {
          text: "Created",
          filterable: false,
          sortable: true,
          value: "created_at",
        },
        {
          text: "Action",
          filterable: false,
          sortable: false,
          value: "actions",
        },
      ],
      requestData: {},
      requestView: false,
      desserts: [],
    };
  },
  created() {
    this.initialize();
  },
  mixins: [formatDateTimeMixin, tableResizeMixin],
  head() {
    return {
      title: "Cases List",
    };
  },
  methods: {
    initialize() {
      this.$store
        .dispatch("scanRequest/getRequestsList")
        .then((res) => {
          res.requests.forEach((request) => {
            request.created_at = this.GetFormattedDate(request.created_at);
            request.updated_at = this.GetFormattedDate(request.updated_at);
            this.desserts.push(request);
          });
        })
        .catch((err) => {});
    },
    getRequestById(id) {
      this.$store
        .dispatch("scanRequest/getRequestById", id)
        .then((res) => {
          this.requestData = res.request[0];
          this.requestView = true;
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
    cancelRequest(id) {
      this.$store
        .dispatch("scanRequest/acceptRequest", { id: id, action: "Canceled" })
        .then((res) => {
          //Find index of specific object using findIndex method.
          let objIndex = this.desserts.findIndex((obj) => obj.id == id);
          this.desserts[objIndex].status = res[0]["status"];
          console.log(res);
        })
        .catch((err) => console.log(err));
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>

<style lang="scss" >
</style>
