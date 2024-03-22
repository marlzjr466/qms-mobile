import { useEffect, memo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, BackHandler, Text } from 'react-native'
import { ReduxMeta, ReDuxMetaProvider } from '@opensource-dev/redux-meta'
// import { ReduxMeta, ReDuxMetaProvider } from './src/package/redux-meta'

// stacks
import Index from './src/stacks/Index' 

// modules
import deviceConnection from './src/modules/device-connection'
import name from './src/modules/name'

global.reduxMeta = new ReduxMeta()
global.reduxMeta.useModules([
  deviceConnection(),
  name()
])

function App() { 
	useEffect(() => { // disabling back handler button
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('back button execute...')
      return true
    })
    return () => backHandler.remove() 
  }, [])
  
  return (
    <ReDuxMetaProvider>
      <View style={styles.container}>
        <Index />
      </View>
    </ReDuxMetaProvider>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default memo(App)
