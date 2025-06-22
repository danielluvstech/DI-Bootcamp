import { people } from './data.js';

function calculateAgeAvrg(arrayPeople) {
    const totalAge = arrayPeople.reduce((sum, person) => sum + person.age, 0);
    const ageAverage = totalAge / arrayPeople.length;
    console.log(`The average age is: ${ageAverage}`);
}

calculateAgeAvrg(people); // Output: The average age is 31.75