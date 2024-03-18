// javascript darslari 40 dars

/* --------- Arraylar ichida Objectlar  ------------------------------- */


const user = {
  name: 'Husniddin',
  age: 22,
  email: 'husniddin@gmail.com',
  location: 'Surxondaryo',
  langs: ['uzbek', 'russian', 'english'],
  login: () => {
    console.log('Siz bu saytdagi sahifangizga kirdingiz');
  },
  logout: () => {
    console.log('siz bu saytdagi sahifangizni tark etdingiz');
  },
  speak: function () {
    this.langs.forEach((lang) => {
      console.log('I can speak ' + lang);
    })
  },
  movies: [
    { name: 'Avatar', likes: 485 },
    { name: 'Usmon', likes: 850 },
    { name: 'Taqdirlar', likes: 454 },
    { name: 'Titanik', likes: 541 },
    { name: 'Tinchlik ortida', likes: 485 },
    { name: 'Garry Poter', likes: 475 },
  ],
  watchMovies :function () {
    this.movies.forEach(function(movie){
      console.log(movie.name + ' 🎥' + ' , ' + movie.likes + ' 💖');
    })
  }
}

user.login();
user.logout();
user.speak();
user.watchMovies();

/* --------------------------- arrayning ichida abjectlar ---------------------------- */




// movies.forEach((movie) => {
//   console.log(movie.name + ' 🎥' + ' , ' + movie.likes + ' 💖');
// })


/*

*/







