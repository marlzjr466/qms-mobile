import { useEffect, memo, useState } from 'react'
import { View, Text, Button } from 'react-native'

function slider ({ goto, styles }) {
  return (
    <View style={styles.container}>
      <Text>This is slider</Text>

      <Button
        title="Goto home screen"
        onPress={() => {
          goto({ child: 'home' })
        }}
      />
    </View>
  )
}

export default memo (slider)