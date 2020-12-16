export const namespaced = true;
export const state = {
    notifications: {},
    show:false
};

export const getters = {
    notifications: state => {
        return state.notifications;
      },
    showNotifications: state => {
        return state.show;
      }
};


export const mutations = {
    SET_Notification: (state, notif) => {
        state.notifications = notif;
        state.show = notif.show;
      }
};
export const actions = {
    pushNotif({ commit }, notifications,type='info') {
        const data={
            error:notifications,
            message:notifications,
            type:type,
            show:true
        }
        console.log(data);
        commit("SET_Notification", data);
      },
      clearNotif({ commit }) {
        commit("SET_Notification", {});
      }
};
