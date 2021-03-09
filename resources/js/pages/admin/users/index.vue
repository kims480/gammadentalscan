<template>
  <v-card>
    <v-card-title>
      Users List
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
      loading-text="Loading Users... Please wait"
    >
      <template v-slot:item.name="{ item }">
        <template v-if="!enableEditUser || currentUserId != item.id">
          <span
            class="username"
            @click="
              $router.push({
                name: 'edit-user',

                params: { id: item.id, name: item.name.replace(/ /g, '-') },
              })
            "
          >
            {{ item.name }}
          </span>
        </template>
        <template v-if="enableEditUser && currentUserId == item.id">
          <v-text-field
            color="white"
            v-model="item.name"
            :rules="rules.name"
            :error-messages="errorMessages"
            hide-details
            dense
            backgroundColor="green lighten-5"
            height="20"
            placeholder="User Name"
            required
          ></v-text-field>
        </template>
      </template>
      <template v-slot:item.email="{ item }">
        <template v-if="!enableEditUser || currentUserId != item.id">
          {{ item.email }}
        </template>
        <template v-if="enableEditUser && currentUserId == item.id">
          <v-text-field
            ref="email"
            v-model="item.email"
            :rules="rules.email"
            color="green"
            height="20"
            dense
            backgroundColor="green lighten-5"
            hide-details
            placeholder="Email"
            counter="35"
            required
          ></v-text-field>
        </template>
      </template>
      <template v-slot:item.active="{ item }">
        <template v-if="!enableEditUser || currentUserId != item.id">
          <v-chip x-small :color="getActive(item.active)">{{
            item.active ? "Yes" : "No"
          }}</v-chip>
        </template>
        <template v-if="enableEditUser && currentUserId == item.id">
          <v-checkbox
            ref="active"
            v-model="item.active"
            label="Active"
            color="success"
            dense
            hide-details
          ></v-checkbox>
        </template>
      </template>

      <template class="action roles" v-slot:item.roles="{ item }">
        <template v-if="!enableEditUser || currentUserId != item.id">
          <v-chip
            x-small
            v-for="(role, index) in item.roles"
            :key="index"
            color="info"
            dark
            >{{ role }}</v-chip
          >
        </template>
        <template v-if="enableEditUser && currentUserId == item.id">
          <v-select
            v-model="item.roles"
            :items="allRoles"
            backgroundColor="green lighten-5"
            small-chips
            dense
            height="20"
            color="green"
            hide-details
            multiple
            label="Roles"
          >
          </v-select>
        </template>
      </template>
      <template v-slot:item.action="{ item }">
        <div class="action">
          <v-icon class="mr-2" color="success" @click="editUserInline(item.id)">
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
    <!-- <v-dialog v-model="enableEditUser" transition="dialog-bottom-transition">
      <v-card>
        <template v-if="enableEditUser">
          <Edit
            :id="currentUserId"
            popup="true"
            @user="updateCurrentUser"
            @close="enableEditUser = false"
          />
        </template>

        <v-btn color="success" right text @click="enableEditUser = false">
          Close
        </v-btn>
      </v-card>
    </v-dialog> -->
    <!-- <v-bottom-sheet v-model="enableEditUser">
      <v-sheet class="d-flex align-center justify-center transparent">
        <v-btn
          absolute
          bottom
          color="white"
          right
          depressed
          style="transform: translateX(-50%)"
          @click="enableEditUser = false"
        >
          Close
        </v-btn>
        <template v-if="enableEditUser">
          <Edit
            :id="currentUserId"
            popup="true"
            @user="updateCurrentUser"
            @close="enableEditUser = false"
          />
        </template>
      </v-sheet>
    </v-bottom-sheet> -->
  </v-card>
</template>

<script>
import breadcumb from "@/components/breadcumb";

import Edit from "./add";
export default {
  components: {
    breadcumb,
    Edit,
  },

  data() {
    const defaultForm = Object.freeze({
      name: null,
      email: null,
      password: null,
      confirm_password: null,
      whatsapp: null,
      biography: null,
      active: 0,
      phone: null,
      image: null,
      selected: "first",
      userPermissions: [],
      userRoles: [],
    });
    return {
      dialog: false,
      singleSelect: true,
      selected: [],
      search: "",
      errorMessages: "",
      myForm: Object.assign({}, defaultForm),
      loading: true,
      enableEditUser: false,
      currentUserId: null,
      allRoles: [],
      headers: [
        {
          text: "User Name",
          align: "start",
          sortable: true,
          //  filterable: false, if we want to disable search
          value: "name",
          color: "primary",
        },
        { text: "Email", value: "email" },
        { text: "Active", value: "active" },

        { text: "Roles", value: "roles" },
        { text: "Action", value: "action", width: "15%" },
      ],
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
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        phone: [(val) => (val || "").length > 0 || "This field is required"],
        password: [(val) => (val || "").length > 4 || "This field is required"],
        // password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        //   'Password must contain an upper case letter, a numeric character, and a special character',
        required: (v) => !!v || "This field is required",
      },
      desserts: [],
    };
  },

  head() {
    return {
      title: "Users List",
    };
  },
  methods: {
    getActive(isActive) {
      if (isActive) return "green";
      //"green !important";
      //"background: #4caf50;";
      else return "red";
    },
    fetchUsers(data) {
      data.forEach((user) => {
        user.roles = user.roles.map((item) => item.name);
        this.desserts.push(user);
      });
      //   this.desserts = date;
      //   this.desserts.roles = date.roles ??
      console.log(this.desserts.roles);
    },

    editUser(userID) {
      this.enableEditUser = true;
      this.currentUserId = userID;
      //   this.$swal.fire("edit : " + user.id + " // " + user.name);
      //   this.console.dir(this.selected);
    },
    updateCurrentUser(user) {
      console.log(user);
      let objIndex = this.desserts.findIndex((obj) => obj.id == user.id);
      //   console.log(this.desserts[objIndex]);
      if (objIndex !== -1) this.desserts.splice(objIndex, 1, user);
      //   //   console.log(this.desserts[objIndex]);
      //   this.desserts[objIndex].name = user.name;
      //   this.desserts[objIndex].email = user.email;
      //   this.desserts[objIndex].active = user.active;
      //   this.desserts[objIndex].roles = user.roles;
      //   console.log(this.desserts[objIndex].name, user.name);
      //   console.log(this.desserts[objIndex].email, user.email);
      //   console.log(this.desserts[objIndex].active, user.active);
      //   console.log(this.desserts[objIndex].roles, user.roles);
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
      this.$store.dispatch("users/userDelete", user.id).then((res) => {
        this.loading = false;
        let objIndex = this.desserts.findIndex((obj) => obj.id == user.id);
        if (objIndex !== -1) this.desserts.splice(objIndex, 1);
        this.$toasted
          .error("users Deleted successfully", {
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
    goUser(user) {
      //this.$router.push("/admin/users/" + user.id);
    },
    updateUser(item) {
      console.log("update User !");
      this.submitStatus = "PENDING";
      let fa = Object.entries(item);
      this.$store
        .dispatch("users/userUpdate", { id: item.id, formData: fa })
        .then((res) => {
          console.log(res);
          this.submitStatus = "OK";
          this.editUserInline(item.id);
          this.afterSubmit(res);
        })
        .catch((err) => {
          console.log(err);
          this.$store.dispatch("notifications/pushErrorNotify", err);
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
    routeAfterUpdate() {
      return;
    },
    emitAfterUpdate() {
      return;
    },
    afterSubmit(res) {
      this.resetForm();
      //   this.$store.dispatch("notifications/pushSuccessNotify", res.message);

      if (!this.popup) this.routeAfterUpdate();
      if (this.popup) {
        this.emitAfterUpdate();
      }
      this.$toasted
        .success("User Updated Successfully", {
          theme: "bubble",
          position: "top-right",
          duration: 5000,
          className: "mytoast",
          type: "success",
          iconPack: "mdi",
          icon: {
            name: "check",
            after: true,
          },
        })
        .goAway(3000);
    },
    resetForm() {
      return;
    },
  },
  created() {
    // this.$toast.show("Loading table in...");
    this.$store
      .dispatch("users/getUsers")
      .then((res) => {
        this.fetchUsers(res.data.users);
        this.loading = false;
        this.$toasted
          .success("users table loaded", {
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
      })
      .catch((error) => {
        console.log("error ");
        console.log(error);
        // if (error.response.status === 404) {
        //     this.$route.push("/error/404");
        // } else {
        //     this.$toast
        //         .success("users table loaded", {
        //             position: "top-center",
        //             className: "mytoast",
        //             type: "error",
        //             icon: {
        //                 name: "check",
        //                 after: true
        //             }
        //         })
        //         .goAway(3000);
        // }
      });
    this.$store.dispatch("users/getRolesPermissions").then((res) => {
      this.allRoles = res.allRoles;
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
.username:hover {
  color: rgb(2, 185, 84);
  cursor: pointer;
}
.action-btn {
  padding: 5px;
  border-radius: 50%;
  border: 1px solid;
}
</style>
