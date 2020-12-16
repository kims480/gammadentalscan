<template>
  <div
    class="auth-layout-wrap"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-6">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img :src="logo" />
              </div>
              <h1 class="mb-3 text-18">Sign In</h1>
              <v-form
                @submit.prevent="login"
                @reset="onReset"
                v-if="show"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="form.email"
                  :counter="30"
                  :rules="emailRules"
                  label="Email Address"
                  append-outer-icon="mdi-email"
                  required
                ></v-text-field>

                <v-text-field
                  name="password"
                  v-model="form.password"
                  label="Enter your password"
                  hint="At least 8 characters"
                  min="8"
                  :append-outer-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append-outer="showPass = !showPass"
                  value="Password"
                  error
                  :type="showPass ? 'password' : 'text'"
                ></v-text-field>

                <!-- <b-button block to="/" variant="primary btn-rounded mt-2"
                  >Sign In</b-button
                > -->
                <v-btn
                  rounded
                  type="submit"
                  :disabled="!valid"
                  color="success"
                  dark
                  >SignIn</v-btn
                >

                <div v-once class="typo__p" v-if="loading">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
              </v-form>

              <div class="mt-3 text-center">
                <router-link to="forgot" tag="a" class="text-muted">
                  <u>Forgot Password?</u>
                </router-link>
              </div>
            </div>
          </div>

          <div
            class="col-sm text-center"
            md="6"
            style="backgroundSize: cover;"
            :style="{ backgroundImage: 'url(' + signInImage + ')' }"
          >
            <div class="pr-3 auth-right">
              <nuxt-link
                to="signUp"
                class="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                href="signup.html"
              >
                <i class="i-Mail-with-At-Sign"></i> Sign up with Email
              </nuxt-link>
              <span
                @click="logingoogle"
                class="btn btn-rounded btn-outline-primary btn-outline-google btn-block btn-icon-text"
              >
                <i class="i-Google-Plus"></i> Sign up with Google
              </span>
              <a
                class="btn btn-rounded btn-outline-primary btn-block btn-icon-text btn-outline-facebook"
              >
                <i class="i-Facebook-2"></i> Sign up with Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "SignIn"
  },
  layout: "auth",
  middleware: "guest",
  head() {
    return {
      title: "Login",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Main page for Gamma Dental Scan Radiology"
        }
      ]
    };
  },
  // OR
  /*  layout (context) {
    return 'blog'
  } */
  data() {
    return {
      form: {
        email: "",
        password: "",
        // // password: "vue006",
        username: ""
      },
      userId: "",
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      logo: require("@/assets/images/logo.png"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      loading: false,
      show: true,
      valid: true,
      showPass: false,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    }
    // ...mapGetters(["loggedInUser", "loading", "error"])
  },
  beforeCreate() {
    //  if (this.$auth.loggedIn) {
    //  console.log("Already logged in");
    // // console.dir($auth.$state);
    // return this.$router.push("/");
    //   } else{
    //     console.log("not logged in");
    //   //   // console.log("store: "+store.state.auth.loggedIn);
    //   //   // console.log('$auth.loggedIn: '+$auth.loggedIn);
    //   //   return redirect("/app/sessions/signIn");
    //   }
  },

  methods: {
    async logingoogle() {
      const googleUser = await this.$gAuth.signIn();
      googleUser.getId(); // : Get the user's unique ID string.
      console.log(googleUser);
      // googleUser.getBasicProfile() // : Get the user's basic profile information.
      // googleUser.getAuthResponse() // : Get the response object from the user's auth session. access_token and so on
      this.isSignIn = this.$gAuth.isAuthorized;
    },
    // ...mapActions(["login"]),
    /*  formSubmit() {
      this.login({ email: this.email, password: this.password });
    }, */
    makeToast(variant = null, msg) {
      this.$bvToast.toast(msg, {
        title: ` ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
    },
    async login() {
      try {
        this.form.username = this.form.email;
        // console.log(this.form);
        this.loading = true;
        await this.$auth
          .loginWith("local", {
            data: {
              username: this.form.email,
              password: this.form.password
            }
          })
          .then(res => {
            this.loading = false;
            // console.log(res);
            // this.$auth.$storage.setUniversal('loggedIn', true, true);
            // this.$router.push("/");
            if (this.$auth.hasScope("super_admin")) {
              this.$router.push("/admin/");
            } else if (this.$auth.hasScope("doctor")) {
              this.$router.push("/doctors/");
              this.$swal.fire("Welcome DR." + this.$auth.user.name);
            } else if (this.$auth.hasScope("admin")) {
              this.$router.push("/admin/");
              this.$swal.fire("Welcome Admin \n" + this.$auth.user.name);
            } else if (this.$auth.hasScope("admin")) {
              this.$swal.fire("Welcome \n" + this.$auth.user.name);
              this.$router.push("/");
            }
          })
          .catch(err => {
            this.loading = false;
            let data = {
              errors: "Username or passord Incorrect",
              details: err
            };
            // console.dir(err);
            this.$store.dispatch("validation/setErrors", data);

            if (err.message == "Network Error") {
              this.$swal.fire(
                "Error : Cannot connect to server. Please check internet"
              );
            } else if (err.response.status === 400) {
              this.$swal.fire(err.response.data.message);
            } else {
              this.$swal.fire("Error :" + err.message);
            }
          });
      } catch (e) {
        this.loading = false;
        return;
      }
    },
    async signgoogle() {
      try {
        this.loading = true;
        await this.$auth
          .loginWith("mygoogle")
          .then(res => {
            console.dir(res);
            this.loading = false;
            // console.log(res);
            this.$router.push("/");
          })
          /*
http://localhost:3000/#state=btKp_n_RMoE1oTDD6HXnP&
access_token=ya29.a0AfH6SMBJvZwsoJiXBkppzshoJhGixrfZ4A_Xa28Hl_DqwzP8C67i0kF4H0Xh1yMhYRjgw0rZYxxHzhx3FaT3huJk3kDgcqGubQ8Da5u5JOBfA7wurACxw2wzS2QZT0edtuQ2a-K3v-v1qbn3RtikEwbP8ewWZB2WUIY&
token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/drive.photos.readonly%20https://www.googleapis.com/auth/drive.appdata%20https://www.googleapis.com/auth/drive.install%20https://www.googleapis.com/auth/drive%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/drive.readonly%20https://www.googleapis.com/auth/drive.metadata%20openid%20https://www.googleapis.com/auth/drive.metadata.readonly%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/drive.scripts%20https://www.googleapis.com/auth/drive.file&authuser=1&prompt=consent
          */
          .catch(err => {
            this.loading = false;
            let data = {
              errors: "Username or passord Incorrect",
              details: err
            };
            // console.dir(err);
            this.$store.dispatch("validation/setErrors", data);

            console.dir(err);
          });
      } catch (e) {
        this.loading = false;
        return;
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";

      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  watch: {
    // loggedInUser(val) {
    //   if (val && val.uid && val.uid.length > 0) {
    //     this.makeToast("success", "Successfully Logged In");

    //     setTimeout(() => {
    //       this.$router.push("/");
    //     }, 500);
    //   }
    // },
    error(val) {
      if (val != null) {
        this.makeToast("warning", val.message);
      }
    }
  }
};
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
