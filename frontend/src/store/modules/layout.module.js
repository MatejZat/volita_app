export default {
    state: {
        layout: 'app',
    },
    mutations: {
        setLayout(state, payload) {
            state.layout = payload;
        },
    },
    getters: {
        layout(state) {
            return state.layout;
        },
    },
}