const express = require('express');

const app = express();

app.use('/', function (req,res){
	res.sendFile(__dirname + '/html/index.html')
	console.log("Hello")
});

app.listen(3001);

console.log("App is listening on PORT 3000");
console.log("This is your __dirname",__dirname)
