<template>
  <div class="container py-2">
<!-- Start Patient Data -->
    <v-card class="overflow-hidden mb-5" dense rounded="t-xl">
      <v-toolbar flat color="green" dense rounded="t-xl">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light text-center white--text" >
          Patient Data
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color=" darken-3" elevation="2"  fab x-small>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="d-flex flex-wrap justify-space-around align-center" dense>
        <v-autocomplete
        dense
              label="Patient Name"

          prepend-icon="mdi-database-search"
          return-object
          :items="states"
            chips
            clearable
            deletable-chips

            filled
            rounded
            small-chips
            solo
          color="white"

            class=""
        ></v-autocomplete>
        <v-spacer></v-spacer>
        <v-autocomplete v-if="is_SuperAdmin"
        dense
              label="Ref Doctor Name"
          prepend-icon="mdi-database-search"
          return-object
          :items="states"
             class=""
          color="white"
          item-text="name"
            chips
            clearable
            deletable-chips

            filled
            rounded
            small-chips
            solo
        ></v-autocomplete>
      </v-card-text>

      <!-- <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
        Your profile has been updated
      </v-snackbar> -->
    </v-card>
<!-- End Patient Data -->

<!-- Start Scan Purpose -->
    <v-card class="overflow-hidden mb-5" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light text-center white--text" >
          Purpose of scan
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-wrap justify-space-around align-center" dense>
        <purposes v-model="allpurposes"></purposes>
      </v-card-text>
    </v-card>
<!-- End Scan Purpose -->

<!-- start 2D Imaging Purpose -->
    <v-card class="overflow-hidden mb-5" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light text-center white--text" >
         2D Imaging
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column  " dense>
          <v-row class="d-flex flex-wrap justify-space-around align-content-center ">
            <v-col>
                    <v-switch
                        v-model="twoDImaging.DigitalPanotama"
                        color="success"
                        label="Digital Panotama"
                        value="DigitalPanotama"
                        dense
                        ></v-switch>
                    <v-switch
                        v-model="twoDImaging.DigitalLateralCephalomerty"
                        color="success"
                        label="Digital Lateral Cephalomerty"
                        value="DigitalLateralCephalomerty"
                        dense
                        ></v-switch>
                    <v-switch
                        v-model="twoDImaging.WateView"
                        color="success"
                        label="Water View (Sinus View)"
                        value="WateView"
                        dense
                        ></v-switch>
            </v-col>
            <v-col   >
                <v-switch
                    v-model="twoDImaging.DigitalPACephalomerty"
                    color="success"
                    label="Digital P.A Cephalomerty"
                    value="DigitalPACephalomerty"
                    dense
                    ></v-switch>
                <v-switch
                    v-model="twoDImaging.CephalomertyAnalysis"
                    color="success"
                    label="Cephalomerty Analysis"
                    value="CephalomertyAnalysis"
                    dense
                    ></v-switch>
                <v-switch
                    v-model="twoDImaging.HandRest"
                    color="success"
                    label="Hand Rest"
                    value="HandRest"
                    dense
                    ></v-switch>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-wrap justify-space-around align-center  align-content-center ">
              <span class="heading-5">TMJ</span>
               <v-switch
                    v-model="twoDImaging.TMJright"
                    color="success"
                    label="Right"
                    value="TMJright"
                    dense
                    class=""
                    ></v-switch>
                <v-switch
                    v-model="twoDImaging.TMJleft"
                    color="success"
                    label="Left"
                    :value="true"
                    dense
                    ></v-switch>
                <v-switch
                    v-model="twoDImaging.TMJboth"
                    color="success"
                    label="Both"

                    dense
                    ></v-switch>
          </v-row>
      </v-card-text>
    </v-card>
<!-- End 2D Imaging Purpose -->

<!-- start 3D Imaging Purpose -->
   <v-card class="overflow-hidden mb-5" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light text-center white--text" >
          3D Imaging
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-wrap justify-space-around align-center" dense>
        <div class="upper">
            <div class="ul">
                <three-d-print purposeName="GammaTeethUL1" caption="UL1" :storedValue="threeDImaging.GammaTeethUL1">
                    <!-- v-model="puRposeInfo.threeDPrint"  -->
                    <template v-slot:purposeimage>
                        <GammaTeethUL1></GammaTeethUL1>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUL2" caption="UL2" :storedValue="threeDImaging.GammaTeethUL2">
                    <template v-slot:purposeimage>
                        <GammaTeethUL2></GammaTeethUL2>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUL3" caption="UL3" :storedValue="threeDImaging.GammaTeethUL3">
                    <template v-slot:purposeimage>
                        <GammaTeethUL3></GammaTeethUL3>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUL4" caption="UL4" :storedValue="threeDImaging.GammaTeethUL4">
                    <template v-slot:purposeimage>
                        <GammaTeethUL4></GammaTeethUL4>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUL5" caption="UL5" :storedValue="threeDImaging.GammaTeethUL5">
                    <template v-slot:purposeimage>
                        <GammaTeethUL5></GammaTeethUL5>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUL6" caption="UL6" :storedValue="threeDImaging.GammaTeethUL6">
                    <template v-slot:purposeimage>
                        <GammaTeethUL6></GammaTeethUL6>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUL7" caption="UL7" :storedValue="threeDImaging.GammaTeethUL7">
                    <template v-slot:purposeimage>
                        <GammaTeethUL7></GammaTeethUL7>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUL8" caption="UL8" :storedValue="threeDImaging.GammaTeethUL8">
                    <template v-slot:purposeimage>
                        <GammaTeethUL8></GammaTeethUL8>
                    </template>
                </three-d-print>
            </div>
            <div class="ur">
                <three-d-print purposeName="GammaTeethUR1" caption="UR1" :storedValue="threeDImaging.GammaTeethUR1">
                    <!-- v-model="puRposeInfo.threeDPrint"  -->
                    <template v-slot:purposeimage>
                        <GammaTeethUR1></GammaTeethUR1>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUR2" caption="UR2" :storedValue="threeDImaging.GammaTeethUR2">
                    <template v-slot:purposeimage>
                        <GammaTeethUR2></GammaTeethUR2>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUR3" caption="UR3" :storedValue="threeDImaging.GammaTeethUR3">
                    <template v-slot:purposeimage>
                        <GammaTeethUR3></GammaTeethUR3>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUR4" caption="UR4" :storedValue="threeDImaging.GammaTeethUR4">
                    <template v-slot:purposeimage>
                        <GammaTeethUR4></GammaTeethUR4>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUR5" caption="UR5" :storedValue="threeDImaging.GammaTeethUR5">
                    <template v-slot:purposeimage>
                        <GammaTeethUR5></GammaTeethUR5>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUR6" caption="UR6" :storedValue="threeDImaging.GammaTeethUR6">
                    <template v-slot:purposeimage>
                        <GammaTeethUR6></GammaTeethUR6>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUR7" caption="UR7" :storedValue="threeDImaging.GammaTeethUR7">
                    <template v-slot:purposeimage>
                        <GammaTeethUR7></GammaTeethUR7>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethUR8" caption="UR8" :storedValue="threeDImaging.GammaTeethUR8">
                    <template v-slot:purposeimage>
                        <GammaTeethUR8></GammaTeethUR8>
                    </template>
                </three-d-print>
            </div>
        </div>
        <div class="lower">
            <div class="ll">
                <three-d-print purposeName="GammaTeethLL1" caption="LL1" :storedValue="threeDImaging.GammaTeethLL1">
                    <!-- v-model="puRposeInfo.threeDPrint"  -->
                    <template v-slot:purposeimage>
                        <GammaTeethLL1></GammaTeethLL1>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLL2" caption="LL2" :storedValue="threeDImaging.GammaTeethLL2">
                    <template v-slot:purposeimage>
                        <GammaTeethLL2></GammaTeethLL2>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLL3" caption="LL3" :storedValue="threeDImaging.GammaTeethLL3">
                    <template v-slot:purposeimage>
                        <GammaTeethLL3></GammaTeethLL3>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLL4" caption="LL4" :storedValue="threeDImaging.GammaTeethLL4">
                    <template v-slot:purposeimage>
                        <GammaTeethLL4></GammaTeethLL4>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLL5" caption="LL5" :storedValue="threeDImaging.GammaTeethLL5">
                    <template v-slot:purposeimage>
                        <GammaTeethLL5></GammaTeethLL5>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLL6" caption="LL6" :storedValue="threeDImaging.GammaTeethLL6">
                    <template v-slot:purposeimage>
                        <GammaTeethLL6></GammaTeethLL6>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLL7" caption="LL7" :storedValue="threeDImaging.GammaTeethLL7">
                    <template v-slot:purposeimage>
                        <GammaTeethLL7></GammaTeethLL7>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLL8" caption="LL8" :storedValue="threeDImaging.GammaTeethLL8">
                    <template v-slot:purposeimage>
                        <GammaTeethLL8></GammaTeethLL8>
                    </template>
                </three-d-print>
            </div>
            <div class="lr">
                <three-d-print purposeName="GammaTeethLR1" caption="LR1" :storedValue="threeDImaging.GammaTeethLR1">
                    <!-- v-model="puRposeInfo.threeDPrint"  -->
                    <template v-slot:purposeimage>
                        <GammaTeethLR1></GammaTeethLR1>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLR2" caption="LR2" :storedValue="threeDImaging.GammaTeethLR2">
                    <template v-slot:purposeimage>
                        <GammaTeethLR2></GammaTeethLR2>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLR3" caption="LR3" :storedValue="threeDImaging.GammaTeethLR3">
                    <template v-slot:purposeimage>
                        <GammaTeethLR3></GammaTeethLR3>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLR4" caption="LR4" :storedValue="threeDImaging.GammaTeethLR4">
                    <template v-slot:purposeimage>
                        <GammaTeethLR4></GammaTeethLR4>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLR5" caption="LR5" :storedValue="threeDImaging.GammaTeethLR5">
                    <template v-slot:purposeimage>
                        <GammaTeethLR5></GammaTeethLR5>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLR6" caption="LR6" :storedValue="threeDImaging.GammaTeethLR6">
                    <template v-slot:purposeimage>
                        <GammaTeethLR6></GammaTeethLR6>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLR7" caption="LR7" :storedValue="threeDImaging.GammaTeethLR7">
                    <template v-slot:purposeimage>
                        <GammaTeethLR7></GammaTeethLR7>
                    </template>
                </three-d-print>
                <three-d-print purposeName="GammaTeethLR8" caption="LR8" :storedValue="threeDImaging.GammaTeethLR8">
                    <template v-slot:purposeimage>
                        <GammaTeethLR8></GammaTeethLR8>
                    </template>
                </three-d-print>
            </div>
        </div>

      </v-card-text>
    </v-card>

<!-- End 3D Imaging Purpose -->

<!-- start Photography Purpose -->
<v-card class="overflow-hidden mb-5" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light text-center white--text" >
         Photography
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column  " dense>
          <v-row class="d-flex flex-wrap justify-space-around align-content-center ">
            <v-col>
                    <v-checkbox
                        v-model="Photography.DigitalSmileDesign"
                        color="success"
                        label="Digital Smile Design (DSD)"
                        dense
                        ></v-checkbox>
                    <v-checkbox
                        v-model="Photography.UpperArch"
                        color="success"
                        label="Upper Arch"
                        dense
                        ></v-checkbox>
                    <v-checkbox
                        v-model="Photography.LowerArch"
                        color="success"
                        label="Lower Arch"
                        dense
                        ></v-checkbox>
            </v-col>
            <v-col   >
                <v-checkbox
                    v-model="Photography.CastModelScan"
                    color="success"
                    label="Cast Model Scan"
                    dense
                    ></v-checkbox>
                <v-checkbox
                    v-model="Photography.DSDPhotography"
                    color="success"
                    label="DSD Photography"
                    dense
                    ></v-checkbox>
                <v-checkbox
                    v-model="Photography.TreatmentSimulation"
                    color="success"
                    label="Treatment Simulation"
                    dense
                    ></v-checkbox>
            </v-col>
          </v-row>

      </v-card-text>
    </v-card>
<!-- End Photography Purpose -->

<!-- start 3D Pringing Purpose -->
<v-card class="overflow-hidden mb-5" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light text-center white--text" >
         3D Pringing
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column  " dense>
          <v-row class="d-flex flex-wrap justify-space-around align-content-center ">
            <v-col>
                    <v-switch
                        v-model="ThreeDPrinting.SurgicalGuid"
                        color="success"
                        label="Surgical Guid"
                        dense
                        ></v-switch>
                    <v-switch
                        v-model="ThreeDPrinting.DSDModel"
                        color="success"
                        label="DSD Model"
                        dense
                        ></v-switch>
                    <v-switch
                        v-model="ThreeDPrinting.BoneModel"
                        color="success"
                        label="Bone Model"
                        dense
                        ></v-switch>
            </v-col>

          </v-row>

      </v-card-text>
    </v-card>
<!-- End 3D Pringing Purpose -->

<!-- start Required Image Purpose -->
<v-card class="overflow-hidden mb-5" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light text-center white--text" >
         Required Image
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column  " dense>
          <v-row class="d-flex flex-wrap justify-space-around align-center  align-content-center ">
              <span class="heading-5">Required Image</span>
               <v-switch
                    v-model="requiredPhoto.cdOnly"
                    color="success"
                    label="CD Only"
                    dense
                    class=""
                    ></v-switch>
                <v-switch
                    v-model="requiredPhoto.cdPlusFilm"
                    color="success"
                    label="cdPlusFilm"
                    :value="true"
                    dense
                    ></v-switch>
                <v-switch
                    v-model="requiredPhoto.report"
                    color="success"
                    label="Report"
                    dense
                    ></v-switch>
          </v-row>
      </v-card-text>
    </v-card>
<!-- End Required ImagePurpose -->

  </div>
</template>

<script>
import Purposes from "@/components/requests/purpose/Purposes.vue";
import { mapGetters } from 'vuex';
import ThreeDPrint from '@/components/requests/teeth/threeDPrint.vue';
import GammaTeethLL1 from '@/components/requests/teeth/GammaTeethLL1.vue';
import GammaTeethLL2 from '@/components/requests/teeth/GammaTeethLL2.vue';
import GammaTeethLL3 from '@/components/requests/teeth/GammaTeethLL3.vue';
import GammaTeethLL4 from '@/components/requests/teeth/GammaTeethLL4.vue';
import GammaTeethLL5 from '@/components/requests/teeth/GammaTeethLL5.vue';
import GammaTeethLL6 from '@/components/requests/teeth/GammaTeethLL6.vue';
import GammaTeethLL7 from '@/components/requests/teeth/GammaTeethLL7.vue';
import GammaTeethLL8 from '@/components/requests/teeth/GammaTeethLL8.vue';
import GammaTeethUL1 from '@/components/requests/teeth/GammaTeethUL1.vue';
import GammaTeethUL2 from '@/components/requests/teeth/GammaTeethUL2.vue';
import GammaTeethUL3 from '@/components/requests/teeth/GammaTeethUL3.vue';
import GammaTeethUL4 from '@/components/requests/teeth/GammaTeethUL4.vue';
import GammaTeethUL5 from '@/components/requests/teeth/GammaTeethUL5.vue';
import GammaTeethUL6 from '@/components/requests/teeth/GammaTeethUL6.vue';
import GammaTeethUL7 from '@/components/requests/teeth/GammaTeethUL7.vue';
import GammaTeethUL8 from '@/components/requests/teeth/GammaTeethLL8.vue';
import GammaTeethLR1 from '@/components/requests/teeth/GammaTeethLR1.vue';
import GammaTeethLR2 from '@/components/requests/teeth/GammaTeethLR2.vue';
import GammaTeethLR3 from '@/components/requests/teeth/GammaTeethLR3.vue';
import GammaTeethLR4 from '@/components/requests/teeth/GammaTeethLR4.vue';
import GammaTeethLR5 from '@/components/requests/teeth/GammaTeethLR5.vue';
import GammaTeethLR6 from '@/components/requests/teeth/GammaTeethLR6.vue';
import GammaTeethLR7 from '@/components/requests/teeth/GammaTeethLR7.vue';
import GammaTeethLR8 from '@/components/requests/teeth/GammaTeethLR8.vue';
import GammaTeethUR1 from '@/components/requests/teeth/GammaTeethUR1.vue';
import GammaTeethUR2 from '@/components/requests/teeth/GammaTeethUR2.vue';
import GammaTeethUR3 from '@/components/requests/teeth/GammaTeethUR3.vue';
import GammaTeethUR4 from '@/components/requests/teeth/GammaTeethUR4.vue';
import GammaTeethUR5 from '@/components/requests/teeth/GammaTeethUR5.vue';
import GammaTeethUR6 from '@/components/requests/teeth/GammaTeethUR6.vue';
import GammaTeethUR7 from '@/components/requests/teeth/GammaTeethUR7.vue';
import GammaTeethUR8 from '@/components/requests/teeth/GammaTeethUR8.vue';

export default {
  components: {
    Purposes,
    ThreeDPrint,
    GammaTeethLL1,
    GammaTeethLL2,
    GammaTeethLL3,
    GammaTeethLL4,
    GammaTeethLL5,
    GammaTeethLL6,
    GammaTeethLL7,
    GammaTeethLL8,
    GammaTeethUL1,
    GammaTeethUL2,
    GammaTeethUL3,
    GammaTeethUL4,
    GammaTeethUL5,
    GammaTeethUL6,
    GammaTeethUL7,
    GammaTeethUL8,
    GammaTeethLR1,
    GammaTeethLR2,
    GammaTeethLR3,
    GammaTeethLR4,
    GammaTeethLR5,
    GammaTeethLR6,
    GammaTeethLR7,
    GammaTeethLR8,
    GammaTeethUR1,
    GammaTeethUR2,
    GammaTeethUR3,
    GammaTeethUR4,
    GammaTeethUR5,
    GammaTeethUR6,
    GammaTeethUR7,
    GammaTeethUR8,
  },
  data() {
     return {
      allpurposes: [],
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
      states:[
          'asd','sdfg'
      ],
      twoDImaging:{
            DigitalPACephalomerty:false,
            CephalomertyAnalysis:false,
            HandRest:false,
            WateView:false,
            DigitalPanotama:false,
            DigitalLateralCephalomerty:false,
            TMJboth:false,
            TMJleft:false,
            TMJright:false
      },
      requiredPhoto:{
          cdOnly:false,
          cdPlusFilm:false,
          report:false
      },
      ThreeDPrinting:{
          SurgicalGuid:false,
          DSDModel:false,
          BoneModel:false
      },
      Photography:{
          DigitalSmileDesign:false,
          UpperArch:false,
          LowerArch:false,
          CastModelScan:false,
          DSDPhotography:false,
          TreatmentSimulation:false
      },
      threeDImaging:{
          GammaTeethLR1:false,
          GammaTeethLR2:false,
          GammaTeethLR3:false,
          GammaTeethLR4:false,
          GammaTeethLR5:false,
          GammaTeethLR6:false,
          GammaTeethLR7:false,
          GammaTeethLR8:false,
          GammaTeethLL1:false,
          GammaTeethLL2:false,
          GammaTeethLL3:false,
          GammaTeethLL4:false,
          GammaTeethLL5:false,
          GammaTeethLL6:false,
          GammaTeethLL7:false,
          GammaTeethLL8:false,
          }
    }
  },
  computed: {
      ...mapGetters(['checkPermission']),
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map((key) => {
        return {
          key,
          value: this.model[key] || "n/a",
        };
      });
    },
    is_SuperAdmin(){
        return this.checkPermission('SUPER_ADMIN');
    },
    items() {
      return this.entries.map((entry) => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
      });
    },
  },
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://api.publicapis.org/entries")
        .then((res) => res.json())
        .then((res) => {
          const { count, entries } = res;
          this.count = count;
          this.entries = entries;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style lang="scss" scoped>
.cls-1 {
  fill: #0a6b37;
  stroke: #6ebe44;
}
.cls-1,
.cls-2 {
  stroke-miterlimit: 10;
}
.cls-2 {
  fill: none;
  stroke: #05aa4c;
  stroke-width: 2px;
}
.request-header {
  --color: white;

  clip-path: polygon(0 0, 100% 0, 100% 11%, 50% 11%, 46% 100%, 0 100%);
  border-radius: 1rem;
  color: var(--color);
  display: flex;

  transition: all 1s ease-in-out;
}
.request-header > span {
  color: var(--color);
  transform: translateX(0px);
  transition: all 1s ease-in-out;
}

.request-header:hover > span {
  color: #6ebe44;

  transform: translateX(30%);
}
.request-header:hover {
  clip-path: polygon(0 0, 100% 0, 100% 11%, 60% 11%, 56% 100%, 0 100%);
  background-color: var(--color, white);
}
.cls-1 {
    fill: none;
    stroke: #013333;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 0.5px;
}
.ll,.ul{
    display: inline-flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
}
.lr,.ur{
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
}
</style>
