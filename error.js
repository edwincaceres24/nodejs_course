function anotherCall(){
	return breaking();
}

function breaking(){
	return 3+z;
}

function breakingAsync(callback){
	setTimeout(()=>{
		try{
			return 3+y
			}catch(err){
				callback(err)
			}
	},0)
}
try{
	breakingAsync(function(error){
			console.log(error.message)
	})
	breaking()
} catch(err){
		console.error('Well, there is something wrong here')
	console.log(err)
}
