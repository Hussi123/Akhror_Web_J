// javascript darslari 63  dars


//   TERNARY OPERATORLARI -  uchlik operatorlari

const age = prompt(`yoshingiz nechida`, 19)

/*
 
  if (age > 18 ){
    alert('siz 18 yoshdan kattasiz');
  }
  else (
    alert('siz 18 yoshdan kichchiksiz');
  )
 
*/

// age < 18
//   ? alert('siz 18 yoshdan kattasiz')
//   : alert('siz 18 yoshdan kichkinsiz')



// armiya yoshi 18 / 28


age < 18
  ? alert(`siz armiya yoshidan ${18 - age} kichiksiz`)
  : age < 28
    ? alert('siz armiyaga borishingiz mumkin')
    : alert(`siz armiya yoshidan ${age - 28} kattasiz`)




