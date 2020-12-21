<template>
<div>
     <button @click="printDemo">print</button>
     <vue-easy-print tableShow ref="easyPrint" >

            <div class="col-md-12">
                <div class="alert alert-card alert-info" role="alert"><strong class="text-capitalize">Success!</strong> Lorem ipsum dolor sit amet.
                            <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <button class="btn btn-block btn-outline-danger btn-danger" id="toast-error">danger toaster</button>
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="card-title mb-3">Form Inputs Rounded</div>
                        <form>
                            <div class="row">
                                <div class="col-md-6 form-group mb-3">
                                    <label for="firstName2">First name</label>
                                    <input class="form-control form-control-rounded" id="firstName2" type="text" placeholder="Enter your first name">
                                </div>
                                <div class="col-md-6 form-group mb-3">
                                    <label for="lastName2">Last name</label>
                                    <input class="form-control form-control-rounded" id="lastName2" type="text" placeholder="Enter your last name">
                                </div>
                                <div class="col-md-6 form-group mb-3">
                                    <label for="exampleInputEmail2">Email address</label>
                                    <input class="form-control form-control-rounded" id="exampleInputEmail2" type="email" placeholder="Enter email">
                                </div>
                                <div class="col-md-6 form-group mb-3">
                                    <label for="phone1">Phone</label>
                                    <input class="form-control form-control-rounded" id="phone1" placeholder="Enter phone">
                                </div>
                                <div class="col-md-6 form-group mb-3">
                                    <label for="credit2">Cradit card number</label>
                                    <input class="form-control form-control-rounded" id="credit2" placeholder="Card">
                                </div>
                                <div class="col-md-6 form-group mb-3">
                                    <label for="website2">Website</label>
                                    <input class="form-control form-control-rounded" id="website2" placeholder="Web address">
                                </div>
                                <div class="col-md-6 form-group mb-3">
                                    <label for="picker3">Birth date</label>
                                    <input class="form-control form-control-rounded" id="picker3" placeholder="yyyy-mm-dd" name="dp">
                                </div>
                                <div class="col-md-6 form-group mb-3">
                                    <label for="picker1">Select</label>
                                    <select class="form-control form-control-rounded">
                                        <option>Option 1</option>
                                        <option>Option 1</option>
                                        <option>Option 1</option>
                                    </select>
                                </div>
                                <label class="switch pr-5 switch-success mr-3"><span>Success</span>
                                    <input type="checkbox" checked="checked"><span class="slider"></span>
                                </label>
                                <div class="col-md-12">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="card-body">
                                <form class="needs-validation was-validated" novalidate="novalidate">
                                    <div class="form-row">
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom01">First name</label>
                                            <input class="form-control" id="validationCustom01" type="text" placeholder="First name" value="Mark" required="required">
                                            <div class="valid-feedback">
                                                Looks good!

                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom02">Last name</label>
                                            <input class="form-control" id="validationCustom02" type="text" placeholder="Last name" value="Otto" required="required">
                                            <div class="valid-feedback">
                                                Looks good!

                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustomUsername">Username</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend"><span class="input-group-text" id="inputGroupPrepend">@</span></div>
                                                <input class="form-control" id="validationCustomUsername" type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required="required">
                                                <div class="invalid-feedback">
                                                    Please choose a username.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="validationCustom03">City</label>
                                            <input class="form-control" id="validationCustom03" type="text" placeholder="City" required="required">
                                            <div class="invalid-feedback">
                                                Please provide a valid city.

                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom04">State</label>
                                            <input class="form-control" id="validationCustom04" type="text" placeholder="State" required="required">
                                            <div class="invalid-feedback">
                                                Please provide a valid state.

                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="validationCustom05">Zip</label>
                                            <input class="form-control" id="validationCustom05" type="text" placeholder="Zip" required="required">
                                            <div class="invalid-feedback">
                                                Please provide a valid zip.

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" id="invalidCheck" type="checkbox" required="required">
                                            <label class="form-check-label" for="invalidCheck">
                                                Agree to terms and conditions

                                            </label>
                                            <div class="invalid-feedback">
                                                You must agree before submitting.

                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                </form>
                            </div>

    </vue-easy-print>
</div>
</template>

<script>
import vueEasyPrint from "vue-easy-print";
    export default {
            components: {
            vueEasyPrint,
            // demo
        },
        methods:{
    printDemo(){
      this.$refs.easyPrint.print()
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>
