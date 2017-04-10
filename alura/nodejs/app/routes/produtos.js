module.exports = function produtos (app) {
    app.get('/produtos', 
        (request, response) => {
            const connection  = app.infra.connection.getConnection(),
                  produtosDAO = new app.infra.ProdutosDAO(connection)

            produtosDAO.lista((err, result) => {
                if (err) {
                    response.status(500).json(err)
                    return
                }
                response.format({
                    html() { response.render('produtos/lista', { lista : result }) },
                    json() { response.json(result) }
                })
            })
        })

    app.get('/produtos/novo', 
        (request, response) => {
            response.render('produtos/form', { erros : {}, produto : {} })
        })

    app.post('/produtos', 
        (request, response) => {
            const connection  = app.infra.connection.getConnection(),
                  produtosDAO = new app.infra.ProdutosDAO(connection),
                  produto     = request.body
            let   erros       = ''
                  
            request.assert('titulo', 'Título é obrigatório').notEmpty()
            request.assert('preco',  'Formato de preço inválido').isFloat()

            erros = request.validationErrors()

            if (erros) {
                response.status(400).json(erros)
                return
            }

            produtosDAO.salva(produto, (err, result) => {
                if (err) {
                    response.status(500).json(err)
                    return
                } 
                response.redirect('/produtos')
            })
        })
}