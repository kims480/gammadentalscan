<template>
  <!-- <transition name="page" mode="out-in"> -->
  <router-view />
  <!-- </transition> -->
</template>

<script>
export default {
  components: {},
  //   middleware: "doctor",
  layout: "doctor",

  data: () => ({}),

  head() {
    return {
      titleTemplate: "%s - Dentist Portal | Gamma Dental Radiology",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dentist Portal - Gamma Dental Scan Radiology",
        },
      ],
    };
  },
  methods: {},
  created() {},
  computed: {},
};
</script>


.username:hover {
  color: rgb(2, 185, 84);
  cursor: pointer;
}
</style>
