import ServicesConst from "@/services/ServicesConst";
export const namespaced = true;
export const state = {};
export const getters = {};
export const mutations = {};
export const actions = {
    saveRequestFile({ commit }, files) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .post("results", files)
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    },
    getRequestFile({ commit }) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .get("results")
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    },
    getRequestFileById({ commit }, requestID = null) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .get("results/" + requestID)
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    },
    getScanCategs() {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .get("categ")
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    }
};
