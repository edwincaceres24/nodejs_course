process.on('beforeExit',()=>{
	console.log('The process is goint to finish')
})
process.on('exit',()=>{
	console.log('The process has finished') 
	setTimeout(()=>{
		console.log('This will never be print')
	},0)
})

process.on('uncaughtException',(err, origin)=>{
	console.error('We have forgotten to catch the error')	
	console.error(err)
	console.error(origin)
})

functionmy()
