// javascript darslari 26 dars

// Block Scope


let age = 24 ;  // global scope

if(true){
  // Local Scope
  let age = 26; 
  let ism = 'Husniddin'
  console.log("if elsening ichidagi age " , age , ism) ;
}

console.log('Global scopdagi age ' , age , ism);

