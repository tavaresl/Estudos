var http = require('http')
var fs 	 = require('fs')

http.createServer(function (req, res) {
	// Converte a query string num object literal, acessando a propriedade 'name'
	var name = require('url').parse(req.url, true).query.name

	if (name == undefined) {
		name = 'world'
	}

	// Exibe a imagem, se name == 'burningbird'
	if (name == 'burningbird') {
		var file = './helloWorld.jpg'

		fs.stat(file, function (err, stat) {
			if (err) {
				console.error(err);
				res.writeHead(200, { 'Content-Type' : 'text/plain' })
				res.end('Sorry, but went away for a fly \n')
			}
			else {
				var img = fs.readFile(file)
				res.contentType = 'image/jpg'
				res.contentLength = stat.size
				res.end(img, 'binary')
			}
		})
	}
	else {
		res.writeHead(200, { 'Content-Type' : 'text/plain' })
		res.end('Hello ' + name)
	}
}).listen(8124)

console.log('Server running at port 8124\n')
