export default {
  state: {
    isMenuOpen: false,
  },

  mutations: {
    toggleMenuOpen(state) {
      state.isMenuOpen = !state.isMenuOpen;
    }
  },

  getters: {
    isMenuOpen(state) {
      return state.isMenuOpen;
    }
  }
}