module.exports = function home (app) {
    app.get('/', (request, response) => {
        const connection  = app.infra.connection.getConnection(),
              produtosDAO = new app.infra.ProdutosDAO(connection)

        produtosDAO.lista((err, result) => {
            response.render('home/index', { livros : result })
        })
        
        connection.end()
    })
}