<template>
    <v-navigation-drawer
        app
        permanent
        absolute
        expand-on-hover
        v-model="drawer"
        :mini-variant.sync="mini"
        height="calc(100%-60px)"
        style="margin-top:60px"
    >
        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img
                        src="https://randomuser.me/api/portraits/women/85.jpg"
                    ></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Karim Saleh
                    </v-list-item-title>
                    <v-list-item-subtitle
                        >eng.karim2010@gmail.com</v-list-item-subtitle
                    >
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
            <router-link
                v-for="item in items"
                :key="item.id"
                class="v-list-item v-list-item--link theme--light"
                :to="{ name: item.link }"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
        </v-list>

        <!-- -->
    </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
