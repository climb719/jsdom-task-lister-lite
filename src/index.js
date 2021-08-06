document.addEventListener("DOMContentLoaded", () => {

  //const form = document.getElementById("new-task-description")
  const tasks = document.getElementById("tasks")

  function handleSubmit(e) {
    e.preventDefault()
    const userToDo = e.target["new-task-description"].value
    //document.getElementById('list').innerHTML += (`<li>${userToDo}</li>`)
    addToDo(userToDo)
    e.target.reset()
    console.log(userToDo)
  } 

  function addToDo(userToDo) {
    const newToDo = document.createElement('li')
    newToDo.innerText = userToDo 
    //const list = document.getElementById('list')
    // list.innerHTML +=  `<li data-todo=${userToDo}>${userToDo} <button id="button">x</button> </li>`
    const button = document.createElement('button')
    button.innerText = "x"
    button.addEventListener('click', function() {
      newToDo.remove()
    })
    tasks.appendChild(newToDo)
    newToDo.appendChild(button)
  }
// 
  // const item = document.querySelector('li')
  // item.addEventListener('click', function(){
  // item.remove()
  // })
document.querySelector("form").addEventListener('submit', handleSubmit)
});
