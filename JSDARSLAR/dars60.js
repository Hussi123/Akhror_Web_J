// javascript darslari 60  dars

/* --------- Hight Order Function filter , map , reduce , find , sort   ------------------------------ */

const movies = [
  { name: 'Avatar 3D', year: 2008, rating: 9 },
  { name: 'Titanik 4D', year: 1997, rating: 7 },
  { name: 'Forsaj 9 3D', year: 2020, rating: 4 },
  { name: 'Avengers', year: 2012, rating: 6 },
]


/*Foreach*/
const newMovies = [];
movies.forEach(item => {
  if (item.year >= 2010) {
    newMovies.push(item)
  }
})

console.log(newMovies);


/*filter - filter methodi arrayga o'zgarish kiritmaydi */

const filterMovies = movies.filter(movie => movie.year < 2010)
console.log(filterMovies);

const newMoviesByFilter = movies.filter(movie => {
  return  movie.year >= 2010
})

// newMovies = [...newMoviesByFilter]

console.log(newMoviesByFilter);













