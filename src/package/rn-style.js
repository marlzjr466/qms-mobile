import { StyleSheet } from 'react-native'

const isNumber = str => /^\d+$/.test(str)
export default str => {
  if (typeof str !== 'string') {
    throw 'Invalid arguments'
  }

  return (
    StyleSheet.create({
      get: str.split(' ')
        .reduce((acc, curr) => {
          const [prop] = curr.split('-[')
          const [_, value] = curr.includes('-[')
            ? curr.match(/\[(.*?)\]/)
            : ['', null]
          const properties = getProperty(prop)
  
          if (properties === 'Invalid property') {
            throw properties
          }
  
          let style = {}
          if (Array.isArray(properties)) {
            style = {
              [properties[0]]: properties[1]
            }
          } else {
            style = {
              [properties]: value
                ? isNumber(value) || value.includes('.')
                  ? +value 
                  : value
                : 0
            }
          }
  
          return { ...acc, ...style }
        }, {})
    }).get
  )
}

function getProperty (property) {
  const styles = {
    // flex
    flex: ['display', 'flex'],
    gap: 'gap',
    'flex-1': ['flex', 1],
    'col': ['flexDirection', 'column'],
    'col-reverse': ['flexDirection', 'column-reverse'],
    'row': ['flexDirection', 'row'],
    'row-reverse': ['flexDirection', 'row-reverse'],
    'space-between': ['justifyContent', 'space-between'],
    'items-center': ['alignItems', 'center'],

    // margin
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mh: 'marginHorizontal',
    mv: 'marginVertical',

    // padding
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    ph: 'paddingHorizontal',
    pv: 'paddingVertical',

    // radius
    br: 'borderRadius',
    bblr: 'borderBottomLeftRadius',
    btlr: 'borderTopLeftRadius',
    bbrr: 'borderBottomRightRadius',
    btrr: 'borderTopRightRadius',

    // position
    absolute: ['position', 'absolute'],
    relative: ['position', 'relative'],

    // sides
    top: 'top',
    left: 'left',
    bottom: 'bottom',
    right: 'right',

    w: 'width',
    h: 'height',
    bg: 'backgroundColor',
    opacity: 'opacity',
    'overflow-hidden': ['overflow', 'hidden']
  }

  if (!(property in styles)) {
    console.log('-------------', property)
    return 'Invalid property'
  }

  return styles[property]
}