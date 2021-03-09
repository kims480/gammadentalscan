<template>
  <div class="green lighten-5">
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
    <!-- <template v-if="show">
        <notifications :snackbar="notifications.show" :text="notifications.message" ></notifications>
    </template> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AuthLayout",
  head() {
    return {
      titleTemplate: "%s | Gamma Dental Radiology Center",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Main page for Gamma Dental Scan Radiology",
        },
      ],
    };
  },
  computed: {
    //   ...mapGetters({notifications:"notifications/notifications",show:"notifications/showNotifications"}),
    ...mapGetters(["lng"]),
  },
};
</script>
