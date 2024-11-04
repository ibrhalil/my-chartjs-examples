import { faker } from "@faker-js/faker";

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
