import { Manager } from "socket.io-client"

// constants
import constants from "@constants"

class Socket {
  constructor () {
    this.manager = null
    this.socket = null
  }

  connect (ip) {
    this.manager = new Manager(`http://${ip}:8001`, {
      transports: ["websocket", "polling"]
    })

    this.socket = this.manager.socket('/qms')
    
    this.socket.on('connect', () =>  {
      console.log('socket connected to server')
    })
    
    this.socket.on('connect_error', err =>  {
      console.log('socket error:', err)
    })
  }

  on (eventName, fn) {
    this.socket.on(eventName, fn)
  }

  emit (eventName, data) {
    this.socket.emit(eventName, data)
  }
}

export default new Socket()