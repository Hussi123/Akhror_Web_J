// javascript darslari 64  dars


/* ---------------------- LocalStorage ---------------------------------- */

/*

    JSON.stringify()  -   LocalStorage ga  objectlarni joylashda ishlatiladi
    JSON.parse()      -   LocalStoragedan ma'lumotlarni olishda  ishlatiladi

*/


/* ---------------------- setItem ----------------------------------------*/

const ism = 'Bahodir'
let age = 23

localStorage.setItem('name' , 'Ahror')
localStorage.setItem('ism' , ism  )
localStorage.setItem('age' , age )


/*  LocalStorada array  */
const names = ['Saedor' , 'Ahror' , 'Doniyor']
localStorage.setItem('names' , JSON.stringify(names))


/* --------------------- getItem ----------------------------------------*/

const getName = localStorage.getItem('name');
const getAge = localStorage.getItem('age')
const getIsm = localStorage.getItem('ism');
console.log(getName);
console.log(getAge);
console.log(getIsm);


/*  LocalStorada array  */
const ismlar = JSON.parse(localStorage.getItem('names'));
console.log(ismlar);

/* ----------------------- Clear ---------------------------------------- */

localStorage.clear()



/*   kichkina amalyot                        */ 

const localStorageNames = JSON.parse(localStorage.getItem('names')) ? JSON.parse(localStorage.getItem('names')) : [];
console.log(localStorageNames);





