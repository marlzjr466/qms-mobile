import { useEffect, memo, useState } from 'react'
import { View } from 'react-native'

// components
import { useComponent } from '@components'

// images
import { images } from '@assets/images'

function home ({ goto, styles }) {
  // meta
  const { metaStates } = global.reduxMeta.useMeta()

  // styles
  const style = styles['home']

  const {
    BaseText,
    BaseIcon,
    BaseButton,
    BaseImage
  } = useComponent()

  const meta = {
    ...metaStates('home', ['header'])
  }

  return (
    <View style={style.container}>
      <BaseImage
        src={images.contentBG}
        styles={style.contentBG}
      />

      <View style={style.hero}></View>
      <BaseImage
        src={images.hero}
        styles={style.heroImage}
      />

      <View style={style.header}>
        <BaseText
          styles={style.greetings}
          bold={true}
        >
          { meta.header.greetings }
        </BaseText>

        <BaseText styles={style.headText}>
          { meta.header.message }
        </BaseText>
      </View>

      {/* <View style={style.setupPanel}>
        <BaseImage
          src={images.loginBG}
          styles={style.setupPanelBG}
        />
      </View> */}
    </View>
  )
}

export default memo (home)