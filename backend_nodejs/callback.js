const asyncCallback = function (cb){
	setTimeout(()=>{
			if (Math.random()<=0.5){
					return cb(null,'Hola Mundo');
			}else{
				cb(new Error('Hello error'));
			}
	},2000)
}
