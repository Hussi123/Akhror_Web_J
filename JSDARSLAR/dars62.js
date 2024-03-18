// javascript darslari 62  dars

/* --------- Hight Order Function filter , map , reduce , find , sort   ------------------------------ */

/* Sort  */

const movies = [
  { name: 'Avatar 3D', year: 2008, rating: 9 },
  { name: 'Titanik 4D', year: 1997, rating: 7 },
  { name: 'Forsaj 9 3D', year: 2020, rating: 4 },
  { name: 'Avengers', year: 2012, rating: 6 },
];

const sortedMovies = movies.sort((a, b) => a.rating - b.rating)
console.log(sortedMovies)

// alphabetical
const names = ['ahror', 'sardor', 'doniyor', 'bobur']

const sortedNames = names.sort()
console.log(sortedNames);


// numbers
const numbers = [3, 1, 8, 12, 9, 7, 5]
const sortedNumbers = numbers.sort((a, b) => b - a)

console.log(sortedNumbers);
