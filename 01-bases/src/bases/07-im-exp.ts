import heroes, { type onwer } from '../data/heroes';
// poner type antes del nombre del type o interface, esto ayuda a js para detectar q esto no es propio de js.

export const getHeroById = (id: number) => {
	return heroes.find((hero) => hero.id === id);
};

export const getHeroesByOwner = (owner: onwer) => {
	return heroes.filter((hero) => hero.owner === owner) ?? {};
};

// console.log(getHeroesByOwner('Marvel'));
