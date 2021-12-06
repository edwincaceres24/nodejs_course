const {exec,spawn}=require('child_process');

let myProcess=spawn('ls',['-la']);
console.log(myProcess)

myProcess.stdout.on('data',function(data){
		console.log(data.toString())
})

myProcess.on('exit',function(){
	console.log('The process has finished')
})

exec('ls -la',(err,stdout,stderr)=>{
	if(err){
		console.log(err)
		return false;
	}
	console.log(stdout)
})


