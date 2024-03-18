// Amalyot 2

// Birinchi topshiriq

/*
1) Promptdan ism va yosh kiritiladi kiritilgan yosh orqali 
tug'ilgan yil (1998) , yashagan oy hafta kun soat 
daqiqa va sekundni topib bering
*/

// const person = {};
// let
//   ism = prompt('ismimgizni kiriting'),
//   yosh = +prompt('yoshingizni kiriting');

// person.ism = ism;
// person.yosh = yosh;

// alert(`${ism} siz ${2024 - yosh} - yil tug'ilgansiz ${yosh * 12} oy ${yosh * 365} kun ${yosh * 365 * 24} soat ${yosh * 365 * 24 * 60} daqiqa ${yosh * 365 * 24 * 60 * 60} sekund  ${yosh * 365 * 24 * 60 * 60 * 1000} millisekund yashagansiz   `)


// ikkinchi topshiriq

/*
2) Ismlar arrayi ichidan promptdan ro'ralayotgan ism bo'lsa
ha bunday ism bor agar yo'q bo'lsa afsus bunday ism yo'q degan 
yozuv chiqarilishi kerak 
*/

// birinchi usul

// const arr = ['Asror', 'Guli', 'Abror', 'Baxtiyor', 'Sanam', 'Shahzod'];

// const kimKerak = prompt('Kim kerak');
//  let i = false;

// arr.forEach(item => {
//   if (item.toLowerCase() == kimKerak.toLowerCase().trim()) {
//     return i = true;
//   }
// })

// if (i) {
//   console.log('Ha bor');
// }else{
//   console.log("Yo'q");
// }


// ikkinchi usul

// const ismlar = ['Ahror', 'Abror', 'Shahzod', 'Chori', 'Sardor'];
// const kimKerak = prompt('Kim kerak');

// const foundUsers = ismlar.map(user => (     /* filter qaytarib beradi */
//   user = user.toLowerCase()
// ));
// let newIsmlar = []
// newIsmlar = [...foundUsers];
// if(newIsmlar.includes(kimKerak.toLowerCase())){
//   console.log('ha bor');
// }else{
//   console.log('yo\'q');
// }


/* uchinchi topshiriq 

3) Array ichidagi ismlarga bek qo'shimchasini qo'shib consolga chiqaring

*/

const ismlar = ['Ahror', 'Abror', 'Shahzod', 'Chori', 'Sardor'];

for (let i = 0 ; i<ismlar.length ; i++){
  console.log(`${ismlar[i].charAt() + ismlar[i].slice(1)}bek`);
}



