const EventEmitter = require('events').EventEmitter
let counter = 0

const em = new EventEmitter()

global.setInterval(() => em.emit('timed', counter++), 3000)

em.on('timed', data => console.log(`Timed ${counter} times`))