import { useEffect, memo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// assets
import styles from '@assets/styles'

// stack
import stacks from '@stacks'
const Stack = createNativeStackNavigator()

// hooks
import { useBLE } from '@hooks/useBLE'

function index ({ navigation }) {
  const {
		requestPermissions,
		scanForPeripherals,
		allDevices,
		connectToDevice,
		connectedDevice,
		printer,
		disconnectFromDevice
	} = useBLE()

  const screenOptions = { 
    headerShown: false, 
    animation: 'slide_from_right' 
  }

  const goto = ({ parent = 'root', child, params }) => {
    navigation.navigate(
      parent, 
      { 
        screen: child,
        params: params ? params : null
      }
    )
	}

  // ask bluetooth permission
  const askPermission = async () => {
    const permission = await requestPermissions()

    if (permission) {
      if (!connectedDevice) {
        scanForPeripherals()
      }
    }
  }

  useEffect(() => {
    askPermission()
    goto({ parent: 'root', child: 'home' })
  }, [])

	return (
    <>
      <Stack.Navigator screenOptions={ screenOptions }>
        {
          stacks()
            .map((stack, key) => {
              return <Stack.Screen
                key = { key }
                name = { stack.name }
                options = { stack.options }
              >
                {(props) => (
                  <stack.component 
                    goto = { goto }
                    styles = { styles }
                    childStacks = { stack.children ? stack.children : [] }
                    { ...props }
                  />
                )}
              </Stack.Screen>
          })
        }
      </Stack.Navigator>
    </>
	)
}

export default memo (index)
