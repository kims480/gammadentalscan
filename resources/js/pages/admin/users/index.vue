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
                <!--<nuxt-link
            :to="{
              path: '/admin/users/' + item.name + '?',
              params: { id: item.id, name: item.name }
            }"
            >{{ item.name }}</nuxt-link
          >-->
                <span
                    class="username"
                    @click="
                        $router.push({
                            name: 'admin-users-name',
                            params: { id: item.id, name: item.name, user: item }
                        })
                    "
                >
                    {{ item.name }}
                </span>
            </template>
            <template v-slot:item.active="{ item }">
                <v-chip small :color="getActive(item.active)">{{
                    item.active == 1 ? "Active" : "inactive"
                }}</v-chip>
            </template>


            <template class="action roles" v-slot:item.roles="{ item }">
                <v-chip
                    small
                    v-for="(role, index) in item.roles"
                    :key="index"
                    color="info"
                    dark
                    >{{ role.name }}</v-chip
                >
            </template>
            <template v-slot:item.action="{ item }">
                <div class="action">
                    <Edit :user="item" />

                    <v-icon
                        small
                        class="mr-2 action-btn"
                        color="error"
                        @click="delUser(item)"
                    >
                        mdi-delete
                    </v-icon>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import breadcumb from "@/components/breadcumb";
import Edit from "./edit";
export default {
    components: {
        breadcumb,
        Edit
    },

    data: () => ({
        dialog: false,
        singleSelect: true,
        selected: [],
        search: "",
        loading: true,
        headers: [
            {
                text: "User Name",
                align: "start",
                sortable: true,
                //  filterable: false, if we want to disable search
                value: "name",
                color: "primary"
            },
            { text: "Email", value: "email" },
            { text: "Active", value: "active" },


            { text: "Roles", value: "roles" },
            { text: "Action", value: "action", width: "15%" }
        ],
        desserts: []
    }),

    head() {
        return {
            title: "Users List"
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
        this.$store
            .dispatch("users/getUsers")
            .then(res => {
                this.fetchUsers(res.data.users);
                this.loading = false;
                this.$toasted
                    .success("users table loaded", {

                        theme: "bubble",
                        position: "top-center",
                        duration : 5000,
                        className: "mytoast",
                        type: "success",
                        iconPack:'i-Business-Mens',
                        icon: {
                            name: "Business-Mens",
                            after: true
                        }
                    })
                    .goAway(3000);
            })
            .catch(error => {
                console.log('error ')
                console.log(error)
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
