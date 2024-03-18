// javascript darslari 66  dars

/* ---------------------- javascript destructuring  ---------------------------------- */


// const mevalar = [ 'olma🍎' , 'gilos🍒' , 'uzum🍇' , 'nok🍐']
// const [olma , gilos , uzum , nok] = [ 'olma🍎' , 'gilos🍒' , 'uzum🍇' , 'nok🍐']

// const [olma , gilos , ...boshqa] = [ 'olma🍎' , 'gilos🍒' , 'uzum🍇' , 'nok🍐']
// console.log(olma , gilos , boshqa);
// rest opratori => destructurining qolgan ma'lumotlarini birlashtirib beradi




/*
const olma = mevalar[0];
const gilos = mevalar[1];
const uzum = mevalar[2];
const nok = mevalar[3];
*/ 



/* ---------------------- tepadi vazifalar objectda qanday bo'ladi ?????????????   ---------------------------------- */

/*
const personObj ={
    name : 'Husniddin',
    age : 23,
    job : 'developer'
}
*/


/*  const {}  -  bu gulli qavslarning ichida yoziladigan ma'lumotlar objectning keylariga aynan teng bo'lishi zarur */



/*
const name = personObj.name
const age = personObj.age
const job = personObj.job
*/



/*
const {name : ism , age , job ,from = 'Uzbekistan' } ={
    name : 'Husniddin',
    age : 23,
    job : 'developer',
    from : 'Korea'

}
console.log(ism , age , job , from);
*/

const {name : ism , ...qolganMalumot } ={
    name : 'Husniddin',
    age : 23,
    job : 'developer',
    from : 'Korea'
}
console.log(ism ,qolganMalumot);









/* ----------------------   ---------------------------------- */





/* ----------------------  ---------------------------------- */

/* ----------------------  ----------------------------------------*/


/* ---------------------  ----------------------------------------*/


/* -----------------------  ---------------------------------------- */





