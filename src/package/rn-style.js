function getProperty (property) {
  const styles = {
    flex: ['display', 'flex'],

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
  }

  if (!(property in styles)) {
    return 'Invalid property'
  }

  return styles[property]
}

const isNumber = str => /^\d+$/.test(str)
export default str => {
  if (typeof str !== 'string') {
    throw 'Invalid argument'
  }

  // convert to array
  const styles = str.split(' ')
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
            ? isNumber(value)
              ? +value 
              : value
            : 0
        }
      }

      return { ...acc, ...style }
    }, {})

  console.log(styles)
}