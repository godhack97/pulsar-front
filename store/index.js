export const state = () => ({
    title: 'Заголовок по умолчанию'
});

export const mutations = {
    SET_TITLE(state, newTitle) {
        state.title = newTitle;
    }
};

export const actions = {
    setTitle({ commit }, newTitle) {
        commit('SET_TITLE', newTitle);
    }
};