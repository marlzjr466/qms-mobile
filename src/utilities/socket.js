import { io } from "socket.io-client"

class Socket {
  constructor () {
    this.io = io
    this.socket = null
  }

  connect (ip) {
    this.socket = this.io(`http://${ip}:8001`, {
      transports: ["websocket", "polling"]
    })
    
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