const express    = require('express'),
      load       = require('express-load'),
      bodyParser = require('body-parser'),
      validator  = require('express-validator')

module.exports = function buildApp() {
    const app = express()

    app.set('view engine', 'ejs')
    app.set('views', './app/views')
    //app.set('io', io)

    app.use(express.static('./app/public'))
    app.use(bodyParser.urlencoded({ extended : true }))
    app.use(bodyParser.json())
    app.use(validator())

    load('routes', { cwd : 'app' })
        .then('infra')
        .into(app)

    return app
}