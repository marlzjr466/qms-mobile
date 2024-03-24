import home from '@modules/home'
import slider from '@modules/home'
import deviceConnection from '@modules/device-connection'

export default () => [
  home(),
  slider(),
  deviceConnection()
]
