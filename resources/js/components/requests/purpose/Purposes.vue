<template>
    <div id="purpose" class="card-text d-flex justify-content-around align-items-center">
       <purpose purposeName="Impaction" caption="Impaction" v-model="purposeInfo.Impaction" :storedValue="purposeInfo.Impaction"
       >
           <template v-slot:purposeimage>
               <!--we can use old slot scoped props
           <template v-slot:purpose="{purposeData}">
           <template v-slot:purpose="{bookTitle}">
               v-slot:purpose="slotProps"
               <p> this is slot props {{slotProps.bookTitle}}</p>
               <p> this is slot props {{bookTitle}}</p>

               -->

                <impaction></impaction>
                <!-- {{purposeData}} -->
                <!-- {{purposesData=purposeData}} -->
           </template>
       </purpose>
       <purpose purposeName="threeDPrint" caption="3D Print" v-model="purposeInfo.threeDPrint" :storedValue="purposeInfo.threeDPrint">
            <template v-slot:purposeimage>
                <d-print></d-print>
            </template>
        </purpose>

        <purpose purposeName="EndoTTT" caption="Endo-TTT" v-model="purposeInfo.EndoTTT" :storedValue="purposeInfo.EndoTTT">
            <template v-slot:purposeimage>
                <endo-ttt></endo-ttt>
            </template>
        </purpose>
        <purpose purposeName="GuidedSurgery" caption="Guided Surgery" v-model="purposeInfo.GuidedSurgery" :storedValue="purposeInfo.GuidedSurgery">
            <template v-slot:purposeimage>
                <guided-surgery></guided-surgery>
            </template>
        </purpose>
        <purpose purposeName="Implant" caption="Implant"  v-model="purposeInfo.Implant" :storedValue="purposeInfo.Implant" >
            <template v-slot:purposeimage>
                <implant></implant>
            </template>
        </purpose>
        <purpose purposeName="Lesion" caption="Lesion" v-model="purposeInfo.Lesion" :storedValue="purposeInfo.Lesion">
            <template v-slot:purposeimage>
                <lesion></lesion>
            </template>
        </purpose>
        <purpose purposeName="Orthodontics" caption="Orthodontics" v-model="purposeInfo.Orthodontics" :storedValue="purposeInfo.Orthodontics">
            <template v-slot:purposeimage>
                <orthodontics></orthodontics>
            </template>
        </purpose>
        <purpose purposeName="PhotoDSD" caption="Photo DSD" v-model="purposeInfo.PhotoDSD" :storedValue="purposeInfo.PhotoDSD">
            <template v-slot:purposeimage>
                <photo-dsd></photo-dsd>
            </template>
        </purpose>
        <purpose purposeName="TMJ" caption="TMJ" v-model="purposeInfo.TMJ" :storedValue="purposeInfo.TMJ">
            <template v-slot:purposeimage>
                <tmj></tmj>
            </template>
        </purpose>
        <template>
           <v-row align="center">
        <v-checkbox
          v-model="enabled"
          color="success"
          hide-details
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field
          :disabled="!enabled"
          label="other Purpose"
        ></v-text-field>
      </v-row>
        </template>
    </div>
</template>

<script>
import DPrint from './3DPrint.vue'

import EndoTTT from './EndoTTT.vue'
import GuidedSurgery from './GuidedSurgery.vue'
import Impaction from './Impaction.vue'
import Implant from './Implant.vue'
import Lesion from './Lesion.vue'
import Orthodontics from './Orthodontics.vue'
import PhotoDSD from './PhotoDSD.vue'
import purpose from './purpose.vue'
import TMJ from './TMJ.vue'
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({purposes:'scanRequest/getPurposesFinal'}),


    },
  components: {
       purpose, Impaction, DPrint,
        GuidedSurgery, Implant,
        Lesion, Orthodontics,
        "photo-dsd":PhotoDSD, "tmj":TMJ,
    "endo-ttt":EndoTTT
    },
    methods:{

    },
    created(){

            console.log(this.purposes)

    },
    data(){
        return{
            enabled: false,
            puroses:[
               "Impaction",
                "3D-Print",
                "Endo-TTT",
                "Guided-surgery",
                "Implant",
                "Lesion",
                "Orthodontics",
                "Photo-DSD",
                "TMJ"
            ],
            purposeInfo: {
                'Impaction':false,
                'threeDPrint':false,
                'EndoTTT':false,
                'GuidedSurgery':false,
                'Implant':false,
                'Lesion':false,
                'Orthodontics':false,
                'PhotoDSD':false,
                'TMJ':false
            },
        }
    },
}
</script>

<style lang="scss" scoped>
#purpose{
    display: flex;
    flex-basis: auto auto auto auto;
    flex-wrap: wrap;
}
#purpose>*{

   transform: scale(0.9);
   animation: fade  1s linear alternate ;

}
#purpose>svg:hover{
   transform: scale(1);
   padding : 1px;
   /* border: #69c31f 1px dashed;
   border-radius: 50% ; */
    fill:#69c31f;
    animation: fade  1s linear alternate ;
}
#purpose>svg .cls-1{
        fill: white;
    stroke: green;
    stroke-width: 2px;
}
.cls-1{
    fill:aquamarine;
}
@keyframes fade {
    from{
        opacity: .5;
        transform: translateY(-5px);
        // transform: scale(0.9);
    }
    50%{
        transform: translateY(5px);
        // transform: scale(0.9);

    }
    to{
        opacity: 1;
        transform: translateY(0px);

    }
}

</style>
