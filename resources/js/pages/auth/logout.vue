<template></template>

<script>
export default {
  created() {
    this.logout();

    /*  this.$store.dispatch("user/destroyToken").then(res => {
      console.log(res);
    }); */
  },
  layout: "auth",
  methods: {
    async logout() {
      try {
        await this.$store
          .dispatch("auth/logout")

          .then((res) => {
            // localStorage.setItem("Logout_resp", JSON.stringify(res));

            this.$store.dispatch(
              "notifications/pushSuccessNotify",
              res.status == 204
                ? "GoodBy Successfully Signed OUt"
                : "Seems Some Errors"
            );
            this.$router.push({ name: "sign-in" });
            location.reload();
            // console.log(res);
            // this.$store.dispatch("validation/setErrors", res);
          })
          .catch((err) => {
            let data = {
              errors: "Username or passord Incorrect",
              details: err,
            };
            localStorage.setItem("Logout_ERR", JSON.stringify(err));

            this.$store.dispatch("validation/setErrors", data);
            this.$store.dispatch("notifications/pushErrorNotify", err);
          });
      } catch (error) {
        console.log(error);
        localStorage.setItem("Logout_ERR", JSON.stringify(error));
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
