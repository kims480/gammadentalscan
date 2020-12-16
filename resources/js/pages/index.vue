<template>
  <div class="container">
    <h1 v-on:click="conslog">Home Page</h1>
    {{ /* authenticated */ }}
    <br />
    <v-alert
      v-for="(error, index) in errorlist"
      :key="index"
      type="error"
      dismissible
      v-model="errorlist"
    >
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },

  data() {
    return {
      errorlist: ""
    };
  },
  methods: {
    conslog() {
      // console.dir(this.$auth.$state.user);
      // console.dir(this.$auth.hasScope("admin"));
      // console.dir(this.$auth);

     // console.log(scopes);
    }
  },
  mounted() {
    this.$store.dispatch("users/retriveToken");
  }
};
</script>

<style></style>
