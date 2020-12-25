<template>
  <div class="container p-2">
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
    <div class="card text-center mb-5">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <three-d-print purposeName="threeDPrint" caption="3D Print" :storedValue="threeDImaging.GammaTeethLL1">
            <!-- v-model="purposeInfo.threeDPrint"  -->
            <template v-slot:purposeimage>
                <GammaTeethLL1></GammaTeethLL1>
            </template>
        </three-d-print>
      </div>
    </div>
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
                        v-model="ThreeDPringing.SurgicalGuid"
                        color="success"
                        label="Surgical Guid"
                        dense
                        ></v-switch>
                    <v-switch
                        v-model="ThreeDPringing.DSDModel"
                        color="success"
                        label="DSD Model"
                        dense
                        ></v-switch>
                    <v-switch
                        v-model="ThreeDPringing.BoneModel"
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

export default {
  components: {
    Purposes,
    ThreeDPrint,
    GammaTeethLL1
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
          GammaTeethLL1:false
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

</style>
