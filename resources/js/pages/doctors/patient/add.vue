<template>
  <div class="main-content">
    <breadcumb
      :section="'Doctors'"
      :folder="'Doctor'"
      :page="'Adding'"
      icon="i-Add"
    />

    <b-row>
      <b-col md="12 mb-30">
        <b-card class="" title="Form Inputs Rounded">
          <b-form>
            <b-row>
              <b-form-group
                class="col-md-6 mb-3"
                id="input-group-1"
                label="First Name"
                label-for="input-1"
              >
                <b-form-input
                  class="form-control-rounded"
                  id="input-1"
                  v-model="form.fName"
                  type="text"
                  required
                  placeholder="First Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                id="input-group-1"
                label="Last Name"
                label-for="input-1"
              >
                <b-form-input
                  class="form-control-rounded"
                  id="input-1"
                  v-model="form.lName"
                  type="text"
                  required
                  placeholder="Last Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  class="form-control-rounded"
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="col-md-6 mb-3"
                id="input-group-1"
                label="Phone Number:"
                label-for="input-1"
              >
                <b-form-input
                  class="form-control-rounded"
                  id="input-1"
                  v-model="form.phone"
                  type="text"
                  required
                  placeholder="put your phone number"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Credit Card"
                label-for="input-1"
                class="col-md-6"
              >
                <b-form-input
                  class="form-control-rounded"
                  id="input-1"
                  v-model="form.credit"
                  type="email"
                  required
                  placeholder="Enter Credit Card Number"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Date"
                label-for="input-1"
                class="col-md-6"
              >
                <!-- <v-date-picker

                                v-model='date'
                            /> -->
                <b-form-input
                  v-model="date"
                  class="input"
                  type="date"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Select"
                label-for="input-1"
                class="col-md-6"
              >
                <b-form-select
                  :value="null"
                  :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                  id="inline-form-custom-select-pref"
                >
                  <option slot="first" :value="null">Choose...</option>
                </b-form-select>
              </b-form-group>

              <b-col md="12">
                <b-button class="mt-3" type="submit" variant="primary"
                  >Submit</b-button
                >
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import breadcumb from "./../../../components/breadcumb";

export default {
  components: {
    breadcumb
  },
  head() {
    return {
      title: "Adding Doctor",
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
      form: {
        name: "",
        email: "",
        fName: "",
        lName: "",
        phone: ""
      },
      selected: "first",
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
