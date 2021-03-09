<template>
  <v-col cols="12" md="10" sm="12">
    <v-card class="mb-4">
      <v-form ref="myForm" enctype="multipart/form-data">
        <v-card-title>
          <i class="text-25 i-Add-User"></i> |
          {{ id ? " Edit User: " + $route.params.name : " Add New User" }}
        </v-card-title>
        <v-card-text>
          <!-- {{form}}
                        <v-treeview open-all :data="$v.form" :options="{rootObjectKey: '$v.form', maxDepth: 2}"></v-treeview>
                        <code>{{$v}}</code> -->
          <v-row>
            <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
              <v-text-field
                ref="name"
                color="green"
                v-model="myForm.name"
                :rules="rules.name"
                :error-messages="errorMessages"
                label="Full Name"
                filled
                :dense="this.popup == 'true'"
                placeholder="User Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
              <v-text-field
                ref="email"
                v-model="myForm.email"
                :rules="rules.email"
                label="Email"
                color="green"
                :dense="this.popup == 'true'"
                placeholder="Email"
                filled
                counter="35"
                required
              ></v-text-field>
            </v-col>
            <template v-if="!this.popup">
              <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
                <v-text-field
                  ref="password"
                  v-model="myForm.password"
                  :rules="rules.password"
                  filled
                  :dense="this.popup == 'true'"
                  color="green"
                  label="Password"
                  placeholder="password"
                  :append-icon="togglePassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="!togglePassword ? 'text' : 'password'"
                  @click:append="togglePassword = !togglePassword"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
                <v-text-field
                  ref="passwordConfirm"
                  v-model="myForm.confirm_password"
                  :rules="rules.passwordConfirm"
                  filled
                  :dense="this.popup == 'true'"
                  color="green"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  :append-icon="
                    toggleConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'
                  "
                  :type="!toggleConfirmPassword ? 'text' : 'password'"
                  @click:append="toggleConfirmPassword = !toggleConfirmPassword"
                  required
                ></v-text-field>
              </v-col>
            </template>
            <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
              <v-text-field
                ref="phone"
                :dense="this.popup == 'true'"
                v-model="myForm.phone"
                :rules="rules.phone"
                filled
                label="Phone"
                color="green"
                placeholder="01x-xxxx-xxxx"
                append-icon="mdi-phone-in-talk"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
              <v-text-field
                ref="whatsapp"
                v-model="myForm.whatsapp"
                label="Whatsapp"
                filled
                :dense="this.popup == 'true'"
                color="green"
                placeholder="01x-xxxx-xxxx"
                append-icon="mdi-whatsapp"
              ></v-text-field>
            </v-col>
            <template v-if="!this.popup">
              <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
                <!-- <div class="custom-file"> -->
                <!-- <input class="custom-file-input" id="inputGroupFile02"  placeholder="Your Image"  name="photo" v-model="form.file" type="file"> -->
                <v-file-input
                  v-model="myForm.image"
                  color="green darken-4"
                  counter
                  :dense="this.popup == 'true'"
                  filled
                  label="Your Photo"
                  placeholder="Select your image"
                  prepend-icon="mdi-paperclip"
                  outlined
                  :show-size="1000"
                  ref="photo"
                >
                  <template v-slot:selection="{ index, text }">
                    <v-chip
                      v-if="index < 2"
                      color="green accent-4"
                      dark
                      label
                      small
                    >
                      {{ text }}
                    </v-chip>

                    <span
                      v-else-if="index === 2"
                      class="overline grey--text text--darken-3 mx-2"
                    >
                      +{{ files.length - 2 }} File(s)
                    </span>
                  </template>
                </v-file-input>
                <!-- <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02"><i class='fa fa-image'></i></label> -->
                <!-- </div> -->
                <!-- <input type="file" id="file" ref="photo" v-on:change="handleFileUpload()"/> -->
              </v-col>
              <v-col cols="12" md="6" sm="12" class="mb-3 py-0">
                <v-textarea
                  ref="biography"
                  v-model="myForm.biography"
                  class="mx-2"
                  rows="1"
                  color="green"
                  placeholder="About You"
                  aria-label="With textarea"
                  prepend-icon="mdi-comment"
                ></v-textarea>
              </v-col>
            </template>
            <v-col cols="12" sm="12" md="6" class="py-0">
              <v-select
                v-model="myForm.userRoles"
                :items="allRoles"
                small-chips
                dense
                filled
                color="green"
                outlined
                multiple
                label="Roles"
              >
              </v-select>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="py-0">
              <v-select
                v-model="myForm.userPermissions"
                :items="allPermissions"
                small-chips
                dense
                filled
                color="green"
                outlined
                multiple
                label="Permissions"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-checkbox
            ref="active"
            v-model="myForm.active"
            label="Active"
            color="success"
            hide-details
          ></v-checkbox>
          <v-spacer></v-spacer>
          <v-snackbar
            :timeout="2000"
            :value="submitStatus"
            absolute
            left
            :color="submitStatus === 'OK' ? 'success' : 'error'"
            shaped
            bottom
          >
            {{ id }}
            {{ $route.params.id }}
            <p class="typo__p" v-if="submitStatus === 'OK'">
              Thanks for your submission!
            </p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">
              Please fill the form correctly.
            </p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
          </v-snackbar>
          <v-btn
            v-if="id"
            class="btn btn-primary float-right"
            :small="this.popup == 'true'"
            @click="updateUser()"
          >
            Update User
          </v-btn>
          <v-btn v-else class="btn btn-primary float-right" @click="submit()">
            Add User
          </v-btn>
          <!-- type="submit" -->
        </v-card-actions>
      </v-form>
    </v-card>
  </v-col>
</template>

<script>
// function myFunction(value, index, array) {

// }
import breadcumb from "./../../../components/breadcumb";
import {
  required,
  sameAs,
  minLength,
  maxLength,
  between,
} from "vuelidate/lib/validators";

import { mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: Number | String,
      //required:true
    },
    name: {
      type: String,
    },
    popup: {
      type: Boolean | String,
    },
  },
  components: {
    breadcumb,
  },
  head() {
    return {
      title: "Adding User",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Main page for Gamma Dental Scan Radiology",
        },
      ],
    };
  },
  data() {
    const defaultForm = Object.freeze({
      name: null,
      email: null,
      password: null,
      confirm_password: null,
      whatsapp: null,
      biography: null,
      active: 0,
      phone: null,
      image: null,
      selected: "first",
      userPermissions: [],
      userRoles: [],
    });
    return {
      date: new Date(),
      errors: [],
      submitStatus: null,
      myForm: Object.assign({}, defaultForm),
      rules: {
        name: [(val) => (val || "").length > 0 || "This field is required"],
        email: [
          (email) => !!email || "This field is required",
          (email) =>
            (!!email && email.length <= 35) || "Email must be less than 35",
          (v) => !!(v || "").match(/@/) || "Please enter a valid email",
          (email) =>
            (!!email && email.length >= 5) || "Email must be more than 5",
          //   this.addressCheck(),
        ],
        length: (len) => (v) =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        phone: [(val) => (val || "").length > 0 || "This field is required"],
        password: [(val) => (val || "").length > 4 || "This field is required"],
        // password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        //   'Password must contain an upper case letter, a numeric character, and a special character',
        required: (v) => !!v || "This field is required",
      },
      togglePassword: true,
      toggleConfirmPassword: true,
      allPermissions: [],
      allRoles: [],
      errorMessages: "",
      formHasErrors: false,
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" },
      ],
    };
  },
  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  computed: {
    ...mapGetters({ usersAllRoles: ["users/allRoles"] }),
    ...mapGetters({ userAllPermissions: ["users/allPermissions"] }),
    /* getAllRoles(){
            this.allRoles.push(this.usersAllRoles);
      },
      getAllPermissions(){
           this.allPermissions.push(this.userAllPermissions);
      }, */
    textpassword() {
      return this.togglePassword ? "password" : "text";
    },
    textpasswordconfirm() {
      return this.toggleConfirmPassword ? "password" : "text";
    },
    formIsValid() {
      return (
        this.form.first &&
        this.form.last &&
        this.form.favoriteAnimal &&
        this.form.terms
      );
    },
  },
  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : "";

      return true;
    },

    handleFileUpload() {
      this.file = this.$refs.photo.files[0];
    },
    resetForm() {
      this.myForm = Object.assign({}, this.defaultForm);
      this.$refs.myForm.reset();
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.dir(this.$v);
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        let fa = Object.entries(this.myForm);
        fa.forEach((value) => {
          //    console.log(value)
          if (!Array.isArray(value[1])) {
            formData.append(value[0], value[1]);
          } else {
            value[1].forEach((valueb, index) => {
              formData.append(value[0] + "[]", valueb);
            });
          }
        });
        this.$store
          .dispatch("users/userRegister", formData)
          .then((res) => {
            console.log(res);
            this.submitStatus = "OK";
            this.afterSubmit();
          })
          .catch((err) => {
            console.log(err);
            this.$store.dispatch("notifications/pushNotif", err);
          });
      }
    },
    updateUser() {
      console.log("update User !");
      this.submitStatus = "PENDING";
      let fa = Object.entries(this.myForm);
      this.$store
        .dispatch("users/userUpdate", { id: this.id, formData: fa })
        .then((res) => {
          console.log(res);
          this.submitStatus = "OK";
          this.afterSubmit(res);
        })
        .catch((err) => {
          console.log(err);
          this.$store.dispatch("notifications/pushErrorNotify", err);
          this.$toasted
            .error("Error updating user", {
              theme: "bubble",
              position: "top-right",
              duration: 5000,
              className: "mytoast",
              type: "error",
              iconPack: "mdi",
              icon: {
                name: "eye-off",
                after: true,
              },
            })
            .goAway(3000);
        });
      //   }
    },
    afterSubmit(res) {
      this.resetForm();
      //   this.$store.dispatch("notifications/pushSuccessNotify", res.message);

      if (!this.popup) this.$router.push({ name: "users" });
      if (this.popup) {
        this.$emit("user", res.user);
        this.$emit("close", true);
      }
      this.$toasted
        .success("User Updated Successfully", {
          theme: "bubble",
          position: "top-right",
          duration: 5000,
          className: "mytoast",
          type: "success",
          iconPack: "mdi",
          icon: {
            name: "check",
            after: true,
          },
        })
        .goAway(3000);
    },
  },

  validations: {
    myForm: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      email: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(35),
        isUnique(value) {
          // standalone validator ideally should not assume a field is required
          if (value === "") return true;

          // simulate async call, fail for all logins with even length
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true); //typeof value === 'string' && value.length % 2 !== 0)
            }, 1500);
          });
        },
      },
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      confirm_password: {
        required,
        sameAsPassword: sameAs("password"),
      },
      whatsapp: {
        required,
        minLength: minLength(3),
        // between: between(6, 40)
        maxLength: maxLength(20),
      },
      // biography:{
      //     required,
      //     minLength: minLength(3),
      //     // between: between(6, 40)
      //     maxLength: maxLength(20)
      // },

      phone: {
        required,
        minLength: minLength(3),
        // between: between(6, 40)
        maxLength: maxLength(20),
        isUnique(value) {
          // standalone validator ideally should not assume a field is required
          if (value === "") return true;

          // simulate async call, fail for all logins with even length
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(typeof value === "string" && value.length % 2 !== 0);
            }, 1500);
          });
        },
      },
    },
  },

  created() {
    this.$store.dispatch("users/getRolesPermissions").then((res) => {
      this.allRoles = res.allRoles;

      this.allPermissions = res.allPermissions;
      console.log(res);
    });
    if (this.id) {
      this.$store
        .dispatch("users/getUserById", this.id)
        .then((res) => {
          console.log(res);
          //   this.myForm = res.user;

          this.myForm.name = res.user.name;
          this.myForm.email = res.user.email;
          this.myForm.password = null;
          this.myForm.confirm_password = null;
          this.myForm.whatsapp = res.user.whatsapp;
          this.myForm.biography = null;
          this.myForm.active = res.user.active;
          this.myForm.phone = res.user.phone;
          // this.myForm.//=photo:res.user.email
          this.myForm.image = null;
          this.myForm.selected = "first";

          this.myForm.userRoles = res.roles;
          this.myForm.userPermissions = res.permissions;
          //   this.$v.myForm = this.myForm;
          console.log(this.myForm);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
    let tooltip = document.createElement("script");
    tooltip.setAttribute("src", "/js/tooltip.script.min.js");
    tooltip.defer = true;
    document.head.appendChild(tooltip);
    // let validation = document.createElement('script')
    //     validation.setAttribute('src', '/js/form.validation.script.min.js')
    //     validation.defer=true
    //     document.head.appendChild(validation)
  },
};
</script>

<style lang="scss" scoped>
.input-group-text {
  max-height: 34px;
}
</style>
