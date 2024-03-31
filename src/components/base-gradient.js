import { LinearGradient } from 'expo-linear-gradient'

export default function BaseGradient ({ children, styles, colors, horizontal }) {
  return (
    <LinearGradient
      style={styles}
      colors={colors}
      start={horizontal ? { x: -1, y: 0 } : { x: 0, y: -1 }}
      end={horizontal ? { x: 1, y: 0 } : { x: 0, y: 1 }}
    >
      { children }
    </LinearGradient>
  )
}