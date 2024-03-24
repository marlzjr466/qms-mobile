import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import BaseIcon from './base-icon'

function BaseButton ({
  children,
  text,
  icon,
  buttonStyle,
  buttonTextStyle,
  disabled,
  gradient, 
  gradientColors, 
  action 
}) {
	return (
		<>
      {
        gradient ? 
          <TouchableOpacity
            onPress={action}
            disabled={disabled}
          >
            <LinearGradient 
              style={buttonStyle}
              colors={gradientColors}
            >   
              {
                icon
                  ? <BaseIcon
                    styles={icon.styles}
                    type={icon.type}
                    name={icon.name}
                    size={icon.size}
                    color={icon.color}
                  />
                  : null
              }

              {
                children ? 
                  children :
                  <Text style={buttonTextStyle}>{text}</Text>
              }
            </LinearGradient>
          </TouchableOpacity> :

          <TouchableOpacity
            style={buttonStyle}
            onPress={action}
            disabled={disabled}
          >   
            {
              icon 
                ? <BaseIcon
                  styles={icon.styles}
                  type={icon.type}
                  name={icon.name}
                  size={icon.size}
                  color={icon.color}
                />
                : null
            }
            
            {
              children ? 
                children :
                <Text style={buttonTextStyle}>{text}</Text>
            }
          </TouchableOpacity>
      }
		</>
	)
}

export default BaseButton