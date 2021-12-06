const http = require('http');


http.createServer(router).listen((3000))

function router(req, res){
	console.log('New Petition')
	console.log((req.url))
	switch(req.url){
		case '/hola':
			res.write(`<h1>Hello, how are you?</h1>
								<p>This was written with Node :)</p>
								`)
				res.end();
				break
		default:
				res.write('Error 404: Not response')
				res.end()

	}

	/*res.writeHead(201,{'Content-Type': 'text/plain'})
	res.write("Hello world, from NodeJs")
	res.end();*/
}

console.log("Listening http in port 3000")
