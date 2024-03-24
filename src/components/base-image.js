import { Image } from 'react-native'

function BaseImage ({ styles, src }) {
  return (
    <Image 
      style = { styles }
      source = { src }
    />
  )
}

export default BaseImage