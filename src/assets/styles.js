import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  home: {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20
    },

    contentBG: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 300,
      height: 450,
      opacity: .03
    },

    hero: {
      width: windowWidth,
      display: 'flex',
      height: 160,
      flexDirection: 'row-reverse',
      paddingHorizontal: 20,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 200,
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#f49531'
    },

    heroImage: {
      width: 180,
      height: 180,
      position: 'absolute',
      top: 50,
      right: 20
    },

    header: {
      width: windowWidth - 40,
      display: 'flex',
      marginTop: 15,
      marginTop: 180,
      gap: 10
    },

    greetings: {
      color: '#11335a',
      fontSize: 18
    },

    headText: {
      color: 'rgba(0,0,0,.5)',
      fontSize: 13,
      width: windowWidth - 40
    },

    headTextItem: {
      color: '#f49531'
    },

    setupPanel: {
      position: 'absolute',
      width: windowWidth,
      height: windowHeight - 180,
      bottom: 0,
      left: 0,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: '#11335A',
      overflow: 'hidden'
    },

    setupPanelBG: {
      position: 'absolute',
      width: windowWidth,
      height: windowHeight - 180,
      top: 0,
      left: 0,
      opacity: .4
    }
  }
})