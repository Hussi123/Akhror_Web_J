// javascript darslari 37 dars

/* --------- Object ------------------------------- */

// ------ 38 dars objectga methodlar qo'shish ------- 39 this calit so'zi

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
      console.log('I can speak '  + lang);
    })
  },
}

user.login();
user.logout();
user.speak();


/*

*/







