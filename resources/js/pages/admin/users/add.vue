<template>

<div class="col-md-12">
    <div class="card mb-4">
        <div class="card-body">
            <div class="card-title"><i class="text-25 i-Add-User"></i> | {{$route.params.id? ' Edit User: '+$route.params.name:' Add New User'}}</div>
            <form  @submit.prevent="submit"
                        method="post" enctype="multipart/form-data">
                        <!-- {{form}}
                        <v-treeview open-all :data="$v.form" :options="{rootObjectKey: '$v.form', maxDepth: 2}"></v-treeview>
                        <code>{{$v}}</code> -->
            <div class="row">
                <div class="input-group col-md-6 col-sm-12 mb-3"  :class="{ 'form-group--error': $v.myForm.name.$error }">
                    <div class="input-group-prepend"><span class="input-group-text " id="basic-addon1"><i class="fa fa-user-circle"></i></span></div>
                    <input class="form-control" type="text" placeholder="Username"
                    :class="{'is-invalid':$v.myForm.name.$error,'is-valid':!$v.myForm.name.$invalid}"
                    v-model.trim="$v.myForm.name.$model"
                    @input="setName($event.target.value)" >

                    <div v-if="!$v.myForm.name.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.name.required">Name is required</span>
                        <span v-if="!$v.myForm.name.minLength">Name must be more than {{$v.myForm.name.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.name.maxLength">Name must be less than {{$v.myForm.name.$params.maxLength.max}} letters</span>
                    </div>
                    <!-- <v-treeview :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></v-treeview> -->

                </div>

                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.myForm.email.$error , 'form-group--loading': $v.myForm.email.$pending}">
                    <input class="form-control" type="text"  placeholder="Recipient's email"
                     aria-label="User Email" aria-describedby="basic-addon2"
                     :class="{'is-invalid':$v.myForm.email.$error,'is-valid':!$v.myForm.email.$invalid}"
                    v-model="myForm.email"
                    @input="setemail($event.target.value)" >
                    <div class="input-group-append"><span class="input-group-text" id="basic-addon2"><i class="fa fa-envelope"></i></span></div>
                    <div v-if="!$v.myForm.email.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.email.required">email is required</span>
                        <span v-if="!$v.myForm.email.minLength">email must be more than {{$v.myForm.email.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.email.maxLength">email must be less than {{$v.myForm.email.$params.maxLength.max}} letters</span>
                        <span v-if="!$v.myForm.email.isUnique">this email already exist</span>
                    </div>
                    <!-- <div class="invalid-valid-feedback"> Please choose a username.</div> -->
                    <!-- <div class="invalid-invalid-feedback"> Please choose a username.</div> -->
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.myForm.password.$error }">
                    <input class="form-control" :type="textpassword"
                    :class="{'is-invalid':$v.myForm.password.$error,'is-valid':!$v.myForm.password.$invalid}"
                    v-model.trim="$v.myForm.password.$model"
                    @input="setpassword($event.target.value)"  placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                    <div class="input-group-append"><span class="input-group-text" id="basic-addon2"><i class="fa" :class="{'fa-eye':!togglePassword,'fa-eye-slash':togglePassword}" @click="togglePassword=!togglePassword"></i></span></div>
                    <div v-if="!$v.myForm.password.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.password.required">password is required</span>
                        <span v-if="!$v.myForm.password.minLength">password must be more than {{$v.myForm.password.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.password.maxLength">password must be less than {{$v.myForm.password.$params.maxLength.max}} letters</span>
                    </div>
                    <!-- <div class="invalid-valid-feedback"> Please choose a username.</div> -->
                    <!-- <div class="invalid-invalid-feedback"> Please choose a username.</div> -->
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.myForm.confirm_password.$error }">
                    <input class="form-control" :type="textpasswordconfirm"
                    :class="{'is-invalid':$v.myForm.confirm_password.$error,'is-valid':!$v.myForm.confirm_password.$invalid}"
                    v-model.trim="$v.myForm.confirm_password.$model"
                    @input="setconfirm_password($event.target.value)"  placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon2">
                    <div class="input-group-append"><span class="input-group-text" id="basic-addon2"><i class="fa" :class="{'fa-eye':!toggleConfirmPassword,'fa-eye-slash':toggleConfirmPassword}" @click="toggleConfirmPassword=!toggleConfirmPassword"></i></span></div>
                    <div v-if="!$v.myForm.confirm_password.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.confirm_password.required">Password Confirmation is required</span>
                        <span v-if="!$v.myForm.confirm_password.sameAsPassword">Password Confirmation must be Same as Password</span>
                    </div>
                    <!-- <div class="invalid-valid-feedback"> Please choose a username.</div> -->
                    <!-- <div class="invalid-invalid-feedback"> Please choose a username.</div> -->
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.myForm.phone.$error , 'form-group--loading': $v.myForm.phone.$pending}">
                    <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-phone"></i></span></div>
                    <input class="form-control" type="text" :class="{'is-invalid':$v.myForm.phone.$error,'is-valid':!$v.myForm.phone.$invalid}"
                    v-model.trim="$v.myForm.phone.$model"
                    @input="setphone($event.target.value)" placeholder="Phone"  aria-label="Your Phone">
                    <div v-if="!$v.myForm.phone.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.phone.required">phone is required</span>
                        <span v-if="!$v.myForm.phone.minLength">phone must be more than {{$v.myForm.phone.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.phone.maxLength">phone must be less than {{$v.myForm.phone.$params.maxLength.max}} letters</span>
                    </div>
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.myForm.whatsapp.$error }">
                    <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-whatsapp"></i></span></div>
                    <input class="form-control" type="text" :class="{'is-invalid':$v.myForm.whatsapp.$error,'is-valid':!$v.myForm.whatsapp.$invalid}"
                    v-model.trim="$v.myForm.whatsapp.$model"
                    @input="setwhatsapp($event.target.value)" placeholder="Your WhatsApp"  aria-label="Whatsapp">
                    <div v-if="!$v.myForm.whatsapp.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.whatsapp.required">whatsapp is required</span>
                        <span v-if="!$v.myForm.whatsapp.minLength">whatsapp must be more than {{$v.myForm.whatsapp.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.whatsapp.maxLength">whatsapp must be less than {{$v.myForm.whatsapp.$params.maxLength.max}} letters</span>
                    </div>
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3">
                    <!-- <div class="custom-file"> -->
                        <!-- <input class="custom-file-input" id="inputGroupFile02"  placeholder="Your Image"  name="photo" v-model="form.file" type="file"> -->
                        <v-file-input
                                    v-model="myForm.image"
                                    color="green accent-4"
                                    counter
                                    label="Your Photo"
                                    placeholder="Select your image"
                                    prepend-icon="mdi-paperclip"
                                    outlined
                                    :show-size="1000"
                                    ref="file"
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
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3">
                    <label class="switch pr-5 switch-success mr-3"><span data-trigger="hover" type="button" data-toggle="tooltip" data-placement="right" title="" data-html="true"  data-original-title="If <i style='color:red;font-weigh:bold'>De-Activated!</i> user will be holded and not able to handel any process">Active</span>
                        <input type="checkbox" v-model="myForm.active" value="1" checked="checked"><span class="slider"></span>
                    </label>
                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3">
                    <div class="input-group-prepend"><span class="input-group-text"><i class='fa fa-book'></i></span></div>
                    <textarea class="form-control" v-model="myForm.biography"  placeholder="About You" aria-label="With textarea"></textarea>
                </div>

            </div>
            <v-col cols="12" sm="6">
                <v-select
                    v-model="myForm.userRoles"
                    :items="allRoles"
                    chips
                    multiple

                    label="Roles"
                  >


                  </v-select>
                <v-select
                    v-model="myForm.userPermissions"
                    :items="allPermissions"
                    chips
                    multiple

                    label="Permissions"
                  >


                  </v-select>
              </v-col>
            <button class="btn btn-primary float-right" type="submit">{{$route.params.id ? 'Update User': 'Add User' }}</button>
                <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
            </form>
        </div>
    </div>
</div>

</template>

<script>
// function myFunction(value, index, array) {

// }
import breadcumb from "./../../../components/breadcumb";
import { required, sameAs,minLength,maxLength, between } from 'vuelidate/lib/validators'

import {mapActions,mapGetters} from 'vuex'
export default {
    props:{
        id:{
            type:Number | String,
            //required:true
        },
        name:{
            type:String
        }
    },
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
      myForm:{
        name: null,
        email: null,
        password:null,
        confirm_password:null,
        whatsapp:null,
        biography:null,
        active:0,
        phone: null,
        // photo:null,
        image:null,
        selected: "first",
        userPermissions:[],
        userRoles:[],
      },
    //   file:'',
       togglePassword:true,
        toggleConfirmPassword:true,
      allPermissions:[],
      allRoles:[],
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" }
      ]
    };
  },

  computed:{
      ...mapGetters({'usersAllRoles':['users/allRoles']}),...mapGetters({'userAllPermissions':['users/allPermissions']}),
        /* getAllRoles(){
            this.allRoles.push(this.usersAllRoles);
      },
      getAllPermissions(){
           this.allPermissions.push(this.userAllPermissions);
      }, */
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
         this.myForm.name = value
         this.$v.myForm.name.$touch()
    },
     setemail(value) {
      this.myForm.email = value
      this.$v.myForm.email.$touch()
    },
     setpassword(value) {
      this.myForm.password = value
      this.$v.myForm.password.$touch()
    },
     setconfirm_password(value) {
      this.myForm.confirm_password = value
      this.$v.myForm.confirm_password.$touch()
    },
     setphone(value) {
      this.myForm.phone = value
      this.$v.myForm.phone.$touch()
    },
     setwhatsapp(value) {
      this.myForm.whatsapp = value
      this.$v.myForm.whatsapp.$touch()
    },
     handleFileUpload(){
    this.file = this.$refs.photo.files[0];
  },
    submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                // console.dir(this.$v)
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = 'PENDING'
                // this.file=this.$refs.file.files[0]
                // console.dir(this.myForm.image)
                // Array.from(this.myForm)
                let fa =Object.entries(this.myForm);
                let formData= new FormData()


                // formData.append(this.myForm)
                // formData.append('photo',this.myForm.image)
                // this.myForm.append
               fa.forEach((value)=>{               //    console.log(value)
                    if (!Array.isArray(value[1])){
                        formData.append(value[0],value[1])
                    }else{
                        value[1].forEach((valueb,index)=>{
                            // console.log(index)
                            // console.log(valueb)
                            // console.log(value[0])
                            formData.append(value[0]+'[]',valueb)
                            })
                        }

               });
                // formData.append('photo',this.myForm.image)
                // console.log(fa)
                // console.dir(formData)
                // let myData ={
                //     data:this.myForm,
                //     file:formData
                // }
                // console.log(myData)
                this.$store.dispatch('users/userRegister',formData)
                  .then(res=>{
                      console.log(res)
                      this.submitStatus = 'OK'

                      this.myForm={
                            name: null,
                            email: null,
                            password:null,
                            confirm_password:null,
                            whatsapp:null,
                            biography:null,
                            active:0,
                            phone: null,
                            // photo:null,
                            image:null,
                            selected: "first",
                            userPermissions:[],
                            userRoles:[],
                        };
                  }).catch(err=>{
                      console.log(err)
                      this.$store.dispatch('notifications/pushNotif',err)
                  })


            }

        },
  },

  validations: {
    myForm:{
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)

    },
    email: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(35),
        isUnique(value) {
        // standalone validator ideally should not assume a field is required
        if (value === '') return true

        // simulate async call, fail for all logins with even length
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true)//typeof value === 'string' && value.length % 2 !== 0)
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
  },

    created(){
        this.$store.dispatch('users/getRolesPermissions').then(res=>{
            this.allRoles=res.allRoles;

           this.allPermissions=res.allPermissions;
            console.log(res)
        });
        if(this.id ){
            this.$store.dispatch('users/getUserById',this.id).then(res=>{
                console.log(res)
                this.myForm=res.user
                this.myForm.userRoles=res.roles
                this.myForm.userPermissions=res.permissions
            }).catch(err=>{
                console.log(err)
            })
        }
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

<style lang="scss" scoped>
.input-group-text{
    max-height: 34px;
}
</style>
