// javascript darslari 67  dars

/* ---------------------- javascript Data   ---------------------------------- */


const now = new Date();

const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
const month = now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth();
const year = now.getFullYear();


console.log('day : ', today);
console.log('month : ', month);
console.log('year : ', year);


/* ---------------------- time & Hours   --------------------------------- */

const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()



console.log('hour : ', hour);
console.log('minutes : ', minutes);
console.log('seconds : ', seconds);

console.log(`${hour} : ${minutes} : ${seconds}`);

/* ----------------------  ---------------------------------- */
/* ----------------------  ---------------------------------- */
/* ----------------------  -----------------------------------*/
/* ----------------------  -----------------------------------*/
/* ----------------------  ---------------------------------- */





