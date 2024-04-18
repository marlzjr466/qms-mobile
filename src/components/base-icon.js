import { 
  Foundation,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Entypo,
  Feather,
  Fontisto,
  AntDesign
} from '@expo/vector-icons'
import rnStyle from '@package/rn-style'
  
function BaseIcon ({ type, name, size, color, styles, customStyles }) {
  let STYLES = rnStyle(styles)
  if (customStyles) {
    STYLES = {
      ...STYLES,
      ...customStyles
    }
  }

  let icon = null

  switch(type) {
    case 'foundation':
      icon = <Foundation 
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'fontawesome':
      icon = <FontAwesome
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'ionicons':
      icon = <Ionicons
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'materialicons':
      icon = <MaterialIcons
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break
    
    case 'entypo':
      icon = <Entypo
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'feather':
      icon = <Feather 
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'fontisto':
      icon = <Fontisto 
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'antdesign':
      icon = <AntDesign 
          style={STYLES}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    default:
      throw('Icon not found')
  }
  
  return icon
}

export default BaseIcon