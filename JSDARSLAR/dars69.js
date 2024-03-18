// javascript darslari 69 dars

/* ---------------------- javascript shallaw copy && deep copy  ---------------------------------- */


/* ---------------------- shallaw copy - sayoz nusxalash  ---------------------------------- */
/* ---------------------- deep copy - sayoz nusxalash  ---------------------------------- */


/* ---------------------- primitive ---------------------------------- */
let a = 5;
let b = a;


console.log('a : ', a);
console.log('b : ', b);


/* ---------------------- reference ---------------------------------- */

const person = {
  name: 'Akhror',
  age: 23
}

/* oddiy nushalash bu usulda nushalangan malumotlar keyinchalik yangi object o'zgarganda birinchisiga ham tasir qiladi */
const newPerson = person;

newPerson.name = 'Doniyor';
newPerson.age = 25;


/*Spred operatori yordamida nusxalash */
const newPersonBySpred = { ...person }

newPersonBySpred.name = 'Jasur';
newPersonBySpred.age = 7;


console.log('person : ', person);
console.log('newPerson : ', newPerson);
console.log('newPersonBySpred : ', newPersonBySpred);


/*

rest hamda spred operatorlani bir biridan ajratish 
[...smth] = [arr]   ---- 3 ta nuqta tenglikning chap tomonida kelsa bu rest operatori hisoblanadi
[arr] = [...smth]   ---- 3 ta nuqta tenglikning o'ng tomonida kelsa bu spred operatori hisoblanadi

*/ 




















