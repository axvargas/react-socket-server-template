class Sockets {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    // * On connection
    this.io.on('connection', (socket) => {
      console.log('User connected')

      // * On Cliente message
      socket.on('client-message', (data) => {
        console.log(data)
        this.io.emit('server-message', data)
      })
      
      // * On Cliente disconnect
      socket.on('disconnect', () => {
        console.log('user disconnected')
      })   
    })
    
  
  }
}
module.exports = Sockets