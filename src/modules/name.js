export default () => {
  return {
    metaModule: true,
    name: 'name',

    // states
    metaStates: {
      name: 'wew',
      fullname: 'asdas',
    },

    // mutations
    metaMutations: {
      SET_NAME: (state, { payload }) => {
        state.name = payload
      },

      SET_FULLNAME:  (state, { payload }) => {
        state.fullname = payload
      }
    },

    // getters
    metaGetters: {
      getFullname (state) {
        return state.fullname
      }
    },

    // actions
    metaActions: {
      getFullname ({ commit, dispatch, state }, params) {
        const fullname = 'Athena Xiantelle Shekinah Obtinario Langomez'
        console.log('++++++++++++++', params)
        
        // commit('SET_FULLNAME', fullname)
      },
      
      test ({ commit, state, dispatch }, params) {
        dispatch({ module: 'device-connection', action: 'testDevice' }, '123')
        dispatch({ module: 'name', action: 'getFullname' }, 'Biboyasdasd')
      }
    }
  }
}