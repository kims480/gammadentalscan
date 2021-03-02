<template>
  <div class="main-content">
    <v-card>
      <v-card-title>
        Patients List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        dense
        v-model="selected"
        item-key="id"
        show-select
        :single-select="singleSelect"
        :headers="headers"
        :items="desserts"
        class="elevation-1"
        :search="search"
        :loading="loading"
        loading-text="Loading Patients list... Please wait"
      >
        <template v-slot:item.name_ar="{ item }">
          <!--<nuxt-link
            :to="{
              path: '/admin/users/' + item.name + '?',
              params: { id: item.id, name: item.name }
            }"
            >{{ item.name }}</nuxt-link
          >-->
          <router-link
            :to="{
              path: '/admin/patients/' + item.name_en,
              params: { id: item.id, name: item.name_en, patient: item },
            }"
            >{{ item.name_ar }}</router-link
          >
          <!-- ,
          query: { patient: item },
                query:{doctor: item }-->
        </template>
        <template v-slot:item.active="{ item }">
          <v-chip small :color="getActive(item.active)">{{
            item.active == 1 ? "Active" : "inactive"
          }}</v-chip>
        </template>

        <template class="name-ar" v-slot:item.arabic="{ item }">
          {{ item.name_ar }}
        </template>

        <template v-slot:item.action="{ item }">
          <div class="d-flex flex-row justify-space-between align-center">
            <!-- <v-btn><Edit class="" :user="item" /></v-btn> -->
            <v-btn icon color="success" dark rounded @click="editUser(item)">
              <v-icon>mdi-account-edit</v-icon>
            </v-btn>
            <v-btn icon rounded color="error" @click="delUser(item)">
              <v-icon>mdi-account-remove</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card class="dialog-edit" v-if="user">
          <v-card-title>
            <span class="headline">Patient Profile || {{ user.id }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Patient First name*"
                    required
                    :value="user.name_ar"
                    :disabled="!editActive"
                    v-model="user.name_ar"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Patient Last name*"
                    :value="user.name_en"
                    :disabled="!editActive"
                    v-model="user.name_en"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    :value="user.email"
                    :disabled="!editActive"
                    v-model="user.email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="4" md="4" sm="6">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="user.dob"
                    :disabled="!editActive"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="user.dob"
                        :disabled="!editActive"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="user.dob" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(user.dob)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                  <p></p>
                </v-col>
                <v-col cols="12" lg="4" md="4" sm="6">
                  <v-text-field
                    v-model="user.telephone"
                    label="Phone"
                    :disabled="!editActive"
                    placeholder="Phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6" md="4">
                  <v-checkbox
                    color="green"
                    v-model="editActive"
                    label="Allow Modify"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn
              color="green darken-1"
              depressed
              :disabled="!editActive"
              @click="dialog = false"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import breadcumb from "@/components/breadcumb";
import formatDateTimeMixin from "@/mixins/formatDateTimeMixin.js";
import Edit from "./edit";
export default {
  components: {
    breadcumb,
    Edit,
  },
  layout: "doctor",
  mixins: [formatDateTimeMixin],
  data: () => ({
    dialog: false,
    singleSelect: true,
    selected: [],
    search: "",
    loading: true,
    user: null,
    // date: new Date().toISOString().substr(0, 10),
    // dateFormatted: "",
    menu: false,
    editActive: false,
    headers: [
      {
        text: "First Name",
        value: "name_ar",
        sortable: true,

        color: "primary",
      },
      {
        text: "Last Name",
        align: "start",
        width: "20%",
        sortable: true,
        //  filterable: false, if we want to disable search
        value: "name_en",
      },

      { text: "Telephone", value: "telephone", width: "10%" },
      {
        text: "Gender",
        value: "gender",
        width: "7%",
      },
      { text: "Created At", value: "created_at", width: "15%" },
      {
        text: "Action",
        value: "action",
        width: "7%",
        sortable: false,
        filterable: false,
      }, // if we want to disable search},
    ],
    desserts: [],
  }),

  head() {
    return {
      title: "Patients List",
    };
  },
  methods: {
    getActive(isActive) {
      if (isActive == 1) return "green";
      //"green !important";
      //"background: #4caf50;";
      else return "red";
    },
    fetchUsers(item) {
      this.desserts.push(item);
    },
    editUser(user) {
      this.dialog = !this.dialog;
      this.user = user;
      this.$swal.fire("edit : " + user.id + " // " + user.name);
      console.dir(this.selected);
    },
    delUser(user) {
      alert(user.id + " // " + user.name);
    },
    goUser(user) {
      //this.$router.push("/admin/users/" + user.id);
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  created() {
    // this.$toast.show("Loading table in...");
    this.$store.dispatch("patient/getPatientListOfDoctor").then((res) => {
      res.list.forEach((item) => {
        item.created_at = this.GetFormattedDate(item.created_at);
        this.fetchUsers(item);
      });
      console.log(this.desserts);
      this.loading = false;
      this.$toast
        .success("users table loaded", {
          position: "top-center",
          className: "mytoast",
          type: "success",
          icon: {
            name: "check",
            after: true,
          },
        })
        .goAway(3000);
    });
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.action {
  display: flex;
}
.btn-action {
  flex: 1;
}
.username {
  color: rgb(73, 32, 255);
}
.name_ar {
  color: rgb(73, 32, 255);
}
.username:hover {
  color: rgb(2, 185, 84);
  cursor: pointer;
}
</style>
