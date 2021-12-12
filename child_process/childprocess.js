const {exec,spawn}=require('child_process');
const child= spawn('pwd');


let myProcess=spawn('ls',['-la']); //Other commands are added inside an array
console.log(myProcess)

myProcess.stdout.on('data',function(data){
		console.log(data.toString())
})

myProcess.stderr.on('data',function(data){ //Only will execute is child process exists with code 1, which indicates an error
		console.log(`This is the sterr: ${data}`)
})

child.stdout.on('data', function (data) {
		console.log(`This is the stout of the command: ${data}`)
})

child.stderr.on('data',(data)=>{
		console.error(`Child sdterr: ${data}`)
})

/*exec('ls -la',(err,stdout,stderr)=>{
	if(err){
		console.log(err)
		return false;
	}
	console.log(stdout)
})*/

/*Pipe Function- We can use it to send a command to a writable stream such as stouint*/

const input=spawn('wc')

process.stdin.pipe(input.stdin)

input.stdout.on('data',(data)=>{
       console.log(`Child sdtout using pipe: ${data}`)
	 })
