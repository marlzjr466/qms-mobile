import { useEffect, memo, useCallback, useState } from 'react'

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

// images
import { images } from '@assets/images'

// utilities
import { formatQueueNumber, printQueueNumber, getDate } from '@utilities/helper'

function Queue ({ goto }) {
  // meta
  const { metaStates, metaActions } = global.$reduxMeta.useMeta()

  const meta = useCallback({
    ...metaStates('home', ['queueNumber']),
    ...metaActions('home', ['getQueueNumber'])
  })

  const [currentDate, setCurrentDate] = useState(getDate('MMMM Do YYYY, h:mm:ss a'))
  useEffect(() => {

    global.$socket.on('current-date', date => {
      setCurrentDate(date)
    })
  }, [])

  return (
    <BaseDiv styles="flex-1 bg-[#fff] ph-[20]">
      <BaseImage
        src={images.contentBG}
        styles="absolute top right w-[300] h-[450] opacity-[.05]"
      />

      <BaseGradient
        styles="flex row-reverse h-[160] bblr-[50] bbrr-[200] absolute top left right overflow-hidden"
        colors={['#fc426f', '#8c52e7']}
        horizontal={true}
      >
      </BaseGradient>

      <BaseImage
        src={images.queueHero}
        styles="w-[180] h-[180] absolute top-[50] right-[20]"
      />

      <BaseDiv styles={`w-[${global.$windowWidth-40}] flex mt-[190] gap-[10]`}>
        <BaseText
          styles="color-[#11335a] fs-[15]"
          bold={true}
        >
          { 'Current\nqueue number' }
        </BaseText>

        <BaseText styles={`w-[${global.$windowWidth-40}] color-[rgba(0,0,0,.5)] fs-[13]`}>
          { currentDate }
        </BaseText>
      </BaseDiv>

      <BaseDiv styles={`w-[${global.$windowWidth-40}] flex pv-[30] gap-[10]`}>
        <BaseGradient
          styles="relative w-[100%] h-[200] flex row items-center justify-center br-[15] p-[20]"
          colors={['#21e7ad', '#3770f5']}
          horizontal={true}
        >
          
          <BaseText
            styles="color-[#fff] fs-[80]"
            bold={true}
          >
            { formatQueueNumber(meta.queueNumber) }
          </BaseText>

          <BaseIcon
            styles="absolute bottom-[-30] right-[-30] fs-[140] color-[#fff] opacity-[.2]"
            type="materialicons"
            name="confirmation-number"
          />
        </BaseGradient>
      </BaseDiv>

      <BaseDiv styles="flex w-[100%] items-center absolute bottom-[30] left-[20]">
        <BaseGradient
          styles="w-[230] h-[60] br-[40] p-[4]"
          colors={['#ffbf6a', '#ff651a']}
          horizontal={true}
        >
          <BaseButton
            styles="w-[100%] h-[100%] br-[40] bw-[4] bc-[#fff] flex justify-center items-center"
            action={async () => {
              const queueNumber = formatQueueNumber(meta.getQueueNumber())
              // const res = await printQueueNumber(queueNumber)

              // if (res) {
              //   console.log('Queue number generated successfully!')
              // }

              global.$socket.emit('generate-number', queueNumber)
              // goto({ child: 'home' })
            }}
          >
            <BaseText
              styles="color-[#11335a] opacity-[.7] fs-[15]"
              bold={true}
            >
              Generate number
            </BaseText>
          </BaseButton>
        </BaseGradient>
      </BaseDiv>
    </BaseDiv>
  )
}

export default memo (Queue)