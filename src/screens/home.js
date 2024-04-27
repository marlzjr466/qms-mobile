import { useEffect, memo, useCallback } from 'react'


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
const { SetupConnection, DeviceConnection } = useModal()

// hooks
import { useBLE } from '@hooks/useBLE'

// images
import { images } from '@assets/images'

// utilities
import { printQueueNumber } from '@utilities/helper'

function home ({ goto }) {
  // meta
  const { metaStates, metaMutations, metaActions } = global.$reduxMeta.useMeta()

  const meta = useCallback({
    ...metaStates('home', [
      'header',
      'setup',
      'modal'
    ]),

    ...metaMutations('home', [
      'SET_MODAL'
    ]),

    ...metaActions('home', ['getQueueNumber'])
  })
  
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    disconnectFromDevice
  } = useBLE()

  // ask bluetooth permission
  const askPermission = async () => {
    const permission = await requestPermissions()

    if (permission) {
      if (!connectedDevice) {
        scanForPeripherals()
      }
    }
  }

  useEffect(() => {
    askPermission()
  }, [])

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

      <BaseDiv styles={`w-[${global.$windowWidth-40}] flex mt-[190] gap-[10]`}>
        <BaseText
          styles="color-[#11335a] fs-[15]"
          bold={true}
        >
          { meta.header.greetings }
        </BaseText>

        <BaseText styles={`w-[${global.$windowWidth-40}] color-[rgba(0,0,0,.5)] fs-[13]`}>
          { meta.header.message }
        </BaseText>
      </BaseDiv>

      <BaseDiv styles={`w-[${global.$windowWidth-40}] flex pv-[30] gap-[10]`}>
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
                    styles="color-[#fff] fs-[20]"
                    bold={true}
                  >
                    { item.title }
                  </BaseText>


                  <BaseText styles="color-[rgba(255,255,255,.7)] fs-[15]">
                    { item.host || item.device || '--.--.--.-:----' }
                  </BaseText>

                  <BaseButton
                    styles="pv-[10] ph-[15] bg-[#fff] mt-[20] br-[30]"
                    gradient={true}
                    gradientColors={['#ffc72b', '#ff971e']}
                    action={() => {
                      meta.SET_MODAL(
                        item.title === 'CONNECTION'
                          ? 'setupConnection'
                          : 'setupPrinter'
                      )
                    }}
                  >
                    <BaseText styles="color-[#fff]">
                      { item.buttonText }
                    </BaseText>
                  </BaseButton>
                </BaseDiv>
                
                <BaseIcon
                  styles="absolute bottom-[-30] right-[-30] fs-[140] color-[#fff] opacity-[.2]"
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
          customStyles={{ opacity: !meta.setup[0].host || !meta.setup[1].device ? .5 : 1 }}
          colors={['#ffbf6a', '#ff651a']}
          horizontal={true}
        >
          <BaseButton
            styles="w-[100%] h-[100%] br-[40] bw-[4] bc-[#fff] flex justify-center items-center"
            disabled={!meta.setup[0].host || !meta.setup[1].device}
            action={async () => {
              const queueNumber = meta.getQueueNumber()
              const res = await printQueueNumber(queueNumber)

              if (res) {
                console.log('Queue number generated successfully!')
              }
            }}
          >
            <BaseText
              styles="color-[#11335a] opacity-[.7] fs-[15]"
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
      
      {
        meta.modal.setupPrinter &&
        <DeviceConnection
          connectToPeripheral={connectToDevice}
          devices={allDevices}
        />  
      }
    </BaseDiv>
  )
}

export default memo (home)