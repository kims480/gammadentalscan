<template>
    <div class="inner" >

        <input type="checkbox"  @change="changePurp"
        :name="purposeName"  :id="purposeName"  :value="value"
        :checked="value"  v-bind="$attrs" >
        <label :for="purposeName">


            <slot name="purposeimage" ></slot>

<!--
    <slot name="purpose" :bookTitle="bookTitle"></slot>v-model="purpValue"
     bookTitle is comming scopped slot props passed from child component -->
            <svg  viewBox="-5 -5 48 48">
                <circle class="cls-1 circle" cx="19.07" cy="19.07" r="18.57"/>
                <g class="check">
                    <line class="cls-2" x1="31.98" y1="36.3" x2="35.54" y2="39.86"/>
                    <line class="cls-2" x1="34.33" y1="40.1" x2="43.3" y2="31.12"/>
                </g>
            </svg>
            <span>{{caption}}</span>
        </label>
    </div>

</template>

<script>
import {mapActions} from 'vuex'
    export default {
        inheritAttrs:false,
        props:{
            purposeName:{
                type:String,
                default:"",
                required:true
            },
            caption:{
                type:String,
                default:"",
                required:true
            },

            // storedValue:{
            //     type:Boolean,
            //     default:false,

            // },
            value:{
                type:Boolean,
                default:false,
                }
        },
        data(){
            return{

            }
        },
        computed:{

        },
        methods:{
            changePurp(event){
                // this.value=!this.value
                // console.log(this.name+":"+this.purpValue)
                if(typeof event !=='undefined'){
                    if(event.target.checked ){

                        this.$store.dispatch("scanRequest/setPurpose",this.purposeName)
                    }
                    else{
                        this.$store.dispatch("scanRequest/removePurpose",this.purposeName)
                    }


                    // this.value=event.target.checked
                    this.$emit('input',event.target.checked)
                    const purpose=this.purposeName;
                    // this.$parent.$emit('input',purposeInfo[`${purpose}`]=event.target.checked)

                    // console.log(event.target.name +'/'+event.target.checked)
                }

            },
            setValue(){
                if(this.value ){
                        this.$store.dispatch("scanRequest/setPurpose",this.purposeName)

                    }
            }

            //     return this.value=this.storedValue
            // }
        },
        created(){

            /* [`${this.purposeName}`] */
             this.setValue()
        }
    }
</script>

<style lang="scss" scoped>
input[type=checkbox]{
    display: none;
    pointer-events: none;

    &+label {
        cursor: pointer;
        font-size:.8em;
        display:grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;

        svg:nth-child(1){
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
            height: 55px;
            width: 55px;
            padding: 2px;

                // width: auto;
                fill:#07d4bbf5;
            transform: scale(0.9);
        }
        svg:nth-child(2){
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 2;
            width: 2em;
            stroke: green;
            stroke-width: 5;
            fill: white;
            circle{

                stroke-dasharray: 116;
                stroke-dashoffset: 0;
            }
            .check{
                fill: none;
                transform-origin: bottom;
                transform: translateX(-32px) translateY(-10px) scale(1.8);
            }
            .check:first-child{
                stroke-width: 3px;
                stroke-dasharray: 5;
                stroke-dashoffset: 5;
            }
            .check:nth-child(2){

                stroke-width: 3px;
                stroke-dasharray: 12.6;
                stroke-dashoffset: 12.6;
                fill: none;
            }

        }
        span{
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 3;
           padding-top: .3em;
           margin-left: .3em;
           border-top: 1px dashed #07d4bbf5;

        }
    }
    &:checked + label{
        svg:nth-child(1){
            border: 1px solid darkgreen;
            border-radius: 50%;
            transform: scale(.8);
            transform-box: fill;
            transform-origin: center;
        }
        svg:nth-child(2){

            circle{
                fill: darkgreen;
                stroke-dashoffset: 116;
                transition: stroke-dashoffset .1s linear;
            }
            g.check{
                stroke: white;
                transform: translateX(-32px) translateY(-25px) scale(1.8);

                transition: stroke-dashoffset .1s linear;

            }
            .check:first-child{

                stroke-dashoffset: 0;
            }
            .check:nth-child(2){
                // transform: translateX(-1px) translateY(-8px) scaleY(1.5);
                transform-origin: center;
                stroke-dashoffset: 0;
                fill: none;
            }

        }
        span{
            border-top: none;
        font-weight: bold;
        columns: #0ed407f5;
        }
    }
}
</style>
