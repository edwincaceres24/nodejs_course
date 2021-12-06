console.time('todo')

let suma = 0;
console.time('bucle')
for (let i=0; i<10000;i++){
	suma +=1
}

console.timeEnd('bucle')
console.time('asíncrono')
asincronus()
	.then(()=>console.timeEnd(('asíncrono')))
console.timeEnd('todo')

function asincronus(){
	return new Promise( (resolve) =>{
			setTimeout( function(){
				console.log('Termina el proceso asíncrono')
				resolve()
			})
		}
	)
}
