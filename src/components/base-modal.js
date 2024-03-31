import * as Animatable from 'react-native-animatable'

export default function BaseModal ({ children, styles }) {
  return (
    <Animatable.View
      style={styles}
      animation='fadeIn'
      duration={500}
    >
      { children }
    </Animatable.View>
  )
}