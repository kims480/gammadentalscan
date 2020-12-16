<template>
    <v-container class="grey lighten-5">
        <v-row>
            <v-col cols="6" md="4">
                <v-card class="pa-2" outlined tile>
                    <img
                        src="../../../assets/images/unnamed.png"
                        class="gdrive-logo"
                    />

                    <v-divider class="mx-3"></v-divider>

                    <v-container>
                        <v-progress-linear
                            :active="active"
                            :background-opacity="opacity"
                            :bottom="bottom"
                            :buffer-value="buffer"
                            :height="height"
                            :indeterminate="indeterminate"
                            :query="query"
                            :rounded="rounded"
                            :stream="stream"
                            :striped="striped"
                            :top="top"
                            :value="value"
                            background-color="success"
                            color="light-blue"
                        ></v-progress-linear>
                    </v-container>
                    <v-divider class="mx-3"></v-divider>
                    <div class="text-center">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="ma-2"
                                    icon
                                    text
                                    color="green"
                                    v-bind="attrs"
                                    v-on="on"
                                    dark
                                >
                                    <v-icon dark right>mdi-refresh </v-icon>
                                </v-btn>
                            </template>
                            <span>Refresh</span>
                        </v-tooltip>

                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="ma-2"
                                    text
                                    icon
                                    color="indigo"
                                    v-bind="attrs"
                                    v-on="on"
                                    dark
                                >
                                    <v-icon dark>mdi-cloud-upload</v-icon>
                                </v-btn>
                            </template>
                            <span>Upload</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="ma-2"
                                    text
                                    icon
                                    color="green"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="addFolder = !addFolder"
                                    dark
                                >
                                    <v-icon dark
                                        >mdi-folder-multiple-plus
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Add Folder</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="ma-2"
                                    text
                                    icon
                                    color="green"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="addFiles = !addFiles"
                                    dark
                                >
                                    <v-icon dark>mdi-file-plus </v-icon>
                                </v-btn>
                            </template>
                            <span>Add Files</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="ma-2"
                                    text
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    color="blue lighten-2"
                                >
                                    <v-icon>mdi-share-variant </v-icon>
                                </v-btn>
                            </template>
                            <span>Share</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="ma-2"
                                    text
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    color="red lighten-2"
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </template>
                            <span>Delete</span>
                        </v-tooltip>
                    </div>

                    <v-divider class="mx-4"></v-divider>

                    <v-text-field v-if="addFolder">
                        <v-icon slot="append" color="red">mdi-plus</v-icon>
                        <v-icon slot="prepend" color="green">mdi-minus</v-icon>
                    </v-text-field>

                    <v-file-input
                        v-model="files"
                        color="light-green accent-4"
                        counter
                        clearable
                        dense
                        v-if="addFiles"
                        label="Add Files"
                        multiple
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        :show-size="1000"
                    >
                        <template v-slot:selection="{ index, text }">
                            <v-chip
                                v-if="index < 3"
                                color="green accent-4"
                                dark
                                label
                                small
                            >
                                {{ text }}
                            </v-chip>

                            <span
                                v-else-if="index === 3"
                                class="overline grey--text text--darken-3 mx-2"
                            >
                                +{{ files.length - 3 }} File(s)
                            </span>
                        </template>
                    </v-file-input>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card class="mx-auto" shaped>
                    <v-breadcrumbs :items="items">
                        <template v-slot:divider>
                            <v-icon>mdi-forward</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-card>

                <v-card class="my-4" raised>
                    .col-12 .col-md-8
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "index",

    data() {
        return {
            files: [],
            addFolder: false,
            addFiles: false,
            absolute: false,
            active: true,
            opacity: 0.3,
            bottom: false,
            buffer: 100,
            fixed: false,
            height: 10,
            indeterminate: false,
            query: false,
            rounded: true,
            stream: false,
            striped: true,
            top: false,
            value: 25,
            items: [
                {
                    text: "Root",
                    disabled: false,
                    href: "breadcrumbs_dashboard"
                },
                {
                    text: "Folder 1",
                    disabled: false,
                    href: "breadcrumbs_link_1"
                },
                {
                    text: "Folder 1-1",
                    disabled: true,
                    href: "breadcrumbs_link_2"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.gdrive-logo {
    height: 50px;
    text-align: center;
}
.gdrive-breadcrumb {
    background: light-blue;
}
</style>
