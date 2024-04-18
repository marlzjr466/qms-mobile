import * as Animatable from 'react-native-animatable'
import rnStyle from '@package/rn-style'

export default function BaseModal ({ children, styles, customStyles }) {
  let STYLES = rnStyle(styles)
  if (customStyles) {
    STYLES = {
      ...STYLES,
      ...customStyles
    }
  }

  return (
    <Animatable.View
      style={STYLES}
      animation='fadeIn'
      duration={500}
    >
      { children }
    </Animatable.View>
  )
}