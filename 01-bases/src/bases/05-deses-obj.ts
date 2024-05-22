interface Hero {
	name: string;
	age: number;
	codeName: string;
	power?: string;
}

export const person: Hero = {
	name: 'tony',
	age: 45,
	codeName: 'Iron man',
};

// const { age, name, power = 'No tine poder' } = person;

// console.log({ age, name, power });

interface CreateHeroArgs {
	name: string;
	age: number;
	codeName: string;
	power?: string;
}

const createHero = ({ name, age, codeName, power }: CreateHeroArgs) => ({
	id: 121212,
	name: name,
	age: age,
	codeName: codeName,
	power: power ?? 'no tiene poder',
});

console.log(createHero(person));
