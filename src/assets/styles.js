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
      paddingTop: 35,
      paddingHorizontal: 10
    },

    icons: {
      display: 'flex',
      gap: 5,
      flexDirection: 'row-reverse',
      height: 30
    },

    icons_btn: {
      height: 30,
      width: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10
    },

    contentBG: {
      position: 'absolute',
      top: 30,
      right: 0,
      width: 300,
      height: 450,
      opacity: .05
    },

    logoPanel: {
      width: windowWidth - 20,
      height: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      gap: 5
    },

    logo: {
      width: 150,
      height: 50
    },

    headText: {
      color: 'rgba(0,0,0,.5)',
      fontSize: 15
    },

    setupPanel: {
      position: 'absolute',
      width: windowWidth,
      height: windowHeight - 150,
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
      height: windowHeight - 150,
      top: 0,
      left: 0,
      opacity: .4
    }
  }
})