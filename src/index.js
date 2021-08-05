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
    list.innerHTML += `<li>${userToDo} <button id="button">x</button> </li>` 
  }

  

  // function handleButton(e) {
  //  document.querySelector('li').remove()
  // }


document.querySelector('form').addEventListener('submit', handleSubmit)

document.getElementById("button").addEventListener('click', function() {
  document.querySelector('li').remove()
 })
 
// document.getElementById("button").addEventListener('click', handleButton)


});
