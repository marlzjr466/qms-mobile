import { useState } from 'react'
import { TextInput } from 'react-native'

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
  let STYLES = {}

  if (styles) {
    STYLES = global.$rnStyle(styles)
    if (customStyles) {
      STYLES = {
        ...STYLES,
        ...customStyles
      }
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