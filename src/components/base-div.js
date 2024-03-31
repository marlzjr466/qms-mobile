import * as Animatable from 'react-native-animatable'
import { View, ScrollView } from 'react-native'
import { useRef } from 'react'

export default function BaseDiv ({
  children,
  layout,
  styles,
  scrollable,
  scrollToBottom,
  animatable,
  animation,
  duration
}) {
  const scrollViewRef = useRef()

  let wrapper = null

  animatable
    ?  wrapper = <Animatable.View
        style = { styles }
        animation = { animation }
        duration = { duration }
      >
        { children }
      </Animatable.View>

    : wrapper = scrollable 
      ? <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={
          scrollToBottom 
            ? () => { scrollViewRef.current.scrollToEnd({ animated: true }) }
            : () => {}
      }
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <View style = { styles }>
          { children }
        </View>
      </ScrollView>
      : <View style = { styles }>
        { children }
      </View>

  return wrapper
}