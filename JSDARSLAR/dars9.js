// javascript darslari 9 dars


// String
console.log("Hello world !");

let email = 'abdullayev@gmail.com';
console.log(email);
 

// string concatenation
let firstName = ' Husniddin ';
let lastName = ' Abdullayev '

let fullName = firstName + ' ' + lastName;
console.log(fullName);


// getting characters
console.log(fullName[2]);


// string length  => uzunlik
console.log(fullName.length );


// string methods => funktsiyaga o'xshash ko'd barjaradi
// methodlar oxirida har doim () bo'ladi
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


// indexOf methodi bu elementning indexsini qaytardi
let index = email.indexOf('@');
console.log(index);


// ko'p ishlatiladigan string methodlari

// lastindexOf()
console.log(email.indexOf('l'));
console.log(email.lastIndexOf('l'));


// slice()
console.log(email.slice(2 , 7));  // ikkinchi indexsda turgan elementdan 7 gacha bo'lgan qismini olib beradi
console.log(email.slice(5));      // bu holatda beshinchi indexdan oxirigacha bo'lgan elementlarni olib beradi


// substr()
console.log(email.substr(4, 10)); // bu substrning slicedan farqi 4 dan 10 gacha oraliqni emas 4 dan keyin 10 ta elementni kesib oladi


// substring()


// replace()
console.log(fullName.replace('l' , 'b')); // stringdagi birinchi kelgan l harfini b harfiga o'zgartirib beradi


// charAt()  =>  stringni har doim birinchi elementini olib beradi
console.log(fullName.charAt());


// trim() => trim stringning boshi va oxiridan bo'sh joylarni olib tashlaydi 
console.log(fullName.length);
console.log(fullName.trim().length);


// split()    =>  stringning elementlarini bitta arrayga birlashtirib qaytaradi
const result = fullName.split('');
console.log(result); 
console.log(typeof result);

// join()     =>  bu stringlarning emas arrayning methodi hisoblanadi va arrayning barcha elementlarini bitta stringga birlashtirib beradi
console.log(result.join(''),' => ' , typeof result.join(''));
