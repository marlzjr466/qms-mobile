import React, { useCallback } from "react"
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Button
} from "react-native"

// images
import { images } from '@assets/images'
console.log('------', images)

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

const DeviceModalListItem = props => {
  const { item, connectToPeripheral, closeModal } = props

  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item)
    closeModal()
  }, [closeModal, connectToPeripheral, item.item])

  return (
    item.item.name != null ? (
      <TouchableOpacity
        onPress={connectAndCloseModal}
        style={modalStyle.ctaButton}
      >
        <Text style={modalStyle.ctaButtonText}>{item.item.name}</Text>
      </TouchableOpacity>
    ) : ''
  )
}

export default function DeviceConnection ({ devices, connectToPeripheral }) {
  const { metaStates, metaMutations } = global.$reduxMeta.useMeta()
  const meta = {
    ...metaStates('device-connection', ['deviceModal']),
    // ...metaActions('device-connection', ['showDeviceModal'])
    ...metaMutations('home', [
      'SET_MODAL'
    ])
  }

  const renderDeviceModalListItem = useCallback(
    item => {
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
          closeModal={() => meta.SET_MODAL('setupPrinter')}
        />
      )
    },
    [connectToPeripheral]
  )
  
  return (
    <BaseModal styles={`
      flex
      w-[${global.$windowWidth}]
      h-[100%]
      bg-[rgba(0,0,0,.3)]
      absolute
      ph-[25]
      items-center
      justify-center
    `}>
      <BaseDiv
        styles="flex w-[100%] p-[20] bg-[#fff] br-[10] gap-[5] mt-[-150] relative"
        customStyles={{
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 10
        }}
        animatable={true}
        animation='bounceIn'
        duration={1500}
      >
        {
          !devices.length
           ? <BaseDiv styles="flex row w-[100%] gap-[5] items-center">
                <BaseText
                  styles="color-[rgba(0,0,0,.4)] pl-[3]"
                  bold={true}
                >
                  Device found
                </BaseText>
      
                <BaseText styles="color-[rgba(0,0,0,.4)] fs-[11]">
                  (Tap on a device to connect)
                </BaseText>
              </BaseDiv>
          : <BaseDiv styles="flex w-[100%] items-center justify-center">
              <BaseImage
                styles="w-[100] h-[100] opacity-[.2]"
                src={images.searchDevice}
              />

              <BaseText styles="color-[rgba(0,0,0,.4)] mt-[10]">
                Searching for devices
              </BaseText>
            </BaseDiv>
        }
      </BaseDiv>
    </BaseModal>
  )
}

const modalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.1)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  wrapper: {
    width: 300,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 10
  },

  modalFlatlistContiner: {
    paddingVertical: 20,
    height: 300,
  },

  modalCellOutline: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8
  },

  modalTitleText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center"
  },

  ctaButton: {
    backgroundColor: "#08BB74",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 5
  },

  ctaButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
})
