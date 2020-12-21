<template>
  <div class="container login col-md-6 offset-md-3">
    <!--
    {{ errors
    }}
    -->
    <div header="Login" class="card text-center">
      <div class=" card-text text-left">
          Login
      <span>{{errors}}</span>
        <form @submit.prevent="login" @reset="onReset" v-if="show">
          <div class="form-group"
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <input
            class="form-control"
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              :class="{ 'is-invalid': errors.username }"
            ></input>
            <div class="invalid-feedback" v-if="true">
              {{ errors.username }}
            </div>
          </div>

          <div
          class="form-group"
            id="input-group-2"
            label="Password:"
            label-for="password"
          >
            <input
              id="password"
              v-model="form.password"
              :class="'form-control ' + { 'is-invalid': errors.password }"
              placeholder="Password"
            ></input>
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>
                      <button class="btn btn-primary" type="submit" variant="primary">Submit</button>
          <button class="btn btn-danger" type="reset" variant="danger">Reset</button>
        </form>
        <footer id="footer">
          <div class="wrap">
            <div class="social-links">
              <a href="#">
                <v-icon>mdi-facebook</v-icon>
              </a>
              <a href="#"><v-icon>mdi-google-plus</v-icon></a>
            </div>
          </div>
        </footer>
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
export default {
  //middleware: "guest",
  data() {
    return {
      form: {
        email: "",
        password: "",
        username: ""
      },

      show: true,
      error:null,
      errors:{}
    };
  },
  head(){
      return{
          title:'Login'
      }
  },
//   layout: "auth", // default is "default" which is located in 'layouts/default.vue'
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    async login() {
      this.form.username = this.form.email;
      console.log(this.form);

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
          this.$swal.fire(data);
        });
      // alert(JSON.stringify(this.form));
      //await this.$store.dispatch("user/getToken", this.form).then(res => {
      //console.log(res);
      // this.$auth.fetchUser();
      //this.$router.push({ name: "index" });
      //});
    },
    /*async login() {
      this.form.username = this.form.email;
      alert(JSON.stringify(this.form));
      // await this.$axios.post("api/auth/login", this.form);
      /* await this.$auth.login({ data: this.form }).then(res => {
        console.log(res);
        this.$auth.$storage.setState("token", this.$auth.getToken("local"));
        // this.$store.state.auth.loggedIn = true;
        // console.log(this.$store.state.auth.loggedIn);
        // console.log(this.$store.state.auth.user);
      });
      this.$router.push({ name: "index" });
    }, */

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
  }
};
</script>

<style>
.login {
  background: white;
  border-radius: 5px;
  padding: 15px;
  margin-top: 15px;
}
#footer {
  text-align: center;
  padding-bottom: 80px;
}

#footer .social-links {
  display: flex;
  justify-content: center;
}

#footer .social-links a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  font-size: 20px;
  border-radius: 50%;
}

#footer .social-links a:first-child:hover {
  background-color: blue;
  color: white;
}

#footer .social-links a:last-child:hover {
  background-color: #ff0000;
  color: white;
}
</style>
