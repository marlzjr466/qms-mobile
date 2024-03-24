import { useEffect, memo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, BackHandler } from 'react-native'
import { ReduxMeta, ReDuxMetaProvider } from '@opensource-dev/redux-meta'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// stacks
import root from '@screens' 

// modules
import modules from '@modules' 

global.reduxMeta = new ReduxMeta()
global.reduxMeta.useModules(modules())

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
      <NavigationContainer style={styles.container}>
        <StatusBar style="light" backgroundColor='#11335A' />

        <Stack.Navigator>
          <Stack.Screen
            name = 'root'
            component = { root }
            options = {{ headerShown: false }}
          />
        </Stack.Navigator>
		  </NavigationContainer>
    </ReDuxMetaProvider>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default memo (App)
