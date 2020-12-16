<template>

</template>

<script>
import {mapActions} from 'vuex';
export default {
  created() {
    this.logout();


    /*  this.$store.dispatch("user/destroyToken").then(res => {
      console.log(res);
    }); */
  },
  layout:'auth',
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')

        .then(res => {

            this.$router.push({ name: "home" });
            location.reload();
          // console.log(res);
          // this.$store.dispatch("validation/setErrors", res);
        })
        .catch(err => {
          let data = { errors: "Username or passord Incorrect", details: err };

          this.$store.dispatch("validation/setErrors", data);
          this.$store.dispatch('notifications/pushNotif',err,'error')
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
