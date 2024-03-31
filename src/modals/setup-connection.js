import { useState, useEffect } from 'react'
import styles from '@assets/style'

// components
import { useComponent } from '@components'
const {
  BaseText,
  BaseIcon,
  BaseButton,
  BaseImage,
  BaseDiv,
  BaseModal,
  BaseInput,
  BaseGradient
} = useComponent()

export default function SetupConnection () {// meta
  const { metaStates, metaMutations } = global.reduxMeta.useMeta()
  const style = styles['modal']

  const meta = {
    ...metaStates('home', ['setup']),

    ...metaMutations('home', [
      'SET_MODAL',
      'SET_HOST'
    ])
  }

  const [host, setHost] = useState(meta.setup[0].host)
  
  return (
    <BaseModal styles={style.container}>
      <BaseDiv
        styles={style.setupConnection}
        animatable={true}
        animation='bounceIn'
        duration={1500}
      >
        <BaseText
          styles={style.setupConnectionTitle}
          bold={true}
        >
          Server Host:
        </BaseText>

        <BaseInput
          styles={style.setupConnectionInput}
          value={host}
          action={value => setHost(value)}
        />

        <BaseDiv styles={style.setupBtnContainer}>
          <BaseGradient
            styles={style.setupBtnWrapper}
            colors={['#F8F8F8', '#727272']}
          >
            <BaseButton
              buttonStyle={style.setupBtn}
              action={() => meta.SET_MODAL('setupConnection')}
            >
              <BaseText
                styles={style.setupBtnText}
                bold={true}
              >
                Cancel
              </BaseText>
            </BaseButton>
          </BaseGradient>

          <BaseGradient
            styles={{
              ...style.setupBtnWrapper,
              opacity: host === '' ? .5 : 1
            }}
            colors={['#ffbf6a', '#ff651a']}
          >
            <BaseButton
              buttonStyle={style.setupBtn}
              disabled={host === ''}
              action={() => {
                meta.SET_HOST({
                  index: 0,
                  host
                })

                meta.SET_MODAL('setupConnection')
                setHost('')
              }}
            >
              <BaseText
                styles={style.setupBtnText}
                bold={true}
              >
                Set host
              </BaseText>
            </BaseButton>
          </BaseGradient>
        </BaseDiv>
      </BaseDiv>
    </BaseModal>
  )
}