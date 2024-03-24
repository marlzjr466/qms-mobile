import { useEffect, memo, useState } from 'react'
import { View } from 'react-native'

// components
import { useComponent } from '@components'

// images
import { images } from '@assets/images'

function home ({ goto, styles }) {
  // styles
  const style = styles['home']

  const {
    BaseText,
    BaseIcon,
    BaseButton,
    BaseImage
  } = useComponent()

  return (
    <View style={style.container}>
      {/* <View style={style.icons}>
        <BaseButton
          buttonStyle={style.icons_btn}
          icon={{
            type: 'ionicons',
            name: 'settings-outline',
            size: 20,
            color: 'rgba(0,0,0,.3)'
          }}
        /> 
      </View> */}

      <BaseImage
        src={images.contentBG}
        styles={style.contentBG}
      />

      <View style={style.logoPanel}>
        <BaseImage
          src={images.logo}
          styles={style.logo}
        />

        <BaseText styles={style.headText}>
          Queueing Management System
        </BaseText>
      </View>

      <View style={style.setupPanel}>
        <BaseImage
          src={images.loginBG}
          styles={style.setupPanelBG}
        />
      </View>
    </View>
  )
}

export default memo (home)