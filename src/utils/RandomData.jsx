import { faker, fakerTR } from "@faker-js/faker";

export const randomCities = (size) => {
	const cities = [];
	for (let i = 0; i < size; i++) {
		cities.push(faker.location.city());
	}
	return cities;
};

export const randomInteger = (min = 0, max = 99) => {
	return faker.number.int({ min, max });
};

export const randomTrPeople = (size = 5) => {
	const people = [];
	for (let i = 0; i < size; i++) {
		people.push(
			`${fakerTR.person.firstName()} ${fakerTR.person.lastName()}`,
		);
	}
	return people;
};

export const randomTrAnimal = (size = 5) => {
	const animal = [];
	for (let i = 0; i < size; i++) {
		animal.push(`${fakerTR.animal.type()}`);
	}
	return animal;
};

export const randomTrBookType = (size = 5) => {
	const animal = [];
	for (let i = 0; i < size; i++) {
		animal.push(`${fakerTR.book.genre()}`);
	}
	return animal;
};
