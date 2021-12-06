const fs = require('fs');

let data = '';

let readableStream=fs.createReadStream(__dirname+ 'input.txt');

readableStream.setEncoding('UTF8');

readableStream.on('data', function(chunk){
		data += chunk;
})

readableStream.on('data', function(){
	console.log(data)
})
