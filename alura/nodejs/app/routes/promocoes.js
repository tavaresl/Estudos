module.exports = function promocoes (app) {
    app.get('/promocao', (request, response) => {
        response.render('promocoes/form')
    })

    app.post('/promocao', (request, response) => {
        const promocao = request.body

        app.get('io').emit('novaPromocao', promocao)
        response.redirect('/')
    })
}