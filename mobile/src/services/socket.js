import socketio from 'socket.io-client'

const socket = socketio('http://192.168.0.115:3333', {
  autoConnect: false
})

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }
  socket.connect()
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect()
  }
}

function subscribeToNewDevs(subscripeFunction) {
  socket.on('new-dev', subscripeFunction)
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
}