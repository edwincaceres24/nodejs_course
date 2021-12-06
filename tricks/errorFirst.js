function asyncrona(callback){
		setTimeout(function(){
			try{
					let a=3 +2;
					callback(null, a)
			} catch(e){
					callback(e,null);
			}
		},1000);
	
}

asyncrona(function(err,dato){
			if(err){
				console.error('We have a mistake')
				console.error(err)
				return false;
			}
			console.log('We have everything ok',dato)
	})
