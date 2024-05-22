const getPerson = (name: string) => `Hola ${name}`;
// console.log(getPerson('Elias'));

const data = (uuid: string) => ({
	uuid,
	name: 'tony',
});

// console.log(data('123-abc'));

const heros = [
	{
		id: 1,
		name: 'Batman',
	},
	{
		id: 2,
		name: 'superman',
		power: 'super fuerza',
	},
];

const hero = heros.find((h) => h.id === 1);

console.log(hero?.power?.toUpperCase());
