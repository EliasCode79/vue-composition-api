const person = {
	lastname: 'franco',
	age: 45,
	address: {
		city: 'new york',
		zip: 2323,
		lat: 232323,
		lng: 89898,
	},
}; //as const;

// const person2 = { ...person }; // la desestructario nos sirve solo para objetos de un solo nivel, osea q no tengan otrar objetos dentro, si lo tienen estos se pasaran por referencia a la variable q le asignemos.

// si un objecto tiene otro objeto dentro y no queremos q este ultimo se pase por referencia podemos utilizar el metodo "structuredClone(variable)".
const person2 = structuredClone(person);
person2.lastname = 'park';
person2.address.city = 'sucre';

console.log({ person, person2 });
