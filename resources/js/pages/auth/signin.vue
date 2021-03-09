<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="9"
        md="6"
        lg="6"
        class="mx-auto"
        :class="{ arabic: lng == 'ar' }"
      >
        <v-card id="card-signin" class="my-5">
          <!-- <v-card-title>
            <span class="text-heading-3">{{ $t("login.title") }}</span>
          </v-card-title> -->
          <v-card-text class="text-center">
            <logo id="logoo"></logo>
            <v-card-subtitle class="text-heading-3">{{
              $t("login.login")
            }}</v-card-subtitle>
            <form
              class="form-signin"
              :class="{ 'text-left': lng == 'en', 'text-right': lng == 'ar' }"
            >
              <div class="form-label-group">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                  v-model="email"
                  :class="[{ 'is-invalid': errorFor('email') }]"
                  autofocus
                />
                <label for="inputEmail">{{ $t("login.username") }}</label>
              </div>

              <div class="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  v-model="password"
                  :class="[{ 'is-invalid': errorFor('password') }]"
                  required
                />
                <v-errors :error="errorFor('email')"></v-errors>
                <label for="inputPassword">{{ $t("login.password") }}</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />

                <label class="custom-control-label" for="customCheck1">{{
                  $t("login.rememberMe")
                }}</label>
                <v-errors :error="errorFor('password')"></v-errors>
              </div>

              <span>
                {{ $t("login.downmessage") }}
                <router-link to="/register">{{
                  $t("login.register")
                }}</router-link>
              </span>
            </form>
          </v-card-text>
          <v-card-actions class="align-center justify-content-between">
            <v-col cols="3" class="p-0">
              <v-combobox
                :class="{ arabic: false }"
                solo
                item-color="green"
                v-model="lang"
                :items="langs"
                label="Language"
                hide-details
                prepend-inner-icon="mdi-translate"
                dense
                @change="changeLocale"
              ></v-combobox>
            </v-col>
            <v-spacer></v-spacer>

            <v-btn
              :loading="loading"
              :disabled="disabled"
              large
              class="ml-auto"
              color="success"
              type="submit"
              @click.prevent="login"
            >
              {{ $t("login.submit") }}
              <v-progress-circular
                v-if="loading"
                :size="50"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-snackbar
                v-model="snackbar"
                absolute

                >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    <i>mdi-close</i>
                    </v-btn>
                </template>
    </v-snackbar> -->
  </v-container>
</template>

<script>
/* eslint-no */
import validationErrors from "@/mixins/validationErrors";
import Logo from "@/components/Logo.vue";
import { mapGetters, mapActions } from "vuex";
import Notifications from "../../components/Notifications.vue";
export default {
  components: {
    logo: Logo,

    Notifications,
  },
  mixins: [validationErrors],
  data() {
    return {
      email: null,
      password: null,
      loading: false,
      disabled: false,
      snackbar: false,
      text: null,
      textType: "",
      langs: ["Ar", "En"],
      lang: "En",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["lng"]),
    validation() {
      return true; //this.email > 4 && this.userId.length < 13;
    },
    currentLang() {
      return this.lng;
    },
  },
  layout: "auth",
  head() {
    return {
      title: "Sign In",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    ...mapActions("setLang"),
    changeLocale() {
      //   console.dir(this.$root.$i18n.messages);
      //   console.dir(this.$root.$i18n.locale);
      this.$vuetify.lang.current = this.lang == "Ar" ? "ar" : "en";
      //   this.$vuetify.lang.current = this.lang == "En" ? "en" : "ar";
      this.$store.dispatch("changeLang", this.$vuetify.lang.current);
      this.$store.dispatch("configM/changeThemeRtl");

      this.$root.$i18n.locale = this.$vuetify.lang.current;
    },
    async login() {
      this.loading = true;
      this.disabled = true;
      let data = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("auth/login", data);
        await this.$store
          .dispatch("auth/user")
          .then((res) => {
            // console.log(res);
            this.loading = false;
            this.disabled = false;
            this.$router.push({ name: "home" });
            this.$store.dispatch(
              "notifications/pushSuccessNotify",
              "Welcome back " + res.user.name
            );
          })
          .catch((err) => {
            this.$store.dispatch("notifications/pushErrorNotify", err);
            console.log(err);
          });
      } catch (err) {
        console.log(err);
        this.loading = false;
        this.disabled = false;
        console.log(err);
        this.$store.dispatch("notifications/pushNotif", err);

        // this.$store.dispatch("validation/setErrors", data);
        // this.$swal.fire(data);
      }

      this.loading = false;
    },
  },
};
</script>

<style lang="scss" >
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

#card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  //   box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
}

#card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

#card-signin .card-body {
  padding: 2rem;
}
#logo {
  box-shadow:
  /* logo shadow */ 0px 0px 2px #5f5f5f,
    /* offset */ 0px 0px 0px 5px #ecf0f3, /*bottom right */ 8px 8px 15px #a7aaaf,
    /* top left */ -8px -8px 15px #ffffff;
}
.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
