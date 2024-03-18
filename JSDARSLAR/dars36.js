// javascript darslari 36 dars

/* Foreach */

/*fereach metodi o'ziga 3 argumentni oladi birinchisi itemning o'zi ikkinchisi elementning indexsini uchinchisi esa arrayning o'zini qaytaradi*/ 

const ismlar = ['Ahror', 'sobir', 'diyor', 'jasur']
let newIsmlar = [];

ismlar.forEach((item, index , arr ,) => {
  let newIsm = item.charAt().toUpperCase() + item.slice(1).toLowerCase() + 'bek'
  newIsmlar.push(newIsm)
  console.log(newIsm, index);
})
console.log(newIsmlar);


/*

*/







