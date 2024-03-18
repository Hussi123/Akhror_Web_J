const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')

let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];

// Show error 
function showMessage(where, message) {
  document.getElementById(`${where}`).textContent = `${message}`
  setTimeout(() => {
    document.getElementById(`${where}`).textContent = ''
  }, 3000)
}

// Get todos
formCreate.addEventListener('submit', (e) => {
  e.preventDefault()
  const todoText = formCreate['input-create'].value.trim();

  if (todoText.length) {
    todos.push({ text: todoText, time: '16.03.2024', completed: false })
  } else {
    showMessage('message-create', 'Please enter some text')
  }

})




