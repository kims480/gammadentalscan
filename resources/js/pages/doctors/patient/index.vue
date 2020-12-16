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
        loading-text="Loading Users... Please wait"
      >
        <template v-slot:item.name="{ item }">
          <!--<nuxt-link
            :to="{
              path: '/admin/users/' + item.name + '?',
              params: { id: item.id, name: item.name }
            }"
            >{{ item.name }}</nuxt-link
          >-->
          <nuxt-link :to="{
                path: '/admin/patients/'+item.name_en,
                params: { id:item.id,name:item.name_en },
                query:{patient: item}
              }">{{ item.name_en }}</nuxt-link>
<!-- ,
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
        <template v-slot:item.created="{ item }">
          {{ new Date(item.created_at).toDateString() }}
        </template>

        <template v-slot:item.action="{ item }">
          <div class="action">
            <Edit class="btn-action" :user="item" />
            <span class="btn-action"></span>
            <v-btn
              small
              rounded
              class="btn-action"
              color="error"
              @click="delUser(item)"
              ><i class="i-Folder-Trash icon-font"></i
            ></v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import breadcumb from "@/components/breadcumb";
import Edit from "./edit";
export default {
  components: {
    breadcumb,
    Edit
  },
  layout: "doctor",
  data: () => ({
    dialog: false,
    singleSelect: true,
    selected: [],
    search: "",
    loading: true,
    headers: [
      {
        text: "Patient Name",
        align: "start",
        sortable: true,
        //  filterable: false, if we want to disable search
        value: "name",
        color: "primary"
      },
      { text: "Arabic Name", value: "name_ar", width: "15%" },
      { text: "Refered By", value: "refered_by" },
      { text: "Created At", value: "created" },

      { text: "telephone", value: "telephone" },
      { text: "Action", value: "action", width: "15%" }
    ],
    desserts: []
  }),

  head() {
    return {
      title: "Patients List"
    };
  },
  methods: {
    getActive(isActive) {
      if (isActive == 1) return "green";
      //"green !important";
      //"background: #4caf50;";
      else return "red";
    },
    fetchUsers(date) {
      this.desserts = date;
    },
    editUser(user) {
      this.$swal.fire("edit : " + user.id + " // " + user.name);
      console.dir(this.selected);
    },
    delUser(user) {
      alert(user.id + " // " + user.name);
    },
    goUser(user) {
      //this.$router.push("/admin/users/" + user.id);
    }
  },
  created() {
    // this.$toast.show("Loading table in...");
    this.$store.dispatch("patient/getPatients").then(res => {
      this.fetchUsers(res.data);
      this.loading = false;
      this.$toast
        .success("users table loaded", {
          position: "top-center",
          className: "mytoast",
          type: "success",
          icon: {
            name: "check",
            after: true
          }
        })
        .goAway(3000);
    });
  },
  computed: {}
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
