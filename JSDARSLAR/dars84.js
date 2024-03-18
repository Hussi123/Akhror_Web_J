// javascript darslari 84 dars

/* ---------------------- javascript Throw-Errors    ---------------------------------- */

const API = 'https://restcountries.com/v3.1/all';
const src = 'todos json/todos.json';

// async & await
const getData = async (resourse) => {
  const request = await fetch(resourse);
  console.log(request.status);
  if(request.status !=200){
    throw new Error('Qandaydir hatolik yuz berdi');
  }
  const data = await request.json()
  return data;
}

getData(src)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

  /*
  
   throw new Error('Qandaydir hatolik yuz berdi'); - bu throw new Error ;
   o'zimiz hohlagan vaqtda hatolikni yuzaga keltirib chiqarishimiz uchun kerak bo'ladi 
  
  */ 
