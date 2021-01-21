<template>
<v-container>
<div class="col-md-12 p-0">
    <div class="card mb-4 p-0">
        <div class="card-body">
            <div class="card-title"><i class="text-25 i-Add-User"></i> | {{$route.params.id ? 'Edit Patient '+$route.params.name :'Add New Patient'}}</div>
            <form  @submit.prevent="submit"
                    method="post" > <!-- enctype="multipart/form-data" -->
            <div class="row">
                <div class="input-group col-md-6 col-sm-12 mb-3"  :class="{ 'form-group--error': $v.myForm.name_en.$error }">
                    <div class="input-group-prepend"><span class="input-group-text " id="basic-addon1"><i class="fa fa-user-circle"></i></span></div>
                    <input class="form-control" type="text" placeholder="Patient Name (English)"
                    :class="{'is-invalid':$v.myForm.name_en.$error,'is-valid':!$v.myForm.name_en.$invalid}"
                    v-model.trim="$v.myForm.name_en.$model"
                    @input="setNameEn($event.target.value)" >

                    <div v-if="!$v.myForm.name_en.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.name_en.required">name_en is required</span>
                        <span v-if="!$v.myForm.name_en.minLength">name_en must be more than {{$v.myForm.name_en.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.name_en.maxLength">name_en must be less than {{$v.myForm.name_en.$params.maxLength.max}} letters</span>
                    </div>
                    <!-- <v-treeview :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></v-treeview> -->

                </div>
                <div class="input-group col-md-6 col-sm-12 mb-3"  :class="{ 'form-group--error': $v.myForm.name_ar.$error }">
                    <div class="input-group-prepend"><span class="input-group-text " id="basic-addon1"><i class="fa fa-user-circle"></i></span></div>
                    <input class="form-control" type="text" placeholder="Patient Name (Arabic)"
                    :class="{'is-invalid':$v.myForm.name_ar.$error,'is-valid':!$v.myForm.name_ar.$invalid}"
                    v-model.trim="$v.myForm.name_ar.$model"
                    @input="setNameAr($event.target.value)" >

                    <div v-if="!$v.myForm.name_ar.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.name_ar.required">name_ar is required</span>
                        <span v-if="!$v.myForm.name_ar.minLength">name_ar must be more than {{$v.myForm.name_ar.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.name_ar.maxLength">name_ar must be less than {{$v.myForm.name_ar.$params.maxLength.max}} letters</span>
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


                <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.myForm.telephone.$error , 'form-group--loading': $v.myForm.telephone.$pending}">
                    <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-phone"></i></span></div>
                    <input class="form-control" type="text" :class="{'is-invalid':$v.myForm.telephone.$error,'is-valid':!$v.myForm.telephone.$invalid}"
                    v-model.trim="$v.myForm.telephone.$model"
                    @input="setTelephone($event.target.value)" placeholder="Phone"  aria-label="Your Phone">
                    <div v-if="!$v.myForm.telephone.$invalid" class="valid-feedback">Looks good!</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.myForm.telephone.required">telephone is required</span>
                        <span v-if="!$v.myForm.telephone.minLength">telephone must be more than {{$v.myForm.telephone.$params.minLength.min}} letters</span>
                        <span v-if="!$v.myForm.telephone.maxLength">telephone must be less than {{$v.myForm.telephone.$params.maxLength.max}} letters</span>
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
                <v-menu
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
            </v-menu>
            </div>
            <div class="input-group col-md-6 col-sm-12 mb-3" :class="{ 'form-group--error': $v.myForm.gender.$error }">
                    <label class="radio radio-success">
                        <input type="radio" v-model="myForm.gender" value="1"><span>Male</span><span class="checkmark"></span>
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-model="myForm.gender" value="2"><span>Female</span><span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <button class="btn btn-primary float-right" type="submit">{{$route.params.id ? 'Update Patient': 'Add patient' }}</button>
                <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
            </form>
        </div>
    </div>
</div>
</v-container>
</template>

<script>

import breadcumb from "./../../../components/breadcumb";
import { required, sameAs,minLength,maxLength, between } from 'vuelidate/lib/validators'

import {mapActions,mapGetters} from 'vuex'
export default {
    props:{
        id:{
            type:Number | String,
        },
        name:{
            type:String,
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
      dateView:false,
      myForm:{
        name_en: null,
        email: null,
        name_ar:null,

        whatsapp:null,
        dob:null,
        gender:1,
        telephone: null,

      },
    };
  },

  computed:{
      ...mapGetters({'usersAllRoles':['users/allRoles']}),...mapGetters({'userAllPermissions':['users/allPermissions']}),
      textpassword(){
          return this.togglePassword ? 'password':'text'
      },
      textpasswordconfirm(){
          return this.toggleConfirmPassword ? 'password':'text'
      },
      dateText(){
          return this.myForm.dob;
      }
  },
  methods:{
     setNameEn(value) {
         this.myForm.name_en = value
         this.$v.myForm.name_en.$touch()
        },
     setNameAr(value) {
         this.myForm.name_ar = value
         this.$v.myForm.name_ar.$touch()
        },
     setemail(value) {
      this.myForm.email = value
      this.$v.myForm.email.$touch()
        },
     setTelephone(value) {
      this.myForm.phone = value
      this.$v.myForm.phone.$touch()
        },
     setwhatsapp(value) {
      this.myForm.whatsapp = value
      this.$v.myForm.whatsapp.$touch()
        },
     setGender(value) {
      this.myForm.gender = value
      this.$v.myForm.gender.$touch()
        },
        save (date) {
        this.$refs.menu.save(date)
      },
    submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = 'PENDING'
                let fa =Object.entries(this.myForm);
                let formData= new FormData()
               fa.forEach((value)=>{               //    console.log(value)
                    if (!Array.isArray(value[1])){
                        formData.append(value[0],value[1])
                    }else{
                        value[1].forEach((valueb,index)=>{
                            formData.append(value[0]+'[]',valueb)
                            })
                        }
               });
               console.log(formData)
                this.$store.dispatch('patient/addPatient',formData)
                  .then(res=>{
                      console.log(res)
                      this.submitStatus = 'OK'
                      this.myForm={
                            name_en: null,
                            name_ar: null,
                            email: null,
                            whatsapp:null,
                            gender:1,
                            phone: null,
                        };
                        $router.push({name: "patients"});
                  }).catch(err=>{
                      console.log(err)
                      this.$store.dispatch('notifications/pushNotif',err)
                  })
            }
        },
    },

    validations: {
        myForm:{
            name_en: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(30)

            },
            name_ar: {

            minLength: minLength(3),
            maxLength: maxLength(30)

            },
            email: {

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

            whatsapp:{
                required,
                minLength: minLength(3),
                // between: between(6, 40)
                maxLength: maxLength(20)
            },
            gender:{


            },
            telephone: {
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
        if(this.id ){
            this.$store.dispatch('patient/getPatientById',this.id).then(res=>{
                console.log(res)
                this.myForm=res.patient

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
    },
    watch: {
      dateView (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
};
</script>

<style lang="scss" >
.input-group-text{
    max-height: 34px;
}
.col-md-6.col-sm-12.mb-3{
    padding-top: 0;
    padding-bottom: 0;
}
</style>
