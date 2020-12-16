export const namespaced = true;

export const state = () => ({
    purposes: {
        'Impaction':false,
        'threeDPrint':false,
        'EndoTTT':false,
        'GuidedSurgery':false,
        'Implant':false,
        'Lesion':false,
        'Orthodontics':false,
        'PhotoDSD':false,
        'TMJ':false
    }, //Storage.getLocalStorage("access_token") ||

});
export const getters = {
    purposesFinal: state => {
        return state.purposes
    },

};
export const mutations = {
    SET_Purpose: (state,purpose) => {
        state.purposes[`${purpose}`]=true;
        localStorage.setItem("currentPurposes", JSON.stringify(state.purposes));
    },
    Remove_Purpose: (state,purpose) => {
        state.purposes[`${purpose}`]=false;
        localStorage.setItem("currentPurposes", JSON.stringify(state.purposes));
    },

}
export const actions = {
    setPurpose({ commit }, purpose){
        // console.log(purpose)

        commit("SET_Purpose",purpose)

    },
    removePurpose({ commit} , purpose){
        commit("Remove_Purpose",purpose)
    },
    initPurpose(){
        localStorage.getItem("currentPurposes") != null
        ? JSON.parse(localStorage.getItem("currentPurposes"))
        : null
    }

}
