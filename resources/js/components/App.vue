<template>
    <v-app>
        <v-app-bar app absolute color="green accent-4" dark>
            <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>

            <v-toolbar-title>Gamma Dental Scan</v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link
                class="v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default"
                :to="{ name: 'home' }"
                ><v-icon>mdi-heart</v-icon></router-link
            >

            <router-link
                class="v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default"
                :to="{ name: 'users' }"
            >
                <v-icon>mdi-magnify</v-icon>
            </router-link>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!--<template v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab>Tab 1</v-tab>
                    <v-tab>Tab 2</v-tab>
                    <v-tab>Tab 3</v-tab>
                </v-tabs>
            </template>-->
        </v-app-bar>
        <sidebar />
        <!--  <nav class="navbar border-bottom">
            <router-link
                class="navbar-brand mr-auto navbar-light"
                :to="{ name: 'home' }"
                >Home</router-link
            >
            <router-link class="btn navbar-button" :to="{ name: 'second' }"
                >Example</router-link
            >
        </nav>
-->
        <v-main @mouseover="mini = false">
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Sidebar from "@/layouts/largeSidebar/Sidebar";
// import TopBar from "./TopBar";
export default {
    name: "App",
    components: {
        /*  */
        // TopBar
        Sidebar
    },
    data: () => ({
        drawer: true,
        items: [
            { id: 1, title: "Home", link: "home", icon: "mdi-home-city" },
            {
                id: 2,
                title: "users",
                link: "users",
                icon: "mdi-account-multiple"
            },
            {
                id: 3,
                title: "doctors",
                link: "doctors",
                icon: "mdi-account-group-outline"
            },
            { id: 4, title: "Patients", link: "patients", icon: "mdi-account" },
            { id: 5, title: "Requests", link: "requests", icon: "mdi-account" },
            { id: 6, title: "Storage", link: "storage", icon: "mdi-account" },
            { id: 7, title: "Messages", link: "messages", icon: "mdi-account" },
            {
                id: 8,
                title: "Notification",
                link: "notification",
                icon: "mdi-account"
            },
            { id: 9, title: "Services", link: "services", icon: "mdi-account" },
            { id: 10, title: "Rating", link: "points", icon: "mdi-heart" },
            { id: 11, title: "offers", link: "offers", icon: "mdi-account" }
        ],
        mini: true
    })
};
</script>

<style lang="scss" scoped></style>
