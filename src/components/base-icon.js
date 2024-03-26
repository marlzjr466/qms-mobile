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
  
function BaseIcon ({ type, name, size, color, styles }) {
  let icon = null

  switch(type) {
    case 'foundation':
      icon = <Foundation 
          style={styles}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'fontawesome':
      icon = <FontAwesome
          style={styles}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'ionicons':
      icon = <Ionicons
          style={styles}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'materialicons':
      icon = <MaterialIcons
          style={styles}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break
    
    case 'entypo':
      icon = <Entypo
          style={styles}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'feather':
      icon = <Feather 
          style={styles}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'fontisto':
      icon = <Fontisto 
          style={styles}
          name={name ? name : null} 
          size={size ? size : 25} 
          color={color ? color : '#000'} 
      />
      break

    case 'antdesign':
      icon = <AntDesign 
          style={styles}
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