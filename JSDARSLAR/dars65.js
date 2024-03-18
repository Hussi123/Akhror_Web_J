// javascript darslari 65  dars

/* ---------------------- setTimeout && setInterval  ---------------------------------- */


/* ---------------------- setTimeout  ---------------------------------- */

// setTimeout(function , times);

setTimeout(function () { }, 1000);
setTimeout(() => { }, 1000);
setTimeout(sayHi, 3000)

function sayHi() {
    console.log('assalomu alaykum');
};



/* ---------------------- setInterval  ---------------------------------- */


setInterval(function () { }, 1000);
setInterval(() => { }, 1000);
const timerInterval = setInterval(secundomer, 1000);


let a = 0;

function secundomer() {
    a++;
    console.log(a);
}

setTimeout(stopInterval , 10000)


function stopInterval() {
    clearInterval(timerInterval);
}












/* ---------------------- setTimeout ---------------------------------- */

/* ---------------------- setItem ----------------------------------------*/


/* --------------------- getItem ----------------------------------------*/


/* ----------------------- Clear ---------------------------------------- */





