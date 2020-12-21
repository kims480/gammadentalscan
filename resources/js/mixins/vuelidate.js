import { validationMixin } from 'vuelidate'
import { minLength } from 'vuelidate/lib/validators';

var Component = Vue.extend({
  mixins: [validationMixin],
  validations: {
    name: {
    	required,
      minLength: minLength(5)
    },
    password:{
        minLength:minLength(6)
    }
   }
})
Vue.use(Vuelidate)
