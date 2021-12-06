const fs = require('fs');
function readDocument(route,cb){
	fs.readFile(route,(err,data)=>{
		console.log(data.toString());
	})
}

function writeDocument(route, content, callback){
	fs.writeFile(route, content, (err)=>{
		if(err){
			console.error('No puedo escribirlo', err)
		}else{
			console.log('Se ha escrito un documento')
		}
	})
}
function eraseDocument(route, cb){
	fs.unlink(route, cb)
}

//readDocument(__dirname + '/mytext.txt')
//writeDocument(__dirname + '/mytext.txt',"Soy un archivo nuevo", console.log)
eraseDocument(__dirname + '/mytext.txt',console.log)
