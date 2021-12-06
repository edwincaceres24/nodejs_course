const bcrypt = require('bcrypt');


const password = '123Edwin';

bcrypt.hash(password, 5, function(err,hash){
	console.log(hash);
 	bcrypt.compare(password, hash, function(err, res){
			console.log(res) //This should print if the pass has been hashed property
	})
}) //We should use an async function
