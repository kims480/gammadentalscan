// import  from '@/components/.vue';

import { mapGetters } from "vuex";

export default {
    components: {

    },
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{
        ...mapGetters({isAuth:"isAuth"})
    }
};
