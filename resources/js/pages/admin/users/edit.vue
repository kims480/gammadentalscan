<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
       <!--  <v-icon small  class="mr-2 action-btn" color="success" dark  rounded v-bind="attrs" v-on="on">
          mdi-pencil
        </v-icon> -->
        <i class="nav-icon i-Pen-2 font-weight-bold" v-bind="attrs" v-on="on"></i>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile {{ user.id }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" :value="userName"
                  v-model="name" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Phone"
                  :value="userPhone"
                  v-model="phone"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="whatsapp"
                  :value="userWhatsapp"
                  v-model="whatsapp"
                  hint="whatsapp Optional"
                  persistent-hint

                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  :value="userEmail"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Password"
                  :value="userPassword"
                  v-model="password"
                  :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="passShow ? 'text' : 'password'"
                  name="input-10-1"
                  hint="At least 8 characters"
                  counter
                  @click:append="passShow = !passShow"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Active"
                  :value="userActive===1?'Acive':'Inactive'"
                  v-model="active"

                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
               <v-text-field
                  label="Created Date"
                  :value="userCreatedAt"
                  v-model="created_at"


                ></v-text-field>
              </v-col>
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
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-3" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["user"],
  data: () => ({
    dialog: false,
    email: '',
    password:'',
    name: '',
    active: '',
    phone: '',
    whatsapp: '',
    roles: ['user',
            'admin',
            'doctor',
            'super_admin',
            'developer'
          ],
    created_at: '',
    updated_at: '',
    passShow:false,
     disabled: false,
      readonly: false,
      chips: true,
      multiple: true,
      appendIcon: false,
      appendSlot: false,
      appendItemSlot: false,
      prependIcon: false,
      prependSlot: false,
      prependItemSlot: false,
      selectSlot: false,
      userRoles: ['user'],

        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
  }),
  computed: {
    userEmail() {
      this.email = this.user.email;
    },
    userName(){
      this.name=this.user.name
    },
    userActive(){
      this.active=this.user.active
    },
    userPhone(){
      this.phone=this.user.phone
    },
    userPassword(){
      this.password=this.user.password
    },
    userWhatsapp(){
      this.whatsapp=this.user.whatsapp
    },
    userRole(){

        this.userRoles.push(this.user.role.role)




    },
    userCreatedAt(){
      this.created_at=this.user.created_at
    },
    userUpdatedAt(){
      this.updated_at=this.user.updated_at
    }
  },
  created(){

    console.log(this.userRole)
  }
  // watch: {
  //     multiple (val) {
  //       if (val) this.model.push(this.user.role.role)
  //       else this.model = this.model[0] || 'user'
  //     },
  //   },
};
</script>
<style lang="scss" scoped>
.action-btn {
  padding: 5px;
  border-radius: 50%;
  border: 1px solid;
}
</style>
