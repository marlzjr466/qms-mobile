export default () => {
  return {
    metaModule: true,
    name: 'address',

    // states
    metaStates: {
      address: ''
    },

    // mutations
    metaMutations: {
      SET_ADDRESS: (state, { payload }) => {
        state.address = payload
      }
    },

    // actions
    metaActions: {
      getAddress ({ commit }, params) {
        const address = 'Banilad, Mandaue City, Cebu 6014'
        
        commit('SET_ADDRESS', address)
      }
    }
  }
}