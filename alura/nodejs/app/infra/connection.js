const mysql   = require('mysql'),
      configs = {
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'alura_nodejs'
      }

module.exports = {
    getConnection () {
        return mysql.createConnection(configs)
    }
}