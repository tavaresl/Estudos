const configApp = require('./config/app'),
      app       = configApp(),
      http      = require('http').Server(app),
      io        = require('socket.io')(http)

app.set('io', io)
http.listen(8080, _ => {
    console.log('Server running, listening on port 8080')
})