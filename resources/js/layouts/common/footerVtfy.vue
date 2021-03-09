<template>
  <v-footer fixed dark padless color="primary lighten-1">
    <v-card flat tile width="100%" class="text-center py-0">
      <!-- <v-card-text class="py-0">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 "
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider class="my-0 py-0"></v-divider> -->

      <v-card-text class="white--text py-0">
        <img
          class="logo"
          src="@/assets/images/logo.png"
          style="filter: invert(1)"
          height="35px"
          width="35px"
          alt=""
        />
        {{ new Date().getFullYear() }} —
        <strong>Gamma &copy; Dental Scan </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],

    padless: true,
    variant: "fixed",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return (attrs.absolute = true);
    },
  },
};
</script>
