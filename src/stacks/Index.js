import slider from '@screens/slider'
import home from '@screens/home'

const options = { headerShown: false }
export default () => [
  {
    name: 'slider',
    component: slider,
    options: options
  },
  {
    name: 'home',
    component: home,
    options: options
  }
]