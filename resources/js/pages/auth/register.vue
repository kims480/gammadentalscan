<template>
  <div class="container register col-md-6 offset-md-3">
    <!--{{  errors
    }}
    -->
    <b-card header="Sign UP" class="text-center">
      <b-card-text class="text-left">
        <b-form @submit.prevent="register" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="Your Name:" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              placeholder="Enter name"
              :class="{ 'is-invalid': errors.name }"
            ></b-form-input>
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name[0] }}
            </div>
          </b-form-group>
          <b-form-group id="input-group-2" label="Your phone:" label-for="phone">
            <b-form-input
              id="phone"
              v-model="form.phone"
              placeholder="Enter phone"
              :class="{ 'is-invalid': errors.phone }"
            ></b-form-input>
            <div class="invalid-feedback" v-if="errors.phone">
              {{ errors.phone[0] }}
            </div>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              :class="{ 'is-invalid': errors.email }"
            ></b-form-input>
            <div class="invalid-feedback" v-if="errors.email">
              {{ errors.email[0] }}
            </div>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Password"
              :class="{ 'is-invalid': errors.password }"
            ></b-form-input>
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-card-text>
    </b-card>
    <!--
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    -->
  </div>
</template>

<script>
export default {
  // middleware: "guest",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        phone: ""
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
                email:this.email,
                password:this.password,
                name:this.name,
                phone:this.phone
            }
            try {
              await this.$store.dispatch('auth/register',data)
              await this.$store.dispatch('auth/user').then(()=>{
                //   console.log(res)
                  this.$router.push({name:"home"})

              })
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
