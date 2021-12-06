const express = require('express');

const app = express();

app.use('/', function (req,res){
	res.send('Hello World from Express')
});

app.listen(3000);

console.log("App is listening on PORT 3000");
