<template>
  <div id="request-form" class="py-2">
    <div id="request-logo">
      <Logo />
    </div>
    <!-- Start Patient Data -->
    <v-card class="overflow-hidden mb-5" dense rounded="t-xl">
      <v-toolbar flat color="green" dense rounded="t-xl">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title
          class="font-weight-light text-center white--text no-print"
        >
          Patient Data
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- OUTPUT -->
        <img :src="output" />

        <!-- <v-btn
          color=" darken-3"
          class="no-print"
          elevation="2"
          @click="printFacture"
        >
          <v-icon> mdi-print </v-icon> PDF
        </v-btn> -->
        <v-spacer></v-spacer>
        <v-btn
          color=" darken-3"
          class="no-print mr-1"
          elevation="2"
          @click="submit"
        >
          <v-icon left> mdi-send </v-icon> Dispatch
        </v-btn>
        <v-btn
          color=" darken-3"
          x-small
          fab
          class="no-print mr-1"
          elevation="2"
          @click="print"
        >
          <v-icon> mdi-printer </v-icon>
        </v-btn>
        <v-btn color=" darken-3" class="no-print" elevation="2" fab x-small>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text
        class="d-flex flex-wrap justify-space-around align-center my-card-body patient-data"
        dense
      >
        <div id="patient-name">Patient :</div>
        <v-autocomplete
          v-model="patient"
          dense
          label="Patient Name"
          prepend-icon="mdi-database-search"
          return-object
          :items="patients"
          item-text="name"
          chips
          clearable
          deletable-chips
          filled
          rounded
          small-chips
          solo
          color="green"
          @change="setPatient"
          class=""
        >
        </v-autocomplete>
        <v-spacer></v-spacer>
        <div id="doctor-name">Doctor :</div>
        <v-autocomplete
          v-model="doctor"
          v-if="is_SuperAdmin"
          dense
          label="Ref Doctor Name"
          prepend-icon="mdi-database-search"
          return-object
          :items="doctors"
          class=""
          color="white"
          item-text="name"
          chips
          clearable
          deletable-chips
          filled
          rounded
          small-chips
          @change="setDoctor"
          solo
        >
        </v-autocomplete>
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
        <v-toolbar-title
          class="font-weight-light text-center white--text my-card-title"
        >
          Purpose of scan
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text
        class="d-flex flex-wrap justify-space-around align-center my-card-body"
        dense
      >
        <purposes></purposes>
      </v-card-text>
    </v-card>
    <!-- End Scan Purpose -->

    <!-- start 2D Imaging Purpose -->
    <v-card class="overflow-hidden mb-5" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title
          class="font-weight-light text-center white--text my-card-title"
        >
          2D Imaging
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column" dense>
        <v-row
          class="d-flex flex-wrap justify-space-around my-card-body align-content-center"
        >
          <v-col>
            <v-switch
              v-model="twoDImaging.DigitalPanotama"
              :checked="twoDImaging.DigitalPanotama"
              color="success"
              label="Digital Panotama"
              @change="setTwoDImaging('DigitalPanotama')"
              dense
            ></v-switch>
            <v-switch
              v-model="twoDImaging.DigitalLateralCephalomerty"
              :checked="twoDImaging.DigitalLateralCephalomerty"
              color="success"
              label="Digital Lateral Cephalomerty"
              @change="setTwoDImaging('DigitalLateralCephalomerty')"
              dense
            ></v-switch>
            <v-switch
              v-model="twoDImaging.WateView"
              color="success"
              :checked="twoDImaging.WateView"
              label="Water View (Sinus View)"
              @change="setTwoDImaging('WateView')"
              dense
            ></v-switch>
          </v-col>
          <v-col>
            <v-switch
              v-model="twoDImaging.DigitalPACephalomerty"
              :checked="twoDImaging.DigitalPACephalomerty"
              color="success"
              label="Digital P.A Cephalomerty"
              @change="setTwoDImaging('DigitalPACephalomerty')"
              dense
            ></v-switch>
            <v-switch
              v-model="twoDImaging.CephalomertyAnalysis"
              :checked="twoDImaging.CephalomertyAnalysis"
              color="success"
              label="Cephalomerty Analysis"
              @change="setTwoDImaging('CephalomertyAnalysis')"
              dense
            ></v-switch>
            <v-switch
              v-model="twoDImaging.HandRest"
              :checked="twoDImaging.HandRest"
              color="success"
              label="Hand Rest"
              @change="setTwoDImaging('HandRest')"
              dense
            ></v-switch>
          </v-col>
        </v-row>
        <v-row
          class="d-flex flex-wrap justify-space-around align-center my-card-body align-content-center"
        >
          <span class="heading-5">TMJ</span>
          <v-switch
            v-model="twoDImaging.TMJright"
            :checked="twoDImaging.TMJright"
            color="success"
            label="Right"
            @change="setTwoDImaging('TMJright')"
            dense
            class=""
          ></v-switch>
          <v-switch
            v-model="twoDImaging.TMJleft"
            :checked="twoDImaging.TMJleft"
            color="success"
            @change="setTwoDImaging('TMJleft')"
            label="Left"
            dense
          ></v-switch>
          <v-switch
            v-model="twoDImaging.TMJboth"
            :checked="twoDImaging.TMJboth"
            color="success"
            label="Both"
            @change="
              setTwoDImaging('TMJboth');
              twoDImaging.TMJleft = twoDImaging.TMJboth;
              twoDImaging.TMJright = twoDImaging.TMJboth;
            "
            dense
          ></v-switch>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- End 2D Imaging Purpose -->

    <!-- start 3D Imaging Purpose -->
    <v-card class="overflow-hidden mb-5 threedimage" dense rounded="0">
      <v-toolbar flat color="green" dense rounded="0">
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title
          class="font-weight-light text-center white--text my-card-title"
        >
          3D Imaging
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text
        class="d-flex flex-wrap justify-space-around align-center my-card-body three-d-image"
        dense
      >
        <!-- <div class="clippath"></div> -->
        <div class="upper">
          <div class="ur">
            <three-d-print
              purposeName="GammaTeethUR1"
              v-model="threeDImaging.GammaTeethUR1"
              :checked="threeDImaging.GammaTeethUR1"
              caption="UR1"
              :storedValue="threeDImaging.GammaTeethUR1"
            >
              <!-- v-model="puRposeInfo.threeDPrint"  -->
              <template v-slot:purposeimage>
                <GammaTeethUR1></GammaTeethUR1>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUR2"
              v-model="threeDImaging.GammaTeethUR2"
              :checked="threeDImaging.GammaTeethUR2"
              caption="UR2"
              :storedValue="threeDImaging.GammaTeethUR2"
            >
              <template v-slot:purposeimage>
                <GammaTeethUR2></GammaTeethUR2>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUR3"
              v-model="threeDImaging.GammaTeethUR3"
              caption="UR3"
              :storedValue="threeDImaging.GammaTeethUR3"
            >
              <template v-slot:purposeimage>
                <GammaTeethUR3></GammaTeethUR3>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUR4"
              v-model="threeDImaging.GammaTeethUR4"
              caption="UR4"
              :storedValue="threeDImaging.GammaTeethUR4"
            >
              <template v-slot:purposeimage>
                <GammaTeethUR4></GammaTeethUR4>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUR5"
              v-model="threeDImaging.GammaTeethUR5"
              caption="UR5"
              :storedValue="threeDImaging.GammaTeethUR5"
            >
              <template v-slot:purposeimage>
                <GammaTeethUR5></GammaTeethUR5>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUR6"
              v-model="threeDImaging.GammaTeethUR6"
              caption="UR6"
              :storedValue="threeDImaging.GammaTeethUR6"
            >
              <template v-slot:purposeimage>
                <GammaTeethUR6></GammaTeethUR6>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUR7"
              v-model="threeDImaging.GammaTeethUR7"
              caption="UR7"
              :storedValue="threeDImaging.GammaTeethUR7"
            >
              <template v-slot:purposeimage>
                <GammaTeethUR7></GammaTeethUR7>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUR8"
              v-model="threeDImaging.GammaTeethUR8"
              caption="UR8"
              :storedValue="threeDImaging.GammaTeethUR8"
            >
              <template v-slot:purposeimage>
                <GammaTeethUR8></GammaTeethUR8>
              </template>
            </three-d-print>
            <v-switch
              v-model="upperRight"
              :checked="upperRight"
              aria-checked="upperRight"
              inset
              dense
              class="group-selection-right"
              color="green"
              :label="`Upper Right`"
              @change="setUpperRight"
            ></v-switch>
          </div>
          <div class="ul">
            <v-switch
              v-model="upperLeft"
              :checked="upperLeft"
              inset
              dense
              color="green"
              class="group-selection-left"
              :label="`Upper Left`"
              @change="setUpperLeft"
            ></v-switch>
            <three-d-print
              purposeName="GammaTeethUL1"
              v-model="threeDImaging.GammaTeethUL1"
              caption="UL1"
              :storedValue="threeDImaging.GammaTeethUL1"
            >
              <!-- v-model="puRposeInfo.threeDPrint"  -->
              <template v-slot:purposeimage>
                <GammaTeethUL1></GammaTeethUL1>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUL2"
              caption="UL2"
              v-model="threeDImaging.GammaTeethUL2"
              :storedValue="threeDImaging.GammaTeethUL2"
            >
              <template v-slot:purposeimage>
                <GammaTeethUL2></GammaTeethUL2>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUL3"
              caption="UL3"
              v-model="threeDImaging.GammaTeethUL3"
              :storedValue="threeDImaging.GammaTeethUL3"
            >
              <template v-slot:purposeimage>
                <GammaTeethUL3></GammaTeethUL3>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUL4"
              caption="UL4"
              v-model="threeDImaging.GammaTeethUL4"
              :storedValue="threeDImaging.GammaTeethUL4"
            >
              <template v-slot:purposeimage>
                <GammaTeethUL4></GammaTeethUL4>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUL5"
              caption="UL5"
              v-model="threeDImaging.GammaTeethUL5"
              :storedValue="threeDImaging.GammaTeethUL5"
            >
              <template v-slot:purposeimage>
                <GammaTeethUL5></GammaTeethUL5>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUL6"
              caption="UL6"
              v-model="threeDImaging.GammaTeethUL6"
              :storedValue="threeDImaging.GammaTeethUL6"
            >
              <template v-slot:purposeimage>
                <GammaTeethUL6></GammaTeethUL6>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUL7"
              caption="UL7"
              v-model="threeDImaging.GammaTeethUL7"
              :storedValue="threeDImaging.GammaTeethUL7"
            >
              <template v-slot:purposeimage>
                <GammaTeethUL7></GammaTeethUL7>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethUL8"
              caption="UL8"
              v-model="threeDImaging.GammaTeethUL8"
              :storedValue="threeDImaging.GammaTeethUL8"
            >
              <template v-slot:purposeimage>
                <GammaTeethUL8 class="ul8"></GammaTeethUL8>
              </template>
            </three-d-print>
          </div>

          <!-- <div class="mouth"></div> -->
        </div>
        <!-- <div class="mouth"></div> -->
        <div class="lower">
          <div class="lr">
            <three-d-print
              purposeName="GammaTeethLR1"
              v-model="threeDImaging.GammaTeethLR1"
              caption="LR1"
              :storedValue="threeDImaging.GammaTeethLR1"
            >
              <!-- v-model="puRposeInfo.threeDPrint"  -->
              <template v-slot:purposeimage>
                <GammaTeethLR1></GammaTeethLR1>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLR2"
              v-model="threeDImaging.GammaTeethLR2"
              caption="LR2"
              :storedValue="threeDImaging.GammaTeethLR2"
            >
              <template v-slot:purposeimage>
                <GammaTeethLR2></GammaTeethLR2>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLR3"
              v-model="threeDImaging.GammaTeethLR3"
              caption="LR3"
              :storedValue="threeDImaging.GammaTeethLR3"
            >
              <template v-slot:purposeimage>
                <GammaTeethLR3></GammaTeethLR3>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLR4"
              v-model="threeDImaging.GammaTeethLR4"
              caption="LR4"
              :storedValue="threeDImaging.GammaTeethLR4"
            >
              <template v-slot:purposeimage>
                <GammaTeethLR4></GammaTeethLR4>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLR5"
              v-model="threeDImaging.GammaTeethLR5"
              caption="LR5"
              :storedValue="threeDImaging.GammaTeethLR5"
            >
              <template v-slot:purposeimage>
                <GammaTeethLR5></GammaTeethLR5>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLR6"
              v-model="threeDImaging.GammaTeethLR6"
              caption="LR6"
              :storedValue="threeDImaging.GammaTeethLR6"
            >
              <template v-slot:purposeimage>
                <GammaTeethLR6></GammaTeethLR6>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLR7"
              v-model="threeDImaging.GammaTeethLR7"
              caption="LR7"
              :storedValue="threeDImaging.GammaTeethLR7"
            >
              <template v-slot:purposeimage>
                <GammaTeethLR7></GammaTeethLR7>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLR8"
              v-model="threeDImaging.GammaTeethLR8"
              caption="LR8"
              :storedValue="threeDImaging.GammaTeethLR8"
            >
              <template v-slot:purposeimage>
                <GammaTeethLR8></GammaTeethLR8>
              </template>
            </three-d-print>
            <v-switch
              v-model="lowerRight"
              :checked="lowerRight"
              inset
              dense
              class="group-selection-right"
              color="green"
              :label="`Lower Right`"
              @change="setLowerRight"
            ></v-switch>
          </div>
          <div class="ll">
            <v-switch
              v-model="lowerLeft"
              :checked="lowerLeft"
              inset
              dense
              color="green"
              class="group-selection-left"
              :label="`Lower Left`"
              @change="setLowerLeft"
            ></v-switch>
            <three-d-print
              purposeName="GammaTeethLL1"
              v-model="threeDImaging.GammaTeethLL1"
              caption="LL1"
              :storedValue="threeDImaging.GammaTeethLL1"
            >
              <!-- v-model="puRposeInfo.threeDPrint"  -->
              <template v-slot:purposeimage>
                <GammaTeethLL1></GammaTeethLL1>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLL2"
              v-model="threeDImaging.GammaTeethLL2"
              caption="LL2"
              :storedValue="threeDImaging.GammaTeethLL2"
            >
              <template v-slot:purposeimage>
                <GammaTeethLL2></GammaTeethLL2>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLL3"
              v-model="threeDImaging.GammaTeethLL3"
              caption="LL3"
              :storedValue="threeDImaging.GammaTeethLL3"
            >
              <template v-slot:purposeimage>
                <GammaTeethLL3></GammaTeethLL3>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLL4"
              v-model="threeDImaging.GammaTeethLL4"
              caption="LL4"
              :storedValue="threeDImaging.GammaTeethLL4"
            >
              <template v-slot:purposeimage>
                <GammaTeethLL4></GammaTeethLL4>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLL5"
              v-model="threeDImaging.GammaTeethLL5"
              caption="LL5"
              :storedValue="threeDImaging.GammaTeethLL5"
            >
              <template v-slot:purposeimage>
                <GammaTeethLL5></GammaTeethLL5>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLL6"
              v-model="threeDImaging.GammaTeethLL6"
              caption="LL6"
              :storedValue="threeDImaging.GammaTeethLL6"
            >
              <template v-slot:purposeimage>
                <GammaTeethLL6></GammaTeethLL6>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLL7"
              v-model="threeDImaging.GammaTeethLL7"
              caption="LL7"
              :storedValue="threeDImaging.GammaTeethLL7"
            >
              <template v-slot:purposeimage>
                <GammaTeethLL7></GammaTeethLL7>
              </template>
            </three-d-print>
            <three-d-print
              purposeName="GammaTeethLL8"
              v-model="threeDImaging.GammaTeethLL8"
              caption="LL8"
              :storedValue="threeDImaging.GammaTeethLL8"
            >
              <template v-slot:purposeimage>
                <GammaTeethLL8></GammaTeethLL8>
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
        <v-toolbar-title
          class="font-weight-light text-center white--text my-card-title"
        >
          Photography
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column" dense>
        <v-row
          class="d-flex flex-wrap justify-space-around align-content-center my-card-body"
        >
          <v-col>
            <v-checkbox
              v-model="Photography.DigitalSmileDesign"
              :checked="Photography.DigitalSmileDesign"
              color="success"
              label="Digital Smile Design (DSD)"
              @change="setPhotography('DigitalSmileDesign')"
              dense
            ></v-checkbox>
            <v-checkbox
              v-model="Photography.UpperArch"
              :checked="Photography.UpperArch"
              color="success"
              label="Upper Arch"
              @change="setPhotography('UpperArch')"
              dense
            ></v-checkbox>
            <v-checkbox
              v-model="Photography.LowerArch"
              :checked="Photography.LowerArch"
              color="success"
              label="Lower Arch"
              @change="setPhotography('LowerArch')"
              dense
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-checkbox
              v-model="Photography.CastModelScan"
              :checked="Photography.CastModelScan"
              color="success"
              label="Cast Model Scan"
              @change="setPhotography('CastModelScan')"
              dense
            ></v-checkbox>
            <v-checkbox
              v-model="Photography.DSDPhotography"
              :checked="Photography.DSDPhotography"
              color="success"
              label="DSD Photography"
              @change="setPhotography('DSDPhotography')"
              dense
            ></v-checkbox>
            <v-checkbox
              v-model="Photography.TreatmentSimulation"
              :checked="Photography.TreatmentSimulation"
              color="success"
              label="Treatment Simulation"
              @change="setPhotography('TreatmentSimulation')"
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
        <v-toolbar-title
          class="font-weight-light text-center white--text my-card-title"
        >
          3D Pringing
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column" dense>
        <v-row
          class="d-flex flex-wrap justify-space-around align-content-center my-card-body"
        >
          <v-col>
            <v-switch
              v-model="ThreeDPrinting.SurgicalGuid"
              :checked="ThreeDPrinting.SurgicalGuid"
              color="success"
              label="Surgical Guid"
              @change="setThreeDPrinting('SurgicalGuid')"
              dense
            ></v-switch>
            <v-switch
              v-model="ThreeDPrinting.DSDModel"
              :checked="ThreeDPrinting.DSDModel"
              color="success"
              label="DSD Model"
              @change="setThreeDPrinting('DSDModel')"
              dense
            ></v-switch>
            <v-switch
              v-model="ThreeDPrinting.BoneModel"
              :checked="ThreeDPrinting.BoneModel"
              color="success"
              label="Bone Model"
              @change="setThreeDPrinting('BoneModel')"
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
        <v-toolbar-title
          class="font-weight-light text-center white--text my-card-title"
        >
          Required Image
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column" dense>
        <v-row
          class="d-flex flex-wrap justify-space-around align-center my-card-body align-content-center"
        >
          <span class="heading-5">Required Image</span>
          <v-switch
            v-model="requiredPhoto.cdOnly"
            color="success"
            label="CD Only"
            dense
            @change="setRequiredPhoto('cdOnly')"
            class=""
            :checked="requiredPhoto.cdOnly"
          ></v-switch>
          <v-switch
            v-model="requiredPhoto.cdPlusFilm"
            :checked="requiredPhoto.cdPlusFilm"
            color="success"
            label="CD & Film"
            @change="setRequiredPhoto('cdPlusFilm')"
            dense
          ></v-switch>
          <v-switch
            v-model="requiredPhoto.report"
            :checked="requiredPhoto.report"
            color="success"
            label="Report"
            @change="setRequiredPhoto('report')"
            dense
          ></v-switch>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- End Required ImagePurpose -->
    <v-btn
      color="green"
      class="no-print"
      elevation="2"
      style="float: right"
      @click="submit"
    >
      <v-icon> mdi-save </v-icon> Dispatch Request
    </v-btn>
  </div>
</template>

<script>
function buildFormData(formData, data, parentKey) {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

import Purposes from "@/components/requests/purpose/Purposes.vue";
import { mapGetters, mapActions } from "vuex";
import ThreeDPrint from "@/components/requests/teeth/threeDPrint.vue";
import GammaTeethLL1 from "@/components/requests/teeth/GammaTeethLL1.vue";
import GammaTeethLL2 from "@/components/requests/teeth/GammaTeethLL2.vue";
import GammaTeethLL3 from "@/components/requests/teeth/GammaTeethLL3.vue";
import GammaTeethLL4 from "@/components/requests/teeth/GammaTeethLL4.vue";
import GammaTeethLL5 from "@/components/requests/teeth/GammaTeethLL5.vue";
import GammaTeethLL6 from "@/components/requests/teeth/GammaTeethLL6.vue";
import GammaTeethLL7 from "@/components/requests/teeth/GammaTeethLL7.vue";
import GammaTeethLL8 from "@/components/requests/teeth/GammaTeethLL8.vue";
import GammaTeethUL1 from "@/components/requests/teeth/GammaTeethUL1.vue";
import GammaTeethUL2 from "@/components/requests/teeth/GammaTeethUL2.vue";
import GammaTeethUL3 from "@/components/requests/teeth/GammaTeethUL3.vue";
import GammaTeethUL4 from "@/components/requests/teeth/GammaTeethUL4.vue";
import GammaTeethUL5 from "@/components/requests/teeth/GammaTeethUL5.vue";
import GammaTeethUL6 from "@/components/requests/teeth/GammaTeethUL6.vue";
import GammaTeethUL7 from "@/components/requests/teeth/GammaTeethUL7.vue";
import GammaTeethUL8 from "@/components/requests/teeth/GammaTeethLL8.vue";
import GammaTeethLR1 from "@/components/requests/teeth/GammaTeethLR1.vue";
import GammaTeethLR2 from "@/components/requests/teeth/GammaTeethLR2.vue";
import GammaTeethLR3 from "@/components/requests/teeth/GammaTeethLR3.vue";
import GammaTeethLR4 from "@/components/requests/teeth/GammaTeethLR4.vue";
import GammaTeethLR5 from "@/components/requests/teeth/GammaTeethLR5.vue";
import GammaTeethLR6 from "@/components/requests/teeth/GammaTeethLR6.vue";
import GammaTeethLR7 from "@/components/requests/teeth/GammaTeethLR7.vue";
import GammaTeethLR8 from "@/components/requests/teeth/GammaTeethLR8.vue";
import GammaTeethUR1 from "@/components/requests/teeth/GammaTeethUR1.vue";
import GammaTeethUR2 from "@/components/requests/teeth/GammaTeethUR2.vue";
import GammaTeethUR3 from "@/components/requests/teeth/GammaTeethUR3.vue";
import GammaTeethUR4 from "@/components/requests/teeth/GammaTeethUR4.vue";
import GammaTeethUR5 from "@/components/requests/teeth/GammaTeethUR5.vue";
import GammaTeethUR6 from "@/components/requests/teeth/GammaTeethUR6.vue";
import GammaTeethUR7 from "@/components/requests/teeth/GammaTeethUR7.vue";
import GammaTeethUR8 from "@/components/requests/teeth/GammaTeethUR8.vue";
import Logo from "@/components/Logo.vue";
import { jsPDF } from "jspdf";
// import { html2canvas } from "html2convas";

export default {
  components: {
    Purposes,
    Logo,
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
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
      upperLeft: false,
      upperRight: false,
      lowerRight: false,
      lowerLeft: false,
      patients: [
        // {id: 6,name:'Ahmed'},
        // {id: 7,name:'Hatem'},
        // {id: 8,name:'Reda'},
      ],
      output: null,
      doctors: [
        { id: 1, name: "Hany" },
        { id: 3, name: "emad" },
        { id: 6, name: "mohamed" },
      ],
      patient: null,
      doctor: null,
      purposeInfo: {
        Impaction: false,
        threeDPrint: false,
        EndoTTT: false,
        GuidedSurgery: false,
        Implant: false,
        Lesion: false,
        Orthodontics: false,
        PhotoDSD: false,
        TMJ: false,
      },
      otherPurpose: "",
      twoDImaging: {
        DigitalPACephalomerty: false,
        CephalomertyAnalysis: false,
        HandRest: false,
        WateView: false,
        DigitalPanotama: false,
        DigitalLateralCephalomerty: false,
        TMJboth: false,
        TMJleft: false,
        TMJright: false,
      },
      requiredPhoto: {
        cdOnly: false,
        cdPlusFilm: false,
        report: false,
      },
      ThreeDPrinting: {
        SurgicalGuid: false,
        DSDModel: false,
        BoneModel: false,
      },
      Photography: {
        DigitalSmileDesign: false,
        UpperArch: false,
        LowerArch: false,
        CastModelScan: false,
        DSDPhotography: false,
        TreatmentSimulation: false,
      },
      threeDImaging: {
        GammaTeethLR1: false,
        GammaTeethLR2: false,
        GammaTeethLR3: false,
        GammaTeethLR4: false,
        GammaTeethLR5: false,
        GammaTeethLR6: false,
        GammaTeethLR7: false,
        GammaTeethLR8: false,
        GammaTeethLL1: false,
        GammaTeethLL2: false,
        GammaTeethLL3: false,
        GammaTeethLL4: false,
        GammaTeethLL5: false,
        GammaTeethLL6: false,
        GammaTeethLL7: false,
        GammaTeethLL8: false,
        GammaTeethUR1: false,
        GammaTeethUR2: false,
        GammaTeethUR3: false,
        GammaTeethUR4: false,
        GammaTeethUR5: false,
        GammaTeethUR6: false,
        GammaTeethUR7: false,
        GammaTeethUR8: false,
        GammaTeethUL1: false,
        GammaTeethUL2: false,
        GammaTeethUL3: false,
        GammaTeethUL4: false,
        GammaTeethUL5: false,
        GammaTeethUL6: false,
        GammaTeethUL7: false,
        GammaTeethUL8: false,
      },
    };
  },

  computed: {
    ...mapGetters(["checkPermission"]),
    ...mapGetters({ purposesFinal: ["scanRequest/purposesFinal"] }),
    ...mapGetters({ getOtherPurpose: ["scanRequest/otherPurpose"] }),
    ...mapGetters({ getTeethFinal: ["scanRequest/getTeethFinal"] }),
    ...mapGetters({ getTwoDImaging: ["scanRequest/getTwoDImaging"] }),
    ...mapGetters({ getRequiredPhoto: ["scanRequest/getRequiredPhoto"] }),
    ...mapGetters({ getThreeDPrinting: ["scanRequest/getThreeDPrinting"] }),
    ...mapGetters({ getPhotography: ["scanRequest/getPhotography"] }),
    ...mapGetters({ getPatient: ["scanRequest/getPatient"] }),
    ...mapGetters({ getDoctor: ["scanRequest/getDoctor"] }),

    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map((key) => {
        return {
          key,
          value: this.model[key] || "n/a",
        };
      });
    },
    is_SuperAdmin() {
      return this.checkPermission("SUPER_ADMIN");
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
  created() {
    this.loadPatientsDoctors();
    this.$store.dispatch("scanRequest/loadRequest");

    this.threeDImaging = this.getTeethFinal;
    this.twoDImaging = this.getTwoDImaging;
    this.requiredPhoto = this.getRequiredPhoto;
    this.ThreeDPrinting = this.getThreeDPrinting;
    this.Photography = this.getPhotography;
    this.purposeInfo = this.purposesFinal;
    this.otherPurpose = this.getOtherPurpose;
    this.patient = this.getPatient;
    this.doctor = this.getDoctor;
    //    console.log(this.threeDImaging)
  },
  head() {
    return {
      title: "New Request",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "New Request | Gamma Dental Scan Radiology",
        },
      ],
    };
  },
  methods: {
    async printFacture() {
      var pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [4, 2],
      });
      const options = {
        scale: 3,
        // dpi: 300,
      };
      var element = document.getElementById("request-form");
      let compStyles = window.getComputedStyle(element);
      var width = compStyles.width;
      console.log(compStyles.width);
      console.log(compStyles.height);
      var height = compStyles.height;
      await this.$html2canvas(element, options).then((canvas) => {
        // window.open(canvas.toDataURL("image/png"));
        // canvas.scale(2, 2);
        var image = canvas.toDataURL("image/png");
        pdf.addImage(image, "JPEG", 1, 1, width, height);
        pdf.save("Scan-Request" + ".pdf");
      });
      //   }).then((canvas) => {
      //     var image = canvas.toDataURL("image/png");
      //     pdf.addImage(image, "JPEG", 1, 1, width, height);
      //     pdf.save(
      //       "Scan-Request" +
      //         // moment(this.facture.date_debut).format("LL") +
      //         // "_" +
      //         // moment(this.facture.date_fin).format("LL") +
      //         ".pdf"
      //     );
      //   });

      //   this.output = await this.$html2canvas(element, options);
      //   pdf.html(element, {
      //     // width,
      //     // height,
      //   });
      //   pdf.save("request.pdf");
    },
    setTwoDImaging(item) {
      this.twoDImaging[`${item}`]
        ? this.$store.dispatch("scanRequest/setTwoDImaging", item)
        : this.$store.dispatch("scanRequest/removeTwoDImaging", item);
    },
    setRequiredPhoto(item) {
      this.requiredPhoto[`${item}`]
        ? this.$store.dispatch("scanRequest/setRequiredPhoto", item)
        : this.$store.dispatch("scanRequest/removeRequiredPhoto", item);
    },
    setThreeDPrinting(item) {
      this.ThreeDPrinting[`${item}`]
        ? this.$store.dispatch("scanRequest/setThreeDPrinting", item)
        : this.$store.dispatch("scanRequest/removeThreeDPrinting", item);
    },
    setPhotography(item) {
      this.Photography[`${item}`]
        ? this.$store.dispatch("scanRequest/setPhotography", item)
        : this.$store.dispatch("scanRequest/removePhotography", item);
    },
    setPatient() {
      this.$store.dispatch("scanRequest/setPatient", this.patient);
    },
    setDoctor() {
      this.$store.dispatch("scanRequest/setDoctor", this.doctor);
    },
    setUpperLeft() {
      for (let i = 1; i < 9; i++) {
        this.threeDImaging[`GammaTeethUL` + `${i}`] = this.upperLeft;
      }
    },
    setUpperRight() {
      for (let i = 1; i < 9; i++) {
        this.threeDImaging[`GammaTeethUR` + `${i}`] = this.upperRight;
      }
    },
    setLowerLeft() {
      for (let i = 1; i < 9; i++) {
        this.threeDImaging[`GammaTeethLL` + `${i}`] = this.lowerLeft;
      }
    },
    setLowerRight() {
      for (let i = 1; i < 9; i++) {
        this.threeDImaging[`GammaTeethLR` + `${i}`] = this.lowerRight;
      }
    },
    print() {
      // Pass the element id here

      this.$htmlToPaper("request-form");
    },
    printPreview() {
      var printArea = document.getElementById("request-form").innerHTML;
      var myWindow = window.open("", "_blank");
      myWindow.document.write(printArea);
      //   window.open(
      //     "",
      //     "_blank",
      //     "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
      //   );
    },

    submit() {
      //   console.log(this.purposesFinal)
      //   console.log(this.getPurposesFinal)
      // console.log('patient: ')
      // console.dir(this.patient)
      // console.log('doctor: ')
      // console.dir(this.doctor)
      //     console.dir(this.threeDImaging);
      //    console.dir(this.twoDImaging);
      //    console.dir(this.requiredPhoto);
      //    console.dir(this.ThreeDPrinting);
      //    console.dir(this.Photography);
      //    console.dir(this.purposesFinal);
      //    console.log(this.getOtherPurpose);
      let fm = {
        patient: this.patient,
        doctor: this.doctor,
        threeDImaging: this.threeDImaging,
        twoDImaging: this.twoDImaging,
        requiredPhoto: this.requiredPhoto,
        ThreeDPrinting: this.ThreeDPrinting,
        Photography: this.Photography,
        purposesFinal: this.purposesFinal,
        getOtherPurpose: this.getOtherPurpose,
      };
      // formData.append('patient',this.patient)
      // formData.append('doctor',this.doctor)
      // formData.append('threeDImaging',this.threeDImaging)
      // formData.append('twoDImaging',this.twoDImaging)
      // formData.append('requiredPhoto',this.requiredPhoto)
      // formData.append('ThreeDPrinting',this.ThreeDPrinting)
      // formData.append('Photography',this.Photography)
      // formData.append('purposesFinal',this.purposesFinal)
      // formData.append('getOtherPurpose',this.getOtherPurpose)

      // formData.append('photo',this.myForm.image)
      // this.myForm.append
      let formData = new FormData();
      // for ( var key in fm ) {
      //  for ( var subkey in fm[key] ) {
      //     formData.append(key+'[]', `{${subkey}:${fm[key][subkey]}}`);
      //     }
      buildFormData(formData, fm);

      // }
      // let fa =Object.entries(fm);
      //    fa.forEach((value)=>{               //    console.log(value)
      //         if (!Array.isArray(value[1])){
      //             formData.append(value[0],value[1])
      //         }else{
      //             value[1].forEach((valueb,index)=>{
      //                 // console.log(index)
      //                 // console.log(valueb)
      //                 // console.log(value[0])
      //                 formData.append(value[0]+'[]',valueb)
      //                 })
      //             }

      //    });
      // formData.append('photo',this.myForm.image)
      // console.log(fa)
      // console.dir(formData)
      // let myData ={
      //     data:this.myForm,
      //     file:formData
      // }
      // console.log(myData)
      this.$store
        .dispatch("scanRequest/dispatchRequest", formData)
        .then((res) => {
          this.$store.dispatch("scanRequest/initRequest");
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    loadPatientsDoctors() {
      // Items have already been loaded
      if (this.patients.length > 0) return;
      // Items have already been requested
      if (this.isLoading) return;
      this.isLoading = true;
      // Lazily load input items
      this.$store
        .dispatch("scanRequest/getPatientDoctorList", true)
        .then((res) => {
          //console.log()
          // const patients=[];
          /* res.list.forEach(element => {
                    this.patients.push(element) ;
                }) */
          this.patients = res.patients;
          this.doctors = res.doctors;
          // console.log(this.patients)
          // console.log(this.doctors)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
      return this.patients;
    },
  },
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.patients.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      this.$store
        .dispatch("patient/getPatientList")

        .then((res) => res.json())
        .then((res) => {
          const { count, entries } = res;
          this.count = count;
          this.patients = entries;
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
</style>

