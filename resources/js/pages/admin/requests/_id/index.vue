<template>
  <div>
    <v-row align="start" class="mb-3" no-gutters style="height: auto">
      <div
        class="col-lg-4 col-md-4 col-sm-6 col-12 d-flex pa-1"
        v-for="(item, name, index) in scanRequest"
        :key="index"
      >
        <v-card
          class="flex-grow-1 col-4 blue-grey darken-1 pa-2 mr-1 text-white text-subtitle-2 text-center justify-center align-center"
          outlined
          tile
        >
          {{
            name
              .trim()
              .toLowerCase()
              .replace("_", " ")
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              )
          }}
        </v-card>

        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 blue--text text-no-wrap rounded-r-xl pa-2"
          outlined
          v-if="typeof item !== 'object'"
          >{{ item }}
        </v-card>
        <v-card
          class="flex-grow-1 col-8 blue-grey lighten-5 text-no-wrap rounded-r-xl pa-2"
          outlined
          v-else
          style="font-family: 'Kufi', 'Helvetica Neue', Helvetica, Arial"
        >
          <router-link
            style="
              font-family: 'Kufi', 'Helvetica Neue', Helvetica, Arial,
                sans-serif;
            "
            :to="{
              name: name == 'patient' ? 'edit-patient' : 'edit-user',
              params: item,
            }"
            >{{ item.name }}</router-link
          >
        </v-card>
      </div>
    </v-row>
    <v-row
      align="start"
      class="grey lighten-5 mb-3"
      no-gutters
      style="height: auto"
    >
      <v-card
        class="flex-grow-1 col-12 pa-2 mr-1 justify-space-between align-center"
        outlined
        tile
      >
        <v-btn small v-if="!accepted">Accept</v-btn>
        <v-btn small>Add Result Files</v-btn>
        <v-btn small> Result</v-btn>
      </v-card>
    </v-row>
    <v-row align="start" class="grey lighten-5" no-gutters style="height: auto">
      <v-card
        class="flex-grow-1 col-12 pa-2 mr-1 justify-space-between align-center"
        outlined
        tile
      >
        <v-btn small v-if="!accepted">Accept</v-btn>
        <v-btn small>Add Result Files</v-btn>
        <v-btn small> Results</v-btn>
      </v-card>
    </v-row>
  </div>
</template>

<script>
Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
export default {
  props: {
    scanRequest: {
      type: Object,
      default: {},
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      alignments: ["start", "center", "end"],
      dispatched: true,
      accepted: false,
      done: false,
      rejected: false,
      delivered: false,
    };
  },
  head() {
    return {
      title: "Scan Request Details - " + this.$route.params.id,
    };
  },
  methods: {},
  created() {
    console.log(this.$route.params);
    console.log("-" + this.id + "-");
    console.log(this.scanRequest);
  },
};
</script>

<style lang="scss" scoped>
</style>
