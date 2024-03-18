// javascript darslari 49 , 50 , 51 dars

/* --------- Event click eventi       ------------------------------ */

const ul = document.querySelector('.mavzu-49 ul');
const clickBtn = document.querySelector('.click-btn');
const items = document.querySelectorAll('li');
let classes = []

/*propagation -  bolalash , tarqalish , kengayish*/

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = 'line-through';
    // e.target.style.opacity = '0.7';
    // e.target.remove();
    // e.stopPropagation()            // STOPPROPAGATION
  })

  // SPRED OPERATORI
  classes = [...item.classList];
  console.log(classes);
})
console.log(classes);


clickBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Lorem ipsum';
  ul.prepend(li);

  // REST OPERATORI
  li.classList.add(...classes)
})



// Event bubbling eventlarning ko'tarilishi

ul.addEventListener('click', (e) => {
  if (e.target.nodeName == 'LI') {
    e.target.remove()
  }
  console.log(e.target);
})















