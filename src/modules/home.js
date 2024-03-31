export default () => ({
  metaModule: true,
  name: 'home',

  // states
  metaStates: {
    header: {
      greetings: 'Queueing\nManagement\nSystem',
      message: "Deliver a high-quality services and improve citizens' waiting experience."
    },

    setup: [
      {
        title: 'CONNECTION',
        host: '',
        buttonText: 'Setup connection',
        background: ['#21e7ad', '#3770f5'],
        icon: {
          type: 'materialicons',
          name: 'wifi-tethering'
        }
      },
      {
        title: 'PRINTER',
        host: '',
        buttonText: 'Setup printer',
        background: ['#fc426f', '#8c52e7'],
        icon: {
          type: 'antdesign',
          name: 'printer'
        }
      }
    ],

    modal: {
      setupConnection: false,
      setupPrinter: false
    }
  },

  // mutations
  metaMutations: {
    SET_MODAL: (state, { payload }) => {
      state.modal[payload] = !state.modal[payload]
    },

    SET_HOST: (state, { payload }) => {
      state.setup[0].host = payload.host
    }
  },

  // getters
  metaGetters: {},

  // actions
  metaActions: {}
})