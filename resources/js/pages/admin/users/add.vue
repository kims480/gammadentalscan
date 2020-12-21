<template>
<div class="col-md-12">
    <div class="card mb-4">
        <div class="card-body">
            <div class="card-title"><i class="text-25 i-Add-User"></i> | Add New User</div>
            <form  @submit.prevent="submit"
                        method="post">
            <div class="row">
                <div class="input-group col-md-6 col-sm-12 mb-3"  :class="{ 'form-group--error': $v.name.$error }">
                    <div class="input-group-prepend"><span class="input-group-text " id="basic-addon1"><i class="fa fa-user-circle"></i></span></div>
                    <input class="form-control" type="text" placeholder="Username"
                    :class="{'is-invalid':$v.name.$error,'is-valid':!$v.name.$invalid}"
                    v-model.trim="$v.name.$model"
                    @input="setName($event.target.value)" >

                    <div v-if="!$v.name.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.name.required">Name is required</span>
                        <span v-if="!$v.name.minLength">Name must be more than {{$v.name.$params.minLength.min}} letters</span>
                        <span v-if="!$v.name.maxLength">Name must be less than {{$v.name.$params.maxLength.max}} letters</span>
                    </div>
                    <!-- <v-treeview :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></v-treeview> -->

                </div>

                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.email.$error , 'form-group--loading': $v.email.$pending}">
                    <input class="form-control" type="text"  placeholder="Recipient's email"
                     aria-label="User Email" aria-describedby="basic-addon2"
                     :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}"
                    v-model.trim="$v.email.$model"
                    @input="setemail($event.target.value)" >
                    <div class="input-group-append"><span class="input-group-text" id="basic-addon2"><i class="fa fa-envelope"></i></span></div>
                    <div v-if="!$v.email.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.email.required">email is required</span>
                        <span v-if="!$v.email.minLength">email must be more than {{$v.email.$params.minLength.min}} letters</span>
                        <span v-if="!$v.email.maxLength">email must be less than {{$v.email.$params.maxLength.max}} letters</span>
                        <span v-if="!$v.email.isUnique">this email already exist</span>
                    </div>
                    <!-- <div class="invalid-valid-feedback"> Please choose a username.</div> -->
                    <!-- <div class="invalid-invalid-feedback"> Please choose a username.</div> -->
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.password.$error }">
                    <input class="form-control" :type="textpassword"
                    :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}"
                    v-model.trim="$v.password.$model"
                    @input="setpassword($event.target.value)"  placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                    <div class="input-group-append"><span class="input-group-text" id="basic-addon2"><i class="fa" :class="{'fa-eye':!togglePassword,'fa-eye-slash':togglePassword}" @click="togglePassword=!togglePassword"></i></span></div>
                    <div v-if="!$v.password.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.password.required">password is required</span>
                        <span v-if="!$v.password.minLength">password must be more than {{$v.password.$params.minLength.min}} letters</span>
                        <span v-if="!$v.password.maxLength">password must be less than {{$v.password.$params.maxLength.max}} letters</span>
                    </div>
                    <!-- <div class="invalid-valid-feedback"> Please choose a username.</div> -->
                    <!-- <div class="invalid-invalid-feedback"> Please choose a username.</div> -->
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.confirm_password.$error }">
                    <input class="form-control" :type="textpasswordconfirm"
                    :class="{'is-invalid':$v.confirm_password.$error,'is-valid':!$v.confirm_password.$invalid}"
                    v-model.trim="$v.confirm_password.$model"
                    @input="setconfirm_password($event.target.value)"  placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon2">
                    <div class="input-group-append"><span class="input-group-text" id="basic-addon2"><i class="fa" :class="{'fa-eye':!toggleConfirmPassword,'fa-eye-slash':toggleConfirmPassword}" @click="toggleConfirmPassword=!toggleConfirmPassword"></i></span></div>
                    <div v-if="!$v.confirm_password.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.confirm_password.required">Password Confirmation is required</span>
                        <span v-if="!$v.confirm_password.sameAsPassword">Password Confirmation must be Same as Password</span>
                    </div>
                    <!-- <div class="invalid-valid-feedback"> Please choose a username.</div> -->
                    <!-- <div class="invalid-invalid-feedback"> Please choose a username.</div> -->
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.phone.$error , 'form-group--loading': $v.phone.$pending}">
                    <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-phone"></i></span></div>
                    <input class="form-control" type="text" :class="{'is-invalid':$v.phone.$error,'is-valid':!$v.phone.$invalid}"
                    v-model.trim="$v.phone.$model"
                    @input="setemail($event.target.value)" placeholder="Phone"  aria-label="Your Phone">
                    <div v-if="!$v.phone.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.phone.required">phone is required</span>
                        <span v-if="!$v.phone.minLength">phone must be more than {{$v.phone.$params.minLength.min}} letters</span>
                        <span v-if="!$v.phone.maxLength">phone must be less than {{$v.phone.$params.maxLength.max}} letters</span>
                    </div>
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.whatsapp.$error }">
                    <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-whatsapp"></i></span></div>
                    <input class="form-control" type="text" :class="{'is-invalid':$v.whatsapp.$error,'is-valid':!$v.whatsapp.$invalid}"
                    v-model.trim="$v.whatsapp.$model"
                    @input="setemail($event.target.value)" placeholder="Your WhatsApp"  aria-label="Whatsapp">
                    <div v-if="!$v.whatsapp.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.whatsapp.required">whatsapp is required</span>
                        <span v-if="!$v.whatsapp.minLength">whatsapp must be more than {{$v.whatsapp.$params.minLength.min}} letters</span>
                        <span v-if="!$v.whatsapp.maxLength">whatsapp must be less than {{$v.whatsapp.$params.maxLength.max}} letters</span>
                    </div>
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3">
                    <div class="custom-file">
                        <input class="custom-file-input" id="inputGroupFile02"  placeholder="Your Image"  name="photo" type="file">
                        <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02"><i class='fa fa-image'></i></label>
                    </div>

                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3">
                    <label class="switch pr-5 switch-success mr-3"><span data-trigger="hover" type="button" data-toggle="tooltip" data-placement="right" title="" data-html="true"  data-original-title="If <i style='color:red;font-weigh:bold'>De-Activated!</i> user will be holded and not able to handel any process">Active</span>
                        <input type="checkbox" v-model="active"  checked="checked"><span class="slider"></span>
                    </label>
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3">
                    <div class="input-group-prepend"><span class="input-group-text"><i class='fa fa-book'></i></span></div>
                    <textarea class="form-control" v-model="biography"  placeholder="About You" aria-label="With textarea"></textarea>
                </div>

            </div>
            <v-col cols="12" sm="6">
                <v-select
                    v-model="userRoles"
                    :items="roles"
                    chips
                    multiple
                    :append-icon="appendIcon ? 'mdi-plus' : ''"
                    :prepend-icon="prependIcon ? 'mdi-minus' : ''"
                    label="Roles"
                  >
                    <v-icon v-if="appendSlot" slot="append" color="green">mdi-plus</v-icon>
                    <v-icon v-if="prependSlot" slot="prepend" color="red">mdi-minus</v-icon>
                    <v-icon v-if="appendItemSlot" slot="append-item">mdi-contain-end</v-icon>
                    <v-icon v-if="prependItemSlot" slot="prepend-item">mdi-contain-start</v-icon>

                  </v-select>
              </v-col>
            <button class="btn btn-primary float-right" type="submit">Add user</button>
                <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
            </form>
        </div>
    </div>
</div>

</template>

<script>
import breadcumb from "./../../../components/breadcumb";
import { required, sameAs,minLength,maxLength, between } from 'vuelidate/lib/validators'

import {mapActions,mapGetters} from 'vuex'
export default {
  components: {
    breadcumb
  },
  head() {
    return {
      title: "Adding User",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Main page for Gamma Dental Scan Radiology"
        }
      ]
    };
  },
  data() {
    return {
      date: new Date(),
      errors:[],
        submitStatus: null,
        name: null,
        email: null,
        password:null,
        confirm_password:null,
        whatsapp:null,
        biography:null,
        active:0,
        phone: null,
        photo:null,
        togglePassword:true,
        toggleConfirmPassword:true,
      selected: "first",
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" }
      ]
    };
  },

  computed:{
      allRoles:{
          ...mapGetters('users/allRoles')
      },
      allPermissions:{
          ...mapGetters('users/allPermissions')
      },
      textpassword(){
          return this.togglePassword ? 'password':'text'
      },
      textpasswordconfirm(){
          return this.toggleConfirmPassword ? 'password':'text'
      }
  },
  methods:{
    //   getRoles(){
    //       this.$store.dispatch('users/allRoles')
    //     },
    //   getPermissions(){
    //       this.$store.dispatch('users/allPermission')
    //     },
    //   getCurrentRoles(){
    //         this.$store.dispatch('users/currentRoles')
    //     },
    //   getCurrentPermissions(){
    //         this.$store.dispatch('users/currentPermissions')
    //     },
     setName(value) {
      this.name = value
      this.$v.name.$touch()
    },
     setemail(value) {
      this.name = value
      this.$v.email.$touch()
    },
     setpassword(value) {
      this.password = value
      this.$v.password.$touch()
    },
     setconfirm_password(value) {
      this.confirm_password = value
      this.$v.confirm_password.$touch()
    },
     setphone(value) {
      this.phone = value
      this.$v.phone.$touch()
    },
     setwhatsapp(value) {
      this.whatsapp = value
      this.$v.whatsapp.$touch()
    },
    submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.dir(this.$v)
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here

                this.submitStatus = 'PENDING'
                setTimeout(() => {
                this.submitStatus = 'OK'
                }, 1000)
            }

        },
  },

  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
    },
    email: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
        isUnique(value) {
        // standalone validator ideally should not assume a field is required
        if (value === '') return true

        // simulate async call, fail for all logins with even length
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(typeof value === 'string' && value.length % 2 !== 0)
          }, 1500)
        })
      }
    },
    password:{
        required,
        minLength: minLength(3),
        maxLength: maxLength(20)
    },
    confirm_password:{
        required,
        sameAsPassword: sameAs('password')
    },
    whatsapp:{
        required,
        minLength: minLength(3),
        // between: between(6, 40)
        maxLength: maxLength(20)
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
        if (value === '') return true

        // simulate async call, fail for all logins with even length
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(typeof value === 'string' && value.length % 2 !== 0)
          }, 1500)
        })
      }
    },
  },
    mounted(){

        let tooltip = document.createElement('script')
            tooltip.setAttribute('src', '/js/tooltip.script.min.js')
            tooltip.defer=true
            document.head.appendChild(tooltip)
        // let validation = document.createElement('script')
        //     validation.setAttribute('src', '/js/form.validation.script.min.js')
        //     validation.defer=true
        //     document.head.appendChild(validation)
    }
};
</script>

<style lang="scss" scoped></style>
