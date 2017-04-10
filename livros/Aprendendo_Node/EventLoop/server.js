'use strict'

const http   = require('http')
const server = http.createServer()


// Third event to be called
server.on('request', (req, res) => {
    console.log('"request" event.')

    res.writeHead(200, { 'Content-Type' : 'text/plain' })
    res.end('Hello world!')
})

// Second event to be called
server.on('connection', () => {
    console.log('"connection" event')
})

// First event to be called
server.listen(8124, () => {
    console.log('"listening" event')
})

console.log('Server running on port 8124')