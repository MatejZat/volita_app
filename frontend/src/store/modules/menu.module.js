export default {
    state: {
        isMenuOpen: false,
    },

    mutations: {
        toggleMobileMenu( state ) {
            state.isMenuOpen = !state.isMenuOpen;
        }
    },

    getters: {
        isMenuOpen( state ) {
            return state.isMenuOpen;
        }
    }
}