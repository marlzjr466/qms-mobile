import { StyleSheet, Text, View, Button } from 'react-native'

export default function Name () {
  const { metaStates, metaMutations, metaActions } = global.reduxMeta.useMeta()
  const init = {
    ...metaStates('name', [
      'name',
      'fullname'
    ]),

    ...metaStates('name', {
      fullname: 'fn'
    }),

    ...metaMutations('name', [
      'SET_NAME',
      'SET_FULLNAME'
    ]),

    ...metaMutations('name', {
      sn: 'SET_NAME'
    }),

    ...metaActions('name', {
      gfn: 'getFullname'
    }),

    ...metaActions('address', {
      ga: 'getAddress'
    })
  }

  return (
    <View style={styles.container}>
        <Button
          title="Greet me!"
          onPress={() => {
            init.sn('Athena!')
            // init.ga('Cebu')
          }}
        />
        <Text>Hello there, I'm { init.name }</Text> 
        <Text>My fullname is { init.fn }</Text> 
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
