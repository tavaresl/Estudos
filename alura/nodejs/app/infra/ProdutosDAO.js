class ProdutosDAO {
    constructor(connection) {
        this._connection = connection
    }

    lista(callback) {
        this._connection.query('SELECT * FROM livros', callback)
    }

    salva(produto, callback) {
        this._connection.query('INSERT INTO livros set ?', produto, callback)
    }
}

module.exports = function() {
    return ProdutosDAO
}