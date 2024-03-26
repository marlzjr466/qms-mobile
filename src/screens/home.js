import { useEffect, memo, useState } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

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
    ...metaStates('home', [
      'header',
      'setup'
    ])
  }

  return (
    <View style={style.container}>
      <BaseImage
        src={images.contentBG}
        styles={style.contentBG}
      />

      <LinearGradient
        style={style.hero}
        colors={['#ffa52e', '#ff651a']}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* <BaseIcon
          styles={style.heroIcon}
          type='materialicons'
          name='cast-connected'
        /> */}
      </LinearGradient>

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

      <View style={style.setupPanel}>
        {
          meta.setup.map((item, key) => {
            return (
              <LinearGradient
                key={key}
                style={style.setupItem}
                colors={item.background}
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <View style={style.setupTitle}>
                  <BaseText
                    styles={style.setupHeadText}
                    bold={true}
                  >
                    { item.title }
                  </BaseText>

                  <BaseText styles={style.setupTextValue}>
                    { item.host }
                  </BaseText>

                  <BaseButton
                    buttonStyle={style.setupBtn}
                    gradient={true}
                    gradientColors={['#ffc72b', '#ff971e']}
                  >
                    <BaseText styles={style.setupBtnText}>
                      { item.buttonText }
                    </BaseText>
                  </BaseButton>
                </View>
                
                <BaseIcon
                  styles={style.setupIcon}
                  type={item.icon.type}
                  name={item.icon.name}
                />
              </LinearGradient>
            )
          })
        }
      </View>

      <View style={style.startPanel}>
        <LinearGradient
          style={style.startWrapper}
          colors={['#ffbf6a', '#ff651a']}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <BaseButton
            buttonStyle={style.startBtn}
          >
            <BaseText
              styles={style.startBtnText}
              bold={true}
            >
              Start Queueing
            </BaseText>
          </BaseButton>
        </LinearGradient>
      </View>
    </View>
  )
}

export default memo (home)