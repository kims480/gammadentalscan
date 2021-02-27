export const namespaced = true;
export const state = {
    notifications: {},
    show: false
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
    },
    CLEAR_Notification: state => {
        state.notifications = {};
        state.show = false;
    }
};
export const actions = {
    pushNotif({ commit }, notifications) {
        const data = {
            error: notifications,
            message: notifications,
            type: "info",
            show: true
        };
        // console.log(data);
        commit("SET_Notification", data);

        setTimeout(() => {
            commit("CLEAR_Notification", {});
        }, 1000 * 2);
    },
    pushSuccessNotify({ commit }, notifications) {
        const data = {
            error: notifications,
            message: notifications,
            type: "success",
            show: true
        };
        // console.log(data);
        commit("SET_Notification", data);

        setTimeout(() => {
            commit("CLEAR_Notification", {});
        }, 1000 * 2);
    },
    pushErrorNotify({ commit }, notifications) {
        const data = {
            error: notifications,
            message: notifications.message,
            type: "error",
            show: true
        };
        // console.log(data);
        commit("SET_Notification", data);

        setTimeout(() => {
            commit("CLEAR_Notification", {});
        }, 1000 * 3);
    },
    clearNotif({ commit }) {
        commit("CLEAR_Notification", {});
    }
};
