<template>
  <div>
  <div class="title">
 <!--  <b-alert show variant="danger" dismissible>
            <strong class="text-capitalize">404!</strong>
            {{message}}
          </b-alert>
          -->
   <v-alert type="error"  dense
      outlined
       dismissible >
      404! {{ message}}
   </v-alert>
  </div>
  <p v-if="error.statusCode ===404">
    <nuxt-link to="/">Go to Home Page</nuxt-link>
  </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  head() {
    return {
      titleTemplate: "%s - Error || Gamma Dental Scan "
    };
  },
  computed: {
    statuscode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message
        ? this.error.message
        : this.$route.params.error.message;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
