export const namespaced = true;
const getDefaultState = () => {
    return {
        purposes: {
            Impaction:false,
            threeDPrint:false,
            EndoTTT:false,
            GuidedSurgery:false,
            Implant:false,
            Lesion:false,
            Orthodontics:false,
            PhotoDSD:false,
            TMJ:false,

        },
        otherPurpose:'',
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
            GammaTeethUR1:false,
            GammaTeethUR2:false,
            GammaTeethUR3:false,
            GammaTeethUR4:false,
            GammaTeethUR5:false,
            GammaTeethUR6:false,
            GammaTeethUR7:false,
            GammaTeethUR8:false,
            GammaTeethUL1:false,
            GammaTeethUL2:false,
            GammaTeethUL3:false,
            GammaTeethUL4:false,
            GammaTeethUL5:false,
            GammaTeethUL6:false,
            GammaTeethUL7:false,
            GammaTeethUL8:false,
        },
        TwoDImaging:{
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
        RequiredPhoto:{
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
    }
  }
export const state = getDefaultState();

export const getters = {
    purposesFinal: state => {
         //state.purposes=JSON.parse(localStorage.getItem("currentPurposes"));
         return state.purposes;
    },
    otherPurpose: state => {
         //state.purposes=JSON.parse(localStorage.getItem("currentPurposes"));
         return state.otherPurpose;
    },
    // getPurposesFinal:()=> JSON.parse(localStorage.getItem("currentPurposes")),

    getTeethFinal:state=>{
        return state.threeDImaging;
    },
    getTwoDImaging:state=>{
        return state.TwoDImaging;
    },
    getRequiredPhoto:state=>{
        return state.RequiredPhoto;
    },
    getThreeDPrinting:state=>{
        return state.ThreeDPrinting;
    },
    getPhotography:state=>{
        return state.Photography;
    }

};
export const mutations = {
    SET_Purpose: (state,purpose) => {
        state.purposes[`${purpose}`]=true;
        localStorage.setItem("currentPurposes", JSON.stringify(state.purposes));
    },
    SET_Purpose_Other: (state,value) => {
        state.otherPurpose=value;
        localStorage.setItem("otherPurpose", JSON.stringify(value));
    },
    Remove_Purpose: (state,purpose) => {
        state.purposes[`${purpose}`]=false;
        localStorage.setItem("currentPurposes", JSON.stringify(state.purposes));
    },
    /* SET_Teeth */
    SET_Teeth: (state,teeth) => {
        state.threeDImaging[`${teeth}`]=true;
        localStorage.setItem("currentTeeth", JSON.stringify(state.threeDImaging));
    },
    Remove_Teeth: (state,teeth) => {
        state.threeDImaging[`${teeth}`]=false;
        localStorage.setItem("currentTeeth", JSON.stringify(state.threeDImaging));
    },

    /* SET_TwoDImaging  */
    SET_TwoDImaging: (state,teeth) => {
        state.TwoDImaging[`${teeth}`]=true;
        localStorage.setItem("TwoDImaging", JSON.stringify(state.TwoDImaging));
    },
    Remove_TwoDImaging: (state,teeth) => {
        state.TwoDImaging[`${teeth}`]=false;
        localStorage.setItem("TwoDImaging", JSON.stringify(state.TwoDImaging));
    },

    /* SET_TwoDImaging  */
    SET_RequiredPhoto: (state,teeth) => {
        state.RequiredPhoto[`${teeth}`]=true;
        localStorage.setItem("RequiredPhoto", JSON.stringify(state.RequiredPhoto));
    },
    Remove_RequiredPhoto: (state,teeth) => {
        state.RequiredPhoto[`${teeth}`]=false;
        localStorage.setItem("RequiredPhoto", JSON.stringify(state.RequiredPhoto));
    },

    /* SET_TwoDImaging  */
    SET_ThreeDPrinting: (state,teeth) => {
        state.ThreeDPrinting[`${teeth}`]=true;
        localStorage.setItem("ThreeDPrinting", JSON.stringify(state.ThreeDPrinting));
    },
    Remove_ThreeDPrinting: (state,teeth) => {
        state.ThreeDPrinting[`${teeth}`]=false;
        localStorage.setItem("ThreeDPrinting", JSON.stringify(state.ThreeDPrinting));
    },

    /* SET_TwoDImaging  */
    SET_Photography: (state,teeth) => {
        state.Photography[`${teeth}`]=true;
        localStorage.setItem("Photography", JSON.stringify(state.Photography));
    },
    Remove_Photography: (state,teeth) => {
        state.Photography[`${teeth}`]=false;
        localStorage.setItem("Photography", JSON.stringify(state.Photography));
    },

}
export const actions = {
    setPurpose({ commit }, purpose){
        // console.log(purpose)

        commit("SET_Purpose",purpose)

    },
    setPurposeOther({ commit }, value){
        // console.log(value)

        commit("SET_Purpose_Other",value)

    },
    setTeeth({ commit }, teeth){
            commit("SET_Teeth",teeth)
    },
    setTwoDImaging({ commit }, item){
            commit("SET_TwoDImaging",item)
    },
    setRequiredPhoto({ commit }, item){
            commit("SET_RequiredPhoto",item)
    },
    setThreeDPrinting({ commit }, item){
            commit("SET_ThreeDPrinting",item)
    },
    setPhotography({ commit }, item){
            commit("SET_Photography",item)
    },
    removePurpose({ commit} , purpose){
        commit("Remove_Purpose",purpose)
    },
    removeTeeth({ commit} , teeth){
        commit("Remove_Teeth",teeth)
    },
    removeTwoDImaging({ commit} , teeth){
        commit("Remove_TwoDImaging",teeth)
    },
    removeRequiredPhoto({ commit} , teeth){
        commit("Remove_RequiredPhoto",teeth)
    },
    removeThreeDPrinting({ commit} , teeth){
        commit("Remove_ThreeDPrinting",teeth)
    },
    removePhotography({ commit} , teeth){
        commit("Remove_Photography",teeth)
    },
    initPurpose(){
        localStorage.removeItem("currentPurposes")

    },
    loadRequest({state}){
        state.purposes =JSON.parse(localStorage.getItem("currentPurposes"))??Object.assign(state.purposes, getDefaultState().purposes);
        state.otherPurpose =JSON.parse(localStorage.getItem("otherPurpose"))??Object.assign(state.otherPurpose, getDefaultState().otherPurpose);
        state.threeDImaging =JSON.parse(localStorage.getItem("currentTeeth"))??Object.assign(state.threeDImaging, getDefaultState().threeDImaging);
        state.TwoDImaging =JSON.parse(localStorage.getItem("TwoDImaging"))??Object.assign(state.TwoDImaging, getDefaultState().TwoDImaging);
        state.RequiredPhoto =JSON.parse(localStorage.getItem("RequiredPhoto"))??Object.assign(state.RequiredPhoto, getDefaultState().RequiredPhoto);
        state.ThreeDPrinting =JSON.parse(localStorage.getItem("ThreeDPrinting"))??Object.assign(state.ThreeDPrinting, getDefaultState().ThreeDPrinting);
        state.Photography =JSON.parse(localStorage.getItem("Photography"))??Object.assign(state.Photography, getDefaultState().Photography);
    },
    initRequest({state}){
        localStorage.removeItem("currentPurposes")
        localStorage.removeItem("currentTeeth")
        localStorage.removeItem("otherPurpose")
        localStorage.removeItem("TwoDImaging")
        localStorage.removeItem("RequiredPhoto")
        localStorage.removeItem("ThreeDPrinting")
        localStorage.removeItem("Photography")
        Object.assign(state,getDefaultState())

    },

}
