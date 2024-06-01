// utiliza las interfaces cuando este se vaya a expandir, q en un futuro puedas agregar mas elementos
export interface hero {
	id: number;
	name: string;
	owner: onwer;
}

// utiliza los tipos para valores constantes
export type onwer = 'DC' | 'Marvel';

const heroes: hero[] = [
	{
		id: 1,
		name: 'Batman',
		owner: 'DC',
	},
	{
		id: 2,
		name: 'Spiderman',
		owner: 'Marvel',
	},
	{
		id: 3,
		name: 'Superman',
		owner: 'DC',
	},
	{
		id: 4,
		name: 'Flash',
		owner: 'DC',
	},
	{
		id: 5,
		name: 'Wolverine',
		owner: 'Marvel',
	},
];

// con "as const" hacemos q la variable sea solo de lectura
export const owners = ['DC', 'Marvel'] as const;

export default heroes;
