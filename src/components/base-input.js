import { useState } from 'react'
import { TextInput } from 'react-native'

export default function BaseInput({
  styles,
  secure,
  placeholder,
  type,
  value,
  editable,
  action
}) {
  return (
    <TextInput
      style = { styles }
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