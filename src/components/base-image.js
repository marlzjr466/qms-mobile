import { Image } from 'react-native'
import rnStyle from '@package/rn-style'

function BaseImage ({ styles, src, customStyles }) {
  let STYLES = rnStyle(styles)
  if (customStyles) {
    STYLES = {
      ...STYLES,
      ...customStyles
    }
  }

  return (
    <Image 
      style = { STYLES }
      source = { src }
    />
  )
}

export default BaseImage