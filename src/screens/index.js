import { useEffect, memo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// assets
import styles from '@assets/style'

// stack
import stacks from '@stacks'
const Stack = createNativeStackNavigator()

function index ({ navigation }) {
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

  useEffect(() => {
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
