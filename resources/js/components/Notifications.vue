<template>
    <v-snackbar
                :value="show"
                absolute
                :class="myclass"
                style="z-index:999"
                >
                <span>{{ text }}</span>
                <code>{{extra}}</code>
                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >
                    <i class="text-20 fa fa-close"></i>
                    </v-btn>
                </template>
    </v-snackbar>
</template>

<script>
    export default {
        props:{
            snackbar:{
                type:Boolean,
                default:false
            },
            text:{
                type:String|Number|Object|Boolean,
                default:null
            },
            extra:{
                type:Object,
                default:null
            },
            myclass:{
                type:String,
                default:null
            }
        },
        data(){
            return{
                attrs:{

                }
            }
        }
        ,computed:{
            show(){return this.snackbar? this.snackbar:false}
        }

    }
</script>

<style lang="scss" scoped>

</style>
