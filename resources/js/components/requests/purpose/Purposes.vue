<template>
    <div id="purpose" class="card-text d-flex justify-content-around align-items-center">
       <purpose name="Impaction" caption="Impaction" :storedValue="purposes.Impaction">
           <template v-slot:purpose="{purposeData}">
               <!--we can use old slot scoped props
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
        <d-print></d-print>

        <purpose name="EndoTTT" caption="Endo-TTT" :storedValue="purposes.EndoTTT">
            <template v-slot:purpose>
                <endo-ttt></endo-ttt>
            </template>
        </purpose>
        <purpose name="GuidedSurgery" caption="Guided Surgery" :storedValue="purposes.GuidedSurgery">
            <template v-slot:purpose>
                <guided-surgery></guided-surgery>
            </template>
        </purpose>
        <purpose name="Implant" caption="Implant" :storedValue="purposes.Implant" >
            <template v-slot:purpose>
                <implant></implant>
            </template>
        </purpose>
        <purpose name="Lesion" caption="Lesion" :storedValue="purposes.Lesion">
            <template v-slot:purpose>
                <lesion></lesion>
            </template>
        </purpose>
        <purpose name="Orthodontics" caption="Orthodontics" :storedValue="purposes.Orthodontics">
            <template v-slot:purpose>
                <orthodontics></orthodontics>
            </template>
        </purpose>
        <purpose name="PhotoDSD" caption="Photo DSD" :storedValue="purposes.PhotoDSD">
            <template v-slot:purpose>
                <photo-dsd></photo-dsd>
            </template>
        </purpose>
        <purpose name="TMJ" caption="TMJ" :storedValue="purposes.TMJ">
            <template v-slot:purpose>
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
import DPrint from './DPrint.vue'

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
        ...mapGetters({purposes:'scanRequest/purposesFinal'})
    },
  components: {
       purpose, Impaction, DPrint,
        GuidedSurgery, Implant,
        Lesion, Orthodontics,
        "photo-dsd":PhotoDSD, "tmj":TMJ,
    "endo-ttt":EndoTTT
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
            purposesData:{}
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
