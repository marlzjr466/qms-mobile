import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import rnStyle from '@package/rn-style'

function BaseButton ({
  children,
  styles,
  customStyles,
  disabled,
  gradient, 
  gradientColors, 
  action 
}) {
  let STYLES = rnStyle(styles)
  if (customStyles) {
    STYLES = {
      ...STYLES,
      ...customStyles
    }
  }

	return (
		<>
      {
        gradient ? 
          <TouchableOpacity
            onPress={action}
            disabled={disabled}
          >
            <LinearGradient 
              style={STYLES}
              colors={gradientColors}
            >  
              { children }
            </LinearGradient>
          </TouchableOpacity> :

          <TouchableOpacity
            style={STYLES}
            onPress={action}
            disabled={disabled}
          >   
            { children }
          </TouchableOpacity>
      }
		</>
	)
}

export default BaseButton