import { StyleSheet, Text, View, Button } from 'react-native'

export default function Address () {
  const { metaStates, metaMutations, metaActions } = global.reduxMeta.useMeta()
  const init = {
    ...metaStates('address', [
      'address'
    ]),
    ...metaStates('name', [
      'name'
    ]),

    ...metaMutations('address', [
      'SET_ADDRESS'
    ]),

    ...metaActions('address', {
      ga: 'getAddress'
    }),

    ...metaActions('name', [
      'getFullname'
    ])
  }

  return (
    <View style={styles.container}>
      <Text>It's me { init.name } from { init.address }</Text> 
      <Button
          title="Test"
          onPress={() => {
            init.ga('Athena!')
            init.getFullname()
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
