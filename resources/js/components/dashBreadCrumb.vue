<template>
  <v-container class="py-0">
    <div id="mater-nav">
      <div class="breadcrumb">
        <slot name="header">
          <ul>
            <li class="mr-2">{{ mainSection }}</li>

            <template v-if="MainPage == null"> </template>
            <template v-else>
              <li>
                <router-link to=""> {{ MainPage }}</router-link>
              </li>
              <li v-if="!SubPage == null">{{ SubPage }}</li>
            </template>
          </ul>
        </slot>
      </div>
      <v-tabs
        v-model="selectedItem"
        class="mb-0 mt-2 pb-0 ml-auto"
        color="green accent-4"
        right
        id="master-tabs"
      >
        <!-- <v-tabs-slider></v-tabs-slider> -->
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :style="
            `min-width:` + $vuetify.breakpoint.mdAndDown
              ? `45px`
              : `normal` + `; padding:` + $vuetify.breakpoint.mdAndDown
              ? `0`
              : `0 1rem`
          "
          class="mb-0 master-tab"
          @click="$router.push({ name: item.target })"
        >
          <v-icon :left="$vuetify.breakpoint.mdAndUp" dark>
            {{ item.icon }}
          </v-icon>
          <span v-show="$vuetify.breakpoint.mdAndUp">
            {{ item.text }}
          </span>
        </v-tab>
      </v-tabs>
    </div>
  </v-container>
  <!-- <div class="breadcrumb">
            <slot name="header">
                <h5><i class="i-Folder"></i> {{ mainSection }}</h5>

                <template v-if="MainPage == null"> </template>
                <template v-else>
                    <ul>
                        <li>
                            <h5>
                                <i class="i-Arrow-Right-2"></i>
                                <router-link to=""> {{ MainPage }}</router-link>
                            </h5>
                        </li>
                        <li v-if="!SubPage == null">
                            <h5>{{ SubPage }}</h5>
                        </li>
                    </ul>
                </template>
            </slot>
        </div>
        <div class="separator-breadcrumb border-top"></div>
 -->
</template>
<script>
export default {
  props: ["mainSection", "MainPage", "SubPage"],
  data: () => ({
    selectedItem: 0,
    isMobile: false,
    items: [
      {
        text: "Patients",
        icon: "mdi-shield-account",
        target: "patients",
        sub: ["New", "List"],
      },
      {
        text: "Requests",
        icon: "mdi-file-document-edit",
        target: "request-list",
        sub: ["New", "List"],
      },
      { text: "New patient", icon: "mdi-account-plus", target: "add-patient" },
      { text: "New Request", icon: "mdi-file-plus", target: "request-new" },
    ],
  }),
};
</script>
