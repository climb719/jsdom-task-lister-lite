document.addEventListener("DOMContentLoaded", () => {
   
  function handleSubmit(e) {
    e.preventDefault()
    const userToDo = document.querySelector('form')["new-task-description"].value
    //document.getElementById('list').innerHTML += (`<li>${userToDo}</li>`)
    addToDo(`${userToDo}`)

    console.log(`${userToDo}`)
  } 


  function addToDo(userToDo) {
    let list = document.getElementById('list')
   // list.innerHTML += document.querySelector('form')["new-task-description"].value
    list.innerHTML += `<li>${userToDo}</li>` 
  }
  
document.querySelector('form').addEventListener('submit', handleSubmit)

});
