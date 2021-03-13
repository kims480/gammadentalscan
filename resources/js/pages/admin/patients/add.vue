<template>
  <div class="col-md-12 p-0">
    <div class="card mb-4 p-0">
      <div class="card-body">
        <div class="card-title">
          <i class="text-25 i-Add-User"></i> |
          {{
            $route.params.id
              ? "Edit Patient " + $route.params.name
              : "Add New Patient"
          }}
        </div>
        <form @submit.prevent="submit" method="post">
          <!-- enctype="multipart/form-data" -->
          <div class="row">
            <div
              class="input-group col-md-6 col-sm-12 mb-3"
              :class="{ 'form-group--error': $v.myForm.name_en.$error }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-user-circle"></i
                ></span>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="First Name (*)"
                :class="{
                  'is-invalid': $v.myForm.name_en.$error,
                  'is-valid': !$v.myForm.name_en.$invalid,
                }"
                v-model.trim="$v.myForm.name_en.$model"
                @input="setNameEn($event.target.value)"
              />

              <div v-if="!$v.myForm.name_en.$invalid" class="valid-feedback">
                Ok!
              </div>

              <div class="invalid-feedback">
                <span v-if="!$v.myForm.name_en.required"
                  >First Name is required</span
                >
                <span v-if="!$v.myForm.name_en.minLength"
                  >First Name must be more than
                  {{ $v.myForm.name_en.$params.minLength.min }} letters</span
                >
                <span v-if="!$v.myForm.name_en.maxLength"
                  >First Name must be less than
                  {{ $v.myForm.name_en.$params.maxLength.max }} letters</span
                >
              </div>
              <!-- <v-treeview :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></v-treeview> -->
            </div>
            <div
              class="input-group col-md-6 col-sm-12 mb-3"
              :class="{ 'form-group--error': $v.myForm.name_ar.$error }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-user-circle"></i
                ></span>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="Last Name"
                :class="{
                  'is-invalid': $v.myForm.name_ar.$error,
                  'is-valid': !$v.myForm.name_ar.$invalid,
                }"
                v-model.trim="$v.myForm.name_ar.$model"
                @input="setNameAr($event.target.value)"
              />

              <div class="invalid-feedback">
                <!--  <span v-if="!$v.myForm.name_ar.required">name_ar is required</span> -->
                <span v-if="!$v.myForm.name_ar.minLength"
                  >Last name must be more than
                  {{ $v.myForm.name_ar.$params.minLength.min }} letters</span
                >
                <span v-if="!$v.myForm.name_ar.maxLength"
                  >Last name must be less than
                  {{ $v.myForm.name_ar.$params.maxLength.max }} letters</span
                >
              </div>
              <!-- <v-treeview :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></v-treeview> -->
            </div>

            <div
              class="input-group col-md-6 col-sm-12 mb-3"
              :class="{
                'form-group--error': $v.myForm.email.$error,
                'form-group--loading': $v.myForm.email.$pending,
              }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="fa fa-envelope"></i
                ></span>
              </div>
              <input
                class="form-control"
                type="text"
                placeholder="Patient's email"
                aria-label="User Email"
                aria-describedby="basic-addon2"
                :class="{
                  'is-invalid': $v.myForm.email.$error || !uniqueEmail,
                  'is-valid': !$v.myForm.email.$invalid,
                }"
                v-model="myForm.email"
                @input="setemail($event.target.value)"
                @blur="isUniqueMail(myForm.email)"
              />
              <div v-if="!$v.myForm.email.$invalid" class="input-group-append">
                <span class="input-group-text" id="basic-addon2"
                  ><i class="fa fa-check" aria-hidden="true"></i>
                </span>
              </div>

              <div class="invalid-feedback" v-if="!uniqueEmail">
                <span>{{
                  //!$v.myForm.email.isUnique
                  uniqueEmailMessage
                }}</span>
              </div>
              <div class="invalid-feedback">
                <!--                         <span v-if="!$v.myForm.email.required">email is required</span>
 -->
                <span v-if="!$v.myForm.email.minLength"
                  >email must be more than
                  {{ $v.myForm.email.$params.minLength.min }} letters</span
                >
                <span v-if="!$v.myForm.email.maxLength"
                  >email must be less than
                  {{ $v.myForm.email.$params.maxLength.max }} letters</span
                >
              </div>
              <!-- <div class="invalid-valid-feedback"> Please choose a username.</div> -->
              <!-- <div class="invalid-invalid-feedback"> Please choose a username.</div> -->
            </div>

            <div
              class="input-group col-md-6 col-sm-12 mb-3"
              :class="{
                'form-group--error': $v.myForm.telephone.$error,
                'form-group--loading': $v.myForm.telephone.$pending,
              }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="fa fa-phone"></i
                ></span>
              </div>

              <input
                class="form-control"
                type="tel"
                :class="{
                  'is-invalid': $v.myForm.telephone.$error,
                  'is-valid': !$v.myForm.telephone.$invalid,
                }"
                v-model.trim="$v.myForm.telephone.$model"
                @input="setTelephone($event.target.value)"
                @blur="isUniquePhone(myForm.telephone)"
                placeholder="Phone(*)"
                aria-label="Your Phone(*)"
              />
              <div
                v-if="!$v.myForm.telephone.$invalid"
                class="input-group-append"
              >
                <span class="input-group-text" id="basic-addon2">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </span>
              </div>
              <div v-if="!$v.myForm.telephone.$invalid" class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback" v-if="!uniquePhone">
                <span>{{
                  //!$v.myForm.email.isUnique
                  uniquePhoneMessage
                }}</span>
              </div>
              <div class="invalid-feedback">
                <span v-if="!$v.myForm.telephone.required"
                  >telephone is required</span
                >
                <span v-if="!$v.myForm.telephone.minLength"
                  >telephone must be more than
                  {{ $v.myForm.telephone.$params.minLength.min }} letters</span
                >
                <span v-if="!$v.myForm.telephone.maxLength"
                  >telephone must be less than
                  {{ $v.myForm.telephone.$params.maxLength.max }} letters</span
                >
              </div>
            </div>
            <div
              class="input-group col-md-6 col-sm-12 mb-3"
              :class="{ 'form-group--error': $v.myForm.whatsapp.$error }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="fa fa-whatsapp"></i
                ></span>
              </div>
              <input
                class="form-control"
                type="tel"
                :class="{
                  'is-invalid': $v.myForm.whatsapp.$error,
                  'is-valid': !$v.myForm.whatsapp.$invalid,
                }"
                v-model.trim="$v.myForm.whatsapp.$model"
                @input="setwhatsapp($event.target.value)"
                placeholder="Your WhatsApp"
                aria-label="Whatsapp"
              />

              <div class="invalid-feedback">
                <!--                         <span v-if="!$v.myForm.whatsapp.required">whatsapp is required</span>
 -->
                <span v-if="!$v.myForm.whatsapp.minLength"
                  >whatsapp must be more than
                  {{ $v.myForm.whatsapp.$params.minLength.min }} letters</span
                >
                <span v-if="!$v.myForm.whatsapp.maxLength"
                  >whatsapp must be less than
                  {{ $v.myForm.whatsapp.$params.maxLength.max }} letters</span
                >
              </div>
            </div>
            <div class="input-group col-md-6 col-sm-12 mb-3">
              <!-- <v-menu
                ref="menu"
                v-model="dateView"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="myForm.dob"
                    label="Birthday date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="myForm.dob"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu> -->

              <v-dialog
                ref="dialog"
                v-model="dateView"
                :return-value.sync="myForm.dob"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="myForm.dob"
                    label="Date of Birth (*)"
                    prepend-icon="mdi-calendar"
                    readonly
                    required
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="myForm.dob"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="dateView = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(myForm.dob)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
            <div
              class="input-group col-md-6 col-sm-12 mb-3"
              :class="{ 'form-group--error': $v.myForm.gender.$error }"
            >
              <label class="radio radio-success">
                <input type="radio" v-model="myForm.gender" value="Male" /><span
                  >Male</span
                ><span class="checkmark"></span>
              </label>
              <label class="radio radio-danger">
                <input
                  type="radio"
                  v-model="myForm.gender"
                  value="Female"
                /><span>Female</span><span class="checkmark"></span>
              </label>
            </div>
          </div>
          <v-card-actions>
            <span>(*) Is required Fields</span>
            <v-spacer></v-spacer>
            <v-snackbar
              :timeout="2000"
              :value="submitStatus"
              absolute
              left
              :color="submitStatus === 'OK' ? 'success' : 'error'"
              shaped
              height="25"
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
            </v-snackbar>
            <v-btn
              v-if="id"
              class="btn btn-primary float-right"
              :small="this.popup == 'true'"
              @click="updatePatient()"
            >
              Update patient
            </v-btn>
            <v-btn v-else class="btn btn-primary float-right" @click="submit()">
              Add Patient
            </v-btn>
            <!-- type="submit" -->
          </v-card-actions>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import breadcumb from "./../../../components/breadcumb";
import {
  required,
  sameAs,
  minLength,
  maxLength,
  between,
} from "vuelidate/lib/validators";

import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: Number | String,
    },
    name: {
      type: String,
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
      name_en: null,
      email: null,
      name_ar: null,
      whatsapp: null,
      dob: null,
      gender: 1,
      telephone: null,
    });
    return {
      date: new Date(),
      errors: [],
      popup: false,
      submitStatus: null,
      dateView: false,
      uniqueEmail: true,
      uniqueEmailmessage: null,
      uniquePhone: true,
      uniquePhoneMessage: null,
      myForm: Object.assign({}, defaultForm),
    };
  },

  computed: {
    // ...mapGetters({ usersAllRoles: ["users/allRoles"] }),
    // ...mapGetters({ userAllPermissions: ["users/allPermissions"] }),
    textpassword() {
      return this.togglePassword ? "password" : "text";
    },
    textpasswordconfirm() {
      return this.toggleConfirmPassword ? "password" : "text";
    },
    dateText() {
      return this.myForm.dob;
    },
  },
  methods: {
    setNameEn(value) {
      this.myForm.name_en = value;
      this.$v.myForm.name_en.$touch();
    },
    setNameAr(value) {
      this.myForm.name_ar = value;
      this.$v.myForm.name_ar.$touch();
    },
    setemail(value) {
      this.myForm.email = value;
      this.$v.myForm.email.$touch();
    },
    setTelephone(value) {
      this.myForm.phone = value;
      this.$v.myForm.telephone.$touch();
    },
    setwhatsapp(value) {
      this.myForm.whatsapp = value;
      this.$v.myForm.whatsapp.$touch();
    },
    setGender(value) {
      this.myForm.gender = value;
      this.$v.myForm.gender.$touch();
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    setFormData(fa) {
      let formData = new FormData();
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
      return formData;
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        let fa = Object.entries(this.myForm);
        let formData = this.setFormData(fa);
        console.log(formData);
        this.$store
          .dispatch("patient/addPatient", formData)
          .then((res) => {
            console.log(res);
            this.submitStatus = "OK";
            this.myForm = Object.assign({}, this.defaultForm);

            this.$router.push({ name: "patients" });
          })
          .catch((err) => {
            console.log(err);
            this.$store.dispatch("notifications/pushNotif", err);
          });
      }
    },
    updatePatient() {
      console.log("update Patient !");
      this.submitStatus = "PENDING";
      let fa = Object.entries(this.myForm);

      this.$store
        .dispatch("patient/patientUpdate", { id: this.id, formData: fa })
        .then((res) => {
          //   console.log(res);
          this.submitStatus = "OK";
          this.afterSubmit(res);
        })
        .catch((err) => {
          console.log(err);

          this.$toasted
            .error("Error updating Patient Data", {
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
    resetForm() {
      return;
    },
    afterSubmit(res) {
      this.resetForm();
      if (!this.popup) this.$router.push({ name: "patients" });
      if (this.popup) {
        this.$emit("patient", res.patient);
        this.$emit("close", true);
      }
      this.$toasted
        .success("Patient Updated Successfully", {
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
    async isUniqueMail(value) {
      // standalone validator ideally should not assume a field is required
      if (value == "" || value == null) return true;

      await this.$store
        .dispatch("patient/checkPatientMail", value)
        .then((res) => {
          this.uniqueEmail = res.success;
          this.uniqueEmailMessage = res.message;
          //   console.log(this.$v.myForm.email.$invalid); // = res.success;
          //   this.$v.myForm.email.$invalid = !this.uniqueEmail;
          //   console.log(this.$v.myForm.email.$invalid); // = res.success;
        })
        .catch((err) => {
          return err;
        });
    },
    async isUniquePhone(value) {
      // standalone validator ideally should not assume a field is required
      if (value == "" || value == null) return (this.uniquePhone = false);

      await this.$store
        .dispatch("patient/checkPatientPhone", value)
        .then((res) => {
          this.uniquePhone = res.success;
          this.uniquePhoneMessage = res.message;
          //   console.log(this.$v.myForm.phone.$invalid); // = res.success;
          //   this.$v.myForm.email.$invalid = !this.uniquePhone;
          //   console.log(this.$v.myForm.phone.$invalid); // = res.success;
        })
        .catch((err) => {
          return err;
        });
    },
  },

  validations: {
    myForm: {
      name_en: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(30),
      },
      name_ar: {
        minLength: minLength(3),
        maxLength: maxLength(30),
      },
      email: {
        minLength: minLength(5),
        maxLength: maxLength(35),
        isUnique(value) {
          // standalone validator ideally should not assume a field is required
          if (value == "" || value == null) return true;
          return this.uniqueEmail;
          //   return new Promise((resolve, reject) => {
          //     this.$store
          //       .dispatch("patient/checkPatientMail", value)
          //       .then((res) => {
          //         this.uniqueEmail = res.success;
          //         this.uniqueEmailMessage = res.message;
          //         this.uniqueEmail
          //           ? resolve(this.uniqueEmail)
          //           : reject(this.uniqueEmail); // = res.success;
          //       })
          //       .catch((err) => {
          //         reject(this.uniqueEmail);
          //         return err;
          //       });
          //   });
        },
      },

      whatsapp: {
        // required,
        minLength: minLength(3),
        // between: between(6, 40)
        maxLength: maxLength(20),
      },
      gender: {},
      telephone: {
        required,
        minLength: minLength(3),
        // between: between(6, 40)
        maxLength: maxLength(20),
        isUnique(value) {
          // standalone validator ideally should not assume a field is required

          if (value == "" || value == null) return true;
          return this.uniquePhone;
          // simulate async call, fail for all logins with even length
          //   return new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       resolve(typeof value === "string" && value.length % 2 !== 0);
          //     }, 1500);
          //   });
        },
      },
    },
  },
  created() {
    if (this.id) {
      this.$store
        .dispatch("patient/getPatientById", this.id)
        .then((res) => {
          console.log(res);
          this.myForm = res.patient;
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
  },
  watch: {
    dateView(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
};
</script>

<style lang="scss" >
.input-group-text {
  max-height: 34px;
}
.col-md-6.col-sm-12.mb-3 {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
