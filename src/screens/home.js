import { useEffect, memo, useState } from 'react'
import { Dimensions } from 'react-native'

// components
import { useComponent } from '@components'
const {
  BaseText,
  BaseIcon,
  BaseButton,
  BaseImage,
  BaseDiv,
  BaseGradient
} = useComponent()

// modals
import { useModal } from '@modals'
const { SetupConnection } = useModal()

// images
import { images } from '@assets/images'

const windowWidth = Dimensions.get('window').width
function home ({ goto, styles }) {
  // meta
  const { metaStates, metaMutations } = global.reduxMeta.useMeta()

  // styles
  const style = styles['home']

  const meta = {
    ...metaStates('home', [
      'header',
      'setup',
      'modal'
    ]),

    ...metaMutations('home', [
      'SET_MODAL'
    ])
  }

  return (
    <BaseDiv styles="flex-1 bg-[#fff] ph-[20]">
      <BaseImage
        src={images.contentBG}
        styles="absolute top right w-[300] h-[450] opacity-[.05]"
      />

      <BaseGradient
        styles="flex row-reverse h-[160] bblr-[50] bbrr-[200] absolute top left right overflow-hidden"
        colors={['#ffa52e', '#ff651a']}
        horizontal={true}
      >
      </BaseGradient>

      <BaseImage
        src={images.hero}
        styles="w-[180] h-[180] absolute top-[50] right-[20]"
      />

      <BaseDiv styles={`w-[${windowWidth-40}] flex mt-[190] gap-[10]`}>
        <BaseText
          styles={style.greetings}
          bold={true}
        >
          { meta.header.greetings }
        </BaseText>

        <BaseText styles={style.headText}>
          { meta.header.message }
        </BaseText>
      </BaseDiv>

      <BaseDiv styles={`w-[${windowWidth-40}] flex pv-[30] gap-[10]`}>
        {
          meta.setup.map((item, key) => {
            return (
              <BaseGradient
                key={key}
                styles="relative w-[100%] h-[140] flex row items-center justify-between br-[15] p-[20]"
                colors={item.background}
                horizontal={true}
              >
                <BaseDiv styles="flex h-[100%] gap-[5]">
                  <BaseText
                    styles={style.setupHeadText}
                    bold={true}
                  >
                    { item.title }
                  </BaseText>


                  <BaseText styles={style.setupTextValue}>
                    { item.host || '--.--.--.-:----' }
                  </BaseText>

                  <BaseButton
                    buttonStyle={style.setupBtn}
                    gradient={true}
                    gradientColors={['#ffc72b', '#ff971e']}
                    action={() => {
                      if (item.title == 'CONNECTION') {
                        meta.SET_MODAL('setupConnection')
                      }
                    }}
                  >
                    <BaseText styles={style.setupBtnText}>
                      { item.buttonText }
                    </BaseText>
                  </BaseButton>
                </BaseDiv>
                
                <BaseIcon
                  styles={style.setupIcon}
                  type={item.icon.type}
                  name={item.icon.name}
                />
              </BaseGradient>
            )
          })
        }
      </BaseDiv>

      <BaseDiv styles="flex w-[100%] items-center absolute bottom-[30] left-[20]">
        <BaseGradient
          styles="w-[230] h-[60] br-[40] p-[4]"
          customStyles={{ opacity: !meta.setup[0].host || !meta.setup[1].host ? .5 : 1 }}
          colors={['#ffbf6a', '#ff651a']}
          horizontal={true}
        >
          <BaseButton
            buttonStyle={style.startBtn}
            disabled={!meta.setup[0].host || !meta.setup[1].host}
          >
            <BaseText
              styles={style.startBtnText}
              bold={true}
            >
              Start Queueing
            </BaseText>
          </BaseButton>
        </BaseGradient>
      </BaseDiv>
    
      {
        meta.modal.setupConnection && <SetupConnection />
      }
      
    </BaseDiv>
  )
}

export default memo (home)