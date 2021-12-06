let i = 0;
let interval = setInterval( ()=>{
		console.log(`Hola ${i}`)
		console.log(__dirname)
	if(i===5){
			clearInterval(interval)
		}
		i++;
	},1000);
