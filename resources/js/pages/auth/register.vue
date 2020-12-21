<template>
  <div class="container register col-md-6 offset-md-3">
    <!--{{  errors
    }}
    -->
    <div class="auth-content">
        <div class="card o-hidden">
            <div class="row">
                <div class="col-md-6 text-center" style="background-size: cover;background-image: url(../../dist-assets/images/photo-long-3.jpg)">
                    <div class="pl-3 auth-right">
                        <div class="auth-logo text-center mt-4"><img src="@/assets/images/logo.png" alt=""></div>
                        <div class="flex-grow-1"></div>
                        <div class="w-100 mb-4"><router-link class="btn btn-outline-primary btn-block btn-icon-text btn-rounded" to="/signin"><i class="i-Mail-with-At-Sign"></i> Sign in with Email</router-link><a class="btn btn-outline-google btn-block btn-icon-text btn-rounded"><i class="i-Google-Plus"></i> Sign in with Google</a><a class="btn btn-outline-facebook btn-block btn-icon-text btn-rounded"><i class="i-Facebook-2"></i> Sign in with Facebook</a></div>
                        <div class="flex-grow-1"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-4">
                        <h1 class="mb-3 text-18">Sign Up</h1>
                        <form  @submit.prevent="register" @reset="onReset" v-if="show">
                            <div class="form-group">
                                <label for="username">Your name</label>
                                <input class="form-control form-control-rounded" v-model="form.name"
                                    placeholder="Enter name"
                                    :class="{ 'is-invalid': errors.name }" id="username" type="text">
                            </div>
                            <div class="form-group">
                                <label for="phone">Your Phone</label>
                                <input class="form-control form-control-rounded"
                                        v-model="form.phone"
                                        placeholder="Enter phone"
                                        :class="{ 'is-invalid': errors.phone }"
                                        id="phone" type="text">
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input class="form-control form-control-rounded" v-model="form.email"
                                                type="email"
                                                placeholder="Enter email"
                                                :class="{ 'is-invalid': errors.email }" id="email">
                                <div class="invalid-feedback" v-if="errors.email">
                                    {{ errors.email[0] }}
                                    </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input class="form-control form-control-rounded" v-model="form.password"
                                    type="password"
                                    placeholder="Password"
                                    :class="{ 'is-invalid': errors.password }" id="password">
                            </div>
                            <div class="form-group">
                                <label for="confirm_password">confirm_type password</label>
                                <input class="form-control form-control-rounded" v-model="form.confirm_password" id="confirm_password" type="password">
                            </div>
                            <button class="btn btn-primary btn-block btn-rounded mt-3">Sign Up</button>
                             <button type="reset" variant="danger">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    -->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  // middleware: "guest",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        confirm_password: "",
        phone: ""
      },
        errors:{
            name:null,
            password:null,
            email:null,
            phone:null
        },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    ...mapActions("auth",["login"]),
        async register(){
            this.loading=true;
            let data={
                email:this.form.email,
                password:this.form.password,
                confirm_password:this.form.confirm_password,
                name:this.form.name,
                phone:this.form.phone
            }
            try {
              await this.$store.dispatch('auth/register',data)
            //   await this.$store.dispatch('auth/user').then(()=>{
                //   console.log(res)
                  this.$router.push({name:"home"})

            //   })
            } catch (err) {
                console.log(err);
                let data = { errors: "Username or passord Incorrect", details: err };

                this.$store.dispatch("validation/setErrors", data);
                // this.$swal.fire(data);
            }



            this.loading=false;
        },

   /*  async register() {
      console.log(this.form);
      await this.$store.dispatch("users/createUser", this.form).then(res=>{
        console.log(res);
      });

      await this.$auth
        .loginWith("local", {
          data: {
            username: this.form.email,
            password: this.form.password
          }
        })
        .then(res => {})
        .catch(err => {
          let data = { errors: "Username or passord Incorrect", details: err };

          this.$store.dispatch("validation/setErrors", data);
        });

      this.$router.push({ name: "index" });
    }, */
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
.register {
  background: white;
  border-radius: 5px;
  padding: 15px;
  margin-top: 15px;
}
</style>
