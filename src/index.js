document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", handleSubmit)
  const toDos = document.getElementById("to-dos")
  // const sortButton = document.getElementById("sortButton")
  
  const toDoObjects = []

  function handleSubmit(e) {
    e.preventDefault()
    const description = e.target["new-task-description"].value
    const priority = e.target.priority.value
    //document.getElementById('list').innerHTML += (`<li>${userToDo}</li>`)
    addToDo(description, priority)
    e.target.reset()
    console.log(description)
  } 

  const priorityColor = {
    green: 0, yellow: 1, red: 2
  }

  function addToDo(description, priority) {
    toDoObject = {description: description, priority: priority, priorityNumber: priorityColor[priority]}
    console.log(toDoObject)
    toDoObjects.push(toDoObject)
    renderToDos()
  }

  function renderToDos(){
    toDos.innerHTML = ""
    toDoObjects.forEach(toDo => {
      toDos.innerHTML += `<li class=${toDo.priority} data-priority=${priorityColor[toDo.priority]}>${toDo.description}<button>Delete</button></li>`
      console.log(toDo)
    })
  }
    
  //   const newToDo = document.createElement('li')
  //   //newToDo.innerText = userToDo 
  //   const button = document.createElement('button')
  //   button.innerText = "x"
  //   const list = document.getElementById('list')
  //   list.innerHTML +=  `<li data-todo=${userToDo}>${userToDo} - priority ${priority}<button id="button">x</button> </li>`
    
  //   button.addEventListener('click', function() {
  //     newToDo.remove()
  //   })
  //   tasks.appendChild(newToDo)
  //   newToDo.appendChild(button)
  // }
  toDos.addEventListener("click", handleClick)


  function handleClick(e){
    if (e.target.tagName == "BUTTON"){
      e.target.closest("li").remove()
    }
  }

  document.getElementById("sortButton").addEventListener("click", function(){
    toDoObjects.sort(function(a, b){
      return a.priorityNumber - b.priorityNumber
    })
    rendertoDos()
  })


// 
  // const item = document.querySelector('li')
  // item.addEventListener('click', function(){
  // item.remove()
  // })
// sortButton.addEventListener('click', sort)
// form.addEventListener('submit', handleSubmit)
});
