export const namespaced = true;
export const state = {
    sidebarToggleProperties: {
        isSideNavOpen: false,
        isSecondarySideNavOpen: false,
        isActiveSecondarySideNav: false
    }
};

export const getters = {
    getSideBarToggleProperties: state => state.sidebarToggleProperties
};

export const actions = {
    changeSidebarProperties({ commit }) {
        commit("toggleSidebarProperties");
    },
    changeSecondarySidebarProperties({ commit }) {
        commit("toggleSecondarySidebarProperties");
    },
    changeSecondarySidebarPropertiesViaMenuItem({ commit }, data) {
        commit("toggleSecondarySidebarPropertiesViaMenuItem", data);
    },
    changeSecondarySidebarPropertiesViaOverlay({ commit }) {
        commit("toggleSecondarySidebarPropertiesViaOverlay");
    }
};

export const mutations = {
    toggleSidebarProperties: state =>
        (state.sidebarToggleProperties.isSideNavOpen = !state
            .sidebarToggleProperties.isSideNavOpen),

    toggleSecondarySidebarProperties: state =>
        (state.sidebarToggleProperties.isSecondarySideNavOpen = !state
            .sidebarToggleProperties.isSecondarySideNavOpen),
    toggleSecondarySidebarPropertiesViaMenuItem(state, data) {
        state.sidebarToggleProperties.isSecondarySideNavOpen = data;
        state.sidebarToggleProperties.isActiveSecondarySideNav = data;
    },
    toggleSecondarySidebarPropertiesViaOverlay(state) {
        state.sidebarToggleProperties.isSecondarySideNavOpen = !state
            .sidebarToggleProperties.isSecondarySideNavOpen;
    }
};
