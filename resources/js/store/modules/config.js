export const namespaced = true;
export const state = {
    themeMode: {
        dark: false,
        light: true,
        semi_dark: false,
        theme_color: "lite-purple",
        layout: "large-sidebar",
        rtl: false
    }
};

export const getters = {
    getThemeMode: state => state.themeMode
};

export const actions = {
    changeThemeMode({ commit }) {
        commit("toggleThemeMode");
    },
    changeThemeLayout({ commit }, data) {
        commit("toggleThemeLayout", data);
    },
    changeThemeRtl({ commit }) {
        commit("toggleThemeRtl");
    }
};

export const mutations = {
    toggleThemeMode: state => {
        state.themeMode.dark = !state.themeMode.dark;
    },
    toggleThemeLayout(state, data) {
        state.themeMode.layout = data;
    },
    toggleThemeRtl(state) {
        state.themeMode.rtl = !state.themeMode.rtl;
    }
};
