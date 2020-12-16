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
      {{statusCode}}! {{message}}
   </v-alert>
  </div>
  <p :v-if="statusCode ==404">
    <nuxt-link :to="{name:'home'}">Go to Home Page</nuxt-link>
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
    return {
      statusCode: 404
    };
  },
  layout: "error",
  head() {
    return {
      title: "404"
    };
  },
  methods: {},
  computed: {
    statuscode() {
      console.log(this.$route.params.statusCode);
      return this.$route.params.statusCode;
    },
    message() {
      // this.errors.message = this.$route.params.error.message;

      //console.log(this.$route.params);
      return this.$route.params.error.data.message;
      // typeof Object(this.error)
      //   ? this.error.message
      //   : this.$route.params.error.message;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
