console.log("Hola monohilo")

let i= 0;
setInterval(
	(()=>{console.log(i)
		i++;
	}),1000)
