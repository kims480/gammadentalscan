<template>
  <div class="main-content">
    <v-card>
      <v-card-title class="index">
        <div class="title">
          <div class="text-h4">Patients List</div>
          <v-spacer></v-spacer>
          <v-btn
            class="mx-2"
            fab
            dark
            x-small
            color="success"
            @click="$router.push({ name: 'add-patient' })"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </div>
        <div class="search">
          <div class="space"></div>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </div>
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
        loading-text="Loading Patients... Please wait"
      >
        <template v-slot:item.name="{ item }">
          <template v-if="!enableEditUser || currentUserId != item.id">
            <span
              class="username"
              @click="
                $router.push({
                  name: 'edit-patient',

                  params: {
                    id: item.id,
                    name: item.name_en.replace(/ /g, '-'),
                  },
                })
              "
            >
              {{ item.name_en }}
            </span>
          </template>
          <template v-if="enableEditUser && currentUserId == item.id">
            <v-text-field
              color="white"
              v-model="item.name_en"
              :rules="rules.name"
              :error-messages="errorMessages"
              hide-details
              dense
              backgroundColor="green lighten-5"
              height="20"
              placeholder="Patient Name 1st"
              required
            ></v-text-field>
          </template>
        </template>
        <template v-slot:item.lastName="{ item }">
          <template v-if="!enableEditUser || currentUserId != item.id">
            <span class="username">
              {{ item.name_ar }}
            </span>
          </template>
          <template v-if="enableEditUser && currentUserId == item.id">
            <v-text-field
              color="white"
              v-model="item.name_ar"
              :error-messages="errorMessages"
              hide-details
              dense
              backgroundColor="green lighten-5"
              height="20"
              placeholder="Patient Name last"
              required
            ></v-text-field>
          </template>
        </template>
        <template v-slot:item.gender="{ item }">
          <template v-if="!enableEditUser || currentUserId != item.id">
            <span>
              {{ item.gender }}
            </span>
          </template>
          <template v-if="enableEditUser && currentUserId == item.id">
            <v-combobox
              dense
              :items="genders"
              color="white"
              v-model="item.gender"
              hide-details
              backgroundColor="green lighten-5"
              height="20"
              placeholder="Patient Name last"
              required
            ></v-combobox>
          </template>
        </template>
        <template v-slot:item.refered_by="{ item }">
          <template v-if="!enableEditUser || currentUserId != item.id">
            <span
              class="username"
              @click="
                $router.push({
                  name: 'edit-user',
                  params: { id: item.user.id, name: item.user.name },
                })
              "
            >
              {{ item.user ? item.user.name : "" }}
            </span>
          </template>
          <template v-if="enableEditUser && currentUserId == item.id">
            <v-autocomplete
              v-model="item.user"
              dense
              label="Refered By"
              prepend-icon="mdi-database-search"
              return-object
              :items="doctors"
              item-text="name"
            >
            </v-autocomplete>
            <!-- <v-text-field
              color="white"
              v-model="item.user.id"
              hide-details
              dense
              backgroundColor="green lighten-5"
              height="20"
              placeholder="Refered_By"
              required
            ></v-text-field> -->
          </template>
        </template>

        <template v-slot:item.telephone="{ item }">
          <template v-if="!enableEditUser || currentUserId != item.id">
            <a :href="`tel: ${item.telephone}`">
              {{
                //new Date(item.created_at).toDateString()
                item.telephone
              }}</a
            >
          </template>
          <template v-if="enableEditUser && currentUserId == item.id">
            <v-text-field
              color="white"
              v-model="item.telephone"
              :error-messages="errorMessages"
              hide-details
              dense
              backgroundColor="green lighten-5"
              height="20"
              placeholder="Patient Phone"
              required
            ></v-text-field>
          </template>
        </template>

        <template v-slot:item.action="{ item }">
          <div class="action">
            <v-icon
              class="mr-2"
              color="success"
              @click="editUserInline(item.id)"
            >
              mdi-account-edit
            </v-icon>
            <template v-if="!enableEditUser || currentUserId != item.id">
              <v-icon class="mr-2" color="error" @click="delUser(item)">
                mdi-account-remove
              </v-icon>
            </template>
            <template v-if="enableEditUser && currentUserId == item.id">
              <v-icon
                class="mr-2"
                color="green darken-4"
                @click="updateUser(item)"
              >
                mdi-content-save
              </v-icon>
            </template>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import breadcumb from "@/components/breadcumb";
import Edit from "./edit";
import doctorsList from "@/mixins/doctorsList.js";
export default {
  components: {
    breadcumb,
    Edit,
  },
  middleware: "admin",
  data: () => ({
    dialog: false,
    singleSelect: true,
    selected: [],
    search: "",
    loading: true,
    enableEditUser: false,
    currentUserId: null,
    refered_by: null,
    genders: ["Male", "Female"],
    headers: [
      {
        text: "First Name",
        align: "start",
        sortable: true,
        //  filterable: false, if we want to disable search
        value: "name",
        color: "primary",
      },
      { text: "Last Name", value: "lastName", width: "15%" },
      { text: "Refered By", value: "refered_by" },
      { text: "Gender", value: "gender" },

      { text: "telephone", value: "telephone" },
      {
        text: "Action",
        filterable: false,
        sortable: false,
        value: "action",
        width: "15%",
      },
    ],
    desserts: [],
    rules: {
      name: [(val) => (val || "").length > 0 || "This field is required"],
      email: [
        (email) => !!email || "This field is required",
        (email) =>
          (!!email && email.length <= 35) || "Email must be less than 35",
        (v) => !!(v || "").match(/@/) || "Please enter a valid email",
        (email) =>
          (!!email && email.length >= 5) || "Email must be more than 5",
        //   this.addressCheck(),
      ],
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      telephone: [(val) => (val || "").length > 0 || "This field is required"],
      required: (v) => !!v || "This field is required",
    },
  }),

  head() {
    return {
      title: "Patients List",
    };
  },
  mixins: [doctorsList],
  methods: {
    getActive(isActive) {
      if (isActive == 1) return "green";
      //"green !important";
      //"background: #4caf50;";
      else return "red";
    },
    fetchUsers(data) {
      this.desserts = data;
    },
    goUser(user) {
      //this.$router.push("/admin/users/" + user.id);
    },
    editUser(userID) {
      this.enableEditUser = true;
      this.currentUserId = userID;
    },
    updateCurrentUser(user) {
      console.log(user);
      let objIndex = this.desserts.findIndex((obj) => obj.id == user.id);
      if (objIndex !== -1) this.desserts.splice(objIndex, 1, user);
    },
    editUserInline(userId = null) {
      if (this.enableEditUser) {
        this.currentUserId = null;
        this.enableEditUser = false;
      } else {
        this.enableEditUser = true;

        this.currentUserId = userId;
      }
    },
    delUser(user) {
      this.$store.dispatch("patient/patientDelete", user.id).then((res) => {
        this.loading = false;
        let objIndex = this.desserts.findIndex((obj) => obj.id == user.id);
        if (objIndex !== -1) this.desserts.splice(objIndex, 1);
        this.$toasted
          .error("Patient Deleted successfully", {
            theme: "bubble",
            position: "top-right",
            duration: 5000,
            className: "mytoast",
            type: "success",
            iconPack: "mdi",
            icon: {
              name: "Business-Mens",
              after: true,
            },
          })
          .goAway(3000);
      });
    },
    updateUser(item) {
      console.log("update Patient !");
      this.submitStatus = "PENDING";
      let fa = Object.entries(item);
      this.$store
        .dispatch("patient/patientUpdate", { id: item.id, formData: fa })
        .then((res) => {
          console.log(res);

          this.editUserInline(item.id);
          this.afterSubmit(res);
        })
        .catch((err) => {
          console.log(err);

          this.$toasted
            .error("Error updating user", {
              theme: "bubble",
              position: "top-right",
              duration: 5000,
              className: "mytoast",
              type: "error",
              iconPack: "mdi",
              icon: {
                name: "eye-off",
                after: true,
              },
            })
            .goAway(3000);
        });
      //   }
    },
    afterSubmit(res) {
      console.log(res);

      this.$toasted
        .success("Patient Updated Successfully", {
          theme: "bubble",
          position: "top-right",
          duration: 5000,
          className: "mytoast",
          type: "success",
          iconPack: "mdi",
          icon: {
            name: "eye-off",
            after: true,
          },
        })
        .goAway(3000);
    },
  },
  created() {
    // this.$toast.show("Loading table in...");
    this.$store.dispatch("patient/getPatients").then((res) => {
      this.fetchUsers(res.data);
      this.loading = false;
      this.$toasted
        .success("Patients List loaded", {
          position: "top-center",
          className: "mytoast",
          type: "info",
          iconPack: "mdi",
          icon: {
            name: "check-circle-outline",
            after: true,
          },
        })
        .goAway(3000);
      //   console.log(this.$toasted);
    });
    this.loadPatientsDoctors();
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
.index {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.search {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.space {
  flex-grow: 3;
  line-height: 1rem;
}
</style>
