<template>
  <v-sheet
  color="gray darken-2"
  elevation="3"
  rounded
>

    {{ userss }}
    {{ $route.params.name }}
    <div class="row">
                                    <div class="col-md-4 col-6">
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-Calendar text-16 mr-1"></i> Birth Date</p><span>1 Jan, 1994</span>
                                        </div>
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-Edit-Map text-16 mr-1"></i> Birth Place</p><span>Dhaka, DB</span>
                                        </div>
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-Globe text-16 mr-1"></i> Lives In</p><span>Dhaka, DB</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-6">
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> Gender</p><span>1 Jan, 1994</span>
                                        </div>
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-MaleFemale text-16 mr-1"></i> Email</p><span>example@ui-lib.com</span>
                                        </div>
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-Cloud-Weather text-16 mr-1"></i> Website</p><span>www.ui-lib.com</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-6">
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-Face-Style-4 text-16 mr-1"></i> Profession</p><span>Digital Marketer</span>
                                        </div>
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-Professor text-16 mr-1"></i> Experience</p><span>8 Years</span>
                                        </div>
                                        <div class="mb-4">
                                            <p class="text-primary mb-1"><i class="i-Home1 text-16 mr-1"></i> School</p><span>School of Digital Marketing</span>
                                        </div>
                                    </div>
                                </div>
    <v-btn @click="makeVariantToast()" color="success">toast</v-btn>

    <v-btn @click="confirmMessage()" color="danger" id="toast-success">
        Delete
    </v-btn>

  </v-sheet>
</template>

<script>
/* $(document).ready(function() {
  // Toastr types
  $("#toast-success").on("click", function() {
    toastr.success(
      "toastr is a Javascript library for non-blocking notifications. jQuery is required!",
      "Miracle Max Says",
      {
        timeOut: "50000"
      }
    );
  });
}); */
export default {
  //props: ["user"],
  data() {
    return {
      userss: this.$route.params
    };
  },
  methods: {
    // variant-toast
    makeVariantToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },
    //   toast-target
    toastTarget(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      });
    },
    confirmMessage() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  },
  layout: "default",
  created() {
    console.log(this.$route.params);
  }
};
</script>

<style lang="scss" scoped></style>
