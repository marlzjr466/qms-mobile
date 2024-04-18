import { useState } from 'react'
import { TextInput } from 'react-native'
import rnStyle from '@package/rn-style'

export default function BaseInput({
  styles,
  customStyles,
  secure,
  placeholder,
  type,
  value,
  editable,
  action
}) {
  let STYLES = rnStyle(styles)
  if (customStyles) {
    STYLES = {
      ...STYLES,
      ...customStyles
    }
  }

  return (
    <TextInput
      style = { STYLES }
      keyboardType = { type || null }
      secureTextEntry = { secure }
      placeholder = { placeholder }
      value = { value }
      onChangeText = { action }
      editable = { editable || true }
      selectTextOnFocus= { editable || true }
    />
  )
}