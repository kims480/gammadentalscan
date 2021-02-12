<template>
  <div class="purpose-inner">
    <input
      type="checkbox"
      @change="changePurp"
      :name="purposeName"
      :id="purposeName"
      :value="value"
      :checked="value"
      v-bind="$attrs"
    />
    <label :for="purposeName">
      <slot name="purposeimage"></slot>

      <!--
    <slot name="purpose" :bookTitle="bookTitle"></slot>v-model="purpValue"
     bookTitle is comming scopped slot props passed from child component -->
      <svg viewBox="-5 -5 48 48">
        <circle class="cls-1 circle" cx="19.07" cy="19.07" r="18.57" />
        <g class="check">
          <line class="cls-2" x1="31.98" y1="36.3" x2="35.54" y2="39.86" />
          <line class="cls-2" x1="34.33" y1="40.1" x2="43.3" y2="31.12" />
        </g>
      </svg>
      <span>{{ caption }}</span>
    </label>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  inheritAttrs: false,
  props: {
    purposeName: {
      type: String,
      default: "",
      required: true,
    },
    caption: {
      type: String,
      default: "",
      required: true,
    },

    // storedValue:{
    //     type:Boolean,
    //     default:false,

    // },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    changePurp(event) {
      // this.value=!this.value
      // console.log(this.name+":"+this.purpValue)
      if (typeof event !== "undefined") {
        if (event.target.checked) {
          this.$store.dispatch("scanRequest/setPurpose", this.purposeName);
        } else {
          this.$store.dispatch("scanRequest/removePurpose", this.purposeName);
        }

        // this.value=event.target.checked
        this.$emit("input", event.target.checked);
        const purpose = this.purposeName;
        // this.$parent.$emit('input',purposeInfo[`${purpose}`]=event.target.checked)

        // console.log(event.target.name +'/'+event.target.checked)
      }
    },
    setValue() {
      if (this.value) {
        this.$store.dispatch("scanRequest/setPurpose", this.purposeName);
      }
    },

    //     return this.value=this.storedValue
    // }
  },
  created() {
    /* [`${this.purposeName}`] */
    this.setValue();
  },
};
</script>

<style lang="scss" scoped>
</style>
