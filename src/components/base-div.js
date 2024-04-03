import * as Animatable from 'react-native-animatable'
import { View, ScrollView } from 'react-native'
import { useRef } from 'react'
import rnStyle from '@package/rn-style'

export default function BaseDiv ({
  children,
  layout,
  styles,
  customStyles,
  scrollable,
  scrollToBottom,
  animatable,
  animation,
  duration
}) {
  const scrollViewRef = useRef()

  let STYLES = rnStyle(styles)
  if (customStyles) {
    STYLES = {
      ...STYLES,
      ...customStyles
    }
  }

  let wrapper = null

  animatable
    ?  wrapper = <Animatable.View
        style = { STYLES }
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
        <View style = { STYLES }>
          { children }
        </View>
      </ScrollView>
      : <View style = { STYLES }>
        { children }
      </View>

  return wrapper
}