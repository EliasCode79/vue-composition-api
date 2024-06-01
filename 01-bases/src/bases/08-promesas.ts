console.log('inicio');

// la promesas tiene 2 parametros el resolve y reject
new Promise((resolve, reject) => {
	let val = false;
	if (val) {
		return resolve('mi amigo cumplio');
	}
	return reject('no cumplio');
})
	.then((res) => {
		console.log(res);
	})
	.catch((resErro) => {
		console.info(resErro);
	})
	.finally(() => {
		console.log('finalizo la promesa');
	});

// cuando el resolve se ejecutan y queremos ver su valor lo podemos ver o manejar con el .then y cuando se ejecutan reject utilizamos el .catch y el .finally es para cuando la promesa termina ya sea sea haya resuelto o no, este siempre se ejecutara, la promesa puede devolve un reject o un resolve, solo uno de estos.

console.log('fin');
