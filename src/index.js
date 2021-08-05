document.addEventListener("DOMContentLoaded", () => {
   
  function handleSubmit(e) {
    e.preventDefault()
    const userToDo = document.querySelector('form')["new-task-description"].value
    //document.getElementById('list').innerHTML += (`<li>${userToDo}</li>`)
    addToDo(`${userToDo}`)
    document.querySelector('form').reset()
    console.log(`${userToDo}`)
  } 


  function addToDo(userToDo) {
    let list = document.getElementById('list')
   // list.innerHTML += document.querySelector('form')["new-task-description"].value
    list.innerHTML += `<li>${userToDo} <button type="button">x</button> </li>` 
  }
  
document.querySelector('form').addEventListener('submit', handleSubmit)

});
