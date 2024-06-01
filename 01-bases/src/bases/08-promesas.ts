import type { hero } from '../data/heroes';
import { getHeroById } from './07-im-exp';
// console.log('inicio');

// // la promesas tiene 2 parametros el resolve y reject
// new Promise((resolve, reject) => {
// 	let val = false;
// 	if (val) {
// 		return resolve('mi amigo cumplio');
// 	}
// 	return reject('no cumplio');
// })
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((resErro) => {
// 		console.info(resErro);
// 	})
// 	.finally(() => {
// 		console.log('finalizo la promesa');
// 	});

// // cuando el resolve se ejecutan y queremos ver su valor lo podemos ver o manejar con el .then y cuando se ejecutan reject utilizamos el .catch y el .finally es para cuando la promesa termina ya sea sea haya resuelto o no, este siempre se ejecutara, la promesa puede devolve un reject o un resolve, solo uno de estos.

// console.log('fin');

const getHeroByIdAsyn = (id: number): Promise<hero> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const hero = getHeroById(id);
			hero ? resolve(hero) : reject(`no se encontro el hero ${id}`);
		}, 1500);
	});
};

// aca asignamos la promesa a una variable
// const hero = getHeroByIdAsyn(2);
// hero.then((rep) => console.log('el nombre es: ', rep.name)).catch((error) => console.log(error));

// aca llamamos a la funcion y lo resolvemos con esta misma funcion la promesa
getHeroByIdAsyn(2)
	.then((rep) => console.log('el nombre es: ', rep.name))
	.catch((error) => console.log(error));
